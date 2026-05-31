import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CherryParallax } from "@/components/motion/CherryParallax";
import { SectionReveal, CherryDrift } from "@/components/motion/SectionReveal";
import { WordReveal, FadeUp } from "@/components/motion/WordReveal";
import { PillButton } from "@/components/motion/PillButton";
import { DataRow } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bumi Kopi" },
      { name: "description", content: "B2B green coffee processor and exporter based in Bandung. Owned washing station, direct farm-gate contracts, no broker chain." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <CherryParallax
        eyebrow="Bumi Kopi · Operation"
        title="We process, grade, and export. No broker in the chain."
        lede="Bumi Kopi was set up to remove the middle layer between Indonesian smallholders and international buyers. We own the washing station. We own the contracts. We own the export documentation."
      />

      <SectionReveal>
        <DataRow items={[
          { k: "Founded", v: "2018" },
          { k: "Staff", v: "11 permanent · 60 seasonal" },
          { k: "Container output 2025", v: "28 FCL" },
          { k: "2026 target", v: "25 FCL · $1M ARR" },
        ]} />
      </SectionReveal>

      <SectionReveal className="relative container-x py-24 md:py-32 overflow-hidden">
        <CherryDrift side="right" size={460} />
        <div className="grid lg:grid-cols-12 gap-12 relative">
          <div className="lg:col-span-5">
            <p className="eyebrow text-rust">What we own</p>
            <WordReveal
              as="h2"
              text="The processing step. Start to finish."
              className="mt-6 font-display text-4xl md:text-5xl text-bone tracking-[-0.02em] leading-[1.05]"
              stagger={0.05}
            />
          </div>
          <div className="lg:col-span-7 space-y-6 text-ash text-lg">
            {[
              "The washing station in Bandung processes cherry from 164 smallholder farms under direct contract. We do not buy parchment from collectors. We do not blend lots from different sub-regions without disclosure.",
              "Drying takes place on 180 raised beds under our roof. Hulling is done in-house on a Pinhalense MVF. Screen sorting, density sorting, and final defect screening all happen at the same facility before the lot is bagged into GrainPro.",
              "Every container loaded at Tanjung Priok ships with cupping reports, moisture certificates, and ICO documentation matched to the lot code.",
            ].map((p, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <p>{p}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="border-y border-border bg-card">
        <div className="container-x py-24">
          <p className="eyebrow text-rust">The 50/50 split</p>
          <WordReveal
            as="h2"
            text="Commercial and specialty are equal priorities."
            className="mt-6 font-display text-4xl md:text-6xl text-bone max-w-4xl tracking-[-0.03em] leading-[1.05]"
            stagger={0.05}
          />
          <div className="mt-12 grid md:grid-cols-2 gap-px bg-border">
            {[
              { t: "Commercial", d: "Roasters and importers running FCL volumes on washed or natural blend-grade. Consistent moisture, defect counts, screen distribution.", s: "~50% of revenue" },
              { t: "Specialty", d: "Specialty roasters, competition buyers, and importers buying micro-lots with traceability to the sub-region.", s: "~50% of revenue" },
            ].map((b, i) => (
              <motion.div
                key={b.t}
                className="bg-card p-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80, damping: 20, delay: i * 0.15 }}
              >
                <h3 className="font-display text-3xl text-bone">{b.t}</h3>
                <p className="mt-4 text-ash">{b.d}</p>
                <p className="mt-6 font-mono text-rust text-sm">{b.s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="container-x py-24">
        <p className="eyebrow text-rust">Trade terms</p>
        <WordReveal
          as="h2"
          text="Standard. No surprises."
          className="mt-6 font-display text-4xl md:text-5xl text-bone tracking-[-0.02em]"
          stagger={0.06}
        />
        <FadeUp delay={0.3}>
          <dl className="spec-grid mt-10 max-w-2xl">
            <dt>Shipping</dt><dd>FOB Tanjung Priok · Incoterms 2020</dd>
            <dt>Payment</dt><dd>LC at sight or 30% TT deposit</dd>
            <dt>Packaging</dt><dd>GrainPro inside jute · 60 kg</dd>
            <dt>Min order</dt><dd>60 kg (specialty) · 1 FCL (commercial)</dd>
            <dt>Lead time</dt><dd>21 days from contract to vessel</dd>
            <dt>Off-spec policy</dt><dd>Replaced next shipment at no cost</dd>
          </dl>
        </FadeUp>
        <FadeUp delay={0.5}>
          <div className="mt-12">
            <PillButton to="/request-sample">Start with a sample</PillButton>
          </div>
        </FadeUp>
      </SectionReveal>
    </>
  );
}
