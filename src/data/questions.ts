export interface Option {
  text: string;
  type: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
}

export interface Question {
  id: number;
  text: string;
  options: [Option, Option];
}

export const questions: Question[] = [
  { id: 1, text: "清晨睁开眼，你觉得空气的颜色是？", options: [{ text: "剔透的群青色", type: "N" }, { text: "浑浊的米白色", type: "S" }] },
  { id: 2, text: "走在熟悉的街道上，你会习惯性看哪里？", options: [{ text: "延伸到远方的电线杆", type: "N" }, { text: "脚下枯萎或新生的草木", type: "S" }] },
  { id: 3, text: "突然下起了阵雨，你没有带伞，你会：", options: [{ text: "索性淋湿，感受雨滴的节奏", type: "P" }, { text: "站在屋檐下，看雨幕把世界模糊", type: "J" }] },
  { id: 4, text: "街角那间旧唱片店在播放音乐，你希望那是：", options: [{ text: "激烈的扫弦电吉他", type: "E" }, { text: "干净的木吉他或钢琴", type: "I" }] },
  { id: 5, text: "如果有一辆通往“过去”的巴士，你会：", options: [{ text: "毫不犹豫地跳上去", type: "P" }, { text: "在车站目送它离开", type: "J" }] },
  { id: 6, text: "在人群拥挤的祭典上，你的心情更接近：", options: [{ text: "想要融入喧嚣的热烈", type: "E" }, { text: "戴上耳机寻找的静谧", type: "I" }] },
  { id: 7, text: "评价一首曲子时，你更看重：", options: [{ text: "精密的编曲与逻辑", type: "T" }, { text: "歌词传达的某种情绪", type: "F" }] },
  { id: 8, text: "当被问及“幸福是什么”，你的第一反应是：", options: [{ text: "一种可以被描述的画面", type: "F" }, { text: "一个需要被定义的逻辑", type: "T" }] },
  { id: 9, text: "比起“永恒”，你觉得更美的是：", options: [{ text: "瞬间的迸发（如烟火）", type: "T" }, { text: "漫长的余韵（如夕阳）", type: "F" }] },
  { id: 10, text: "在陌生的城市迷路了，你会：", options: [{ text: "主动询问路人方向", type: "E" }, { text: "低头看地图自己研究", type: "I" }] },
  { id: 11, text: "你的书桌通常呈现出什么状态？", options: [{ text: "随性的堆叠，随用随拿", type: "P" }, { text: "分门别类，井然有序", type: "J" }] },
  { id: 12, text: "看电影时，你更容易被哪种情节打动？", options: [{ text: "反转烧脑的精密剧情", type: "N" }, { text: "质朴真诚的生活片段", type: "S" }] },
  { id: 13, text: "面对他人的烦恼，你习惯先给予：", options: [{ text: "解决问题的方案", type: "T" }, { text: "情感上的共鸣", type: "F" }] },
  { id: 14, text: "如果人生是一场旅行，你更喜欢：", options: [{ text: "随遇而安，没有目的地", type: "P" }, { text: "列好清单，按计划执行", type: "J" }] },
  { id: 15, text: "在团队中，你更倾向于：", options: [{ text: "站在前方表达观点", type: "E" }, { text: "在后方完善细节逻辑", type: "I" }] },
  { id: 16, text: "关于“夏天”，你脑海中浮现的第一物象是：", options: [{ text: "冰块撞击杯壁的清脆", type: "T" }, { text: "蝉鸣中消失的背影", type: "F" }] },
  { id: 17, text: "你相信“第六感”吗？", options: [{ text: "它是某种未被解析的预感", type: "N" }, { text: "它不如证据和经验可靠", type: "S" }] },
  { id: 18, text: "当截止日期（Deadline）临近，你会：", options: [{ text: "最后一刻爆发潜能", type: "P" }, { text: "提前分配好每天的任务", type: "J" }] },
  { id: 19, text: "参加聚会后，你的电量状态是：", options: [{ text: "充满了能量，心情亢奋", type: "E" }, { text: "感到疲惫，需要独处充电", type: "I" }] },
  { id: 20, text: "阅读小说时，你更在意：", options: [{ text: "故事背后蕴含的隐喻", type: "N" }, { text: "细节描写是否真实写实", type: "S" }] },
  { id: 21, text: "被误解时，你的第一反应是：", options: [{ text: "列举事实进行澄清", type: "T" }, { text: "感到难过或自我怀疑", type: "F" }] },
  { id: 22, text: "你更喜欢的色彩风格是：", options: [{ text: "对比强烈的纯色", type: "T" }, { text: "柔和过渡的低饱和色", type: "F" }] },
  { id: 23, text: "独自一人时，你通常在：", options: [{ text: "思考未来的各种可能性", type: "I" }, { text: "寻找有趣的事情去做", type: "E" }] },
  { id: 24, text: "你会为了“情怀”买单吗？", options: [{ text: "很少，看重实用价值", type: "T" }, { text: "经常，容易被故事打动", type: "F" }] },
  { id: 25, text: "对于未知的挑战，你的心态是：", options: [{ text: "先做了再说，边走边看", type: "E" }, { text: "先观察评估，做足准备", type: "I" }] }
];