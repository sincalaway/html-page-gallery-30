/**
 * Design reminder — Interface Specimen Room:
 * The viewer should remain a restrained exhibition frame, allowing each specimen's independent visual world to dominate.
 */
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link, useLocation, useRoute } from "wouter";
import { galleryPages, markImage } from "@/data/gallery";

export default function Showcase() {
  const [, params] = useRoute("/showcase/:slug");
  const [, navigate] = useLocation();
  const index = galleryPages.findIndex((page) => page.slug === params?.slug);
  const page = galleryPages[index];
  useEffect(() => {
    if (!page) navigate("/");
  }, [navigate, page]);
  if (!page) return null;
  const previous = galleryPages[(index + galleryPages.length - 1) % galleryPages.length];
  const next = galleryPages[(index + 1) % galleryPages.length];
  const staticPath = `/pages/${page.id}-${page.slug}/index.html`;

  return (
    <main className="flex min-h-screen flex-col bg-[#0B0F14] text-white">
      <header className="flex min-h-16 shrink-0 items-center justify-between gap-3 border-b border-white/15 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.13em] text-white/65 hover:text-[#FF5D22]"><ArrowLeft size={15} /> 返回索引</Link>
        <div className="hidden items-center gap-2 sm:flex"><img src={markImage} className="h-7 w-7" alt="" /><span className="font-mono text-[10px] tracking-[.18em] text-white/45">SPECIMEN {page.id}/80</span></div>
        <a href={staticPath} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 border border-white/25 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[.12em] text-white/70 transition hover:border-[#FF5D22] hover:bg-[#FF5D22] hover:text-[#0B0F14]">原始 HTML <ExternalLink size={13} /></a>
      </header>
      <section className="grid shrink-0 gap-4 border-b border-white/15 px-4 py-4 sm:grid-cols-[1fr_auto] sm:px-6"><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#FF5D22]">{page.category} / {page.tags.join(" · ")}</p><h1 className="mt-1 font-display text-3xl font-bold tracking-[-.075em] sm:text-4xl">{page.name}</h1><p className="mt-1 max-w-2xl text-sm text-white/55">{page.description}</p></div><div className="flex items-end gap-2"><Link href={`/showcase/${previous.slug}`} aria-label={`上一页：${previous.name}`} className="grid h-9 w-9 place-items-center border border-white/20 text-white/65 transition hover:border-white hover:text-white"><ArrowLeft size={16} /></Link><Link href={`/showcase/${next.slug}`} aria-label={`下一页：${next.name}`} className="grid h-9 w-9 place-items-center border border-white/20 text-white/65 transition hover:border-white hover:text-white"><ArrowRight size={16} /></Link></div></section>
      <section className="min-h-0 flex-1 bg-[#171B20] p-3 sm:p-5"><div className="relative h-[calc(100vh-194px)] min-h-[540px] overflow-hidden bg-white shadow-[0_18px_55px_rgba(0,0,0,.35)]"><iframe title={`${page.name} 页面预览`} src={staticPath} className="h-full w-full border-0" /></div></section>
    </main>
  );
}
