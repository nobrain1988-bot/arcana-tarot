# 구글 플레이 등록정보 — Arcana

플레이 콘솔에 **그대로 복사해 붙여넣는** 원고다. 글자수 제한은 구글 기준이며 이미 맞춰 두었다.

작성일 2026-09-11 / 앱 ID `com.obok.arcana`

---

## 1. 기본 정보

| 항목 | 값 | 비고 |
|---|---|---|
| 앱 이름 | `Arcana: Daily Tarot Reading` | 27자 (제한 30자) |
| 기본 언어 | English (United States) | 전 세계 타겟 |
| 앱/게임 | 앱 | |
| 무료/유료 | 무료 | 인앱결제 없음 |
| 카테고리 | Lifestyle | Entertainment 도 가능 — 아래 2-1 참고 |
| 태그 | Tarot, Horoscope, Astrology | |
| 광고 포함 | **예** | 애드몹 배너·전면 |

### 2-1. 카테고리 선택에 관하여

`Lifestyle` 과 `Entertainment` 둘 다 통과한다. **Lifestyle 을 권한다** — 타로·운세 앱
상위권이 대부분 Lifestyle 에 몰려 있어 검색에서 같은 선반에 놓인다. Entertainment 는
게임성 앱과 경쟁하게 되어 묻히기 쉽다.

---

## 2. 짧은 설명 (Short description)

제한 80자 / 아래 원고 **78자**

```
Draw your daily tarot card. 78-card readings in 9 languages. No sign-up.
```

---

## 3. 전체 설명 (Full description)

제한 4000자 / 아래 원고 약 2,450자

```
Arcana is a complete tarot deck in your pocket — all 78 cards, drawn and read the traditional way.

No account. No subscription. No paywall in the middle of a reading.

■ ONE CARD, EVERY DAY
Your Daily Card is fixed for the day. Draw it in the morning, come back at night, and it is still your card — not a new random one. A day deserves one answer, not endless re-rolls.

■ FIVE CLASSIC SPREADS
• Daily Card — one card for today
• Past · Present · Future — the classic three-card spread
• Yes or No — a single card and the reasoning behind it
• Love Reading — You / The other / Between you
• Work & Money — where you are / what is blocking / how it opens

■ READINGS THAT ARE CALCULATED, NOT INVENTED
Most tarot apps pick a sentence at random. Arcana does not. Every reading is built from what was actually drawn: the card and its orientation, the position it landed in, how many Major Arcana appeared, how many cards are reversed, and the balance of the four elements across the spread. Yes-or-No answers come from the traditional polarity of each card, not a coin flip.

The interpretations follow the Rider-Waite tradition — the meanings that tarot readers have used for over a century.

■ NINE LANGUAGES, FULLY TRANSLATED
English, Spanish, Portuguese, Korean, Japanese, Russian, Turkish, French, German.

Not just the buttons — every one of the 78 cards is translated in both upright and reversed meanings. Card names follow each language's own grammar. The app detects your phone's language on first launch, and you can change it any time.

■ 78 CARDS, DRAWN BY HAND
Every card is original vector artwork in deep indigo and gold. Nothing is a photograph, nothing is scraped. The whole deck weighs only a few hundred kilobytes.

■ YOUR JOURNAL
Your last 60 readings are kept so you can look back. Your typed question is never saved.

■ THE FULL LIBRARY
Browse all 78 cards any time, filtered by suit — Major Arcana, Wands, Cups, Swords, Pentacles. Upright and reversed meanings for every one.

■ SHARE
Share a card as clean text for your story or your group chat. Only the card name and its keywords go out. Your question never does.

■ PRIVACY BY DESIGN
There is no server. There is no login. Your daily card, your journal, and your settings live on your phone and nowhere else. The question you type is never written to storage and never sent anywhere. You can erase everything from Settings at any time.

Works offline. Readings need no connection.

Arcana is made for reflection and entertainment. It is not a substitute for professional medical, legal, or financial advice.
```

---

## 4. ASO — 검색 최적화

구글 플레이는 **앱 이름 + 짧은 설명 + 전체 설명** 에서 키워드를 뽑는다.
위 원고에 아래 단어가 자연스럽게 들어가 있는지 확인했다.

| 키워드 | 원고 내 등장 |
|---|---|
| tarot | 이름 + 짧은 설명 + 본문 다수 |
| tarot reading / readings | 이름, 본문 |
| daily tarot / daily card | 짧은 설명, 본문 |
| tarot cards | 본문 |
| free tarot | "No account. No subscription." (free 는 가격 표시로도 잡힌다) |
| 78 cards | 짧은 설명, 본문 |
| Rider-Waite | 본문 — 진성 사용자가 검색하는 단어다 |
| yes or no tarot | 본문 |
| love tarot / career tarot | 본문 (Love Reading / Work & Money) |

**주의:** 키워드를 억지로 나열하면 구글이 스팸으로 판정해 순위를 내린다.
위 원고는 문장 안에 자연스럽게 녹여 두었다. 더 넣지 말 것.

---

## 5. 데이터 안전 (Data safety) — 설문 답안

플레이 콘솔 → 앱 콘텐츠 → 데이터 안전. **애드몹을 쓰므로 "수집함"이 된다.**
우리가 수집하는 게 아니라 광고 SDK 가 수집하는 것도 신고 대상이다.

| 질문 | 답 |
|---|---|
| 앱이 사용자 데이터를 수집·공유하나요? | **예** |
| 전송 중 암호화되나요? | **예** |
| 사용자가 데이터 삭제를 요청할 수 있나요? | **예** (앱 내 설정 → 저장된 데이터 삭제) |

**데이터 유형 — 딱 하나만 해당된다:**

| 항목 | 값 |
|---|---|
| 데이터 유형 | 기기 또는 기타 ID (Device or other IDs) → **광고 ID** |
| 수집됨 | 예 |
| 공유됨 | 예 (구글 애드몹) |
| 목적 | **광고 또는 마케팅** |
| 앱 기능에 필수인가 | 아니요 (선택사항) |
| 사용자가 수집을 거부할 수 있나 | 예 — 안드로이드 설정에서 광고 ID 삭제 가능 |

**아래는 전부 "아니요" 로 둔다** (실제로 수집하지 않는다):

- 위치 · 개인정보(이름·이메일·주소) · 금융정보 · 건강정보
- 메시지 · 사진/동영상 · 오디오 · 파일 · 연락처 · 캘린더
- 앱 활동, 웹 검색기록, 설치된 앱 목록
- 사용자가 입력한 **질문 텍스트** — 저장도 전송도 하지 않으므로 신고 대상 아님

> 애드몹의 데이터 안전 안내는 구글이 가끔 바꾼다.
> 제출 직전에 애드몹 콘솔 공지를 한 번 확인할 것.

---

## 6. 콘텐츠 등급 (Content rating) 설문

IARC 설문. 정직하게 답하면 된다. 예상 등급 **만 3세 이상 / Everyone**.

| 질문 유형 | 답 | 근거 |
|---|---|---|
| 폭력·성적 내용·욕설·약물 | 모두 아니요 | 해당 없음 |
| 도박 (실제 돈) | 아니요 | 결제 자체가 없다 |
| 사용자 간 소통 기능 | 아니요 | 서버·채팅 없음 |
| 위치 공유 | 아니요 | |
| 개인정보 공유 | 아니요 | |
| **점술·초자연적 주제** | **예** | 타로다. 숨기면 나중에 등급 재조정된다 |
| 디지털 구매 | 아니요 | |

점술 항목에 "예" 해도 보통 전체이용가가 나온다. **숨기지 말 것** — 구글이 나중에
발견하면 등급이 강제 조정되고 노출이 줄어든다.

---

## 7. 그래픽 자료 — 필요한 것

| 항목 | 규격 | 상태 |
|---|---|---|
| 앱 아이콘 | 512 × 512 PNG | ✅ `assets/icon.png` (1024) 를 512로 줄여 제출 |
| 그래픽 이미지 (Feature graphic) | 1024 × 500 PNG | ❌ 아직 없음 |
| 휴대전화 스크린샷 | 최소 2장, 16:9 또는 9:16 | ❌ 아직 없음 |
| 태블릿 스크린샷 | 선택 | 생략 가능 |

**스크린샷 추천 구성 (5장):**

1. Daily Card 결과 화면 — 카드 그림이 크게 보이는 것
2. Past · Present · Future 3장 펼친 화면
3. Yes or No 결과
4. Library (78장 목록)
5. 언어 설정 화면 — "9 languages" 를 눈으로 보여주는 것이 전환율에 크게 기여한다

---

## 8. 기타 등록 항목

| 항목 | 값 |
|---|---|
| 개인정보처리방침 URL | `public/privacy.html` 을 올린 주소 (아래 RELEASE.md 참고) |
| 앱 카테고리 | Lifestyle |
| 이메일 | leejiwon44@nate.com |
| 웹사이트 | 선택 — 없으면 비워도 된다 |
| 대상 연령층 | 13세 이상 |
| 광고 포함 | 예 |
| 국가 | 전체 (한국 포함) — 글로벌 앱이다 |
