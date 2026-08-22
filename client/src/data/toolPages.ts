/** Design reminder — tool preview: this specimen is a clean, blue local-code workbench within the otherwise dark exhibition catalogue. */
import type { GalleryPage } from "./gallery";

export const toolPages: GalleryPage[] = [
  {
    id: "81",
    slug: "js-obfuscator",
    name: "JS Obfuscator",
    category: "工具",
    kind: "utility",
    description: "本地 JavaScript 混淆工作台：代码输入、处理选项、复制与下载均在浏览器中完成。",
    tags: ["JavaScript", "Local", "Code"],
    colors: ["#effbff", "#21a7ea", "#55d9cf"],
  },
  {
    id: "82",
    slug: "python-obfuscator",
    name: "Python Code Wrap",
    category: "工具",
    kind: "utility",
    description: "本地 Python 代码封装工具：双编辑器、快捷键、统计卡片、复制与下载都在浏览器中运行。",
    tags: ["Python", "Local", "Base64"],
    colors: ["#f3f3ff", "#7555e9", "#34c8a3"],
  },
];
