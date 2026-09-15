// Deutsch. Die Struktur muss mit en.js identisch sein.
export default {
  tabs: { today: 'Heute', readings: 'Legungen', library: 'Karten', journal: 'Tagebuch' },

  common: {
    back: 'Zurück',
    close: 'Schließen',
    copied: 'Kopiert',
    upright: 'Aufrecht',
    reversed: 'Umgekehrt',
  },

  today: {
    title: 'Deine Karte für heute',
    blurb: 'Eine Karte, nur für heute gezogen. Bis morgen ändert sie sich nicht.',
    reveal: 'Karte umdrehen',
  },

  read: {
    eyebrow: 'Legungen',
    title: 'Was möchtest du fragen?',
    blurb: 'Wähle eine Legung. Alle sind kostenlos.',
    askTitle: 'Stelle deine Frage',
    askBlurb: 'Etwas, das sich mit Ja oder Nein beantworten lässt. Sei konkret.',
    askPlaceholder: 'Soll ich das Angebot annehmen?',
    focusTitle: 'Halte die Situation im Kopf',
    focusBlurb: 'Schreib sie auf, wenn dir das beim Fokussieren hilft. Der Text bleibt auf deinem Handy und wird nirgendwohin gesendet.',
    focusPlaceholder: 'Was beschäftigt dich?',
    draw: 'Mischen und ziehen',
    chooseTitle: 'Wähle deine Karten',
    chooseBlurb: 'Behalte deine Frage im Sinn, während du wählst.',
    skip: 'Überspringen — einfach ziehen',
    focusTip: 'Fragen mit Was oder Wie geben dir etwas, womit du arbeiten kannst. Wann und Wird es geben nur eine Vermutung.',
    askTip: 'Eine Frage auf einmal, und so konkret wie möglich.',
    tryAsking: 'Frag zum Beispiel',
    ownQuestion: 'Eigene Frage stellen',
    shuffling: 'Wird gemischt',
    newReading: 'Neue Legung',
  },

  result: {
    whole: 'Die Legung als Ganzes',
    share: 'Diese Legung teilen',
    again: 'Neu ziehen',
    drawnOn: 'Gezogen wurde {card}, {orientation}.',
  },

  lib: {
    eyebrow: 'Karten',
    title: 'Alle 78 Karten',
    filterAll: 'Alle 78',
    filterMajor: 'Große',
    majorArcana: 'Große Arkana',
  },

  jr: {
    eyebrow: 'Tagebuch',
    emptyTitle: 'Noch nichts da',
    emptyBlurb: 'Deine Legungen werden hier automatisch gespeichert – nur auf diesem Handy.',
    countOne: '{n} Legung',
    countMany: '{n} Legungen',
    clear: 'Löschen',
    clearConfirm: 'Alle gespeicherten Legungen löschen? Das lässt sich nicht rückgängig machen.',
    footer: 'Nur auf diesem Gerät gespeichert. Nichts wird hochgeladen.',
  },

  set: {
    title: 'Einstellungen',
    language: 'Sprache',
    languageBlurb: 'Damit ändert sich die ganze App, auch die Kartenbedeutungen.',
    reversals: 'Umgekehrte Karten',
    reversalsBlurb: 'Manche lesen umgekehrte Karten, manche nicht. Ausschalten, um nur aufrechte Karten zu ziehen.',
    data: 'Deine Daten',
    dataBlurb: 'Alles bleibt auf diesem Handy. Nichts wird irgendwohin gesendet, und es gibt kein Konto.',
    clearData: 'Alles Gespeicherte löschen',
    clearDataConfirm: 'Deine Tageskarte und alle gespeicherten Legungen löschen? Das lässt sich nicht rückgängig machen.',
    done: 'Fertig',
  },

  share: { tagline: 'Arcana — kostenlose Tarot-Legungen' },

  // 주제 분류 — 리딩 화면 위쪽 칩

  // 시작 화면 — 문을 열고 들어가는 느낌

  intro: {

    tagline: 'Die Karten warten schon auf dich.',

    enter: 'Eintreten',

  },


  cats: {

    love: 'Liebe',

    crush: 'Schwarm & Ex',

    work: 'Beruf & Studium',

    life: 'Geld & Entscheidungen',

  },


  // 주제별 질문. 스프레드 이름 대신 '무엇이 궁금한가'로 고르게 한다.

  // 각 언어로 따로 썼다 — 직역하면 어느 나라 말도 아닌 문장이 된다.

  topics: {

    loveNow: 'Wo stehen wir wirklich?',

    loveWhere: 'Wohin führt diese Beziehung?',

    loveThem: 'Was fühlt die Person gerade?',

    loveGo: 'Soll ich mit dieser Person weitermachen?',

    crushApproach: 'Soll ich den ersten Schritt machen?',

    crushHeart: 'Wohin mit diesen Gefühlen?',

    crushAgain: 'Gibt es einen Weg zurück?',

    crushLearn: 'Was ist mir davon geblieben?',

    workBlock: 'Was blockiert meine Arbeit?',

    workMove: 'Soll ich wechseln?',

    workMiss: 'Was übersehe ich gerade?',

    workAhead: 'Wie geht das aus?',

    lifeMoney: 'Wo fange ich beim Geld an?',

    lifeChoice: 'Soll ich es wagen?',

    lifeAdvice: 'Was brauche ich heute zu hören?',

    lifeFlow: 'Wie läuft es gerade für mich?',

  },


  spreads: {
    daily: {
      title: 'Tageskarte',
      blurb: 'Eine Karte für heute. Sie bleibt den ganzen Tag dieselbe.',
      pos: { today: { label: 'Heute', lead: 'Worum der heutige Tag dich bittet.' } },
    },
    three: {
      title: 'Vergangenheit · Gegenwart · Zukunft',
      blurb: 'Die klassische Drei-Karten-Legung. Woher es kam, wo es steht, wohin es geht.',
      pos: {
        past:    { label: 'Vergangenheit', lead: 'Was dich hierher gebracht hat.' },
        present: { label: 'Gegenwart',     lead: 'Wo du gerade wirklich stehst.' },
        future:  { label: 'Zukunft',       lead: 'Wohin das führt, wenn sich nichts ändert.' },
      },
    },
    yesno: {
      title: 'Ja oder Nein',
      blurb: 'Frag etwas, das sich mit Ja oder Nein beantworten lässt. Eine Karte entscheidet.',
      examples: [
        'Soll ich das Angebot annehmen?',
        'Ist jetzt der richtige Moment, es zu sagen?',
        'Soll ich diesen Plan weiterverfolgen?',
      ],
      pos: { answer: { label: 'Die Antwort', lead: 'Der Grund hinter der Antwort.' } },
    },
    love: {
      title: 'Liebeslegung',
      blurb: 'Drei Karten zu einer Beziehung – deine, seine oder ihre, und was zwischen euch liegt.',
      examples: [
        'Was bringe ich gerade in diese Beziehung ein?',
        'Was spreche ich nicht aus?',
        'Was würde das diese Woche stabiler machen?',
      ],
      pos: {
        you:     { label: 'Du',            lead: 'Was du hier einbringst.' },
        them:    { label: 'Die andere Seite', lead: 'Wo die andere Person steht.' },
        between: { label: 'Zwischen euch', lead: 'Was zwischen euch wirklich passiert.' },
      },
    },
    career: {
      title: 'Arbeit und Geld',
      blurb: 'Wo du stehst, was blockiert, und was es wirklich voranbringt.',
      examples: [
        'Was blockiert das wirklich?',
        'Wovor drücke ich mich bei dieser Arbeit?',
        'Was würde das diesen Monat voranbringen?',
      ],
      pos: {
        now:   { label: 'Wo du stehst', lead: 'Die Lage, wie sie ist.' },
        block: { label: 'Die Blockade', lead: 'Was es aufhält.' },
        move:  { label: 'Der Weg',      lead: 'Was das wirklich in Bewegung bringt.' },
      },
    },
    // 상황 · 행동 · 결과 — 다른 스프레드에 없는 '결과' 자리가 핵심이다.
    outcome: {
      title: 'Situation · Handlung · Ergebnis',
      blurb: 'Wie es steht, was zu tun ist und wohin das führt.',
      examples: [
        'Was soll ich damit machen?',
        'Wie gehe ich mit dieser Lage um?',
        'Was passiert, wenn ich so weitermache?',
      ],
      pos: {
        situation: { label: 'Die Lage', lead: 'Was wirklich vor dir liegt.' },
        action:    { label: 'Was zu tun ist',    lead: 'Der Schritt, den das verlangt.' },
        result:    { label: 'Wohin es führt',    lead: 'Wohin diese Entscheidung führt.' },
      },
    },
  },

  engine: {
    suits: {
      wands:     { name: 'Stäbe',     domain: 'Energie, Antrieb und schöpferische Arbeit' },
      cups:      { name: 'Kelche',    domain: 'Gefühle, Beziehungen und Intuition' },
      swords:    { name: 'Schwerter', domain: 'Denken, Wahrheit und Konflikt' },
      pentacles: { name: 'Münzen',    domain: 'Geld, Arbeit, Gesundheit und die materielle Welt' },
    },
    verdict: {
      yes:   { word: 'Ja',          gloss: 'Die Karte neigt sich zum Ja.' },
      maybe: { word: 'Noch nicht',  gloss: 'Die Karte legt sich nicht fest – die Lage ist noch nicht gefestigt genug für eine klare Antwort.' },
      no:    { word: 'Nein',        gloss: 'Die Karte neigt sich zum Nein.' },
    },
    element: {
      fire:  'Feuer zieht sich durch diese Legung – es geht ums Handeln und um Antrieb, ums Tun statt ums Entscheiden.',
      water: 'Wasser zieht sich durch diese Legung – es geht um Gefühl und Bindung, wie es an der Oberfläche auch aussehen mag.',
      air:   'Luft zieht sich durch diese Legung – es geht um Denken, Wahrheit und um das, was gesagt oder verschwiegen wird.',
      earth: 'Erde zieht sich durch diese Legung – es geht ums Handfeste: Geld, Arbeit, Gesundheit, die konkreten Tatsachen.',
    },
    majors: {
      none: 'Keine Große Arkana dabei. Das hat Alltagsformat – über den Ausgang entscheiden ganz gewöhnliche Entscheidungen von dir, nichts Größeres.',
      all:  'Alle Karten sind Große Arkana. Das ist ein wirklich bedeutsamer Abschnitt, und sein Ausmaß ist größer als jede einzelne Entscheidung dieser Woche.',
      most: '{n} von {total} Karten sind Große Arkana. Etwas Strukturelles bewegt sich – das ist keine Kleinigkeit, auch wenn es so aussieht.',
    },
    reversals: {
      none: 'Keine Karte kam umgekehrt. Was geschieht, bewegt sich offen und in seinem natürlichen Tempo.',
      all:  'Alle Karten kamen umgekehrt. Das alles spielt sich innen ab oder wird zurückgehalten – die Lage klemmt innen, bevor sie irgendwo sonst klemmt.',
      most: 'Die meisten Karten sind umgekehrt. Es ist mehr blockiert, aufgeschoben oder unausgesprochen, als tatsächlich offen liegt.',
    },
  },

  ranks: {
    1: 'Ass', 2: 'Zwei', 3: 'Drei', 4: 'Vier', 5: 'Fünf', 6: 'Sechs', 7: 'Sieben',
    8: 'Acht', 9: 'Neun', 10: 'Zehn', 11: 'Bube', 12: 'Ritter', 13: 'Königin', 14: 'König',
  },
  minorName: (rank, suit) => `${rank} der ${suit}`,
}
