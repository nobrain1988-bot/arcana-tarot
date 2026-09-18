// Deutsch. Die Struktur muss mit en.js identisch sein.
export default {
  tabs: { today: 'Heute', readings: 'Legungen', library: 'Karten', journal: 'Tagebuch' },

  common: {
    back: 'Zurück',
    close: 'Schließen',
    copied: 'Kopiert',
    sound: 'Ton',
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
    together: "Zusammen gelesen",
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
    soundBlurb: 'Ein tiefes Summen und gelegentlich eine Glocke. Von der App erzeugt, keine Aufnahme.',
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



    all: 'Alle',
    love: 'Liebe',

    crush: 'Schwarm & Ex',

    work: 'Beruf & Studium',

    life: 'Geld & Entscheidungen',

    health: "Gesundheit",
  },


  // 주제별 질문. 스프레드 이름 대신 '무엇이 궁금한가'로 고르게 한다.

  // 각 언어로 따로 썼다 — 직역하면 어느 나라 말도 아닌 문장이 된다.

  topics: {

    loveNow: 'Wo stehen wir wirklich?',

    loveWhere: 'Wohin führt diese Beziehung?',

    loveThem: 'Was fühlt die Person gerade?',

    loveGo: 'Soll ich mit dieser Person weitermachen?',

    loveNeed: 'Was braucht unsere Beziehung jetzt?',

    loveMiss: 'Was übersehe ich dabei?',

    loveClash: 'Warum reden wir gerade aneinander vorbei?',

    loveHonest: 'Soll ich es offen ansprechen?',

    loveLast: 'Hält das auf Dauer?',

    crushApproach: 'Soll ich den ersten Schritt machen?',

    crushHeart: 'Wohin mit diesen Gefühlen?',

    crushAgain: 'Gibt es einen Weg zurück?',

    crushLearn: 'Was ist mir davon geblieben?',

    crushThink: 'Denkt die Person überhaupt an mich?',

    crushConfess: 'Was passiert, wenn ich es sage?',

    crushLetGo: 'Ist es Zeit loszulassen?',

    crushSilence: 'Warum kommt nichts mehr zurück?',

    crushSettle: 'Wie sortiere ich das in meinem Kopf?',

    workBlock: 'Was blockiert meine Arbeit?',

    workMove: 'Soll ich wechseln?',

    workMiss: 'Was übersehe ich gerade?',

    workAhead: 'Wie geht das aus?',

    workTalent: 'Worin bin ich wirklich gut?',

    workStay: 'Soll ich bleiben, wo ich bin?',

    workPeople: 'Wie deute ich diese Person im Job?',

    workExam: 'Was soll ich vor der Prüfung festigen?',

    workLearn: 'Lerne ich gerade das Richtige?',

    lifeMoney: 'Wo fange ich beim Geld an?',

    lifeChoice: 'Soll ich es wagen?',

    lifeFlow: 'Wie läuft es gerade für mich?',

    lifeSpend: 'Lohnt sich diese Ausgabe?',

    lifeImportant: 'Was zählt für mich gerade am meisten?',

    lifeMove: 'Was passiert, wenn ich umziehe?',

    lifeSave: 'Warum bleibt nie etwas übrig?',

    lifeStart: 'Wie läuft das Neue, das ich anfange?',

    lifeHold: 'Woran halte ich fest?',

    lifeAdvice: 'Was brauche ich heute zu hören?',

    healthSignal: "Was will mir mein Körper sagen?",
    healthBurnout: "Warum bin ich ständig so erschöpft?",
    healthSleep: "Warum kann ich nachts nicht abschalten?",
    healthAnxious: "Was steckt wirklich hinter dieser Angst?",
    healthRest: "Darf ich jetzt eine Weile ausruhen?",
    healthHabit: "Was passiert, wenn ich diese Gewohnheit ändere?",
    healthSlipBack: "Warum verfalle ich immer wieder in alte Gewohnheiten?",
    healthMind: "Was gibt mir Halt, wenn es schwer wird?",
    healthBody: "Wie schließe ich Frieden mit meinem Körper?",
    healthBeside: "Wie halte ich durch, wenn ein geliebter Mensch krank ist?",
    healthWaitBaby: "Wie bleiben wir uns nah, während wir auf ein Kind hoffen?",
    healthExpecting: "Was zählt in der Schwangerschaft wirklich?",
    healthBirth: "Welche Kraft habe ich für die Geburt schon in mir?",
    healthLoss: "Was bleibt in mir, nachdem ich mein Kind verloren habe?",
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
      title: 'Zwei Menschen',
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
      title: 'Was dich aufhält',
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
    hidden: {
      title: 'Was du nicht gesehen hast',
      blurb: 'Trennt das Offensichtliche von dem, was verdeckt blieb.',
      pos: {
        seen: { label: 'Was du siehst', lead: 'Der Teil, den du schon kennst.' },
        unseen: { label: 'Was verdeckt ist', lead: 'Der Teil, der außerhalb deines Blicks blieb.' },
        know: { label: 'Was du wissen solltest', lead: 'Was sich ändert, sobald du es siehst.' },
      },
    },
    strength: {
      title: 'Was du hast',
      blurb: 'Was stark ist, was fehlt und wo es hingehört.',
      pos: {
        have: { label: 'Deine Stärke', lead: 'Was schon in dir steckt.' },
        thin: { label: 'Was fehlt', lead: 'Der Teil, der noch nicht gewachsen ist.' },
        use: { label: 'Wo es greift', lead: 'Wo diese Stärke wirklich wirkt.' },
      },
    },
    residue: {
      title: 'Was geblieben ist',
      blurb: 'Was eine abgeschlossene Sache zurückgelassen hat.',
      pos: {
        was: { label: 'Was damals war', lead: 'Was zu der Zeit wirklich da war.' },
        left: { label: 'Was jetzt bleibt', lead: 'Was immer noch in dir ist.' },
        learn: { label: 'Was es gelehrt hat', lead: 'Wozu das Ganze gut war.' },
      },
    },
    priority: {
      title: 'Was zählt',
      blurb: 'Trennt das, was an dir zieht, von dem, was Gewicht hat.',
      pos: {
        pull: { label: 'Was an dir zieht', lead: 'Was gerade am lautesten ist.' },
        real: { label: 'Was wirklich zählt', lead: 'Wo das Gewicht tatsächlich liegt.' },
        first: { label: 'Womit anfangen', lead: 'Das eine, das zuerst dran ist.' },
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

  // ── 분류 아래 안내 한 줄. 지금은 건강 분류에만 있다 — 진단이 아니라 들여다보는 자리라는 것. ──
  catNote: {
    health: "Zum Hinschauen gedacht, nicht als Diagnose. Alles Medizinische klärst du beim Arzt.",
  },

  // ── 질문별 자리 설명 ────────────────────────────────────────
  // 스프레드의 pos.*.lead 는 어느 질문에나 붙는 말이라("지금 상황 그대로.") 답이 질문과 상관없어 보였다.
  // 여기 있는 문장이 그 자리를 대신한다 — 그 질문의 주어가 들어간 렌즈. 없는 질문은 스프레드 lead 로 떨어진다.
  topicLeads: {
    loveNow: { you: "Deine Seite – wie du zu dieser Person stehst.", them: "Die andere Seite – wie die Person zu dir steht.", between: "Was ihr zwei gerade wirklich füreinander seid." },
    loveWhere: { past: "Was diese Beziehung bis hierher getragen hat.", present: "Wo ihr beide in dieser Beziehung gerade steht.", future: "Wohin diese Beziehung geht, wenn sie so weiterläuft." },
    loveThem: { you: "Mit welchem Blick du gerade auf diese Person schaust.", them: "Was in dieser Person gerade wirklich vorgeht.", between: "Wie viel vom Innenleben dieser Person tatsächlich bei dir ankommt." },
    loveGo: { answer: "Ob du mit dieser Person weitermachen sollst, und warum." },
    loveNeed: { situation: "Womit ihr zwei gerade tatsächlich arbeiten könnt.", action: "Das eine, worum diese Beziehung dich jetzt bittet.", result: "Was aus dieser Beziehung wird, sobald das da ist." },
    loveMiss: { seen: "Was du in dieser Beziehung schon klar siehst.", unseen: "Der Teil dieser Beziehung, den du bisher übersehen hast.", know: "Was sich zwischen euch ändert, sobald dieser Teil im Blick ist." },
    loveClash: { now: "Wo ihr zwei immer wieder landet, wenn ihr aneinander vorbeiredet.", block: "Was euch immer wieder aus dem Takt bringt.", move: "Was euch wieder in denselben Takt bringt." },
    loveHonest: { answer: "Ob du es aussprechen sollst, und warum." },
    loveLast: { past: "Was euch zwei bis jetzt zusammengehalten hat.", present: "Was euch zwei gerade zusammenhält.", future: "Wie weit das, was euch jetzt hält, euch tragen kann." },
    crushApproach: { answer: "Ob du den ersten Schritt machen sollst, und warum." },
    crushHeart: { situation: "Wo diese Gefühle dich gerade tatsächlich hingebracht haben.", action: "Der Schritt, um den diese Gefühle dich bitten.", result: "Wo diese Gefühle landen, wenn du diesen Schritt gehst." },
    crushAgain: { answer: "Ob es einen Weg zurück zueinander gibt, und warum." },
    crushLearn: { was: "Was diese Verbindung wirklich war, solange sie hielt.", left: "Der Teil dieser Verbindung, der dich nie ganz verlassen hat.", learn: "Was diese Verbindung dich lehren sollte." },
    crushThink: { you: "Was du mit dir herumträgst, solange unklar ist, ob die Person an dich denkt.", them: "Wie viel Platz du im Kopf dieser Person wirklich einnimmst.", between: "Was wirklich zwischen euch läuft, nicht nur in deinem Kopf." },
    crushConfess: { situation: "Wo ihr steht, bevor du sagst, was du fühlst.", action: "Wie du es sagst, wenn du dich dafür entscheidest.", result: "Wo ihr zwei landet, sobald die Person es weiß." },
    crushLetGo: { answer: "Ob es Zeit ist, das loszulassen, und warum." },
    crushSilence: { now: "Wo ihr zwei steht, seit die Person still geworden ist.", block: "Was diese Person tatsächlich davon abhält, sich zu melden.", move: "Was euch zwei wieder ins Gespräch bringen würde." },
    crushSettle: { situation: "Was in deinem Kopf gerade noch durcheinanderliegt.", action: "Das eine, das wirklich anfängt, Ordnung in deinen Kopf zu bringen.", result: "Wo dein Kopf landet, sobald du das getan hast." },
    workBlock: { now: "Wo diese Arbeit gerade feststeckt.", block: "Was diese Arbeit tatsächlich zurückhält.", move: "Was diese Arbeit wieder in Gang bringt." },
    workMove: { answer: "Ob du jetzt die Stelle wechseln sollst – und der Grund dahinter." },
    workMiss: { seen: "Der Teil dieser Arbeit, den du schon klar siehst.", unseen: "Die Ecke dieser Arbeit, in die du nicht geschaut hast.", know: "Was sich in dieser Arbeit ändert, sobald du diese Ecke siehst." },
    workAhead: { situation: "Wo diese Arbeit heute tatsächlich steht.", action: "Der Schritt, um den diese Arbeit dich jetzt bittet.", result: "Wo diese Arbeit landet, wenn du diesen Schritt gehst." },
    workTalent: { have: "Was du gut kannst, auch wenn du es nie so genannt hast.", thin: "Die Fähigkeit, die dir noch fehlt, direkt neben der, die du hast.", use: "Wo dieses Talent wirklich zählt." },
    workStay: { answer: "Ob du bleiben sollst, wo du bist, und der Grund dafür." },
    workPeople: { you: "Was du in jede Begegnung mit dieser Person mitbringst.", them: "Wo diese Person wirklich steht, hinter dem, was sie dir im Job zeigt.", between: "Was zwischen dir und dieser Person im Job wirklich läuft." },
    workExam: { have: "Was vor der Prüfung schon sitzt.", thin: "Der Teil, den du vor der Prüfung noch festigen solltest.", use: "Wo deine Vorbereitung am Prüfungstag wirklich zählt." },
    workLearn: { answer: "Ob das, was du gerade lernst, das Richtige ist, und warum." },
    lifeMoney: { now: "Wo du mit deinem Geld gerade stehst.", block: "Was deine Finanzen immer wieder verheddert.", move: "Wo du beim Geld tatsächlich anfängst." },
    lifeChoice: { answer: "Ob du es wagen sollst, und warum." },
    lifeFlow: { past: "Was alles so ins Rollen gebracht hat, wie es jetzt läuft.", present: "Wie es für dich gerade wirklich läuft.", future: "Wohin die Strömung dich trägt, wenn sich nichts ändert." },
    lifeSpend: { answer: "Ob sich diese Ausgabe lohnt, und warum." },
    lifeImportant: { pull: "Was von allem, was gerade anliegt, am lautesten ruft.", real: "Das, was noch zählt, wenn der Lärm sich gelegt hat.", first: "Das Erste, das du anpackst, jetzt, wo du siehst, was zählt." },
    lifeMove: { situation: "Wo du mit dem Umzug gerade stehst.", action: "Was der Umzug als Erstes von dir verlangt.", result: "Wohin der Umzug dich bringt, wenn du gehst." },
    lifeSave: { now: "Wie Geld bei dir gerade kommt und geht.", block: "Wo dein Geld immer wieder versickert.", move: "Was dafür sorgen würde, dass endlich etwas übrig bleibt." },
    lifeStart: { situation: "Wo dieses Neue gerade anfängt.", action: "Was dieses Neue am Anfang von dir verlangt.", result: "Wie dieses Neue läuft, sobald du ihm gibst, was es verlangt." },
    lifeHold: { seen: "Das, was du ganz bewusst festhältst.", unseen: "Was du darunter in Wirklichkeit umklammerst.", know: "Was deine Hand öffnet, sobald du es siehst." },
    healthSignal: { seen: "Das Signal deines Körpers, das du schon bemerkt hast.", unseen: "Worum dein Körper dich immer wieder bittet und was du übergehst.", know: "Was sich daran ändert, wie du für deinen Körper sorgst, sobald du hinhörst." },
    healthBurnout: { now: "Wie leer du gerade wirklich bist, ohne es schönzureden.", block: "Was dich schneller leert, als du wieder auftanken kannst.", move: "Was anfängt, den Tank wieder zu füllen." },
    healthSleep: { now: "Wie deine Nächte wirklich laufen, sobald das Licht aus ist.", block: "Was deinen Kopf am Laufen hält, wenn der Rest von dir aufhören will.", move: "Was deinen Kopf nachts endlich zur Ruhe kommen lässt." },
    healthAnxious: { seen: "Was du dir bisher als Grund für die Angst erzählt hast.", unseen: "Worauf die Angst wirklich zeigt, unter der Geschichte, die du dir erzählst.", know: "Wie sich die Angst verändert, sobald du das Eigentliche benennst." },
    healthRest: { answer: "Ob du jetzt innehalten und eine Weile ausruhen darfst, und warum." },
    healthHabit: { situation: "Wo du mit dieser Gewohnheit gerade stehst.", action: "Was es tatsächlich braucht, um die Gewohnheit zu ändern.", result: "Wo du landest, sobald du die Gewohnheit geändert hast." },
    healthSlipBack: { now: "Wo du mit der alten Gewohnheit gerade stehst.", block: "Was dich immer wieder zur alten Gewohnheit zurückzieht.", move: "Was dich diesmal davor bewahrt, zurückzurutschen." },
    healthMind: { have: "Was dir schon Halt gibt, wenn es schwer wird.", thin: "Der Halt, nach dem du greifst, der aber noch nicht ganz trägt.", use: "Wo dieser Halt einen schweren Tag wirklich leichter macht." },
    healthBody: { situation: "Wie du und dein Körper gerade zueinander stehen.", action: "Was Frieden mit deinem Körper tatsächlich von dir verlangt.", result: "Wo du und dein Körper landen, sobald du diesen Schritt gehst." },
    healthBeside: { you: "Was du mit dir trägst, während du bei diesem Menschen bist.", them: "Was dieser Mensch wirklich fühlt, unter dem, was er dir zeigt.", between: "Was zwischen euch wirklich läuft, während dieser Mensch krank ist." },
    healthWaitBaby: { you: "Was du in dieses Warten auf ein Kind mitbringst, ausgesprochen oder nicht.", them: "Wie der Mensch an deiner Seite dasselbe Warten erlebt, vielleicht anders als du.", between: "Was das Warten mit dem Raum zwischen euch macht." },
    healthExpecting: { pull: "Was in deinem Kopf am lautesten ist, jetzt, wo ein Kind unterwegs ist.", real: "Was in der Schwangerschaft tatsächlich Gewicht hat.", first: "Das eine, worum du dich kümmerst, bevor das Kind kommt." },
    healthBirth: { have: "Die Kraft, die du schon in die Geburt mitbringst.", thin: "Was dir noch fehlt, während die Geburt näher rückt.", use: "Wo diese Kraft dich bei der Geburt wirklich hält." },
    healthLoss: { was: "Woraus diese Zeit mit dem Kind gemacht war.", left: "Was von dieser Zeit mit dem Kind jetzt noch in dir ist.", learn: "Was es dich gelehrt hat, dieses Kind zu lieben." },
  },

  // ── 질문별 마무리 한 줄 — 세 장이 이 질문에 어떻게 하나의 답이 되는지, 어느 장을 오래 볼지 ──
  topicClose: {
    loveNow: "Die ersten beiden Karten zeigen, wo jeder von euch für sich steht. Die dritte zeigt, wo ihr zusammen steht – das ist die Antwort, also bleib dort am längsten.",
    loveWhere: "Lies die drei Karten als eine Geschichte: woher diese Beziehung kommt, wo sie steht, wohin sie geht. Bleib am längsten bei der dritten – das ist deine Antwort; die zweite sagt dir, wie fest diese Antwort steht.",
    loveThem: "Die zweite Karte ist die, wegen der du gekommen bist – bleib dort am längsten. Die erste prägt, wie du sie liest, und die dritte sagt, wie viel von dem, was diese Person bewegt, von allein bei dir ankommt.",
    loveGo: "Die Antwort oben sagt, ob du mit dieser Person weitermachen sollst. Die Karte darunter ist der Grund – wie es wirklich aussähe, zu bleiben – und dieser Teil ist mehr wert als das Ja oder Nein selbst.",
    loveNeed: "Die erste Karte ist das, womit ihr zwei arbeiten könnt, die zweite das eine, das fehlt, die dritte, was aus der Beziehung wird, sobald es da ist. Deine Antwort ist die zweite Karte – was diese Beziehung braucht, ist etwas, das du tatsächlich tun kannst.",
    loveMiss: "Die erste Karte ist der Teil, den du schon kennst – leg ihn neben die zweite, damit du siehst, was daran neu ist. Die zweite ist deine Antwort, die Seite dieser Beziehung, die du bisher nicht gesehen hast, also bleib dort am längsten; die dritte zeigt, was sich zwischen euch ändert, sobald dieser Teil im Blick ist.",
    loveClash: "Die erste Karte ist die Stelle, an der ihr immer wieder aus dem Takt geratet, die zweite ist der Grund, die dritte bringt euch zurück in den Takt. Du hast nach dem Warum gefragt, also bleib am längsten bei der zweiten; die dritte ergibt erst Sinn, wenn du weißt, was sie auflösen muss.",
    loveHonest: "Die Antwort oben sagt, ob du es aussprechen sollst. Die Karte ist der Grund – was in Gang kommt, wenn du es sagst, und was, wenn du es für dich behältst – also lies das, bevor du dich so oder so entscheidest.",
    loveLast: "Lies die drei als eine Linie – was euch gehalten hat, was euch jetzt hält, wie weit das trägt. Die dritte Karte ist die Antwort, aber bei der zweiten solltest du bleiben: Was euch heute zusammenhält, muss die ganze Strecke schaffen.",
    crushApproach: "Die Antwort oben sagt, ob du den ersten Schritt machen sollst; die Karte darunter sagt, warum. Verbring mehr Zeit mit der Karte als mit der Antwort – achte darin auf das Wie, nicht nur auf das Ob.",
    crushHeart: "Lies die drei Karten der Reihe nach: wo die Gefühle sitzen, was du damit tust, wohin das führt. Bleib am längsten bei der zweiten – sie beantwortet deine Frage – und prüf mit der dritten, ob sich der Schritt lohnt.",
    crushAgain: "Die Antwort oben sagt, ob es einen Weg zurück zueinander gibt; die Karte darunter ist der Grund. Bleib beim Grund – bei Ja sagt er, was der Weg zurück von dir verlangt; bei Nein, was im Weg steht; bei Noch nicht, was sich erst legen muss.",
    crushLearn: "Die erste Karte ist, was das war, die zweite, was davon bleibt, die dritte, wozu es gut war. Bleib am längsten bei der zweiten – was dir davon geblieben ist, steckt jetzt in dir, nicht in dem, wie es damals aussah.",
    crushThink: "Die zweite Karte ist die, wegen der du gekommen bist – sie sagt, ob du im Kopf dieser Person überhaupt vorkommst, also bleib dort am längsten. Lies die erste dagegen, um zu sehen, wie viel von diesem Sog nur von dir ausgeht, und die dritte, ob sich zwischen euch wirklich etwas bewegt.",
    crushConfess: "Du hast gefragt, was passiert, wenn du es sagst – das ist die dritte Karte, also bleib dort am längsten. Die erste zeigt, wo ihr steht, bevor du etwas sagst, die zweite, wie du es sagst, damit die dritte eine Chance hat.",
    crushLetGo: "Das Wort oben sagt, ob es Zeit ist, das loszulassen. Die Karte darunter ist der Grund – und sie zeigt auch, was Loslassen kostet, wenn es Ja heißt, was sich noch zu halten lohnt, wenn es Nein heißt, und was sich erst legen muss, wenn es Noch nicht heißt.",
    crushSilence: "Du hast gefragt, warum die Person still geworden ist – das ist die zweite Karte, also bleib dort am längsten. Die erste ist die Stille, wie sie gerade ist; die dritte ist, was sie brechen würde, und das ergibt erst Sinn, wenn die zweite dir den Grund gegeben hat.",
    crushSettle: "Die zweite Karte ist, was du wissen wolltest – das, was zu tun ist – also bleib dort am längsten. Die erste sagt dir, was dieser Schritt entwirren muss, die dritte, wie dein Kopf aussieht, wenn er zur Ruhe gekommen ist – damit du merkst, wann du da bist.",
    workBlock: "Die zweite Karte ist die Antwort – was diese Arbeit zurückhält; die erste ist, was diese Blockade bisher mit der Arbeit gemacht hat, die dritte, was sie löst. Bleib am längsten bei der zweiten und lies die anderen beiden um sie herum.",
    workMove: "Das Wort oben ist deine Antwort auf die Frage nach dem Wechsel; die Karte ist der Grund. Lies daraus ab, was der Wechsel jetzt von dir verlangen würde.",
    workMiss: "Die erste Karte ist der Teil dieser Arbeit, den du schon im Blick hattest, die zweite die Ecke, in die du nicht geschaut hast – das ist, wonach du gefragt hast – und die dritte, was sich ändert, sobald sie im Blick ist. Bleib am längsten bei der zweiten.",
    workAhead: "Die erste Karte ist, wo die Arbeit steht, die zweite der Schritt, den sie verlangt, die dritte, wo sie landet. Du hast gefragt, wie das ausgeht, also bleib bei der dritten – aber lies sie als Folge der zweiten, nicht für sich allein.",
    workTalent: "Die erste Karte ist die Antwort selbst – was du gut kannst – und die zweite markiert, wo diese Stärke dünn wird, damit du weißt, wo sie aufhört. Bleib am längsten bei der ersten, und lass dir von der dritten sagen, wo du sie einsetzt.",
    workStay: "Das Wort oben ist das Urteil übers Bleiben – Ja, Nein oder Noch nicht. Die Karte darunter sagt, warum: Lies daraus ab, was dir das Bleiben gibt und was es dich kostet.",
    workPeople: "Die erste Karte ist, was du mitbringst, die zweite die Person, die du zu deuten versuchst, die dritte, was wirklich zwischen euch läuft. Bleib am längsten bei der zweiten – das ist die Deutung, nach der du gefragt hast – und prüf sie an der dritten; wo die beiden sich widersprechen, ist meist die erste Karte der Grund.",
    workExam: "Die erste Karte ist, was schon sitzt, die zweite, was du festigen solltest, die dritte, wo deine Vorbereitung am Prüfungstag sichtbar wird. Du hast gefragt, was zu festigen ist, also lies die zweite am längsten – die erste sagt dir, womit du keine Zeit verschwenden musst.",
    workLearn: "Die Antwort oben ist das Urteil darüber, ob du gerade das Richtige lernst. Die Karte darunter ist der Grund – lies daraus ab, was dieses Lernen in dir aufbaut und was nicht.",
    lifeMoney: "Die erste Karte ist, wo dein Geld steht, die zweite, was es immer wieder verheddert, die dritte der Faden, an dem du zuerst ziehst. Du hast gefragt, wo du anfängst, also bleib am längsten bei der dritten – das ist die eigentliche Antwort.",
    lifeChoice: "Die Antwort oben ist das Urteil der Karte dazu, ob du es wagen sollst – Ja, Nein oder Noch nicht. Der Kartentext ist der Grund; lies daraus ab, was dieser Schritt wirklich von dir verlangen würde.",
    lifeFlow: "Lies die drei als eine Strömung: Die erste Karte hat sie in Bewegung gesetzt, die zweite ist, wo sie jetzt ist, die dritte, wohin sie dich trägt. Du hast nach dem Jetzt gefragt, also bleib am längsten bei der zweiten – die anderen beiden sagen dir, in welche Richtung es geht.",
    lifeSpend: "Die Antwort oben sagt, ob sich diese Ausgabe lohnt – der Kartentext ist der Grund. Lies daraus ab, was du für das Geld wirklich bekommst, nicht nur, was es kostet.",
    lifeImportant: "Die zweite Karte ist die Antwort auf diese Frage; die erste ist, was sie übertönt hat, die dritte, wo du anfängst. Bleib am längsten bei der zweiten – die erste und die dritte sind nur da, um sie einzurahmen.",
    lifeMove: "Die erste Karte ist, wo der Umzug steht, die zweite, was er von dir verlangt, die dritte, wo er dich hinbringt. Die Frage ist, was passiert, also bleib am längsten bei der dritten – aber lies sie als Ergebnis der zweiten, nicht für sich allein.",
    lifeSave: "Die erste Karte ist, wie Geld bei dir gerade kommt und geht, die zweite das Leck, die dritte, was es zum Bleiben bringen würde. Du hast nach dem Warum gefragt, also bleib am längsten bei der zweiten – die dritte ergibt erst Sinn, wenn du das Leck gesehen hast.",
    lifeStart: "Die erste Karte ist, wo dieses Neue gerade anfängt, die zweite, was es am Anfang von dir verlangt, die dritte, wie es läuft. Du hast gefragt, wie es laufen wird, also bleib am längsten bei der dritten – lies sie als das, wohin die zweite führt.",
    lifeHold: "Leg die drei zusammen: Die erste Karte ist der Teil, den du dir eingestehst, die zweite, was du tatsächlich nicht loslassen willst, die dritte, was deinen Griff lockert, sobald du es siehst. Die Antwort auf diese Frage ist die zweite Karte – bleib dort am längsten.",
    healthSignal: "Die erste Karte ist, was du schon spürst, die zweite, worum dein Körper dich bittet und was du immer wieder übergangen hast, die dritte, was sich daran ändert, wie du für ihn sorgst, sobald du hinhörst. Bleib am längsten bei der zweiten – dort wartet dein Körper schon lange darauf, dass du hinschaust.",
    healthBurnout: "Die erste Karte benennt, wie leer du wirklich bist, die zweite ist das Leck, die dritte ist, wo das Auftanken beginnt. Bleib am längsten bei der zweiten – einen Tank, der noch leckt, kannst du nicht füllen.",
    healthSleep: "Die erste Karte ist die Nacht, wie sie ist, die zweite, was deinen Kopf eingeschaltet lässt, die dritte, was ihn abschalten lässt. Bleib am längsten bei der zweiten – Gedanken, die nicht zur Ruhe kommen, tragen meist etwas, wozu du tagsüber nicht gekommen bist.",
    healthAnxious: "Die erste Karte ist die Geschichte, die du dir über die Angst erzählt hast, die zweite, worum es bei der Angst wirklich geht, die dritte, was sich verschiebt, sobald du es beim Namen nennst. Bleib am längsten bei der zweiten – Angst wird meist dann laut, wenn das Eigentliche noch nicht ausgesprochen ist.",
    healthRest: "Die Antwort oben sagt, ob du jetzt innehalten und eine Weile ausruhen darfst; die Karte ist der Grund – was die Pause dir zurückgibt, oder was sich erst legen muss, damit die Ruhe wirklich hält. Lies es als eine Frage des Zeitpunkts, nicht als Frage, ob du die Ruhe verdient hast.",
    healthHabit: "Die erste Karte ist, wo du mit der Gewohnheit jetzt stehst, die zweite, was das Ändern wirklich braucht, die dritte, wo dich das hinbringt. Bleib am längsten bei der dritten – das ist die Antwort auf deine Frage, und die zweite ist der Preis dafür, dort hinzukommen.",
    healthSlipBack: "Die erste Karte ist, wo du mit der alten Gewohnheit heute stehst, die zweite der Sog, der dich immer wieder zurückholt, die dritte, was dir diesmal hilft, davon wegzubleiben. Bleib am längsten bei der zweiten – Zurückrutschen hat selten mit Willenskraft zu tun und meist damit, was die alte Gewohnheit still für dich erledigt hat.",
    healthMind: "Die erste Karte ist, was dir schon Halt gibt, wenn es schwer wird, die zweite der Halt, nach dem du greifst, der aber noch nicht ganz trägt, die dritte, wo der erste dir einen schweren Tag wirklich leichter macht. Bleib am längsten bei der ersten – an schweren Tagen fang bei dem an, was dich schon hält, bevor du etwas Neues aufbaust.",
    healthBody: "Die erste Karte ist, wie es zwischen dir und deinem Körper steht, die zweite der Schritt, der Frieden möglich macht, die dritte, wo dieser Schritt euch beide hinbringt. Bleib am längsten bei der zweiten – du hast gefragt, was zu tun ist, und diese Karte ist die Antwort; die dritte zeigt, wohin das führt.",
    healthBeside: "Die erste Karte ist, was du trägst, die zweite, was dieser Mensch unter dem fühlt, was er zeigt, die dritte, was durch all das hindurch zwischen euch läuft. Bleib am längsten bei der ersten – du hast gefragt, wie du durchhältst, und niemand hält lange durch, wenn er übergeht, was er selbst trägt.",
    healthWaitBaby: "Die erste Karte bist du in diesem Warten auf ein Kind, die zweite der Mensch an deiner Seite im selben Warten, die dritte, was das Warten mit euch beiden macht. Bleib am längsten bei der dritten – du hast gefragt, wie ihr euch nah bleibt, und genau dort wird Nähe entweder bewahrt oder still aufgebraucht.",
    healthExpecting: "Die erste Karte ist, was in der Schwangerschaft am lautesten ist, die zweite, was wirklich Gewicht hat, die dritte das eine, um das du dich zuerst kümmerst. Bleib am längsten bei der zweiten – in diesen Monaten wird vieles laut, und diese Karte ist dein Maßstab dafür, was nur laut ist und was wirklich Gewicht hat.",
    healthBirth: "Die erste Karte ist die Kraft, die du schon für die Geburt hast, die zweite, was dir noch fehlt, die dritte, wo diese Kraft dich hält, wenn es losgeht. Bleib am längsten bei der ersten – das ist die Antwort auf deine Frage, und sie steckt schon in dir; die zweite zeigt nur, wo du bis zu dem Tag nachsichtig mit dir sein darfst.",
    healthLoss: "Der Reihe nach sagen die drei Karten, woraus diese Zeit mit dem Kind gemacht war, was davon noch in dir ist und was es dich gelehrt hat, dieses Kind zu lieben – zusammen ist das, was bleibt. Bleib am längsten bei der zweiten: Du hast gefragt, was in dir bleibt, und dort steht die Antwort; die dritte handelt von der Liebe, nicht vom Verlust.",
  },

  ranks: {
    1: 'Ass', 2: 'Zwei', 3: 'Drei', 4: 'Vier', 5: 'Fünf', 6: 'Sechs', 7: 'Sieben',
    8: 'Acht', 9: 'Neun', 10: 'Zehn', 11: 'Bube', 12: 'Ritter', 13: 'Königin', 14: 'König',
  },
  minorName: (rank, suit) => `${rank} der ${suit}`,
}
