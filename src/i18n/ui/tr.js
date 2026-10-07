// Türkçe. Yapı en.js ile birebir aynı olmalı.
export default {
  tabs: { today: 'Bugün', readings: 'Açılımlar', library: 'Kartlar', journal: 'Günlük' },

  common: {
    back: 'Geri',
    close: 'Kapat',
    copied: 'Kopyalandı',
    sound: 'Ses',
    upright: 'Düz',
    reversed: 'Ters',
  },

  today: {
    title: 'Bugünkü kartın',
    blurb: 'Sadece bugün için çekilmiş tek bir kart. Yarına kadar değişmeyecek.',
    reveal: 'Kartı çevir',
  },

  read: {
    eyebrow: 'Açılımlar',
    title: 'Ne sormak istiyorsun?',
    blurb: 'Bir açılım seç. Hepsi ücretsiz.',
    askTitle: 'Sorunu sor',
    askBlurb: 'Evet ya da hayır ile yanıtlanabilecek bir şey. Açık ve net ol.',
    askPlaceholder: 'Bu teklifi kabul etmeli miyim?',
    focusTitle: 'Durumu aklında tut',
    focusBlurb: 'Odaklanmana yardımcı oluyorsa yaz. Yazdıkların telefonunda kalır, hiçbir yere gönderilmez.',
    focusPlaceholder: 'Aklında ne var?',
    draw: 'Karıştır ve çek',
    chooseTitle: 'Kartlarını seç',
    chooseBlurb: 'Seçerken sorunu aklında tut.',
    skip: 'Atla — sadece çek',
    focusTip: 'Ne ve Nasıl ile başlayan sorular işe yarar bir cevap verir. Ne zaman ve Olacak mı soruları ise elinde yalnızca tahmin bırakır.',
    askTip: 'Tek seferde tek soru, olabildiğince somut olsun.',
    tryAsking: 'Şöyle sormayı dene',
    ownQuestion: 'Kendi sorunu sor',
    shuffling: 'Karıştırılıyor',
    newReading: 'Yeni açılım',
  },

  result: {
    whole: 'Açılımın bütünü',
    share: 'Bu açılımı paylaş',
    again: 'Yeniden çek',
    drawnOn: '{card} {orientation} çıktı.',
    together: "Bir arada okuyunca",
    togetherOne: "Bu kartı okurken",
  },

  lib: {
    eyebrow: 'Kartlar',
    title: '78 kartın tamamı',
    filterAll: '78 kart',
    filterMajor: 'Büyük Arkana',
    majorArcana: 'Büyük Arkana',
  },

  jr: {
    eyebrow: 'Günlük',
    emptyTitle: 'Henüz bir şey yok',
    emptyBlurb: 'Açılımların buraya otomatik kaydedilir, sadece bu telefonda.',
    countOne: '{n} açılım',
    countMany: '{n} açılım',
    clear: 'Temizle',
    clearConfirm: 'Kayıtlı tüm açılımlar silinsin mi? Bu geri alınamaz.',
    footer: 'Sadece bu telefonda saklanır. Hiçbir yere gönderilmez.',
  },

  set: {
    title: 'Ayarlar',
    language: 'Dil',
    languageBlurb: 'Kart anlamları dahil, uygulamanın tamamı bu dile geçer.',
    reversals: 'Ters kartlar',
    reversalsBlurb: 'Tarot okuyanların kimi ters kart kullanır, kimi kullanmaz. Kapatırsan sadece düz kart çıkar.',
    soundBlurb: 'Hafif bir uğultu ve ara sıra bir çan sesi. Kayıt değil, uygulama üretiyor.',
    data: 'Verilerin',
    dataBlurb: 'Her şey bu telefonda kalır. Hiçbir yere gönderilmez ve hesap açman gerekmez.',
    clearData: 'Kayıtlı her şeyi sil',
    clearDataConfirm: 'Günün kartı ve kayıtlı tüm açılımlar silinsin mi? Bu geri alınamaz.',
    done: 'Tamam',
  },

  share: { tagline: 'Arcana — ücretsiz tarot açılımları' },

  // 주제 분류 — 리딩 화면 위쪽 칩

  // 시작 화면 — 문을 열고 들어가는 느낌

  intro: {

    tagline: 'Kartlar seni çoktandır bekliyor.',

    enter: 'İçeri gir',

  },


  cats: {



    all: 'Tümü',
    love: 'Aşk',

    crush: 'Platonik ve eski aşk',

    work: 'İş ve okul',

    life: 'Para ve kararlar',

    health: "Sağlık",
  },


  // 주제별 질문. 스프레드 이름 대신 '무엇이 궁금한가'로 고르게 한다.

  // 각 언어로 따로 썼다 — 직역하면 어느 나라 말도 아닌 문장이 된다.

  topics: {

    loveNow: 'Aramızda gerçekte ne var?',

    loveWhere: 'Bu ilişki nereye gidiyor?',

    loveThem: 'O kişinin aklından neler geçiyor?',

    loveGo: 'Bu kişiyle devam edeyim mi?',

    loveNeed: 'Şu an ilişkimizin neye ihtiyacı var?',

    loveMiss: 'Burada neyi göremiyorum?',

    loveClash: 'Neden sürekli ters düşüyoruz?',

    loveHonest: 'Açık açık söyleyeyim mi?',

    loveLast: 'Bunun geleceği var mı?',

    crushApproach: 'İlk adımı ben mi atayım?',

    crushHeart: 'Bu duygularla ne yapmalıyım?',

    crushAgain: 'Eskiye dönüş var mı?',

    crushLearn: 'Bu bana ne bıraktı?',

    crushThink: 'O da beni düşünüyor mu?',

    crushConfess: 'İtiraf edersem ne olur?',

    crushLetGo: 'Artık bırakmanın zamanı mı?',

    crushSilence: 'Neden sessizliğe büründü?',

    crushSettle: 'Bu konuda kafamı nasıl toparlarım?',

    workBlock: 'İşimi ne engelliyor?',

    workMove: 'İş değiştireyim mi?',

    workMiss: 'Neyi gözden kaçırıyorum?',

    workAhead: 'Bu iş nasıl sonuçlanacak?',

    workTalent: 'Asıl neyde iyiyim?',

    workStay: 'Bulunduğum yerde kalayım mı?',

    workPeople: 'İşteki bu kişiyi nasıl çözmeliyim?',

    workExam: 'Sınav öncesi neyi güçlendirmeliyim?',

    workLearn: 'Doğru şeyi mi öğreniyorum?',

    lifeMoney: 'Para konusunda nereden başlamalıyım?',

    lifeChoice: 'Bu işe atılayım mı, atılmayayım mı?',

    lifeFlow: 'Şu sıralar işler nasıl gidiyor?',

    lifeSpend: 'Buna para vermeye değer mi?',

    lifeImportant: 'Şu an benim için en önemlisi ne?',

    lifeMove: 'Taşınırsam ne olur?',

    lifeSave: 'Para neden hiç birikmiyor?',

    lifeStart: 'Başlayacağım bu iş nasıl gider?',

    lifeHold: 'Neyi bırakamıyorum?',

    lifeAdvice: 'Bugün neyi duymam gerek?',

    healthSignal: "Bedenim bana ne anlatmaya çalışıyor?",
    healthBurnout: "Neden hep kendimi tükenmiş hissediyorum?",
    healthSleep: "Geceleri zihnim neden susmuyor?",
    healthAnxious: "Bu kaygı aslında neyle ilgili?",
    healthRest: "Biraz durup dinlensem olur mu?",
    healthHabit: "Bu alışkanlığı değiştirirsem ne olur?",
    healthSlipBack: "Neden hep eski alışkanlıklarıma dönüyorum?",
    healthMind: "Zorlandığımda neye yaslanabilirim?",
    healthBody: "Bedenimle nasıl barışırım?",
    healthBeside: "Hasta bir yakınımın yanında nasıl ayakta kalırım?",
    healthWaitBaby: "Bebek sahibi olmaya çalışırken birbirimize nasıl yakın kalırız?",
    healthExpecting: "Hamileyken asıl önemli olan ne?",
    healthBirth: "Doğuma girerken içimde zaten var olan güç ne?",
  },


  spreads: {
    daily: {
      title: 'Günün kartı',
      blurb: 'Bugün için tek kart. Gün boyu aynı kalır.',
      pos: { today: { label: 'Bugün', lead: 'Bugünün senden istediği şey.' } },
    },
    three: {
      title: 'Geçmiş · Şimdi · Gelecek',
      blurb: 'Klasik üç kart açılımı. Nereden geldi, nerede duruyor, nereye gidiyor.',
      pos: {
        past:    { label: 'Geçmiş',  lead: 'Seni buraya getiren şey.' },
        present: { label: 'Şimdi',   lead: 'Şu anda gerçekte nerede durduğun.' },
        future:  { label: 'Gelecek', lead: 'Hiçbir şey değişmezse bunun gideceği yer.' },
      },
    },
    yesno: {
      title: 'Evet ya da Hayır',
      blurb: 'Cevabı evet ya da hayır olan bir şey sor. Tek kart karar verir.',
      examples: [
        'Bu teklifi kabul etmeli miyim?',
        'Şimdi söylemek için doğru zaman mı?',
        'Bu planla devam edeyim mi?',
      ],
      pos: { answer: { label: 'Cevap', lead: 'Bu cevabın arkasındaki sebep.' } },
    },
    love: {
      title: 'İki kişi',
      blurb: 'Bir ilişki üzerine üç kart — sen, o ve aranızdaki.',
      examples: [
        'Şu anda bu ilişkiye ne katıyorum?',
        'Dile getirmediğim şey ne?',
        'Bu hafta bunu ne sağlamlaştırır?',
      ],
      pos: {
        you:     { label: 'Sen',       lead: 'Bu ilişkiye senin getirdiğin.' },
        them:    { label: 'Karşı taraf', lead: 'Karşı tarafın durduğu yer.' },
        between: { label: 'Aranızdaki', lead: 'Aranızda gerçekte olan şey.' },
      },
    },
    career: {
      title: 'Seni engelleyen şey',
      blurb: 'Nerede durduğun, seni neyin engellediği ve işi neyin ilerlettiği.',
      examples: [
        'Bunu gerçekte ne engelliyor?',
        'Bu işte neyden kaçınıyorum?',
        'Bu ay bunu ne ilerletir?',
      ],
      pos: {
        now:   { label: 'Bulunduğun yer', lead: 'Durumun şu anki hâli.' },
        block: { label: 'Tıkanıklık',     lead: 'İşi geciktiren şey.' },
        move:  { label: 'Çıkış yolu',     lead: 'Bunu gerçekten ilerleten şey.' },
      },
    },
    // 상황 · 행동 · 결과 — 다른 스프레드에 없는 '결과' 자리가 핵심이다.
    outcome: {
      title: 'Durum · Eylem · Sonuç',
      blurb: 'İşler şu an nerede, ne yapmalı ve bu nereye varır.',
      examples: [
        'Bununla ne yapmalıyım?',
        'Bu durumu nasıl ele almalıyım?',
        'Böyle devam edersem ne olur?',
      ],
      pos: {
        situation: { label: 'Durum', lead: 'Gerçekte önünde duran şey.' },
        action:    { label: 'Ne yapmalı',    lead: 'Bu durumun istediği hamle.' },
        result:    { label: 'Varacağı yer',    lead: 'Bu seçimin götürdüğü yer.' },
      },
    },
    hidden: {
      title: 'Göremediğin şey',
      blurb: 'Önündekini, gözden kaçandan ayırır.',
      pos: {
        seen: { label: 'Gördüğün', lead: 'Zaten bildiğin taraf.' },
        unseen: { label: 'Gizli kalan', lead: 'Görüş alanının dışında kalan taraf.' },
        know: { label: 'Bilmen gereken', lead: 'Bunu görünce değişecek olan.' },
      },
    },
    strength: {
      title: 'Elindekiler',
      blurb: 'Neyin güçlü, neyin eksik olduğu ve nerede işe yaradığı.',
      pos: {
        have: { label: 'Gücün', lead: 'Zaten içinde olan.' },
        thin: { label: 'Eksik olan', lead: 'Henüz olgunlaşmamış taraf.' },
        use: { label: 'Nerede işe yarar', lead: 'O gücün gerçekten geçtiği yer.' },
      },
    },
    residue: {
      title: 'Geriye kalan',
      blurb: 'Biten bir şeyin ardında bıraktıkları.',
      pos: {
        was: { label: 'O zaman olan', lead: 'O anda gerçekten var olan.' },
        left: { label: 'Şimdi kalan', lead: 'Hâlâ içinde duran.' },
        learn: { label: 'Öğrettiği', lead: 'Bunun ne için olduğu.' },
      },
    },
    priority: {
      title: 'Önemli olan',
      blurb: 'Seni çekeni, gerçekten ağır basandan ayırır.',
      pos: {
        pull: { label: 'Seni çeken', lead: 'Şu an en çok ses çıkaran.' },
        real: { label: 'Asıl önemli olan', lead: 'Ağırlığın gerçekte durduğu yer.' },
        first: { label: 'Nereden başlamalı', lead: 'Önce el atılacak tek şey.' },
      },
    },
  },

  engine: {
    suits: {
      // name = listede görünen (çoğul), short = kart adında kullanılan (tekil)
      wands:     { name: 'Değnekler', short: 'Değnek', domain: 'enerji, dürtü ve yaratıcı iş' },
      cups:      { name: 'Kupalar',   short: 'Kupa',   domain: 'duygular, ilişkiler ve sezgi' },
      swords:    { name: 'Kılıçlar',  short: 'Kılıç',  domain: 'düşünce, gerçek ve çatışma' },
      pentacles: { name: 'Tılsımlar', short: 'Tılsım', domain: 'para, iş, sağlık ve maddi dünya' },
    },
    verdict: {
      yes:   { word: 'Evet',   gloss: 'Kart ağırlığını evet tarafına koyuyor.' },
      maybe: { word: 'Henüz değil', gloss: 'Kart net konuşmuyor — durum, kesin bir cevap verilecek kadar oturmamış.' },
      no:    { word: 'Hayır',  gloss: 'Kart ağırlığını hayır tarafına koyuyor.' },
    },
    element: {
      fire:  'Bu açılımdan Ateş geçiyor — mesele karar vermek değil, harekete geçmek ve bir şey yapmak.',
      water: 'Bu açılımdan Su geçiyor — yüzeyde nasıl görünürse görünsün, mesele duygular ve ilişkiler.',
      air:   'Bu açılımdan Hava geçiyor — mesele düşünce, gerçek ve söylenen ya da söylenmeyen şeyler.',
      earth: 'Bu açılımdan Toprak geçiyor — mesele somut olan: para, iş, sağlık, elle tutulur gerçekler.',
    },
    majors: {
      none: 'Hiç Büyük Arkana yok. Bu gündelik ölçekte bir mesele — sonucu daha büyük bir şey değil, senin verdiğin sıradan kararlar belirliyor.',
      all:  'Bütün kartlar Büyük Arkana. Gerçekten önemli bir dönem — çapı, bu hafta vereceğin herhangi bir karardan büyük.',
      most: '{total} karttan {n} tanesi Büyük Arkana. Derinde bir şey hareket ediyor — küçük görünse de küçük bir mesele değil.',
    },
    reversals: {
      none: 'Hiçbir kart ters gelmedi. Olup biten açıkta ve kendi doğal hızında ilerliyor.',
      all:  'Bütün kartlar ters geldi. Bunların hepsi içeride oluyor ya da tutuluyor — durum başka bir yerde tıkanmadan önce içeride tıkanmış.',
      most: 'Kartların çoğu ters. Tıkanmış, ertelenmiş ya da söylenmemiş olan, açıkta olandan daha fazla.',
    },
  },

  // ── 분류 아래 안내 한 줄. 지금은 건강 분류에만 있다 — 진단이 아니라 들여다보는 자리라는 것. ──
  catNote: {
    health: "Teşhis için değil, içine bakmak için. Sağlığınla ilgili her şeyi doktorunla konuş.",
  },

  // ── 질문별 자리 설명 ────────────────────────────────────────
  // 스프레드의 pos.*.lead 는 어느 질문에나 붙는 말이라("지금 상황 그대로.") 답이 질문과 상관없어 보였다.
  // 여기 있는 문장이 그 자리를 대신한다 — 그 질문의 주어가 들어간 렌즈. 없는 질문은 스프레드 lead 로 떨어진다.
  topicLeads: {
    loveNow: { you: "Sizin tarafınız — bu ilişkide durduğunuz yer.", them: "Onun tarafı — bu ilişkide durduğu yer.", between: "Şu an birbiriniz için gerçekte ne olduğunuz." },
    loveWhere: { past: "Bu ilişkiyi buraya kadar taşıyan şey.", present: "İkinizin bu ilişkide şu an durduğu yer.", future: "Böyle giderse bu ilişkinin varacağı yer." },
    loveThem: { you: "Onu okurken kendinizden kattığınız şey.", them: "Onun kafasında şu an gerçekte olup biten.", between: "Onun iç dünyasından size gerçekten ulaşan kısım." },
    loveGo: { answer: "Bu kişiyle devam ederseniz gerçekte ne olacağı — yukarıdaki cevabın neden öyle çıktığı." },
    loveNeed: { situation: "İkinizin şu an elinde gerçekte olan şey.", action: "Bu ilişkiye şu an eklemeniz gereken tek şey — kart bir boşluğu ya da gerginliği gösteriyorsa, cevap onu gidermektir.", result: "O tek şey eklendiğinde bu ilişkinin neye dönüşeceği." },
    loveMiss: { seen: "Bu ilişkide zaten açıkça gördüğünüz taraf.", unseen: "Bu ilişkinin görmediğiniz tarafı.", know: "Gizli taraf görününce aranızda değişecek olan." },
    loveClash: { now: "Her ters düştüğünüzde ikinizin dönüp dolaşıp geldiği yer.", block: "İkinizi hep aynı çizgiden çıkaran şey.", move: "İkinizi yeniden aynı çizgiye getiren şey." },
    loveHonest: { answer: "Bunu açıkça söyleyip söylememeniz gerektiğinin cevabı ve söylendiğinde aranızda gerçekte neyin değişeceği." },
    loveLast: { past: "İkinizi bugüne kadar bir arada tutan şey.", present: "İkinizi şu an bir arada tutan şey.", future: "Sizi şu an bir arada tutan şeyin ikinizi nereye kadar taşıyabileceği." },
    crushApproach: { answer: "İlk adımı atıp atmamanız gerektiğinin cevabı ve sebebi." },
    crushHeart: { situation: "Bu duyguların sizi şu an gerçekte getirdiği yer.", action: "Bu duyguların sizden istediği hamle.", result: "O hamleyi yaparsanız bu duyguların varacağı yer." },
    crushAgain: { answer: "Birbirinize dönmenin bir yolu olup olmadığı ve o yolun açılırken ya da kapanırken nasıl göründüğü." },
    crushLearn: { was: "Bu bağın sürdüğü süre boyunca gerçekte ne olduğu.", left: "Bu bağın içinizden hiç çıkmayan kısmı.", learn: "Bu bağın size öğretmek istediği şey." },
    crushThink: { you: "O da sizi düşünüyor mu diye merak ederken içinizde taşıdığınız şey.", them: "Onun aklında gerçekte ne kadar yer kapladığınız.", between: "Yalnızca kafanızda değil, aranızda gerçekten geçen şey." },
    crushConfess: { situation: "Hislerinizi söylemeden önce ikinizin durduğu yer.", action: "Söylemeye karar verirseniz, o sözü hangi ruh hâliyle söyleyeceğiniz.", result: "Öğrendiğinde nasıl karşılayacağı ve bunun ikinizi nerede bırakacağı." },
    crushLetGo: { answer: "Bunu bırakmanın zamanı gelip gelmediğinin cevabı ve sebebi — bu kart o değil, bırakmanın eşiğinde duran sizsiniz." },
    crushSilence: { now: "O sustuğundan beri ikinizin durduğu yer.", block: "Onun susmasının gerçek sebebi — kendi tarafındaki bir şey ya da aranıza giren bir şey.", move: "Aranızdaki sessizliği bozacak olan — sizin atabileceğiniz bir adım ya da şimdilik beklemeniz gerektiğinin işareti." },
    crushSettle: { situation: "Bu konuda kafanızda hâlâ düğümlü kalan şey.", action: "Kafanızın gerçekten toparlanmasını sağlayan tek şey.", result: "Bunu yaptıktan sonra kafanızın varacağı yer." },
    workBlock: { now: "Bu işin şu an takılıp kaldığı yer.", block: "Bu işin önünü gerçekte tıkayan şey.", move: "Bu işi yeniden harekete geçiren şey." },
    workMove: { answer: "Şimdi iş değiştirip değiştirmemenizin cevabı ve arkasındaki sebep." },
    workMiss: { seen: "Bu işte zaten açıkça gördüğünüz kısım.", unseen: "Bu işin bakmadığınız köşesi.", know: "O köşe görününce bu işte değişecek olan." },
    workAhead: { situation: "Bu işin bugün gerçekte durduğu yer.", action: "Bu işin şu an sizden istediği hamle.", result: "O hamleyi yaparsanız bu işin varacağı yer." },
    workTalent: { have: "Hiç adını koymamış olsanız da zaten iyi yaptığınız şey — bu kartın gösterdiğini çoğu insandan daha iyi idare etmek.", thin: "İyi olduğunuz şeyin hemen yanında, hâlâ eksik kalan beceri.", use: "O yeteneğinizin gerçekten işe yaradığı yer." },
    workStay: { answer: "Bulunduğunuz yerde kalıp kalmamanızın cevabı ve arkasındaki sebep — buranın size verdiği ya da sizden sessizce aldığı şey." },
    workPeople: { you: "Bu kişiyle her karşılaşmada içinizde taşıdığınız şey.", them: "İş yerinde size gösterdiğinin ardında bu kişinin gerçekte durduğu yer.", between: "İş yerinde bu kişiyle aranızda gerçekte olup biten." },
    workExam: { have: "Sınava girerken zaten sağlam olan.", thin: "Sınavdan önce pekiştirmeniz gereken kısım.", use: "Hazırlığınızın sınav günü gerçekten işe yarayacağı yer." },
    workLearn: { answer: "Şu an öğrendiğinizin doğru şey olup olmadığının cevabı ve sebebi." },
    lifeMoney: { now: "Paranızla aranızın şu an durduğu yer.", block: "Para işlerinizi sürekli düğümleyen şey.", move: "Para konusunda gerçekten nereden başlayacağınız." },
    lifeChoice: { answer: "Atılıp atılmamanız gerektiğinin cevabı ve sebebi." },
    lifeFlow: { past: "İşlerin şu anki akışını başlatan şey.", present: "İşlerin şu an sizin için gerçekte nasıl aktığı.", future: "Hiçbir şey değişmezse akışın sizi taşıyacağı yer." },
    lifeSpend: { answer: "Buna para harcamaya değip değmediğinin cevabı ve sebebi." },
    lifeImportant: { pull: "Şu an önünüzde duran her şeyin içinde sizi en çok çeken.", real: "Gürültü dinince sizin için hâlâ önemli olacak tek şey.", first: "Neyin önemli olduğunu gördüğünüze göre, şimdi ilk elinize alacağınız şey." },
    lifeMove: { situation: "Taşınma konusunda şu an durduğunuz yer.", action: "Taşınmanın sizden ilk istediği şey.", result: "Giderseniz taşınmanın sizi götüreceği yer." },
    lifeSave: { now: "Paranın şu an elinize nasıl girip çıktığı.", block: "Paranın hiç birikmemesinin gerçek sebebi.", move: "Paranın nihayet elinizde kalmasını sağlayacak şey." },
    lifeStart: { situation: "Bu yeni işin yola çıktığı yer.", action: "Bu yeni işin başlarda sizden istediği şey.", result: "İstediğini verdiğinizde bu yeni işin nasıl gideceği." },
    lifeHold: { seen: "Tuttuğunuzu zaten bildiğiniz şey.", unseen: "Onun altında gerçekte sımsıkı tuttuğunuz şey.", know: "Bunu görünce elinizin açılmasını sağlayacak olan." },
    healthSignal: { seen: "Bedeninizden gelen, zaten fark ettiğiniz sinyal.", unseen: "Bedeninizin bu sahnede sürekli istediği, sizinse hep geçiştirdiğiniz şey.", know: "Dinlemeye başlayınca bedeninize bakma biçiminizde değişecek olan." },
    healthBurnout: { now: "Lafı süslemeden, şu an gerçekte ne kadar tükendiğiniz.", block: "Enerjinizi, yerine koyabildiğinizden daha hızlı tüketen şey.", move: "Deponuzu yeniden doldurmaya başlayan şey." },
    healthSleep: { now: "Işıklar sönünce gecelerinizin gerçekte nasıl geçtiği.", block: "Bedeniniz durmak isterken zihninizi durmadan çalıştıran şey.", move: "Geceleri zihninizin nihayet yatışmasını sağlayan şey." },
    healthAnxious: { seen: "Kaygının neyle ilgili olduğuna dair kendinize anlattığınız hikâye.", unseen: "O hikâyenin altında kaygının gerçekte işaret ettiği şey.", know: "Asıl meselenin adını koyunca kaygının nasıl değişeceği." },
    healthRest: { answer: "Biraz durup dinlenmenin zamanı gelip gelmediğinin cevabı ve sebebi." },
    healthHabit: { situation: "Bu alışkanlıkla şu an durduğunuz yer.", action: "Alışkanlığı değiştirmenin gerçekte ne gerektirdiği.", result: "Alışkanlığı değiştirdikten sonra varacağınız yer." },
    healthSlipBack: { now: "Eski alışkanlıkla şu an durduğunuz yer.", block: "Sizi eski alışkanlığa geri çekip duran şey.", move: "Bu kez geri kaymanızı önleyecek olan şey." },
    healthMind: { have: "İşler ağırlaştığında sizi zaten ayakta tutan şey.", thin: "Tutunduğunuz ama sizi henüz tam taşıyamayan destek.", use: "Sizi ayakta tutan şeye yaslanınca ağır bir günün gerçekten hafiflediği yer." },
    healthBody: { situation: "Bedeninizle aranızın şu an durduğu yer.", action: "Bedeninizle barışmanın sizden gerçekte istediği şey.", result: "O hamleyi yapınca bedeninizle birlikte varacağınız yer." },
    healthBeside: { you: "Onun yanında otururken sizin taşıdığınız şey.", them: "Baktığınız kişinin gösterdiği değil, hissettiği şey.", between: "O hastayken aranızda gerçekte geçen şey." },
    healthWaitBaby: { you: "Söylemiş olun ya da olmayın, bu bekleyişte sizin taşıdığınız şey.", them: "Eşinizin aynı bekleyişteki tarafı — sizinkiyle örtüşmeyebilir.", between: "Bekleyişin aranızdaki bağa yaptığı şey." },
    healthExpecting: { pull: "Bebek yoldayken kafanızda en yüksek sesle konuşan şey.", real: "Hamileyken gerçekten ağır basan şey.", first: "Bebek gelmeden önce ilk ilgileneceğiniz tek şey." },
    healthBirth: { have: "Doğuma girerken zaten içinizde taşıdığınız güç.", thin: "Doğum yaklaşırken hâlâ eksik kaldığınız taraf.", use: "Doğum yaklaşırken o güce nasıl bir anda uzanacağınız." },
  },

  // ── 질문별 마무리 한 줄 — 세 장이 이 질문에 어떻게 하나의 답이 되는지, 어느 장을 오래 볼지 ──
  topicClose: {
    loveNow: "İlk iki kart her birinizin tek başına nerede durduğunu gösterir. Üçüncüsü birlikte durduğunuz yerdir — cevap orada, en uzun ona bakın.",
    loveWhere: "Üç kartı tek bir hikâye gibi okuyun: bu ilişki nereden geldi, şimdi nerede, nereye gidiyor. En uzun üçüncü kartta durun — cevabınız orada; o cevabın ne kadar sağlam olduğunu ise ikinci kart söyler.",
    loveThem: "Sorduğunuz şey ikinci kartta — en uzun orada durun. İlk kart onu nasıl okuduğunuzu biçimlendirir; üçüncüsü ise onun aklındakilerin kendiliğinden size ne kadar ulaştığını söyler.",
    loveGo: "Üstteki cevap bu kişiyle devam edip etmemeniz gerektiğini söyler; altındaki kart ise sebebi. Evetse yola devam etmenin sizden ne isteyeceğini, hayırsa neyin size 'dur' dediğini, henüz değilse önce neyin yatışması gerektiğini o kartta bulursunuz. Karta o cevaptan daha uzun bakın.",
    loveNeed: "Cevabınız ikinci kart, o yüzden en uzun orada durun — bu ilişkinin ihtiyacı, sizin gerçekten yapabileceğiniz bir şey. Kart yapılacak bir şey söylüyorsa cevap odur; bir boşluğu ya da gerginliği gösteriyorsa cevap onu gidermektir. İlk kart bunun neden şimdi gerektiğini, üçüncüsü ise o şey yerine oturunca ikinizin nereye kadar gideceğini söyler.",
    loveMiss: "İlk kart zaten bildiğiniz taraf — bir bakıp ikincinin yanında tutun, çünkü ikincisi ona göre okunur. Cevabınız ikinci kartta, bu ilişkinin görmediğiniz yüzü: en uzun orada durun, üçüncüsünü de o yüz görününce aranızda neyin değişeceği diye okuyun.",
    loveClash: "İlk kart ikinizin hep nerede ters düştüğü, ikincisi bunun sebebi, üçüncüsü sizi yeniden aynı çizgiye getiren şey. 'Neden' diye sordunuz, o yüzden en uzun ikinci kartta durun; üçüncüsü ancak neyi çözmesi gerektiğini bilince anlam kazanır.",
    loveHonest: "Üstteki cevap bunu açıkça söyleyip söylememeniz gerektiğini gösterir; altındaki kart ise sebebi — o yüzden karta cevaptan daha uzun bakın. Evetse söylemenin aranızda neyi açacağını, hayırsa sözlerden önce neyin yerine oturması gerektiğini, henüz değilse o sözlere yer açılması için önce neyin yatışması gerektiğini o kartta bulursunuz. Hayır 'içinizde tutun' demek değil, 'bu hâliyle değil' demektir — şimdi söylerseniz önce neye çarpacağınızı ve bunun yerine nasıl söyleyeceğinizi orada okuyun.",
    loveLast: "Üçünü tek bir çizgi gibi okuyun — sizi ne bir arada tuttu, şimdi ne tutuyor, bu sizi nereye kadar taşır. Cevap üçüncü kart, ama üzerinde durulacak olan ikincisi: bugün sizi bir arada tutan şey, yolun sonuna kadar dayanmak zorunda.",
    crushApproach: "Üstteki cevap ilk adımı atıp atmamanız gerektiğini söyler; altındaki kart ise nedenini. Karta cevaptan daha uzun bakın — evetse nasıl yaklaşacağınızı, hayırsa şimdi adım atarsanız neye çarpacağınızı, henüz değilse adım atmadan önce neyin yatışması gerektiğini orada okuyun.",
    crushHeart: "Üç kartı sırayla okuyun: duygular nerede duruyor, onlarla ne yapmalı, bu nereye varır. En uzun ikinci kartta durun — sorunuza cevap veren o; üçüncüsüyle de bu hamle yapmaya değer mi diye kontrol edin.",
    crushAgain: "Üstteki cevap birbirinize bir dönüş yolu olup olmadığını söyler; altındaki kart ise o yolun biçimidir. Kart neyden söz ediyor gibi görünürse görünsün, onu dönüş yolu olarak okuyun — evetse o yolun nasıl açıldığı ve sizden ne istediği, hayırsa onu neyin kestiği, henüz değilse önce neyin yatışması gerektiği orada. Kartta üstteki cevaptan daha uzun kalın.",
    crushLearn: "İlk kart bunun ne olduğu, ikincisi ondan geriye kalan, üçüncüsü ne için olduğu. En uzun ikincisinde durun — bu bağın size bıraktığı şey, o zamanki görüntüsü değil, şu an içinizde hâlâ duran şeydir.",
    crushThink: "Aradığınız cevap ikinci kartta — onun aklında olup olmadığınızı o söyler; en uzun orada durun. İlk kartı ona göre okuyun: bu çekimin ne kadarı yalnızca sizin; üçüncüsünü de aranızda gerçekten bir şey kımıldıyor mu diye.",
    crushConfess: "İtiraf edersem ne olur diye sordunuz — cevap üçüncü kartta, en uzun orada durun. Onu, söylediğinizde onun bunu nasıl karşılayacağı ve ikinizi nereye getireceği diye okuyun. İlk kart bir şey söylemeden önce aranızın durduğu yer; ikincisi onun cevabını biçimlendiren ruh hâli — o yüzden üçüncüyü tek başına değil, o ruh hâli ortadayken söylediğinizde size dönecek karşılık olarak okuyun.",
    crushLetGo: "Üstteki cevap bunu bırakmanın zamanının gelip gelmediğini söyler; altındaki kart ise sebebi. O kartı o değil, siz diye okuyun — bırakmanın eşiğindeki siz. Cevap evetse kart, boşalttığınız yere neyin geleceğini; hayırsa neyin yarım kalıp sizi hâlâ tuttuğunu; henüz değilse cevabın netleşmesi için önce içinizde neyin netleşmesi gerektiğini gösterir. Kartta cevaptan daha uzun kalın — nasıl bırakacağınız da, neden tutacağınız da orada yazılı.",
    crushSilence: "Neden sustuğunu sordunuz — cevap ikinci kartta, en uzun orada durun. O kartın söylediklerini onun hakkında okuyun: bir insan çıkmışsa, onun dikkati şu an oradadır; değilse, içinde bulunduğu hâl ya da aranıza giren şeydir. İlk kart bu sessizlikte ikinizin durduğu yer; üçüncüsü sebebi öğrendikten sonra ne yapacağınız — ona ulaşmak mı, beklemek mi.",
    crushSettle: "İkinci kart sorduğunuz şey — yapılacak olan — o yüzden en uzun orada durun. İlk kart o hamlenin neyi çözmesi gerektiğini, üçüncüsü ise yatıştığında bu duyguların nasıl görüneceğini söyler; böylece oraya vardığınızı anlarsınız.",
    workBlock: "Cevap ikinci kart — bu işi tıkayan şey; ilk kart o tıkanıklığın işe şimdiye dek ne yaptığı, üçüncüsü ise onu neyin gevşeteceği. En uzun ikincisinde durun, diğer ikisini ona göre okuyun.",
    workMove: "Üstteki cevap iş değiştirme konusundaki karar; altındaki kart ise sebebi. Bu geçişin şu an sizden ne isteyeceğini orada okuyun.",
    workMiss: "İlk kart bu işte zaten görüş alanınızda olan kısım, ikincisi bakmadığınız köşe — sorduğunuz şey bu — üçüncüsü ise o köşe görününce neyin değişeceği. En uzun ikincisinde durun.",
    workAhead: "İlk kart işin durduğu yer, ikincisi istediği hamle, üçüncüsü varacağı yer. Nasıl sonuçlanacağını sordunuz, o yüzden üçüncü kartta durun — ama onu tek başına değil, ikincinin sonucu olarak okuyun.",
    workTalent: "İlk kart iyi olduğunuz şey — sorduğunuz şeyin cevabı. Ağır bir kart çıktıysa bu bir kusur değil: o zeminden çoğu insandan daha sık geçmiş ve nasıl idare edileceğini çoktan öğrenmişsiniz demektir; yetenek, o bilmenin kendisidir. İkinci kart o yeteneğin nerede inceldiğini, üçüncüsü nerede gerçekten değer bulduğunu söyler. En uzun ilk kartta durun, onu nereye koyacağınızı ise üçüncüde arayın.",
    workStay: "Üstteki cevap bulunduğunuz yerde kalma konusundaki karar — evet, hayır ya da henüz değil — ve altındaki kart sebebi. Evetse kartı bu yerin size hâlâ verdiği ya da burada henüz bitirmediğiniz şey diye okuyun; hayırsa sizden sessizce aldığı şey diye; henüz değilse cevabın tutması için önce yerine oturması gereken şey diye. Karta cevaptan daha uzun bakın — hangi yöne giderseniz gidin, bir sonraki adım orada yazılı.",
    workPeople: "İlk kart sizin buraya taşıdığınız şey, ikincisi okumaya çalıştığınız kişi, üçüncüsü iş yerinde aranızda gerçekte işleyen şey. En uzun ikincisinde durun — istediğiniz okuma o — sonra üçüncüyle karşılaştırın: ikisi uyuşmuyorsa o boşluk, bu kişiyi yanlış okuduğunuz yerdir ve o boşluğu sizin tarafınızda neyin açtığını çoğu zaman ilk kart söyler.",
    workExam: "İlk kart zaten sağlam olan, ikincisi pekiştirilecek olan, üçüncüsü hazırlığınızın sınav günü nerede kendini göstereceği. Neyi düzelteceğinizi sordunuz, o yüzden en uzun ikinci kartta durun — ilki de neye vakit harcamamanız gerektiğini söyler.",
    workLearn: "Üstteki kelime, bunun öğrenilecek doğru şey olup olmadığına dair karar. Altındaki kart ise sebebi — bunu öğrenmenin içinizde neyi kurduğunu, neyi kurmadığını orada okuyun.",
    lifeMoney: "İlk kart paranızın durduğu yer, ikincisi onu düğümde tutan şey, üçüncüsü ilk çekilecek ip. Nereden başlayacağınızı sordunuz, o yüzden en uzun üçüncüde durun — asıl cevap o.",
    lifeChoice: "Üstteki kelime atılıp atılmama konusundaki karar — evet, hayır ya da henüz değil. Altındaki kart ise sebebi. Evetse atılmanın sizden ne isteyeceğini, hayırsa sizi neyin uyardığını, henüz değilse karar vermeden önce neyin yatışması gerektiğini orada bulursunuz. Karta kelimeden daha uzun bakın — kelime yalnızca atılıp atılmamayı söyler; ne yapacağınızı ise kart.",
    lifeFlow: "Üçünü tek bir akıntı gibi okuyun: ilk kart onu harekete geçiren, ikincisi şu an olduğu yer, üçüncüsü sizi taşıdığı yer. Şu sıralar nasıl diye sordunuz, o yüzden en uzun ikincisinde durun — diğer ikisi hangi yöne aktığını söyler.",
    lifeSpend: "Üstteki kelime bunun harcamaya değip değmediğinin cevabı — evet, hayır ya da henüz değil — kartın metni ise sebebi. Evetse bu parayla gerçekte ne satın aldığınızı, hayırsa ödediğiniz paranın ötesinde bu harcamanın sizden ne götüreceğini ya da neden şimdi sırası olmadığını, henüz değilse cüzdanınızı açmadan önce neyin yatışması gerektiğini orada bulursunuz. Kartı fiyat etiketi için değil, bunun için okuyun.",
    lifeImportant: "Şu an en önemlisinin ne olduğunu sordunuz; cevap ikinci kart — en uzun orada durun. İlk kart dikkatinizin gerçekte nerede olduğu: ikinciyle aynı şeyi söylüyorsa gönlünüz zaten doğru yerde; başka bir şey söylüyorsa dikkatiniz o kadar uzağa kaymış demektir. Üçüncü kart, önemli olan uğruna bugün ilk elinize alacağınız tek şey.",
    lifeMove: "İlk kart taşınmanın durduğu yer, ikincisi sizden istediği, üçüncüsü vardığı yer. Soru 'ne olur' olduğuna göre en uzun üçüncüde durun — ama onu tek başına değil, ikinciyi yapmanın sonucu olarak okuyun.",
    lifeSave: "İlk kart paranın şu an size nasıl gelip gittiği, ikincisi hiç birikmemesinin gerçek sebebi, üçüncüsü onu elinizde tutacak olan. 'Neden' diye sordunuz, o yüzden en uzun ikincisinde durun — üçüncüsü ancak sebebi görünce anlam kazanır. İkinci kart karanlık bir kartsa sızıntı odur; iyi haber gibi görünüyorsa, para önce oraya gidiyor demektir.",
    lifeStart: "İlk kart bu yeni işin nereden yola çıktığı, ikincisi başlarda sizden ne istediği, üçüncüsü nasıl gideceği. Nasıl gideceğini sordunuz, o yüzden en uzun üçüncüde durun — onu ikinci kartın götürdüğü yer olarak okuyun.",
    lifeHold: "Üçünü birleştirin: ilk kart kendinize görmeye izin verdiğiniz kısım, ikincisi aslında bırakmayı reddettiğiniz şey, üçüncüsü bunu görünce tutuşunuzu gevşetecek olan. Bu sorunun cevabı ikinci kart — en uzun orada durun.",
    healthSignal: "İlk kart bedeninizin sinyallerinden zaten hissettiğiniz, ikincisi onun ardında bedeninizin sürekli istediği şey, üçüncüsü o isteği duyunca bedeninize bakma biçiminizde değişecek olan. İlk ve ikinci kartı yan yana okuyun — aradaki boşluk, duymadığınız kısımdır. En uzun ikincisinde durun: hangi sahne çıkmış olursa olsun, o sahne bedeninizin ne istediğinin resmidir; onu bedeninizin diliyle okuyun. Fark etmenizi beklediği şey orada.",
    healthBurnout: "İlk kart deponuzun gerçekte ne kadar boşaldığı, ikincisi sızıntı, üçüncüsü deponun yeniden nereden dolmaya başlayacağı. En uzun ikincisinde durun — hâlâ sızdıran bir depoyu dolduramazsınız.",
    healthSleep: "İlk kart gecelerinizin şu anki hâli, ikincisi zihninizi uyanık tutan şey, üçüncüsü onu durduracak olan. En uzun ikincisinde durun — yatışmayan düşünceler çoğu zaman gündüz ele alınamamış bir şeyi taşır.",
    healthAnxious: "İlk kart kaygıya dair kendinize anlattığınız hikâye, ikincisi kaygının gerçekte neyle ilgili olduğu, üçüncüsü onun adını koyunca değişecek olan. En uzun ikincisinde durun — kaygı, asıl şey henüz söylenmemişken sesini yükseltir.",
    healthRest: "Üstteki kelime biraz durup dinlenmenin zamanı olup olmadığına dair karar; altındaki kart ise sebebi. Evetse kart, dinlenmenin size neyi geri vereceğini ya da nasıl dinlenirseniz gerçekten dinlenmiş olacağınızı gösterir. Hayır ya da henüz değilse, sizi şu an dinlenmekten alıkoyan şeyi gösterir. Kart dinlenmeyle ilgili görünmese bile, anlattığı şeyi şimdi durmanızla ilgiliymiş gibi okuyun. Hayır ya da henüz değil 'devam edin' demek değildir — dinlenmenin gerçekten dinlenme olabilmesi için önce bırakılması gereken bir şey var demektir. Bu, dinlenmeyi hak edip etmediğiniz değil, zamanlama sorusu. Kart tek kelimeden fazlasını söyler, o yüzden orada daha uzun kalın.",
    healthHabit: "İlk kart alışkanlıkla şu an nerede durduğunuz, ikincisi onu değiştirmenin gerçekte ne gerektirdiği, üçüncüsü bunun sizi nerede bıraktığı. En uzun üçüncüde durun — sorduğunuzun cevabı o; ikincisi ise oraya varmanın bedeli.",
    healthSlipBack: "İlk kart eski alışkanlıkla bugün aranızdaki mesafe, ikincisi sizi geri getirip duran çekim, üçüncüsü bu kez uzak kalmanıza yardım edecek olan. En uzun ikincisinde durun — geri kaymak nadiren irade meselesidir; çoğu zaman eski alışkanlığın sizin için sessizce yaptığı bir şey vardır.",
    healthMind: "Bu sorunun cevabı ilk kart — işler ağırlaşınca yaslanabileceğiniz şey yeni kurmanız gereken bir şey değil; sizi zaten ayakta tutan şey. İkincisi, bütün ağırlığı yüklerseniz sallanacak taraf — onu, oradaki ağırlığı ilk karta kaydırmanız gerektiğinin işareti olarak okuyun. Üçüncüsü, ilkine yaslandığınızda ağır bir günün önce nereden hafifleyeceği. En uzun ilk kartta durun — ağır günlerde yeni bir şey aramadan önce sizi zaten tutandan başlayın.",
    healthBody: "İlk kart bedeninizle aranızın durduğu yer, ikincisi barışmayı mümkün kılan hamle, üçüncüsü o hamlenin ikinizi bıraktığı yer. En uzun ikincisinde durun — ne yapmalıyım diye sordunuz, cevap o kart; üçüncüsü de bunu yapmanın nereye götürdüğünü gösterir.",
    healthBeside: "İlk kart sizin taşıdığınız, ikincisi onun gösterdiğinin altında hissettiği, üçüncüsü tüm bunlar olurken aranızda işleyen şey. En uzun ilk kartta durun — nasıl ayakta kalırım diye sordunuz ve kimse kendi taşıdığını görmezden gelerek uzun süre ayakta kalamaz.",
    healthWaitBaby: "İlk kart bu bekleyişteki siz, ikincisi aynı bekleyişteki eşiniz, üçüncüsü bekleyişin ikinize yaptığı şey. En uzun üçüncüde durun — nasıl yakın kalırız diye sordunuz ve yakınlık ya orada korunuyor ya da sessizce harcanıyor.",
    healthExpecting: "İlk kart hamileyken en gürültülü olan, ikincisi gerçekten ağırlık taşıyan, üçüncüsü önce ilgilenmeniz gereken tek şey. En uzun ikincisinde durun — bu aylarda çok şey gürültü çıkarır ve sesi yüksek olanı ağır olandan ayırmanın yolu o kartta.",
    healthBirth: "İlk kart doğuma girerken zaten sahip olduğunuz güç, ikincisi hâlâ eksik kaldığınız taraf, üçüncüsü o güce nasıl bir anda uzanacağınız. En uzun ilk kartta durun — sorduğunuzun cevabı o ve zaten içinizde. İkincisi yalnızca o gün yaklaşırken kendinize nerede yumuşak davranacağınızı gösterir; üçüncüsü ise o günün habercisi değil, ilk kartı hatırlamanız gereken andır — üçüncü kart ağır görünüyorsa, ilk kart tam da o an içindir.",
  },

  // ── 분류 아래 안내 한 줄. 지금은 건강 분류에만 있다 — 진단이 아니라 들여다보는 자리라는 것. ──
  ranks: {
    1: 'Ası', 2: 'İkilisi', 3: 'Üçlüsü', 4: 'Dörtlüsü', 5: 'Beşlisi', 6: 'Altılısı', 7: 'Yedilisi',
    8: 'Sekizlisi', 9: 'Dokuzlusu', 10: 'Onlusu', 11: 'Prensi', 12: 'Şövalyesi', 13: 'Kraliçesi', 14: 'Kralı',
  },
  minorName: (rank, suit) => `${suit} ${rank}`,
}
