/**
 * Design reminder — Interface Specimen Room:
 * Even an invalid route is an exhibition corridor: black ink, signal-orange marking and a clear way back to the catalogue.
 */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-[#0B0F14] px-6 text-white"><section className="w-full max-w-xl border-y border-white/20 py-8"><div className="flex items-center justify-between"><BrandMark size={54} /><span className="font-mono text-[10px] tracking-[.18em] text-[#FF5D22]">ROOM / NOT FOUND</span></div><p className="mt-16 font-mono text-[10px] uppercase tracking-[.18em] text-white/45">Specimen unavailable</p><h1 className="mt-2 font-display text-7xl font-bold tracking-[-.1em] sm:text-9xl">404<span className="text-[#FF5D22]">.</span></h1><p className="mt-5 max-w-sm text-lg leading-7 text-white/60">这件标本不在当前展厅。返回目录，重新选择一个可进入的页面。</p><Link href="/" className="mt-8 inline-flex items-center gap-2 border border-[#FF5D22] px-4 py-3 font-mono text-[10px] uppercase tracking-[.15em] text-[#FF5D22] transition hover:bg-[#FF5D22] hover:text-[#0B0F14]"><ArrowLeft size={14} /> 返回索引</Link></section></main>;
}
