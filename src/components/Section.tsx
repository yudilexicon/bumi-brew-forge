import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, lede, meta }: { eyebrow: string; title: string; lede?: string; meta?: ReactNode }) {
  return (
    <section className="border-b border-border">
      <div className="container-x pt-20 pb-14">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl text-bone max-w-4xl leading-[1.05]">{title}</h1>
        {lede && <p className="mt-6 max-w-2xl text-ash text-lg">{lede}</p>}
        {meta && <div className="mt-8">{meta}</div>}
      </div>
    </section>
  );
}

export function DataRow({ items }: { items: { k: string; v: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-y border-border divide-x divide-border">
      {items.map((i) => (
        <div key={i.k} className="p-5">
          <div className="eyebrow">{i.k}</div>
          <div className="mt-2 font-mono text-bone text-lg">{i.v}</div>
        </div>
      ))}
    </div>
  );
}
