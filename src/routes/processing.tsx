import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform, useInView } from "motion/react";
import { useRef } from "react";
import { CherryParallax } from "@/components/motion/CherryParallax";
import { SectionReveal, CherryDrift } from "@/components/motion/SectionReveal";
import { WordReveal, FadeUp } from "@/components/motion/WordReveal";
import { PillButton } from "@/components/motion/PillButton";
import { DataRow } from "@/components/Section";
import { useAudioFocus } from "@/components/audio/AmbientAudio";

export const Route = createFileRoute("/processing")({
  head: () => ({
    meta: [
      { title: "Processing — Bumi Kopi" },
      { name: "description", content: "Six processing methods, one washing station. Washed, honey, natural, anaerobic, infused, and proprietary IP. Bandung, West Java." },
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

/** Vertical scroll-driven stages mirroring the home process scroll */
function MethodScroll() {
  const ref = useRef<HTMLDivElement>(null);
  useAudioFocus(ref, 0.9);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const lineHeight = useTransform(p, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative border-b border-border bg-coal py-32 md:py-44 overflow-hidden">
      <CherryDrift side="left" size={520} />
      <div className="container-x">
        <div className="max-w-3xl mb-20">
          <p className="eyebrow text-rust">Methods · Engineering</p>
          <WordReveal
            as="h2"
            text="Six methods. One station. Logged variables."
            className="mt-6 font-display font-bold text-bone text-4xl md:text-6xl leading-[1.05] tracking-[-0.03em]"
            stagger={0.05}
          />
        </div>

        <div className="relative pl-10 md:pl-16">
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-border" />
          <motion.div
            className="absolute left-2 md:left-4 top-0 w-px bg-rust origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-20">
            {methods.map((m, i) => (
              <MethodRow key={m.code} m={m} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodRow({ m, i }: { m: (typeof methods)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  return (
    <motion.div
      ref={ref}
      className="grid md:grid-cols-12 gap-6 items-start relative"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
    >
      <motion.span
        className="absolute -left-[34px] md:-left-[52px] top-4 w-3 h-3 rounded-full bg-rust ring-4 ring-coal"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: i * 0.05 + 0.2 }}
      />
      <div className="md:col-span-5">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-rust text-sm">[{m.code}]</span>
          <h3 className="font-display text-bone text-3xl md:text-5xl tracking-[-0.02em]">{m.n}</h3>
        </div>
      </div>
      <div className="md:col-span-6 md:col-start-7 space-y-3">
        <p className="font-mono text-xs text-smoke uppercase tracking-wider">{m.spec}</p>
        <p className="text-ash text-lg leading-relaxed">{m.note}</p>
      </div>
    </motion.div>
  );
}

function Processing() {
  return (
    <>
      <CherryParallax
        eyebrow="Bumi Kopi · Processing"
        title="One station. Every variable logged."
        lede='"Can you hold consistency at volume?" We own the washing station. We control every variable from cherry intake to parchment moisture. The answer is yes.'
      />

      <SectionReveal>
        <DataRow items={[
          { k: "Station", v: "Bandung, 1,400m" },
          { k: "Daily intake", v: "Up to 4,000 kg cherry" },
          { k: "Drying beds", v: "180 raised" },
          { k: "Hulling", v: "Pinhalense MVF" },
        ]} />
      </SectionReveal>

      <MethodScroll />

      <SectionReveal className="border-t border-border bg-card">
        <div className="container-x py-24 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow text-rust">Quality control</p>
            <WordReveal
              as="h2"
              text="Documented at every step."
              className="mt-6 font-display text-4xl md:text-5xl text-bone tracking-[-0.02em]"
              stagger={0.05}
            />
            <FadeUp delay={0.3}>
              <p className="mt-6 text-ash text-lg">Each lot ships with a five-document pack. No shipment leaves Tanjung Priok without it.</p>
            </FadeUp>
          </div>
          <ol className="space-y-3">
            {[
              "Cupping report (SCA protocol, 3 cuppers, signed)",
              "Moisture certificate (Sinar AP6060, 3-point sample)",
              "Screen size distribution (≥80% above stated screen)",
              "Defect count (green + roast, Brazilian + EAFCA)",
              "Phytosanitary + ICO certificate of origin",
            ].map((d, i) => (
              <motion.li
                key={d}
                className="flex gap-4 border-b border-border pb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-mono text-rust text-sm">0{i + 1}</span>
                <span className="text-bone">{d}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </SectionReveal>

      <SectionReveal className="container-x py-32 text-center">
        <WordReveal
          as="h2"
          text="Need a specific protocol?"
          className="font-display text-4xl md:text-6xl text-bone max-w-3xl mx-auto tracking-[-0.03em]"
          stagger={0.05}
        />
        <FadeUp delay={0.4}>
          <p className="mt-6 text-ash">NDA available for Own IP methods. Spec sheets on request.</p>
        </FadeUp>
        <FadeUp delay={0.6}>
          <div className="mt-10 flex justify-center">
            <PillButton to="/contact">Talk to operations</PillButton>
          </div>
        </FadeUp>
      </SectionReveal>
    </>
  );
}
