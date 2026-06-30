export type CurriculumLesson = {
  title: string;
  type: "story" | "poem" | "culture" | "nature" | "person" | "science" | "classic" | "activity";
  currentSlug?: string;
};

export type CurriculumUnit = {
  title: string;
  lessons: CurriculumLesson[];
};

export type CurriculumVolume = {
  id: string;
  grade: string;
  volume: string;
  edition: string;
  units: CurriculumUnit[];
};

export const curriculumVolumes: CurriculumVolume[] = [
  {
    id: "g1a",
    grade: "一年级",
    volume: "上册",
    edition: "人教版/统编版 2024",
    units: [
      {
        title: "入学准备",
        lessons: [
          { title: "我上学了", type: "activity" },
          { title: "我是中国人", type: "culture" , currentSlug: "wo-shi-zhongguoren" },
          { title: "我爱我们的祖国", type: "culture" , currentSlug: "wo-ai-zuguo" },
          { title: "我是小学生", type: "activity" },
          { title: "我爱学语文", type: "activity" },
        ],
      },
      {
        title: "第一单元·识字",
        lessons: [
          { title: "天地人", type: "culture" , currentSlug: "tian-di-ren" },
          { title: "金木水火土", type: "culture" , currentSlug: "jin-mu-shui-huo-tu" },
          { title: "口耳目手足", type: "culture" , currentSlug: "kou-er-mu-shou-zu" },
          { title: "日月山川", type: "nature" , currentSlug: "ri-yue-shan-chuan" },
        ],
      },
      {
        title: "第五单元·阅读",
        lessons: [
          { title: "秋天", type: "nature" , currentSlug: "qiutian" },
          { title: "江南", type: "poem" , currentSlug: "jiangnan" },
          { title: "雪地里的小画家", type: "nature", currentSlug: "xuedi-li-de-xiaohuajia" },
          { title: "四季", type: "nature", currentSlug: "si-ji" },
        ],
      },
      {
        title: "第六单元·识字",
        lessons: [
          { title: "对韵歌", type: "culture" , currentSlug: "dui-yun-ge" },
          { title: "日月明", type: "culture" , currentSlug: "ri-yue-ming" },
          { title: "小书包", type: "activity" , currentSlug: "xiao-shubao" },
          { title: "升国旗", type: "culture" , currentSlug: "sheng-guoqi" },
        ],
      },
      {
        title: "第七单元·阅读",
        lessons: [
          { title: "小小的船", type: "poem" , currentSlug: "xiao-xiao-de-chuan" },
          { title: "影子", type: "science", currentSlug: "ying-zi" },
          { title: "两件宝", type: "activity" , currentSlug: "liang-jian-bao" },
        ],
      },
      {
        title: "第八单元·阅读",
        lessons: [
          { title: "比尾巴", type: "nature" , currentSlug: "bi-weiba" },
          { title: "乌鸦喝水", type: "story" , currentSlug: "wuya-heshui" },
          { title: "雨点儿", type: "nature" , currentSlug: "yu-dianr" },
        ],
      },
    ],
  },
  {
    id: "g1b",
    grade: "一年级",
    volume: "下册",
    edition: "人教版/统编版 2025",
    units: [
      {
        title: "第一单元·识字",
        lessons: [
          { title: "春夏秋冬", type: "nature" , currentSlug: "chun-xia-qiu-dong" },
          { title: "姓氏歌", type: "culture" , currentSlug: "xingshi-ge" },
          { title: "小青蛙", type: "nature", currentSlug: "xiao-qingwa" },
          { title: "猜字谜", type: "culture" , currentSlug: "cai-zi-mi" },
        ],
      },
      {
        title: "第二单元·阅读",
        lessons: [
          { title: "热爱中国共产党", type: "culture" , currentSlug: "reai-dang" },
          { title: "吃水不忘挖井人", type: "person" , currentSlug: "chishui-buwang-wajingren" },
          { title: "我多想去看看", type: "culture" , currentSlug: "wo-duo-xiang-qu-kankan" },
        ],
      },
      {
        title: "第三单元·阅读",
        lessons: [
          { title: "小公鸡和小鸭子", type: "story", currentSlug: "xiao-gongji-he-xiao-yaizi" },
          { title: "树和喜鹊", type: "story" , currentSlug: "shu-he-xique" },
          { title: "怎么都快乐", type: "activity" , currentSlug: "zenme-du-kuai-le" },
        ],
      },
      {
        title: "第四单元·阅读",
        lessons: [
          { title: "静夜思", type: "poem" , currentSlug: "jingyesi" },
          { title: "夜色", type: "story" , currentSlug: "yese" },
          { title: "端午粽", type: "culture", currentSlug: "duanwu-zong" },
        ],
      },
      {
        title: "第六单元·阅读",
        lessons: [
          { title: "池上", type: "poem" , currentSlug: "chishang" },
          { title: "小池", type: "poem" , currentSlug: "xiao-chi" },
          { title: "浪花", type: "nature" , currentSlug: "lang-hua" },
          { title: "荷叶圆圆", type: "nature" , currentSlug: "heye-yuanyuan" },
          { title: "要下雨了", type: "science" , currentSlug: "yao-xiayu-le" },
        ],
      },
      {
        title: "第七单元·阅读",
        lessons: [
          { title: "文具的家", type: "story" , currentSlug: "wenju-de-jia" },
          { title: "一分钟", type: "story" , currentSlug: "yi-fenzhong" },
          { title: "动物王国开大会", type: "story" , currentSlug: "dongwu-wangguo-kai-dahui" },
          { title: "小猴子下山", type: "story" , currentSlug: "xiao-houzi-xiashan" },
        ],
      },
      {
        title: "第八单元·阅读",
        lessons: [
          { title: "棉花姑娘", type: "science" , currentSlug: "mianhua-guniang" },
          { title: "咕咚", type: "story" , currentSlug: "gudong" },
          { title: "小壁虎借尾巴", type: "science" , currentSlug: "xiaobihu-jieweiba" },
        ],
      },
    ],
  },
  {
    id: "g2a",
    grade: "二年级",
    volume: "上册",
    edition: "人教版/统编版 2025",
    units: [
      {
        title: "第一单元·阅读",
        lessons: [
          { title: "小蝌蚪找妈妈", type: "science", currentSlug: "xiao-kedou-zhao-mama" },
          { title: "我是什么", type: "science" , currentSlug: "wo-shi-shenme" },
          { title: "植物妈妈有办法", type: "science" , currentSlug: "zhiwu-mama-you-banfa" },
        ],
      },
      {
        title: "第二单元·识字",
        lessons: [
          { title: "场景歌", type: "culture" , currentSlug: "changjing-ge" },
          { title: "树之歌", type: "nature" , currentSlug: "shu-zhi-ge" },
          { title: "拍手歌", type: "activity" , currentSlug: "paishou-ge" },
          { title: "田家四季歌", type: "culture" , currentSlug: "tianjia-siji-ge" },
        ],
      },
      {
        title: "第三单元·阅读",
        lessons: [
          { title: "彩虹", type: "nature", currentSlug: "caihong" },
          { title: "去外婆家", type: "story" , currentSlug: "qu-waipo-jia" },
          { title: "数星星的孩子", type: "person", currentSlug: "shu-xingxing-de-haizi" },
        ],
      },
      {
        title: "第四单元·阅读",
        lessons: [
          { title: "古诗二首", type: "poem" , currentSlug: "gushi-ershou-xia" },
          { title: "黄山奇石", type: "nature" , currentSlug: "huangshan-qishi" },
          { title: "日月潭", type: "nature" , currentSlug: "riyue-tan" },
          { title: "葡萄沟", type: "culture" , currentSlug: "putao-gou" },
        ],
      },
      {
        title: "第五单元·阅读",
        lessons: [
          { title: "坐井观天", type: "story", currentSlug: "zuo-jing-guan-tian" },
          { title: "寒号鸟", type: "story" , currentSlug: "hanhaoniao" },
          { title: "我要的是葫芦", type: "story" , currentSlug: "wo-yao-de-shi-hulu" },
        ],
      },
      {
        title: "第六单元·阅读",
        lessons: [
          { title: "八角楼上", type: "person" , currentSlug: "bajiao-lou-shang" },
          { title: "朱德的扁担", type: "person", currentSlug: "zhude-de-biandan" },
          { title: "难忘的泼水节", type: "culture", currentSlug: "nanwang-de-poshui-jie" },
          { title: "刘胡兰", type: "person" , currentSlug: "liu-hulan" },
        ],
      },
      {
        title: "第七单元·阅读",
        lessons: [
          { title: "古诗二首", type: "poem" , currentSlug: "gushi-ershou-xia" },
          { title: "雾在哪里", type: "nature" , currentSlug: "wu-zai-nali" },
          { title: "雪孩子", type: "story" , currentSlug: "xue-haizi" },
        ],
      },
      {
        title: "第八单元·阅读",
        lessons: [
          { title: "称赞", type: "story" , currentSlug: "chengzan" },
          { title: "纸船和风筝", type: "story", currentSlug: "zhichuan-he-fengzheng" },
          { title: "快乐的小河", type: "story" , currentSlug: "kuaile-de-xiaohe" },
        ],
      },
    ],
  },
  {
    id: "g2b",
    grade: "二年级",
    volume: "下册",
    edition: "人教版/统编版 2026",
    units: [
      {
        title: "第一单元",
        lessons: [
          { title: "咏柳", type: "poem", currentSlug: "yong-liu" },
          { title: "村居", type: "poem" , currentSlug: "cun-ju" },
          { title: "找春天", type: "nature" , currentSlug: "zhao-chuntian" },
          { title: "开满鲜花的小路", type: "story" , currentSlug: "kaiman-xianhua-de-xiaolu" },
          { title: "邓小平爷爷植树", type: "person" , currentSlug: "dengxiaoping-yeye-zhishu" },
        ],
      },
      {
        title: "第二单元",
        lessons: [
          { title: "雷锋叔叔，你在哪里", type: "person", currentSlug: "leifeng-shushu" },
          { title: "千人糕", type: "culture" , currentSlug: "qianren-gao" },
          { title: "我不是最弱小的", type: "story" , currentSlug: "wo-bushi-zuiruo-de" },
        ],
      },
      {
        title: "第三单元",
        lessons: [
          { title: "神州谣", type: "culture", currentSlug: "shenzhou-yao" },
          { title: "传统节日", type: "culture" , currentSlug: "chuantong-jieri" },
          { title: "“贝”的故事", type: "culture" , currentSlug: "bei-de-gu-shi" },
          { title: "中国美食", type: "culture" , currentSlug: "zhongguo-meishi" },
        ],
      },
      {
        title: "第四单元",
        lessons: [
          { title: "彩色的梦", type: "story" , currentSlug: "caise-de-meng" },
          { title: "一匹出色的马", type: "story" , currentSlug: "yipi-chuse-de-ma" },
          { title: "枫树上的喜鹊", type: "story" , currentSlug: "fengshu-shang-de-xique" },
        ],
      },
      {
        title: "第五单元",
        lessons: [
          { title: "亡羊补牢", type: "story", currentSlug: "wang-yang-bu-lao" },
          { title: "揠苗助长", type: "story", currentSlug: "ya-miao-zhu-zhang" },
          { title: "画杨桃", type: "story" , currentSlug: "hua-yangtao" },
          { title: "小马过河", type: "story", currentSlug: "xiao-ma-guo-he" },
        ],
      },
      {
        title: "第六单元",
        lessons: [
          { title: "绝句", type: "poem" , currentSlug: "jue-ju" },
          { title: "晓出净慈寺送林子方", type: "poem" , currentSlug: "xiaochu-jingcisi" },
          { title: "雷雨", type: "nature" , currentSlug: "leiyu" },
          { title: "要是你在野外迷了路", type: "science" , currentSlug: "yaoshi-ni-zai-yewai-mi-le-lu" },
          { title: "太空生活趣事多", type: "science" , currentSlug: "taikong-shenghuo-qushiduo" },
        ],
      },
      {
        title: "第七单元",
        lessons: [
          { title: "大象的耳朵", type: "story" , currentSlug: "daxiang-de-erduo" },
          { title: "蜘蛛开店", type: "story" , currentSlug: "zhizhu-kaidian" },
          { title: "青蛙卖泥塘", type: "story" , currentSlug: "qingwa-mai-nitang" },
          { title: "小毛虫", type: "story" , currentSlug: "xiao-maochong" },
        ],
      },
      {
        title: "第八单元",
        lessons: [
          { title: "羿射九日", type: "classic" , currentSlug: "yi-she-jiri" },
          { title: "黄帝的传说", type: "classic" , currentSlug: "huangdi-de-chuanshuo" },
          { title: "大禹治水", type: "classic" , currentSlug: "dayu-zhishui" },
        ],
      },
    ],
  },
  {
    id: "g3a",
    grade: "三年级",
    volume: "上册",
    edition: "人教版/统编版",
    units: [
      { title: "第一单元", lessons: [{ title: "大青树下的小学", type: "culture", currentSlug: "daqingshu-xia-de-xiaoxue" }, { title: "花的学校", type: "story", currentSlug: "hua-de-xuexiao" }, { title: "不懂就要问", type: "person" , currentSlug: "budong-jiuyao-wen" }] },
      { title: "第二单元", lessons: [{ title: "古诗三首", type: "poem" , currentSlug: "gushi-san-shou" }, { title: "铺满金色巴掌的水泥道", type: "nature" , currentSlug: "pu-man-jin-se-ba-zhang-de-shui-ni-dao" }, { title: "秋天的雨", type: "nature", currentSlug: "qiutian-de-yu" }, { title: "听听，秋的声音", type: "nature" , currentSlug: "ting-ting-qiu-de-sheng-yin" }] },
      { title: "第三单元", lessons: [{ title: "总也倒不了的老屋", type: "story", currentSlug: "zong-ye-dao-bu-liao-de-laowu" }, { title: "犟龟", type: "story" , currentSlug: "jiang-gui" }, { title: "小狗学叫", type: "story" , currentSlug: "xiao-gou-xue-jiao" }] },
      { title: "第四单元", lessons: [{ title: "宝葫芦的秘密（节选）", type: "classic" , currentSlug: "bao-hu-lu-de-mi-mi-jie-xuan-g3a" }, { title: "在牛肚子里旅行", type: "science" , currentSlug: "zai-niu-duzi-li-lvxing" }, { title: "一块奶酪", type: "story" , currentSlug: "yi-kuai-nai-lao" }] },
      { title: "第五单元", lessons: [{ title: "搭船的鸟", type: "nature", currentSlug: "dachuan-de-niao" }, { title: "金色的草地", type: "nature", currentSlug: "jinse-de-caodi" }] },
      { title: "第六单元", lessons: [{ title: "富饶的西沙群岛", type: "nature", currentSlug: "furao-de-xisha-qundao" }, { title: "海滨小城", type: "nature" , currentSlug: "haibin-xiaocheng" }, { title: "美丽的小兴安岭", type: "nature", currentSlug: "meili-de-xiaoxinganling" }, { title: "香港，璀璨的明珠", type: "culture" , currentSlug: "xiang-gang-cui-can-de-ming-zhu" }] },
      { title: "第七单元", lessons: [{ title: "古诗三首", type: "poem" , currentSlug: "gu-shi-san-shou-g3a" }, { title: "大自然的声音", type: "nature" , currentSlug: "daziran-de-shengyin" }, { title: "读不完的大书", type: "nature" , currentSlug: "du-bu-wan-de-da-shu" }] },
      { title: "第八单元", lessons: [{ title: "司马光", type: "person", currentSlug: "sima-guang" }, { title: "一定要争气", type: "person" , currentSlug: "yiding-yao-zhengqi" }, { title: "手术台就是阵地", type: "person" , currentSlug: "shou-shu-tai-jiu-shi-zhen-di" }, { title: "一个粗瓷大碗", type: "person" , currentSlug: "yi-ge-cu-ci-da-wan" }] },
    ],
  },
  {
    id: "g3b",
    grade: "三年级",
    volume: "下册",
    edition: "人教版/统编版 2026",
    units: [
      { title: "第一单元", lessons: [{ title: "古诗三首", type: "poem" , currentSlug: "gu-shi-san-shou-g3b-2" }, { title: "燕子", type: "nature" , currentSlug: "yanzi" }, { title: "荷花", type: "nature" , currentSlug: "hehua" }, { title: "昆虫备忘录", type: "science" , currentSlug: "kun-chong-bei-wang-lu" }] },
      { title: "第二单元", lessons: [{ title: "守株待兔", type: "classic" , currentSlug: "shouzhudaitu" }, { title: "会摇尾巴的狼", type: "story" , currentSlug: "hui-yao-wei-ba-de-lang" }, { title: "鹿角和鹿腿", type: "story" , currentSlug: "lujiao-he-lutui" }, { title: "池子与河流", type: "story" , currentSlug: "chizi-yu-heliu" }] },
      { title: "第三单元", lessons: [{ title: "海底世界", type: "science" , currentSlug: "haidi-shijie" }, { title: "石蜂", type: "science" , currentSlug: "shi-feng" }, { title: "小虾", type: "nature" , currentSlug: "xiao-xia" }] },
      { title: "第四单元", lessons: [{ title: "古诗三首", type: "poem" , currentSlug: "gu-shi-san-shou-g3b-3" }, { title: "纸的发明", type: "culture", currentSlug: "zhi-de-faming" }, { title: "赵州桥", type: "culture", currentSlug: "zhaozhouqiao" }, { title: "一幅名扬中外的画", type: "culture" , currentSlug: "yi-fu-ming-yang-zhong-wai-de-hua" }] },
      { title: "第五单元", lessons: [{ title: "胡萝卜先生的长胡子", type: "story" , currentSlug: "hu-luo-bu-xian-sheng-de-chang-hu-zi" }, { title: "我变成了一棵树", type: "story" , currentSlug: "wo-biancheng-le-yike-shu" }] },
      { title: "第六单元", lessons: [{ title: "童年的水墨画", type: "poem" , currentSlug: "tong-nian-de-shui-mo-hua" }, { title: "肥皂泡", type: "nature" , currentSlug: "fei-zao-pao" }, { title: "灰雀", type: "story" , currentSlug: "huique" }, { title: "我不能失信", type: "person" , currentSlug: "wo-bu-neng-shi-xin" }] },
      { title: "第七单元", lessons: [{ title: "火烧云", type: "nature" , currentSlug: "huo-shao-yun" }, { title: "暴风雨来临之前", type: "nature" , currentSlug: "bao-feng-yu-lai-lin-zhi-qian" }, { title: "我们奇妙的世界", type: "science" , currentSlug: "wo-men-qi-miao-de-shi-jie" }] },
      { title: "第八单元", lessons: [{ title: "慢性子裁缝和急性子顾客", type: "story" , currentSlug: "manxingzi-caifeng-he-jixingzi-guke" }, { title: "漏", type: "story" , currentSlug: "lou" }, { title: "枣核", type: "story" , currentSlug: "zao-he" }] },
    ],
  },
  {
    id: "g4a",
    grade: "四年级",
    volume: "上册",
    edition: "人教版/统编版",
    units: [
      { title: "第一单元", lessons: [{ title: "观潮", type: "nature", currentSlug: "guan-chao" }, { title: "走月亮", type: "nature", currentSlug: "zou-yueliang" }, { title: "现代诗二首", type: "poem" , currentSlug: "xian-dai-shi-er-shou" }, { title: "繁星", type: "poem" , currentSlug: "fan-xing" }] },
      { title: "第二单元", lessons: [{ title: "一个豆荚里的五粒豆", type: "story", currentSlug: "yige-doujia-li-de-wulidou" }, { title: "夜间飞行的秘密", type: "science" , currentSlug: "ye-jian-fei-xing-de-mi-mi" }, { title: "呼风唤雨的世纪", type: "science" , currentSlug: "hufeng-huanyu-de-shiji" }, { title: "蝴蝶的家", type: "nature" , currentSlug: "hu-die-de-jia" }] },
      { title: "第三单元", lessons: [{ title: "古诗三首", type: "poem" , currentSlug: "gu-shi-san-shou-g4a-4" }, { title: "爬山虎的脚", type: "nature", currentSlug: "pashanhu-de-jiao" }, { title: "蟋蟀的住宅", type: "science", currentSlug: "xishuai-de-zhuzhai" }] },
      { title: "第四单元", lessons: [{ title: "盘古开天地", type: "classic" , currentSlug: "pangu-kaitiandi" }, { title: "精卫填海", type: "classic", currentSlug: "jingwei-tianhai" }, { title: "普罗米修斯", type: "classic", currentSlug: "puluomixiusi" }, { title: "女娲补天", type: "classic" , currentSlug: "nvwa-butian" }] },
      { title: "第五单元", lessons: [{ title: "麻雀", type: "story" , currentSlug: "maque" }, { title: "爬天都峰", type: "story", currentSlug: "pa-tiandou-feng" }] },
      { title: "第六单元", lessons: [{ title: "牛和鹅", type: "story" , currentSlug: "niu-he-e" }, { title: "一只窝囊的大老虎", type: "story" , currentSlug: "yi-zhi-wonang-de-da-laohu" }, { title: "陀螺", type: "story" , currentSlug: "tuoluo" }] },
      { title: "第七单元", lessons: [{ title: "古诗三首", type: "poem" , currentSlug: "gu-shi-san-shou-g4a-5" }, { title: "为中华之崛起而读书", type: "person" , currentSlug: "wei-zhonghua-jueqi-er-dushu" }, { title: "梅兰芳蓄须", type: "person" , currentSlug: "mei-lan-fang-xu-xu" }, { title: "延安，我把你追寻", type: "culture" , currentSlug: "yan-an-wo-ba-ni-zhui-xun" }] },
      { title: "第八单元", lessons: [{ title: "王戎不取道旁李", type: "classic", currentSlug: "wangrong-buqu-daopangli" }, { title: "西门豹治邺", type: "classic", currentSlug: "ximen-bao-zhi-ye" }, { title: "扁鹊治病", type: "classic" , currentSlug: "bian-que-zhi-bing" }, { title: "纪昌学射", type: "classic" , currentSlug: "ji-chang-xue-she" }] },
    ],
  },
  {
    id: "g4b",
    grade: "四年级",
    volume: "下册",
    edition: "人教版/统编版 2019",
    units: [
      { title: "第一单元", lessons: [{ title: "古诗词三首", type: "poem" , currentSlug: "gu-shi-ci-san-shou-g4b" }, { title: "乡下人家", type: "culture" , currentSlug: "xiang-xia-ren-jia" }, { title: "天窗", type: "story" , currentSlug: "tian-chuang" }, { title: "三月桃花水", type: "nature" , currentSlug: "san-yue-tao-hua-shui" }] },
      { title: "第二单元", lessons: [{ title: "琥珀", type: "science" , currentSlug: "hu-po" }, { title: "飞向蓝天的恐龙", type: "science" , currentSlug: "feixiang-lantian-de-konglong" }, { title: "纳米技术就在我们身边", type: "science" , currentSlug: "nami-jishu-jiu-zai-women-shenbian" }, { title: "千年梦圆在今朝", type: "science" , currentSlug: "qiannian-mengyuan-zai-jinchao" }] },
      { title: "第三单元", lessons: [{ title: "短诗三首", type: "poem" , currentSlug: "duan-shi-san-shou" }, { title: "绿", type: "poem" , currentSlug: "lv" }, { title: "白桦", type: "poem" , currentSlug: "bai-hua" }, { title: "在天晴了的时候", type: "poem" , currentSlug: "zai-tianqing-le-de-shihou" }] },
      { title: "第四单元", lessons: [{ title: "猫", type: "nature", currentSlug: "mao" }, { title: "母鸡", type: "nature" , currentSlug: "muji" }, { title: "白鹅", type: "nature" , currentSlug: "bai-e" }] },
      { title: "第五单元", lessons: [{ title: "海上日出", type: "nature", currentSlug: "haishang-richu" }, { title: "记金华的双龙洞", type: "nature" , currentSlug: "ji-jinhua-de-shuanglongdong" }] },
      { title: "第六单元", lessons: [{ title: "囊萤夜读", type: "classic", currentSlug: "nang-ying-ye-du" }, { title: "铁杵成针", type: "classic", currentSlug: "tie-chu-cheng-zhen" }, { title: "小英雄雨来（节选）", type: "person", currentSlug: "xiao-yingxiong-yulai" }, { title: "我们家的男子汉", type: "story" , currentSlug: "wo-men-jia-de-nan-zi-han" }, { title: "芦花鞋", type: "story" , currentSlug: "lu-hua-xie" }] },
      { title: "第七单元", lessons: [{ title: "古诗三首", type: "poem" , currentSlug: "gu-shi-san-shou-g4b-6" }, { title: "黄继光", type: "person" , currentSlug: "huang-ji-guang" }, { title: "“诺曼底号”遇难记", type: "story" , currentSlug: "nuo-man-di-hao-yu-nan-ji" }, { title: "挑山工", type: "person" , currentSlug: "tiao-shan-gong" }] },
      { title: "第八单元", lessons: [{ title: "宝葫芦的秘密（节选）", type: "classic" , currentSlug: "bao-hu-lu-de-mi-mi-jie-xuan-g4b-2" }, { title: "巨人的花园", type: "classic" , currentSlug: "juren-de-huayuan" }, { title: "海的女儿", type: "classic" , currentSlug: "hai-de-nv-er" }] },
    ],
  },
  {
    id: "g5a",
    grade: "五年级",
    volume: "上册",
    edition: "人教版/统编版 2019",
    units: [
      { title: "第一单元", lessons: [{ title: "白鹭", type: "nature", currentSlug: "bai-lu" }, { title: "落花生", type: "story", currentSlug: "luohuasheng" }, { title: "桂花雨", type: "story", currentSlug: "guihua-yu" }, { title: "珍珠鸟", type: "nature" , currentSlug: "zhenzhuniao" }] },
      { title: "第二单元", lessons: [{ title: "搭石", type: "story" , currentSlug: "dashi" }, { title: "将相和", type: "classic", currentSlug: "jiang-xiang-he" }, { title: "什么比猎豹的速度更快", type: "science" , currentSlug: "shenme-bi-liebao-de-sudu-geng-kuai" }, { title: "冀中的地道战", type: "person" , currentSlug: "jizhong-de-didao-zhan" }] },
      { title: "第三单元", lessons: [{ title: "猎人海力布", type: "classic", currentSlug: "lieren-hailibu" }, { title: "牛郎织女（一）", type: "classic", currentSlug: "niulang-zhinv" }, { title: "牛郎织女（二）", type: "classic" , currentSlug: "niu-lang-zhi-nv-er" }] },
      { title: "第四单元", lessons: [{ title: "古诗三首", type: "poem" , currentSlug: "gu-shi-san-shou-g5a-7" }, { title: "少年中国说（节选）", type: "culture", currentSlug: "shaonian-zhongguo-shuo" }, { title: "圆明园的毁灭", type: "culture", currentSlug: "yuanmingyuan-de-huimie" }, { title: "小岛", type: "story" , currentSlug: "xiao-dao" }] },
      { title: "第五单元", lessons: [{ title: "太阳", type: "science" , currentSlug: "taiyang" }, { title: "松鼠", type: "science" , currentSlug: "songshu" }] },
      { title: "第六单元", lessons: [{ title: "慈母情深", type: "story", currentSlug: "cimu-qingshen" }, { title: "父爱之舟", type: "story" , currentSlug: "fu-ai-zhi-zhou" }, { title: "“精彩极了”和“糟糕透了”", type: "story" , currentSlug: "jing-cai-ji-le-he-zao-gao-tou-le" }] },
      { title: "第七单元", lessons: [{ title: "古诗词三首", type: "poem" , currentSlug: "gu-shi-ci-san-shou-g5a-2" }, { title: "四季之美", type: "nature" , currentSlug: "siji-zhi-mei" }, { title: "鸟的天堂", type: "nature" , currentSlug: "niao-de-tian-tang" }, { title: "月迹", type: "story" , currentSlug: "yue-ji" }] },
      { title: "第八单元", lessons: [{ title: "古人谈读书", type: "culture" , currentSlug: "guren-tan-dushu" }, { title: "忆读书", type: "culture" , currentSlug: "yi-dushu" }, { title: "我的“长生果”", type: "culture" , currentSlug: "wo-de-chang-sheng-guo" }] },
    ],
  },
  {
    id: "g5b",
    grade: "五年级",
    volume: "下册",
    edition: "人教版/统编版 2019",
    units: [
      { title: "第一单元", lessons: [{ title: "古诗三首", type: "poem" , currentSlug: "gu-shi-san-shou-g5b-8" }, { title: "祖父的园子", type: "story" , currentSlug: "zu-fu-de-yuan-zi" }, { title: "月是故乡明", type: "story", currentSlug: "yue-shi-guxiang-ming" }, { title: "梅花魂", type: "story" , currentSlug: "mei-hua-hun" }] },
      { title: "第二单元", lessons: [{ title: "草船借箭", type: "classic", currentSlug: "caoshuan-jiejian" }, { title: "景阳冈", type: "classic", currentSlug: "jingyanggang" }, { title: "猴王出世", type: "classic", currentSlug: "houwang-chushi" }, { title: "红楼春趣", type: "classic" , currentSlug: "hong-lou-chun-qu" }] },
      { title: "第三单元", lessons: [{ title: "汉字真有趣", type: "culture" , currentSlug: "han-zi-zhen-you-qu" }, { title: "我爱你，汉字", type: "culture" , currentSlug: "wo-ai-ni-han-zi" }] },
      { title: "第四单元", lessons: [{ title: "古诗三首", type: "poem" , currentSlug: "gu-shi-san-shou-g5b-9" }, { title: "青山处处埋忠骨", type: "person" , currentSlug: "qing-shan-chu-chu-mai-zhong-gu" }, { title: "军神", type: "person" , currentSlug: "jun-shen" }, { title: "清贫", type: "person" , currentSlug: "qing-pin" }] },
      { title: "第五单元", lessons: [{ title: "人物描写一组", type: "classic" , currentSlug: "ren-wu-miao-xie-yi-zu" }, { title: "刷子李", type: "classic" , currentSlug: "shua-zi-li" }] },
      { title: "第六单元", lessons: [{ title: "自相矛盾", type: "classic" , currentSlug: "zi-xiang-mao-dun" }, { title: "田忌赛马", type: "classic" , currentSlug: "tianji-saima" }, { title: "跳水", type: "story" , currentSlug: "tiao-shui" }] },
      { title: "第七单元", lessons: [{ title: "威尼斯的小艇", type: "culture" , currentSlug: "wei-ni-si-de-xiao-ting" }, { title: "牧场之国", type: "culture" , currentSlug: "mu-chang-zhi-guo" }, { title: "金字塔", type: "culture" , currentSlug: "jin-zi-ta" }] },
      { title: "第八单元", lessons: [{ title: "杨氏之子", type: "classic" , currentSlug: "yang-mufeng" }, { title: "手指", type: "story" , currentSlug: "shou-zhi" }, { title: "童年的发现", type: "story" , currentSlug: "tongnian-de-faxian" }] },
    ],
  },
  {
    id: "g6a",
    grade: "六年级",
    volume: "上册",
    edition: "人教版/统编版",
    units: [
      { title: "第一单元", lessons: [{ title: "草原", type: "nature", currentSlug: "caoyuan" }, { title: "丁香结", type: "nature", currentSlug: "dingxiang-jie" }, { title: "古诗词三首", type: "poem" , currentSlug: "gu-shi-ci-san-shou-g6a-3" }, { title: "花之歌", type: "poem" , currentSlug: "hua-zhi-ge" }] },
      { title: "第二单元", lessons: [{ title: "七律·长征", type: "poem", currentSlug: "qilv-changzheng" }, { title: "狼牙山五壮士", type: "person", currentSlug: "langyashan-wuzhuangshi" }, { title: "开国大典", type: "culture", currentSlug: "kaiguo-dadian" }, { title: "灯光", type: "person" , currentSlug: "dengguang" }, { title: "我的战友邱少云", type: "person" , currentSlug: "wo-de-zhan-you-qiu-shao-yun" }] },
      { title: "第三单元", lessons: [{ title: "竹节人", type: "story" , currentSlug: "zhu-jie-ren" }, { title: "宇宙生命之谜", type: "science" , currentSlug: "yuzhou-shengming-zhi-mi" }, { title: "故宫博物院", type: "culture", currentSlug: "gugong-bowuyuan" }] },
      { title: "第四单元", lessons: [{ title: "桥", type: "story" , currentSlug: "qiao" }, { title: "在柏林", type: "story" , currentSlug: "zai-bolin" }, { title: "穷人", type: "story" , currentSlug: "qiongren" }, { title: "金色的鱼钩", type: "person" , currentSlug: "jinse-de-yugou-g6a" }] },
      { title: "第五单元", lessons: [{ title: "夏天里的成长", type: "nature" , currentSlug: "xiatian-li-de-chengzhang" }, { title: "盼", type: "story" , currentSlug: "pan" }] },
      { title: "第六单元", lessons: [{ title: "古诗三首", type: "poem" , currentSlug: "gu-shi-san-shou-g6a-10" }, { title: "只有一个地球", type: "science" , currentSlug: "zhiyou-yige-diqiu" }, { title: "青山不老", type: "person" , currentSlug: "qingshan-bulao" }, { title: "三黑和土地", type: "poem" , currentSlug: "sanhei-he-tudi" }] },
      { title: "第七单元", lessons: [{ title: "伯牙鼓琴", type: "classic", currentSlug: "boyagugin" }, { title: "书戴嵩画牛", type: "classic" , currentSlug: "shu-dai-song-hua-niu" }, { title: "月光曲", type: "classic" , currentSlug: "yue-guang-qu" }, { title: "京剧趣谈", type: "culture" , currentSlug: "jingju-qutan" }] },
      { title: "第八单元", lessons: [{ title: "少年闰土", type: "classic" , currentSlug: "shaonian-runtu" }, { title: "好的故事", type: "classic" , currentSlug: "hao-de-gushi" }, { title: "我的伯父鲁迅先生", type: "person" , currentSlug: "wo-de-bo-fu-lu-xun-xian-sheng" }, { title: "有的人——纪念鲁迅有感", type: "poem" , currentSlug: "youderen-jinian-luxun-yougan" }] },
    ],
  },
  {
    id: "g6b",
    grade: "六年级",
    volume: "下册",
    edition: "人教版/统编版",
    units: [
      { title: "第一单元", lessons: [{ title: "北京的春节", type: "culture", currentSlug: "beijingde-chunjie" }, { title: "腊八粥", type: "culture" , currentSlug: "la-ba-zhou" }, { title: "古诗三首", type: "poem" , currentSlug: "gu-shi-san-shou-g6b-11" }, { title: "藏戏", type: "culture" , currentSlug: "cang-xi" }] },
      { title: "第二单元", lessons: [{ title: "鲁滨逊漂流记（节选）", type: "classic" , currentSlug: "lu-bin-xun-piao-liu-ji-jie-xuan" }, { title: "骑鹅旅行记（节选）", type: "classic" , currentSlug: "qi-e-lv-xing-ji-jie-xuan" }, { title: "汤姆·索亚历险记（节选）", type: "classic" , currentSlug: "tang-mu-suo-ya-li-xian-ji-jie-xuan" }] },
      { title: "第三单元", lessons: [{ title: "匆匆", type: "story", currentSlug: "congcong" }, { title: "那个星期天", type: "story" , currentSlug: "nage-xingqitian" }] },
      { title: "第四单元", lessons: [{ title: "古诗三首", type: "poem" , currentSlug: "gu-shi-san-shou-g6b-12" }, { title: "十六年前的回忆", type: "person" , currentSlug: "shi-liu-nian-qian-de-hui-yi" }, { title: "为人民服务", type: "culture" , currentSlug: "wei-ren-min-fu-wu" }, { title: "金色的鱼钩", type: "person" , currentSlug: "jinse-de-yugou-g6b" }, { title: "董存瑞舍身炸暗堡", type: "person" , currentSlug: "dong-cun-rui-she-shen-zha-an-bao" }] },
      { title: "第五单元", lessons: [{ title: "学弈", type: "classic", currentSlug: "xue-yi" }, { title: "两小儿辩日", type: "classic" , currentSlug: "liang-xiao-er-bian-ri" }, { title: "真理诞生于一百个问号之后", type: "science" , currentSlug: "zhen-li-dan-sheng-yu-yi-bai-ge-wen-hao-zhi-hou" }, { title: "表里的生物", type: "science" , currentSlug: "biao-li-de-sheng-wu" }, { title: "他们那时候多有趣啊", type: "science" , currentSlug: "ta-men-na-shi-hou-duo-you-qu-a" }] },
      { title: "古诗词诵读", lessons: [{ title: "采薇（节选）", type: "poem" , currentSlug: "cai-wei-jie-xuan" }, { title: "送元二使安西", type: "poem" , currentSlug: "song-yuan-er-shi-an-xi" }, { title: "春夜喜雨", type: "poem" , currentSlug: "chun-ye-xi-yu" }, { title: "早春呈水部张十八员外", type: "poem" , currentSlug: "zao-chun-cheng-shui-bu-zhang-shi-ba-yuan-wai" }, { title: "江上渔者", type: "poem" , currentSlug: "jiang-shang-yu-zhe" }, { title: "泊船瓜洲", type: "poem" , currentSlug: "bo-chuan-gua-zhou" }, { title: "游园不值", type: "poem" , currentSlug: "you-yuan-bu-zhi" }, { title: "卜算子·送鲍浩然之浙东", type: "poem" , currentSlug: "bu-suan-zi-song-bao-hao-ran-zhi-zhe-dong" }, { title: "浣溪沙", type: "poem" , currentSlug: "huan-xi-sha" }, { title: "清平乐", type: "poem" , currentSlug: "qing-ping-le" }] },
    ],
  },
];

export const typeLabels: Record<CurriculumLesson["type"], string> = {
  story: "故事",
  poem: "诗词",
  culture: "文化",
  nature: "自然",
  person: "人物",
  science: "科学",
  classic: "经典",
  activity: "生活",
};

export const priorityTitles = [
  "乌鸦喝水",
  "吃水不忘挖井人",
  "静夜思",
  "小壁虎借尾巴",
  "小蝌蚪找妈妈",
  "数星星的孩子",
  "坐井观天",
  "大禹治水",
  "守株待兔",
  "纸的发明",
  "蟋蟀的住宅",
  "盘古开天地",
  "为中华之崛起而读书",
  "西门豹治邺",
  "囊萤夜读",
  "铁杵成针",
  "将相和",
  "猎人海力布",
  "牛郎织女（一）",
  "猴王出世",
  "田忌赛马",
  "狼牙山五壮士",
  "故宫博物院",
  "伯牙鼓琴",
  "少年闰土",
  "北京的春节",
  "鲁滨逊漂流记（节选）",
  "学弈",
  "两小儿辩日",
];
