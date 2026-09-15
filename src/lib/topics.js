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

// 분류 — 화면 위쪽 가로 스크롤 칩. 'all' 은 전부 보여준다.
export const CATEGORIES = ['all', 'love', 'crush', 'work', 'life']

// 분류마다 붙는 그림문자. 언어와 무관하므로 코드에 둔다 — 9개 언어 파일에
// 같은 이모지를 아홉 번 적어 넣을 이유가 없다.
export const CAT_EMOJI = {
  all: '🔮', love: '💕', crush: '💔', work: '✏️', life: '🍀',
}

// 질문 하나 = 어떤 분류에 속하고, 어떤 스프레드로 뽑을 것인가.
//
// **가장 중요한 규칙: 질문이 묻는 것과 카드 자리가 같아야 한다.**
// "내가 놓치고 있는 건?" 을 물었는데 '과거 / 현재 / 미래' 로 답하면, 카드 뜻이
// 아무리 정확해도 그 사람이 물은 것에 대한 답이 아니다. 실제로 시간과 상관없는
// 질문 여섯 개를 three 로 보내놓고 있었고, 그래서 답이 엉뚱하게 읽혔다.
//
//   love     (나 / 상대 / 사이)           → 두 사람이 나오는 질문
//   three    (과거 / 현재 / 미래)         → 흐름·방향, 시간이 걸린 질문만
//   career   (지금 / 막힌 것 / 뚫는 법)   → 왜 안 되는지 원인을 찾는 질문
//   outcome  (상황 / 행동 / 결과)         → 뭘 하면 어떻게 되는지 묻는 질문
//   yesno    (한 장으로 판정)             → 할까 말까
//   hidden   (보이는 / 가려진 / 알 것)    → 못 보고 있는 것을 묻는 질문
//   strength (가진 / 모자란 / 쓸 곳)      → 내 자원을 묻는 질문
//   residue  (있던 / 남은 / 배울 것)      → 끝난 일이 남긴 것을 묻는 질문
//   priority (쏠린 / 중요한 / 할 것)      → 우선순위를 묻는 질문
//
// 한 분류 안에서 같은 스프레드가 몰리지 않게도 섞었다. 아홉 줄이 전부 '예/아니오'면
// 목록만 길지 실제로는 한 가지 리딩을 아홉 번 하는 셈이다.
//
// card 는 목록에 띄울 대표 그림이다. 실제로 뽑히는 카드와는 아무 상관이 없다 —
// 순전히 그 질문의 분위기를 한눈에 주기 위한 것이다.
export const TOPICS = [
  // ── 연애: 이미 관계가 있는 상태 ──────────────────────────
  { id: 'loveNow',      cat: 'love',  spread: 'love',    card: 'c02' },  // 컵 2 — 두 사람
  { id: 'loveWhere',    cat: 'love',  spread: 'three',   card: 'm10' },  // 수레바퀴 — 흐름
  { id: 'loveThem',     cat: 'love',  spread: 'love',    card: 'm02' },  // 여사제 — 드러나지 않은 속
  { id: 'loveGo',       cat: 'love',  spread: 'yesno',   card: 'm06' },  // 연인 — 선택
  { id: 'loveNeed',     cat: 'love',  spread: 'outcome', card: 'c10' },  // 컵 10 — 채워진 관계
  { id: 'loveMiss',     cat: 'love',  spread: 'hidden',  card: 'm18' },  // 달 — 안 보이는 것
  { id: 'loveClash',    cat: 'love',  spread: 'career',  card: 's02' },  // 소드 2 — 교착
  { id: 'loveHonest',   cat: 'love',  spread: 'yesno',   card: 's01' },  // 소드 에이스 — 진실
  { id: 'loveLast',     cat: 'love',  spread: 'three',   card: 'w04' },  // 완드 4 — 오래 가는 결합

  // ── 짝사랑·재회: 아직 아니거나 이미 끝난 관계 ────────────
  { id: 'crushApproach', cat: 'crush', spread: 'yesno',   card: 'w01' }, // 완드 에이스 — 첫 움직임
  // '이 마음 어떻게 해야 하나요' 는 막힌 곳을 짚는 질문이 아니라
  // 무엇을 하면 어떻게 되는지를 묻는 질문이다 → 결과 자리가 있는 쪽으로.
  { id: 'crushHeart',    cat: 'crush', spread: 'outcome', card: 'c08' }, // 컵 8 — 떠남과 남음
  { id: 'crushAgain',    cat: 'crush', spread: 'yesno',   card: 'm20' }, // 심판 — 다시 부름
  { id: 'crushLearn',    cat: 'crush', spread: 'residue', card: 'c06' }, // 컵 6 — 지나간 것
  { id: 'crushThink',    cat: 'crush', spread: 'love',    card: 'c07' }, // 컵 7 — 상상과 실제
  { id: 'crushConfess',  cat: 'crush', spread: 'outcome', card: 'w02' }, // 완드 2 — 결심 직전
  { id: 'crushLetGo',    cat: 'crush', spread: 'yesno',   card: 's06' }, // 소드 6 — 떠나기
  { id: 'crushSilence',  cat: 'crush', spread: 'career',  card: 'c04' }, // 컵 4 — 식은 자리
  { id: 'crushSettle',   cat: 'crush', spread: 'outcome', card: 's04' }, // 소드 4 — 쉼과 정리

  // ── 일·공부 ────────────────────────────────────────────
  { id: 'workBlock',    cat: 'work',  spread: 'career',  card: 's08' },  // 소드 8 — 묶임
  { id: 'workMove',     cat: 'work',  spread: 'yesno',   card: 'w08' },  // 완드 8 — 빠른 이동
  { id: 'workMiss',     cat: 'work',  spread: 'hidden',  card: 'm09' },  // 은둔자 — 들여다보기
  // '어떻게 풀릴까요' 는 과거를 볼 필요가 없다. 지금 → 할 일 → 결과가 맞다.
  { id: 'workAhead',    cat: 'work',  spread: 'outcome', card: 'p03' },  // 펜타클 3 — 일이 되어감
  { id: 'workTalent',   cat: 'work',  spread: 'strength',card: 'm01' },  // 마법사 — 가진 재능
  { id: 'workStay',     cat: 'work',  spread: 'yesno',   card: 'p04' },  // 펜타클 4 — 붙잡고 있기
  { id: 'workPeople',   cat: 'work',  spread: 'love',    card: 's05' },  // 소드 5 — 사람 사이 마찰
  // '뭘 보완해야 하나요' 는 막힌 것을 찾는 질문이 아니라 모자란 것을 찾는 질문이다.
  { id: 'workExam',     cat: 'work',  spread: 'strength',card: 'p08' },  // 펜타클 8 — 갈고닦기
  { id: 'workLearn',    cat: 'work',  spread: 'yesno',   card: 'm05' },  // 교황 — 배움

  // ── 돈·선택 ────────────────────────────────────────────
  { id: 'lifeMoney',    cat: 'life',  spread: 'career',  card: 'p01' },  // 펜타클 에이스 — 돈
  { id: 'lifeChoice',   cat: 'life',  spread: 'yesno',   card: 'm14' },  // 절제 — 저울질
  { id: 'lifeFlow',     cat: 'life',  spread: 'three',   card: 'm17' },  // 별 — 흐름
  { id: 'lifeSpend',    cat: 'life',  spread: 'yesno',   card: 'p06' },  // 펜타클 6 — 주고받음
  { id: 'lifeImportant',cat: 'life',  spread: 'priority',card: 'm21' },  // 세계 — 전체를 봄
  { id: 'lifeMove',     cat: 'life',  spread: 'outcome', card: 'm00' },  // 바보 — 새 출발
  { id: 'lifeSave',     cat: 'life',  spread: 'career',  card: 'p05' },  // 펜타클 5 — 모자람
  { id: 'lifeStart',    cat: 'life',  spread: 'outcome', card: 'w11' },  // 완드 페이지 — 새 소식
  { id: 'lifeHold',     cat: 'life',  spread: 'hidden',  card: 'm15' },  // 악마 — 붙잡힌 것
  // '오늘 필요한 한마디'(lifeAdvice)는 뺐다. daily 스프레드를 쓰면 결과 머리말이
  // '오늘의 카드'로 나오는데, 그건 목록 맨 위 줄의 이름이다. 같은 이름 화면이
  // 두 개가 되고 한쪽은 매번 바뀌니 사용자가 헷갈린다. 언어 팩의 문구는 남겨뒀다.
]

export const topicsIn = (cat) => (cat === 'all' ? TOPICS : TOPICS.filter((t) => t.cat === cat))

// 번역된 글자를 꺼낸다. 없으면 id 라도 돌려줘서 화면에 빈칸이 생기지 않게 한다.
export const catText = (ui, cat) => (ui.cats && ui.cats[cat]) || cat
export const topicText = (ui, id) => (ui.topics && ui.topics[id]) || id
