/**
 * Design reminder — Interface Specimen Room:
 * Use a varied exhibition track, not a template wall: oversized cards, offset posters and strict exhibit-label information create the rhythm.
 */
import { useMemo, useState } from "react";
import { ArrowDown, Search, X } from "lucide-react";
import { galleryCategories, galleryPages, heroImage } from "@/data/gallery";
import { BrandMark } from "@/components/BrandMark";
import { SpecimenCard } from "@/components/SpecimenCard";

const featuredIds = new Set(["01", "11", "21"]);
const posterIds = new Set(["05", "10", "18", "26"]);

export default function Home() {
  const [category, setCategory] = useState("全部");
  const [query, setQuery] = useState("");
  const filteredPages = useMemo(() => galleryPages.filter((page) => {
    const normalizedQuery = query.trim().toLowerCase();
    const matchesCategory = category === "全部" || page.category === category;
    const matchesQuery = !normalizedQuery || [page.name, page.category, ...page.tags].join(" ").toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  }), [category, query]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0F14] text-white selection:bg-[#FF5D22] selection:text-[#0B0F14]">
      <section className="relative min-h-[680px] overflow-hidden border-b border-white/15 px-5 pb-12 pt-5 sm:px-8 lg:min-h-[720px] lg:px-12">
          <div className="absolute inset-x-[28%] inset-y-0 opacity-70 [mask-image:linear-gradient(90deg,transparent,black_20%,black_75%,transparent)]"><img className="h-full w-full object-cover" src={heroImage} alt="" /><div className="absolute inset-0 bg-[linear-gradient(90deg,#0B0F14_0%,rgba(11,15,20,.48)_50%,#0B0F14_100%)]" /></div>
        <BrandMark size={166} className="absolute -right-11 bottom-11 opacity-75 sm:right-[8%]" />
        <header className="relative z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.15em]"><div className="flex items-center gap-2.5"><BrandMark size={42} /><span>THIRTY<br />SPECIMENS</span></div><span className="hidden text-white/55 sm:block">WEB INTERFACE ARCHIVE · 2026</span><a className="border border-white/30 px-3 py-2 text-white transition hover:border-[#FF5D22] hover:bg-[#FF5D22] hover:text-[#0B0F14]" href="#catalogue">进入目录</a></header>
        <div className="relative z-10 mt-28 max-w-6xl sm:mt-36"><p className="mb-6 font-mono text-xs uppercase tracking-[.24em] text-[#FF5D22]">Catalogue / 80 digital specimens</p><h1 className="font-display text-[clamp(4.1rem,15vw,12.8rem)] font-bold leading-[.72] tracking-[-.115em]">EIGHTY<span className="text-[#FF5D22]">.</span></h1><div className="mt-10 flex max-w-4xl flex-col gap-8 border-t border-white/20 pt-5 sm:flex-row sm:items-end sm:justify-between"><p className="max-w-xl text-lg leading-7 text-white/70 sm:text-xl">80 种界面立场，逐页进入。新增鼠标色彩、宇宙行星、物理动画与实用工具，让每一页都能真正被操作。</p><a href="#catalogue" className="inline-flex w-fit items-center gap-2 border-b border-[#FF5D22] pb-1 font-mono text-[10px] uppercase tracking-[.16em] text-[#FF5D22]">开始巡览 <ArrowDown size={14} /></a></div></div>
        <div className="absolute bottom-5 left-5 z-10 font-mono text-[9px] uppercase tracking-[.14em] text-white/40 sm:left-8 lg:left-12">Curated for motion · type · contrast · care</div>
      </section>
      <section id="catalogue" className="relative px-5 py-14 sm:px-8 lg:px-12 lg:py-20"><div className="grid gap-8 border-b border-white/15 pb-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#FF5D22]">Index</p><h2 className="mt-2 font-display text-4xl font-bold tracking-[-.075em] sm:text-6xl">挑一件标本，<br />看看它如何留下注意力。</h2></div><div className="relative border-b border-white/25 py-2"><Search className="absolute left-0 top-1/2 -translate-y-1/2 text-white/40" size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="搜索页面" className="w-full bg-transparent pl-7 pr-7 font-mono text-xs tracking-[.12em] text-white outline-none placeholder:text-white/35" placeholder="搜索风格 / 类型 / 名称" />{query && <button onClick={() => setQuery("")} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#FF5D22]" aria-label="清除搜索"><X size={15} /></button>}</div></div>
        <div className="sticky top-0 z-20 -mx-5 mb-9 border-b border-white/10 bg-[#0B0F14]/95 px-5 py-4 backdrop-blur sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"><div className="flex gap-2 overflow-x-auto pb-1">{galleryCategories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`shrink-0 border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.12em] transition ${category === item ? "border-[#FF5D22] bg-[#FF5D22] text-[#0B0F14]" : "border-white/20 text-white/60 hover:border-white hover:text-white"}`}>{item}</button>)}</div></div>
        <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.13em] text-white/45"><span>{category === "全部" ? "全目录" : category}</span><span>{filteredPages.length.toString().padStart(2, "0")} 件标本</span></div>
        {filteredPages.length ? <div className="gallery-track grid gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">{filteredPages.map((page) => <div key={page.slug} className={`${featuredIds.has(page.id) ? "sm:col-span-2" : ""} ${posterIds.has(page.id) ? "gallery-poster" : ""}`}><SpecimenCard page={page} featured={featuredIds.has(page.id)} poster={posterIds.has(page.id)} /></div>)}</div> : <div className="border border-dashed border-white/25 py-24 text-center"><p className="font-display text-3xl tracking-[-.06em]">没有找到对应标本。</p><button onClick={() => { setCategory("全部"); setQuery(""); }} className="mt-5 border border-[#FF5D22] px-4 py-2 font-mono text-[10px] uppercase tracking-[.15em] text-[#FF5D22] hover:bg-[#FF5D22] hover:text-[#0B0F14]">清除条件</button></div>}
      </section>
      <footer className="border-t border-white/15 px-5 py-7 sm:px-8 lg:px-12"><div className="flex flex-col justify-between gap-4 font-mono text-[10px] uppercase tracking-[.13em] text-white/40 sm:flex-row"><span className="flex items-center gap-2"><BrandMark size={25} /> THIRTY / Interface specimen room</span><span>由 HTML · CSS · JavaScript 构成</span></div></footer>
    </main>
  );
}
