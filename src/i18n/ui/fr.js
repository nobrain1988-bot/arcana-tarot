// Français. La structure doit être identique à celle de en.js.
export default {
  tabs: { today: 'Aujourd’hui', readings: 'Tirages', library: 'Cartes', journal: 'Journal' },

  common: {
    back: 'Retour',
    close: 'Fermer',
    copied: 'Copié',
    sound: 'Son',
    upright: 'À l’endroit',
    reversed: 'Inversée',
  },

  today: {
    title: 'Votre carte du jour',
    blurb: 'Une carte, tirée pour aujourd’hui seulement. Elle ne changera pas avant demain.',
    reveal: 'Retourner la carte',
  },

  read: {
    eyebrow: 'Tirages',
    title: 'Que voulez-vous demander ?',
    blurb: 'Choisissez un tirage. Tous sont gratuits.',
    askTitle: 'Posez votre question',
    askBlurb: 'Quelque chose qui se répond par oui ou non. Soyez précis.',
    askPlaceholder: 'Dois-je accepter cette proposition ?',
    focusTitle: 'Gardez la situation à l’esprit',
    focusBlurb: 'Écrivez-la si cela vous aide à vous concentrer. Elle reste sur votre téléphone et n’est envoyée nulle part.',
    focusPlaceholder: 'Qu’avez-vous en tête ?',
    draw: 'Mélanger et tirer',
    chooseTitle: 'Choisissez vos cartes',
    chooseBlurb: 'Gardez votre question à l’esprit en choisissant.',
    skip: 'Passer — tirer directement',
    focusTip: 'Les questions en Quoi ou Comment donnent une réponse utilisable. Quand et Est-ce que ne laissent qu’une supposition.',
    askTip: 'Une seule question à la fois, et la plus concrète possible.',
    tryAsking: 'Essayez de demander',
    ownQuestion: 'Poser ma propre question',
    shuffling: 'Mélange en cours',
    newReading: 'Nouveau tirage',
  },

  result: {
    whole: 'Le tirage dans son ensemble',
    share: 'Partager ce tirage',
    again: 'Tirer à nouveau',
    drawnOn: '{card} est sortie, {orientation}.',
  },

  lib: {
    eyebrow: 'Cartes',
    title: 'Les 78 cartes',
    filterAll: 'Les 78',
    filterMajor: 'Majeurs',
    majorArcana: 'Arcanes Majeurs',
  },

  jr: {
    eyebrow: 'Journal',
    emptyTitle: 'Rien pour l’instant',
    emptyBlurb: 'Vos tirages sont enregistrés ici automatiquement, uniquement sur ce téléphone.',
    countOne: '{n} tirage',
    countMany: '{n} tirages',
    clear: 'Effacer',
    clearConfirm: 'Supprimer tous les tirages enregistrés ? C’est irréversible.',
    footer: 'Enregistré uniquement sur cet appareil. Rien n’est envoyé.',
  },

  set: {
    title: 'Réglages',
    language: 'Langue',
    languageBlurb: 'Toute l’application change, y compris le sens des cartes.',
    reversals: 'Cartes inversées',
    reversalsBlurb: 'Certains lisent les cartes inversées, d’autres non. Désactivez pour ne tirer que des cartes à l’endroit.',
    soundBlurb: 'Un bourdon grave et quelques cloches. Généré par l’app, ce n’est pas un enregistrement.',
    data: 'Vos données',
    dataBlurb: 'Tout reste sur ce téléphone. Rien n’est envoyé nulle part et il n’y a pas de compte.',
    clearData: 'Tout supprimer',
    clearDataConfirm: 'Supprimer votre carte du jour et tous les tirages enregistrés ? C’est irréversible.',
    done: 'Terminé',
  },

  share: { tagline: 'Arcana — tirages de tarot gratuits' },

  // 주제 분류 — 리딩 화면 위쪽 칩

  // 시작 화면 — 문을 열고 들어가는 느낌

  intro: {

    tagline: 'Les cartes vous attendent déjà.',

    enter: 'Entrer',

  },


  cats: {



    all: 'Tout',
    love: 'Amour',

    crush: 'Amour secret',

    work: 'Travail et études',

    life: 'Argent et choix',

  },


  // 주제별 질문. 스프레드 이름 대신 '무엇이 궁금한가'로 고르게 한다.

  // 각 언어로 따로 썼다 — 직역하면 어느 나라 말도 아닌 문장이 된다.

  topics: {

    loveNow: 'Où en sommes-nous vraiment ?',

    loveWhere: 'Où va cette relation ?',

    loveThem: 'Que ressent cette personne en ce moment ?',

    loveGo: 'Est-ce que je continue avec cette personne ?',

    loveNeed: 'De quoi notre relation a-t-elle besoin ?',

    loveMiss: 'Qu’est-ce que je ne vois pas ?',

    loveClash: 'Pourquoi on se rate en ce moment ?',

    loveHonest: 'Est-ce que je le dis franchement ?',

    loveLast: 'Est-ce que ça peut durer ?',

    crushApproach: 'Est-ce à moi de faire le premier pas ?',

    crushHeart: 'Que faire de ce que je ressens ?',

    crushAgain: 'Y a-t-il un retour possible ?',

    crushLearn: 'Que m’a laissé cette histoire ?',

    crushThink: 'Pense-t-elle seulement à moi ?',

    crushConfess: 'Que se passe-t-il si je me déclare ?',

    crushLetGo: 'Est-il temps de lâcher ?',

    crushSilence: 'Pourquoi ce silence ?',

    crushSettle: 'Comment mettre de l’ordre dans tout ça ?',

    workBlock: 'Qu’est-ce qui bloque mon travail ?',

    workMove: 'Est-ce que je change de poste ?',

    workMiss: 'Qu’est-ce qui m’échappe ?',

    workAhead: 'Comment cela va-t-il tourner ?',

    workTalent: 'Dans quoi suis-je vraiment bon ?',

    workStay: 'Est-ce que je reste où je suis ?',

    workPeople: 'Comment comprendre cette personne au travail ?',

    workExam: 'Que renforcer avant l’examen ?',

    workLearn: 'Est-ce la bonne chose à apprendre ?',

    lifeMoney: 'Par où commencer côté argent ?',

    lifeChoice: 'Je me lance ou pas ?',

    lifeFlow: 'Comment ça se présente en ce moment ?',

    lifeSpend: 'Cette dépense en vaut-elle la peine ?',

    lifeImportant: 'Qu’est-ce qui compte le plus pour moi ?',

    lifeMove: 'Que se passe-t-il si je déménage ?',

    lifeSave: 'Pourquoi l’argent ne reste jamais ?',

    lifeStart: 'Comment va tourner ce que je commence ?',

    lifeHold: 'À quoi je m’accroche ?',

    lifeAdvice: 'Qu’ai-je besoin d’entendre aujourd’hui ?',

  },


  spreads: {
    daily: {
      title: 'Carte du jour',
      blurb: 'Une carte pour aujourd’hui. Elle reste la même toute la journée.',
      pos: { today: { label: 'Aujourd’hui', lead: 'Ce que cette journée vous demande.' } },
    },
    three: {
      title: 'Passé · Présent · Futur',
      blurb: 'Le tirage classique en trois cartes. D’où cela vient, où cela en est, où cela va.',
      pos: {
        past:    { label: 'Passé',   lead: 'Ce qui vous a amené ici.' },
        present: { label: 'Présent', lead: 'Où vous en êtes réellement en ce moment.' },
        future:  { label: 'Futur',   lead: 'Où cela mène si rien ne change.' },
      },
    },
    yesno: {
      title: 'Oui ou Non',
      blurb: 'Posez une question qui se répond par oui ou non. Une carte décide.',
      examples: [
        'Dois-je accepter cette proposition ?',
        'Est-ce le bon moment pour en parler ?',
        'Dois-je poursuivre ce plan ?',
      ],
      pos: { answer: { label: 'La réponse', lead: 'La raison derrière la réponse.' } },
    },
    love: {
      title: 'Deux personnes',
      blurb: 'Trois cartes sur une relation — la vôtre, la sienne, et ce qui se trouve entre vous.',
      examples: [
        'Qu’est-ce que j’apporte à cette relation en ce moment ?',
        'Qu’est-ce que je ne dis pas à voix haute ?',
        'Qu’est-ce qui rendrait cela plus solide cette semaine ?',
      ],
      pos: {
        you:     { label: 'Vous',        lead: 'Ce que vous apportez à cette relation.' },
        them:    { label: 'L’autre',     lead: 'Où se tient l’autre personne.' },
        between: { label: 'Entre vous',  lead: 'Ce qui se passe vraiment entre vous.' },
      },
    },
    career: {
      title: 'Le blocage',
      blurb: 'Où vous en êtes, ce qui bloque, et ce qui fait avancer les choses.',
      examples: [
        'Qu’est-ce qui bloque vraiment cela ?',
        'Qu’est-ce que j’évite dans ce travail ?',
        'Qu’est-ce qui ferait avancer cela ce mois-ci ?',
      ],
      pos: {
        now:   { label: 'Où vous en êtes', lead: 'La situation telle qu’elle est.' },
        block: { label: 'Le blocage',      lead: 'Ce qui retient les choses.' },
        move:  { label: 'L’issue',         lead: 'Ce qui fait réellement avancer cela.' },
      },
    },
    // 상황 · 행동 · 결과 — 다른 스프레드에 없는 '결과' 자리가 핵심이다.
    outcome: {
      title: 'Situation · Action · Résultat',
      blurb: 'Où en sont les choses, quoi faire, et où cela mène.',
      examples: [
        'Que dois-je faire de cela ?',
        'Comment gérer cette situation ?',
        'Que se passe-t-il si je continue ?',
      ],
      pos: {
        situation: { label: 'La situation', lead: 'Ce qui se trouve réellement devant vous.' },
        action:    { label: 'Quoi faire',    lead: 'Le geste que cela demande.' },
        result:    { label: 'Où cela mène',    lead: 'Là où ce choix vous conduit.' },
      },
    },
    hidden: {
      title: 'Ce que vous ne voyiez pas',
      blurb: 'Sépare ce qui est devant vous de ce qui vous échappe.',
      pos: {
        seen: { label: 'Ce que vous voyez', lead: 'La part que vous connaissez déjà.' },
        unseen: { label: 'Ce qui est caché', lead: 'La part restée hors de votre champ.' },
        know: { label: 'Ce qu’il faut savoir', lead: 'Ce qui change une fois que vous le voyez.' },
      },
    },
    strength: {
      title: 'Ce que vous avez',
      blurb: 'Ce qui est solide, ce qui manque, et où cela sert.',
      pos: {
        have: { label: 'Votre force', lead: 'Ce qui est déjà en vous.' },
        thin: { label: 'Ce qui manque', lead: 'La part qui n’a pas encore mûri.' },
        use: { label: 'Où cela porte', lead: 'Là où cette force agit vraiment.' },
      },
    },
    residue: {
      title: 'Ce qui reste',
      blurb: 'Ce qu’une chose terminée a laissé derrière elle.',
      pos: {
        was: { label: 'Ce qu’il y avait', lead: 'Ce qui était réellement là à l’époque.' },
        left: { label: 'Ce qui reste aujourd’hui', lead: 'Ce qui est encore en vous.' },
        learn: { label: 'Ce que cela a appris', lead: 'À quoi tout cela a servi.' },
      },
    },
    priority: {
      title: 'Ce qui compte',
      blurb: 'Sépare ce qui vous tire de ce qui pèse vraiment.',
      pos: {
        pull: { label: 'Ce qui vous tire', lead: 'Ce qui fait le plus de bruit en ce moment.' },
        real: { label: 'Ce qui compte vraiment', lead: 'Là où le poids se trouve réellement.' },
        first: { label: 'Par où commencer', lead: 'La seule chose à toucher en premier.' },
      },
    },
  },

  engine: {
    suits: {
      wands:     { name: 'Bâtons',  domain: 'énergie, élan et travail créatif' },
      cups:      { name: 'Coupes',  domain: 'émotions, relations et intuition' },
      swords:    { name: 'Épées',   domain: 'pensée, vérité et conflit' },
      pentacles: { name: 'Deniers', domain: 'argent, travail, santé et monde matériel' },
    },
    verdict: {
      yes:   { word: 'Oui',         gloss: 'La carte penche du côté du oui.' },
      maybe: { word: 'Pas encore',  gloss: 'La carte ne tranche pas — la situation n’est pas assez stabilisée pour répondre nettement.' },
      no:    { word: 'Non',         gloss: 'La carte penche du côté du non.' },
    },
    element: {
      fire:  'Le Feu traverse ce tirage : il est question d’action et d’élan, de faire plutôt que de décider.',
      water: 'L’Eau traverse ce tirage : il est question d’émotions et de liens, quelle que soit l’apparence en surface.',
      air:   'L’Air traverse ce tirage : il est question de pensée, de vérité, et de ce qui est dit ou tu.',
      earth: 'La Terre traverse ce tirage : il est question du concret — argent, travail, santé, les faits matériels.',
    },
    majors: {
      none: 'Aucun Arcane Majeur ici. C’est à l’échelle du quotidien — l’issue se joue sur les choix ordinaires que vous faites, pas sur quelque chose de plus grand.',
      all:  'Toutes les cartes sont des Arcanes Majeurs. C’est une période vraiment marquante, et sa portée dépasse n’importe quelle décision de cette semaine.',
      most: '{n} cartes sur {total} sont des Arcanes Majeurs. Quelque chose de structurel bouge — ce n’est pas une petite affaire, même si cela en a l’air.',
    },
    reversals: {
      none: 'Aucune carte inversée. Ce qui se passe avance au grand jour, à son rythme naturel.',
      all:  'Toutes les cartes sont inversées. Tout cela se joue à l’intérieur ou reste retenu — la situation se bloque d’abord en dedans.',
      most: 'La plupart des cartes sont inversées. Il y a plus de bloqué, de reporté et de non-dit que de choses réellement visibles.',
    },
  },

  ranks: {
    1: 'As', 2: 'Deux', 3: 'Trois', 4: 'Quatre', 5: 'Cinq', 6: 'Six', 7: 'Sept',
    8: 'Huit', 9: 'Neuf', 10: 'Dix', 11: 'Valet', 12: 'Cavalier', 13: 'Reine', 14: 'Roi',
  },
  minorName: (rank, suit) => `${rank} de ${suit}`,
}
