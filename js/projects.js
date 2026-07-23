const projects = [
  {
    id: "bmw-the1",
    title: "BMW THE 1 有種不同特展",
    client: "BMW",
    year: "2018",
    category: "exhibition",
    cover: "img/01-bmw-the1.jpg",
    images: ["img/01-bmw-the1.jpg"],
    role: "空間配置、建物結構、製作物",
    desc: "有別於傳統車展形式，將展區外部設計為街道與馬路，利用造型地毯將動線延伸至展車區。內區以自動倒車、6色光影飾板、智能語音控制及HUD抬頭顯示器為主題，結合互動體驗與社群分享，兼具展車與展覽功能。"
  },
  {
    id: "edelweiss",
    title: "EDELWEISS 阿爾卑斯快閃店",
    client: "EDELWEISS",
    year: "2019",
    category: "pop-up",
    cover: "img/02-edelweiss.jpg",
    images: ["img/02-edelweiss.jpg"],
    role: "空間結構配置、創意發想、平面輸出",
    desc: "位於信義 A11，以圓弧形結構搭配草皮花卉及異材質，讓民眾彷彿置身阿爾卑斯山腳下，呼應品牌高端、純淨清爽及主打女性客群的定位。探索、試飲、發現——一場完整的感官旅程。"
  },
  {
    id: "tatler-ball",
    title: "TAIWAN TATLER BALL 十週年",
    client: "TAIWAN TATLER",
    year: "2019",
    category: "brand-event",
    cover: "img/03-tatler.jpg",
    images: ["img/03-tatler.jpg"],
    role: "舞台視覺發想、分區配置、結構配置",
    desc: "舉辦於文華東方，以紅金主視覺為核心，運用 LYCRA 帆布的伸縮特性與矩形 TRUSS 延展固定，每面均可投射特定畫面或賦予燈光變幻色彩，以有機流線詮釋奔放熱情與歡慶意象。"
  },
  {
    id: "bellavita-desert",
    title: "BELLAVITA 沙漠市集",
    client: "BELLAVITA 寶麗廣場",
    year: "2023",
    category: "brand-event",
    cover: "img/04-bellavita-desert.jpg",
    images: ["img/04-bellavita-desert.jpg"],
    role: "設計主管 · 空間規劃與執行主導",
    desc: "歷時半年籌備，於 BELLAVITA 中庭磅礡打造北非沙漠市集。夢幻吊燈、波斯地毯、香料販子、手工編織藝品與雙峰駱駝現蹤，原貌呈現異國風情。晝夜皆美——白天的光影在牆面與地毯舞動，夜晚點燈展現市集神祕迷人的面貌。"
  },
  {
    id: "101-fairytale",
    title: "TAIPEI 101 耶誕童話王國",
    client: "TAIPEI 101",
    year: "2023",
    category: "brand-event",
    cover: "img/05-101-fairytale.jpg",
    images: ["img/05-101-fairytale.jpg"],
    role: "設計主管 · 全區規劃統籌",
    desc: "從 101 購物中心外圍光廊與夢幻馬車，到 1F 諾貝松森林、4F 童話王國與 89F 希望之境，全區超過 600 米範圍。莓粉與香檳色花瀑鋪天蓋地渲染浪漫光亭，長頸鹿守護月光寶座，旋轉木馬與薑餅人交織出大人小孩都捨不得離開的樂園。"
  },
  {
    id: "bellavita-ice-lake",
    title: "BELLAVITA 冰湖仙境玻璃屋",
    client: "BELLAVITA 寶麗廣場",
    year: "2024",
    category: "brand-event",
    cover: "img/06-bellavita-ice.jpg",
    images: ["img/06-bellavita-ice.jpg"],
    role: "設計主管 · 空間設計主導",
    desc: "精緻刻劃森林冰湖冬景，三座玻璃屋各具角色：綠意溫室、溫暖休憩小屋與頂級晚宴廳。壁爐火光、諾貝松、松果與金色燭台散發節慶氣息。透過落地玻璃窗欣賞雪花飄落，雀鳥、馴鹿、雪兔與白熊穿梭其間，心靈也感到平靜與幸福。"
  },
  {
    id: "bellavita-feast",
    title: "BELLAVITA 聖誕饗宴",
    client: "BELLAVITA 寶麗廣場",
    year: "2025",
    category: "brand-event",
    cover: "img/07-bellavita-feast.jpg",
    images: ["img/07-bellavita-feast.jpg"],
    role: "設計主管 · 創意發想與執行主導",
    desc: "踏入的瞬間，彷彿化身成微小旅人，不小心闖入一張為巨型小熊準備的盛大餐桌。金黃酥香的麵包宛如冬日山丘，糖霜餅乾如閃亮雪石，甜甜圈與蛋糕延展成層層甜蜜的桌景。超現實比例下的視覺語彙，展現奇幻的節日魅力。"
  },
  {
    id: "101-circus",
    title: "TAIPEI 101 馬戲團奇幻之夜",
    client: "TAIPEI 101",
    year: "2025",
    category: "brand-event",
    cover: "img/08-101-circus.jpg",
    images: ["img/08-101-circus.jpg"],
    role: "設計主管 · 空間設計主導",
    desc: "靈感源自巡迴馬戲團的奇幻氛圍，步入場景彷彿走進一座正在上演的節慶舞台。燈光亮起時，動物們歡快穿梭在華麗的旋轉木馬之間，隨著光影與節奏輕盈移動。洋溢熱鬧又浪漫的節慶氣息，呈現夢想與希望交織的奇幻時刻。"
  },
  {
    id: "101-masterpiece",
    title: "TAIPEI 101 WORLD MASTERPIECE 珠寶腕錶大賞",
    client: "TAIPEI 101",
    year: "2024",
    category: "brand-event",
    cover: "img/09-101-masterpiece.jpg",
    images: ["img/09-101-masterpiece.jpg"],
    role: "設計主管 · 展場設計主導",
    desc: "一年一度的頂級珠寶腕錶大賞。主視覺布幔採用各種濃淡橘色調垂布搭配流線型燈藝，呈現金橘富麗之美以及時光流逝之感。花卉植景巧妙呼應鐘錶臻品，聚焦於展品獨特風格，驚艷演繹時序之美。"
  },
  {
    id: "dayong-jixiangdao",
    title: "達永建設 吉祥道",
    client: "達永建設",
    year: "2024",
    category: "commercial",
    cover: "img/10-jixiangdao.jpg",
    images: ["img/10-jixiangdao.jpg"],
    role: "設計主管 · 接待中心空間設計",
    desc: "以「吉祥道」為主題規劃接待中心。取「橘」和「吉」的同音字，將互動式橘色圓球懸掛天井，輕輕拉動即營造橘球在空中彈跳的活潑可愛感。橘色小沙發、七彩草地毯與錯落樹木，陽光自天井撒下穿過樹梢，讓人忍不住待上整個下午。"
  },
  {
    id: "vivo-light-journey",
    title: "VIVO 輕境漫遊所",
    client: "VIVO",
    year: "2025",
    category: "brand-event",
    cover: "img/11-vivo.jpg",
    images: ["img/11-vivo.jpg"],
    role: "設計主管 · 空間設計主導",
    desc: "於 BELLAVITA 打造限時四日的療癒秘境。「輕境亭」、「花漾散策」、「微距斑斕」、「長焦瞭望台」、「無憂回憶」五大展區，在藍白交織的夏日場景中展開。清透色調如冰沙沁入心脾，陽光輕灑在水果小攤，柑橘香氣隨風飄蕩。"
  },
  {
    id: "jiaguilin-urban-garden",
    title: "甲桂林廣告 Urban Garden",
    client: "甲桂林廣告",
    year: "2026",
    category: "commercial",
    cover: "img/12-urban-garden.jpg",
    images: ["img/12-urban-garden.jpg"],
    role: "設計主管 · 商空設計主導",
    desc: "「把自然，帶回日常。」將自然延伸至城市高空，以層次豐富的植栽、舒適的休憩空間與開闊的視野，創造人與環境、人與人之間的連結。Urban Garden 不只是景觀設計，更是一種重視健康、永續與生活品質的空間理念。"
  },
  {
    id: "my-probiotic",
    title: "MY 樂酵素益生菌 包裝與 LOGO 設計",
    client: "MY 樂酵素",
    year: "2022",
    category: "graphic-design",
    cover: "",
    images: [],
    role: "LOGO 發想、包裝設計",
    desc: "包裝及 LOGO 的發想皆以腸道設計做延伸，LOGO 融入品牌所想帶來的 MY LOVE 以及溫暖親情感。包裝視覺以酵素擴散的手法，帶入酵素益生菌的體內環保意象，將產品功效轉化為具感染力的視覺語言。"
  }
];
