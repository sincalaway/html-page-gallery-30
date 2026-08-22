/**
 * Design reminder — Interface Specimen Room:
 * Each card reads as a collectible exhibit label paired with a composed visual fragment; no flat title-only placeholders.
 */
import type { GalleryPage } from "@/data/gallery";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

function SpecimenMotif({ kind, accent, signal }: Pick<GalleryPage, "kind"> & { accent: string; signal: string }) {
  const shared = "absolute pointer-events-none opacity-90";
  if (kind === "product") return <><i className={`${shared} left-1/2 top-1/2 h-[72%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-current`} style={{ color: accent }} /><i className={`${shared} left-[14%] top-[46%] h-[28%] w-[76%] -rotate-[24deg] rounded-full border-2`} style={{ borderColor: signal }} /></>;
  if (kind === "studio") return <><i className={`${shared} bottom-0 left-[8%] h-[54%] w-[38%] rotate-[8deg]`} style={{ background: accent }} /><i className={`${shared} right-[8%] top-[18%] h-[42%] w-[47%] -rotate-[7deg] border`} style={{ borderColor: accent }} /></>;
  if (kind === "commerce") return <><i className={`${shared} bottom-[13%] left-[10%] h-[43%] w-[30%] rounded-[45%_45%_14%_14%] border`} style={{ borderColor: accent, background: `${accent}20` }} /><i className={`${shared} bottom-[12%] right-[16%] h-[59%] w-[26%] rounded-[50%_50%_12%_12%]`} style={{ background: signal }} /></>;
  if (kind === "dashboard") return <><i className={`${shared} bottom-[17%] left-[9%] right-[9%] h-[50%] border-b border-l`} style={{ borderColor: accent }} /><i className={`${shared} bottom-[27%] left-[12%] h-px w-[68%] rotate-[-24deg]`} style={{ background: signal }} /><i className={`${shared} bottom-[42%] left-[42%] h-px w-[41%] rotate-[36deg]`} style={{ background: signal }} /></>;
  if (kind === "editorial") return <><i className={`${shared} bottom-0 right-[10%] h-[73%] w-[39%]`} style={{ background: accent }} /><i className={`${shared} bottom-[14%] left-[8%] font-serif text-[4.6rem] leading-none`} style={{ color: signal }}>✶</i></>;
  if (kind === "wellness") return <><i className={`${shared} left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full border`} style={{ borderColor: accent }} /><i className={`${shared} left-1/2 top-1/2 h-[67%] w-[67%] -translate-x-1/2 -translate-y-1/2 rounded-full border`} style={{ borderColor: `${accent}90` }} /></>;
  if (kind === "architecture") return <><i className={`${shared} inset-[12%] border`} style={{ borderColor: accent, backgroundImage: `linear-gradient(${accent}30 1px,transparent 1px),linear-gradient(90deg,${accent}30 1px,transparent 1px)`, backgroundSize: "20px 20px" }} /><i className={`${shared} bottom-[18%] left-[27%] h-[47%] w-[48%] border-[8px]`} style={{ borderColor: signal }} /></>;
  if (kind === "festival") return <><i className={`${shared} bottom-[13%] left-[7%] font-black text-[4rem] leading-none`} style={{ color: accent }}>///</i><i className={`${shared} right-[10%] top-[17%] font-mono text-[2rem]`} style={{ color: signal }}>24H</i></>;
  if (kind === "brutalist") return <><i className={`${shared} bottom-[13%] left-[8%] border-2 px-2 py-1 font-mono text-[10px] font-bold`} style={{ borderColor: accent, color: accent }}>NO TRACKING</i><i className={`${shared} right-[9%] top-[24%] h-[43%] w-[43%] rotate-[14deg] border-[10px]`} style={{ borderColor: signal }} /></>;
  if (kind === "travel") return <><i className={`${shared} inset-[13%] border`} style={{ borderColor: accent, backgroundImage: `radial-gradient(circle at 70% 26%,${signal} 0 4px,transparent 5px),linear-gradient(135deg,transparent 0 42%,${accent} 43% 44%,transparent 45%)` }} /><i className={`${shared} bottom-[17%] left-[20%] font-mono text-[8px]`} style={{ color: signal }}>N 34° 12' 08"</i></>;
  if (kind === "game") return <><i className={`${shared} bottom-[18%] left-[10%] h-[15%] w-[15%] border-4`} style={{ borderColor: accent, boxShadow: `31px -12px 0 -2px ${signal}, 63px 8px 0 -2px ${accent}` }} /><i className={`${shared} right-[12%] top-[19%] font-mono text-[2rem]`} style={{ color: signal }}>+1</i></>;
  if (kind === "hospitality") return <><i className={`${shared} bottom-0 right-[12%] h-[80%] w-[50%] rounded-t-full border-x border-t`} style={{ borderColor: accent }} /><i className={`${shared} bottom-[20%] left-[12%] h-[2px] w-[56%]`} style={{ background: signal }} /></>;
  return <><i className={`${shared} left-1/2 top-1/2 h-[63%] w-[63%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[12px]`} style={{ borderColor: accent }} /><i className={`${shared} bottom-[16%] right-[15%] h-[23%] w-[23%] rounded-full`} style={{ background: signal }} /></>;
}

function AbstractPreview({ page, featured }: { page: GalleryPage; featured: boolean }) {
  const [base, accent, signal] = page.colors;
  const image = page.image;
  return (
    <div className={`relative overflow-hidden px-4 py-4 text-white ${featured ? "aspect-[1.62/1]" : "aspect-[1.18/1]"}`} style={{ background: base }}>
      {image ? <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" /> : null}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,.03),rgba(0,0,0,.18))]" />
      {!image ? <SpecimenMotif kind={page.kind} accent={accent} signal={signal} /> : null}
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between text-[8px] font-bold uppercase tracking-[.18em] opacity-75"><span>{page.category}</span><span>30/{page.id}</span></div>
        <div><div className="font-display text-[clamp(1.55rem,4vw,3.8rem)] font-bold leading-none tracking-[-.08em]" style={{ color: image ? "white" : accent }}>{page.name}</div><div className="mt-3 flex h-1.5 w-full overflow-hidden">{page.colors.map((color) => <i key={color} className="h-full flex-1" style={{ background: color }} />)}</div></div>
      </div>
    </div>
  );
}

export function SpecimenCard({ page, featured = false, poster = false }: { page: GalleryPage; featured?: boolean; poster?: boolean }) {
  return (
    <Link href={`/showcase/${page.slug}`} className={`gallery-card group block outline-none ${featured ? "featured" : ""} ${poster ? "poster" : ""}`}>
      <article className="specimen-card border-t border-white/20 pt-3 transition duration-200 ease-[cubic-bezier(.23,1,.32,1)] group-hover:-translate-y-1 group-focus-visible:-translate-y-1 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-[#FF5D22]">
        <AbstractPreview page={page} featured={featured} />
        <div className="mt-3 flex items-start justify-between gap-3"><div><div className="font-mono text-[10px] tracking-[.15em] text-white/45">{page.id}/30 · {page.category.toUpperCase()}</div><h2 className="mt-1 font-display text-xl font-bold tracking-[-.055em] text-white">{page.name}</h2></div><span className="mt-1 grid h-8 w-8 shrink-0 place-items-center border border-white/25 text-white transition group-hover:border-[#FF5D22] group-hover:bg-[#FF5D22] group-hover:text-[#0B0F14]"><ArrowUpRight size={15} strokeWidth={2.4} /></span></div>
        <p className="mt-2 max-w-sm text-sm leading-5 text-white/56">{page.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">{page.tags.map((tag) => <span className="border border-white/15 px-1.5 py-0.5 font-mono text-[9px] text-white/55" key={tag}>{tag}</span>)}</div>
      </article>
    </Link>
  );
}
