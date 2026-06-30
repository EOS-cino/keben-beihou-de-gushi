// Seasonal lesson recommendations
// Maps seasonal periods to lesson slugs

export interface SeasonalEntry {
  slug: string;
  reason: string;
}

export interface SeasonalPeriod {
  name: string;
  emoji: string;
  // Month (1-12) and day (1-31) range
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  lessons: SeasonalEntry[];
}

export const seasonalPeriods: SeasonalPeriod[] = [
  {
    name: "春季开学",
    emoji: "🌸",
    startMonth: 2,
    startDay: 20,
    endMonth: 3,
    endDay: 15,
    lessons: [
      { slug: "daqingshu-xia-de-xiaoxue", reason: "新学期新同学，感受校园的温暖" },
      { slug: "zhaozhoushe", reason: "开学第一课，探索古老智慧" },
      { slug: "xiao-ma-guo-he", reason: "勇敢尝试，不怕困难" },
    ],
  },
  {
    name: "清明时节",
    emoji: "🌿",
    startMonth: 4,
    startDay: 1,
    endMonth: 4,
    endDay: 10,
    lessons: [
      { slug: "qingming", reason: "清明节的由来与习俗" },
      { slug: "lianglve-de-yugou", reason: "缅怀先烈，珍惜当下" },
    ],
  },
  {
    name: "春日阅读",
    emoji: "🌷",
    startMonth: 3,
    startDay: 16,
    endMonth: 5,
    endDay: 31,
    lessons: [
      { slug: "chun-xiao", reason: "春眠不觉晓，感受春日清晨" },
      { slug: "caoyuan", reason: "春风吹过草原，万物生长" },
      { slug: "yanshu-ye-hua", reason: "发现身边的自然之美" },
    ],
  },
  {
    name: "端午节",
    emoji: "🐉",
    startMonth: 5,
    startDay: 25,
    endMonth: 6,
    endDay: 10,
    lessons: [
      { slug: "duanwujie", reason: "端午粽飘香，了解屈原的故事" },
    ],
  },
  {
    name: "暑期阅读",
    emoji: "☀️",
    startMonth: 7,
    startDay: 1,
    endMonth: 8,
    endDay: 31,
    lessons: [
      { slug: "huangshan-qishi", reason: "暑假游黄山，看奇石怪松" },
      { slug: "furao-de-xisha-qundao", reason: "探索大海的秘密" },
      { slug: "guanlanglang-mingshanshu", reason: "读万卷书，行万里路" },
    ],
  },
  {
    name: "秋季开学",
    emoji: "🍂",
    startMonth: 9,
    startDay: 1,
    endMonth: 9,
    endDay: 20,
    lessons: [
      { slug: "daqingshu-xia-de-xiaoxue", reason: "新学期开始，认识新同学" },
      { slug: "leifeng-shushu", reason: "学习雷锋好榜样" },
      { slug: "huangshan-qishi", reason: "秋高气爽，登山赏景" },
    ],
  },
  {
    name: "中秋节",
    emoji: "🌕",
    startMonth: 9,
    startDay: 21,
    endMonth: 10,
    endDay: 6,
    lessons: [
      { slug: "jingyesi", reason: "月圆人团圆，诗仙的思乡之情" },
      { slug: "chang-e", reason: "嫦娥奔月，中秋传说" },
      { slug: "wang-tianmenshan", reason: "中秋赏月，诗中有画" },
    ],
  },
  {
    name: "国庆节",
    emoji: "🇨🇳",
    startMonth: 9,
    startDay: 28,
    endMonth: 10,
    endDay: 8,
    lessons: [
      { slug: "qilv-changzheng", reason: "红军不怕远征难" },
      { slug: "langyashan-wuzhuangshi", reason: "铭记英雄，热爱祖国" },
      { slug: "wei-zhonghua-jueqi-er-dushu", reason: "为中华之崛起而读书" },
    ],
  },
  {
    name: "冬日阅读",
    emoji: "❄️",
    startMonth: 11,
    startDay: 1,
    endMonth: 2,
    endDay: 19,
    lessons: [
      { slug: "meihua", reason: "墙角数枝梅，凌寒独自开" },
      { slug: "congcong", reason: "时光匆匆，珍惜岁月" },
      { slug: "xue-hai", reason: "雪地里的故事" },
    ],
  },
  {
    name: "春节",
    emoji: "🧧",
    startMonth: 1,
    startDay: 20,
    endMonth: 2,
    endDay: 19,
    lessons: [
      { slug: "beijing-de-chunjie", reason: "老北京的春节风俗" },
      { slug: "laobeijing-de-chunjie", reason: "感受传统年味" },
      { slug: "chuantong-jieri", reason: "了解传统节日文化" },
    ],
  },
];

export function getCurrentSeasonal(date: Date = new Date()): SeasonalPeriod | null {
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate();

  for (const period of seasonalPeriods) {
    const startVal = period.startMonth * 100 + period.startDay;
    const endVal = period.endMonth * 100 + period.endDay;
    const curVal = month * 100 + day;

    if (startVal <= endVal) {
      if (curVal >= startVal && curVal <= endVal) return period;
    } else {
      // Wraps around year boundary (e.g., Nov 1 - Feb 19)
      if (curVal >= startVal || curVal <= endVal) return period;
    }
  }
  return null;
}

// Get fallback lessons for when no seasonal period matches
export const fallbackSeasonal: SeasonalEntry[] = [
  { slug: "jingyesi", reason: "经典古诗，四季皆宜" },
  { slug: "shaonian-runtu", reason: "少年闰土，经典中的经典" },
  { slug: "caoyuan", reason: "草原风光，心旷神怡" },
];
