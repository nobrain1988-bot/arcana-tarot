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
      pos: { answer: { label: 'La respuesta', lead: 'El motivo detrás de la respuesta.' } },
    },
    love: {
      title: 'Tirada de amor',
      blurb: 'Tres cartas sobre una relación: la tuya, la suya y lo que hay entre ambos.',
      pos: {
        you:     { label: 'Tú',           lead: 'Lo que tú aportas a esto.' },
        them:    { label: 'La otra parte', lead: 'Dónde está la otra persona.' },
        between: { label: 'Entre ustedes', lead: 'Lo que de verdad está pasando entre ustedes.' },
      },
    },
    career: {
      title: 'Trabajo y dinero',
      blurb: 'Dónde estás, qué te está bloqueando y qué hace que avance.',
      pos: {
        now:   { label: 'Dónde estás',  lead: 'La situación tal como está.' },
        block: { label: 'El bloqueo',   lead: 'Lo que lo está frenando.' },
        move:  { label: 'La salida',    lead: 'Lo que de verdad hace avanzar esto.' },
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
