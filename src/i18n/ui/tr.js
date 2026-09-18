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
    focusBlurb: 'Odaklanmana yardımcı oluyorsa yaz. Yazdığın telefonunda kalır, hiçbir yere gönderilmez.',
    focusPlaceholder: 'Aklında ne var?',
    draw: 'Karıştır ve çek',
    chooseTitle: 'Kartlarınızı seçin',
    chooseBlurb: 'Seçerken sorunuzu aklınızda tutun.',
    skip: 'Atla — sadece çek',
    focusTip: 'Ne ve Nasıl ile başlayan sorular işe yarar bir cevap verir. Ne zaman ve Olacak mı yalnızca tahmin bırakır.',
    askTip: 'Tek seferde tek soru, olabildiğince somut olsun.',
    tryAsking: 'Şöyle sormayı deneyin',
    ownQuestion: 'Kendi sorumu sor',
    shuffling: 'Karıştırılıyor',
    newReading: 'Yeni açılım',
  },

  result: {
    whole: 'Açılımın bütünü',
    share: 'Bu açılımı paylaş',
    again: 'Yeniden çek',
    drawnOn: '{card} çıktı, {orientation}.',
    together: "Bir arada okuyunca",
  },

  lib: {
    eyebrow: 'Kartlar',
    title: '78 kartın tamamı',
    filterAll: '78 kart',
    filterMajor: 'Büyük',
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
    footer: 'Sadece bu cihazda saklanır. Hiçbir şey yüklenmez.',
  },

  set: {
    title: 'Ayarlar',
    language: 'Dil',
    languageBlurb: 'Kart anlamları dahil, uygulamanın tamamı bu dile geçer.',
    reversals: 'Ters kartlar',
    reversalsBlurb: 'Kimi okuyucu ters kart kullanır, kimi kullanmaz. Kapatırsan sadece düz kart çıkar.',
    soundBlurb: 'Alçak bir uğultu ve ara sıra çan. Kayıt değil, uygulama üretiyor.',
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

    tagline: 'Kartlar seni çoktan bekliyor.',

    enter: 'İçeri gir',

  },


  cats: {



    all: 'Tümü',
    love: 'Aşk',

    crush: 'Karşılıksız aşk',

    work: 'İş ve okul',

    life: 'Para ve kararlar',

    health: "Sağlık",
  },


  // 주제별 질문. 스프레드 이름 대신 '무엇이 궁금한가'로 고르게 한다.

  // 각 언어로 따로 썼다 — 직역하면 어느 나라 말도 아닌 문장이 된다.

  topics: {

    loveNow: 'Aramızda gerçekte ne var?',

    loveWhere: 'Bu ilişki nereye gidiyor?',

    loveThem: 'O kişi şu an ne hissediyor?',

    loveGo: 'Bu kişiyle devam edeyim mi?',

    loveNeed: 'Şu an ilişkimizin neye ihtiyacı var?',

    loveMiss: 'Burada neyi göremiyorum?',

    loveClash: 'Neden sürekli ters düşüyoruz?',

    loveHonest: 'Açık açık söyleyeyim mi?',

    loveLast: 'Bunun geleceği var mı?',

    crushApproach: 'İlk adımı ben mi atayım?',

    crushHeart: 'Bu duygularla ne yapmalıyım?',

    crushAgain: 'Bize dönüş var mı?',

    crushLearn: 'Bu bana ne bıraktı?',

    crushThink: 'O da beni düşünüyor mu?',

    crushConfess: 'İtiraf edersem ne olur?',

    crushLetGo: 'Artık bırakmanın zamanı mı?',

    crushSilence: 'Neden sessizliğe büründü?',

    crushSettle: 'Bu duyguları nasıl toparlarım?',

    workBlock: 'İşimi ne engelliyor?',

    workMove: 'İş değiştireyim mi?',

    workMiss: 'Neyi gözden kaçırıyorum?',

    workAhead: 'Bu iş nasıl sonuçlanacak?',

    workTalent: 'Gerçekte neyde iyiyim?',

    workStay: 'Bulunduğum yerde kalayım mı?',

    workPeople: 'İşteki bu kişiyi nasıl okumalıyım?',

    workExam: 'Sınav öncesi neyi güçlendirmeliyim?',

    workLearn: 'Doğru şeyi mi öğreniyorum?',

    lifeMoney: 'Paraya nereden başlamalıyım?',

    lifeChoice: 'Atılayım mı, atılmayayım mı?',

    lifeFlow: 'Şu sıralar işler nasıl gidiyor?',

    lifeSpend: 'Bu harcamaya değer mi?',

    lifeImportant: 'Şu an benim için en önemlisi ne?',

    lifeMove: 'Taşınırsam ne olur?',

    lifeSave: 'Para neden hiç birikmiyor?',

    lifeStart: 'Başlayacağım bu iş nasıl gider?',

    lifeHold: 'Neyi bırakamıyorum?',

    lifeAdvice: 'Bugün neyi duymam gerek?',

    healthSignal: "Bedenim bana ne anlatmaya çalışıyor?",
    healthBurnout: "Neden hep tükenmiş hissediyorum?",
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
    healthBirth: "Doğuma giderken içimde zaten var olan güç ne?",
    healthLoss: "Bebeğimi kaybettikten sonra içimde ne kalıyor?",
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
      blurb: 'Evet ya da hayırla yanıtlanacak bir şey sor. Tek kart karar verir.',
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
        'Yüksek sesle söylemediğim şey ne?',
        'Bu hafta bunu ne sağlamlaştırır?',
      ],
      pos: {
        you:     { label: 'Sen',       lead: 'Bu ilişkiye senin getirdiğin.' },
        them:    { label: 'Karşı taraf', lead: 'Diğer kişinin durduğu yer.' },
        between: { label: 'Aranızdaki', lead: 'Aranızda gerçekte olan şey.' },
      },
    },
    career: {
      title: 'Seni engelleyen şey',
      blurb: 'Nerede durduğun, seni ne tıkadığı ve neyin işi ilerlettiği.',
      examples: [
        'Bunu gerçekte ne engelliyor?',
        'Bu işte neden kaçınıyorum?',
        'Bu ay bunu ne ilerletir?',
      ],
      pos: {
        now:   { label: 'Bulunduğun yer', lead: 'Durum olduğu gibi.' },
        block: { label: 'Tıkanıklık',     lead: 'İşi ne tutuyor.' },
        move:  { label: 'Çıkış yolu',     lead: 'Bunu gerçekten ilerleten şey.' },
      },
    },
    // 상황 · 행동 · 결과 — 다른 스프레드에 없는 '결과' 자리가 핵심이다.
    outcome: {
      title: 'Durum · Eylem · Sonuç',
      blurb: 'İşler şu an nerede, ne yapmalı ve bu nereye götürür.',
      examples: [
        'Bununla ne yapmalıyım?',
        'Bu durumu nasıl ele almalıyım?',
        'Böyle devam edersem ne olur?',
      ],
      pos: {
        situation: { label: 'Durum', lead: 'Gerçekte önünüzde duran şey.' },
        action:    { label: 'Ne yapmalı',    lead: 'Bu durumun istediği hamle.' },
        result:    { label: 'Varacağı yer',    lead: 'Bu seçimin götürdüğü yer.' },
      },
    },
    hidden: {
      title: 'Göremediğiniz şey',
      blurb: 'Önünüzdekini, gözden kaçanı ayırır.',
      pos: {
        seen: { label: 'Gördüğünüz', lead: 'Zaten bildiğiniz taraf.' },
        unseen: { label: 'Gizli kalan', lead: 'Görüş alanınızın dışında kalan taraf.' },
        know: { label: 'Bilmeniz gereken', lead: 'Bunu görünce değişecek olan.' },
      },
    },
    strength: {
      title: 'Elinizdekiler',
      blurb: 'Neyin güçlü, neyin eksik olduğu ve nerede işe yaradığı.',
      pos: {
        have: { label: 'Gücünüz', lead: 'Zaten içinizde olan.' },
        thin: { label: 'Eksik olan', lead: 'Henüz olgunlaşmamış taraf.' },
        use: { label: 'Nerede işe yarar', lead: 'O gücün gerçekten geçtiği yer.' },
      },
    },
    residue: {
      title: 'Geriye kalan',
      blurb: 'Biten bir şeyin ardında bıraktığı.',
      pos: {
        was: { label: 'O zaman olan', lead: 'O anda gerçekten var olan.' },
        left: { label: 'Şimdi kalan', lead: 'Hâlâ içinizde duran.' },
        learn: { label: 'Öğrettiği', lead: 'Bunun ne için olduğu.' },
      },
    },
    priority: {
      title: 'Ne önemli',
      blurb: 'Sizi çekeni, gerçekten ağır basandan ayırır.',
      pos: {
        pull: { label: 'Sizi çeken', lead: 'Şu an en çok ses çıkaran.' },
        real: { label: 'Asıl önemli olan', lead: 'Ağırlığın gerçekte durduğu yer.' },
        first: { label: 'Nereden başlamalı', lead: 'Önce dokunulacak tek şey.' },
      },
    },
  },

  engine: {
    suits: {
      // name = listede görünen (çoğul), short = kart adında kullanılan (tekil)
      wands:     { name: 'Değnekler', short: 'Değnek', domain: 'enerji, itki ve yaratıcı iş' },
      cups:      { name: 'Kupalar',   short: 'Kupa',   domain: 'duygular, ilişkiler ve sezgi' },
      swords:    { name: 'Kılıçlar',  short: 'Kılıç',  domain: 'düşünce, gerçek ve çatışma' },
      pentacles: { name: 'Tılsımlar', short: 'Tılsım', domain: 'para, iş, sağlık ve maddi dünya' },
    },
    verdict: {
      yes:   { word: 'Evet',   gloss: 'Kart evet tarafına ağırlık veriyor.' },
      maybe: { word: 'Henüz değil', gloss: 'Kart net konuşmuyor — durum temiz bir cevap verecek kadar oturmamış.' },
      no:    { word: 'Hayır',  gloss: 'Kart hayır tarafına ağırlık veriyor.' },
    },
    element: {
      fire:  'Bu açılımdan Ateş geçiyor — mesele karar vermek değil, harekete geçmek ve bir şey yapmak.',
      water: 'Bu açılımdan Su geçiyor — yüzeyde nasıl görünürse görünsün, mesele duygular ve ilişkiler.',
      air:   'Bu açılımdan Hava geçiyor — mesele düşünce, gerçek ve söylenen ya da söylenmeyen şeyler.',
      earth: 'Bu açılımdan Toprak geçiyor — mesele somut olan: para, iş, sağlık, elle tutulur gerçekler.',
    },
    majors: {
      none: 'Hiç Büyük Arkana yok. Bu gündelik ölçekte bir mesele — sonucu belirleyen, senin verdiğin sıradan kararlar; daha büyük bir şey değil.',
      all:  'Bütün kartlar Büyük Arkana. Gerçekten önemli bir dönem ve bunun çapı, bu hafta vereceğin herhangi bir karardan büyük.',
      most: '{total} karttan {n} tanesi Büyük Arkana. Yapısal bir şey hareket ediyor — küçük görünse de küçük bir mesele değil.',
    },
    reversals: {
      none: 'Hiçbir kart ters gelmedi. Olan biten açıkta ve kendi doğal hızında ilerliyor.',
      all:  'Bütün kartlar ters geldi. Bunların hepsi içeride oluyor ya da tutuluyor — durum başka bir yerde tıkanmadan önce içeride tıkanmış.',
      most: 'Kartların çoğu ters. Tıkanmış, ertelenmiş ya da söylenmemiş olan, açıkta olandan daha fazla.',
    },
  },

  // ── 분류 아래 안내 한 줄. 지금은 건강 분류에만 있다 — 진단이 아니라 들여다보는 자리라는 것. ──
  catNote: {
    health: "Teşhis için değil, içinize bakmak için. Sağlığınızla ilgili her şeyi doktorunuzla konuşun.",
  },

  // ── 질문별 자리 설명 ────────────────────────────────────────
  // 스프레드의 pos.*.lead 는 어느 질문에나 붙는 말이라("지금 상황 그대로.") 답이 질문과 상관없어 보였다.
  // 여기 있는 문장이 그 자리를 대신한다 — 그 질문의 주어가 들어간 렌즈. 없는 질문은 스프레드 lead 로 떨어진다.
  topicLeads: {
    loveNow: { you: "Sizin tarafınız — bu ilişkide sizin durduğunuz yer.", them: "Onun tarafı — bu ilişkide onun durduğu yer.", between: "İkinizin şu an birbiriniz için gerçekte ne olduğu." },
    loveWhere: { past: "Bu ilişkiyi buraya kadar taşıyan şey.", present: "İkinizin bu ilişkide şu an durduğu yer.", future: "Böyle giderse bu ilişkinin varacağı yer." },
    loveThem: { you: "Onu okurken kendinizden kattığınız şey.", them: "Onun içinde şu an gerçekte olup biten.", between: "Onun iç dünyasından size gerçekten ulaşan kısım." },
    loveGo: { answer: "Bu kişiyle devam edip etmemeniz gerektiğinin cevabı ve sebebi." },
    loveNeed: { situation: "İkinizin şu an elinde gerçekte olan şey.", action: "Bu ilişkinin şu an sizden istediği tek şey.", result: "O ihtiyaç karşılanınca bu ilişkinin dönüşeceği hâl." },
    loveMiss: { seen: "Bu ilişkide zaten açıkça gördüğünüz taraf.", unseen: "Bu ilişkinin görmediğiniz tarafı.", know: "Gizli taraf görünür olunca aranızda değişecek olan." },
    loveClash: { now: "Sürekli ters düştüğünüz şu günlerde ikinizin durduğu yer.", block: "İkinizi sürekli ters düşüren şey.", move: "İkinizi yeniden aynı çizgiye getiren şey." },
    loveHonest: { answer: "Açıkça söyleyip söylememeniz gerektiğinin cevabı ve sebebi." },
    loveLast: { past: "İkinizi bugüne kadar bir arada tutan şey.", present: "İkinizi şu an bir arada tutan şey.", future: "Sizi bugün tutan şeyin ikinizi nereye kadar taşıyabileceği." },
    crushApproach: { answer: "İlk adımı atıp atmamanız gerektiğinin cevabı ve sebebi." },
    crushHeart: { situation: "Bu duyguların sizi şu an gerçekte getirdiği yer.", action: "Bu duyguların sizden istediği hamle.", result: "O hamleyi yaparsanız bu duyguların varacağı yer." },
    crushAgain: { answer: "Birbirinize dönüş yolu olup olmadığının cevabı ve sebebi." },
    crushLearn: { was: "Sürdüğü sürece bu bağın gerçekte ne olduğu.", left: "Bu bağın içinizden hiç çıkmayan kısmı.", learn: "Bu bağın size öğretmek için geldiği şey." },
    crushThink: { you: "O da sizi düşünüyor mu diye sorarken içinizde taşıdığınız.", them: "Onun aklında gerçekte ne kadar yer kapladığınız.", between: "Yalnızca kafanızda değil, aranızda gerçekten geçen şey." },
    crushConfess: { situation: "Hislerinizi söylemeden önce aranızın durduğu yer.", action: "Söylemeye karar verirseniz, bunu nasıl söyleyeceğiniz.", result: "O öğrendikten sonra ikinizin varacağı yer." },
    crushLetGo: { answer: "Bunu bırakmanın zamanı gelip gelmediğinin cevabı ve sebebi." },
    crushSilence: { now: "O sustuğundan beri ikinizin durduğu yer.", block: "Onun size ulaşmasını gerçekte engelleyen şey.", move: "İkinizi yeniden konuşturacak olan şey." },
    crushSettle: { situation: "Bu konuda kafanızda hâlâ düğümlü kalan şey.", action: "Kafanızın gerçekten toparlanmaya başlamasını sağlayan tek şey.", result: "Bunu yaptıktan sonra bu duyguların varacağı yer." },
    workBlock: { now: "Bu işin şu an takılıp kaldığı yer.", block: "Bu işi gerçekte geride tutan şey.", move: "Bu işi yeniden harekete geçiren şey." },
    workMove: { answer: "Şimdi iş değiştirip değiştirmemenizin cevabı ve arkasındaki sebep." },
    workMiss: { seen: "Bu işte zaten açıkça gördüğünüz kısım.", unseen: "Bu işin bakmadığınız köşesi.", know: "O köşe görününce bu işte değişecek olan." },
    workAhead: { situation: "Bu işin bugün gerçekte durduğu yer.", action: "Bu işin şu an sizden istediği hamle.", result: "O hamleyi yaparsanız bu işin varacağı yer." },
    workTalent: { have: "Hiç adını koymamış olsanız da iyi yaptığınız şey.", thin: "İyi olduğunuz şeyin hemen yanında, hâlâ eksik kalan beceri.", use: "O yeteneğinizin gerçekten işe yaradığı yer." },
    workStay: { answer: "Bulunduğunuz yerde kalıp kalmamanızın cevabı ve sebebi." },
    workPeople: { you: "Bu kişiyle her karşılaşmaya sizin taşıdığınız şey.", them: "İş yerinde size gösterdiğinin ardında bu kişinin gerçekte durduğu yer.", between: "İş yerinde bu kişiyle aranızda gerçekte olup biten." },
    workExam: { have: "Sınava girerken zaten sağlam olan.", thin: "Sınavdan önce pekiştirilmesi gereken kısım.", use: "Hazırlığınızın sınav günü gerçekten işe yarayacağı yer." },
    workLearn: { answer: "Şu an öğrendiğinizin doğru şey olup olmadığının cevabı ve sebebi." },
    lifeMoney: { now: "Paranızla aranızın şu an durduğu yer.", block: "Para işlerinizi sürekli düğümleyen şey.", move: "Para konusunda gerçekten nereden başlanacağı." },
    lifeChoice: { answer: "Atılıp atılmamanız gerektiğinin cevabı ve sebebi." },
    lifeFlow: { past: "İşleri şu anki akışına sokan şey.", present: "Sizin için işlerin şu an gerçekte nasıl aktığı.", future: "Hiçbir şey değişmezse akışın sizi taşıyacağı yer." },
    lifeSpend: { answer: "Bu harcamaya değip değmediğinin cevabı ve sebebi." },
    lifeImportant: { pull: "Şu an önünüzdeki her şey içinde en yüksek sesle bağıran.", real: "Gürültü dinince hâlâ önemli olacak tek şey.", first: "Neyin önemli olduğunu gördüğünüze göre, önce elinize alacağınız şey." },
    lifeMove: { situation: "Taşınma konusunda şu an durduğunuz yer.", action: "Taşınmanın sizden ilk istediği şey.", result: "Giderseniz taşınmanın sizi götüreceği yer." },
    lifeSave: { now: "Paranın şu an size nasıl gelip gittiği.", block: "Paranızın sürekli sızdığı delik.", move: "Paranın nihayet elinizde kalmasını sağlayacak şey." },
    lifeStart: { situation: "Bu yeni işin yola çıktığı yer.", action: "Bu yeni işin başlarda sizden istediği şey.", result: "İstediğini verdiğinizde bu yeni işin nasıl gideceği." },
    lifeHold: { seen: "Tuttuğunuzu zaten bildiğiniz şey.", unseen: "Onun altında gerçekte sımsıkı tuttuğunuz şey.", know: "Bunu görünce elinizin açılmasını sağlayacak olan." },
    healthSignal: { seen: "Bedeninizin sinyallerinden zaten fark ettiğiniz.", unseen: "Bedeninizin sürekli istediği, sizinse hep geçiştirdiğiniz şey.", know: "Dinlemeye başlayınca bedeninize bakma biçiminizde değişecek olan." },
    healthBurnout: { now: "Süslemeden bakınca şu an gerçekte ne kadar tükendiğiniz.", block: "Sizi, enerjinizi yerine koyabildiğinizden daha hızlı tüketen şey.", move: "Depoyu yeniden doldurmaya başlayan şey." },
    healthSleep: { now: "Işıklar sönünce gecelerinizin gerçekte nasıl geçtiği.", block: "Bedeniniz durmak isterken zihninizi çalışır tutan şey.", move: "Geceleri zihninizin nihayet yatışmasını sağlayan şey." },
    healthAnxious: { seen: "Kaygının neyle ilgili olduğuna dair kendinize anlattığınız hikâye.", unseen: "O hikâyenin altında kaygının gerçekte işaret ettiği şey.", know: "Asıl şeyi adlandırınca kaygının nasıl değişeceği." },
    healthRest: { answer: "Biraz durup dinlenmenin zamanı gelip gelmediğinin cevabı ve sebebi." },
    healthHabit: { situation: "Bu alışkanlıkla şu an durduğunuz yer.", action: "Alışkanlığı değiştirmenin gerçekte ne gerektirdiği.", result: "Alışkanlığı değiştirdikten sonra varacağınız yer." },
    healthSlipBack: { now: "Eski alışkanlıkla şu an aranızdaki mesafe.", block: "Sizi eski alışkanlığa geri çekip duran şey.", move: "Bu kez geri kaymanızı önleyecek olan şey." },
    healthMind: { have: "İşler ağırlaştığında sizi ayakta tutan şey.", thin: "Uzandığınız ama henüz tam orada olmayan destek.", use: "Sizi ayakta tutanın ağır bir günü gerçekten hafiflettiği yer." },
    healthBody: { situation: "Bedeninizle aranızın şu an durduğu yer.", action: "Bedeninizle barışmanın sizden gerçekte istediği şey.", result: "O hamleyi yapınca bedeninizle birlikte varacağınız yer." },
    healthBeside: { you: "Onun yanında otururken sizin taşıdığınız şey.", them: "Baktığınız kişinin gösterdiği değil, hissettiği şey.", between: "O hastayken aranızda gerçekte geçen şey." },
    healthWaitBaby: { you: "Söylemiş olun ya da olmayın, bu bekleyişe sizin taşıdığınız şey.", them: "Eşinizin aynı bekleyişteki tarafı — sizinkiyle örtüşmeyebilir.", between: "Bekleyişin aranızdaki bağa yaptığı şey." },
    healthExpecting: { pull: "Bebek yoldayken kafanızda en yüksek sesle konuşan şey.", real: "Hamileyken gerçekten ağırlık taşıyan şey.", first: "Bebek gelmeden önce ilk gözetilecek tek şey." },
    healthBirth: { have: "Doğuma girerken zaten içinizde taşıdığınız güç.", thin: "Doğum yaklaşırken hâlâ eksik kaldığınız taraf.", use: "Doğum geldiğinde o gücün sizi gerçekten tutacağı yer." },
    healthLoss: { was: "Bebekle geçen o zamanı dolduran şey.", left: "O zamandan bugün hâlâ içinizde duran şey.", learn: "Bu çocuğu sevmenin size öğrettiği." },
  },

  // ── 질문별 마무리 한 줄 — 세 장이 이 질문에 어떻게 하나의 답이 되는지, 어느 장을 오래 볼지 ──
  topicClose: {
    loveNow: "İlk iki kart her birinizin tek başına nerede durduğunu gösterir. Üçüncüsü birlikte durduğunuz yerdir — cevap orada, en uzun ona bakın.",
    loveWhere: "Üç kartı tek bir hikâye gibi okuyun: bu ilişki nereden geldi, şimdi nerede, nereye gidiyor. En uzun üçüncü kartta durun — cevabınız orada; o cevabın ne kadar sağlam olduğunu ise ikinci kart söyler.",
    loveThem: "Sorduğunuz şey ikinci kartta — en uzun orada durun. İlk kart onu nasıl okuduğunuzu biçimlendirir; üçüncüsü ise onun içindekilerin kendiliğinden size ne kadar ulaştığını söyler.",
    loveGo: "Yukarıdaki cevap, bu kişiyle devam edip etmeme kararıdır. Altındaki kart ise gerekçesi — onunla kalmanın gerçekte neye benzeyeceği — ve o kısım, evet ya da hayırın kendisinden daha değerli.",
    loveNeed: "İlk kart ikinizin elinde ne olduğu, ikincisi eklenmesi gereken tek şey, üçüncüsü o ihtiyaç karşılanınca ilişkinin alacağı hâl. Cevabınız ikinci kart — bu ilişkinin ihtiyacı, sizin gerçekten yapabileceğiniz bir şey.",
    loveMiss: "İlk kart zaten bildiğiniz taraf — bir bakıp ikincinin yanında tutun, çünkü ikincisi ona göre okunur. Cevabınız ikinci kartta, bu ilişkinin görmediğiniz yüzü: en uzun orada durun, üçüncüsünü de o yüz görününce aranızda neyin değişeceği diye okuyun.",
    loveClash: "İlk kart ikinizin hep nerede ters düştüğü, ikincisi bunun sebebi, üçüncüsü sizi yeniden aynı çizgiye getiren şey. 'Neden' diye sordunuz, o yüzden en uzun ikinci kartta durun; üçüncüsü ancak neyi çözmesi gerektiğini bilince anlam kazanır.",
    loveHonest: "Yukarıdaki cevap, açıkça söyleyip söylememe kararıdır. Kart ise gerekçesi — söylerseniz neyi, içinizde tutarsanız neyi harekete geçireceği — bu yüzden hangi yöne karar verirseniz verin, önce o kısmı okuyun.",
    loveLast: "Üçünü tek bir çizgi gibi okuyun — sizi ne tuttu, şimdi ne tutuyor, bu sizi nereye kadar taşır. Cevap üçüncü kart, ama üzerinde durulacak olan ikincisi: bugün sizi bir arada tutan şey, yolun sonuna kadar dayanmak zorunda.",
    crushApproach: "Üstteki cevap ilk adımı atıp atmamanız gerektiğini söyler; altındaki kart ise nedenini. Karta cevaptan daha uzun bakın — yalnızca atıp atmamayı değil, nasıl atacağınızı orada okuyun.",
    crushHeart: "Üç kartı sırayla okuyun: duygular nerede duruyor, onlarla ne yapmalı, bu nereye götürür. En uzun ikinci kartta kalın — sorunuza cevap veren o; üçüncüsüyle de bu hamlenin yapmaya değip değmediğini kontrol edin.",
    crushAgain: "Üstteki cevap birbirinize bir dönüş yolu olup olmadığını söyler; altındaki kart ise sebebini. Sebebin üzerinde durun — evetse geri dönmenin sizden ne isteyeceğini, hayırsa yolu neyin kestiğini, henüz değilse önce neyin yatışması gerektiğini söyler.",
    crushLearn: "İlk kart bunun ne olduğu, ikincisi ondan geriye kalan, üçüncüsü ne için olduğu. En uzun ikincisinde durun — bu bağın size bıraktığı şey, o zamanki görüntüsü değil, şu an içinizde hâlâ duran şeydir.",
    crushThink: "Aradığınız cevap ikinci kartta — onun aklında olup olmadığınızı o söyler; en uzun orada durun. İlk kartı ona göre okuyun: bu çekimin ne kadarı yalnızca sizin; üçüncüsünü de aranızda gerçekten bir şey kımıldıyor mu diye.",
    crushConfess: "İtiraf edersem ne olur diye sordunuz — cevap üçüncü kartta, en uzun orada durun. İlk kart bir şey söylemeden önce işlerin nerede durduğunu, ikincisi ise üçüncüye şans tanıyacak biçimde nasıl söyleyeceğinizi gösterir.",
    crushLetGo: "Üstteki cevap, bırakmanın zamanının gelip gelmediğini söyler. Altındaki kart ise sebebi — ve evetse bırakmanın neye mal olacağını, hayırsa neyin hâlâ tutmaya değdiğini, henüz değilse anlayabilmeniz için önce neyin yatışması gerektiğini de gösterir.",
    crushSilence: "Neden sustuğunu sordunuz — cevap ikinci kartta, en uzun orada durun. İlk kart sessizliğin şu anki hâli; üçüncüsü onu neyin kıracağı, ama ikincisi sebebi söylemeden anlam kazanmaz.",
    crushSettle: "İkinci kart sorduğunuz şey — yapılacak olan — o yüzden en uzun orada durun. İlk kart o hamlenin neyi çözmesi gerektiğini, üçüncüsü ise yatıştığında bu duyguların nasıl görüneceğini söyler; böylece oraya vardığınızı anlarsınız.",
    workBlock: "Cevap ikinci kart — bu işi geride tutan şey; ilk kart o tıkanıklığın işe şimdiye dek ne yaptığı, üçüncüsü ise onu neyin gevşeteceği. En uzun ikincisinde durun, diğer ikisini onun etrafında okuyun.",
    workMove: "Yukarıdaki cevap iş değiştirme konusundaki karar; kart ise sebebi. Bu geçişin şu an sizden ne isteyeceğini orada okuyun.",
    workMiss: "İlk kart bu işte zaten görüş alanınızda olan kısım, ikincisi bakmadığınız köşe — sorduğunuz şey bu — üçüncüsü ise o köşe görününce neyin değişeceği. En uzun ikincisinde durun.",
    workAhead: "İlk kart işin durduğu yer, ikincisi istediği hamle, üçüncüsü varacağı yer. Nasıl sonuçlanacağını sordunuz, o yüzden üçüncü kartta durun — ama onu tek başına değil, ikincinin sonucu olarak okuyun.",
    workTalent: "İlk kart cevabın kendisi — iyi yaptığınız şey; ikincisi o gücün nerede inceldiğini gösterir, böylece nerede bittiğini bilirsiniz. En uzun ilk kartta durun, sonra onu nereye koyacağınızı üçüncüsü söylesin.",
    workStay: "Üstteki cevap kalma konusundaki karar — evet, hayır ya da henüz değil. Altındaki kart nedenini söyler: kalmanın size ne verdiğini ve neye mal olduğunu orada okuyun.",
    workPeople: "İlk kart sizin buraya taşıdığınız, ikincisi okumaya çalıştığınız kişi, üçüncüsü aranızda gerçekte işleyen şey. En uzun ikincisinde durun — istediğiniz okuma o — sonra üçüncüyle karşılaştırın; ikisi uyuşmuyorsa sebebi çoğu zaman ilk karttır.",
    workExam: "İlk kart zaten sağlam olan, ikincisi pekiştirilecek olan, üçüncüsü hazırlığınızın sınav günü nerede kendini göstereceği. Neyi düzelteceğinizi sordunuz, o yüzden en uzun ikinci kartı okuyun — ilki de neye vakit harcamayacağınızı söyler.",
    workLearn: "Yukarıdaki cevap, bunun öğrenilecek doğru şey olup olmadığına dair karar. Altındaki kart ise sebebi — bu öğrenmenin içinizde neyi inşa ettiğini, neyi etmediğini orada okuyun.",
    lifeMoney: "İlk kart paranızın durduğu yer, ikincisi onu düğümde tutan şey, üçüncüsü ilk çekilecek ip. Nereden başlayacağınızı sordunuz, o yüzden en uzun üçüncüde durun — asıl cevap o.",
    lifeChoice: "Yukarıdaki cevap, kartın 'atılayım mı' sorusuna verdiği karar — evet, hayır ya da henüz değil. Kartın metni ise sebebi; bu adımın sizden gerçekte ne isteyeceğini orada okuyun.",
    lifeFlow: "Üçünü tek bir akıntı gibi okuyun: ilk kart onu harekete geçiren, ikincisi şu an olduğu yer, üçüncüsü sizi taşıdığı yer. 'Şu sıralar' diye sordunuz, o yüzden en uzun ikincide durun — diğer ikisi hangi yöne aktığını söyler.",
    lifeSpend: "Yukarıdaki cevap bu harcamaya değip değmediğini söyler — kartın metni ise sebebi. Yalnızca neye mal olduğunu değil, bu paranın size gerçekte ne aldığını orada okuyun.",
    lifeImportant: "Bu sorunun cevabı ikinci kart; ilki onu bastıran gürültü, üçüncüsü nereden başlanacağı. En uzun ikincisinde durun — ilk ve üçüncü, yalnızca onu çerçevelemek için orada.",
    lifeMove: "İlk kart taşınmanın durduğu yer, ikincisi sizden istediği, üçüncüsü vardığı yer. Soru 'ne olur' olduğuna göre en uzun üçüncüde durun — ama onu tek başına değil, ikinciyi yapmanın sonucu olarak okuyun.",
    lifeSave: "İlk kart paranın şu an size nasıl gelip gittiği, ikincisi sızıntı, üçüncüsü onu tutacak olan. 'Neden' diye sordunuz, o yüzden en uzun ikincisinde durun — üçüncüsü ancak sızıntıyı görünce anlam kazanır.",
    lifeStart: "İlk kart bu yeni işin nereden yola çıktığı, ikincisi başlarda sizden ne istediği, üçüncüsü nasıl gideceği. Nasıl gideceğini sordunuz, o yüzden en uzun üçüncüde durun — onu ikinci kartın götürdüğü yer olarak okuyun.",
    lifeHold: "Üçünü birleştirin: ilk kart kendinize görmeye izin verdiğiniz kısım, ikincisi aslında bırakmayı reddettiğiniz şey, üçüncüsü bunu görünce tutuşunuzu gevşetecek olan. Bu sorunun cevabı ikinci kart — en uzun orada durun.",
    healthSignal: "İlk kart zaten hissettiğiniz, ikincisi bedeninizin isteyip durduğu ama sizin geçiştirdiğiniz, üçüncüsü dinlemeye başlayınca ona bakma biçiminizde değişecek olan. En uzun ikincisinde durun — bedeninizin fark etmenizi beklediği kısım orada.",
    healthBurnout: "İlk kart deponuzun gerçekte ne kadar boşaldığını adlandırır, ikincisi sızıntı, üçüncüsü yeniden dolmanın nereden başlayacağı. En uzun ikincisinde durun — hâlâ sızdıran bir depoyu dolduramazsınız.",
    healthSleep: "İlk kart gecelerinizin şu anki hâli, ikincisi zihninizi açık tutan şey, üçüncüsü onu durduracak olan. En uzun ikincisinde durun — yatışmayan düşünceler çoğu zaman gündüz ele alınamamış bir şeyi taşır.",
    healthAnxious: "İlk kart kaygıya dair kendinize anlattığınız hikâye, ikincisi kaygının gerçekte neyle ilgili olduğu, üçüncüsü onu adıyla çağırınca değişecek olan. En uzun ikincisinde durun — kaygı, asıl şey henüz söylenmemişken sesini yükseltir.",
    healthRest: "Yukarıdaki cevap biraz durup dinlenmenin zamanının gelip gelmediğini söyler; kart ise sebebi — molanın size neyi geri vereceğini ya da dinlenmenin gerçekten işe yaraması için önce neyin yatışması gerektiğini. Bunu dinlenmeyi hak edip etmediğiniz değil, zamanı gelip gelmediği sorusu olarak okuyun.",
    healthHabit: "İlk kart alışkanlıkla şu an nerede durduğunuz, ikincisi değiştirmenin gerçekte ne gerektirdiği, üçüncüsü bunun sizi nerede bıraktığı. En uzun üçüncüde durun — sorduğunuzun cevabı o; ikincisi ise oraya varmanın bedeli.",
    healthSlipBack: "İlk kart eski alışkanlıkla bugün aranızdaki mesafe, ikincisi sizi geri getirip duran çekim, üçüncüsü bu kez uzak kalmanıza yardım edecek olan. En uzun ikincisinde durun — geri kaymak nadiren irade meselesidir; çoğu zaman eski alışkanlığın sizin için sessizce yaptığı bir şey vardır.",
    healthMind: "İlk kart işler ağırlaşınca sizi zaten ayakta tutan, ikincisi uzanıp durduğunuz ama henüz tam orada olmayan destek, üçüncüsü ilkine yaslanmanın günü gerçekten hafiflettiği yer. En uzun ilk kartta durun — ağır günlerde yeni bir şey kurmaya kalkmadan önce sizi zaten tutandan başlayın.",
    healthBody: "İlk kart bedeninizle aranızın durduğu yer, ikincisi barışı mümkün kılan hamle, üçüncüsü o hamlenin ikinizi bıraktığı yer. En uzun ikincisinde durun — ne yapmalı diye sordunuz, cevap o kart; üçüncüsü de bunu yapmanın nereye götürdüğünü gösterir.",
    healthBeside: "İlk kart sizin taşıdığınız, ikincisi gösterdiğinin altında onun hissettiği, üçüncüsü tüm bunlar olurken aranızda işleyen şey. En uzun ilk kartta durun — nasıl ayakta kalırım diye sordunuz ve kimse kendi taşıdığını görmezden gelerek uzun süre ayakta kalamaz.",
    healthWaitBaby: "İlk kart bu bekleyişteki siz, ikincisi aynı bekleyişteki eşiniz, üçüncüsü bekleyişin ikinize yaptığı şey. En uzun üçüncüde durun — nasıl yakın kalırız diye sordunuz ve yakınlık ya orada korunuyor ya da sessizce harcanıyor.",
    healthExpecting: "İlk kart hamileyken en gürültülü olan, ikincisi gerçekten ağırlık taşıyan, üçüncüsü önce gözetilecek tek şey. En uzun ikincisinde durun — bu aylarda çok şey gürültü çıkarır ve sesi yüksek olanı ağır olandan ayırmanın yolu o kartta.",
    healthBirth: "İlk kart doğuma girerken zaten sahip olduğunuz güç, ikincisi hâlâ eksik kaldığınız taraf, üçüncüsü doğum geldiğinde o gücün sizi tutacağı yer. En uzun ilk kartta durun — sorduğunuzun cevabı o ve zaten içinizde; ikincisi yalnızca o gün yaklaşırken kendinize nerede yumuşak davranacağınızı gösterir.",
    healthLoss: "Sırayla okununca üç kart bebekle geçen o zamanın neyle dolu olduğunu, ondan neyin hâlâ içinizde olduğunu ve bu çocuğu sevmenin size ne öğrettiğini söyler — bir araya gelince kalan şey budur. En uzun ikincisinde durun: içinizde ne kalıyor diye sordunuz, cevap orada; üçüncüsü ise kaybın değil, sevginin bıraktığıdır.",
  },

  // Sayı kartlarında iyelik eki kullanılır: "Değnek Ası", "Kupa Kraliçesi"
  ranks: {
    1: 'Ası', 2: 'İkilisi', 3: 'Üçlüsü', 4: 'Dörtlüsü', 5: 'Beşlisi', 6: 'Altılısı', 7: 'Yedilisi',
    8: 'Sekizlisi', 9: 'Dokuzlusu', 10: 'Onlusu', 11: 'Prensi', 12: 'Şövalyesi', 13: 'Kraliçesi', 14: 'Kralı',
  },
  minorName: (rank, suit) => `${suit} ${rank}`,
}
