// Português (BR). A estrutura precisa ser idêntica à de en.js.
export default {
  tabs: { today: 'Hoje', readings: 'Tiragens', library: 'Cartas', journal: 'Diário' },

  common: {
    back: 'Voltar',
    close: 'Fechar',
    copied: 'Copiado',
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

    love: 'Amor',

    crush: 'Paquera e ex',

    work: 'Trabalho e estudos',

    life: 'Dinheiro e escolhas',

  },


  // 주제별 질문. 스프레드 이름 대신 '무엇이 궁금한가'로 고르게 한다.

  // 각 언어로 따로 썼다 — 직역하면 어느 나라 말도 아닌 문장이 된다.

  topics: {

    loveNow: 'Em que pé a gente está de verdade?',

    loveWhere: 'Para onde essa relação está indo?',

    loveThem: 'O que essa pessoa está sentindo?',

    loveGo: 'Continuo com essa pessoa?',

    crushApproach: 'Dou o primeiro passo?',

    crushHeart: 'O que faço com o que sinto?',

    crushAgain: 'Existe volta para nós dois?',

    crushLearn: 'O que isso me deixou?',

    workBlock: 'O que está travando meu trabalho?',

    workMove: 'Mudo de emprego?',

    workMiss: 'O que estou deixando passar?',

    workAhead: 'Como isso vai acabar?',

    lifeMoney: 'Por onde começo com dinheiro?',

    lifeChoice: 'Vou nessa ou não?',

    lifeAdvice: 'O que eu preciso ouvir hoje?',

    lifeFlow: 'Como está minha fase agora?',

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
      title: 'Tiragem do amor',
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
      title: 'Trabalho e dinheiro',
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

  ranks: {
    1: 'Ás', 2: 'Dois', 3: 'Três', 4: 'Quatro', 5: 'Cinco', 6: 'Seis', 7: 'Sete',
    8: 'Oito', 9: 'Nove', 10: 'Dez', 11: 'Valete', 12: 'Cavaleiro', 13: 'Rainha', 14: 'Rei',
  },
  minorName: (rank, suit) => `${rank} de ${suit}`,
}
