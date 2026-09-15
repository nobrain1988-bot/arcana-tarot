// Español. La estructura debe ser idéntica a en.js.
export default {
  tabs: { today: 'Hoy', readings: 'Tiradas', library: 'Cartas', journal: 'Diario' },

  common: {
    back: 'Atrás',
    close: 'Cerrar',
    copied: 'Copiado al portapapeles',
    upright: 'Al derecho',
    reversed: 'Invertida',
  },

  today: {
    title: 'Tu carta de hoy',
    blurb: 'Una carta, sacada solo para hoy. No cambiará hasta mañana.',
    reveal: 'Dar la vuelta a la carta',
  },

  read: {
    eyebrow: 'Tiradas',
    title: '¿Qué quieres preguntar?',
    blurb: 'Elige una tirada. Todas son gratuitas.',
    askTitle: 'Haz tu pregunta',
    askBlurb: 'Algo que se pueda responder con un sí o un no. Sé concreto.',
    askPlaceholder: '¿Debería aceptar la oferta?',
    focusTitle: 'Ten presente la situación',
    focusBlurb: 'Escríbelo si te ayuda a concentrarte. Se queda en tu teléfono: no se envía a ninguna parte.',
    focusPlaceholder: '¿Qué tienes en mente?',
    draw: 'Barajar y sacar',
    chooseTitle: 'Elige tus cartas',
    chooseBlurb: 'Piensa en tu pregunta mientras eliges.',
    skip: 'Omitir — solo sacar',
    focusTip: 'Preguntar con Qué o Cómo te da algo que puedes usar. Cuándo y Será que solo dan una conjetura.',
    askTip: 'Una pregunta a la vez, y que sea concreta.',
    tryAsking: 'Prueba a preguntar',
    ownQuestion: 'Preguntar lo mío',
    shuffling: 'Barajando',
    newReading: 'Nueva tirada',
  },

  result: {
    whole: 'La tirada en conjunto',
    share: 'Compartir esta tirada',
    again: 'Sacar de nuevo',
    drawnOn: 'Salió {card}, {orientation}.',
  },

  lib: {
    eyebrow: 'Cartas',
    title: 'Las 78 cartas',
    filterAll: 'Las 78',
    filterMajor: 'Mayores',
    majorArcana: 'Arcanos Mayores',
  },

  jr: {
    eyebrow: 'Diario',
    emptyTitle: 'Todavía nada',
    emptyBlurb: 'Tus tiradas se guardan aquí automáticamente, solo en este teléfono.',
    countOne: '{n} tirada',
    countMany: '{n} tiradas',
    clear: 'Borrar',
    clearConfirm: '¿Borrar todas las tiradas guardadas? No se puede deshacer.',
    footer: 'Guardado solo en este dispositivo. No se sube nada.',
  },

  set: {
    title: 'Ajustes',
    language: 'Idioma',
    languageBlurb: 'Cambia toda la aplicación, incluidos los significados de las cartas.',
    reversals: 'Cartas invertidas',
    reversalsBlurb: 'Hay quien lee las cartas invertidas y quien no. Desactívalo para sacar solo cartas al derecho.',
    data: 'Tus datos',
    dataBlurb: 'Todo se queda en este teléfono. No se envía nada a ninguna parte y no hay cuenta.',
    clearData: 'Borrar todo lo guardado',
    clearDataConfirm: '¿Borrar tu carta del día y todas las tiradas guardadas? No se puede deshacer.',
    done: 'Listo',
  },

  share: { tagline: 'Arcana — tiradas de tarot gratis' },

  // 주제 분류 — 리딩 화면 위쪽 칩

  // 시작 화면 — 문을 열고 들어가는 느낌

  intro: {

    tagline: 'Las cartas ya te están esperando.',

    enter: 'Entrar',

  },


  cats: {

    love: 'Amor',

    crush: 'Amor no correspondido',

    work: 'Trabajo y estudios',

    life: 'Dinero y decisiones',

  },


  // 주제별 질문. 스프레드 이름 대신 '무엇이 궁금한가'로 고르게 한다.

  // 각 언어로 따로 썼다 — 직역하면 어느 나라 말도 아닌 문장이 된다.

  topics: {

    loveNow: '¿En qué punto estamos de verdad?',

    loveWhere: '¿Hacia dónde va esta relación?',

    loveThem: '¿Qué está sintiendo esa persona?',

    loveGo: '¿Sigo adelante con esta persona?',

    crushApproach: '¿Doy yo el primer paso?',

    crushHeart: '¿Qué hago con lo que siento?',

    crushAgain: '¿Hay una vuelta para nosotros?',

    crushLearn: '¿Qué me deja todo esto?',

    workBlock: '¿Qué está frenando mi trabajo?',

    workMove: '¿Me cambio de trabajo?',

    workMiss: '¿Qué se me está escapando?',

    workAhead: '¿Cómo va a salir esto?',

    lifeMoney: '¿Por dónde empiezo con el dinero?',

    lifeChoice: '¿Me lanzo o no?',

    lifeAdvice: '¿Qué necesito escuchar hoy?',

    lifeFlow: '¿Cómo viene mi racha ahora?',

  },


  spreads: {
    daily: {
      title: 'Carta del día',
      blurb: 'Una carta para hoy. No cambia en todo el día.',
      pos: { today: { label: 'Hoy', lead: 'Lo que el día de hoy te pide.' } },
    },
    three: {
      title: 'Pasado · Presente · Futuro',
      blurb: 'La tirada clásica de tres cartas. De dónde viene, dónde está y hacia dónde va.',
      pos: {
        past:    { label: 'Pasado',   lead: 'Lo que te trajo hasta aquí.' },
        present: { label: 'Presente', lead: 'Dónde estás realmente ahora mismo.' },
        future:  { label: 'Futuro',   lead: 'Hacia dónde va esto si nada cambia.' },
      },
    },
    yesno: {
      title: 'Sí o No',
      blurb: 'Pregunta algo que se responda con un sí o un no. Una carta decide.',
      examples: [
        '¿Debería aceptar la oferta?',
        '¿Es buen momento para decirlo?',
        '¿Sigo adelante con este plan?',
      ],
      pos: { answer: { label: 'La respuesta', lead: 'El motivo detrás de la respuesta.' } },
    },
    love: {
      title: 'Tirada de amor',
      blurb: 'Tres cartas sobre una relación: la tuya, la suya y lo que hay entre ambos.',
      examples: [
        '¿Qué estoy aportando yo a esto ahora?',
        '¿Qué no estoy diciendo en voz alta?',
        '¿Qué haría esto más firme esta semana?',
      ],
      pos: {
        you:     { label: 'Tú',           lead: 'Lo que tú aportas a esto.' },
        them:    { label: 'La otra parte', lead: 'Dónde está la otra persona.' },
        between: { label: 'Entre ustedes', lead: 'Lo que de verdad está pasando entre ustedes.' },
      },
    },
    career: {
      title: 'Trabajo y dinero',
      blurb: 'Dónde estás, qué te está bloqueando y qué hace que avance.',
      examples: [
        '¿Qué está bloqueando esto realmente?',
        '¿Qué estoy evitando en este trabajo?',
        '¿Qué haría avanzar esto este mes?',
      ],
      pos: {
        now:   { label: 'Dónde estás',  lead: 'La situación tal como está.' },
        block: { label: 'El bloqueo',   lead: 'Lo que lo está frenando.' },
        move:  { label: 'La salida',    lead: 'Lo que de verdad hace avanzar esto.' },
      },
    },
    // 상황 · 행동 · 결과 — 다른 스프레드에 없는 '결과' 자리가 핵심이다.
    outcome: {
      title: 'Situación · Acción · Resultado',
      blurb: 'Cómo está la cosa, qué hacer y adónde lleva eso.',
      examples: [
        '¿Qué hago con esto?',
        '¿Cómo manejo esta situación?',
        '¿Qué pasa si sigo adelante?',
      ],
      pos: {
        situation: { label: 'La situación', lead: 'Lo que de verdad tienes delante.' },
        action:    { label: 'Qué hacer',    lead: 'El movimiento que esto pide.' },
        result:    { label: 'Dónde acaba',    lead: 'Adónde te lleva esa decisión.' },
      },
    },
  },

  engine: {
    suits: {
      wands:     { name: 'Bastos',  domain: 'energía, impulso y trabajo creativo' },
      cups:      { name: 'Copas',   domain: 'emociones, relaciones e intuición' },
      swords:    { name: 'Espadas', domain: 'pensamiento, verdad y conflicto' },
      pentacles: { name: 'Oros',    domain: 'dinero, trabajo, salud y el mundo material' },
    },
    verdict: {
      yes:   { word: 'Sí',       gloss: 'La carta se inclina por el sí.' },
      maybe: { word: 'Aún no',   gloss: 'La carta no se compromete: la situación no está lo bastante asentada para responder con claridad.' },
      no:    { word: 'No',       gloss: 'La carta se inclina por el no.' },
    },
    element: {
      fire:  'El Fuego recorre esta tirada: va de actuar, de impulso, de hacer algo más que de decidir algo.',
      water: 'El Agua recorre esta tirada: va de emociones y vínculos, sea cual sea la apariencia en la superficie.',
      air:   'El Aire recorre esta tirada: va de pensamiento, de verdad y de lo que se dice o se calla.',
      earth: 'La Tierra recorre esta tirada: va de lo práctico — dinero, trabajo, salud, los hechos concretos.',
    },
    majors: {
      none: 'No hay ningún Arcano Mayor. Esto es de tamaño cotidiano: el resultado lo deciden las elecciones normales que estás haciendo, no algo más grande.',
      all:  'Todas las cartas son Arcanos Mayores. Es una etapa realmente significativa, y su forma es mayor que cualquier decisión concreta de esta semana.',
      most: '{n} de {total} cartas son Arcanos Mayores. Algo estructural se está moviendo: no es un asunto menor, aunque lo parezca.',
    },
    reversals: {
      none: 'No salió ninguna carta invertida. Lo que está pasando avanza a la vista y a su ritmo natural.',
      all:  'Todas las cartas salieron invertidas. Todo esto ocurre por dentro o está retenido: la situación se atasca primero por dentro.',
      most: 'La mayoría de las cartas están invertidas. Hay más bloqueado, aplazado o no dicho de lo que está realmente a la vista.',
    },
  },

  ranks: {
    1: 'As', 2: 'Dos', 3: 'Tres', 4: 'Cuatro', 5: 'Cinco', 6: 'Seis', 7: 'Siete',
    8: 'Ocho', 9: 'Nueve', 10: 'Diez', 11: 'Sota', 12: 'Caballero', 13: 'Reina', 14: 'Rey',
  },
  minorName: (rank, suit) => `${rank} de ${suit}`,
}
