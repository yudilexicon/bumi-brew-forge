import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, DataRow } from "@/components/Section";

export const Route = createFileRoute("/invest")({
  head: () => ({
    meta: [
      { title: "Invest — Bumi Kopi | Indonesian green coffee export" },
      { name: "description", content: "Equity participation in PT Bumi Kopi Indonesia. Vertically integrated green coffee processing and export. Target $1M ARR within 24 months." },
      { property: "og:title", content: "Invest in Bumi Kopi — Processing House Equity" },
      { property: "og:description", content: "Direct equity in a vertically integrated Indonesian green coffee processor. FOB Tanjung Priok. 22-account model. $1M ARR target." },
    ],
  }),
  component: Invest,
});

function Invest() {
  return (
    <>
      <PageHeader
        eyebrow="Capital Investment · Bumi Kopi"
        title="Equity participation in a vertically integrated processor."
        lede="We own the washing station. We hold exclusive export rights on four origins. We are raising growth capital to expand drying capacity, extend farm-gate contracts, and accelerate buyer acquisition toward $1M ARR within 24 months."
      />

      <DataRow items={[
        { k: "Round", v: "Seed · Series A bridge" },
        { k: "Target ARR (24 mo)", v: "$1,003,000" },
        { k: "Accounts (12 mo)", v: "22" },
        { k: "Min ticket", v: "$25,000 USD" },
      ]} />

      {/* USE OF FUNDS */}
      <section className="container-x py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="eyebrow text-rust">Use of funds</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-bone leading-tight">Capital allocated against documented capacity gaps.</h2>
            <p className="mt-5 text-ash">No marketing budgets. No brand spend. Funds deploy against bottleneck infrastructure and direct buyer outreach. Quarterly reporting against EOS scorecard.</p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border">
            {[
              { p: "40%", t: "Drying capacity", d: "Three additional raised-bed greenhouses. +18 FCL annual throughput." },
              { p: "25%", t: "Farm-gate contracts", d: "Pre-financed cherry purchase. Locks 2026 harvest at fixed differential." },
              { p: "20%", t: "Working capital", d: "FCL pre-shipment financing. Closes the 90-day LC gap on commercial accounts." },
              { p: "15%", t: "Sales operations", d: "Two BDRs. CRM. Cupping lab for buyer visits. EOS L10 cadence." },
            ].map((s) => (
              <div key={s.t} className="bg-coal p-6">
                <div className="font-mono text-xs text-rust">{s.p}</div>
                <h3 className="mt-3 font-display text-xl text-bone">{s.t}</h3>
                <p className="mt-2 text-sm text-smoke">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-y border-border">
        <div className="grid md:grid-cols-2">
          <div className="p-10 md:p-16 border-r border-border">
            <p className="eyebrow text-rust">The moat</p>
            <h3 className="mt-4 font-display text-3xl text-bone">Processing ownership.</h3>
            <p className="mt-4 text-ash">Most Indonesian exporters are traders buying parchment from middlemen. We own the wet mill in Cikajang. Cherry intake, fermentation, washing, drying, hulling, and screen sorting happen under one roof. This is a structural cost and quality advantage that cannot be replicated with capital alone.</p>
            <dl className="spec-grid mt-8">
              <dt>Owned assets</dt><dd>Washing station · IP</dd>
              <dt>Exclusive origins</dt><dd>4 · No competing channel</dd>
              <dt>Founded</dt><dd>2018</dd>
              <dt>Cup score range</dt><dd>82.0 – 88.5</dd>
            </dl>
          </div>
          <div className="p-10 md:p-16">
            <p className="eyebrow text-rust">Account math</p>
            <h3 className="mt-4 font-display text-3xl text-bone">22 accounts. $1M ARR.</h3>
            <dl className="spec-grid mt-8">
              <dt>3 commercial FCL</dt><dd>$540,000</dd>
              <dt>15 specialty</dt><dd>$375,000</dd>
              <dt>4 importers</dt><dd>$88,000</dd>
              <dt>Total ARR</dt><dd>$1,003,000</dd>
            </dl>
            <p className="mt-6 text-sm text-smoke">Based on $8 – 12 / kg wholesale and 500 – 800 kg average annual specialty account. Achievable with disciplined outreach and lead-time management.</p>
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section className="container-x py-24">
        <p className="eyebrow text-rust">Standard terms</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl text-bone">Direct equity. No SPV layers.</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-px bg-border">
          {[
            { k: "Instrument", v: "Preferred equity or SAFE (post-money cap)" },
            { k: "Minimum ticket", v: "$25,000 USD" },
            { k: "Reporting", v: "Quarterly · EOS scorecard · audited annually" },
            { k: "Jurisdiction", v: "PT PMA · Indonesia · BKPM registered" },
            { k: "Liquidity", v: "5 – 7 yr · trade sale or buyback" },
            { k: "Board seat", v: "From $250,000 ticket" },
          ].map((t) => (
            <div key={t.k} className="bg-coal p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-smoke">{t.k}</p>
              <p className="mt-2 font-mono text-bone">{t.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card">
        <div className="container-x py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-rust">Next step</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-bone">Request the data room.</h2>
            <p className="mt-5 text-ash max-w-xl">Financial model, processing capacity audit, farm-gate contract register, exclusive origin agreements, Q-grade history, and existing buyer references. NDA required.</p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <a href="mailto:hello@bumi-kopi.com?subject=Bumi%20Kopi%20·%20Data%20room%20request" className="btn-primary justify-center">Request data room →</a>
            <Link to="/contact" className="btn-ghost justify-center">Speak with the founders</Link>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-smoke text-center mt-2">hello@bumi-kopi.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
