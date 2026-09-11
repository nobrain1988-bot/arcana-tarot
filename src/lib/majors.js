// 메이저 아르카나 22장 (0 The Fool ~ 21 The World)
//
// 해석 근거는 라이더-웨이트-스미스 전통이다. 지어내지 않는다.
//   k = 키워드 (결과 화면 상단 칩)
//   t = 본문 한 문단. 읽는 사람에게 말을 거는 2인칭으로 통일한다.
//  el = 점성 원소(fire/water/air/earth). 스프레드 전체의 원소 균형을 볼 때 쓴다.

export const MAJORS = [
  { n: 0, name: 'The Fool', el: 'air',
    up:  { k: 'new beginnings · innocence · leap of faith',
           t: 'A road opens in front of you and you have no map for it. That is not a problem to solve — it is the point. The Fool moves before feeling ready, and that is exactly why the Fool gets anywhere at all. Say yes to the thing you keep circling.' },
    rev: { k: 'recklessness · naivety · hesitation',
           t: 'Either you are about to leap without looking, or you have stood at the edge so long the moment is going stale. Both are this same card. Ask which one is actually you right now, and be honest about the answer.' } },

  { n: 1, name: 'The Magician', el: 'air',
    up:  { k: 'manifestation · resourcefulness · focused will',
           t: 'Everything you need is already on the table in front of you. This card is not about waiting for a better opportunity — it is about noticing that the tools, the contacts and the skill are already yours. Pick one goal and point all of it in that direction.' },
    rev: { k: 'manipulation · scattered energy · untapped talent',
           t: 'The power is real but it is leaking. Too many half-started things, or a gap between what you are saying and what you are actually doing. Close the gap. Talent that never gets aimed at anything just turns into frustration.' } },

  { n: 2, name: 'The High Priestess', el: 'water',
    up:  { k: 'intuition · hidden knowledge · stillness',
           t: 'You already know. Not logically — underneath that. Something is being shown to you in a form that will not survive being explained to other people yet, so do not put it up for debate. Sit with it. The answer surfaces in quiet, not in discussion.' },
    rev: { k: 'secrets · ignored instincts · disconnection',
           t: 'Either information is being kept from you, or you are keeping something from yourself. You had a gut feeling and you talked yourself out of it. Go back to the first instinct — the one you had before you started reasoning.' } },

  { n: 3, name: 'The Empress', el: 'earth',
    up:  { k: 'abundance · nurturing · creativity',
           t: 'Something is growing and it is growing well. Comfort, creative work, a relationship, a body finally being looked after — this card says feed it rather than push it. Growth here responds to care, not force.' },
    rev: { k: 'creative block · smothering · self-neglect',
           t: 'You are pouring into everyone except yourself, or holding something so tightly it cannot breathe. Creative block and burnout are the same symptom here: the source has not been refilled. Take care of the source first.' } },

  { n: 4, name: 'The Emperor', el: 'fire',
    up:  { k: 'structure · authority · discipline',
           t: 'The problem is not motivation, it is the absence of a frame. Rules, routine, a plan with actual dates on it. Build the structure and the chaos organises itself around it. Boring beats clever here.' },
    rev: { k: 'control · rigidity · domination',
           t: 'The structure has stopped serving you and started running you — or someone is using authority as a blunt instrument. A rule you are not allowed to question is not order, it is a cage. Loosen the grip before it breaks something.' } },

  { n: 5, name: 'The Hierophant', el: 'earth',
    up:  { k: 'tradition · guidance · learning the rules',
           t: 'There is an established way of doing this and it works. Find the teacher, the institution, the proven method. This is not the moment to reinvent — it is the moment to learn properly from someone who went first.' },
    rev: { k: 'rebellion · outgrown beliefs · your own path',
           t: 'The convention no longer fits and you know it. A rule you inherited without ever choosing it is up for review. Breaking it will cost something socially — decide whether the price is worth the honesty.' } },

  { n: 6, name: 'The Lovers', el: 'air',
    up:  { k: 'union · alignment · choice',
           t: 'This is a card about values before it is a card about romance. Two things are lining up — people, or a decision and what you actually believe. When the choice matches your values you will feel it as relief, not as excitement.' },
    rev: { k: 'misalignment · avoidance · conflicting values',
           t: 'Something is out of step. You want two things that cannot both be true, or you are with someone whose values quietly contradict yours. Refusing to choose is also a choice, and it is the one costing you most.' } },

  { n: 7, name: 'The Chariot', el: 'water',
    up:  { k: 'willpower · momentum · victory through control',
           t: 'You win this by steering, not by speeding up. Two opposing forces are pulling and the job is to hold both reins rather than pick one. Keep your eyes on the destination and the tension becomes propulsion.' },
    rev: { k: 'loss of direction · forcing it · stalled',
           t: 'All engine, no steering. You are pushing hard in a direction you never actually checked, or the momentum has drained out entirely. Stop and re-aim before you spend another week of effort.' } },

  { n: 8, name: 'Strength', el: 'fire',
    up:  { k: 'courage · patience · gentle power',
           t: 'The lion is not defeated, it is calmed. Whatever you are facing — a difficult person, a fear, your own temper — force will make it worse and steadiness will make it manageable. Soft hands, firm intention.' },
    rev: { k: 'self-doubt · raw nerve · forced composure',
           t: 'The strength is there but you cannot feel it, or you are white-knuckling a calm you do not have. Pretending not to be afraid costs more energy than admitting it. Put the effort somewhere useful.' } },

  { n: 9, name: 'The Hermit', el: 'earth',
    up:  { k: 'solitude · introspection · inner guidance',
           t: 'Step back from the noise on purpose. Not as avoidance — as method. The answer you want will not arrive while you are collecting more opinions. Give yourself an unusual amount of quiet and it becomes obvious.' },
    rev: { k: 'isolation · avoidance · lost bearings',
           t: 'Solitude has curdled into hiding. There is a difference between retreating to think and retreating so you do not have to face anyone. If the quiet has stopped producing clarity, it is time to come back.' } },

  { n: 10, name: 'Wheel of Fortune', el: 'fire',
    up:  { k: 'turning point · luck · cycles',
           t: 'Something moves that you did not move. Timing, coincidence, an unexpected turn — the wheel is going up. This is not a card about effort; it is about recognising a window and stepping through it fast.' },
    rev: { k: 'downturn · resistance · repeating a cycle',
           t: 'The turn is going the other way, or you are back at a point you have already stood on before. The second one matters more. If this feels familiar, the pattern is yours, and it repeats until you change your part in it.' } },

  { n: 11, name: 'Justice', el: 'air',
    up:  { k: 'truth · fairness · consequence',
           t: 'Cause and effect are catching up, and that is neutral — it can land in your favour. Be scrupulously honest, especially about your own share of the situation. Decisions made on accurate information hold up.' },
    rev: { k: 'imbalance · dodged accountability · bias',
           t: 'Something here is not being weighed honestly. Someone is dodging responsibility, or you are arguing a version of events edited in your own favour. Unfair outcomes usually start as unexamined assumptions.' } },

  { n: 12, name: 'The Hanged Man', el: 'water',
    up:  { k: 'pause · surrender · new perspective',
           t: 'The wait is not wasted time. You are being held still long enough to see the situation from a different angle, and the angle is the gift. Stop trying to force movement — the useful thing right now is the view.' },
    rev: { k: 'stalling · resistance · pointless martyrdom',
           t: 'You are suspended and getting nothing from it. Either you are resisting a pause you clearly need, or you are enduring something and calling it patience when it is really avoidance. Sacrifice with no purpose is only loss.' } },

  { n: 13, name: 'Death', el: 'water',
    up:  { k: 'ending · transformation · clearing space',
           t: 'This card almost never means literal death. It means something is genuinely over, and pretending otherwise is the only thing still hurting. Let it end cleanly. What comes next cannot arrive while the old thing occupies the space.' },
    rev: { k: 'clinging on · stalled change · fear of letting go',
           t: 'You are holding the door shut on a change that is already happening. Delaying it does not cancel it — it just makes the ending messier and longer. Name the thing that is over.' } },

  { n: 14, name: 'Temperance', el: 'fire',
    up:  { k: 'balance · moderation · patient blending',
           t: 'The answer is in the middle and it takes time to mix. Not all of one thing or all of the other — the right proportion, found slowly. Whatever you are rushing, halve the speed and it will actually work.' },
    rev: { k: 'excess · imbalance · impatience',
           t: 'Too much of something. Work, spending, intensity, or swinging between extremes with nothing steady in between. Nothing here is fixed by one dramatic correction — it is fixed by a smaller amount, repeated.' } },

  { n: 15, name: 'The Devil', el: 'earth',
    up:  { k: 'attachment · dependency · the thing you excuse',
           t: 'Look at what you have been justifying. A habit, a person, a job, a story about yourself — something has more hold on you than you admit, and the chains in this card are loose. You are freer than you have decided to be.' },
    rev: { k: 'breaking free · seeing the pattern · reclaiming power',
           t: 'The grip is loosening. You are starting to see the mechanism of the thing that had you, and seeing it is most of the work. Do not go back to test whether it still has power over you.' } },

  { n: 16, name: 'The Tower', el: 'fire',
    up:  { k: 'sudden upheaval · revelation · collapse',
           t: 'Something built on a shaky foundation comes down fast, and it will not be gentle. But the Tower only takes what was never sound. This is the card of the truth arriving all at once — brutal, and ultimately in your favour.' },
    rev: { k: 'delayed collapse · fear of change · near miss',
           t: 'You either dodged it or you are postponing it. Propping up something you know is unsound buys time at a rising price. If you can bring it down on your own terms, do it before it picks its own moment.' } },

  { n: 17, name: 'The Star', el: 'air',
    up:  { k: 'hope · healing · renewed faith',
           t: 'After the wreckage, quiet light. This is the card of the hard part being over and the repair beginning. Nothing dramatic — just the return of the sense that things can be good again. Trust it and keep going gently.' },
    rev: { k: 'lost faith · discouragement · disconnection',
           t: 'The light is still there, you just cannot see it from where you are standing. Discouragement is telling you a story about permanence that is not true. Do not make long-term decisions from inside this feeling.' } },

  { n: 18, name: 'The Moon', el: 'water',
    up:  { k: 'illusion · anxiety · the unclear path',
           t: 'You do not have the full picture, and your mind is filling the gaps with fear. Not everything you are imagining is real. Do not act on a story you assembled at three in the morning — wait for actual information.' },
    rev: { k: 'clarity returning · fear releasing · truth surfacing',
           t: 'The fog is lifting. Something you were confused or anxious about is resolving into its real shape, and it is smaller than it looked in the dark. Confusion was the phase, not the destination.' } },

  { n: 19, name: 'The Sun', el: 'fire',
    up:  { k: 'joy · clarity · success',
           t: 'The plainest good card in the deck. Things work, warmth returns, the answer is yes. There is no hidden catch to hunt for — the only work is letting yourself enjoy it without waiting for the other shoe.' },
    rev: { k: 'dimmed joy · false optimism · temporary cloud',
           t: 'The good thing is real, but something is blocking the feeling of it — exhaustion, comparison, or a forced brightness covering something unresolved. The sun has not gone anywhere. Find what is standing in front of it.' } },

  { n: 20, name: 'Judgement', el: 'fire',
    up:  { k: 'reckoning · calling · rebirth',
           t: 'A summons. Something you have been putting off asks to be answered honestly — an old chapter to close properly, a decision to finally make, a calling you keep hearing. Look back clearly, then choose and move.' },
    rev: { k: 'self-criticism · ignoring the call · doubt',
           t: 'You are judging yourself far more harshly than the facts support, or refusing to hear something you already know you must act on. The inner critic is not the same voice as the calling. Learn to tell them apart.' } },

  { n: 21, name: 'The World', el: 'earth',
    up:  { k: 'completion · wholeness · arrival',
           t: 'A cycle closes properly. Not just finishing but integrating — you arrive somewhere and you are different for the journey. Mark it. Acknowledging completion is what lets the next thing begin cleanly.' },
    rev: { k: 'unfinished business · delayed closure · shortcuts',
           t: 'You are almost there and something in you wants to skip the last part. Loose ends left now become the thing that follows you into the next chapter. Finish it properly, even the dull final ten percent.' } },
]
