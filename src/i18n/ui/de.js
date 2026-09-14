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
      pos: { answer: { label: 'Die Antwort', lead: 'Der Grund hinter der Antwort.' } },
    },
    love: {
      title: 'Liebeslegung',
      blurb: 'Drei Karten zu einer Beziehung – deine, seine oder ihre, und was zwischen euch liegt.',
      pos: {
        you:     { label: 'Du',            lead: 'Was du hier einbringst.' },
        them:    { label: 'Die andere Seite', lead: 'Wo die andere Person steht.' },
        between: { label: 'Zwischen euch', lead: 'Was zwischen euch wirklich passiert.' },
      },
    },
    career: {
      title: 'Arbeit und Geld',
      blurb: 'Wo du stehst, was blockiert, und was es wirklich voranbringt.',
      pos: {
        now:   { label: 'Wo du stehst', lead: 'Die Lage, wie sie ist.' },
        block: { label: 'Die Blockade', lead: 'Was es aufhält.' },
        move:  { label: 'Der Weg',      lead: 'Was das wirklich in Bewegung bringt.' },
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
