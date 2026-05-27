import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, DataRow } from "@/components/Section";

export const Route = createFileRoute("/processing")({
  head: () => ({
    meta: [
      { title: "Processing — Bumi Kopi" },
      { name: "description", content: "Six processing methods, one washing station. Washed, honey, natural, anaerobic, infused, and proprietary IP. Cikajang, West Java." },
    ],
  }),
  component: Processing,
});

const methods = [
  { n: "Washed", code: "W", spec: "48–72h fermentation · pH log · 11.0–11.8% moisture", note: "Clean, bright, varietal-forward. Default for specialty single-origin." },
  { n: "Honey", code: "H", spec: "Mucilage retained 40–80% · raised bed drying 14–18 days", note: "Sweetness uplift, syrupy body. Yellow, red, and black variants." },
  { n: "Natural", code: "N", spec: "Whole cherry drying 18–24 days · daily rotation logs", note: "Fruit-forward, heavy body. Strict defect screening post-hull." },
  { n: "Anaerobic", code: "A", spec: "Sealed tank 96–120h · CO₂ monitored · temp 18–22°C", note: "Esters, wine notes, ferment-driven aromatics. Lot-coded only." },
  { n: "Infused", code: "I", spec: "Co-fermentation with food-grade botanicals · NDA on inputs", note: "Specific aromatic profiles on request. Limited quantities." },
  { n: "Own IP", code: "X", spec: "Proprietary protocol · NDA required · documented chain of custody", note: "Developed in-house. Differentiated cup score above 87. NDA required." },
];

function Processing() {
  return (
    <>
      <PageHeader
        eyebrow="Bumi Kopi · Processing"
        title="One washing station. Six methods. Every variable logged."
        lede='"Can you maintain consistency at volume?" — We own the washing station. We control every variable from cherry intake to parchment moisture. The answer is yes.'
      />
      <DataRow items={[
        { k: "Station", v: "Cikajang, 1,400m" },
        { k: "Daily intake", v: "Up to 4,000 kg cherry" },
        { k: "Drying beds", v: "180 raised" },
        { k: "Hulling", v: "Pinhalense MVF" },
      ]} />

      <section className="container-x py-20">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {methods.map((m) => (
            <div key={m.n} className="bg-coal p-10 hover:bg-card transition-colors">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-rust text-sm">[{m.code}]</span>
                <h2 className="font-display text-3xl text-bone">{m.n}</h2>
              </div>
              <p className="mt-4 font-mono text-xs text-smoke uppercase tracking-wider">{m.spec}</p>
              <p className="mt-4 text-ash">{m.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container-x py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow text-rust">Quality control</p>
            <h2 className="mt-4 font-display text-4xl text-bone">Documented at every step.</h2>
            <p className="mt-4 text-ash">Each lot ships with a five-document pack. No shipment leaves Tanjung Priok without it.</p>
          </div>
          <ol className="space-y-3">
            {[
              "Cupping report (SCA protocol, 3 cuppers, signed)",
              "Moisture certificate (Sinar AP6060, 3-point sample)",
              "Screen size distribution (≥80% above stated screen)",
              "Defect count (green + roast, Brazilian + EAFCA)",
              "Phytosanitary + ICO certificate of origin",
            ].map((d, i) => (
              <li key={d} className="flex gap-4 border-b border-border pb-3">
                <span className="font-mono text-rust text-sm">0{i+1}</span>
                <span className="text-bone">{d}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-bone max-w-3xl mx-auto">Need a specific processing protocol?</h2>
        <p className="mt-4 text-ash">NDA available for Own IP methods. Spec sheets on request.</p>
        <Link to="/contact" className="btn-primary mt-8">Talk to operations →</Link>
      </section>
    </>
  );
}
