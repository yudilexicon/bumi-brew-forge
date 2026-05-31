import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AmbientToggle } from "@/components/audio/AmbientAudio";

const nav = [
  { to: "/origins", label: "Origins" },
  { to: "/processing", label: "Processing" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/about", label: "About" },
  { to: "/invest", label: "Invest" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-coal/85 border-b border-border">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <span className="w-7 h-7 bg-rust flex items-center justify-center text-white font-mono text-[11px]">BK</span>
          <span className="font-display font-bold tracking-tight text-bone">Bumi Kopi</span>
          <span className="hidden md:inline font-mono text-[10px] text-smoke tracking-[0.18em] uppercase pl-3 border-l border-border">Garut · West Java</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="font-mono text-[12px] uppercase tracking-[0.14em] text-ash hover:text-rust transition-colors" activeProps={{ className: "text-rust" }}>
              {n.label}
            </Link>
          ))}
          <AmbientToggle />
          <Link to="/request-sample" className="btn-primary">Request up to 1kg sample →</Link>
        </nav>
        <div className="md:hidden flex items-center gap-4">
          <AmbientToggle />
          <button onClick={() => setOpen(!open)} className="font-mono text-xs uppercase text-bone">{open ? "Close" : "Menu"}</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-coal">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-mono text-xs uppercase tracking-wider text-ash py-2">{n.label}</Link>
            ))}
            <Link to="/request-sample" onClick={() => setOpen(false)} className="btn-primary justify-center">Request sample</Link>
          </div>
        </div>
      )}
    </header>
  );
}
