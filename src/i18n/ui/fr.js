// Français. La structure doit être identique à celle de en.js.
export default {
  tabs: { today: 'Aujourd’hui', readings: 'Tirages', library: 'Cartes', journal: 'Journal' },

  common: {
    back: 'Retour',
    close: 'Fermer',
    copied: 'Copié',
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
    data: 'Vos données',
    dataBlurb: 'Tout reste sur ce téléphone. Rien n’est envoyé nulle part et il n’y a pas de compte.',
    clearData: 'Tout supprimer',
    clearDataConfirm: 'Supprimer votre carte du jour et tous les tirages enregistrés ? C’est irréversible.',
    done: 'Terminé',
  },

  share: { tagline: 'Arcana — tirages de tarot gratuits' },

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
      pos: { answer: { label: 'La réponse', lead: 'La raison derrière la réponse.' } },
    },
    love: {
      title: 'Tirage amour',
      blurb: 'Trois cartes sur une relation — la vôtre, la sienne, et ce qui se trouve entre vous.',
      pos: {
        you:     { label: 'Vous',        lead: 'Ce que vous apportez à cette relation.' },
        them:    { label: 'L’autre',     lead: 'Où se tient l’autre personne.' },
        between: { label: 'Entre vous',  lead: 'Ce qui se passe vraiment entre vous.' },
      },
    },
    career: {
      title: 'Travail et argent',
      blurb: 'Où vous en êtes, ce qui bloque, et ce qui fait avancer les choses.',
      pos: {
        now:   { label: 'Où vous en êtes', lead: 'La situation telle qu’elle est.' },
        block: { label: 'Le blocage',      lead: 'Ce qui retient les choses.' },
        move:  { label: 'L’issue',         lead: 'Ce qui fait réellement avancer cela.' },
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
