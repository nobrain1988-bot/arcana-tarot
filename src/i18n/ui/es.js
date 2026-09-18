// Español. La estructura debe ser idéntica a en.js.
export default {
  tabs: { today: 'Hoy', readings: 'Tiradas', library: 'Cartas', journal: 'Diario' },

  common: {
    back: 'Atrás',
    close: 'Cerrar',
    copied: 'Copiado al portapapeles',
    sound: 'Sonido',
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
    together: "Al juntarlo todo",
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
    soundBlurb: 'Un zumbido grave y alguna campana. Lo genera la app, no es una grabación.',
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



    all: 'Todo',
    love: 'Amor',

    crush: 'Amor no correspondido',

    work: 'Trabajo y estudios',

    life: 'Dinero y decisiones',

    health: "Salud",
  },


  // 주제별 질문. 스프레드 이름 대신 '무엇이 궁금한가'로 고르게 한다.

  // 각 언어로 따로 썼다 — 직역하면 어느 나라 말도 아닌 문장이 된다.

  topics: {

    loveNow: '¿En qué punto estamos de verdad?',

    loveWhere: '¿Hacia dónde va esta relación?',

    loveThem: '¿Qué está sintiendo esa persona?',

    loveGo: '¿Sigo adelante con esta persona?',

    loveNeed: '¿Qué necesita ahora lo nuestro?',

    loveMiss: '¿Qué no estoy viendo aquí?',

    loveClash: '¿Por qué chocamos últimamente?',

    loveHonest: '¿Se lo digo de frente?',

    loveLast: '¿Esto puede durar de verdad?',

    crushApproach: '¿Doy yo el primer paso?',

    crushHeart: '¿Qué hago con lo que siento?',

    crushAgain: '¿Hay una vuelta para nosotros?',

    crushLearn: '¿Qué me deja todo esto?',

    crushThink: '¿Piensa en mí aunque sea un poco?',

    crushConfess: '¿Qué pasa si me declaro?',

    crushLetGo: '¿Ya toca soltarlo?',

    crushSilence: '¿Por qué se ha quedado en silencio?',

    crushSettle: '¿Cómo ordeno lo que siento?',

    workBlock: '¿Qué está frenando mi trabajo?',

    workMove: '¿Me cambio de trabajo?',

    workMiss: '¿Qué se me está escapando?',

    workAhead: '¿Cómo va a salir esto?',

    workTalent: '¿En qué soy realmente bueno?',

    workStay: '¿Me quedo donde estoy?',

    workPeople: '¿Cómo leo a esta persona del trabajo?',

    workExam: '¿Qué debo reforzar antes del examen?',

    workLearn: '¿Es esto lo que me conviene estudiar?',

    lifeMoney: '¿Por dónde empiezo con el dinero?',

    lifeChoice: '¿Me lanzo o no?',

    lifeFlow: '¿Cómo viene mi racha ahora?',

    lifeSpend: '¿Merece la pena este gasto?',

    lifeImportant: '¿Qué es lo más importante ahora?',

    lifeMove: '¿Qué pasa si me mudo?',

    lifeSave: '¿Por qué nunca me cunde el dinero?',

    lifeStart: '¿Cómo irá esto que empiezo?',

    lifeHold: '¿A qué me estoy aferrando?',

    lifeAdvice: '¿Qué necesito escuchar hoy?',

    healthSignal: "¿Qué me está intentando decir mi cuerpo?",
    healthBurnout: "¿Por qué siempre estoy sin energía?",
    healthSleep: "¿Por qué no consigo desconectar por la noche?",
    healthAnxious: "¿De qué va en realidad esta ansiedad?",
    healthRest: "¿Puedo parar y descansar un tiempo?",
    healthHabit: "¿Qué pasa si cambio este hábito?",
    healthSlipBack: "¿Por qué vuelvo siempre a los viejos hábitos?",
    healthMind: "¿En qué me apoyo cuando todo pesa demasiado?",
    healthBody: "¿Cómo hago las paces con mi cuerpo?",
    healthBeside: "¿Cómo me mantengo en pie mientras cuido a alguien enfermo?",
    healthWaitBaby: "¿Cómo seguimos unidos mientras buscamos un bebé?",
    healthExpecting: "¿Qué es lo que más importa durante mi embarazo?",
    healthBirth: "¿Con qué fuerza cuento ya para el parto?",
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
      title: 'Dos personas',
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
      title: 'El bloqueo',
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
    hidden: {
      title: 'Lo que no veías',
      blurb: 'Separa lo que tienes delante de lo que se te escapa.',
      pos: {
        seen: { label: 'Lo que ves', lead: 'La parte que ya conoces.' },
        unseen: { label: 'Lo oculto', lead: 'La parte que quedó fuera de tu vista.' },
        know: { label: 'Lo que debes saber', lead: 'Lo que cambia cuando lo ves.' },
      },
    },
    strength: {
      title: 'Lo que tienes',
      blurb: 'Qué es fuerte, qué falta y dónde encaja.',
      pos: {
        have: { label: 'Tu fuerza', lead: 'Lo que ya está en ti.' },
        thin: { label: 'Lo que falta', lead: 'La parte que aún no ha madurado.' },
        use: { label: 'Dónde sirve', lead: 'Dónde funciona de verdad esa fuerza.' },
      },
    },
    residue: {
      title: 'Lo que quedó',
      blurb: 'Qué dejó atrás algo que ya terminó.',
      pos: {
        was: { label: 'Lo que hubo', lead: 'Lo que de verdad hubo entonces.' },
        left: { label: 'Lo que queda', lead: 'Lo que sigue dentro de ti.' },
        learn: { label: 'Lo que enseñó', lead: 'Para qué sirvió todo esto.' },
      },
    },
    priority: {
      title: 'Qué importa',
      blurb: 'Separa lo que te tira de lo que de verdad pesa.',
      pos: {
        pull: { label: 'Lo que te tira', lead: 'Lo que más ruido hace ahora.' },
        real: { label: 'Lo que pesa', lead: 'Dónde está el peso real.' },
        first: { label: 'Por dónde empezar', lead: 'Lo único que tocar primero.' },
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

  // ── 분류 아래 안내 한 줄. 지금은 건강 분류에만 있다 — 진단이 아니라 들여다보는 자리라는 것. ──
  catNote: {
    health: "Para mirarte por dentro, no para diagnosticar. Cualquier cosa de salud, háblala con tu médico.",
  },

  // ── 질문별 자리 설명 ────────────────────────────────────────
  // 스프레드의 pos.*.lead 는 어느 질문에나 붙는 말이라("지금 상황 그대로.") 답이 질문과 상관없어 보였다.
  // 여기 있는 문장이 그 자리를 대신한다 — 그 질문의 주어가 들어간 렌즈. 없는 질문은 스프레드 lead 로 떨어진다.
  topicLeads: {
    loveNow: { you: "Tu lado de esto: dónde estás tú con esa persona.", them: "Su lado de esto: dónde está esa persona contigo.", between: "Lo que son de verdad el uno para el otro ahora mismo." },
    loveWhere: { past: "Lo que ha traído esta relación hasta aquí.", present: "El punto en que están los dos ahora mismo.", future: "Adónde va la relación si sigue así." },
    loveThem: { you: "Lo que pones tú al leer a esa persona.", them: "Lo que de verdad siente ahora esa persona por dentro.", between: "Cuánto de lo que siente esa persona te está llegando." },
    loveGo: { answer: "Si seguir con esta persona, y por qué." },
    loveNeed: { situation: "Aquello con lo que de verdad cuentan los dos ahora mismo.", action: "Lo único que esta relación te pide ahora.", result: "En qué se convierte la relación cuando eso se cubre." },
    loveMiss: { seen: "Lo que ya ves con claridad en esta relación.", unseen: "La parte de esta relación que no estabas viendo.", know: "Lo que cambia entre los dos cuando esa parte sale a la luz." },
    loveClash: { now: "Dónde acaban los dos cada vez que se desencuentran.", block: "Lo que los deja una y otra vez a destiempo.", move: "Lo que vuelve a ponerlos al mismo paso." },
    loveHonest: { answer: "Si decírselo de frente, y por qué." },
    loveLast: { past: "Lo que ha mantenido unidos a los dos hasta ahora.", present: "Lo que los mantiene unidos ahora mismo.", future: "Hasta dónde puede llevarlos lo que hoy los sostiene." },
    crushApproach: { answer: "Si dar tú el primer paso, y por qué." },
    crushHeart: { situation: "Dónde te ha dejado de verdad lo que sientes.", action: "El paso que te está pidiendo lo que sientes.", result: "Adónde va a parar lo que sientes si das ese paso." },
    crushAgain: { answer: "Si hay camino de vuelta entre los dos, y por qué." },
    crushLearn: { was: "Lo que fue de verdad esta conexión mientras duró.", left: "La parte de esta conexión que nunca se fue del todo.", learn: "Lo que esta conexión vino a enseñarte." },
    crushThink: { you: "Lo que cargas mientras te preguntas si también piensa en ti.", them: "El sitio que ocupas de verdad en su cabeza.", between: "Lo que pasa de verdad entre los dos, no solo en tu cabeza." },
    crushConfess: { situation: "En qué punto están los dos antes de que le digas lo que sientes.", action: "Cómo decírselo, si decides lanzarte.", result: "Dónde quedan los dos una vez que lo sabe." },
    crushLetGo: { answer: "Si ya toca soltar a esa persona, y por qué." },
    crushSilence: { now: "Dónde están los dos ahora que esa persona ha callado.", block: "Lo que de verdad le impide dar señales.", move: "Lo que haría que los dos volvieran a hablarse." },
    crushSettle: { situation: "Lo que sigue enredado en tu cabeza sobre esto.", action: "Lo único que de verdad empieza a ordenarte por dentro.", result: "Dónde queda tu cabeza cuando lo hayas hecho." },
    workBlock: { now: "Dónde se ha atascado tu trabajo ahora mismo.", block: "Lo que de verdad está frenando tu trabajo.", move: "Lo que vuelve a poner tu trabajo en marcha." },
    workMove: { answer: "Si cambiar de trabajo ahora, y por qué." },
    workMiss: { seen: "La parte de este trabajo que ya ves con claridad.", unseen: "El rincón de este trabajo al que no estabas mirando.", know: "Lo que cambia en este trabajo cuando ese rincón queda a la vista." },
    workAhead: { situation: "Dónde está de verdad este trabajo hoy.", action: "El paso que este trabajo te pide ahora.", result: "Dónde acaba este trabajo si das ese paso." },
    workTalent: { have: "Lo que haces bien, aunque nunca le hayas puesto nombre.", thin: "La habilidad que aún te falta, justo al lado de la que tienes.", use: "Dónde cuenta de verdad ese talento tuyo." },
    workStay: { answer: "Si quedarte donde estás, y el porqué." },
    workPeople: { you: "Lo que llevas tú cada vez que tratas con esa persona.", them: "Dónde está de verdad esa persona del trabajo, detrás de lo que muestra.", between: "Lo que pasa de verdad entre tú y esa persona en el trabajo." },
    workExam: { have: "Lo que ya tienes firme de cara al examen.", thin: "La parte que hay que reforzar antes del examen.", use: "Dónde cuenta de verdad tu preparación el día del examen." },
    workLearn: { answer: "Si lo que estudias ahora es lo que te conviene, y por qué." },
    lifeMoney: { now: "Cómo estás con el dinero ahora mismo.", block: "Lo que mantiene tus cuentas hechas un lío.", move: "Por dónde empezar de verdad con el dinero." },
    lifeChoice: { answer: "Si lanzarte, y por qué." },
    lifeFlow: { past: "Lo que puso en marcha la racha que llevas ahora.", present: "Cómo te va de verdad la racha ahora mismo.", future: "Adónde te lleva la racha si nada cambia." },
    lifeSpend: { answer: "Si este gasto merece la pena, y por qué." },
    lifeImportant: { pull: "De todo lo que tienes encima ahora, lo que más grita.", real: "Lo que seguiría importando cuando se apague el ruido.", first: "Por dónde empezar, ahora que ves lo que importa." },
    lifeMove: { situation: "Dónde estás ahora mismo con la mudanza.", action: "Lo primero que te pide la mudanza.", result: "Adónde te lleva la mudanza si te vas." },
    lifeSave: { now: "Cómo entra y sale el dinero en tu vida ahora mismo.", block: "Por dónde se te sigue escapando el dinero.", move: "Lo que haría que el dinero por fin se quedara." },
    lifeStart: { situation: "De dónde arranca esto nuevo que empiezas.", action: "Lo que esto nuevo te pide al principio.", result: "Cómo va esto nuevo cuando le das lo que pide." },
    lifeHold: { seen: "Aquello a lo que ya sabes que te aferras.", unseen: "Lo que de verdad agarras por debajo de eso.", know: "Lo que deja que tu mano se abra cuando lo ves." },
    healthSignal: { seen: "La señal de tu cuerpo que ya has notado.", unseen: "Lo que tu cuerpo lleva pidiendo y tú sigues pasando por alto.", know: "Lo que cambia en cómo te cuidas cuando por fin escuchas." },
    healthBurnout: { now: "Cuánta energía te queda de verdad ahora, sin disimulos.", block: "Lo que te vacía más rápido de lo que consigues llenarte.", move: "Lo que empieza a devolverte algo de energía." },
    healthSleep: { now: "Cómo van de verdad tus noches cuando se apaga la luz.", block: "Lo que mantiene tu cabeza en marcha cuando el cuerpo quiere parar.", move: "Lo que por fin deja que tu cabeza se calme de noche." },
    healthAnxious: { seen: "Lo que te has estado contando sobre esta ansiedad.", unseen: "Lo que señala de verdad la ansiedad, debajo de lo que te cuentas.", know: "Cómo cambia la ansiedad cuando nombras lo que es de verdad." },
    healthRest: { answer: "Si puedes parar y descansar un tiempo, y por qué." },
    healthHabit: { situation: "Dónde estás ahora mismo con este hábito.", action: "Lo que de verdad hace falta para cambiar el hábito.", result: "Dónde acabas una vez que cambias el hábito." },
    healthSlipBack: { now: "Dónde estás hoy con el viejo hábito.", block: "Lo que sigue tirando de ti hacia el viejo hábito.", move: "Lo que evita que recaigas esta vez." },
    healthMind: { have: "Lo que te sostiene cuando todo pesa demasiado.", thin: "El apoyo al que recurres y que aún no está del todo ahí.", use: "Dónde lo que te sostiene hace de verdad más ligero un día pesado." },
    healthBody: { situation: "Cómo están las cosas entre tú y tu cuerpo ahora mismo.", action: "Lo que te pide de verdad hacer las paces con tu cuerpo.", result: "Cómo quedan las cosas entre tú y tu cuerpo cuando das ese paso." },
    healthBeside: { you: "Lo que cargas tú mientras estás a su lado.", them: "Lo que siente la persona que cuidas, no lo que muestra.", between: "Lo que pasa de verdad entre los dos mientras dura esto." },
    healthWaitBaby: { you: "Lo que traes tú a esta espera del bebé, lo digas o no.", them: "El lado de tu pareja en esta espera, que puede no ser el tuyo.", between: "Lo que la espera le está haciendo al espacio entre los dos." },
    healthExpecting: { pull: "Lo que más ruido hace en tu cabeza con un bebé en camino.", real: "Lo que pesa de verdad mientras esperas al bebé.", first: "Lo único que cuidar primero antes de que llegue el bebé." },
    healthBirth: { have: "La fuerza que ya llevas contigo de cara al parto.", thin: "Lo que aún te falta mientras el parto se acerca.", use: "Dónde te va a sostener de verdad esa fuerza cuando llegue el parto." },
  },

  // ── 질문별 마무리 한 줄 — 세 장이 이 질문에 어떻게 하나의 답이 되는지, 어느 장을 오래 볼지 ──
  topicClose: {
    loveNow: "Las dos primeras cartas muestran dónde está cada uno por su cuenta. La tercera es dónde están juntos: esa es la respuesta, así que quédate ahí más rato.",
    loveWhere: "Lee las tres como una sola historia: de dónde viene la relación, dónde está y hacia dónde va. Quédate más en la tercera, que es tu respuesta; la segunda te dice lo firme que es esa respuesta.",
    loveThem: "La segunda carta es la que venías a buscar, así que quédate ahí más rato. La primera marca con qué ojos la lees, y la tercera cuánto de lo que lleva dentro te llega por sí solo.",
    loveGo: "La respuesta de arriba dice si seguir adelante con esta persona. La carta de debajo es el motivo, lo que traería de verdad quedarte, y esa parte vale más que el sí o el no.",
    loveNeed: "La primera carta es con lo que cuentan los dos, la segunda lo único que falta añadir y la tercera en qué se convierte la relación cuando eso se cubre. Tu respuesta es la segunda: lo que necesita esta relación es algo que puedes hacer tú.",
    loveMiss: "La primera carta es la parte que ya conoces: confírmala y tenla al lado de la segunda, porque la segunda se entiende en contraste con ella. La segunda es tu respuesta, el lado de la relación que no veías, así que quédate ahí más rato; la tercera es lo que cambia entre los dos cuando esa parte queda a la vista.",
    loveClash: "La primera carta es dónde se desencuentran una y otra vez, la segunda el porqué y la tercera lo que los devuelve al mismo paso. Preguntaste por qué, así que quédate con la segunda; la tercera solo cobra sentido cuando sabes qué tiene que deshacer.",
    loveHonest: "La respuesta de arriba dice si decírselo de frente. La carta es el motivo, lo que se pone en marcha si lo dices y lo que se pone en marcha si te lo callas, así que lee esa parte antes de decidir en un sentido u otro.",
    loveLast: "Lee las tres seguidas, como una sola línea: lo que los ha sostenido, lo que los sostiene hoy y hasta dónde llega. La tercera es la respuesta, pero la que hay que mirar despacio es la segunda: lo que hoy los mantiene unidos es lo que tiene que aguantar todo el camino.",
    crushApproach: "La respuesta de arriba dice si dar el primer paso; la carta de debajo es el porqué. Dedícale más tiempo a la carta que a la respuesta: léela para saber cómo acercarte, no solo si hacerlo.",
    crushHeart: "Lee las tres en orden: dónde está lo que sientes, qué hacer con ello y adónde lleva eso. Quédate más con la segunda carta, que es la que responde a tu pregunta, y usa la tercera para comprobar si el paso merece la pena.",
    crushAgain: "La respuesta de arriba dice si hay camino de vuelta; la carta de debajo es el motivo, así que quédate ahí. Si es sí, dice lo que te pediría volver; si es no, lo que se interpone; si es aún no, lo que tiene que asentarse antes.",
    crushLearn: "La primera carta es lo que fue esto, la segunda lo que queda de ello y la tercera para qué sirvió. Quédate más con la segunda: lo que te dejó es lo que sigue en ti ahora, no lo que parecía entonces.",
    crushThink: "La segunda carta es la que venías a buscar: responde si estás o no en su cabeza, así que quédate ahí más rato. Lee la primera frente a ella para ver cuánto de esta atracción es solo cosa tuya, y la tercera para saber si de verdad se mueve algo entre los dos.",
    crushConfess: "Preguntaste qué pasa si te declaras, y eso es la tercera carta, así que quédate ahí más rato. La primera muestra dónde están las cosas antes de decir nada, y la segunda cómo decirlo para que la tercera tenga una oportunidad.",
    crushLetGo: "La palabra de arriba responde si ya toca soltarlo. La carta de debajo es el motivo, y además muestra lo que te va a costar soltar si es sí, lo que aún merece la pena mantener si es no, y lo que tiene que asentarse antes de saberlo si es aún no.",
    crushSilence: "Preguntaste por qué se ha quedado en silencio, y eso es la segunda carta, así que quédate ahí más rato. La primera es el silencio tal como está; la tercera es lo que lo rompería, y solo cobra sentido cuando la segunda ya te ha dado el motivo.",
    crushSettle: "La segunda carta es lo que pediste, lo que hay que hacer, así que quédate ahí más rato. La primera te dice qué tiene que desenredar ese paso, y la tercera cómo queda tu cabeza una vez asentada, para que sepas cuándo has llegado.",
    workBlock: "La segunda carta es la respuesta, lo que frena tu trabajo; la primera es lo que ese freno ha hecho con él hasta ahora, y la tercera lo que lo afloja. Quédate más con la segunda y lee las otras dos a su alrededor.",
    workMove: "La palabra de arriba es el veredicto sobre cambiar de trabajo; la carta es el motivo. Léela para saber qué te pediría el cambio ahora mismo.",
    workMiss: "La primera carta es la parte del trabajo que ya tenías a la vista, la segunda el rincón al que no mirabas, que es justo lo que preguntaste, y la tercera lo que cambia cuando lo ves. Quédate más rato con la segunda.",
    workAhead: "La primera carta es dónde está el trabajo, la segunda el paso que pide y la tercera dónde acaba. Preguntaste cómo va a salir, así que quédate con la tercera, pero léela como lo que sigue a la segunda, no por separado.",
    workTalent: "La primera carta es la respuesta en sí, lo que haces bien, y la segunda marca dónde flaquea esa fuerza, para que sepas hasta dónde llega. Quédate más con la primera y deja que la tercera te diga dónde ponerla a trabajar.",
    workStay: "La palabra de arriba es el veredicto sobre quedarte: sí, no o aún no. La carta de debajo dice por qué: léela para ver lo que te da quedarte y lo que te cuesta.",
    workPeople: "La primera carta es lo que tú traes, la segunda la persona que intentas leer y la tercera lo que corre de verdad entre los dos. Quédate más con la segunda, que es la lectura que pediste, y contrástala con la tercera; donde no coincidan, la primera suele ser el motivo.",
    workExam: "La primera carta es lo que ya está firme, la segunda lo que hay que reforzar y la tercera dónde se nota tu preparación el día del examen. Preguntaste qué reforzar, así que lee más rato la segunda; la primera te dice en qué no perder el tiempo.",
    workLearn: "La respuesta de arriba es el veredicto sobre si esto es lo que te conviene estudiar. La carta de debajo es el motivo: léela para ver qué está construyendo en ti este aprendizaje, y qué no.",
    lifeMoney: "La primera carta es cómo está tu dinero, la segunda lo que lo mantiene enredado y la tercera el hilo del que tirar primero. Preguntaste por dónde empezar, así que quédate más con la tercera: esa es la respuesta de verdad.",
    lifeChoice: "La respuesta de arriba es lo que dice la carta sobre lanzarte: sí, no o aún no. El texto de la carta es el motivo; léelo para ver qué te pediría de verdad este paso.",
    lifeFlow: "Lee las tres como una sola corriente: la primera carta es lo que la puso en marcha, la segunda dónde está ahora y la tercera adónde te lleva. Preguntaste por el ahora, así que quédate más con la segunda; las otras dos te dicen hacia dónde se mueve.",
    lifeSpend: "La respuesta de arriba dice si este gasto merece la pena; el texto de la carta es el motivo. Léelo para ver qué te compra de verdad ese dinero, no solo lo que cuesta.",
    lifeImportant: "La segunda carta es la respuesta a esta pregunta; la primera es lo que lleva gritando por encima de ella, y la tercera por dónde empezar. Quédate más con la segunda: la primera y la tercera solo están para enmarcarla.",
    lifeMove: "La primera carta es dónde está la mudanza, la segunda lo que te pide y la tercera dónde aterriza. La pregunta es qué pasa, así que quédate más con la tercera, pero léela como el resultado de hacer lo que dice la segunda, no por separado.",
    lifeSave: "La primera carta es cómo entra y sale hoy el dinero, la segunda es la fuga y la tercera lo que haría que se quedara. Preguntaste por qué, así que quédate con la segunda: la tercera solo cobra sentido cuando has visto la fuga.",
    lifeStart: "La primera carta es de dónde arranca esto nuevo, la segunda lo que te pide al principio y la tercera cómo va. Preguntaste cómo irá, así que quédate más con la tercera: léela como el sitio adonde lleva la segunda.",
    lifeHold: "Junta las tres: la primera carta es la parte que te dejas ver, la segunda lo que de verdad te niegas a soltar y la tercera lo que afloja tu mano cuando lo ves. La respuesta a esta pregunta es la segunda carta: quédate ahí más rato.",
    healthSignal: "La primera carta es lo que ya sientes, la segunda lo que tu cuerpo lleva pidiendo y tú pasabas por alto, y la tercera lo que cambia en cómo lo cuidas cuando escuchas. Quédate más con la segunda: es la parte que tu cuerpo llevaba esperando que notaras.",
    healthBurnout: "La primera carta pone nombre a lo vacío que estás de verdad, la segunda es la fuga y la tercera por dónde empieza a llenarse. Quédate más con la segunda: no se puede llenar un depósito que sigue perdiendo.",
    healthSleep: "La primera carta es la noche tal como es, la segunda lo que mantiene tu cabeza encendida y la tercera lo que la deja parar. Quédate más con la segunda: los pensamientos que no se asientan suelen cargar con algo que el día no llegó a atender.",
    healthAnxious: "La primera carta es la historia que te has contado sobre la ansiedad, la segunda de qué va en realidad y la tercera lo que cambia cuando la llamas por su nombre. Quédate más con la segunda: la ansiedad tiende a hacerse ruidosa cuando lo que pasa de verdad aún no se ha dicho.",
    healthRest: "La respuesta de arriba dice si puedes parar y descansar un tiempo; la carta es el motivo, lo que te devolvería la pausa o lo que tiene que asentarse antes para que el descanso sea descanso de verdad. Léela como una cuestión de cuándo, no de si te lo mereces.",
    healthHabit: "La primera carta es dónde estás hoy con el hábito, la segunda lo que de verdad cuesta cambiarlo y la tercera dónde te deja eso. Quédate más con la tercera: es la respuesta a lo que preguntaste, y la segunda es el precio de llegar ahí.",
    healthSlipBack: "La primera carta es dónde estás hoy con el viejo hábito, la segunda el tirón que te devuelve a él una y otra vez, y la tercera lo que te ayuda a mantenerte lejos esta vez. Quédate más con la segunda: recaer rara vez va de fuerza de voluntad; suele ir de lo que el viejo hábito hacía por ti sin que lo notaras.",
    healthMind: "La primera carta es lo que ya te sostiene cuando todo pesa, la segunda el apoyo que buscas y que aún no está del todo ahí, y la tercera dónde ese apoyo hace de verdad más ligero el día. Quédate más con la primera: en los días pesados, empieza por lo que ya te sostiene antes de intentar construir nada nuevo.",
    healthBody: "La primera carta es cómo están las cosas entre tú y tu cuerpo, la segunda el paso que hace posibles las paces y la tercera dónde los deja ese paso a los dos. Quédate más con la segunda: preguntaste qué hacer, y esa carta es la respuesta; la tercera muestra adónde lleva hacerlo.",
    healthBeside: "La primera carta es lo que cargas tú, la segunda lo que siente esa persona debajo de lo que muestra y la tercera lo que corre entre los dos en medio de todo esto. Quédate más con la primera: preguntaste cómo mantenerte en pie, y nadie se mantiene en pie mucho tiempo ignorando lo que carga.",
    healthWaitBaby: "La primera carta eres tú en esta espera del bebé, la segunda tu pareja en la misma espera y la tercera lo que la espera les está haciendo a los dos. Quédate más con la tercera: preguntaste cómo seguir unidos, y ahí es donde la cercanía se está cuidando o se está gastando sin que se note.",
    healthExpecting: "La primera carta es lo que más ruido hace durante el embarazo, la segunda lo que pesa de verdad y la tercera lo único que cuidar primero. Quédate más con la segunda: en estos meses muchas cosas hacen ruido, y esa carta es cómo distinguir lo ruidoso de lo que pesa.",
    healthBirth: "La primera carta es la fuerza con la que ya cuentas para el parto, la segunda lo que aún te falta y la tercera dónde te va a sostener esa fuerza cuando llegue el momento. Quédate más con la primera: es la respuesta a lo que preguntaste y ya está en ti; la segunda solo te enseña dónde tratarte con más suavidad a medida que se acerca el día.",
  },

  ranks: {
    1: 'As', 2: 'Dos', 3: 'Tres', 4: 'Cuatro', 5: 'Cinco', 6: 'Seis', 7: 'Siete',
    8: 'Ocho', 9: 'Nueve', 10: 'Diez', 11: 'Sota', 12: 'Caballero', 13: 'Reina', 14: 'Rey',
  },
  minorName: (rank, suit) => `${rank} de ${suit}`,
}
