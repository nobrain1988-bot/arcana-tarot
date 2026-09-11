// 스프레드 = 카드를 몇 장, 어떤 자리에 놓고 읽을 것인가
//
// 여기에는 '구조'만 둔다. 제목·설명·자리 이름 같은 글자는 언어 팩(src/i18n/ui/*.js)에 있다.
// 9개 국어를 지원하므로 글자가 여기 섞여 있으면 언어를 바꿔도 영어가 남는다.
//
// 언어 팩의 대응 위치: ui.spreads[스프레드id].title / .blurb / .pos[자리key].label / .lead

export const SPREADS = {
  daily:  { id: 'daily',  count: 1, positions: ['today'] },
  three:  { id: 'three',  count: 3, positions: ['past', 'present', 'future'] },
  yesno:  { id: 'yesno',  count: 1, positions: ['answer'] },
  love:   { id: 'love',   count: 3, positions: ['you', 'them', 'between'] },
  career: { id: 'career', count: 3, positions: ['now', 'block', 'move'] },
}

export const SPREAD_LIST = [SPREADS.daily, SPREADS.three, SPREADS.yesno, SPREADS.love, SPREADS.career]

// 질문을 먼저 받는 스프레드. 오늘의 카드·과거현재미래는 질문 없이 바로 뽑는다.
export const ASKS_QUESTION = new Set(['yesno', 'love', 'career'])

// 스프레드 하나의 번역된 글자를 꺼낸다. 없으면 빈 값이 아니라 id 라도 돌려줘서
// 화면에 빈칸이 생기지 않게 한다.
export function spreadText(ui, spread) {
  const s = (ui.spreads && ui.spreads[spread.id]) || {}
  return {
    title: s.title || spread.id,
    blurb: s.blurb || '',
    positions: spread.positions.map((key) => {
      const p = (s.pos && s.pos[key]) || {}
      return { key, label: p.label || key, lead: p.lead || '' }
    }),
  }
}
