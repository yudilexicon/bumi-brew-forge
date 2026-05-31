import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import originsImg from "@/assets/origins.jpg";
import { CherryParallax } from "@/components/motion/CherryParallax";
import { SectionReveal, CherryDrift } from "@/components/motion/SectionReveal";
import { WordReveal, FadeUp } from "@/components/motion/WordReveal";
import { PillButton } from "@/components/motion/PillButton";

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
      <CherryParallax
        eyebrow="Bumi Kopi · Origins"
        title="Four regions. Direct farm-gate contracts."
        lede="No middle traders. We contract directly at the farm gate and process at our own facility in Bandung. Traceability is documented to the sub-region, not the country."
      />

      <SectionReveal className="relative container-x py-20 md:py-28 overflow-hidden">
        <CherryDrift side="right" size={420} />
        <div className="space-y-px bg-border relative">
          {origins.map((o, i) => (
            <motion.article
              key={o.n}
              className="bg-coal p-8 md:p-12 grid md:grid-cols-12 gap-8 items-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            >
              <div className="md:col-span-1 font-mono text-rust text-sm">0{i + 1}</div>
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
            </motion.article>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="relative border-t border-border overflow-hidden" intensity={0.4}>
        <motion.img
          src={originsImg}
          alt="West Java highlands"
          loading="lazy"
          className="w-full h-[480px] object-cover opacity-50"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/40 to-transparent flex items-end">
          <div className="container-x pb-16">
            <WordReveal
              as="h3"
              text="Bandung sits at 1,400m. Volcanic soil, year-round rainfall, ideal for Arabica."
              className="font-display text-3xl md:text-5xl text-bone max-w-3xl tracking-[-0.02em]"
              stagger={0.04}
            />
            <FadeUp delay={0.4}>
              <div className="mt-8">
                <PillButton to="/request-sample">Request origin sample</PillButton>
              </div>
            </FadeUp>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="container-x py-24 text-center">
        <p className="eyebrow text-rust">Want a direct line?</p>
        <WordReveal
          as="h2"
          text="Tell us the cup. We will point you at the lot."
          className="mt-6 font-display text-4xl md:text-6xl text-bone max-w-4xl mx-auto leading-[1.05] tracking-[-0.03em]"
          stagger={0.05}
        />
        <FadeUp delay={0.5}>
          <div className="mt-10 flex justify-center gap-3 flex-wrap">
            <PillButton to="/catalogue" variant="ghost">View current lots</PillButton>
            <PillButton to="/contact">Talk to origin desk</PillButton>
          </div>
        </FadeUp>
        <div className="hidden">
          <Link to="/request-sample">.</Link>
        </div>
      </SectionReveal>
    </>
  );
}
