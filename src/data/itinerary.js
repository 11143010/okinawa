export const itineraryData = [
  {
    day: 'Day 1-2',
    title: '北部山原森林生態探索',
    desc: '那霸出發前往國頭，本段以自然景觀為主。',
    mapQuery: 'Okinawa+Kunigami',
    route: {
      start: '那霸機場',
      end: '名護/國頭',
      distance: '約 105-130 km',
      driveTime: '約 2.5-3.5 小時',
      expressway: '那霸 IC → 許田 IC',
      parkingTip: '熱門景點建議 10:00 前抵達'
    },
    spots: [
      { name: '大石林山', mapcode: '728 675 895*56', address: '沖縄県国頭郡国頭村宜名真1241', note: '喀斯特地形步道。', icon: 'fa-mountain' },
      { name: '邊戶岬', mapcode: '728 737 180*28', address: '沖縄県国頭郡国頭村辺戸', note: '本島最北端。', icon: 'fa-water' },
      { name: '古宇利島', mapcode: '485 751 179', address: '沖縄県国頭郡今帰仁村古宇利', note: '古宇利藍海景。', icon: 'fa-heart' }
    ],
    foods: [
      { name: '幸ちゃんそば', area: '名護', type: '沖繩麵', note: '長途駕駛後補給' },
      { name: '百年古家 大家', area: '名護', type: '阿古豬', note: '晚餐建議訂位' }
    ]
  },
  {
    day: 'Day 3-4',
    title: '本部與中部海岸',
    desc: '水族館、恩納海岸與美國村。',
    mapQuery: 'Okinawa+American+Village',
    route: {
      start: '本部',
      end: '恩納/北谷',
      distance: '約 80 km',
      driveTime: '約 2 小時',
      expressway: '國道 58 海線',
      parkingTip: '美國村日落時段易客滿'
    },
    spots: [
      { name: '沖繩美麗海水族館', mapcode: '553 075 797*74', address: '沖縄県国頭郡本部町石川424', note: '黑潮大水槽。', icon: 'fa-fish' },
      { name: '萬座毛', mapcode: '206 312 038*55', address: '沖縄県国頭郡恩納村恩納2767', note: '象鼻岩地標。', icon: 'fa-camera' },
      { name: '美國村', mapcode: '33 526 450*63', address: '沖縄県中頭郡北谷町美浜', note: '夕陽夜景與購物。', icon: 'fa-store' }
    ],
    foods: [
      { name: '琉球の牛', area: '北谷/恩納', type: '燒肉', note: '石垣牛熱門店' },
      { name: '浜屋そば', area: '北谷', type: '沖繩麵', note: '午餐效率高' }
    ]
  }
]

export const famousFoods = ['豬肉蛋飯糰', '第一牧志公設市場', '岸本食堂', '浜屋そば', '琉球の牛', 'Blue Seal']
export const famousSpots = ['大石林山', '古宇利大橋', '沖繩美麗海水族館', '萬座毛', '美國村', '首里城', '瀨長島']
