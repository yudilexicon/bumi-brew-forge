import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, DataRow } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bumi Kopi" },
      { name: "description", content: "B2B green coffee processor and exporter based in Cikajang, Garut. Owned washing station, direct farm-gate contracts, no broker chain." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Bumi Kopi · Operation"
        title="We process, grade, and export. No broker in the chain."
        lede="Bumi Kopi was set up to remove the middle layer between Indonesian smallholders and international buyers. We own the washing station. We own the contracts. We own the export documentation."
      />
      <DataRow items={[
        { k: "Founded", v: "2018" },
        { k: "Staff", v: "11 permanent · 60 seasonal" },
        { k: "Container output 2025", v: "28 FCL" },
        { k: "2026 target", v: "40 FCL · $1M ARR" },
      ]} />

      <section className="container-x py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="eyebrow text-rust">What we own</p>
          <h2 className="mt-4 font-display text-4xl text-bone">The processing step. Start to finish.</h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-ash">
          <p>The washing station in Cikajang processes cherry from 164 smallholder farms under direct contract. We do not buy parchment from collectors. We do not blend lots from different sub-regions without disclosure.</p>
          <p>Drying takes place on 180 raised beds under our roof. Hulling is done in-house on a Pinhalense MVF. Screen sorting, density sorting, and final defect screening all happen at the same facility before the lot is bagged into GrainPro.</p>
          <p>Every container loaded at Tanjung Priok ships with cupping reports, moisture certificates, and ICO documentation matched to the lot code.</p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="container-x py-20">
          <p className="eyebrow text-rust">The 50/50 split</p>
          <h2 className="mt-4 font-display text-4xl text-bone max-w-3xl">Commercial and specialty are equal business priorities.</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-px bg-border">
            <div className="bg-card p-8">
              <h3 className="font-display text-2xl text-bone">Commercial</h3>
              <p className="mt-3 text-ash text-sm">Roasters and importers running FCL volumes on washed or natural blend-grade. Consistent moisture, defect counts, screen distribution.</p>
              <p className="mt-4 font-mono text-rust text-sm">~50% of revenue</p>
            </div>
            <div className="bg-card p-8">
              <h3 className="font-display text-2xl text-bone">Specialty</h3>
              <p className="mt-3 text-ash text-sm">Specialty roasters, competition buyers, and importers buying micro-lots with traceability to the sub-region.</p>
              <p className="mt-4 font-mono text-rust text-sm">~50% of revenue</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <p className="eyebrow text-rust">Trade terms</p>
        <h2 className="mt-4 font-display text-4xl text-bone">Standard. No surprises.</h2>
        <dl className="spec-grid mt-10 max-w-2xl">
          <dt>Shipping</dt><dd>FOB Tanjung Priok · Incoterms 2020</dd>
          <dt>Payment</dt><dd>LC at sight or 30% TT deposit</dd>
          <dt>Packaging</dt><dd>GrainPro inside jute · 60 kg or 69 kg</dd>
          <dt>Min order</dt><dd>69 kg (specialty) · 1 FCL (commercial)</dd>
          <dt>Lead time</dt><dd>21 days from contract to vessel</dd>
          <dt>Off-spec policy</dt><dd>Replaced next shipment at no cost</dd>
        </dl>
        <Link to="/request-sample" className="btn-primary mt-10">Start with a sample →</Link>
      </section>
    </>
  );
}
