// 배경에 아주 천천히 깜빡이는 별.
//
// 왜 넣는가: 타로 앱은 '분위기'가 곧 신뢰도다. 배경이 완전히 정지해 있으면
// 화면이 죽어 보이고, 카드 연출만 요란해서 따로 논다.
// 여기가 은은하게 살아 있으면 앱 전체가 한 덩어리로 느껴진다.
//
// 성능: opacity 만 애니메이션한다(레이아웃·페인트를 다시 하지 않는다).
// 폰에서 60fps 를 지키려면 transform/opacity 밖으로 나가면 안 된다.

import { useMemo } from 'react'

const COUNT = 44

// 매번 다른 자리에 뜨면 화면을 옮길 때마다 배경이 튄다.
// 고정 시드로 만들어 항상 같은 별자리가 되게 한다.
function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

export default function Ambience() {
  const stars = useMemo(() => {
    const rnd = seeded(20260914)
    return Array.from({ length: COUNT }, () => ({
      left: rnd() * 100,
      top: rnd() * 100,
      size: 1 + rnd() * 2.2,
      delay: rnd() * 7,
      dur: 4.5 + rnd() * 5,
      dim: 0.18 + rnd() * 0.5,
    }))
  }, [])

  return (
    <div className="ambience" aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
            '--dim': s.dim,
          }}
        />
      ))}
    </div>
  )
}
