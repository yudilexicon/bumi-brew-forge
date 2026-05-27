import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About — Bumi Kopi",
  description:
    "What Bumi Kopi owns, how we operate, and what ships with every lot. No founder story. Just infrastructure.",
};

const owned = [
  {
    title: "Washing station",
    detail:
      "Owned wet processing plant in the Garut / Cikajang corridor, West Java. Altitude: 1,200–1,800m. Full fermentation, washing, and drying infrastructure.",
  },
  {
    title: "Farm gate contracts",
    detail:
      "Direct contracts with partner farmers in Garut and Cikajang. Fixed price above market floor. No collector in the chain.",
  },
  {
    title: "Proprietary processing IP",
    detail:
      "The Own IP method is developed and owned by Bumi Kopi. Processing parameters are NDA-protected. Produces a reproducible, consistent cup profile across harvest seasons.",
  },
  {
    title: "Processing infrastructure",
    detail:
      "Raised drying beds, shade net systems, parchment hullers, density sorter, screen graders, moisture analysis equipment, and cupping room. All on-site.",
  },
];

const exclusive = [
  {
    origin: "Toraja, Sulawesi",
    detail:
      "First-hand processor partnership. Heirloom Toraja Sapan cultivar. Sole export channel — no competing route to market.",
  },
  {
    origin: "Ijen, East Java",
    detail:
      "First-hand processor partnership. Volcanic region Arabica with crisp, structured cup character. Sole export channel.",
  },
  {
    origin: "Temanggung, Central Java",
    detail:
      "First-hand processor partnership. Both Arabica and Robusta available. Strong commercial volume capability.",
  },
  {
    origin: "Flores / Bajawa",
    detail:
      "First-hand processor partnership with Bajawa processor collective. Intensely aromatic Arabica. Sole export channel.",
  },
  {
    origin: "Sidikalang, North Sumatra",
    detail:
      "First-hand processor partnership. Full body, low acidity. Reliable commercial anchor lot.",
  },
];

const docPack = [
  "Moisture certificate (at mill + at loading)",
  "Screen size breakdown",
  "Q Grade cupping report (Q Grader on-site)",
  "Phytosanitary certificate",
  "Country of origin certificate",
  "Invoice and packing list",
  "Lot code and traceability reference",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#1e1b18] py-20 border-b border-[#4a4540]/40">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-4">
              About
            </p>
            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-5xl md:text-6xl text-[#faf8f4] uppercase tracking-tight leading-tight mb-6">
              What we own.<br />
              <span className="text-[#c44b1a]">How we operate.</span>
            </h1>
            <p className="font-[family-name:var(--font-body)] text-base text-[#8a8278] max-w-xl font-light leading-relaxed">
              Bumi Kopi is a processing house and export operation. We don&apos;t tell founder stories.
              We show you what we own, what we control, and what documentation ships with your beans.
            </p>
          </div>
        </section>

        {/* What we own */}
        <section className="bg-[#1e1b18] py-16 border-b border-[#4a4540]/40">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-10">
              Fully owned
            </p>
            <div className="grid md:grid-cols-2 gap-0 border border-[#4a4540]/40">
              {owned.map((item, i) => (
                <div
                  key={item.title}
                  className={`p-8 border-[#4a4540]/40 ${i % 2 === 0 ? "md:border-r" : ""} ${i < 2 ? "border-b" : ""}`}
                >
                  <h3 className="font-[family-name:var(--font-display)] font-extrabold text-lg text-[#faf8f4] uppercase tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#8a8278] leading-relaxed font-light">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusive access */}
        <section className="bg-[#4a4540]/10 py-16 border-b border-[#4a4540]/40">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-4">
              Exclusive access
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] max-w-2xl font-light leading-relaxed mb-10">
              These are first-hand processor partnerships — Bumi Kopi is the single export channel
              for these specific lots. Buyers cannot source the same traceable supply from any other exporter.
            </p>
            <div className="space-y-0 border border-[#4a4540]/40">
              {exclusive.map((item) => (
                <div
                  key={item.origin}
                  className="flex flex-col md:flex-row gap-4 p-6 border-b border-[#4a4540]/40 last:border-b-0"
                >
                  <div className="md:w-48 shrink-0">
                    <p className="font-[family-name:var(--font-display)] font-extrabold text-sm text-[#faf8f4] uppercase tracking-wide">
                      {item.origin}
                    </p>
                    <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.1em] uppercase">
                      Exclusive access
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#8a8278] font-light leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section className="bg-[#1e1b18] py-16 border-b border-[#4a4540]/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-4">
                Documentation pack
              </p>
              <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl text-[#faf8f4] uppercase tracking-tight mb-4 leading-tight">
                Everything a serious importer needs.<br />
                <span className="text-[#c44b1a]">Ships with every lot.</span>
              </h2>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#8a8278] font-light leading-relaxed mb-8">
                We don&apos;t make buyers chase documentation. Every export includes a full pack — standard,
                without needing to ask.
              </p>
              <ul className="space-y-3">
                {docPack.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <span className="text-[#c44b1a] font-[family-name:var(--font-mono)] text-xs mt-0.5">
                      →
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] font-light">
                      {doc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#4a4540]/10 py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl text-[#faf8f4] uppercase tracking-tight mb-4">
              Verify the claims. Cup the beans.
            </h2>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#8a8278] mb-8 font-light">
              Free 5kg cupping sample. Full documentation included. No invoice until you approve the lot.
            </p>
            <Link
              href="/request-sample"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm tracking-[0.1em] uppercase px-6 py-4 bg-[#c44b1a] text-[#faf8f4] hover:bg-[#8c3110] transition-colors"
            >
              Request sample <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
