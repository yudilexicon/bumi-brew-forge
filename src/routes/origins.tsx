import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";
import originsImg from "@/assets/origins.jpg";

export const Route = createFileRoute("/origins")({
  head: () => ({
    meta: [
      { title: "Origins — Bumi Kopi" },
      { name: "description", content: "Four exclusive Indonesian origins under direct contract: Toraja, Ijen, Temanggung, Flores. Altitudes, varietals, harvest windows." },
    ],
  }),
  component: Origins,
});

const origins = [
  { n: "Toraja", r: "Sulawesi", a: "1,400 – 1,800 m", v: "Typica, S795", h: "May – Sep", profile: "Earthy cedar, dark cocoa, syrupy body. Low-medium acidity.", farms: "62 smallholder contracts" },
  { n: "Ijen", r: "Bondowoso, East Java", a: "1,200 – 1,600 m", v: "Sigararutang, Lini-S", h: "Jun – Oct", profile: "Tropical fruit, brown sugar, clean finish. Bright acidity.", farms: "41 smallholder contracts" },
  { n: "Temanggung", r: "Central Java", a: "1,100 – 1,500 m", v: "Andungsari, Sigararutang", h: "Jul – Sep", profile: "Tobacco, raw almond, heavy body. Medium acidity.", farms: "28 smallholder contracts" },
  { n: "Flores", r: "Bajawa, NTT", a: "1,200 – 1,500 m", v: "Typica, Catimor", h: "May – Aug", profile: "Floral, citrus, milk chocolate. Medium-bright acidity.", farms: "33 smallholder contracts" },
];

function Origins() {
  return (
    <>
      <PageHeader eyebrow="Bumi Kopi · Origins" title="Four regions. Direct farm-gate contracts." lede="No middle traders. We contract directly at the farm gate and process at our own facility in Cikajang. Traceability is documented to the sub-region, not the country." />
      <section className="container-x py-16">
        <div className="space-y-px bg-border">
          {origins.map((o, i) => (
            <article key={o.n} className="bg-coal p-8 md:p-12 grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-1 font-mono text-rust text-sm">0{i+1}</div>
              <div className="md:col-span-4">
                <p className="eyebrow">{o.r}</p>
                <h2 className="mt-3 font-display text-4xl md:text-5xl text-bone">{o.n}</h2>
              </div>
              <div className="md:col-span-4">
                <dl className="spec-grid">
                  <dt>Altitude</dt><dd>{o.a}</dd>
                  <dt>Varietals</dt><dd>{o.v}</dd>
                  <dt>Harvest</dt><dd>{o.h}</dd>
                  <dt>Network</dt><dd>{o.farms}</dd>
                </dl>
              </div>
              <div className="md:col-span-3">
                <p className="eyebrow mb-3">Cup profile</p>
                <p className="text-ash text-sm">{o.profile}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="relative border-t border-border">
        <img src={originsImg} alt="West Java highlands" loading="lazy" className="w-full h-[360px] object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-coal to-transparent flex items-end">
          <div className="container-x pb-12">
            <h3 className="font-display text-3xl md:text-4xl text-bone max-w-2xl">Cikajang sits at 1,400m. Volcanic soil, year-round rainfall, ideal for Arabica.</h3>
            <Link to="/request-sample" className="btn-primary mt-6">Request origin sample →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
