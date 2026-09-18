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
    sound: 'Sound',
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
    together: "Read together",
    togetherOne: "How to read this card",
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
    soundBlurb: 'A low drone and the occasional bell. Made by the app, not a recording.',
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
  // 시작 화면 — 문을 열고 들어가는 느낌
  intro: {
    tagline: 'The cards are already waiting for you.',
    enter: 'Step inside',
  },

  cats: {

    all: 'All',
    love: 'Love',
    crush: 'Crush & Exes',
    work: 'Work & Study',
    life: 'Money & Choices',
    health: "Health",
  },

  // 주제별 질문. 스프레드 이름 대신 '무엇이 궁금한가'로 고르게 한다.
  // 각 언어로 따로 썼다 — 직역하면 어느 나라 말도 아닌 문장이 된다.
  topics: {
    loveNow: 'Where do we actually stand?',
    loveWhere: 'Where is this relationship heading?',
    loveThem: 'What is going on in their head?',
    loveGo: 'Should I keep going with this person?',
    loveNeed: 'What does this relationship need right now?',
    loveMiss: 'What am I not seeing in this?',
    loveClash: 'Why do we keep missing each other?',
    loveHonest: 'Should I say the thing out loud?',
    loveLast: 'Can this actually go the distance?',
    crushApproach: 'Should I make the first move?',
    crushHeart: 'What do I do with these feelings?',
    crushAgain: 'Is there a way back to each other?',
    crushLearn: 'What did this leave me with?',
    crushThink: 'Am I on their mind at all?',
    crushConfess: 'What happens if I tell them?',
    crushLetGo: 'Is it time to let this go?',
    crushSilence: 'Why have they gone quiet?',
    crushSettle: 'How do I get my head straight about this?',
    workBlock: 'What is holding this job back?',
    workMove: 'Should I make the move?',
    workMiss: 'What am I missing here?',
    workAhead: 'How is this going to play out?',
    workTalent: 'What am I actually good at?',
    workStay: 'Should I stay where I am?',
    workPeople: 'How do I read this person at work?',
    workExam: 'What should I shore up before the test?',
    workLearn: 'Is this the right thing to be learning?',
    lifeMoney: 'Where do I start with money?',
    lifeChoice: 'Should I go for it?',
    lifeFlow: 'How are things flowing right now?',
    lifeSpend: 'Is this one worth spending on?',
    lifeImportant: 'What matters most for me right now?',
    lifeMove: 'What happens if I move?',
    lifeSave: 'Why does nothing ever stick around?',
    lifeStart: 'How will this new thing go?',
    lifeHold: 'What am I refusing to put down?',
    lifeAdvice: 'What do I need to hear today?',
    healthSignal: "What is my body trying to tell me?",
    healthBurnout: "Why am I always running on empty?",
    healthSleep: "Why can't I switch off at night?",
    healthAnxious: "What is this anxiety really about?",
    healthRest: "Is it okay to stop and rest for a while?",
    healthHabit: "What happens if I change this habit?",
    healthSlipBack: "Why do I keep slipping back into old habits?",
    healthMind: "What can I lean on when it gets heavy?",
    healthBody: "How do I make peace with my body?",
    healthBeside: "How do I hold up beside a loved one who's unwell?",
    healthWaitBaby: "How do we stay close while trying for a baby?",
    healthExpecting: "What matters most while I'm expecting?",
    healthBirth: "What strength do I already have going into the birth?",
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
      title: 'Two People',
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
      title: 'The Stuck Point',
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
    hidden: {
      title: 'What you could not see',
      blurb: 'Separates what is in front of you from what is not.',
      pos: {
        seen: { label: 'What you see', lead: 'The part you already know about.' },
        unseen: { label: 'What is hidden', lead: 'The part that stayed out of view.' },
        know: { label: 'What to know', lead: 'What changes once you see it.' },
      },
    },
    strength: {
      title: 'What you have',
      blurb: 'What is strong, what is thin, and where it belongs.',
      pos: {
        have: { label: 'Your strength', lead: 'What is already in you.' },
        thin: { label: 'What is thin', lead: 'The part not grown in yet.' },
        use: { label: 'Where it lands', lead: 'Where that strength actually works.' },
      },
    },
    residue: {
      title: 'What it left',
      blurb: 'What a finished thing put down and walked away from.',
      pos: {
        was: { label: 'What it was', lead: 'What was actually there at the time.' },
        left: { label: 'What remains', lead: 'What is still in you now.' },
        learn: { label: 'What it taught', lead: 'What this was for.' },
      },
    },
    priority: {
      title: 'What matters',
      blurb: 'Separates what pulls at you from what carries weight.',
      pos: {
        pull: { label: 'What pulls at you', lead: 'What is loudest right now.' },
        real: { label: 'What actually matters', lead: 'Where the weight really sits.' },
        first: { label: 'Where to start', lead: 'The one thing to touch first.' },
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

  // ── 분류 아래 안내 한 줄. 지금은 건강 분류에만 있다 — 진단이 아니라 들여다보는 자리라는 것. ──
  catNote: {
    health: "For reflection, not diagnosis. See a doctor for anything medical.",
  },

  // ── 질문별 자리 설명 ────────────────────────────────────────
  // 스프레드의 pos.*.lead 는 어느 질문에나 붙는 말이라("지금 상황 그대로.") 답이 질문과 상관없어 보였다.
  // 여기 있는 문장이 그 자리를 대신한다 — 그 질문의 주어가 들어간 렌즈. 없는 질문은 스프레드 lead 로 떨어진다.
  topicLeads: {
    loveNow: { you: "Your side of this — where you stand with them.", them: "Their side of this — where they stand with you.", between: "What you two actually are to each other right now." },
    loveWhere: { past: "What has carried this relationship this far.", present: "Where the two of you are in this relationship right now.", future: "Where this relationship goes if it keeps moving like this." },
    loveThem: { you: "What you are bringing to the way you read them.", them: "What is actually going on in their head right now.", between: "How much of their inner life is getting through to you." },
    loveGo: { answer: "What actually follows if you keep going with this person — the reason the answer above came out the way it did." },
    loveNeed: { situation: "What the two of you actually have to work with right now.", action: "The one thing this relationship needs you to add now — if the card points at a gap or a strain, filling it is the answer.", result: "What this relationship turns into once that one thing is added." },
    loveMiss: { seen: "What you already see clearly in this relationship.", unseen: "The part of this relationship you have not been seeing.", know: "What shifts between you once the hidden part is in view." },
    loveClash: { now: "Where the two of you keep ending up when you miss each other.", block: "What keeps putting the two of you out of step.", move: "What brings the two of you back into step." },
    loveHonest: { answer: "Whether to say it out loud, and what actually moves between you once it is said." },
    loveLast: { past: "What has held the two of you together so far.", present: "What is holding the two of you together right now.", future: "How far what holds you now can carry the two of you." },
    crushApproach: { answer: "Whether to make the first move, and why." },
    crushHeart: { situation: "Where these feelings have actually put you right now.", action: "The move these feelings are asking of you.", result: "Where these feelings land if you make that move." },
    crushAgain: { answer: "Whether there is a way back to each other, and what shape that way takes as it opens or closes." },
    crushLearn: { was: "What this connection actually was, while it lasted.", left: "The part of this connection that never really left you.", learn: "What this connection was here to teach you." },
    crushThink: { you: "What you are carrying while you wonder if they think of you too.", them: "How much room you actually take up in their head.", between: "What is really passing between you, not just in your head." },
    crushConfess: { situation: "Where things stand between you before you tell them how you feel.", action: "The frame of mind to tell them in, if you decide to go ahead.", result: "How they take it once they know, and where that leaves the two of you." },
    crushLetGo: { answer: "Whether it is time to let this go, and why — this card is you at the edge of letting go, not them." },
    crushSilence: { now: "Where the two of you stand now that they have gone quiet.", block: "The real reason they have gone quiet — something on their side, or something that has come between you.", move: "What would reopen the line — a move you could make, or a sign to sit tight for now." },
    crushSettle: { situation: "What is still tangled in your head about this.", action: "The one thing that actually starts to get your head straight.", result: "Where your head ends up once you have done that." },
    workBlock: { now: "Where this job is stalled right now.", block: "What is actually holding this job back.", move: "What gets this job moving again." },
    workMove: { answer: "Whether to change jobs now — and the reason behind the answer." },
    workMiss: { seen: "The part of this job you already see clearly.", unseen: "The corner of this job you have not been looking at.", know: "What shifts in this job once that corner is in view." },
    workAhead: { situation: "Where this job actually stands today.", action: "The move this job is asking of you now.", result: "Where this job ends up if you make that move." },
    workTalent: { have: "What you already do well, even if you have never named it: handling whatever this card shows better than most people do.", thin: "The skill you are still short on, right beside the one you have.", use: "Where that talent of yours really counts." },
    workStay: { answer: "Whether to stay where you are, and the reason behind the call — what this place is giving you, or what it is quietly taking from you." },
    workPeople: { you: "What you carry into every exchange with this person.", them: "Where this person actually stands, behind what they show you at work.", between: "What is really going on between you and this person at work." },
    workExam: { have: "What is already solid going into the test.", thin: "The part to shore up before the test.", use: "Where your preparation actually counts on test day." },
    workLearn: { answer: "Whether what you are learning now is the right thing, and why." },
    lifeMoney: { now: "Where you and your money stand right now.", block: "What keeps your finances in a tangle.", move: "Where to actually start with money." },
    lifeChoice: { answer: "Whether to go for it, and why." },
    lifeFlow: { past: "What got things flowing the way they are now.", present: "How things are actually flowing for you right now.", future: "Where the flow carries you if nothing shifts." },
    lifeSpend: { answer: "Whether this one is worth spending on, and why." },
    lifeImportant: { pull: "Of everything on your plate right now, the one pulling at you hardest.", real: "The one that would still matter to you once the noise dies down.", first: "The first thing to pick up, now that you can see what matters." },
    lifeMove: { situation: "Where you stand with the move right now.", action: "What the move asks of you first.", result: "Where the move takes you if you go." },
    lifeSave: { now: "How money comes and goes for you right now.", block: "The real reason money never sticks around.", move: "What would let money finally stick around." },
    lifeStart: { situation: "What this new thing is starting from.", action: "What this new thing asks of you early on.", result: "How this new thing goes once you give it what it asks." },
    lifeHold: { seen: "The thing you already know you are holding.", unseen: "What you are really gripping underneath it.", know: "What lets your hand open once you see it." },
    healthSignal: { seen: "The signal from your body that you have already noticed.", unseen: "What your body has been asking for through this scene, and you keep pushing past.", know: "What changes in how you look after your body once you listen." },
    healthBurnout: { now: "How drained you actually are right now, without dressing it up.", block: "What keeps draining you faster than you can fill back up.", move: "What starts putting something back in the tank." },
    healthSleep: { now: "How your nights actually go once the lights are off.", block: "What keeps your mind running when the rest of you wants to stop.", move: "What finally lets your mind settle at night." },
    healthAnxious: { seen: "What you have been telling yourself the anxiety is about.", unseen: "What the anxiety is actually pointing at, beneath the story you tell yourself.", know: "How the anxiety changes once you name the real thing." },
    healthRest: { answer: "Whether you can stop and rest for a while, and why." },
    healthHabit: { situation: "Where you stand with this habit right now.", action: "What it actually takes to change the habit.", result: "Where you end up once you change the habit." },
    healthSlipBack: { now: "Where you stand with the old habit right now.", block: "What keeps pulling you back to the old habit.", move: "What keeps you from slipping back this time." },
    healthMind: { have: "What holds you up when things get heavy.", thin: "What you reach for that cannot yet hold you up.", use: "Where what holds you up actually lightens a heavy day." },
    healthBody: { situation: "Where you and your body stand with each other right now.", action: "What making peace with your body actually asks of you.", result: "Where you and your body end up once you make that move." },
    healthBeside: { you: "What you are carrying while you sit beside them.", them: "What the person you are caring for is feeling, not what they are showing.", between: "What actually passes between you while they are unwell." },
    healthWaitBaby: { you: "What you are carrying into this wait for a baby, said or not.", them: "Your partner's side of the wait for a baby, which may not match yours.", between: "What the waiting is doing to the space between you." },
    healthExpecting: { pull: "What is loudest in your head with a baby on the way.", real: "What actually carries weight while you are expecting.", first: "The one thing to look after first before the baby comes." },
    healthBirth: { have: "The strength you are already carrying into the birth.", thin: "What you are still short on as the birth gets close.", use: "The kind of moment you will reach for that strength as the birth gets close." },
  },

  // ── 질문별 마무리 한 줄 — 세 장이 이 질문에 어떻게 하나의 답이 되는지, 어느 장을 오래 볼지 ──
  topicClose: {
    loveNow: "The first two cards show where each of you stands on your own. The third is where you stand together — that is the answer, so give it the longest look.",
    loveWhere: "Read the three cards as one story: where this relationship came from, where it stands now, and where it is heading. Stay longest on the third card — that is your answer; the second tells you how solid that answer is.",
    loveThem: "The second card is the one you came for, so sit with it longest. The first shapes how you read it, and the third says how much of what is in their head is reaching you on its own.",
    loveGo: "The word at the top answers whether to keep going with this person; the card under it is the reason. If yes, it shows what staying the course would ask of you; if no, what is telling you to stop; if not yet, what still has to settle first. Spend longer on the card than on the word.",
    loveNeed: "Your answer is the second card, so stay there longest — what this relationship needs is something you can actually do. If it names something to do, that is the answer; if it points at a gap or a strain, filling it is. The first card says why that is needed now; the third, how far the two of you get once it is there.",
    loveMiss: "The first card is the part you already know — check it, then keep it beside the second, because that is what the second is read against. The second is your answer, the side of this relationship you have not been seeing, so give it the longest look, and read the third as what shifts between you once that part is in view.",
    loveClash: "The first card is where the two of you keep falling out of step, the second is why, and the third is what brings you back into step. You asked why, so sit with the second card longest; the third only makes sense once you know what it has to undo.",
    loveHonest: "The verdict above answers whether to say it out loud; the card under it is the reason, so spend longer on the card than on the word. If yes, the card says what saying it opens up between you. If no, it says what needs settling before the words. If not yet, it says what has to calm down before there is room for them. A no is not 'swallow it' — it is 'not like this' — so read the card for what would hit first if you said it now, and for how to say it instead.",
    loveLast: "Read the three as one line — what has held you, what holds you now, how far it carries you. The third card is the answer, but the second is the one to sit with: whatever is holding you together today is what has to go the distance.",
    crushApproach: "The answer at the top says whether to make the first move; the card under it is why. Spend longer on the card than on the answer — if yes, it says how to go about it; if no, what you would run into by moving now; if not yet, what has to settle before you do.",
    crushHeart: "Read the three cards in order: where the feelings sit, what to do with them, where that leads. Stay longest with the second card — that is the one answering your question — and use the third to check whether the move is worth making.",
    crushAgain: "The answer at the top says whether there is a way back to each other; the card under it is the shape of that way. Whatever the card seems to be talking about, read it as the way back — if yes, it shows how that way opens and what it asks of you; if no, what is blocking it; if not yet, what still has to settle first. Stay with the card longer than with the word at the top.",
    crushLearn: "The first card is what this was, the second is what remains of it, the third is what it was for. Stay longest with the second — what this left you with is what is still in you now, not what it looked like back then.",
    crushThink: "The second card is the one you came for — it answers whether you are on their mind at all, so stay with it longest. Read the first against it to see how much of the pull is only yours, and the third for whether anything is really moving between you.",
    crushConfess: "You asked what happens if you tell them — that is the third card, so stay with it longest. Read it as how they take it and where that leaves the two of you. The first shows where things stand before you say anything, and the second is the frame of mind that shapes their answer — so read the third as what comes back when you tell them that way, not on its own.",
    crushLetGo: "The word at the top answers whether it is time to let this go; the card under it is the reason. Read that card as you, not them — you at the edge of letting go. If the word is yes, the card shows what comes into the space you clear; if no, what is unfinished and still holds you; if not yet, what has to come clear inside you before the answer can. Stay longer with the card than with the word — how to let go, or why to hold on, is written there.",
    crushSilence: "You asked why they went quiet — that is the second card, so stay with it longest. Read its words as being about them: if it shows a person, it is where their attention is right now; otherwise it is the state they are in, or what has come between you. The first card is where the two of you stand in the silence; the third is what you do once you know the reason — reach out, or wait.",
    crushSettle: "The second card is what you asked for — the thing to do — so stay with it longest. The first tells you what that move has to untangle, and the third what your head looks like once it has settled, so you know when you are there.",
    workBlock: "The second card is the answer — what is holding this job back; the first is what that block has done to the job so far, and the third is what loosens it. Sit longest with the second, and read the other two around it.",
    workMove: "The verdict above is your answer on changing jobs; the card is the reason. Read it for what the move would ask of you right now.",
    workMiss: "The first card is the part of this job you already had in view, the second is the corner you have not been looking at — that is the thing you asked about — and the third is what shifts once it is in view. Sit with the second one the longest.",
    workAhead: "The first card is where the job stands, the second is the move it asks for, and the third is where it ends up. You asked how this plays out, so sit with the third card — but read it as what follows from the second, not on its own.",
    workTalent: "The first card is what you are good at — the answer to what you asked. If it came up heavy, that is no flaw: it means you have been through that ground more often than most and already know how to handle it, and that knowing is the talent. The second card is where that talent runs thin, the third where it really counts. Stay with the first card longest, and look to the third for where to put it to work.",
    workStay: "The word above is the call on staying where you are — yes, no, or not yet — and the card under it is the reason. If it is yes, read the card as what this place is still giving you, or what you still have to finish here; if no, as what it is quietly taking from you; if not yet, as what has to settle before the answer can hold. Spend longer on the card than on the word — whichever way you go, the next step is written there.",
    workPeople: "The first card is what you carry into this, the second is the person you are trying to read, the third is what actually runs between you. Stay longest with the second — that is the reading you asked for — then check it against the third; where the two disagree, the first card is usually why.",
    workExam: "The first card is what is already solid, the second is what to shore up, the third is where your preparation shows on test day. You asked what to fix, so read the second card longest — the first tells you what not to waste time on.",
    workLearn: "The answer above is the call on whether this is the right thing to be learning. The card under it is the reason — read it for what this learning is building in you, and what it is not.",
    lifeMoney: "The first card is where your money stands, the second is what keeps it in a tangle, the third is the thread to pull first. You asked where to start, so stay longest on the third — that is the actual answer.",
    lifeChoice: "The word at the top is the call on going for it — yes, no, or not yet. The card under it is the reason. If yes, it says what going for it would ask of you; if no, what is warning you off; if not yet, what has to settle before you decide. Spend longer on the card than on the word — the word only says whether; the card says what to do about it.",
    lifeFlow: "Read the three as one current: the first card is what set it moving, the second is where it is now, the third is where it carries you. You asked about right now, so stay longest on the second — the other two tell you which way it is moving.",
    lifeSpend: "The verdict above is the call on whether this one is worth spending on — yes, no, or not yet — and the card text is the reason. If yes, it tells you what the money is really buying you; if no, what the spend would take from you beyond the price, or why not now; if not yet, what has to settle before you open your wallet. Read it for that, not for the price tag.",
    lifeImportant: "You asked what matters most right now, and the second card is the answer — stay on it longest. The first card is where your attention has actually been: if it says the same thing as the second, your heart is already in the right place; if it says something else, that is how far your attention has drifted. The third card is the one thing to pick up first, for the sake of what matters.",
    lifeMove: "The first card is where the move stands, the second is what it asks of you, the third is where it lands. 'What happens' is the question, so stay longest on the third — but read it as the result of doing the second, not on its own.",
    lifeSave: "The first card is how money comes and goes for you now, the second is the real reason it never stays, the third is what would get it to stay. You asked 'why', so sit longest with the second — the third only makes sense once you've seen the reason. If the second card is a dark one, that is the leak; if it looks like good news, that is where the money is going first.",
    lifeStart: "The first card is what this new thing starts from, the second is what it asks of you early on, the third is how it goes. You asked how it will go, so stay longest on the third — read it as where the second card leads.",
    lifeHold: "Put the three together: the first card is the part you let yourself see, the second is what you are actually refusing to put down, and the third is what loosens your grip once you see it. The answer to this question is the second card — stay there longest.",
    healthSignal: "The first card is the signal from your body you have already felt, the second is what your body has been asking for behind it, and the third is what shifts in how you look after it once you hear that ask. Read the first and the second side by side — the gap between them is the part you have not been hearing. Stay longest with the second: whatever scene came up, it is a picture of what your body wants, so read it in your body's words. That is what it has been waiting for you to notice.",
    healthBurnout: "The first card names how empty you really are, the second is the leak, and the third is where the refill starts. Stay longest with the second — you cannot fill a tank that is still leaking.",
    healthSleep: "The first card is the night as it is, the second is what keeps your mind switched on, and the third is what lets it stop. Stay longest with the second — the thoughts that will not settle are usually carrying something the day never got to.",
    healthAnxious: "The first card is the story you have been telling yourself about the anxiety, the second is what the anxiety is really about, and the third is what shifts once you call it by its name. Stay longest with the second — anxiety tends to get loud when the real thing has not been said yet.",
    healthRest: "The word above is the verdict on whether you can stop and rest for a while; the card under it is the reason. If yes, the card shows what the rest would give back to you, or how to rest so that it counts. If no or not yet, it shows what is keeping you from resting right now. Even when the card does not seem to be about rest, read what it describes as if it were about you stopping now. A no or a not yet is not 'push on' — it means something has to be set down first for the rest to actually be rest. This is a question of timing, not of whether you deserve it. The card says more than the one word, so spend longer there.",
    healthHabit: "The first card is where you stand with the habit now, the second is what changing it actually takes, and the third is where that leaves you. Stay longest with the third — that is the answer to what you asked, and the second is the price of getting there.",
    healthSlipBack: "The first card is where you stand with the old habit today, the second is the pull that keeps bringing you back, and the third is what helps you stay clear of it this time. Stay longest with the second — slipping back is rarely about willpower and usually about what the old habit was quietly doing for you.",
    healthMind: "The first card is the answer — what you can lean on when it gets heavy is nothing you have to build; it is already holding you up. The second is where the weight wobbles if you put all of it there — read it as a sign to shift that weight onto the first. The third is which part of a heavy day gets lighter first once you do. Stay longest with the first — on the heavy days, before you go looking for anything more, start from what is already holding you.",
    healthBody: "The first card is where things stand between you and your body, the second is the move that makes peace possible, and the third is where that move leaves the two of you. Stay longest with the second — you asked what to do, and that card is the answer; the third shows where doing it leads.",
    healthBeside: "The first card is what you carry, the second is what they are feeling under what they show, and the third is what runs between you through all of this. Stay longest with the first — you asked how to hold up, and nobody holds up for long while ignoring what they themselves are carrying.",
    healthWaitBaby: "The first card is you in this wait for a baby, the second is your partner in the same wait, and the third is what the waiting is doing to the two of you. Stay longest with the third — you asked how to stay close, and that is where closeness is either being kept or quietly spent.",
    healthExpecting: "The first card is what is loudest while you are expecting, the second is what actually carries weight, and the third is the one thing to look after first. Stay longest with the second — plenty gets loud in these months, and that card is how you tell loud from heavy.",
    healthBirth: "The first card is the strength you already have going into the birth, the second is what you are still short on, and the third is the kind of moment you will reach for that strength. Stay longest with the first — that is the answer to what you asked, and it is already in you. The second only shows where to go easy on yourself as the day gets close, and the third is not a forecast of the day but the moment to remember the first card — if the third looks heavy, that is precisely the moment the first card is for.",
  },

  // ── 분류 아래 안내 한 줄. 지금은 건강 분류에만 있다 — 진단이 아니라 들여다보는 자리라는 것. ──
  ranks: {
    1: 'Ace', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven',
    8: 'Eight', 9: 'Nine', 10: 'Ten', 11: 'Page', 12: 'Knight', 13: 'Queen', 14: 'King',
  },
  minorName: (rank, suit) => `${rank} of ${suit}`,
}
