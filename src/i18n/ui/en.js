// 영어 팩 — 나머지 8개 국어는 전부 이 파일과 '똑같은 모양'을 지켜야 한다.
//
// 여기 없는 키를 다른 언어 파일에 만들면 무시되고,
// 다른 언어에서 빠뜨린 키는 자동으로 영어로 대체된다(i18n/index.js 의 병합).
// → 번역이 덜 끝난 상태로 출시해도 화면이 비거나 깨지지 않는다.

export default {
  // ── 탭바 ────────────────────────────────────────────────
  tabs: {
    today: 'Today',
    readings: 'Readings',
    library: 'Library',
    journal: 'Journal',
  },

  // ── 여기저기서 쓰는 것 ──────────────────────────────────
  common: {
    back: 'Back',
    close: 'Close',
    copied: 'Copied to clipboard',
    upright: 'Upright',
    reversed: 'Reversed',
  },

  // ── Today ───────────────────────────────────────────────
  today: {
    title: 'Your card for today',
    blurb: 'One card, drawn for today only. It will not change until tomorrow.',
    reveal: 'Turn the card over',
  },

  // ── Readings ────────────────────────────────────────────
  read: {
    eyebrow: 'Readings',
    title: 'What do you want to ask?',
    blurb: 'Pick a spread. Every reading is free.',
    askTitle: 'Ask your question',
    askBlurb: 'Something that can be answered yes or no. Be specific.',
    askPlaceholder: 'Should I take the offer?',
    focusTitle: 'Hold the situation in mind',
    focusBlurb: 'Write it down if it helps you focus. This stays on your phone — it is never sent anywhere.',
    focusPlaceholder: 'What is on your mind?',
    draw: 'Shuffle and draw',
    chooseTitle: 'Choose your cards',
    chooseBlurb: 'Hold your question in mind as you pick.',
    skip: 'Skip — just draw',
    focusTip: 'Questions starting with What or How give you something you can use. When and Will only give you a guess.',
    askTip: 'One question at a time, and make it specific.',
    tryAsking: 'Try asking',
    ownQuestion: 'Ask your own question',
    shuffling: 'Shuffling',
    newReading: 'New reading',
  },

  // ── 결과 화면 ───────────────────────────────────────────
  result: {
    whole: 'Reading as a whole',
    share: 'Share this reading',
    again: 'Draw again',
    // {card} = 카드 이름, {orientation} = 정방향/역방향
    drawnOn: 'Drawn on {card}, {orientation}.',
  },

  // ── Library ─────────────────────────────────────────────
  lib: {
    eyebrow: 'Library',
    title: 'All 78 cards',
    filterAll: 'All 78',
    filterMajor: 'Major',
    majorArcana: 'Major Arcana',   // 뒤에 " · 숫자" 가 붙는다
  },

  // ── Journal ─────────────────────────────────────────────
  jr: {
    eyebrow: 'Journal',
    emptyTitle: 'Nothing yet',
    emptyBlurb: 'Your readings are saved here automatically, on this phone only.',
    countOne: '{n} reading',
    countMany: '{n} readings',
    clear: 'Clear',
    clearConfirm: 'Delete all saved readings? This cannot be undone.',
    footer: 'Saved on this device only. Nothing is uploaded.',
  },

  // ── Settings ────────────────────────────────────────────
  set: {
    title: 'Settings',
    language: 'Language',
    languageBlurb: 'Card meanings and the whole app change with this.',
    reversals: 'Reversed cards',
    reversalsBlurb: 'Some readers use upside-down cards, some do not. Turn this off to draw upright cards only.',
    data: 'Your data',
    dataBlurb: 'Everything stays on this phone. Nothing is sent anywhere and there is no account.',
    clearData: 'Delete everything saved',
    clearDataConfirm: 'Delete your daily card and all saved readings? This cannot be undone.',
    done: 'Done',
  },

  // ── 공유 문구 ───────────────────────────────────────────
  share: {
    tagline: 'Arcana — free tarot readings',
  },

  // ── 스프레드 (제목·설명·자리 이름) ──────────────────────
  // 주제 분류 — 리딩 화면 위쪽 칩
  cats: {
    love: 'Love',
    crush: 'Crush & Exes',
    work: 'Work & Study',
    life: 'Money & Choices',
  },

  // 주제별 질문. 스프레드 이름 대신 '무엇이 궁금한가'로 고르게 한다.
  // 각 언어로 따로 썼다 — 직역하면 어느 나라 말도 아닌 문장이 된다.
  topics: {
    loveNow: 'Where do we actually stand?',
    loveWhere: 'Where is this relationship heading?',
    loveThem: 'What is going on in their head?',
    loveGo: 'Should I keep going with this person?',
    crushApproach: 'Should I make the first move?',
    crushHeart: 'What do I do with these feelings?',
    crushAgain: 'Is there a way back to each other?',
    crushLearn: 'What did this leave me with?',
    workBlock: 'What is holding this job back?',
    workMove: 'Should I make the move?',
    workMiss: 'What am I missing here?',
    workAhead: 'How is this going to play out?',
    lifeMoney: 'Where do I start with money?',
    lifeChoice: 'Should I go for it?',
    lifeAdvice: 'What do I need to hear today?',
    lifeFlow: 'How are things flowing right now?',
  },

  spreads: {
    daily: {
      title: 'Daily Card',
      blurb: 'One card for today. It stays the same all day.',
      pos: { today: { label: 'Today', lead: 'What today is asking of you.' } },
    },
    three: {
      title: 'Past · Present · Future',
      blurb: 'The classic three-card spread. Where it came from, where it is, where it goes.',
      pos: {
        past:    { label: 'Past',    lead: 'What brought you here.' },
        present: { label: 'Present', lead: 'Where you actually are right now.' },
        future:  { label: 'Future',  lead: 'Where this is heading if nothing changes.' },
      },
    },
    yesno: {
      title: 'Yes or No',
      blurb: 'Ask something with a yes-or-no answer. One card decides.',
      examples: [
        'Should I take the offer?',
        'Is now the right time to say it?',
        'Do I go ahead with this plan?',
      ],
      pos: { answer: { label: 'The answer', lead: 'The reason behind the answer.' } },
    },
    love: {
      title: 'Love Reading',
      blurb: 'Three cards on a relationship — yours, theirs, and what sits between you.',
      examples: [
        'What am I bringing into this right now?',
        'What am I not saying out loud?',
        'What would make this steadier this week?',
      ],
      pos: {
        you:     { label: 'You',         lead: 'What you bring to this.' },
        them:    { label: 'The other',   lead: 'Where the other person is standing.' },
        between: { label: 'Between you', lead: 'What is actually happening between you.' },
      },
    },
    career: {
      title: 'Work & Money',
      blurb: 'Where you stand, what is blocking you, and what moves it forward.',
      examples: [
        'What is actually blocking this?',
        'What am I avoiding about this work?',
        'What would move this forward this month?',
      ],
      pos: {
        now:   { label: 'Where you are',   lead: 'The situation as it stands.' },
        block: { label: 'The block',       lead: 'What is holding it up.' },
        move:  { label: 'The way through', lead: 'What actually moves this forward.' },
      },
    },
    // 상황 · 행동 · 결과 — 다른 스프레드에 없는 '결과' 자리가 핵심이다.
    outcome: {
      title: 'Situation · Action · Outcome',
      blurb: 'Where things stand, what to do about it, and where that leads.',
      examples: [
        'What should I do about this?',
        'How do I handle this situation?',
        'What happens if I go ahead?',
      ],
      pos: {
        situation: { label: 'The situation', lead: 'What is actually in front of you.' },
        action:    { label: 'What to do',    lead: 'The move this is asking for.' },
        result:    { label: 'Where it lands',    lead: 'Where that choice takes this.' },
      },
    },
  },

  // ── 해석 엔진이 만들어내는 문장 ─────────────────────────
  engine: {
    // 수트 이름 + 그 수트가 다루는 영역
    suits: {
      wands:     { name: 'Wands',     domain: 'energy, drive and creative work' },
      cups:      { name: 'Cups',      domain: 'feelings, relationships and intuition' },
      swords:    { name: 'Swords',    domain: 'thought, truth and conflict' },
      pentacles: { name: 'Pentacles', domain: 'money, work, health and the material world' },
    },
    // 예/아니오 판정
    verdict: {
      yes:   { word: 'Yes',     gloss: 'The card comes down on the side of yes.' },
      maybe: { word: 'Not yet', gloss: 'The card will not commit — the situation is not settled enough to answer cleanly.' },
      no:    { word: 'No',      gloss: 'The card comes down on the side of no.' },
    },
    // 우세 원소
    element: {
      fire:  'Fire runs through this reading — it is about action, drive and doing something rather than deciding something.',
      water: 'Water runs through this reading — it is about feeling and relationship, whatever it looks like on the surface.',
      air:   'Air runs through this reading — it is about thought, truth and what is being said or left unsaid.',
      earth: 'Earth runs through this reading — it is about the practical: money, work, health, the physical facts.',
    },
    // 메이저 아르카나 장수 ({n} = 메이저 수, {total} = 전체 장수)
    majors: {
      none: 'No Major Arcana here. This is everyday-sized — the outcome is being decided by ordinary choices you are making, not by anything larger.',
      all:  'Every card is a Major Arcana. This is a genuinely significant stretch, and the shape of it is bigger than any single decision you make this week.',
      most: '{n} of {total} cards are Major Arcana. Something structural is moving here — this is not a small matter, even if it looks like one.',
    },
    // 역방향 장수
    reversals: {
      none: 'Nothing came up reversed. Whatever is happening is moving in the open, at its natural speed.',
      all:  'Every card came up reversed. All of this is happening internally or being held back — the situation is stuck on the inside before it is stuck anywhere else.',
      most: 'Most of the cards are reversed. More of this is blocked, delayed or unspoken than is actually out in the open.',
    },
  },

  // ── 마이너 아르카나 카드 이름 조립 ──────────────────────
  // 언어마다 어순과 연결어가 다르다.
  //   영어  Ace of Wands      한국어  완드 에이스
  //   독일어 Ass der Stäbe     일본어  ワンドのエース
  // 그래서 '이름 만드는 방법'을 각 언어가 직접 가지고 있어야 한다.
  ranks: {
    1: 'Ace', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven',
    8: 'Eight', 9: 'Nine', 10: 'Ten', 11: 'Page', 12: 'Knight', 13: 'Queen', 14: 'King',
  },
  minorName: (rank, suit) => `${rank} of ${suit}`,
}
