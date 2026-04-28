export const itineraryData = [
  {
    day: 'Day 1',
    title: '北部山原自然路線（那霸 → 國頭）',
    desc: '第一天拉長車程直上北部，先打完最遠點。',
    mapQuery: 'Okinawa+Kunigami',
    route: {
      start: '那霸機場',
      end: '國頭/名護住宿區',
      distance: '約 105-130 km',
      driveTime: '約 2.5-3.5 小時',
      expressway: '那霸 IC → 許田 IC → 國道 58',
      parkingTip: '北部景點停車較容易，熱門時段仍建議早到'
    },
    spots: [
      { name: '大石林山', mapcode: '728 675 895*56', address: '沖縄県国頭郡国頭村宜名真1241', note: '神話感喀斯特地形步道。', icon: 'fa-mountain', image: 'https://picsum.photos/seed/okinawa-daishilinzan/900/520' },
      { name: '邊戶岬', mapcode: '728 737 180*28', address: '沖縄県国頭郡国頭村辺戸', note: '沖繩本島最北端海岬。', icon: 'fa-water', image: 'https://picsum.photos/seed/okinawa-hedomisaki/900/520' },
      { name: '茅打バンタ', mapcode: '728 736 335*60', address: '沖縄県国頭郡国頭村宜名真', note: '高崖看海，風勢強。', icon: 'fa-wind', image: 'https://picsum.photos/seed/okinawa-kayauchi/900/520' }
    ],
    foods: [
      { name: '幸ちゃんそば', area: '名護', type: '沖繩麵', note: '長途開車後補給首選' },
      { name: '百年古家 大家', area: '名護', type: '阿古豬', note: '古民家氛圍，建議預約' }
    ],
    timeline: [
      { time: '08:30', activity: '那霸機場取車', note: '確認 ETC、保險與導航語言設定' },
      { time: '09:30', activity: '上高速北上', note: '那霸 IC → 許田 IC，途中可在休息站補給' },
      { time: '12:00', activity: '名護午餐', note: '幸ちゃんそば，預留 45 分鐘' },
      { time: '13:30', activity: '大石林山健行', note: '步道約 60-90 分鐘，注意補水' },
      { time: '16:00', activity: '邊戶岬 / 茅打バンタ', note: '拍照 + 觀景約 45-60 分鐘' },
      { time: '18:30', activity: '名護晚餐與入住', note: '百年古家 大家用餐，晚間休息' }
    ]
  },
  {
    day: 'Day 2',
    title: '今歸仁・古宇利島海景日',
    desc: '海景橋與古城遺跡，可安排拍照與咖啡慢遊。',
    mapQuery: 'Okinawa+Kouri+Bridge',
    route: {
      start: '名護',
      end: '本部/今歸仁',
      distance: '約 45-70 km',
      driveTime: '約 1.5-2 小時',
      expressway: '以一般道路為主',
      parkingTip: '古宇利島周邊小停車場中午後易滿'
    },
    spots: [
      { name: '今歸仁城跡', mapcode: '553 081 414*52', address: '沖縄県国頭郡今帰仁村今泊5101', note: '世界遺產古城牆。', icon: 'fa-landmark', image: 'https://picsum.photos/seed/okinawa-nakijin/900/520' },
      { name: '古宇利大橋', mapcode: '485 601 893*35', address: '沖縄県国頭郡今帰仁村古宇利', note: '沖繩經典跨海大橋。', icon: 'fa-road-bridge', image: 'https://picsum.photos/seed/okinawa-kouri-bridge/900/520' },
      { name: '心形岩（ティーヌ浜）', mapcode: '485 693 573*61', address: '沖縄県国頭郡今帰仁村古宇利', note: '熱門拍照點，須步行下坡。', icon: 'fa-heart', image: 'https://picsum.photos/seed/okinawa-heartrock/900/520' }
    ],
    foods: [
      { name: '蝦蝦飯（Shrimp Wagon）', area: '古宇利島', type: '海景輕食', note: '橋頭附近人氣餐車' },
      { name: 'On the Beach CAFE', area: '今歸仁', type: '咖啡甜點', note: '海景休息站' }
    ],
    timeline: [
      { time: '09:00', activity: '名護出發', note: '先走內陸避開橋邊停車尖峰' },
      { time: '09:40', activity: '今歸仁城跡', note: '參觀約 60 分鐘，含展區步行' },
      { time: '11:30', activity: '古宇利大橋 + 心形岩', note: '兩點合計約 90 分鐘' },
      { time: '13:30', activity: '古宇利島午餐', note: '蝦蝦飯，夏季排隊建議早到' },
      { time: '15:30', activity: '海景咖啡休息', note: 'On the Beach CAFE' },
      { time: '18:00', activity: '返回住宿', note: '晚餐可就近安排在今歸仁/本部' }
    ]
  },
  {
    day: 'Day 3-4',
    title: '本部水族館 + 恩納海岸 + 北谷夜景',
    desc: '北部代表景點跑完後向中部移動。',
    mapQuery: 'Okinawa+American+Village',
    route: {
      start: '本部',
      end: '恩納/北谷',
      distance: '約 80-100 km',
      driveTime: '約 2-3 小時',
      expressway: '國道 58 海線或高速分段',
      parkingTip: '美國村 17:00 後停車位競爭激烈'
    },
    spots: [
      { name: '沖繩美麗海水族館', mapcode: '553 075 797*74', address: '沖縄県国頭郡本部町石川424', note: '黑潮大水槽必看。', icon: 'fa-fish', image: 'https://picsum.photos/seed/okinawa-churaumi/900/520' },
      { name: '備瀨福木林道', mapcode: '553 106 503*11', address: '沖縄県国頭郡本部町備瀬389', note: '綠色隧道慢遊。', icon: 'fa-tree', image: 'https://picsum.photos/seed/okinawa-bise/900/520' },
      { name: '萬座毛', mapcode: '206 312 038*55', address: '沖縄県国頭郡恩納村恩納2767', note: '象鼻岩經典地標。', icon: 'fa-camera', image: 'https://picsum.photos/seed/okinawa-manzamo/900/520' },
      { name: '美國村', mapcode: '33 526 450*63', address: '沖縄県中頭郡北谷町美浜', note: '夜景與購物集中區。', icon: 'fa-store', image: 'https://picsum.photos/seed/okinawa-american-village/900/520' }
    ],
    foods: [
      { name: '岸本食堂', area: '本部町', type: '沖繩麵', note: '老字號名店' },
      { name: '琉球の牛', area: '恩納/北谷', type: '燒肉', note: '建議先預約' },
      { name: '浜屋そば', area: '北谷', type: '沖繩麵', note: '美國村周邊效率高' }
    ],
    timeline: [
      { time: '08:30', activity: '美麗海水族館', note: '開館即入場可避開人潮，停 P7' },
      { time: '11:30', activity: '岸本食堂午餐', note: '熱門時段建議提前到店' },
      { time: '13:30', activity: '備瀨福木林道', note: '散策 + 單車約 60 分鐘' },
      { time: '15:30', activity: '萬座毛', note: '停留 45 分鐘，拍照觀景' },
      { time: '17:30', activity: '美國村夕陽時段', note: '逛街與海邊散步' },
      { time: '19:00', activity: '琉球の牛晚餐', note: '建議預約 19:00/19:30 場次' }
    ]
  },
  {
    day: 'Day 5-6',
    title: '南部文化歷史與機場周邊海景',
    desc: '回到南部，安排歷史景點與瀨長島夕陽。',
    mapQuery: 'Okinawa+Shurijo',
    route: {
      start: '北谷/恩納',
      end: '那霸/瀨長島',
      distance: '約 45-70 km',
      driveTime: '約 1.5-2 小時',
      expressway: '58 號 + 市區道路',
      parkingTip: '首里城與瀨長島假日建議錯峰前往'
    },
    spots: [
      { name: '首里城公園', mapcode: '33 161 497*55', address: '沖縄県那覇市首里金城町1-2', note: '琉球王國歷史核心。', icon: 'fa-chess-rook', image: 'https://picsum.photos/seed/okinawa-shuri/900/520' },
      { name: '玉泉洞', mapcode: '232 495 332*50', address: '沖縄県南城市玉城前川1336', note: '鐘乳石洞避暑路線。', icon: 'fa-mountain-sun', image: 'https://picsum.photos/seed/okinawa-gyokusendo/900/520' },
      { name: '瀨長島 Umikaji Terrace', mapcode: '33 002 602*06', address: '沖縄県豊見城市瀬長174-6', note: '看飛機與日落。', icon: 'fa-plane', image: 'https://picsum.photos/seed/okinawa-senagajima/900/520' }
    ],
    foods: [
      { name: '暖暮拉麵', area: '那霸', type: '拉麵', note: '市區晚餐補給' },
      { name: '玉家そば', area: '南城', type: '沖繩麵', note: '南部行程常搭配' }
    ],
    timeline: [
      { time: '09:00', activity: '首里城公園', note: '建議上午參觀，日照較舒適' },
      { time: '11:30', activity: '玉家そば午餐', note: '南城市路線中間補給點' },
      { time: '13:00', activity: '玉泉洞', note: '洞內恆溫，停留約 90 分鐘' },
      { time: '16:30', activity: '瀨長島 Umikaji Terrace', note: '日落前到達較好拍照' },
      { time: '18:30', activity: '那霸市區晚餐', note: '暖暮拉麵或國際通周邊店家' }
    ]
  },
  {
    day: 'Day 7',
    title: '那霸市區採買與離境',
    desc: '最後一天以採購、還車、登機為主。',
    mapQuery: 'Okinawa+Kokusai+Dori',
    route: {
      start: '那霸市區',
      end: '那霸機場',
      distance: '約 10-20 km',
      driveTime: '約 30-60 分鐘',
      expressway: '不建議上高速',
      parkingTip: '機場還車旺季請至少提早 2 小時'
    },
    spots: [
      { name: '國際通', mapcode: '33 157 670*25', address: '沖縄県那覇市牧志', note: '伴手禮與藥妝集中區。', icon: 'fa-shop', image: 'https://picsum.photos/seed/okinawa-kokusai/900/520' },
      { name: '第一牧志公設市場', mapcode: '33 157 700*66', address: '沖縄県那覇市松尾2-10-1', note: '海鮮現買現煮。', icon: 'fa-fish-fins', image: 'https://picsum.photos/seed/okinawa-makishi/900/520' },
      { name: '那霸機場', mapcode: '33 002 350*24', address: '沖縄県那覇市鏡水150', note: '還車後前往出境。', icon: 'fa-plane-departure', image: 'https://picsum.photos/seed/okinawa-oka-airport/900/520' }
    ],
    foods: [
      { name: '豬肉蛋飯糰', area: '國際通/機場', type: '沖繩輕食', note: '快速補給首選' },
      { name: 'Blue Seal', area: '那霸', type: '甜點', note: '旅程收尾甜點' }
    ],
    timeline: [
      { time: '09:30', activity: '國際通採買', note: '伴手禮與藥妝集中採購' },
      { time: '11:00', activity: '牧志市場', note: '海鮮挑選 + 二樓代客料理' },
      { time: '13:30', activity: '回飯店整理行李', note: '確認護照與登機文件' },
      { time: '15:00', activity: '租車還車', note: '旺季排隊時間預留 45-60 分鐘' },
      { time: '16:30', activity: '那霸機場報到', note: '買豬肉蛋飯糰 / Blue Seal 收尾' }
    ]
  }
]

export const famousFoods = [
  '豬肉蛋飯糰',
  '第一牧志公設市場（二樓代客料理）',
  '岸本食堂',
  '浜屋そば',
  '琉球の牛',
  '百年古家 大家',
  '暖暮拉麵',
  'Blue Seal',
  '玉家そば',
  '蝦蝦飯（Shrimp Wagon）'
]

export const famousSpots = [
  '大石林山',
  '邊戶岬',
  '古宇利大橋',
  '心形岩',
  '今歸仁城跡',
  '沖繩美麗海水族館',
  '備瀨福木林道',
  '萬座毛',
  '美國村',
  '首里城公園',
  '玉泉洞',
  '瀨長島',
  '國際通',
  '第一牧志公設市場'
]
