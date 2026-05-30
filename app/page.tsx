import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitWords, { Reveal } from "@/components/SplitWords";
import { ArrowRight, CheckCircle } from "lucide-react";

const stats = [
  { value: "6", label: "Origins" },
  { value: "6", label: "Processing Methods" },
  { value: "FCL + LCL", label: "Shipping" },
  { value: "Q Grader", label: "On-site" },
];

const pillars = [
  {
    number: "01",
    title: "Processing house, not a trader",
    body: "We own the washing station. Every fermentation time, drying condition, and lot segregation decision is ours. Most Indonesian exporters buy parchment — we make it.",
  },
  {
    number: "02",
    title: "Volume is a feature",
    body: "Commercial accounts (80–83 cup score, FCL) are equal business priority to specialty accounts (84+, traceable). Large orders are welcomed. We are built for both.",
  },
  {
    number: "03",
    title: "Documentation on every lot",
    body: "Moisture certificate. Screen breakdown. Q Grade report. Phytosanitary certificate. Country of origin cert. Everything a serious importer needs — ships with the beans.",
  },
];

const chain = [
  { step: "Farm gate", detail: "Direct from partner farmers. Fixed price above market floor." },
  { step: "Washing station", detail: "Owned. 6 process methods. Every variable controlled." },
  { step: "Dry mill + grading", detail: "Screen sort. Moisture test. Q Grade cup evaluation." },
  { step: "Documentation", detail: "Moisture cert. Screen breakdown. Q Grade. COO. Phyto." },
  { step: "Export", detail: "GrainPro-lined jute. FCL or LCL. Jakarta → global ports." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center bg-[#1e1b18] pt-16 relative overflow-hidden">
          {/* moss glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-40 w-[720px] h-[720px] rounded-full opacity-[0.18] blur-[120px]"
            style={{ background: "radial-gradient(circle, #8fa86a 0%, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full opacity-[0.12] blur-[120px]"
            style={{ background: "radial-gradient(circle, #c44b1a 0%, transparent 70%)" }}
          />
          <div className="max-w-7xl mx-auto px-6 py-24 relative">
            <Reveal>
              <p className="font-[family-name:var(--font-mono)] text-xs text-[#8fa86a] tracking-[0.2em] uppercase mb-6">
                B2B Green Coffee Export · West Java, Indonesia
              </p>
            </Reveal>
            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-5xl md:text-7xl lg:text-8xl text-[#faf8f4] leading-[0.92] tracking-tight uppercase mb-8 max-w-4xl">
              <SplitWords as="span" className="block">{"Indonesian"}</SplitWords>
              <SplitWords as="span" className="block" delay={0.1}>{"green beans."}</SplitWords>
              <SplitWords as="span" className="block" delay={0.25} highlight="processed">{"Processed"}</SplitWords>
              <SplitWords as="span" className="block" delay={0.4} highlight="in-house.">{"in-house."}</SplitWords>
              <SplitWords as="span" className="block" delay={0.55}>{"Ready to ship."}</SplitWords>
            </h1>
            <Reveal delay={0.6}>
              <p className="font-[family-name:var(--font-body)] text-lg text-[#c4bdb0] max-w-xl mb-10 leading-relaxed font-light">
                We own the washing station in West Java. Exclusive access to 5 additional origins.
                Full documentation on every lot. Volume welcome.
              </p>
            </Reveal>
            <Reveal delay={0.75}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/request-sample"
                  className="group inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm tracking-[0.1em] uppercase px-6 py-4 bg-[#c44b1a] text-[#faf8f4] hover:bg-[#8c3110] transition-all hover:gap-3"
                >
                  Request free 5kg sample <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/catalogue"
                  className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm tracking-[0.1em] uppercase px-6 py-4 border border-[#4a4540] text-[#c4bdb0] hover:border-[#8fa86a] hover:text-[#faf8f4] transition-colors"
                >
                  View lot catalogue
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-[#4a4540]/20 border-y border-[#4a4540]/40">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-[#faf8f4] uppercase tracking-wide">
                    {s.value}
                  </p>
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.15em] uppercase mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Pillars */}
        <section className="bg-[#1e1b18] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-16">
              Why Bumi Kopi
            </p>
            <div className="grid md:grid-cols-3 gap-0 border border-[#4a4540]/40">
              {pillars.map((p, i) => (
                <div
                  key={p.number}
                  className={`p-8 ${i < 2 ? "md:border-r border-b md:border-b-0 border-[#4a4540]/40" : ""}`}
                >
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[#c44b1a] tracking-[0.2em] mb-4">
                    {p.number}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] font-extrabold text-xl text-[#faf8f4] uppercase tracking-wide mb-4 leading-tight">
                    {p.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#8a8278] leading-relaxed font-light">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processing chain */}
        <section className="bg-[#4a4540]/10 py-24 border-y border-[#4a4540]/40">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-4">
              Supply chain
            </p>
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl text-[#faf8f4] uppercase tracking-tight mb-16">
              From cherry to container in 5 steps
            </h2>
            <div className="grid md:grid-cols-5 gap-0">
              {chain.map((c, i) => (
                <div
                  key={c.step}
                  className="relative p-6 border-t border-[#4a4540]/40 md:border-t-0 md:border-l first:border-t first:md:border-l-0"
                >
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[#c44b1a] tracking-[0.15em] mb-3">
                    0{i + 1}
                  </p>
                  <p className="font-[family-name:var(--font-display)] font-extrabold text-sm text-[#faf8f4] uppercase tracking-wide mb-3">
                    {c.step}
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-xs text-[#8a8278] leading-relaxed font-light">
                    {c.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grand Slam Offer */}
        <section className="bg-[#1e1b18] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-4">
                The offer
              </p>
              <h2 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl text-[#faf8f4] uppercase tracking-tight mb-8 leading-tight">
                Try before you invoice.<br />
                <span className="text-[#c44b1a]">Zero risk.</span>
              </h2>
              <div className="space-y-4 mb-10">
                {[
                  "We ship you a 5kg cupping sample of your chosen origin and process",
                  "Full documentation pack included: Q Grade report, moisture cert, screen breakdown",
                  "You cup it. Take 3 business days to evaluate",
                  "Approve the lot → we invoice for the sample and begin your first order",
                  "Off-spec delivery → replaced in next shipment at no cost to you",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle size={16} className="text-[#c44b1a] mt-0.5 shrink-0" />
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] font-light">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/request-sample"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm tracking-[0.1em] uppercase px-6 py-4 bg-[#c44b1a] text-[#faf8f4] hover:bg-[#8c3110] transition-colors"
              >
                Request your free sample <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#4a4540]/20 border-t border-[#4a4540]/40 py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl text-[#faf8f4] uppercase tracking-tight mb-4">
              Ready to source Indonesian green beans?
            </h2>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#8a8278] mb-8 font-light">
              Tell us your volume and target. We confirm availability before shipping the sample.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-sample"
                className="inline-flex items-center justify-center gap-2 font-[family-name:var(--font-mono)] text-sm tracking-[0.1em] uppercase px-6 py-4 bg-[#c44b1a] text-[#faf8f4] hover:bg-[#8c3110] transition-colors"
              >
                Request sample <ArrowRight size={16} />
              </Link>
              <Link
                href="/catalogue"
                className="inline-flex items-center justify-center font-[family-name:var(--font-mono)] text-sm tracking-[0.1em] uppercase px-6 py-4 border border-[#4a4540] text-[#c4bdb0] hover:border-[#8a8278] hover:text-[#faf8f4] transition-colors"
              >
                View current lots
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
