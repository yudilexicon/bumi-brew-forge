import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-coal mt-24">
      <div className="container-x py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 bg-rust flex items-center justify-center text-white font-mono text-xs">BK</span>
            <span className="font-display font-bold text-xl text-bone">Bumi Kopi</span>
          </div>
          <p className="mt-4 text-sm text-smoke max-w-md">B2B green coffee processing and export. We process, grade, and export. No broker in the chain.</p>
          <div className="mt-6 spec-grid max-w-xs">
            <dt>HQ</dt><dd>Bandung</dd>
            <dt>Region</dt><dd>West Java, ID</dd>
            <dt>Total Capacity</dt><dd>25 FCL / yr</dd>
            <dt>Min order</dt><dd>60 kg / GrainPro</dd>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4">Operations</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/origins" className="text-ash hover:text-rust">Origins</Link></li>
            <li><Link to="/processing" className="text-ash hover:text-rust">Processing</Link></li>
            <li><Link to="/catalogue" className="text-ash hover:text-rust">Catalogue</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Trade</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/request-sample" className="text-ash hover:text-rust">Request sample</Link></li>
            <li><Link to="/contact" className="text-ash hover:text-rust">Contact</Link></li>
            <li><a href="mailto:hello@bumi-kopi.com" className="text-ash hover:text-rust">hello@bumi-kopi.com</a></li>
            <li><a href="https://wa.me/6285726666677" target="_blank" rel="noopener noreferrer" className="text-ash hover:text-rust">WhatsApp +62 857 2666 6677</a></li>
          </ul>
        </div>
        <div className="md:col-span-4 border-t border-border pt-8 mt-2 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow text-rust mb-3">Capital Investment · Bumi Kopi</p>
            <p className="font-display text-2xl text-bone leading-tight">Equity round open. $1M ARR target within 24 months.</p>
            <p className="mt-3 text-sm text-smoke max-w-xl">Direct equity in a vertically integrated Indonesian processor. Drying capacity, farm-gate contracts, working capital. NDA required for data room.</p>
          </div>
          <div className="md:col-span-5 flex flex-col md:items-end gap-2">
            <Link to="/invest" className="btn-primary">Invest in Bumi Kopi →</Link>
            <a href="mailto:hello@bumi-kopi.com" className="font-mono text-[11px] uppercase tracking-[0.14em] text-smoke">hello@bumi-kopi.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 flex flex-col md:flex-row justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-smoke">
          <span>© {new Date().getFullYear()} Bumi Kopi</span>
          <span>FOB Tanjung Priok · Incoterms 2020 · ICO 0140</span>
        </div>
      </div>
    </footer>
  );
}
