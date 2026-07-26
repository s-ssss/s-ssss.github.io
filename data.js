/* ========== CDN 配置 ========== */
// true = jsDelivr 加速  |  false = 走 GitHub Pages 原路径
const USE_CDN = true;

const CDN_BASE = USE_CDN
  ? "https://cdn.jsdelivr.net/gh/s-ssss/s-ssss.github.io@main"
  : "";

function imgUrl(path) {
  return CDN_BASE ? `${CDN_BASE}/${path}` : path;
}
/* ============================ */

const photos = [
  { num:"01.", title:"我家的corgi多多", desc:"柯基多多の日常", cat:"corgi", src: imgUrl("images/p01.jpg"), tag:"🐾 柯基日常" },
  { num:"02.", title:"海盐芝士茉莉", desc:"茶底冷萃6小时，奶盖撒海盐", cat:"drink", src: imgUrl("images/p02.jpg"), tag:"🥤 饮品手记" },
  { num:"03.", title:"烤箱里的面包", desc:"第一次发酵过头，第二次刚好", cat:"kitchen", src: imgUrl("images/p03.jpg"), tag:"🍳 厨房日记" },
  { num:"04.", title:"傍晚的天空", desc:"回家路上抬头拍的", cat:"walk", src: imgUrl("images/p04.jpg"), tag:"🌇 随拍" },
  { num:"05.", title:"薄荷青柠气泡", desc:"薄荷叶拍碎才出味", cat:"drink", src: imgUrl("images/p05.jpg"), tag:"🥤 饮品手记" },
  { num:"06.", title:"多多歪头杀", desc:"每次按快门都歪头", cat:"corgi", src: imgUrl("images/p06.jpg"), tag:"🐾 柯基日常" },
  { num:"07.", title:"菜市场早市", desc:"挑食材比写代码还认真", cat:"kitchen", src: imgUrl("images/p07.jpg"), tag:"🛒 日常采购" },
  { num:"08.", title:"桂花酒酿拿铁", desc:"冬天限定，酒酿自己酿", cat:"drink", src: imgUrl("images/p08.jpg"), tag:"🥤 饮品手记" },
  { num:"09.", title:"路边野花", desc:"散步时随手拍", cat:"walk", src: imgUrl("images/p09.jpg"), tag:"🌿 随拍" },
  { num:"10.", title:"多多晒太阳", desc:"阳台是它的领地", cat:"corgi", src: imgUrl("images/p10.jpg"), tag:"🐾 柯基日常" },
  { num:"11.", title:"冷萃实验第7次", desc:"比例终于对了", cat:"drink", src: imgUrl("images/p11.jpg"), tag:"🥤 饮品手记" },
  { num:"12.", title:"雨天窗台", desc:"适合写代码和发呆", cat:"walk", src: imgUrl("images/p12.jpg"), tag:"🌧 随拍" },
  { num:"13.", title:"森空岛签到脚本", desc:"Rust + GitHub Actions 自动跑", cat:"kitchen", src: imgUrl("images/p13.jpg"), tag:"⚙ 代码工坊" },
];
