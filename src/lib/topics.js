// 주제별 질문 — "무엇이 궁금한가"로 고르는 목록.
//
// 왜 이걸 만드는가:
//   서양 타로 앱은 스프레드 이름(Past·Present·Future)으로 고르게 한다. 타로를 아는 사람에게는
//   그게 맞지만, 처음 온 사람에게 '과거·현재·미래 3장 스프레드'는 고를 근거가 없는 이름이다.
//   국내 앱(점신·헬로우봇)은 전부 **궁금한 내용**으로 고르게 한다 — "상대는 나를 어떻게 볼까?"
//   질문을 고르면 스프레드는 앱이 알아서 정한다. 사용자는 카드 지식이 필요 없다.
//
//   실제 타로도 이 순서다. 손님이 고민을 말하면 리더가 "그럼 세 장 뽑을게요" 라고 정한다.
//   손님이 스프레드를 고르지 않는다.
//
// 여기에는 '구조'만 둔다. 글자(제목·분류 이름)는 언어 팩(i18n/ui/*.js 의 cats / topics)에 있다.
// 9개 국어를 지원하므로 글자가 여기 섞이면 언어를 바꿔도 한국어가 남는다.

// 분류 — 화면 위쪽 가로 스크롤 칩
export const CATEGORIES = ['love', 'crush', 'work', 'life']

// 질문 하나 = 어떤 분류에 속하고, 어떤 스프레드로 뽑을 것인가.
//
// 스프레드 고르는 기준:
//   love   (나 / 상대 / 사이)        → 두 사람이 나오는 질문
//   three  (과거 / 현재 / 미래)      → 흐름·방향을 묻는 질문
//   career (지금 / 막힌 것 / 뚫는 법) → 문제를 풀어야 하는 질문
//   yesno  (한 장으로 판정)          → 할까 말까
//   daily  (한 장)                   → 오늘 하루치 조언
export const TOPICS = [
  { id: 'loveNow',      cat: 'love',  spread: 'love' },
  { id: 'loveWhere',    cat: 'love',  spread: 'three' },
  { id: 'loveThem',     cat: 'love',  spread: 'love' },
  { id: 'loveGo',       cat: 'love',  spread: 'yesno' },

  { id: 'crushApproach', cat: 'crush', spread: 'yesno' },
  { id: 'crushHeart',    cat: 'crush', spread: 'career' },
  { id: 'crushAgain',    cat: 'crush', spread: 'yesno' },
  { id: 'crushLearn',    cat: 'crush', spread: 'three' },

  { id: 'workBlock',    cat: 'work',  spread: 'career' },
  { id: 'workMove',     cat: 'work',  spread: 'yesno' },
  { id: 'workMiss',     cat: 'work',  spread: 'three' },
  { id: 'workAhead',    cat: 'work',  spread: 'three' },

  { id: 'lifeMoney',    cat: 'life',  spread: 'career' },
  { id: 'lifeChoice',   cat: 'life',  spread: 'yesno' },
  { id: 'lifeFlow',     cat: 'life',  spread: 'three' },
  // '오늘 필요한 한마디'(lifeAdvice)는 뺐다. daily 스프레드를 쓰면 결과 머리말이
  // '오늘의 카드'로 나오는데, 그건 '오늘' 탭의 고정 카드 이름이다. 같은 이름의 화면이
  // 두 개가 되고 한쪽은 매번 바뀌니 사용자가 헷갈린다. 언어 팩의 문구는 남겨뒀다.
]

export const topicsIn = (cat) => TOPICS.filter((t) => t.cat === cat)

// 번역된 글자를 꺼낸다. 없으면 id 라도 돌려줘서 화면에 빈칸이 생기지 않게 한다.
export const catText = (ui, cat) => (ui.cats && ui.cats[cat]) || cat
export const topicText = (ui, id) => (ui.topics && ui.topics[id]) || id
