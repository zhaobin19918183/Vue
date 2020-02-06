import { countAmount } from "./api/workNotification";
import { issueList } from "./api/announcement";
import { getUserVesselListByStatus } from "./api/basicData/basicData";
import { getRoule } from "./api/user";
import axios from "axios";

const WEATHER_IMG = {
  // dayu: require('@/assets/images/page/home/weather/dayu.png'),
  // lei: require('@/assets/images/page/home/weather/lei.png'),
  // leizhenyu: require('@/assets/images/page/home/weather/leizhenyu.png'),
  // mai: require('@/assets/images/page/home/weather/mai.png'),
  // qing: require('@/assets/images/page/home/weather/qing.png'),
  // shachen: require('@/assets/images/page/home/weather/shachen.png'),
  // wu: require('@/assets/images/page/home/weather/wu.png'),
  // xiaoyu: require('@/assets/images/page/home/weather/xiaoyu.png'),
  // xue: require('@/assets/images/page/home/weather/xue.png'),
  // yin: require('@/assets/images/page/home/weather/yin.png'),
  // yu: require('@/assets/images/page/home/weather/yu.png'),
  // yujiaxue: require('@/assets/images/page/home/weather/yujiaxue.png'),
  // yun: require('@/assets/images/page/home/weather/yun.png'),
  // zhongyu: require('@/assets/images/page/home/weather/zhongyu.png'),
};

/**
 * openweathermap天气接口
 * 天气代码图片清单
 * 清单地址 ：https://openweathermap.org/weather-conditions
 */
const WEATHER_IMG_LIST = {
  "01d": require("@/assets/images/page/home/weather/qing.png"),
  "02d": require("@/assets/images/page/home/weather/yun.png"),
  "03d": require("@/assets/images/page/home/weather/yin.png"),
  "04d": require("@/assets/images/page/home/weather/yin.png"),
  "09d": require("@/assets/images/page/home/weather/xiaoyu.png"),
  "10d": require("@/assets/images/page/home/weather/dayu.png"),
  "11d": require("@/assets/images/page/home/weather/leizhenyu.png"),
  "13d": require("@/assets/images/page/home/weather/xue.png"),
  "50d": require("@/assets/images/page/home/weather/wu.png"),
  "01n": require("@/assets/images/page/home/weather/qing.png"),
  "02n": require("@/assets/images/page/home/weather/yun.png"),
  "03n": require("@/assets/images/page/home/weather/yin.png"),
  "04n": require("@/assets/images/page/home/weather/yin.png"),
  "09n": require("@/assets/images/page/home/weather/xiaoyu.png"),
  "10n": require("@/assets/images/page/home/weather/dayu.png"),
  "11n": require("@/assets/images/page/home/weather/leizhenyu.png"),
  "13n": require("@/assets/images/page/home/weather/xue.png"),
  "50n": require("@/assets/images/page/home/weather/wu.png")
};

const Flags = {
  201: "ALB",
  202: "AND",
  203: "AUT",
  204: "AZS",
  205: "BEL",
  206: "BLR",
  207: "BGR",
  208: "VAT",
  209: "CYP",
  210: "CYP",
  211: "DEU",
  212: "CYP",
  213: "GEO",
  214: "MDA",
  215: "MLT",
  216: "ARM",
  218: "DEU",
  219: "DNK",
  220: "DNK",
  224: "ESP",
  225: "ESP",
  226: "FRA",
  227: "FRA",
  228: "FRA",
  230: "FIN",
  231: "FRO",
  232: "GBR",
  233: "GBR",
  234: "GBR",
  235: "GBR",
  236: "GIB",
  237: "GRC",
  238: "HRV",
  239: "GRC",
  240: "GRC",
  242: "MAR",
  243: "HUN",
  244: "NLD",
  245: "NLD",
  246: "NLD",
  247: "ITA",
  248: "MLT",
  249: "MLT",
  250: "IRL",
  251: "ISL",
  252: "LIE",
  253: "LUX",
  254: "MCO",
  255: "MDR",
  256: "MLT",
  257: "NOR",
  258: "NOR",
  259: "NOR",
  261: "POL",
  262: "MNE",
  263: "PRT",
  264: "ROU",
  265: "SWE",
  266: "SWE",
  267: "SVK",
  268: "SMR",
  269: "SWZ",
  270: "CZE",
  271: "TUR",
  272: "UKR",
  273: "RUS",
  274: "MKD",
  275: "LVA",
  276: "EST",
  277: "LTU",
  278: "SVN",
  279: "SRB",
  301: "AIA",
  303: "USA",
  304: "ATG",
  305: "ATG",
  306: "ANT",
  307: "ABW",
  308: "BHS",
  309: "BHS",
  310: "BMU",
  311: "BHS",
  312: "BLZ",
  314: "BRB",
  316: "CAN",
  319: "CYM",
  321: "CRI",
  323: "CUB",
  325: "DOM",
  327: "DOM",
  329: "GLP",
  330: "GRD",
  331: "GRL",
  332: "GTM",
  334: "HND",
  336: "HTI",
  338: "USA",
  339: "JAM",
  341: "KNA",
  343: "LCA",
  345: "MEX",
  347: "MTQ",
  348: "MSR",
  350: "NIC",
  351: "PAN",
  352: "PAN",
  353: "PAN",
  354: "PAN",
  358: "PRI",
  359: "SLV",
  361: "SPM",
  362: "TTO",
  364: "TCA",
  366: "USA",
  367: "USA",
  368: "USA",
  369: "USA",
  371: "PAN",
  372: "PAN",
  373: "PAN",
  375: "VCT",
  376: "VCT",
  377: "VCT",
  378: "VGB",
  379: "VGB",
  401: "AFG",
  403: "SAU",
  405: "BGD",
  408: "BHR",
  410: "BTN",
  412: "CHN",
  413: "CHN",
  414: "CHN",
  416: "TWN",
  417: "LKA",
  419: "IND",
  422: "IRN",
  423: "AZE",
  425: "IRQ",
  428: "ISR",
  431: "JPN",
  432: "JPN",
  434: "TKM",
  436: "KAZ",
  437: "UZB",
  438: "JOR",
  440: "KOR",
  441: "KOR",
  443: "PSE",
  445: "PRK",
  447: "KWT",
  450: "LBN",
  451: "KGZ",
  453: "MAC",
  455: "MDV",
  457: "MNG",
  459: "NPL",
  461: "OMN",
  463: "PAK",
  466: "QAT",
  468: "SYR",
  470: "ARE",
  472: "TJK",
  473: "YEM",
  475: "YEM",
  477: "HKG",
  478: "BIH",
  501: "ADL",
  503: "AUS",
  506: "MMR",
  508: "BRN",
  510: "FSM",
  511: "PLW",
  512: "NZL",
  514: "KHM",
  515: "KHM",
  516: "CXR",
  518: "COK",
  520: "FJI",
  523: "CCK",
  525: "IDN",
  529: "KIR",
  531: "LAO",
  533: "MYS",
  536: "MNP",
  538: "MHL",
  540: "NCL",
  542: "NIU",
  544: "NRU",
  546: "PYF",
  548: "PHL",
  553: "PNG",
  555: "PCN",
  557: "SLB",
  559: "ASM",
  561: "WSM",
  563: "SGP",
  564: "SGP",
  565: "SGP",
  567: "THA",
  570: "TON",
  572: "TUV",
  573: "VNM",
  574: "VNM",
  576: "VUT",
  578: "WLF",
  601: "ZAF",
  603: "AGO",
  605: "DZA",
  607: "ATF",
  608: "ASL",
  609: "BDI",
  610: "BEN",
  611: "BWA",
  612: "CAF",
  613: "CMR",
  615: "COG",
  616: "COM",
  617: "CPV",
  618: "ATF",
  619: "CIV",
  620: "COM",
  621: "DJI",
  622: "EGY",
  624: "ETH",
  625: "ERI",
  626: "GAB",
  627: "GHA",
  629: "GMB",
  630: "GNB",
  631: "GNQ",
  632: "GIN",
  633: "BFA",
  634: "KEN",
  635: "ATF",
  636: "LBR",
  637: "LBR",
  638: "SSD",
  642: "LBY",
  644: "LSO",
  645: "MUS",
  647: "MDG",
  649: "MLI",
  650: "MOZ",
  654: "MRT",
  655: "MWI",
  656: "NER",
  657: "NGA",
  659: "NAM",
  660: "REU",
  661: "RWA",
  662: "SDN",
  663: "SEN",
  664: "SYC",
  665: "SHN",
  666: "SOM",
  667: "SLE",
  668: "STP",
  669: "SWZ",
  670: "TCD",
  671: "TGO",
  672: "TUN",
  674: "TZA",
  675: "UGA",
  676: "COG",
  677: "TZA",
  678: "ZMB",
  679: "ZWE",
  701: "ARG",
  710: "BRA",
  720: "BOL",
  725: "CHL",
  730: "COL",
  735: "ECU",
  740: "FLK",
  745: "GIN",
  750: "GUY",
  755: "PRY",
  760: "PER",
  765: "SUR",
  770: "URY",
  775: "VEN"
};

const FALG_COUTRY = {
  ABW: "阿鲁巴",
  AFG: "阿富汗",
  AGO: "安哥拉",
  AIA: "安圭拉",
  ALA: "奥兰群岛",
  ALB: "阿尔巴尼亚",
  AND: "安道尔",
  ANT: "荷属安的列斯",
  ARE: "阿拉伯联合酋长国",
  ARG: "阿根廷",
  ARM: "亚美尼亚",
  ASM: "美属萨摩亚",
  ATA: "南极洲",
  ATF: "法属南部领土",
  ATG: "安提瓜和巴布达",
  AUS: "澳大利亚",
  AUT: "奥地利",
  AZE: "阿塞拜疆",
  BDI: "布隆迪",
  BEL: "比利时",
  BEN: "贝宁",
  BFA: "布基纳法索",
  BGD: "孟加拉",
  BGR: "保加利亚",
  BHR: "巴林",
  BHS: "巴哈马",
  BIH: "波斯尼亚和黑塞哥维那",
  BLR: "白俄罗斯",
  BLZ: "伯利兹",
  BMU: "百慕大",
  BOL: "玻利维亚",
  BRA: "巴西",
  BRB: "巴巴多斯",
  BRN: "文莱达鲁萨兰国",
  BTN: "不丹",
  BVT: "布维岛",
  BWA: "博茨瓦纳",
  CAF: "中非共和国",
  CAN: "加拿大",
  CCK: "科科斯（基林）群岛",
  CHE: "瑞士",
  CHL: "智利",
  CHN: "中国",
  CIV: "科特迪瓦",
  CMR: "喀麦隆",
  COD: "刚果民主共和国",
  COG: "刚果共和国",
  COK: "库克群岛",
  COL: "哥伦比亚",
  COM: "科摩罗",
  CPV: "佛得角",
  CRI: "哥斯达黎加",
  CUB: "古巴",
  CUW: "库拉索",
  CXR: "圣诞岛",
  CYM: "开曼群岛",
  CYP: "塞浦路斯",
  CZE: "捷克共和国",
  DEU: "德国",
  DJI: "吉布提",
  DMA: "多米尼加联邦",
  DNK: "丹麦",
  DOM: "多米尼加共和国",
  DZA: "阿尔及利亚",
  ECU: "厄瓜多尔尔",
  EGY: "埃及",
  ERI: "厄立特里亚",
  ESH: "西撒哈拉",
  ESP: "西班牙",
  EST: "爱沙尼亚",
  ETH: "埃塞俄比亚",
  FIN: "芬兰",
  FJI: "斐济",
  FLK: "福克兰群岛（马尔维纳斯）",
  FRA: "法国",
  FRO: "法罗群岛",
  FSM: "密克罗尼西亚联邦",
  GAB: "加蓬",
  GBR: "英国",
  GEO: "格鲁吉亚",
  GHA: "加纳",
  GIB: "直布罗陀",
  GIN: "几内亚",
  GLP: "瓜德罗普",
  GMB: "冈比亚",
  GNB: "几内亚比绍",
  GNQ: "赤道几内亚",
  GRC: "希腊",
  GRD: "格林纳达",
  GRL: "格陵兰",
  GTM: "危地马拉",
  GUF: "法属圭亚那",
  GUM: "关岛",
  GUY: "圭亚那",
  HKG: "中国香港",
  HMD: "赫德岛和麦克唐纳岛",
  HND: "洪都拉斯",
  HRV: "克罗地亚",
  HTI: "海地",
  HUN: "匈牙利",
  IDN: "印度尼西亚",
  IND: "印度",
  IOT: "英属印度洋领地",
  IRL: "爱尔兰",
  IRN: "伊朗伊斯兰共和国",
  IRQ: "伊拉克",
  ISL: "冰岛",
  ISR: "以色列",
  ITA: "意大利",
  JAM: "牙买加",
  JOR: "约旦",
  JPN: "日本",
  KAZ: "哈萨克斯坦",
  KEN: "肯尼亚",
  KGZ: "吉尔吉斯斯坦",
  KHM: "柬埔寨",
  KIR: "基里巴斯",
  KNA: "圣基茨和尼维斯",
  KOR: "大韩民国",
  KWT: "科威特",
  LAO: "老挝人民民主共和国",
  LBN: "黎巴嫩",
  LBR: "利比里亚",
  LBY: "阿拉伯利比亚民众国",
  LCA: "圣卢西亚",
  LIE: "列支敦士登",
  LKA: "斯里兰卡",
  LSO: "莱索托",
  LTU: "立陶宛",
  LUX: "卢森堡",
  LVA: "拉脱维亚",
  MAC: "中国澳门",
  MAR: "摩洛哥",
  MCO: "摩纳哥",
  MDA: "摩尔多瓦共和国",
  MDG: "马达加斯加",
  MDV: "马尔代夫",
  MEX: "墨西哥",
  MHL: "马绍尔群岛",
  MKD: "前南斯拉夫的马其顿共和国",
  MLI: "马里",
  MLT: "马耳他",
  MMR: "缅甸",
  MNG: "蒙古",
  MNP: "北马里亚纳群岛",
  MOZ: "莫桑比克",
  MRT: "毛里塔尼亚",
  MSR: "蒙特塞拉特",
  MTQ: "马提尼克",
  MUS: "毛里求斯",
  MWI: "马拉维",
  MYS: "马来西亚",
  MYT: "马约特",
  NAM: "纳米比亚",
  NCL: "新喀里多尼亚",
  NER: "尼日尔尔",
  NFK: "诺福克岛",
  NGA: "尼日尔利亚",
  NIC: "尼加拉瓜",
  NIU: "纽埃",
  NLD: "荷兰",
  NOR: "挪威",
  NPL: "尼泊尔",
  NRU: "瑙鲁",
  NZL: "新西兰",
  OMN: "阿曼",
  PAK: "巴基斯坦",
  PAN: "巴拿马",
  PCN: "皮特凯恩群岛",
  PER: "秘鲁",
  PHL: "菲律宾",
  PLW: "帕劳",
  PNG: "巴布亚新几内亚",
  POL: "波兰",
  PRI: "波多黎各",
  PRK: "朝鲜民主主义人民共和国",
  PRT: "葡萄牙",
  PRY: "巴拉圭",
  PSE: "巴勒斯坦",
  PYF: "法属波利尼西亚",
  QAT: "卡塔尔",
  REU: "留尼汪",
  ROU: "罗马尼亚",
  RUS: "俄罗斯联邦",
  RWA: "卢旺达",
  SAU: "沙特阿拉伯",
  SCG: "塞尔维亚和黑山",
  SDN: "苏丹",
  SEN: "塞内加尔",
  SGP: "新加坡",
  SGS: "南乔治亚岛和南桑德韦奇岛",
  SHN: "圣赫勒拿",
  SJM: "斯瓦尔巴岛和扬马延岛",
  SLB: "所罗门群岛",
  SLE: "塞拉利昂",
  SLV: "萨尔瓦多",
  SMR: "圣马力诺",
  SOM: "索马里",
  SPM: "圣皮埃尔和密克隆",
  SSD: "南苏丹",
  STP: "圣多美和普林西比",
  SUR: "苏里南",
  SVK: "斯洛伐克",
  SVN: "斯洛文尼亚",
  SWE: "瑞典",
  SWZ: "斯威士兰",
  SYC: "塞舌尔",
  SYR: "阿拉伯叙利亚共和国",
  TCA: "特克斯和凯科斯群岛",
  TCD: "乍得",
  TGO: "多哥",
  THA: "泰国",
  TJK: "塔吉克斯坦共和国",
  TKL: "托克劳",
  TKM: "土库曼斯坦",
  TLS: "东帝汶",
  TON: "汤加",
  TTO: "特立尼达和多巴哥",
  TUN: "突尼斯",
  TUR: "土耳其",
  TUV: "图瓦卢",
  TWN: "中国台湾",
  TZA: "坦桑尼亚联合共和国",
  UGA: "乌干达",
  UKR: "乌克兰",
  UMI: "美国边远小岛",
  URY: "乌拉圭",
  USA: "美国",
  UZB: "乌兹别克斯坦",
  VAT: "梵蒂冈（梵蒂冈城国）",
  VCT: "圣文森特和格林纳丁斯",
  VEN: "委内瑞拉",
  VGB: "英属维尔京群岛",
  VIR: "美属维尔京群岛",
  VNM: "越南",
  VUT: "瓦努阿图",
  WLF: "瓦利斯和富图纳群岛",
  WSM: "萨摩亚",
  YEM: "也门",
  ZAF: "南非",
  ZMB: "赞比亚",
  ZWE: "津巴布韦"
};

export default {
  // 获取代办数量
  getTodoCount(staffId) {
    return new Promise(async next => {
      var c = await this._getCountAmount(staffId, true);
      next(c);
    });
  },

  // 获取消息数量
  getMsgCount(staffId) {
    return new Promise(async next => {
      var c = await this._getCountAmount(staffId, false);
      next(c);
    });
  },

  _getCountAmount(staffId, isTask) {
    return new Promise(next => {
      var params = {
        staffId: staffId,
        isTask: isTask ? 1 : 0
      };
      getRoule().then(response => {
        let list = [];
        response.data.forEach(item => {
          if (item.name === "crewManagement") {
            list.push("CREW");
          }
          if (item.name === "certificateManagement") {
            list.push("CERTIFICATE");
          }
          if (item.name === "procurement") {
            list.push("PURCHASE");
          }
          if (item.name === "financeManagement") {
            list.push("FINANCE");
          }
          if (item.name === "dynamicRport") {
            list.push("VESSEL-NOON-REPORT");
          }
          if (item.name === "ismManager") {
            list.push("ISM");
          }
          if (item.name === "monitorManager") {
            list.push("MONITOR");
          }

          if (item.name === "oil") {
            list.push("OIL");
          }

          if (item.name === "servicer") {
            list.push("SERVICER");
          }

          if (item.name === "maintenanceManagement") {
            list.push("MAINTAIN");
          }

          if (item.name === "repairManager") {
            list.push("REPAIR");
          }

          if (item.name === "spareParts") {
            list.push("SPAREPART");
          }

          if (item.name === "materiel") {
            list.push("MATERIEL");
          }
          if (item.name === "navigationManagement") {
            list.push("NAVIGATION");
          }
        });
        params.businessType = list.join(",");

        if (isTask) {
          params.acceptanceType = "NEED_HANDLE";
        }

        countAmount(params)
          .then(res => {
            if (res.code === "200") {
              var content = res.data.content || [];
              var sum = 0;
              content.forEach(item => {
                sum += parseInt(item.number) || 0;
              });
              next(sum);
            }
          })
          .catch(() => {
            next(0);
          });
      });
    });
  },
  // 获取IP信息
  getIpInfo() {
    return new Promise(next => {
      axios
        .get("https://ipapi.co/json")
        .then(response => {
          if (response.data && response.data.ip) {
            next(response.data);
          } else {
            next();
          }
        })
        .catch(err => {
          next();
        });
    });
  },
  getOpenWeather() {
    const API_KEY = "8f3cc778a9b4a20efe9fca834888991e";

    return new Promise(async next => {
      var ip = await this.getIpInfo();
      if (!ip) {
        next();
        return;
      }

      var lat = ip.latitude;
      var lon = ip.longitude;
      var url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

      if (!lat || !lon) {
        url = `http://api.openweathermap.org/data/2.5/weather?q=${ip.region}&units=metric&appid=${API_KEY}`;
      }

      axios
        .get(url)
        .then(response => {
          if (response && response.data && response.data.cod === 200) {
            var data = response.data;
            var date = new Date(data.dt * 1000);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var H = date.getHours();
            var M = date.getMinutes();
            var S = date.getSeconds();
            if (m < 10) m = "0" + m;
            if (d < 10) d = "0" + d;
            if (H < 10) H = "0" + H;
            if (M < 10) M = "0" + M;
            if (S < 10) S = "0" + S;
            next({
              city: data.name,
              country: data.sys.country,
              date: y + "-" + m + "-" + d + " " + H + ":" + M,
              tem: data.main.temp.toFixed(0),
              wea: data.weather[0].main,
              // 官方推荐天气图标
              wea_img: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
              // 自定义天气图标
              // wea_img: WEATHER_IMG_LIST[data.weather[0].icon]
            });
          } else {
            next();
          }
        })
        .catch(err => {
          next();
        });
    });
  },
  // 获取天气
  getWeather() {
    return new Promise(next => {
      axios
        .get(
          "https://www.tianqiapi.com/api/?appid=86717818&appsecret=TWu3s3nf&version=v1"
        )
        .then(res => {
          var data = res.data;
          var now = data.data && data.data[0];
          if (!now) {
            next(undefined);
            return;
          }

          next({
            city: data.city,
            date: now.date,
            tem: now.tem,
            wea: now.wea,
            wea_img: WEATHER_IMG[now.wea_img] // xue, lei, shachen, wu, bingbao, yun, yu, yin, qing
          });
        })
        .catch(err => {
          next(undefined);
        });
    });
  },

  // 获取公告数据
  getIssueList() {
    return new Promise(next => {
      issueList()
        .then(res => {
          next(res && res.data);
        })
        .catch(() => {
          next();
        });
    });
  },

  // 获取国旗地址
  getFlagImg(mmsi) {
    var head3MMSI = mmsi.substr(0, 3);
    var flag = Flags[head3MMSI];
    // return FALG_COUTRY[flag];//国旗字符串
    return "http://api.shipxy.com/apiresource/flags/" + flag + ".png";
  },

  // 获取国籍
  getFlagStr(mmsi) {
    var head3MMSI = mmsi.substr(0, 3);
    var flag = Flags[head3MMSI];
    return FALG_COUTRY[flag]; // 国旗字符串
  },

  // 获取国家信息
  getCoutryInfo(mmsi) {
    return {
      string: this.getFlagStr(mmsi + ""),
      image: this.getFlagImg(mmsi + "")
    };
  },

  // 获取所有船
  // {id, name, mmsi}
  getShips() {
    return new Promise(next => {
      getUserVesselListByStatus()
        .then(res => {
          if (res && res.code === "200") {
            var arr = res.data || [];

            arr = arr.map(item => {
              return {
                mmsi: item.mmsiCode,
                name: item.vesselName,
                id: item.vesselId
              };
            });

            next(arr);
          }
        })
        .catch(() => {
          next([]);
        });
    });
  }
};
