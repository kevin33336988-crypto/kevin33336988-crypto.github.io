const projects = [
  {
    id: "bmw-the1",
    title: "BMW THE 1 AND ONLY 有種不同特展",
    client: "BMW",
    year: "2019",
    category: "exhibition",
    cover: "img/01-bmw-1.jpg",
    images: ["img/01-bmw-1.jpg", "img/01-bmw-2.jpg", "img/01-bmw-3.jpg", "img/01-bmw-4.jpg"],
    role: "空間配置、建物結構、製作物",
    desc: "有別於以往發表會或車展的形式，當參與者在展覽現場進行視、聽覺體驗時，也同時能了解車身特色。空間發想上呼應原主視覺的街景要素，將展區外部設計為街道與馬路，同時也利用造型地毯將參觀動線延伸至後方展車區，兼具展車及展覽功能。"
  },
  {
    id: "tatler-gent",
    title: "TAIWAN TATLER GEN.T 雜誌頒獎典禮",
    client: "TAIWAN TATLER",
    year: "2019",
    category: "brand-event",
    cover: "img/03-gent-1.jpg",
    images: ["img/03-gent-1.jpg", "img/03-gent-2.jpg", "img/03-gent-3.jpg"],
    role: "舞台視覺發想、揭幕裝置發想、製作物概念發想",
    desc: "2019年GEN.T舉辦於信義新光三越WILDWOOD。活動流程因有安排得獎者揭幕儀式，所以在舞台及名人牆的發想中跳脫以往制式揭幕方法，改利用類似拉門的結構作動同時搭配LED燈條及現場燈控效果，讓賓客有更好的視覺體驗。"
  },
  {
    id: "la-marzocco",
    title: "LA MARZOCCO COFFEE FESTIVAL 咖啡節快閃店",
    client: "LA MARZOCCO",
    year: "2020",
    category: "pop-up",
    cover: "img/04-lm-1.jpg",
    images: ["img/04-lm-1.jpg", "img/04-lm-2.jpg", "img/04-lm-3.jpg"],
    role: "空間結構配置、創意發想、平面輸出",
    desc: "LA MARZOCCO 被譽為咖啡界的勞斯萊斯，旗下品牌機型皆具有高級工藝感，在發想上除了運用主要識別元素黑、木色調外同時也將主打機款KB90獨特稜角造型帶入展間立體結構；鮮明線條構成的量體搭配展示吧台，讓參與者有最直接新鮮的咖啡體驗及空間印象。"
  },
  {
    id: "nike-campaign",
    title: "NIKE CAMPAIGN 2020-2021 全省店點櫥窗",
    client: "NIKE",
    year: "2020–2021",
    category: "commercial",
    cover: "img/05-nike-1.jpg",
    images: ["img/05-nike-1.jpg", "img/05-nike-2.jpg", "img/05-nike-3.jpg"],
    role: "各鞋款檔期道具製作、特殊道具、木作、鐵工發包",
    desc: "NIKE 全省店點櫥窗陳列與平面製作物，涵蓋 FREAK 3、LEBRON 18、KYRIE INFINITY、PG6、G.T. CUT 等多款旗艦鞋款檔期道具。從貼紙圖組、鞋墊道具到試穿體驗區，特殊道具結合木作與鐵工發包，將品牌運動基因轉化為店點視覺焦點。"
  },
  {
    id: "edwonder",
    title: "EDWONDER POP-UP STORE 2021",
    client: "EDWONDER",
    year: "2021",
    category: "pop-up",
    cover: "img/edwonder-01.jpg",
    images: ["img/edwonder-01.jpg", "img/edwonder-02.jpg", "img/edwonder-03.jpg", "img/edwonder-04.jpg"],
    role: "空間結構配置、創意發想、建物結構",
    desc: "WONDERFOOL 快閃迷宮，用感官尋走迷宮，其靈感來源於 WONDERFOOL 成長體驗，展區主要分為 3 個區域：EXPLORE 探索認知區、DARE 勇敢摸索區、WONDER 理想前行區。每個區域都建立於 EDWONDER 品牌精神，包含 EXPLORE 探索、DARE 勇敢、WONDER 好奇，並利用迷宮的形式來展現在人生成長階段中的未知和驚喜。"
  },
  {
    id: "edelweiss",
    title: "EDELWEISS 2022 新品發表快閃店",
    client: "EDELWEISS",
    year: "2022",
    category: "pop-up",
    cover: "img/02-edw-1.jpg",
    images: ["img/02-edw-1.jpg", "img/02-edw-2.jpg", "img/02-edw-3.jpg", "img/02-edw-4.jpg"],
    role: "空間結構配置、創意發想、平面輸出",
    desc: "位於信義 A11，設計概念利用圓弧形結構搭配草皮花卉及異材質，讓來體驗民眾彷彿置身於阿爾卑斯山腳下，同時呼應品牌高端、純淨清爽及主打女性客群的要點。探索、試飲、發現——讓我們一起來場 EDELWEISS 阿爾卑斯之旅。"
  },
  {
    id: "my-probiotic",
    title: "MY 樂酵素益生菌 包裝與 LOGO 設計",
    client: "MY 樂酵素",
    year: "2022",
    category: "graphic-design",
    cover: "img/my-probiotic-box.jpg",
    images: ["img/my-probiotic-box.jpg", "img/my-probiotic-spread.jpg", "img/my-probiotic-logo.jpg"],
    role: "LOGO 發想、包裝設計",
    desc: "包裝及 LOGO 的發想皆以腸道設計做延伸，LOGO 融入品牌所想帶來的 MY LOVE 以及溫暖親情感。包裝視覺以酵素擴散的手法，帶入酵素益生菌的體內環保意象，將產品功效轉化為具感染力的視覺語言。"
  },
  {
    id: "dayong-jixiangdao",
    title: "達永建設 吉祥道",
    client: "達永建設",
    year: "2024",
    category: "commercial",
    cover: "img/10-jixiangdao-01.jpg",
    images: ["img/10-jixiangdao-01.jpg", "img/10-jixiangdao-02.jpg", "img/10-jixiangdao-03.jpg", "img/10-jixiangdao-04.jpg"],
    role: "設計主管 · 接待中心空間設計",
    desc: "以「橘」與「吉」同音為核心，規劃達永建設接待中心。明亮空間融入溫暖橘色調、復古霓虹燈與綠意植栽，打造舒適有趣的體驗場域。入口天井懸掛互動式橘色圓球，輕拉即可彈跳，象徵好運從天而降；橘色小沙發、七彩地毯與錯落樹木，陽光灑落，營造讓人流連忘返的午後氛圍。"
  },
  {
    id: "101-circus",
    title: "TAIPEI 101 馬戲團奇幻之夜",
    client: "TAIPEI 101",
    year: "2025",
    category: "brand-event",
    cover: "img/101-circus-01.jpg",
    images: ["img/101-circus-01.jpg", "img/101-circus-02.jpg", "img/101-circus-03.jpg", "img/101-circus-04.jpg", "img/101-circus-05.jpg"],
    role: "設計主管 · 空間設計主導",
    desc: "靈感源自巡迴馬戲團的奇幻氛圍，步入場景彷彿走進一座正在上演的節慶舞台。燈光亮起時，動物們歡快穿梭在華麗的旋轉木馬之間，旋轉木馬緩緩轉動，如夢似幻的視覺焦點層層展開。洋溢熱鬧又浪漫的節慶氣息，呈現夢想與希望交織的奇幻時刻。"
  }
];
