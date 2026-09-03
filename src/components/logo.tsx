import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Zimobi - início">
      <span className="relative flex size-9 items-center justify-center rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/20">
        <span className="absolute h-2.5 w-4 rotate-[-35deg] rounded-full bg-slate-950" />
        <span className="absolute h-2.5 w-4 translate-x-1.5 translate-y-1.5 rotate-[-35deg] rounded-full bg-white" />
      </span>
      <span className={`text-xl font-bold tracking-[-0.04em] ${light ? "text-white" : "text-slate-950"}`}>
        zimobi
      </span>
    </Link>
  );
}
