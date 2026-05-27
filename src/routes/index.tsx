import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-station.jpg";
import beansImg from "@/assets/green-beans.jpg";
import originsImg from "@/assets/origins.jpg";
import { DataRow } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bumi Kopi — Indonesian green coffee. Processed, graded, exported." },
      { name: "description", content: "B2B green coffee processing house in Garut, West Java. We own the washing station. Volume welcome. Quality documented." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative border-b border-border">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Bumi Kopi washing station at dawn" width={1920} height={1280} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-coal/60 via-coal/70 to-coal" />
        </div>
        <div className="relative container-x pt-24 pb-20 md:pt-36 md:pb-32">
          <p className="eyebrow text-rust">Bumi Kopi · ICO 0140 · Est. 2018</p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-bone leading-[0.95] max-w-5xl">
            Indonesian green coffee.<br/>
            <span className="text-smoke">Processed. Graded.</span><br/>
            <span className="text-rust">Exported.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ash text-lg md:text-xl">
            We own the washing station in Cikajang. We control every variable from fermentation to parchment moisture. No broker in the chain.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/request-sample" className="btn-primary">Request up to 1kg cupping sample →</Link>
            <Link to="/catalogue" className="btn-ghost">View current lots</Link>
          </div>
          <div className="mt-14 max-w-3xl">
            <div className="hairline mb-4" />
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-smoke">Featured lot · BK-GRT-W-2604</p>
            <p className="mt-2 font-mono text-bone">Washed Garut Arabica · Screen 17+ · Moisture 11.4% · Q Grade 86.2 · FCL ready · $13.40/kg FOB</p>
          </div>
        </div>
      </section>

      {/* DATA STRIP */}
      <DataRow items={[
        { k: "Active origins", v: "4 exclusive" },
        { k: "Processing methods", v: "6" },
        { k: "Annual capacity", v: "25 FCL" },
        { k: "Cup score range", v: "82.0 – 88.5" },
      ]} />

      {/* OFFER */}
      <section className="container-x py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="eyebrow text-rust">The offer</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-bone leading-tight">Zero-risk first shipment.</h2>
            <p className="mt-5 text-ash">Up to 1kg cupping sample within 10 business days. No invoice until you approve. Off-spec delivery — replaced in the next shipment at no cost.</p>
            <Link to="/request-sample" className="btn-primary mt-8">Start with a sample →</Link>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { n: "01", t: "Enquiry", d: "Send origin, method, target screen, and volume. Reply within 1 business day." },
              { n: "02", t: "Sample shipped", d: "Up to 1kg GrainPro, DHL, full lot documentation. 10 business days to your door." },
              { n: "03", t: "Cup & confirm", d: "You cup the sample. Decision within 3 business days. No commitment." },
              { n: "04", t: "FCL contract", d: "FOB Tanjung Priok. LC at sight or 30% TT deposit. Off-spec replaced." },
            ].map((s) => (
              <div key={s.n} className="border border-border p-6 bg-card">
                <div className="font-mono text-xs text-rust">{s.n}</div>
                <h3 className="mt-3 font-display text-xl text-bone">{s.t}</h3>
                <p className="mt-2 text-sm text-smoke">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT */}
      <section className="border-y border-border">
        <div className="grid md:grid-cols-2">
          <div className="p-10 md:p-16 border-r border-border">
            <p className="eyebrow text-rust">Commercial accounts</p>
            <h3 className="mt-4 font-display text-3xl text-bone">Blend-grade. Volume. Reliable.</h3>
            <p className="mt-4 text-ash">For commercial roasters and importers buying full containers. Consistent moisture, defect counts, screen sorting.</p>
            <dl className="spec-grid mt-8">
              <dt>Price band</dt><dd>$8 – 10 / kg Ex or FOB</dd>
              <dt>Lot size</dt><dd>1 FCL min (19,200 kg)</dd>
              <dt>Cup score</dt><dd>82 – 84</dd>
              <dt>Processing</dt><dd>Washed · Natural</dd>
            </dl>
          </div>
          <div className="p-10 md:p-16">
            <p className="eyebrow text-rust">Specialty accounts</p>
            <h3 className="mt-4 font-display text-3xl text-bone">Traceable. High-score. Documented.</h3>
            <p className="mt-4 text-ash">For specialty roasters and competition buyers. Single-origin, micro-lot, full cupping protocols.</p>
            <dl className="spec-grid mt-8">
              <dt>Price band</dt><dd>$11 – 28 / kg Ex or FOB</dd>
              <dt>Lot size</dt><dd>60 kg GrainPro min</dd>
              <dt>Cup score</dt><dd>85 – 88.5</dd>
              <dt>Processing</dt><dd>Washed · Honey · Natural · Anaerobic · Infused · Own IP</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* ORIGINS */}
      <section className="container-x py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="eyebrow text-rust">Exclusive origins</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-bone">Four regions. Direct contracts.</h2>
          </div>
          <Link to="/origins" className="btn-ghost">All origins →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {[
            { n: "Toraja", r: "Sulawesi", a: "1,400 – 1,800 m", v: "Typica · S795" },
            { n: "Ijen", r: "East Java", a: "1,200 – 1,600 m", v: "Sigararutang · Lini-S" },
            { n: "Temanggung", r: "Central Java", a: "1,100 – 1,500 m", v: "Andungsari · Sigararutang" },
            { n: "Flores", r: "Bajawa, NTT", a: "1,200 – 1,500 m", v: "Typica · Catimor" },
          ].map((o) => (
            <div key={o.n} className="bg-coal p-7 hover:bg-card transition-colors">
              <div className="font-mono text-xs text-rust">{o.r}</div>
              <h3 className="mt-3 font-display text-2xl text-bone">{o.n}</h3>
              <dl className="spec-grid mt-5">
                <dt>Altitude</dt><dd>{o.a}</dd>
                <dt>Varietals</dt><dd>{o.v}</dd>
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESSING */}
      <section className="border-t border-border">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <img src={beansImg} alt="Green coffee in GrainPro" loading="lazy" width={1600} height={1066} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="p-10 md:p-16 lg:p-20 bg-card">
            <p className="eyebrow text-rust">The processing claim</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-bone leading-tight">We own the step where coffee is made or broken.</h2>
            <p className="mt-6 text-ash">Most Indonesian exporters buy parchment from middlemen. We do not. Bumi Kopi controls cherry intake, fermentation curves, washing, drying, hulling, and screen sorting in one facility.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Washed", "Honey", "Natural", "Anaerobic", "Infused", "Own IP"].map((m) => (
                <div key={m} className="border border-border p-4">
                  <p className="font-mono text-xs text-smoke uppercase tracking-wider">Method</p>
                  <p className="mt-1 font-display text-lg text-bone">{m}</p>
                </div>
              ))}
            </div>
            <Link to="/processing" className="btn-ghost mt-10">Processing protocols →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border">
        <div className="absolute inset-0">
          <img src={originsImg} alt="" loading="lazy" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-coal/80" />
        </div>
        <div className="relative container-x py-24 text-center">
          <p className="eyebrow text-rust">Next step</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl text-bone max-w-3xl mx-auto">Up to 1kg sample. 10 business days. No invoice.</h2>
          <p className="mt-5 text-ash max-w-xl mx-auto">You cup it before you commit. If it does not perform, no obligation.</p>
          <Link to="/request-sample" className="btn-primary mt-10">Request your sample →</Link>
        </div>
      </section>
    </>
  );
}
