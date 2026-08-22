# THIRTY / EIGHTY+ — Interface Specimen Room

> **82 个可直接打开、可继续改造的当代 HTML 页面。**

THIRTY 将网页设计趋势整理成一座可浏览的“界面标本室”。项目提供一个 React 画廊入口，以及 **82 个完全独立的 HTML 页面**；每个示例均包含自身的 HTML、CSS 与少量原生 JavaScript，不依赖构建步骤即可单独在浏览器中查看。

## 内容与结构

| 内容 | 位置 | 用途 |
| --- | --- | --- |
| 画廊首页与预览器 | `client/src/` | 分类、搜索、查看八十二个完整页面。 |
| 独立 HTML 页面 | `client/public/pages/` | 可直接访问或复制到其他项目的最终页面文件。 |
| 页面生成器 | `scripts/build-pages.mjs`、`scripts/build-interactive-pages.mjs` | 分别生成经典策展页与五十个炫彩互动页。 |
| 设计构想 | `ideas.md` | 记录选定的“界面标本室”风格与策展目录。 |

每个原始页面可从以下路径直接访问：

```text
/pages/01-aster/index.html
/pages/02-folklore/index.html
...
/pages/30-atlas/index.html
/pages/31-prism-cursor/index.html
...
/pages/80-daylight-planner/index.html
/pages/81-js-obfuscator/index.html
/pages/82-python-obfuscator/index.html
```

## 炫彩互动扩展

新增的五十个页面不只是视觉稿；它们均使用原生 Canvas 或浏览器端表单逻辑，在不依赖外部运行时的前提下提供可操作的效果。鼠标轨迹、粒子、轨道、小球碰撞等实验参考了创意编程中常见的响应式画布交互；工具页则将动效约束在服务操作的范围内。[3] [4]

| 编号 | 新增类别 | 数量 | 代表页面 | 可操作内容 |
| --- | --- | ---: | --- | --- |
| 31–40 | 鼠标色彩 | 10 | Prism Cursor、Liquid Cursor、Kaleidoscope | 彩虹尾迹、彩纸、万花筒、涟漪、磁场。 |
| 41–50 | 宇宙行星 | 10 | Solar Atlas、Orbit Lab、Comet Trail | 太阳系轨道、行星选择、星场、彗星与任务面板。 |
| 51–65 | 物理动画 | 15 | Gravity Balls、Spring Mesh、Wave Field | 碰撞、引力、摆锤、流场、粒子和波浪。 |
| 66–80 | 实用工具 | 15 | Focus Pomodoro、Color Mixer、Task Matrix | 计时、颜色、换算、密码提示、时间轮与日程安排。 |
| 81–82 | 本地代码工具 | 2 | JS Obfuscator、Python Code Wrap | 客户端代码输入、轻量处理、复制与文件下载。 |

## 本地代码工具

第 81 和第 82 号页面均为**浏览器内处理**的独立 HTML 文件。`JS Obfuscator` 提供代码压缩、字符串池、局部标识符调整和下载；`Python Code Wrap` 生成一个 Base64 封装器，并提供双编辑器、快捷键与尺寸统计。它们是轻量示例，不能替代密钥管理、服务端授权或其他安全机制；请仅处理自己拥有或被授权维护的代码，并在发布前自行测试生成结果。

## 页面目录

| 编号 | 页面 | 类别 | 核心风格 |
| --- | --- | --- | --- |
| 01 | Aster | 科技 | AI、沉浸式产品视觉、模块化指标 |
| 02 | Folklore | 创意 | 编辑排版、非对称作品索引 |
| 03 | Form & Field | 生活方式 | 手作质感、柔性电商 |
| 04 | Strata | 金融 | 深色仪表盘、数据叙事 |
| 05 | Orbital | 时尚 | 奢侈极简、时装编辑感 |
| 06 | Stillwater | 健康 | 冥想、自然色、呼吸留白 |
| 07 | Plinth | 建筑 | 瑞士网格、工程标尺 |
| 08 | Good Grains | 餐饮 | 复古咖啡、暖色包装视觉 |
| 09 | Clove | 美妆 | 多巴胺色彩、柔性产品舞台 |
| 10 | Loop | 文化 | 音乐节、动感排版、海报构图 |
| 11 | Fable | 文化 | 独立书店、文学编辑感 |
| 12 | Helm | 科技 | 新粗野主义、隐私工具 |
| 13 | Mira | 旅行 | 路线故事、地图式叙事 |
| 14 | Rooted | 生活方式 | 植物订阅、可持续提示 |
| 15 | Tactile | 家居 | 材质感、家具电商 |
| 16 | Pixelkite | 游戏 | 像素 UI、冒险叙事 |
| 17 | Momentum | 运动 | 跑步社区、运动数据 |
| 18 | Sora | 酒店 | 日式山居、克制留白 |
| 19 | Nami | 餐饮 | 现代餐厅、食材拼贴 |
| 20 | Qubit | 科技 | 机器人、未来工业风 |
| 21 | Terra | 公益 | 气候数据、影响路径 |
| 22 | Playbook | 教育 | 游戏化学习、鲜明色块 |
| 23 | Meridian | 创意 | 设计咨询、抽象案例研究 |
| 24 | Alloy | 时尚 | 眼镜、镜面金属、单品展示 |
| 25 | Slowhouse | 酒店 | 电影画幅、慢旅行体验 |
| 26 | Cinder | 美妆 | 香氛、黑金感、层叠文案 |
| 27 | Openhand | 公益 | 社区行动、人文叙事 |
| 28 | Secondo | 餐饮 | 调酒空间、夜间 editorial |
| 29 | Tonic | 运动 | 高性能训练、动态数据 |
| 30 | Atlas | 旅行 | 探索工具、任务地图 |

## 本地运行

项目使用 React、Vite、Tailwind CSS 4 和 Wouter 构建画廊外壳。请先安装 Node.js 22+ 与 pnpm，然后执行：

```bash
pnpm install
pnpm dev
```

如修改了 `scripts/build-pages.mjs` 中的页面定义，可重新生成所有独立文件：

```bash
node scripts/build-pages.mjs
node scripts/build-interactive-pages.mjs
```

生产验证命令如下：

```bash
pnpm check
pnpm build
```

## 设计说明

画廊采用**瑞士国际主义排版与当代数字展览设计**的组合：深墨色框架、信号橘高亮、明确的双层编号与超大裁切字标，确保八十二种独立风格在同一目录中仍拥有清晰秩序。示例覆盖沉浸式视觉、实验性导航、醒目字体、深色模式、轻量动效、粗野主义和可持续体验等近年常见的网页方向。[1] [2]

### 参考资料

[1]: https://www.figma.com/resource-library/web-design-trends/ "Figma：Top web design trends for 2026"
[2]: https://www.zoho.com/landingpage/landing-page-design-trends.html "Zoho LandingPage：10 proven landing page design trends for 2026"
[3]: https://experiments.withgoogle.com/search?q=particles "Experiments with Google：Interactive particle experiments"
[4]: https://www.awwwards.com/awwwards/collections/css-js-animations/ "Awwwards：CSS & JS Animations"
