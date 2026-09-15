// 애드몹(AdMob) 광고 — 오복사주의 ads.js 를 그대로 가져와 이 앱에 맞게 정리했다.
// 웹 브라우저에서는 전부 아무 동작도 하지 않는다(no-op). 안드로이드 앱에서만 동작.
//
// ⚠️ 지금은 '구글 공식 테스트 광고 ID'다. 수익은 0원이지만 개발 중에 눌러도 계정이 정지되지 않는다.
//    실제 광고로 바꾸는 방법:
//      1) 애드몹 콘솔에서 이 앱(com.obok.arcana)을 새로 등록
//      2) 광고 단위 2개 생성 → 배너 / 전면
//      3) 아래 REAL_IDS 에 붙여넣고 AD_IDS 를 REAL_IDS 로 바꾼다
//      4) android/app/src/main/AndroidManifest.xml 의 App ID 도 실제 값으로 교체
//         (App ID 가 안 맞으면 앱이 시작하자마자 죽는다)

import { Capacitor } from '@capacitor/core'

const isNative = () => {
  try { return Capacitor.isNativePlatform() } catch { return false }
}

// 구글 공식 테스트 광고 단위 ID (안드로이드).
// 이건 눌러도 계정이 정지되지 않는다 — 개발·테스트에는 반드시 이쪽을 쓴다.
const TEST_IDS = {
  banner: 'ca-app-pub-3940256099942544/6300978111',
  interstitial: 'ca-app-pub-3940256099942544/1033173712',
}

// 애드몹에서 발급받은 실제 광고 단위 ID (오복사주와 같은 계정).
const REAL_IDS = {
  banner: 'ca-app-pub-9311950226943560/5913047437',
  interstitial: '',   // TODO: 전면광고 단위 만들고 채우기
}

// 어느 쪽을 쓸지는 **빌드가 정한다. 사람이 고르지 않는다.**
//
// 왜 이렇게 하는가: 실제 광고가 붙은 테스트 APK 를 폰에 깔고 이것저것 누르다 보면
// 자기 광고를 클릭하게 되고, 그건 애드몹 계정 정지 사유다. 그렇다고 "출시 직전에
// 손으로 바꾸자" 고 하면 언젠가 반드시 잊는다 — 잊는 쪽이 하필 출시본이면
// 광고가 테스트로 나가서 수익이 0 이 된다.
//
//   테스트 APK (android.yml)        → VITE_ADS 없음  → 테스트 광고
//   출시 AAB   (android-release.yml) → VITE_ADS=real → 실제 광고
//
// 실제 ID 가 아직 비어 있는 자리는 테스트 ID 로 떨어진다. 빈 문자열을 그대로 넘기면
// 그 광고만 조용히 안 뜨는데, 원인을 찾기가 매우 어렵다.
const useReal = import.meta.env.VITE_ADS === 'real'
const AD_IDS = {
  banner: (useReal && REAL_IDS.banner) || TEST_IDS.banner,
  interstitial: (useReal && REAL_IDS.interstitial) || TEST_IDS.interstitial,
}

// 전면광고 최소 간격. 결과를 볼 때마다 매번 띄우면 사용자가 질리고 구글 정책에도 걸린다.
const MIN_INTERSTITIAL_GAP_MS = 70 * 1000

let mod = null
let started = false
let interstitialReady = false
let lastInterstitialAt = 0

async function admob() {
  if (!mod) mod = await import('@capacitor-community/admob')
  return mod
}

// 앱 시작 시 1회: 초기화 → 하단 배너 → 첫 전면광고 미리 로드
export async function initAds() {
  if (!isNative() || started) return
  started = true
  try {
    const { AdMob } = await admob()
    await AdMob.initialize({})
    await wireBannerHeight()
    await showBanner()
    prepareInterstitial()
  } catch (e) { /* 광고 실패가 앱 동작을 막으면 안 된다 */ }
}

export async function showBanner() {
  if (!isNative()) return
  try {
    const { AdMob, BannerAdSize, BannerAdPosition } = await admob()
    await AdMob.showBanner({
      adId: AD_IDS.banner,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
    })
  } catch (e) {}
}

// 배너 실제 높이를 CSS 변수로 넘겨서, 하단 UI 가 광고에 가려지지 않게 한다
async function wireBannerHeight() {
  try {
    const { AdMob, BannerAdPluginEvents } = await admob()
    AdMob.addListener(BannerAdPluginEvents.SizeChanged, (info) => {
      const h = info && info.height ? Number(info.height) : 0
      document.documentElement.style.setProperty('--ad-banner-h', h > 0 ? `${h}px` : '0px')
    })
  } catch (e) {}
}

async function prepareInterstitial() {
  try {
    const { AdMob } = await admob()
    await AdMob.prepareInterstitial({ adId: AD_IDS.interstitial })
    interstitialReady = true
  } catch (e) { interstitialReady = false }
}

// 결과를 보여주기 직전의 전면광고.
// 웹이거나 · 아직 준비 안 됐거나 · 너무 자주면 그냥 통과한다. 절대 throw 하지 않는다
// (광고가 실패해도 결과는 반드시 보여줘야 한다).
export async function showInterstitialBeforeResult() {
  if (!isNative()) return
  if (Date.now() - lastInterstitialAt < MIN_INTERSTITIAL_GAP_MS) return
  try {
    const { AdMob } = await admob()
    if (!interstitialReady) await prepareInterstitial()
    if (!interstitialReady) return
    await AdMob.showInterstitial()
    lastInterstitialAt = Date.now()
    interstitialReady = false
    prepareInterstitial()
  } catch (e) {}
}
