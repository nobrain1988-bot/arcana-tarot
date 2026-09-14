// Türkçe. Yapı en.js ile birebir aynı olmalı.
export default {
  tabs: { today: 'Bugün', readings: 'Açılımlar', library: 'Kartlar', journal: 'Günlük' },

  common: {
    back: 'Geri',
    close: 'Kapat',
    copied: 'Kopyalandı',
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
    data: 'Verilerin',
    dataBlurb: 'Her şey bu telefonda kalır. Hiçbir yere gönderilmez ve hesap açman gerekmez.',
    clearData: 'Kayıtlı her şeyi sil',
    clearDataConfirm: 'Günün kartı ve kayıtlı tüm açılımlar silinsin mi? Bu geri alınamaz.',
    done: 'Tamam',
  },

  share: { tagline: 'Arcana — ücretsiz tarot açılımları' },

  // 주제 분류 — 리딩 화면 위쪽 칩

  cats: {

    love: 'Aşk',

    crush: 'Karşılıksız aşk',

    work: 'İş ve okul',

    life: 'Para ve kararlar',

  },


  // 주제별 질문. 스프레드 이름 대신 '무엇이 궁금한가'로 고르게 한다.

  // 각 언어로 따로 썼다 — 직역하면 어느 나라 말도 아닌 문장이 된다.

  topics: {

    loveNow: 'Aramızda gerçekte ne var?',

    loveWhere: 'Bu ilişki nereye gidiyor?',

    loveThem: 'O kişi şu an ne hissediyor?',

    loveGo: 'Bu kişiyle devam edeyim mi?',

    crushApproach: 'İlk adımı ben mi atayım?',

    crushHeart: 'Bu duygularla ne yapmalıyım?',

    crushAgain: 'Bize dönüş var mı?',

    crushLearn: 'Bu bana ne bıraktı?',

    workBlock: 'İşimi ne engelliyor?',

    workMove: 'İş değiştireyim mi?',

    workMiss: 'Neyi gözden kaçırıyorum?',

    workAhead: 'Bu iş nasıl sonuçlanacak?',

    lifeMoney: 'Paraya nereden başlamalıyım?',

    lifeChoice: 'Atılayım mı, atılmayayım mı?',

    lifeAdvice: 'Bugün neyi duymam gerek?',

    lifeFlow: 'Şu sıralar işler nasıl gidiyor?',

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
      title: 'Aşk açılımı',
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
      title: 'İş ve para',
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

  // Sayı kartlarında iyelik eki kullanılır: "Değnek Ası", "Kupa Kraliçesi"
  ranks: {
    1: 'Ası', 2: 'İkilisi', 3: 'Üçlüsü', 4: 'Dörtlüsü', 5: 'Beşlisi', 6: 'Altılısı', 7: 'Yedilisi',
    8: 'Sekizlisi', 9: 'Dokuzlusu', 10: 'Onlusu', 11: 'Prensi', 12: 'Şövalyesi', 13: 'Kraliçesi', 14: 'Kralı',
  },
  minorName: (rank, suit) => `${suit} ${rank}`,
}
