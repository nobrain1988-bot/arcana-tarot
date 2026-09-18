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
    together: "Lues ensemble",
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

    health: "Santé",
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

    healthSignal: "Qu’est-ce que mon corps essaie de me dire ?",
    healthBurnout: "Pourquoi je suis tout le temps à plat ?",
    healthSleep: "Pourquoi je n’arrive pas à décrocher le soir ?",
    healthAnxious: "D’où vient vraiment cette anxiété ?",
    healthRest: "Est-ce que je peux m’arrêter et souffler un peu ?",
    healthHabit: "Que se passe-t-il si je change cette habitude ?",
    healthSlipBack: "Pourquoi je retombe toujours dans mes vieilles habitudes ?",
    healthMind: "Sur quoi m’appuyer quand ça devient lourd ?",
    healthBody: "Comment faire la paix avec mon corps ?",
    healthBeside: "Comment tenir auprès d’un proche malade ?",
    healthWaitBaby: "Comment rester proches en espérant un enfant ?",
    healthExpecting: "Qu’est-ce qui compte le plus pendant ma grossesse ?",
    healthBirth: "Sur quelle force je peux déjà compter pour l’accouchement ?",
    healthLoss: "Après la perte du bébé, qu’est-ce qui reste en moi ?",
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

  // ── 분류 아래 안내 한 줄. 지금은 건강 분류에만 있다 — 진단이 아니라 들여다보는 자리라는 것. ──
  catNote: {
    health: "Pour réfléchir, pas pour diagnostiquer. Pour toute question médicale, parlez-en à un médecin.",
  },

  // ── 질문별 자리 설명 ────────────────────────────────────────
  // 스프레드의 pos.*.lead 는 어느 질문에나 붙는 말이라("지금 상황 그대로.") 답이 질문과 상관없어 보였다.
  // 여기 있는 문장이 그 자리를 대신한다 — 그 질문의 주어가 들어간 렌즈. 없는 질문은 스프레드 lead 로 떨어진다.
  topicLeads: {
    loveNow: { you: "Votre côté de l’histoire — où vous en êtes avec l’autre.", them: "De son côté — où l’autre en est avec vous.", between: "Ce que vous êtes vraiment l’un pour l’autre en ce moment." },
    loveWhere: { past: "Ce qui a porté cette relation jusqu’ici.", present: "Où vous en êtes, tous les deux, dans cette relation aujourd’hui.", future: "Où va cette relation si elle continue sur cette lancée." },
    loveThem: { you: "Ce que vous projetez en essayant de lire cette personne.", them: "Ce qui se passe vraiment dans sa tête en ce moment.", between: "La part de ce qu’elle ressent qui vous parvient réellement." },
    loveGo: { answer: "Continuer ou non avec cette personne, et pourquoi." },
    loveNeed: { situation: "Ce que vous avez vraiment entre les mains, tous les deux, aujourd’hui.", action: "La seule chose que cette relation vous demande maintenant.", result: "Ce que devient cette relation une fois ce besoin comblé." },
    loveMiss: { seen: "Ce que vous voyez déjà clairement dans cette relation.", unseen: "La part de cette relation que vous ne regardiez pas.", know: "Ce qui change entre vous une fois la part cachée mise au jour." },
    loveClash: { now: "Là où vous vous retrouvez toujours, tous les deux, quand vous vous ratez.", block: "Ce qui vous met sans cesse à contretemps l’un de l’autre.", move: "Ce qui vous remet au même pas, tous les deux." },
    loveHonest: { answer: "S’il faut le dire tout haut, et pourquoi." },
    loveLast: { past: "Ce qui vous a tenus ensemble jusqu’ici.", present: "Ce qui vous tient ensemble en ce moment.", future: "Jusqu’où ce qui vous tient aujourd’hui peut vous porter." },
    crushApproach: { answer: "Si c’est à vous de faire le premier pas, et pourquoi." },
    crushHeart: { situation: "Là où ces sentiments vous placent en ce moment.", action: "Le geste que ces sentiments vous demandent.", result: "Où ces sentiments vous mènent si vous faites ce geste." },
    crushAgain: { answer: "S’il existe un chemin de retour l’un vers l’autre, et pourquoi." },
    crushLearn: { was: "Ce que ce lien était vraiment, tant qu’il a duré.", left: "La part de ce lien qui ne s’est jamais vraiment effacée.", learn: "Ce que ce lien était venu vous apprendre." },
    crushThink: { you: "Ce que vous portez en vous demandant si elle pense à vous aussi.", them: "La place que vous occupez réellement dans sa tête.", between: "Ce qui passe vraiment entre vous, pas seulement dans votre tête." },
    crushConfess: { situation: "Où en sont les choses entre vous avant que vous ne parliez.", action: "Comment le lui dire, si vous décidez d’y aller.", result: "Où vous atterrissez, tous les deux, une fois qu’elle sait." },
    crushLetGo: { answer: "S’il est temps de lâcher prise, et pourquoi." },
    crushSilence: { now: "Où vous en êtes, tous les deux, depuis que le silence s’est installé.", block: "Ce qui retient vraiment l’autre de vous faire signe.", move: "Ce qui vous ferait reprendre la conversation." },
    crushSettle: { situation: "Ce qui reste encore emmêlé dans votre tête à ce sujet.", action: "La seule chose qui commence vraiment à y remettre de l’ordre.", result: "Où en est votre tête une fois que c’est fait." },
    workBlock: { now: "Là où ce travail est au point mort en ce moment.", block: "Ce qui retient vraiment ce travail.", move: "Ce qui remet ce travail en marche." },
    workMove: { answer: "Changer de poste maintenant ou non — et la raison derrière la réponse." },
    workMiss: { seen: "La part de ce travail que vous voyez déjà clairement.", unseen: "Le recoin de ce travail que vous ne regardiez pas.", know: "Ce qui change dans ce travail une fois ce recoin mis au jour." },
    workAhead: { situation: "Où en est réellement ce travail aujourd’hui.", action: "Le geste que ce travail vous demande maintenant.", result: "Où ce travail aboutit si vous faites ce geste." },
    workTalent: { have: "Ce que vous faites bien, même sans l’avoir jamais nommé.", thin: "La compétence qui vous manque encore, juste à côté de celle que vous avez.", use: "Là où ce talent compte vraiment." },
    workStay: { answer: "Rester où vous êtes ou non, et la raison." },
    workPeople: { you: "Ce que vous apportez à chaque échange avec cette personne.", them: "Où se tient vraiment cette personne, derrière ce qu’elle vous montre au travail.", between: "Ce qui se passe réellement entre vous et cette personne au travail." },
    workExam: { have: "Ce qui est déjà solide à l’approche de l’examen.", thin: "La part à consolider avant l’examen.", use: "Là où votre préparation compte vraiment le jour de l’examen." },
    workLearn: { answer: "Si ce que vous apprenez en ce moment est la bonne chose, et pourquoi." },
    lifeMoney: { now: "Où vous en êtes avec votre argent en ce moment.", block: "Ce qui garde vos finances emmêlées.", move: "Par où commencer vraiment, côté argent." },
    lifeChoice: { answer: "Vous lancer ou non, et pourquoi." },
    lifeFlow: { past: "Ce qui a mis les choses dans ce courant-là.", present: "Comment ça se présente vraiment pour vous en ce moment.", future: "Où le courant vous porte si rien ne bouge." },
    lifeSpend: { answer: "Si cette dépense en vaut la peine, et pourquoi." },
    lifeImportant: { pull: "De tout ce que vous avez sur les bras, ce qui crie le plus fort.", real: "Ce qui compterait encore une fois le bruit retombé.", first: "La première chose à prendre en main, maintenant que vous voyez ce qui compte." },
    lifeMove: { situation: "Où vous en êtes avec ce déménagement en ce moment.", action: "Ce que ce déménagement vous demande en premier.", result: "Où ce déménagement vous mène si vous partez." },
    lifeSave: { now: "Comment l’argent entre et sort chez vous en ce moment.", block: "Par où votre argent continue de fuir.", move: "Ce qui ferait enfin rester l’argent." },
    lifeStart: { situation: "D’où part cette nouvelle chose que vous commencez.", action: "Ce que ce nouveau départ vous demande dès le début.", result: "Comment ce nouveau départ tourne une fois que vous lui donnez ce qu’il demande." },
    lifeHold: { seen: "Ce à quoi vous savez déjà que vous vous accrochez.", unseen: "Ce que vous serrez vraiment, en dessous.", know: "Ce qui laisse votre main s’ouvrir une fois que vous le voyez." },
    healthSignal: { seen: "Le signal de votre corps que vous avez déjà remarqué.", unseen: "Ce que votre corps réclame sans cesse et que vous continuez d’ignorer.", know: "Ce qui change dans la façon de prendre soin de votre corps, une fois que vous l’écoutez." },
    healthBurnout: { now: "À quel point vous êtes vraiment à plat, sans rien enjoliver.", block: "Ce qui vous vide plus vite que vous n’arrivez à vous recharger.", move: "Ce qui commence à remettre quelque chose dans le réservoir." },
    healthSleep: { now: "Comment se passent vraiment vos nuits une fois la lumière éteinte.", block: "Ce qui fait encore tourner vos pensées quand tout votre corps ne demande qu’à s’arrêter.", move: "Ce qui laisse enfin votre tête se poser le soir." },
    healthAnxious: { seen: "Ce que vous vous racontez sur l’origine de cette anxiété.", unseen: "Ce que l’anxiété pointe vraiment, sous l’histoire que vous vous racontez.", know: "Comment l’anxiété change une fois que vous nommez ce dont il s’agit vraiment." },
    healthRest: { answer: "Vous arrêter et souffler un peu maintenant, ou non — et pourquoi." },
    healthHabit: { situation: "Où vous en êtes avec cette habitude en ce moment.", action: "Ce que changer cette habitude demande vraiment.", result: "Où vous vous retrouvez une fois l’habitude changée." },
    healthSlipBack: { now: "Où vous en êtes avec la vieille habitude en ce moment.", block: "Ce qui vous ramène sans cesse à la vieille habitude.", move: "Ce qui vous empêche de retomber, cette fois." },
    healthMind: { have: "Ce qui vous tient debout quand ça devient lourd.", thin: "L’appui que vous cherchez et qui n’est pas encore tout à fait là.", use: "Là où ce qui vous tient allège vraiment une journée lourde." },
    healthBody: { situation: "Où en sont les choses entre vous et votre corps en ce moment.", action: "Ce que faire la paix avec votre corps vous demande vraiment.", result: "Où vous en êtes, vous et votre corps, une fois ce geste fait." },
    healthBeside: { you: "Ce que vous portez pendant que vous êtes à son chevet.", them: "Ce que ressent votre proche, pas ce qu’il montre.", between: "Ce qui passe vraiment entre vous et votre proche pendant la maladie." },
    healthWaitBaby: { you: "Ce que vous portez dans cette attente d’un enfant, dit ou non.", them: "Votre partenaire dans la même attente, pas forcément au même point que vous.", between: "Ce que l’attente fait à l’espace entre vous." },
    healthExpecting: { pull: "Ce qui fait le plus de bruit dans votre tête avec un bébé en route.", real: "Ce qui pèse vraiment pendant que vous attendez cet enfant.", first: "La seule chose dont prendre soin en premier avant l’arrivée du bébé." },
    healthBirth: { have: "La force que vous portez déjà en vous à l’approche de l’accouchement.", thin: "Ce qui vous manque encore alors que l’accouchement approche.", use: "Là où cette force vous tiendra vraiment quand l’accouchement viendra." },
    healthLoss: { was: "Ce dont ce temps avec le bébé était fait.", left: "Ce qui, de ce temps avec le bébé, est encore en vous aujourd’hui.", learn: "Ce que vous avez appris en aimant cet enfant." },
  },

  // ── 질문별 마무리 한 줄 — 세 장이 이 질문에 어떻게 하나의 답이 되는지, 어느 장을 오래 볼지 ──
  topicClose: {
    loveNow: "Les deux premières cartes montrent où chacun se tient de son côté. La troisième, c’est où vous en êtes ensemble — la réponse est là, alors attardez-vous surtout dessus.",
    loveWhere: "Lisez les trois cartes comme une seule histoire : d’où vient cette relation, où elle en est, où elle se dirige. Restez le plus longtemps sur la troisième — c’est votre réponse ; la deuxième vous dit à quel point cette réponse tient.",
    loveThem: "La deuxième carte est celle que vous cherchez : restez-y le plus longtemps. La première colore la façon dont vous la lisez, et la troisième dit quelle part de ce qui se passe dans sa tête vous parvient sans que vous ayez à aller la chercher.",
    loveGo: "La réponse au-dessus dit si vous continuez avec cette personne. La carte en dessous en est la raison — ce que rester avec elle donnerait vraiment — et cette part vaut plus que le oui ou le non lui-même.",
    loveNeed: "La première carte, c’est ce que vous avez à deux ; la deuxième, la seule chose à y ajouter ; la troisième, ce que devient la relation une fois ce besoin comblé. Votre réponse est la deuxième carte — ce dont cette relation a besoin est réellement à votre portée.",
    loveMiss: "La première carte est la part que vous connaissez déjà — vérifiez-la, puis gardez-la sous les yeux, car la deuxième se lit par rapport à elle. La deuxième est votre réponse, le côté de cette relation que vous ne regardiez pas : restez-y le plus longtemps, et lisez la troisième comme ce qui change entre vous une fois cette part mise au jour.",
    loveClash: "La première carte, c’est là où vous n’êtes plus au même pas ; la deuxième, pourquoi ; la troisième, ce qui vous y remet. Vous avez demandé pourquoi, alors restez le plus longtemps sur la deuxième — la troisième n’a de sens qu’une fois que vous savez ce qu’elle doit défaire.",
    loveHonest: "La réponse au-dessus dit s’il faut le dire tout haut. La carte est la raison — ce que cela met en mouvement si vous le dites, et ce que cela met en mouvement si vous le taisez — alors lisez cette part avant de trancher dans un sens ou dans l’autre.",
    loveLast: "Lisez les trois d’un seul trait — ce qui vous a tenus, ce qui vous tient, jusqu’où cela vous porte. La troisième carte est la réponse, mais c’est sur la deuxième qu’il faut s’attarder : ce qui vous tient ensemble aujourd’hui est ce qui devra tenir la distance.",
    crushApproach: "La réponse en haut dit si vous faites le premier pas ; la carte en dessous dit pourquoi. Passez plus de temps sur la carte que sur la réponse — lisez-y comment vous y prendre, pas seulement s’il faut y aller.",
    crushHeart: "Lisez les trois cartes dans l’ordre : où en sont les sentiments, quoi en faire, où cela mène. Restez le plus longtemps sur la deuxième — c’est elle qui répond à votre question — et servez-vous de la troisième pour vérifier si le geste en vaut la peine.",
    crushAgain: "La réponse en haut dit s’il existe un chemin de retour l’un vers l’autre ; la carte en dessous en donne la raison. Restez sur la raison — si c’est oui, elle dit ce que ce retour vous demanderait ; si c’est non, ce qui s’y oppose ; si c’est « pas encore », ce qui doit d’abord se poser.",
    crushLearn: "La première carte, c’est ce que c’était ; la deuxième, ce qu’il en reste ; la troisième, à quoi cela servait. Restez le plus longtemps sur la deuxième — ce que cette histoire vous a laissé, c’est ce qui est encore en vous maintenant, pas ce à quoi elle ressemblait à l’époque.",
    crushThink: "La deuxième carte est celle que vous cherchez — elle dit si vous avez ne serait-ce qu’une place dans ses pensées, alors restez-y le plus longtemps. Lisez la première en regard pour voir quelle part de l’attirance n’est qu’à vous, et la troisième pour savoir si quelque chose bouge réellement entre vous.",
    crushConfess: "Vous avez demandé ce qui se passe si vous vous déclarez — c’est la troisième carte, alors restez-y le plus longtemps. La première montre où en sont les choses avant que vous ne disiez quoi que ce soit, et la deuxième comment le dire pour que la troisième ait sa chance.",
    crushLetGo: "Le mot en haut dit s’il est temps de lâcher. La carte en dessous est la raison — et elle montre aussi ce que lâcher demandera si c’est oui, ce qui vaut encore la peine d’être gardé si c’est non, et ce qui doit d’abord se poser avant de pouvoir trancher si c’est « pas encore ».",
    crushSilence: "Vous avez demandé pourquoi ce silence — c’est la deuxième carte, alors restez-y le plus longtemps. La première, c’est le silence tel qu’il est ; la troisième, ce qui le romprait, et elle n’a de sens qu’une fois que la deuxième vous a donné la raison.",
    crushSettle: "La deuxième carte est ce que vous avez demandé — la chose à faire — alors restez-y le plus longtemps. La première vous dit ce que ce geste doit démêler, et la troisième à quoi ressemble votre tête une fois apaisée, pour que vous sachiez quand vous y êtes.",
    workBlock: "La deuxième carte est la réponse — ce qui retient ce travail ; la première, ce que ce blocage lui a déjà fait ; la troisième, ce qui le desserre. Restez le plus longtemps sur la deuxième, et lisez les deux autres autour d’elle.",
    workMove: "Le mot au-dessus tranche sur le changement de poste ; la carte en donne la raison. Lisez-y ce que ce changement vous demanderait maintenant.",
    workMiss: "La première carte est la part de ce travail que vous aviez déjà sous les yeux, la deuxième le recoin que vous ne regardiez pas — c’est lui que vous cherchez — et la troisième ce qui change une fois qu’il est mis au jour. Restez le plus longtemps sur la deuxième.",
    workAhead: "La première carte, c’est où en est le travail ; la deuxième, le geste qu’il demande ; la troisième, où il aboutit. Vous avez demandé comment cela va tourner, alors restez sur la troisième — mais lisez-la comme la suite de la deuxième, pas toute seule.",
    workTalent: "La première carte est la réponse elle-même — ce que vous faites bien — et la deuxième marque l’endroit où cette force s’amincit, pour que vous sachiez où elle s’arrête. Restez le plus longtemps sur la première, puis laissez la troisième vous dire où la mettre à profit.",
    workStay: "Le mot au-dessus tranche sur le fait de rester — oui, non, ou pas encore. La carte en dessous dit pourquoi : lisez-y ce que rester vous donne et ce que cela vous coûte.",
    workPeople: "La première carte, c’est ce que vous apportez ; la deuxième, la personne que vous essayez de lire ; la troisième, ce qui circule vraiment entre vous. Restez le plus longtemps sur la deuxième — c’est la lecture que vous demandiez — puis confrontez-la à la troisième ; là où les deux ne s’accordent pas, la première carte en est souvent la raison.",
    workExam: "La première carte, c’est ce qui est déjà solide ; la deuxième, ce qu’il faut consolider ; la troisième, là où votre préparation se voit le jour J. Vous avez demandé quoi renforcer, alors lisez la deuxième le plus longtemps — la première vous dit où ne pas perdre de temps.",
    workLearn: "La réponse au-dessus dit si c’est la bonne chose à apprendre. La carte en dessous est la raison — lisez-y ce que cet apprentissage construit en vous, et ce qu’il ne construit pas.",
    lifeMoney: "La première carte, c’est où en est votre argent ; la deuxième, ce qui le garde emmêlé ; la troisième, le fil à tirer en premier. Vous avez demandé par où commencer, alors restez le plus longtemps sur la troisième — c’est la vraie réponse.",
    lifeChoice: "La réponse au-dessus est le verdict de la carte sur le fait de vous lancer — oui, non, ou pas encore. Le texte de la carte en est la raison ; lisez-y ce que ce pas vous demanderait vraiment.",
    lifeFlow: "Lisez les trois comme un seul courant : la première carte est ce qui l’a mis en mouvement, la deuxième où il en est, la troisième où il vous porte. Vous avez demandé « en ce moment », alors restez le plus longtemps sur la deuxième — les deux autres vous disent dans quel sens ça va.",
    lifeSpend: "La réponse au-dessus dit si cette dépense en vaut la peine — le texte de la carte est la raison. Lisez-y ce que cet argent vous achète vraiment, pas seulement ce que cela coûte.",
    lifeImportant: "La deuxième carte est la réponse à cette question ; la première, ce qui criait par-dessus ; la troisième, par où commencer. Restez le plus longtemps sur la deuxième — la première et la troisième ne sont là que pour la cadrer.",
    lifeMove: "La première carte, c’est où en est le déménagement ; la deuxième, ce qu’il vous demande ; la troisième, où il vous dépose. La question, c’est « que se passe-t-il », alors restez le plus longtemps sur la troisième — mais lisez-la comme le résultat de la deuxième, pas toute seule.",
    lifeSave: "La première carte, c’est comment l’argent va et vient chez vous ; la deuxième, la fuite ; la troisième, ce qui le ferait rester. Vous avez demandé « pourquoi », alors restez le plus longtemps sur la deuxième — la troisième n’a de sens qu’une fois la fuite repérée.",
    lifeStart: "La première carte, c’est d’où part ce que vous commencez ; la deuxième, ce que cela vous demande au début ; la troisième, comment cela tourne. Vous avez demandé comment cela va tourner, alors restez le plus longtemps sur la troisième — lisez-la comme là où mène la deuxième.",
    lifeHold: "Mettez les trois ensemble : la première carte est la part que vous vous laissez voir, la deuxième ce que vous refusez réellement de lâcher, la troisième ce qui desserre votre prise une fois que vous le voyez. La réponse à cette question, c’est la deuxième carte — restez-y le plus longtemps.",
    healthSignal: "La première carte, c’est ce que vous sentez déjà ; la deuxième, ce que votre corps réclame depuis longtemps et que vous n’écoutiez pas ; la troisième, ce qui change dans la façon d’en prendre soin une fois que vous l’écoutez. Restez le plus longtemps sur la deuxième — c’est la part que votre corps attendait que vous remarquiez.",
    healthBurnout: "La première carte nomme à quel point vous êtes vraiment vide ; la deuxième, la fuite ; la troisième, par où le plein recommence. Restez le plus longtemps sur la deuxième — on ne remplit pas un réservoir qui fuit encore.",
    healthSleep: "La première carte, c’est la nuit telle qu’elle est ; la deuxième, ce qui garde votre tête allumée ; la troisième, ce qui la laisse s’éteindre. Restez le plus longtemps sur la deuxième — les pensées qui ne se posent pas portent souvent quelque chose que la journée n’a pas eu le temps de traiter.",
    healthAnxious: "La première carte, c’est l’histoire que vous vous racontez sur cette anxiété ; la deuxième, ce dont il s’agit vraiment ; la troisième, ce qui bouge une fois que vous l’appelez par son nom. Restez le plus longtemps sur la deuxième — l’anxiété a tendance à hausser le ton tant que ce qui se passe vraiment n’a pas été dit.",
    healthRest: "La réponse au-dessus dit si vous pouvez vous arrêter un moment ; la carte en est la raison — ce que la pause vous rendrait, ou ce qui doit d’abord se poser pour que le repos tienne vraiment. Ce qu’elle tranche, c’est le moment, pas la question de savoir si vous méritez ce repos.",
    healthHabit: "La première carte, c’est où vous en êtes avec l’habitude ; la deuxième, ce que la changer demande vraiment ; la troisième, où cela vous laisse. Restez le plus longtemps sur la troisième — c’est la réponse à ce que vous avez demandé, et la deuxième est le prix pour y arriver.",
    healthSlipBack: "La première carte, c’est où vous en êtes aujourd’hui avec la vieille habitude ; la deuxième, ce qui vous y ramène ; la troisième, ce qui vous aide à vous en tenir loin cette fois. Restez le plus longtemps sur la deuxième — retomber, c’est rarement une question de volonté ; c’est presque toujours lié à ce que la vieille habitude faisait pour vous en silence.",
    healthMind: "La première carte, c’est ce qui vous tient déjà debout quand ça devient lourd ; la deuxième, l’appui que vous cherchez et qui n’est pas encore tout à fait là ; la troisième, là où s’appuyer sur la première allège vraiment la journée. Restez le plus longtemps sur la première — les jours lourds, partez de ce qui vous tient déjà avant d’essayer de construire quoi que ce soit de neuf.",
    healthBody: "La première carte, c’est où en sont les choses entre vous et votre corps ; la deuxième, le geste qui rend la paix possible ; la troisième, où ce geste vous laisse tous les deux. Restez le plus longtemps sur la deuxième — vous avez demandé quoi faire, et cette carte est la réponse ; la troisième montre où cela mène.",
    healthBeside: "La première carte, c’est ce que vous portez ; la deuxième, ce que votre proche ressent sous ce qu’il montre ; la troisième, ce qui circule entre vous à travers tout cela. Restez le plus longtemps sur la première — vous avez demandé comment tenir, et personne ne tient longtemps en ignorant ce qu’il porte lui-même.",
    healthWaitBaby: "La première carte, c’est vous dans cette attente d’un enfant ; la deuxième, votre partenaire dans la même attente ; la troisième, ce que l’attente fait de vous deux. Restez le plus longtemps sur la troisième — vous avez demandé comment rester proches, et c’est là que la proximité se garde ou s’use en silence.",
    healthExpecting: "La première carte, c’est ce qui fait le plus de bruit pendant la grossesse ; la deuxième, ce qui pèse vraiment ; la troisième, la seule chose dont prendre soin en premier. Restez le plus longtemps sur la deuxième — bien des choses font du bruit ces mois-ci, et cette carte est ce qui vous permet de distinguer le bruyant du lourd.",
    healthBirth: "La première carte, c’est la force que vous avez déjà pour l’accouchement ; la deuxième, ce qui vous manque encore ; la troisième, là où cette force vous tiendra le jour venu. Restez le plus longtemps sur la première — c’est la réponse à ce que vous avez demandé, et elle est déjà en vous ; la deuxième vous montre seulement où vous ménager à mesure que le jour approche.",
    healthLoss: "Lues dans l’ordre, les trois cartes disent de quoi ce temps avec le bébé était fait, ce qui en est encore en vous, et ce qu’aimer cet enfant vous a appris — mis ensemble, c’est cela qui reste. Restez le plus longtemps sur la deuxième : vous avez demandé ce qui reste en vous, et la réponse est là ; la troisième parle de l’amour, pas de la perte.",
  },

  ranks: {
    1: 'As', 2: 'Deux', 3: 'Trois', 4: 'Quatre', 5: 'Cinq', 6: 'Six', 7: 'Sept',
    8: 'Huit', 9: 'Neuf', 10: 'Dix', 11: 'Valet', 12: 'Cavalier', 13: 'Reine', 14: 'Roi',
  },
  minorName: (rank, suit) => `${rank} de ${suit}`,
}
