/**
 * Design reminder — Interface Specimen Room:
 * This is the persistent T/30 cut-ring mark: signal orange is a formal museum tag, never a loose decorative slash.
 */
import { markImage } from "@/data/gallery";

export function BrandMark({ size = 44, label = "THIRTY 标志", className = "" }: { size?: number; label?: string; className?: string }) {
  return (
    <span
      aria-label={label}
      role="img"
      className={`relative inline-grid shrink-0 place-items-center rounded-full border border-[#FF5D22] bg-[#0B0F14] ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="absolute h-[79%] w-[17%] rotate-[31deg] bg-[#FF5D22]" />
      <span className="absolute inset-[21%] rounded-full border border-[#FF5D22]" />
      <img src={markImage} alt="" className="relative z-10 h-[60%] w-[60%] object-contain opacity-80 mix-blend-screen" />
    </span>
  );
}
