/**
 * Design reminder — Interface Specimen Room:
 * Quiet ink-black curatorial frame; every page acts as a distinct, highly legible design specimen.
 */
import { interactivePages } from "./interactivePages";
import { toolPages } from "./toolPages";

export type GalleryPage = {
  id: string;
  slug: string;
  name: string;
  category: string;
  kind: string;
  description: string;
  tags: string[];
  colors: [string, string, string];
  image?: string;
};

export const heroImage = "/manus-storage/thirty-hero-exhibition_96aa4bca.jpg";
export const markImage = "/manus-storage/thirty-mark_fce34e46.png";

export const originalGalleryPages: GalleryPage[] = [
  { id: "01", slug: "aster", name: "Aster", category: "科技", kind: "product", description: "AI 产品发布页，以轨道光迹和模块化性能指标组织叙事。", tags: ["AI", "3D", "暗色"], colors: ["#071427", "#2875FF", "#FF5D22"], image: "/manus-storage/aster-orbital-sculpture_fd633819.jpg" },
  { id: "02", slug: "folklore", name: "Folklore", category: "创意", kind: "studio", description: "创意工作室主页，使用编辑式层级和非对称作品目录。", tags: ["Studio", "Editorial", "Grid"], colors: ["#F1ECE3", "#17211F", "#CF4E2A"] },
  { id: "03", slug: "form-and-field", name: "Form & Field", category: "生活方式", kind: "commerce", description: "陶艺品牌商店，以柔性圆角、留白和材质细节呈现产品。", tags: ["Craft", "Soft UI", "Shop"], colors: ["#E5DED0", "#6C5A4D", "#A2B58A"] },
  { id: "04", slug: "strata", name: "Strata", category: "金融", kind: "dashboard", description: "金融科技官网，将高密度数据做成有节制的深色仪表盘。", tags: ["Fintech", "Data", "Bento"], colors: ["#0C1220", "#CAD5FF", "#5AF2BB"] },
  { id: "05", slug: "orbital", name: "Orbital", category: "时尚", kind: "editorial", description: "高级时装主页，让超大字标、剪裁影像与空白并置。", tags: ["Fashion", "Luxury", "Type"], colors: ["#E8E2D7", "#101010", "#A5C3D1"], image: "/manus-storage/orbital-fashion-editorial_88bd14f3.jpg" },
  { id: "06", slug: "stillwater", name: "Stillwater", category: "健康", kind: "wellness", description: "冥想体验页，以缓慢呼吸的圆形、自然色和舒展留白安定注意力。", tags: ["Wellness", "Calm", "Motion"], colors: ["#F4F5EC", "#345E57", "#DFA971"] },
  { id: "07", slug: "plinth", name: "Plinth", category: "建筑", kind: "architecture", description: "建筑事务所作品集，将项目视图放入精确的工程标尺中。", tags: ["Architecture", "Swiss", "Mono"], colors: ["#E6E5DF", "#17201E", "#E63F1C"] },
  { id: "08", slug: "good-grains", name: "Good Grains", category: "餐饮", kind: "commerce", description: "精品咖啡品牌，以复古包装、浓烈暖色和杂志式推荐建立记忆。", tags: ["Coffee", "Retro", "Shop"], colors: ["#F6E4C9", "#45241B", "#D95628"], image: "/manus-storage/good-grains-coffee_e30a2a2a.jpg" },
  { id: "09", slug: "clove", name: "Clove", category: "美妆", kind: "commerce", description: "护肤品牌发布页，在多巴胺色彩与柔性容器中突出单品。", tags: ["Beauty", "Playful", "Product"], colors: ["#F2B3D1", "#3A2668", "#F7E450"] },
  { id: "10", slug: "loop", name: "Loop", category: "文化", kind: "festival", description: "音乐节主视觉，以高频排版和舞台时间轴引导浏览。", tags: ["Music", "Kinetic", "Poster"], colors: ["#17082D", "#F5FF59", "#FF3DA7"] },
  { id: "11", slug: "fable", name: "Fable", category: "文化", kind: "editorial", description: "独立书店主页，用文学衬线、书脊索引和节制色调放大阅读氛围。", tags: ["Books", "Serif", "Editorial"], colors: ["#F7F1E7", "#242B41", "#C76D4A"] },
  { id: "12", slug: "helm", name: "Helm", category: "科技", kind: "brutalist", description: "隐私工具官网，用高对比边框与直接语言建立清醒可信的个性。", tags: ["Privacy", "Brutalism", "Bold"], colors: ["#F4F4EE", "#121212", "#24E085"] },
  { id: "13", slug: "mira", name: "Mira", category: "旅行", kind: "travel", description: "旅行编辑部专题，以路线、画幅和章节导航讲述远方。", tags: ["Travel", "Story", "Map"], colors: ["#DDE6E4", "#143A47", "#E7663F"] },
  { id: "14", slug: "rooted", name: "Rooted", category: "生活方式", kind: "wellness", description: "植物订阅服务，在植物档案和低影响提示中表达可持续。", tags: ["Plant", "Sustainable", "Organic"], colors: ["#DEE5D4", "#294434", "#C28D52"] },
  { id: "15", slug: "tactile", name: "Tactile", category: "家居", kind: "commerce", description: "家具品牌主页，借由材质、柔和阴影和故事化模块增添触感。", tags: ["Furniture", "Material", "Minimal"], colors: ["#EDE6DC", "#2A2520", "#9F775A"] },
  { id: "16", slug: "pixelkite", name: "Pixelkite", category: "游戏", kind: "game", description: "独立游戏着陆页，以像素交互、成就面板和冒险文案建立期待。", tags: ["Game", "Pixel", "Play"], colors: ["#232056", "#8AE5FF", "#FFD84D"] },
  { id: "17", slug: "momentum", name: "Momentum", category: "运动", kind: "dashboard", description: "跑步社区品牌，将实时数据、挑战路线和黑白运动影像融为一体。", tags: ["Running", "Sport", "Stats"], colors: ["#111111", "#F4F1EC", "#E9FF38"] },
  { id: "18", slug: "sora", name: "Sora", category: "酒店", kind: "hospitality", description: "日式山居酒店，以纸感留白、静默图形和仪式化预约构成体验。", tags: ["Hotel", "Japanese", "Quiet"], colors: ["#F5F1E7", "#28352F", "#C95B3C"] },
  { id: "19", slug: "nami", name: "Nami", category: "餐饮", kind: "hospitality", description: "现代餐厅官网，用食材拼贴、预约入口和菜单节奏激发食欲。", tags: ["Restaurant", "Food", "Reservation"], colors: ["#C6D9D0", "#12302D", "#ED6E3B"] },
  { id: "20", slug: "qubit", name: "Qubit", category: "科技", kind: "product", description: "机器人实验室主页，以深空色、工业线框和技术叙事制造未来感。", tags: ["Robotics", "Industrial", "Future"], colors: ["#0B1025", "#8C9CFF", "#F06CFF"] },
  { id: "21", slug: "terra", name: "Terra", category: "公益", kind: "impact", description: "气候行动专题，以数据圆环、地形色和清晰的影响路径邀请参与。", tags: ["Climate", "Impact", "Data"], colors: ["#EDE2CB", "#294439", "#E4522C"] },
  { id: "22", slug: "playbook", name: "Playbook", category: "教育", kind: "game", description: "儿童教育产品，将课程、成就和行动任务组织成有温度的游戏化旅程。", tags: ["Education", "Playful", "Learning"], colors: ["#FFF0AE", "#254C9E", "#F66A47"] },
  { id: "23", slug: "meridian", name: "Meridian", category: "创意", kind: "studio", description: "设计咨询事务所，用轴线、抽象构图与克制的案例研究形成信任。", tags: ["Consulting", "Minimal", "Cases"], colors: ["#EEEEEA", "#111827", "#D15A37"] },
  { id: "24", slug: "alloy", name: "Alloy", category: "时尚", kind: "commerce", description: "眼镜品牌体验页，运用镜面金属、单品特写和横向节奏呈现产品。", tags: ["Eyewear", "Chrome", "Product"], colors: ["#D9D9D8", "#27272A", "#5D89FF"] },
  { id: "25", slug: "slowhouse", name: "Slowhouse", category: "酒店", kind: "hospitality", description: "慢旅行度假屋，以电影画幅、日程和柔暗色调让人提前放松。", tags: ["Retreat", "Cinematic", "Slow"], colors: ["#C9B8A5", "#273437", "#E5B38B"] },
  { id: "26", slug: "cinder", name: "Cinder", category: "美妆", kind: "editorial", description: "香氛品牌展示页，以黑金质地、感官文字和层叠标签组织气味。", tags: ["Fragrance", "Dark", "Luxury"], colors: ["#211C1B", "#F4E5BA", "#B25B36"] },
  { id: "27", slug: "openhand", name: "Openhand", category: "公益", kind: "impact", description: "社区公益机构，以人文照片感、清晰任务和行动卡片强化信任。", tags: ["Community", "Human", "Action"], colors: ["#F4EBDF", "#284652", "#DE7141"] },
  { id: "28", slug: "secondo", name: "Secondo", category: "餐饮", kind: "festival", description: "夜间调酒空间，以配方字符、暗红灯光和预约机制组织体验。", tags: ["Cocktail", "Night", "Editorial"], colors: ["#171414", "#E4C0A3", "#B2332F"] },
  { id: "29", slug: "tonic", name: "Tonic", category: "运动", kind: "product", description: "高性能训练平台，用动感数据和挑战入口营造科技运动氛围。", tags: ["Fitness", "Performance", "Motion"], colors: ["#132B2A", "#CEFF42", "#F8F8F5"] },
  { id: "30", slug: "atlas", name: "Atlas", category: "旅行", kind: "travel", description: "探索工具页，用地图化导航、任务卡和沉浸式地点叙事收束目录。", tags: ["Explore", "Map", "Adventure"], colors: ["#0E2941", "#D7E4DD", "#F56A43"] },
];

export const galleryPages: GalleryPage[] = [...originalGalleryPages, ...interactivePages, ...toolPages];
export const galleryCategories = ["全部", ...Array.from(new Set(galleryPages.map((page) => page.category)))];
