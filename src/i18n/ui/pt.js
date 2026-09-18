// Português (BR). A estrutura precisa ser idêntica à de en.js.
export default {
  tabs: { today: 'Hoje', readings: 'Tiragens', library: 'Cartas', journal: 'Diário' },

  common: {
    back: 'Voltar',
    close: 'Fechar',
    copied: 'Copiado',
    sound: 'Som',
    upright: 'Normal',
    reversed: 'Invertida',
  },

  today: {
    title: 'Sua carta de hoje',
    blurb: 'Uma carta, tirada só para hoje. Ela não muda até amanhã.',
    reveal: 'Virar a carta',
  },

  read: {
    eyebrow: 'Tiragens',
    title: 'O que você quer perguntar?',
    blurb: 'Escolha uma tiragem. Todas são gratuitas.',
    askTitle: 'Faça sua pergunta',
    askBlurb: 'Algo que dê para responder com sim ou não. Seja específico.',
    askPlaceholder: 'Devo aceitar a proposta?',
    focusTitle: 'Tenha a situação em mente',
    focusBlurb: 'Escreva se isso ajudar a se concentrar. Fica só no seu celular — não é enviado a lugar nenhum.',
    focusPlaceholder: 'O que está na sua cabeça?',
    draw: 'Embaralhar e tirar',
    chooseTitle: 'Escolha suas cartas',
    chooseBlurb: 'Mantenha sua pergunta em mente ao escolher.',
    skip: 'Pular — apenas tirar',
    focusTip: 'Perguntas que começam com O que ou Como dão algo que você pode usar. Quando e Será que só dão um palpite.',
    askTip: 'Uma pergunta por vez, e bem específica.',
    tryAsking: 'Experimente perguntar',
    ownQuestion: 'Fazer minha pergunta',
    shuffling: 'Embaralhando',
    newReading: 'Nova tiragem',
  },

  result: {
    whole: 'A tiragem como um todo',
    share: 'Compartilhar esta tiragem',
    again: 'Tirar de novo',
    drawnOn: 'Saiu {card}, {orientation}.',
    together: "Fechando a tiragem",
    togetherOne: "Ao ler esta carta",
  },

  lib: {
    eyebrow: 'Cartas',
    title: 'As 78 cartas',
    filterAll: 'As 78',
    filterMajor: 'Maiores',
    majorArcana: 'Arcanos Maiores',
  },

  jr: {
    eyebrow: 'Diário',
    emptyTitle: 'Nada ainda',
    emptyBlurb: 'Suas tiragens ficam salvas aqui automaticamente, só neste celular.',
    countOne: '{n} tiragem',
    countMany: '{n} tiragens',
    clear: 'Limpar',
    clearConfirm: 'Apagar todas as tiragens salvas? Não dá para desfazer.',
    footer: 'Salvo só neste aparelho. Nada é enviado.',
  },

  set: {
    title: 'Configurações',
    language: 'Idioma',
    languageBlurb: 'Muda o aplicativo inteiro, incluindo o significado das cartas.',
    reversals: 'Cartas invertidas',
    reversalsBlurb: 'Tem quem leia cartas invertidas e quem não leia. Desligue para tirar só cartas na posição normal.',
    soundBlurb: 'Um zumbido grave e um sino de vez em quando. O app gera, não é gravação.',
    data: 'Seus dados',
    dataBlurb: 'Tudo fica neste celular. Nada é enviado a lugar nenhum e não existe cadastro.',
    clearData: 'Apagar tudo que está salvo',
    clearDataConfirm: 'Apagar sua carta do dia e todas as tiragens salvas? Não dá para desfazer.',
    done: 'Pronto',
  },

  share: { tagline: 'Arcana — tiragens de tarô grátis' },

  // 주제 분류 — 리딩 화면 위쪽 칩

  // 시작 화면 — 문을 열고 들어가는 느낌

  intro: {

    tagline: 'As cartas já estão esperando por você.',

    enter: 'Entrar',

  },


  cats: {



    all: 'Tudo',
    love: 'Amor',

    crush: 'Paquera e ex',

    work: 'Trabalho e estudos',

    life: 'Dinheiro e escolhas',

    health: "Saúde",
  },


  // 주제별 질문. 스프레드 이름 대신 '무엇이 궁금한가'로 고르게 한다.

  // 각 언어로 따로 썼다 — 직역하면 어느 나라 말도 아닌 문장이 된다.

  topics: {

    loveNow: 'Em que pé a gente está de verdade?',

    loveWhere: 'Para onde essa relação está indo?',

    loveThem: 'O que essa pessoa está sentindo?',

    loveGo: 'Continuo com essa pessoa?',

    loveNeed: 'O que a gente precisa agora?',

    loveMiss: 'O que eu não estou enxergando?',

    loveClash: 'Por que a gente vive se desencontrando?',

    loveHonest: 'Falo isso abertamente?',

    loveLast: 'Isso tem futuro mesmo?',

    crushApproach: 'Dou o primeiro passo?',

    crushHeart: 'O que faço com o que sinto?',

    crushAgain: 'Existe volta para nós dois?',

    crushLearn: 'O que isso me deixou?',

    crushThink: 'Será que pensa em mim?',

    crushConfess: 'O que acontece se eu me declarar?',

    crushLetGo: 'Já é hora de soltar?',

    crushSilence: 'Por que sumiu assim?',

    crushSettle: 'Como eu organizo o que sinto?',

    workBlock: 'O que está travando meu trabalho?',

    workMove: 'Mudo de emprego?',

    workMiss: 'O que estou deixando passar?',

    workAhead: 'Como isso vai acabar?',

    workTalent: 'No que eu sou bom de verdade?',

    workStay: 'Fico onde estou?',

    workPeople: 'Como eu leio essa pessoa no trabalho?',

    workExam: 'O que reforçar antes da prova?',

    workLearn: 'É isso que eu deveria estar estudando?',

    lifeMoney: 'Por onde começo com dinheiro?',

    lifeChoice: 'Vou nessa ou não?',

    lifeFlow: 'Como está minha fase agora?',

    lifeSpend: 'Vale a pena esse gasto?',

    lifeImportant: 'O que é mais importante agora?',

    lifeMove: 'O que acontece se eu me mudar?',

    lifeSave: 'Por que o dinheiro nunca sobra?',

    lifeStart: 'Como vai ser essa coisa nova?',

    lifeHold: 'Do que eu não estou conseguindo soltar?',

    lifeAdvice: 'O que eu preciso ouvir hoje?',

    healthSignal: "O que meu corpo está tentando me dizer?",
    healthBurnout: "Por que eu vivo sem energia?",
    healthSleep: "Por que eu não consigo desligar à noite?",
    healthAnxious: "De onde vem essa ansiedade, de verdade?",
    healthRest: "Posso dar uma parada e descansar?",
    healthHabit: "O que acontece se eu mudar esse hábito?",
    healthSlipBack: "Por que eu sempre volto aos velhos hábitos?",
    healthMind: "Em que eu me apoio quando tudo pesa?",
    healthBody: "Como eu faço as pazes com meu corpo?",
    healthBeside: "Como eu seguro as pontas cuidando de quem está doente?",
    healthWaitBaby: "Como a gente se mantém unido tentando um bebê?",
    healthExpecting: "O que importa mais agora que estou grávida?",
    healthBirth: "Que força eu já tenho para o parto?",
  },


  spreads: {
    daily: {
      title: 'Carta do dia',
      blurb: 'Uma carta para hoje. Fica a mesma o dia inteiro.',
      pos: { today: { label: 'Hoje', lead: 'O que o dia de hoje está pedindo de você.' } },
    },
    three: {
      title: 'Passado · Presente · Futuro',
      blurb: 'A clássica tiragem de três cartas. De onde veio, onde está e para onde vai.',
      pos: {
        past:    { label: 'Passado',  lead: 'O que trouxe você até aqui.' },
        present: { label: 'Presente', lead: 'Onde você realmente está agora.' },
        future:  { label: 'Futuro',   lead: 'Para onde isso vai se nada mudar.' },
      },
    },
    yesno: {
      title: 'Sim ou Não',
      blurb: 'Pergunte algo que se responda com sim ou não. Uma carta decide.',
      examples: [
        'Devo aceitar a proposta?',
        'É hora de falar sobre isso?',
        'Sigo em frente com esse plano?',
      ],
      pos: { answer: { label: 'A resposta', lead: 'O motivo por trás da resposta.' } },
    },
    love: {
      title: 'Duas pessoas',
      blurb: 'Três cartas sobre uma relação — a sua, a da outra pessoa e o que existe entre vocês.',
      examples: [
        'O que eu estou trazendo para isso agora?',
        'O que eu não estou dizendo em voz alta?',
        'O que deixaria isso mais firme esta semana?',
      ],
      pos: {
        you:     { label: 'Você',         lead: 'O que você traz para isso.' },
        them:    { label: 'A outra pessoa', lead: 'Onde a outra pessoa está.' },
        between: { label: 'Entre vocês',  lead: 'O que está realmente acontecendo entre vocês.' },
      },
    },
    career: {
      title: 'O bloqueio',
      blurb: 'Onde você está, o que está travando e o que faz andar.',
      examples: [
        'O que está realmente travando isso?',
        'O que eu estou evitando neste trabalho?',
        'O que faria isso avançar este mês?',
      ],
      pos: {
        now:   { label: 'Onde você está', lead: 'A situação como ela está.' },
        block: { label: 'O bloqueio',     lead: 'O que está segurando isso.' },
        move:  { label: 'O caminho',      lead: 'O que realmente faz isso andar.' },
      },
    },
    // 상황 · 행동 · 결과 — 다른 스프레드에 없는 '결과' 자리가 핵심이다.
    outcome: {
      title: 'Situação · Ação · Resultado',
      blurb: 'Como as coisas estão, o que fazer e aonde isso leva.',
      examples: [
        'O que eu faço com isso?',
        'Como lido com essa situação?',
        'O que acontece se eu seguir em frente?',
      ],
      pos: {
        situation: { label: 'A situação', lead: 'O que está realmente na sua frente.' },
        action:    { label: 'O que fazer',    lead: 'O movimento que isso pede.' },
        result:    { label: 'Onde isso vai dar',    lead: 'Aonde essa escolha leva.' },
      },
    },
    hidden: {
      title: 'O que você não via',
      blurb: 'Separa o que está à sua frente do que escapou.',
      pos: {
        seen: { label: 'O que você vê', lead: 'A parte que você já conhece.' },
        unseen: { label: 'O que está escondido', lead: 'A parte que ficou fora do campo de visão.' },
        know: { label: 'O que precisa saber', lead: 'O que muda depois que você vê.' },
      },
    },
    strength: {
      title: 'O que você tem',
      blurb: 'O que é forte, o que falta e onde isso serve.',
      pos: {
        have: { label: 'Sua força', lead: 'O que já está em você.' },
        thin: { label: 'O que falta', lead: 'A parte que ainda não amadureceu.' },
        use: { label: 'Onde isso serve', lead: 'Onde essa força funciona de verdade.' },
      },
    },
    residue: {
      title: 'O que ficou',
      blurb: 'O que uma coisa encerrada deixou para trás.',
      pos: {
        was: { label: 'O que houve', lead: 'O que realmente havia ali.' },
        left: { label: 'O que restou', lead: 'O que ainda está em você.' },
        learn: { label: 'O que ensinou', lead: 'Para que isso serviu.' },
      },
    },
    priority: {
      title: 'O que importa',
      blurb: 'Separa o que te puxa do que realmente pesa.',
      pos: {
        pull: { label: 'O que te puxa', lead: 'O que grita mais alto agora.' },
        real: { label: 'O que pesa', lead: 'Onde está o peso de verdade.' },
        first: { label: 'Por onde começar', lead: 'A única coisa a tocar primeiro.' },
      },
    },
  },

  engine: {
    suits: {
      wands:     { name: 'Paus',    domain: 'energia, impulso e trabalho criativo' },
      cups:      { name: 'Copas',   domain: 'sentimentos, relações e intuição' },
      swords:    { name: 'Espadas', domain: 'pensamento, verdade e conflito' },
      pentacles: { name: 'Ouros',   domain: 'dinheiro, trabalho, saúde e o mundo material' },
    },
    verdict: {
      yes:   { word: 'Sim',        gloss: 'A carta pende para o sim.' },
      maybe: { word: 'Ainda não',  gloss: 'A carta não se compromete — a situação ainda não está firme o bastante para uma resposta limpa.' },
      no:    { word: 'Não',        gloss: 'A carta pende para o não.' },
    },
    element: {
      fire:  'O Fogo atravessa esta tiragem: é sobre ação, impulso, fazer alguma coisa em vez de decidir alguma coisa.',
      water: 'A Água atravessa esta tiragem: é sobre sentimento e vínculo, seja qual for a aparência na superfície.',
      air:   'O Ar atravessa esta tiragem: é sobre pensamento, verdade e o que está sendo dito ou calado.',
      earth: 'A Terra atravessa esta tiragem: é sobre o prático — dinheiro, trabalho, saúde, os fatos concretos.',
    },
    majors: {
      none: 'Nenhum Arcano Maior aqui. Isso é do tamanho do cotidiano — o resultado está sendo decidido por escolhas comuns suas, não por algo maior.',
      all:  'Todas as cartas são Arcanos Maiores. É uma fase de verdade significativa, e o formato dela é maior que qualquer decisão isolada desta semana.',
      most: '{n} de {total} cartas são Arcanos Maiores. Alguma coisa estrutural está se movendo — não é assunto pequeno, mesmo que pareça.',
    },
    reversals: {
      none: 'Nenhuma carta saiu invertida. O que está acontecendo se move à vista, no ritmo natural.',
      all:  'Todas as cartas saíram invertidas. Tudo isso está acontecendo por dentro ou está sendo segurado — a situação trava por dentro antes de travar em qualquer outro lugar.',
      most: 'A maioria das cartas está invertida. Há mais coisa travada, adiada ou não dita do que está de fato à vista.',
    },
  },

  // ── 분류 아래 안내 한 줄. 지금은 건강 분류에만 있다 — 진단이 아니라 들여다보는 자리라는 것. ──
  catNote: {
    health: "É para olhar para dentro, não é diagnóstico. Se for algo de saúde, procure um médico.",
  },

  // ── 질문별 자리 설명 ────────────────────────────────────────
  // 스프레드의 pos.*.lead 는 어느 질문에나 붙는 말이라("지금 상황 그대로.") 답이 질문과 상관없어 보였다.
  // 여기 있는 문장이 그 자리를 대신한다 — 그 질문의 주어가 들어간 렌즈. 없는 질문은 스프레드 lead 로 떨어진다.
  topicLeads: {
    loveNow: { you: "O seu lado disso — em que pé você está com essa pessoa.", them: "O lado da outra pessoa — em que pé ela está com você.", between: "O que vocês dois são um para o outro agora, de verdade." },
    loveWhere: { past: "O que trouxe essa relação até aqui.", present: "Onde vocês dois estão nessa relação agora.", future: "Para onde essa relação vai se continuar nesse ritmo." },
    loveThem: { you: "O que é seu no jeito como você lê essa pessoa.", them: "O que está passando pela cabeça dessa pessoa agora, de verdade.", between: "Quanto do que essa pessoa sente está chegando até você." },
    loveGo: { answer: "O que vem junto, na prática, se você continuar com essa pessoa — o motivo de a resposta ali em cima ter saído assim." },
    loveNeed: { situation: "O que vocês dois têm em mãos agora, de verdade.", action: "A única coisa que essa relação está pedindo para você acrescentar agora — se a carta apontar uma falta ou um atrito, preencher isso é a resposta.", result: "No que essa relação vira depois que essa única coisa entra." },
    loveMiss: { seen: "O que você já enxerga com clareza nessa relação.", unseen: "A parte dessa relação que você não vinha enxergando.", know: "O que muda entre vocês quando essa parte aparece." },
    loveClash: { now: "Onde vocês dois sempre vão parar quando se desencontram.", block: "O que vive tirando vocês dois de sintonia.", move: "O que coloca vocês dois de volta em sintonia." },
    loveHonest: { answer: "Se é para falar isso em voz alta, e o que se move entre vocês, de verdade, depois de dito." },
    loveLast: { past: "O que segurou vocês dois juntos até agora.", present: "O que está segurando vocês dois juntos neste momento.", future: "Até onde o que segura vocês hoje consegue levar os dois." },
    crushApproach: { answer: "Se é para dar o primeiro passo, e por quê." },
    crushHeart: { situation: "Onde esse sentimento colocou você agora, de verdade.", action: "O movimento que esse sentimento está pedindo de você.", result: "Onde esse sentimento vai parar se você fizer esse movimento." },
    crushAgain: { answer: "Se existe um caminho de volta para vocês dois, e que forma esse caminho toma enquanto se abre ou se fecha." },
    crushLearn: { was: "O que essa ligação foi de verdade, enquanto durou.", left: "A parte dessa ligação que nunca saiu de você.", learn: "O que essa ligação veio ensinar a você." },
    crushThink: { you: "O que você carrega enquanto se pergunta se essa pessoa pensa em você.", them: "Quanto espaço você ocupa na cabeça dessa pessoa, de verdade.", between: "O que passa entre vocês de verdade, não só na sua cabeça." },
    crushConfess: { situation: "Em que pé vocês estão antes de você dizer o que sente.", action: "Com que espírito dizer o que sente, se você decidir ir em frente.", result: "Como essa pessoa recebe quando souber, e onde isso deixa vocês dois." },
    crushLetGo: { answer: "Se já é hora de soltar essa pessoa, e por quê — esta carta é você na beira de soltar, não a outra pessoa." },
    crushSilence: { now: "Em que pé vocês dois estão agora que essa pessoa sumiu.", block: "O motivo de verdade de essa pessoa ter sumido — algo do lado dela, ou algo que entrou no meio de vocês.", move: "O que reabriria a conversa — um passo que você pode dar, ou um sinal para ficar quieto por enquanto." },
    crushSettle: { situation: "O que ainda está embolado na sua cabeça sobre isso.", action: "A única coisa que começa a pôr sua cabeça no lugar, de verdade.", result: "Onde sua cabeça vai parar depois que você fizer isso." },
    workBlock: { now: "Onde esse trabalho está parado agora.", block: "O que está segurando esse trabalho, de verdade.", move: "O que faz esse trabalho andar de novo." },
    workMove: { answer: "Se é para mudar de emprego agora — e o motivo por trás da resposta." },
    workMiss: { seen: "A parte desse trabalho que você já enxerga com clareza.", unseen: "O canto desse trabalho para onde você não vinha olhando.", know: "O que muda nesse trabalho quando esse canto aparece." },
    workAhead: { situation: "Onde esse trabalho está hoje, de verdade.", action: "O movimento que esse trabalho está pedindo de você agora.", result: "Onde esse trabalho vai dar se você fizer esse movimento." },
    workTalent: { have: "O que você já faz bem, mesmo sem nunca ter dado nome a isso: lidar com o que esta carta mostra melhor do que a maioria.", thin: "A habilidade que ainda falta, bem do lado da que você tem.", use: "Onde esse seu talento conta de verdade." },
    workStay: { answer: "Se é para ficar onde você está, e o motivo por trás da decisão — o que esse lugar está dando a você, ou o que está tirando de você sem alarde." },
    workPeople: { you: "O que você leva para cada conversa com essa pessoa.", them: "Onde essa pessoa está de verdade, por trás do que mostra no trabalho.", between: "O que está acontecendo entre você e essa pessoa no trabalho, de verdade." },
    workExam: { have: "O que já está firme para a prova.", thin: "A parte a reforçar antes da prova.", use: "Onde sua preparação conta de verdade no dia da prova." },
    workLearn: { answer: "Se o que você está estudando agora é o certo, e por quê." },
    lifeMoney: { now: "Em que pé você e o seu dinheiro estão agora.", block: "O que mantém o seu dinheiro embolado.", move: "Por onde começar com dinheiro, de verdade." },
    lifeChoice: { answer: "Se é para ir nessa, e por quê." },
    lifeFlow: { past: "O que fez as coisas fluírem do jeito que fluem agora.", present: "Como as coisas estão fluindo para você neste momento, de verdade.", future: "Para onde essa fase leva você se nada mudar." },
    lifeSpend: { answer: "Se esse gasto vale a pena, e por quê." },
    lifeImportant: { pull: "De tudo que você tem para dar conta agora, o que puxa você com mais força.", real: "O que ainda vai importar para você quando o barulho baixar.", first: "A primeira coisa a pegar, agora que você vê o que importa." },
    lifeMove: { situation: "Em que pé você está com a mudança agora.", action: "O que a mudança pede de você primeiro.", result: "Aonde a mudança leva você, se você for." },
    lifeSave: { now: "Como o dinheiro entra e sai para você agora.", block: "O motivo de verdade de o dinheiro nunca ficar.", move: "O que faria o dinheiro finalmente ficar." },
    lifeStart: { situation: "De onde essa coisa nova está partindo.", action: "O que essa coisa nova pede de você logo no começo.", result: "Como essa coisa nova anda depois que você dá o que ela pede." },
    lifeHold: { seen: "O que você já sabe que está segurando.", unseen: "O que você está agarrando de verdade, por baixo disso.", know: "O que deixa sua mão abrir depois que você vê." },
    healthSignal: { seen: "O sinal do seu corpo que você já percebeu.", unseen: "O que o seu corpo vem pedindo por meio dessa cena, e você vive atropelando.", know: "O que muda no jeito de cuidar do seu corpo quando você escuta." },
    healthBurnout: { now: "O quanto a sua energia está no fim agora, sem enfeite.", block: "O que drena você mais rápido do que você consegue repor.", move: "O que começa a colocar alguma coisa de volta no tanque." },
    healthSleep: { now: "Como as suas noites são de verdade depois que a luz apaga.", block: "O que mantém sua cabeça ligada quando o resto de você quer parar.", move: "O que finalmente deixa sua cabeça sossegar à noite." },
    healthAnxious: { seen: "A explicação que você vem dando para essa ansiedade.", unseen: "Para onde essa ansiedade aponta de verdade, por baixo dessa explicação.", know: "Como essa ansiedade muda quando você dá nome ao que está por trás dela." },
    healthRest: { answer: "Se dá para parar um pouco e descansar, e por quê." },
    healthHabit: { situation: "Em que pé você está com esse hábito agora.", action: "O que mudar esse hábito exige, de verdade.", result: "Onde você vai parar depois que mudar esse hábito." },
    healthSlipBack: { now: "Em que pé você está com o velho hábito agora.", block: "O que vive puxando você de volta para o velho hábito.", move: "O que segura você longe do velho hábito desta vez." },
    healthMind: { have: "O que segura você quando tudo fica pesado.", thin: "O apoio que você procura e que ainda não consegue segurar você.", use: "Onde o que segura você deixa um dia pesado mais leve, de verdade." },
    healthBody: { situation: "Em que pé você e o seu corpo estão um com o outro agora.", action: "O que é preciso, de verdade, para fazer as pazes com o seu corpo.", result: "Onde você e o seu corpo vão parar depois desse movimento." },
    healthBeside: { you: "O que você está carregando enquanto fica ao lado dessa pessoa.", them: "O que a pessoa de quem você cuida está sentindo, não o que ela mostra.", between: "O que passa entre vocês de verdade enquanto ela está doente." },
    healthWaitBaby: { you: "O que você traz para essa espera pelo bebê, dito ou não.", them: "O lado de quem está com você nessa espera, que pode não bater com o seu.", between: "O que a espera está fazendo com o espaço entre vocês." },
    healthExpecting: { pull: "O que grita mais alto na sua cabeça com o bebê a caminho.", real: "O que tem peso de verdade enquanto você está grávida.", first: "A única coisa para cuidar primeiro, antes de o bebê chegar." },
    healthBirth: { have: "A força que você já leva para o parto.", thin: "O que ainda falta em você com o parto chegando.", use: "O tipo de momento em que você vai buscar essa força, com o parto chegando." },
  },

  // ── 질문별 마무리 한 줄 — 세 장이 이 질문에 어떻게 하나의 답이 되는지, 어느 장을 오래 볼지 ──
  topicClose: {
    loveNow: "As duas primeiras cartas mostram onde cada um de vocês está, cada um do seu lado. A terceira é onde vocês estão juntos — a resposta é essa, então é nela que vale demorar mais.",
    loveWhere: "Leia as três como uma história só: de onde essa relação veio, onde está e para onde vai. Demore mais na terceira — a resposta é ela; a segunda diz o quanto essa resposta é firme.",
    loveThem: "A segunda carta é a que você veio buscar, então fique mais tempo nela. A primeira molda o jeito como você lê essa pessoa, e a terceira diz quanto do que passa na cabeça dela chega até você de fato.",
    loveGo: "A palavra ali em cima diz se vale continuar com essa pessoa; a carta embaixo é o motivo. Se for sim, ela mostra o que seguir com essa pessoa vai pedir de você; se for não, o que está dizendo para parar; se for ainda não, o que ainda precisa assentar primeiro. Fique mais tempo na carta do que na palavra.",
    loveNeed: "A resposta é a segunda carta, então fique mais tempo nela — o que essa relação precisa é algo que você consegue fazer de fato. Se a carta nomear algo a fazer, é essa a resposta; se apontar uma falta ou um atrito, a resposta é preencher isso. A primeira carta diz por que isso é preciso agora; a terceira, até onde vocês dois chegam depois que isso entra.",
    loveMiss: "A primeira carta é a parte que você já conhece — confira e deixe do lado da segunda, porque é em contraste com ela que a segunda faz sentido. A segunda é a sua resposta, o lado dessa relação que você não vinha enxergando, então demore mais nela; a terceira é o que muda entre vocês depois que isso aparece.",
    loveClash: "A primeira carta é onde vocês vivem se desencontrando, a segunda é o porquê, e a terceira é o que coloca os dois de volta em sintonia. Você perguntou por quê, então fique mais na segunda; a terceira só faz sentido quando você sabe o que ela precisa desfazer.",
    loveHonest: "A resposta ali em cima diz se é para falar em voz alta; a carta embaixo é o motivo, então fique mais na carta do que na palavra. Se for sim, a carta diz o que falar abre entre vocês. Se for não, o que precisa se ajeitar antes das palavras. Se for ainda não, o que precisa se acalmar para que elas caibam. Quando sai não, não é para engolir — é 'assim, não' — então leia na carta o que bateria primeiro se você falasse agora, e como falar em vez disso.",
    loveLast: "Leia as três numa linha só — o que segurou vocês, o que segura agora, até onde isso leva. A terceira carta é a resposta, mas é na segunda que vale demorar: o que segura vocês hoje é o que vai precisar aguentar o caminho todo.",
    crushApproach: "A resposta lá em cima diz se é para dar o primeiro passo; a carta embaixo é o porquê. Fique mais tempo na carta do que na resposta — se for sim, ela diz como dar esse passo; se for não, no que você esbarra se der agora; se for ainda não, o que precisa assentar antes.",
    crushHeart: "Leia as três em ordem: onde o sentimento está, o que fazer com ele, aonde isso leva. Fique mais na segunda carta — é ela que responde à sua pergunta — e use a terceira para ver se o movimento vale a pena.",
    crushAgain: "A resposta lá em cima diz se existe volta para vocês dois; a carta embaixo é a forma desse caminho. Seja do que for que a carta pareça estar falando, leia como o caminho de volta — se for sim, ela mostra como esse caminho se abre e o que pede de você; se for não, o que está fechando a passagem; se for ainda não, o que precisa assentar primeiro. Fique mais tempo na carta do que na palavra lá em cima.",
    crushLearn: "A primeira carta é o que isso foi, a segunda é o que sobrou disso, a terceira é para que serviu. Demore mais na segunda — o que isso deixou em você é o que ainda está aí agora, não o que parecia na época.",
    crushThink: "A segunda carta é a que você veio buscar — ela diz se você está na cabeça dessa pessoa, então fique mais nela. Compare a primeira com ela para ver quanto dessa atração é só sua, e a terceira para ver se algo se move entre vocês de verdade.",
    crushConfess: "Você perguntou o que acontece se você se declarar — isso é a terceira carta, então fique mais nela. Leia como o jeito que essa pessoa recebe e onde isso deixa vocês dois. A primeira mostra em que pé as coisas estão antes de você dizer qualquer coisa, e a segunda é o espírito com que você diz — e é ele que molda a resposta dela — então leia a terceira como o que volta quando você fala desse jeito, não sozinha.",
    crushLetGo: "A palavra ali em cima responde se já é hora de soltar; a carta embaixo é o motivo. Leia essa carta como você, não como a outra pessoa — você na beira de soltar. Se for sim, a carta mostra o que entra no espaço que você abre; se for não, o que ficou por terminar e ainda segura você; se for ainda não, o que precisa clarear dentro de você antes de a resposta clarear. Fique mais tempo na carta do que na palavra — como soltar, ou por que segurar, está escrito ali.",
    crushSilence: "Você perguntou por que essa pessoa sumiu — isso é a segunda carta, então fique mais nela. Leia o que ela diz como sendo sobre essa pessoa: se aparece alguém, é onde a atenção dela está agora; se não, é o estado em que ela está, ou o que entrou no meio de vocês. A primeira carta é em que pé vocês dois estão nesse silêncio; a terceira é o que você faz depois de saber o motivo — procurar, ou esperar.",
    crushSettle: "A segunda carta é o que você pediu — a coisa a fazer — então fique mais nela. A primeira diz o que esse movimento precisa desembolar, e a terceira, como fica sua cabeça depois de assentar, para você saber quando chegou lá.",
    workBlock: "A segunda carta é a resposta — o que está segurando esse trabalho; a primeira é o que esse bloqueio já fez com o trabalho até aqui, e a terceira é o que afrouxa isso. Fique mais na segunda, e leia as outras duas em volta dela.",
    workMove: "A palavra ali em cima é a sua resposta sobre mudar de emprego; a carta é o motivo. Leia nela o que a mudança pediria de você agora.",
    workMiss: "A primeira carta é a parte desse trabalho que você já tinha à vista, a segunda é o canto para onde você não vinha olhando — é isso que você perguntou — e a terceira é o que muda quando ele aparece. Fique mais tempo na segunda.",
    workAhead: "A primeira carta é onde o trabalho está, a segunda é o movimento que ele pede, e a terceira é onde vai dar. Você perguntou como isso acaba, então fique na terceira — mas leia como consequência da segunda, não sozinha.",
    workTalent: "A primeira carta é o que você faz bem — a resposta ao que você perguntou. Se ela saiu pesada, não é defeito: quer dizer que você já passou por esse terreno mais vezes do que a maioria e já sabe lidar com ele, e é esse saber que é o talento. A segunda carta é onde esse talento enfraquece, a terceira é onde ele conta de verdade. Fique mais na primeira, e procure na terceira onde colocar isso para trabalhar.",
    workStay: "A palavra ali em cima é a decisão sobre ficar onde você está — sim, não ou ainda não — e a carta embaixo é o motivo. Se for sim, leia a carta como o que esse lugar ainda está dando a você, ou o que você ainda tem para terminar aqui; se for não, como o que ele está tirando de você sem alarde; se for ainda não, como o que precisa assentar antes de a resposta se firmar. Fique mais tempo na carta do que na palavra — fique ou vá embora, o próximo passo está escrito ali.",
    workPeople: "A primeira carta é o que você leva para isso, a segunda é a pessoa que você está tentando ler, a terceira é o que corre entre vocês de fato. Fique mais na segunda — é a leitura que você pediu — e confira com a terceira; onde as duas não batem, a primeira costuma ser o motivo.",
    workExam: "A primeira carta é o que já está firme, a segunda é o que reforçar, a terceira é onde sua preparação aparece no dia da prova. Você perguntou o que consertar, então leia a segunda por mais tempo — a primeira diz com o que não perder tempo.",
    workLearn: "A resposta ali em cima diz se é isso que você deveria estar estudando. A carta embaixo é o motivo — leia nela o que esse estudo está construindo em você, e o que não está.",
    lifeMoney: "A primeira carta é em que pé o seu dinheiro está, a segunda é o que deixa ele embolado, a terceira é o fio a puxar primeiro. Você perguntou por onde começar, então fique mais na terceira — a resposta de verdade é ela.",
    lifeChoice: "A palavra ali em cima é a decisão sobre ir nessa — sim, não ou ainda não. A carta embaixo é o motivo. Se for sim, ela diz o que ir nessa vai pedir de você; se for não, o que está avisando para não ir; se for ainda não, o que precisa assentar antes de você decidir. Fique mais tempo na carta do que na palavra — a palavra só diz se vai; a carta diz o que fazer com isso.",
    lifeFlow: "Leia as três como uma correnteza só: a primeira carta é o que pôs isso em movimento, a segunda é onde está agora, a terceira é para onde leva você. Você perguntou sobre agora, então fique mais na segunda — as outras duas dizem para que lado isso se move.",
    lifeSpend: "A resposta ali em cima é a decisão sobre esse gasto valer a pena — sim, não ou ainda não — e o texto da carta é o motivo. Se for sim, ele diz o que esse dinheiro está comprando para você de verdade; se for não, o que esse gasto tiraria de você além do preço, ou por que não agora; se for ainda não, o que precisa assentar antes de você abrir a carteira. Leia para isso, não para a etiqueta de preço.",
    lifeImportant: "Você perguntou o que é mais importante agora, e a segunda carta é a resposta — fique mais nela. A primeira é onde a sua atenção esteve de fato: se diz a mesma coisa que a segunda, o seu coração já está no lugar certo; se diz outra coisa, é o tanto que a sua atenção se desviou. A terceira é a única coisa a pegar primeiro, por causa do que importa.",
    lifeMove: "A primeira carta é em que pé a mudança está, a segunda é o que ela pede de você, a terceira é onde ela vai dar. A pergunta é o que acontece, então fique mais na terceira — mas leia como resultado de fazer a segunda, não sozinha.",
    lifeSave: "A primeira carta é como o dinheiro entra e sai para você hoje, a segunda é o motivo de verdade de ele nunca ficar, a terceira é o que faria ele ficar. Você perguntou por quê, então fique mais na segunda — a terceira só faz sentido depois de ver o motivo. Se a segunda for uma carta escura, o vazamento é ali; se parecer boa notícia, é para lá que o dinheiro está indo primeiro.",
    lifeStart: "A primeira carta é de onde essa coisa nova parte, a segunda é o que ela pede de você no começo, a terceira é como ela anda. Você perguntou como vai ser, então fique mais na terceira — leia como o lugar aonde a segunda leva.",
    lifeHold: "Junte as três: a primeira carta é a parte que você se permite ver, a segunda é o que você está se recusando a largar de fato, e a terceira é o que afrouxa sua mão depois que você vê. A resposta a essa pergunta é a segunda carta — fique mais tempo ali.",
    healthSignal: "A primeira carta é o sinal do seu corpo que você já sentiu, a segunda é o que ele vinha pedindo por trás disso, e a terceira é o que muda no jeito de cuidar dele quando você ouve esse pedido. Leia a primeira e a segunda lado a lado — a distância entre as duas é a parte que você não vinha ouvindo. Fique mais na segunda: seja qual for a cena que apareceu, é um retrato do que o seu corpo quer, então traduza para a língua do corpo. É isso que ele estava esperando você notar.",
    healthBurnout: "A primeira carta diz o quanto o seu tanque está vazio de verdade, a segunda é o vazamento, e a terceira é por onde começa a reposição. Fique mais na segunda — não dá para encher um tanque que ainda está vazando.",
    healthSleep: "A primeira carta é a noite como ela é, a segunda é o que mantém sua cabeça ligada, e a terceira é o que deixa ela parar. Fique mais na segunda — os pensamentos que não sossegam costumam carregar algo que o dia não deu conta.",
    healthAnxious: "A primeira carta é a explicação que você vem dando para a ansiedade, a segunda é o que está por trás dela de verdade, e a terceira é o que muda quando você chama isso pelo nome. Fique mais na segunda — a ansiedade costuma gritar mais quando o que está por trás ainda não foi dito.",
    healthRest: "A palavra ali em cima é a resposta sobre dar para parar um pouco e descansar; a carta embaixo é o motivo. Se for sim, a carta mostra o que a pausa devolve a você, ou como descansar para que o descanso valha. Se for não ou ainda não, mostra o que está impedindo você de descansar agora. Mesmo quando a carta não parece falar de descanso, leia o que ela descreve como se fosse sobre você parar agora. Quando sai não ou ainda não, não é 'aguenta mais' — é que algo precisa ser posto no chão primeiro para o descanso ser descanso de verdade. É uma questão de hora certa, não de merecer. A carta diz mais que a palavra, então fique mais tempo nela.",
    healthHabit: "A primeira carta é em que pé você está com o hábito agora, a segunda é o que mudar exige de verdade, e a terceira é onde isso deixa você. Fique mais na terceira — é a resposta ao que você perguntou, e a segunda é o preço de chegar lá.",
    healthSlipBack: "A primeira carta é em que pé você está com o velho hábito hoje, a segunda é a puxada que sempre traz você de volta, e a terceira é o que ajuda a ficar longe dele desta vez. Fique mais na segunda — recair raramente é falta de força de vontade; quase sempre é o que o velho hábito fazia por você em silêncio.",
    healthMind: "A resposta a essa pergunta é a primeira carta — em que você se apoia quando pesa não é algo para construir; é o que já está segurando você. A segunda é onde o peso balança se você põe tudo ali, então leia como um sinal para passar esse peso para a primeira. A terceira é que parte de um dia pesado fica mais leve primeiro quando você faz isso. Fique mais na primeira — nos dias pesados, antes de sair procurando mais alguma coisa, comece pelo que já está segurando você.",
    healthBody: "A primeira carta é em que pé você e o seu corpo estão, a segunda é o movimento que torna as pazes possíveis, e a terceira é onde esse movimento deixa vocês dois. Fique mais na segunda — você perguntou o que fazer, e a resposta é essa carta; a terceira mostra aonde fazer isso leva.",
    healthBeside: "A primeira carta é o que você carrega, a segunda é o que ela sente por baixo do que mostra, e a terceira é o que corre entre vocês no meio disso tudo. Fique mais na primeira — você perguntou como segurar as pontas, e ninguém segura as pontas por muito tempo ignorando o que carrega.",
    healthWaitBaby: "A primeira carta é você nessa espera pelo bebê, a segunda é quem está com você na mesma espera, e a terceira é o que a espera está fazendo com vocês dois. Fique mais na terceira — você perguntou como se manter unidos, e é ali que a proximidade está sendo guardada ou gasta em silêncio.",
    healthExpecting: "A primeira carta é o que grita mais alto na gravidez, a segunda é o que tem peso de verdade, e a terceira é a única coisa para cuidar primeiro. Fique mais na segunda — muita coisa faz barulho nesses meses, e essa carta é como você separa o que é barulho do que é peso.",
    healthBirth: "A primeira carta é a força que você já tem para o parto, a segunda é o que ainda falta, e a terceira é o tipo de momento em que você vai buscar essa força. Fique mais na primeira — é a resposta ao que você perguntou, e já está em você. A segunda só mostra onde pegar leve com você mesma conforme o dia se aproxima, e a terceira não é uma previsão do dia, mas o momento de lembrar da primeira carta — se a terceira parecer pesada, é exatamente para esse momento que a primeira existe.",
  },

  // ── 분류 아래 안내 한 줄. 지금은 건강 분류에만 있다 — 진단이 아니라 들여다보는 자리라는 것. ──
  ranks: {
    1: 'Ás', 2: 'Dois', 3: 'Três', 4: 'Quatro', 5: 'Cinco', 6: 'Seis', 7: 'Sete',
    8: 'Oito', 9: 'Nove', 10: 'Dez', 11: 'Valete', 12: 'Cavaleiro', 13: 'Rainha', 14: 'Rei',
  },
  minorName: (rank, suit) => `${rank} de ${suit}`,
}
