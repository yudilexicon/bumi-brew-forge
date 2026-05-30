import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero-station.jpg";
import beansImg from "@/assets/green-beans.jpg";
import originsImg from "@/assets/origins.jpg";
import { WordReveal, FadeUp } from "@/components/motion/WordReveal";
import { PillButton } from "@/components/motion/PillButton";
import { Marquee } from "@/components/motion/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bumi Kopi — Indonesian green coffee. Processed, graded, exported." },
      {
        name: "description",
        content:
          "B2B green coffee processing house in Bandung, West Java. We own the washing station. Volume welcome. Quality documented.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <>
      {/* HERO — cinematic, editorial, parallax */}
      <section ref={heroRef} className="relative border-b border-border overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
        >
          <img
            src={heroImg}
            alt="Bumi Kopi washing station at dawn"
            width={1920}
            height={1280}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coal/40 via-coal/70 to-coal" />
          <div className="absolute inset-0 bg-gradient-to-r from-coal/60 via-transparent to-coal/40" />
        </motion.div>

        <div className="relative container-x pt-28 pb-24 md:pt-44 md:pb-40 min-h-[92vh] flex flex-col justify-end">
          <motion.p
            className="eyebrow text-rust"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bumi Kopi · ICO 0140 · Est. 2018
          </motion.p>

          <WordReveal
            as="h1"
            text="Coffee, reimagined."
            className="mt-6 font-display font-bold text-[15vw] md:text-[11vw] lg:text-[9.5vw] leading-[0.92] text-bone tracking-[-0.04em]"
            stagger={0.08}
            delay={0.3}
            trackOut={2}
          />

          <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-6 lg:col-span-5">
              <WordReveal
                text="From cherry to FCL — we own every variable. No broker. No guesswork. Just documented Indonesian green coffee."
                className="text-ash text-lg md:text-xl leading-relaxed"
                stagger={0.025}
                delay={0.9}
              />
            </div>
            <motion.div
              className="md:col-span-6 lg:col-span-7 flex flex-wrap gap-3 md:justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <PillButton to="/request-sample">Request 1kg sample</PillButton>
              <PillButton to="/catalogue" variant="ghost">
                View current lots
              </PillButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-smoke to-transparent"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            style={{ transformOrigin: "top" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* TICKER */}
      <section className="border-b border-border py-6 bg-coal">
        <Marquee duration={50}>
          {[
            "ICO 0140",
            "Bandung · West Java",
            "Washed · Honey · Natural · Anaerobic",
            "Q-Grade 82.0 – 88.5",
            "25 FCL / yr",
            "Direct trade",
            "60 kg GrainPro",
            "Off-spec replaced",
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              <span className="font-display text-3xl md:text-4xl text-bone tracking-tight whitespace-nowrap">
                {t}
              </span>
              <span className="w-2 h-2 rounded-full bg-rust" />
            </div>
          ))}
        </Marquee>
      </section>

      {/* FEATURED LOT — big editorial number drop */}
      <section className="border-b border-border bg-coal">
        <div className="container-x py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-rust">Featured lot</p>
              <WordReveal
                as="h2"
                text="BK · GRT · W · 2604"
                className="mt-5 font-mono text-bone text-4xl md:text-6xl lg:text-7xl tracking-tight"
                stagger={0.07}
              />
              <FadeUp delay={0.3}>
                <p className="mt-6 max-w-xl text-ash text-lg">
                  Washed Garut Arabica. Pulped within four hours of picking. Sun-dried on raised beds. Sorted to screen 17+.
                </p>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <div className="border-y border-border divide-y divide-border">
                {[
                  { k: "Q-Grade", v: "86.2" },
                  { k: "Moisture", v: "11.4%" },
                  { k: "Screen", v: "17+" },
                  { k: "FOB", v: "$13.40 / kg" },
                ].map((row, i) => (
                  <FadeUp key={row.k} delay={i * 0.08}>
                    <div className="flex items-baseline justify-between py-5">
                      <span className="eyebrow">{row.k}</span>
                      <span className="font-display text-3xl md:text-4xl text-bone">{row.v}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM — big tracked-out narrative, farmminerals-style */}
      <section className="relative border-b border-border overflow-hidden">
        <div className="container-x py-32 md:py-44">
          <WordReveal
            as="h2"
            text="Most Indonesian coffee never tells you where it comes from."
            className="font-display font-bold text-bone text-[8vw] md:text-[5.5vw] lg:text-[4.6vw] leading-[1.02] tracking-[-0.03em] max-w-6xl"
            stagger={0.045}
            trackOut={1}
          />
          <div className="mt-16 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 lg:col-start-7">
              <WordReveal
                text="It's bought by collectors. Bulked by middlemen. Mixed at the port. By the time it reaches a roaster, the farm, the varietal, and the process are gone — and so is the premium you should be earning."
                className="text-ash text-lg md:text-xl leading-relaxed"
                stagger={0.015}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STAT — huge number callout */}
      <section className="relative border-b border-border bg-card overflow-hidden">
        <div className="container-x py-32 md:py-48 text-center">
          <p className="eyebrow text-rust">Source: GAEKI · 2024</p>
          <WordReveal
            as="h2"
            text="Up to 40% of farmgate value is lost before the first cup is brewed."
            className="mt-8 font-display font-bold text-bone text-[9vw] md:text-[5.8vw] leading-[1.0] tracking-[-0.04em] max-w-6xl mx-auto"
            stagger={0.05}
            trackOut={1}
          />
        </div>
        {/* corner marks */}
        <div className="pointer-events-none absolute top-6 left-6 w-8 h-8 border-l border-t border-rust" />
        <div className="pointer-events-none absolute top-6 right-6 w-8 h-8 border-r border-t border-rust" />
        <div className="pointer-events-none absolute bottom-6 left-6 w-8 h-8 border-l border-b border-rust" />
        <div className="pointer-events-none absolute bottom-6 right-6 w-8 h-8 border-r border-b border-rust" />
      </section>

      {/* SOLUTION — split with image */}
      <section className="border-b border-border">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[480px] lg:min-h-[720px] overflow-hidden">
            <motion.img
              src={beansImg}
              alt="Green coffee in GrainPro"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-coal/40" />
          </div>
          <div className="p-10 md:p-16 lg:p-24 bg-coal flex flex-col justify-center">
            <p className="eyebrow text-rust">We found a better way</p>
            <WordReveal
              as="h2"
              text="We own the step where coffee is made or broken."
              className="mt-6 font-display font-bold text-bone text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.03em]"
              stagger={0.05}
            />
            <FadeUp delay={0.3}>
              <p className="mt-8 max-w-xl text-ash text-lg leading-relaxed">
                Bumi Kopi controls cherry intake, fermentation curves, washing, drying, hulling, and screen sorting in one facility in Bandung. No parchment from middlemen. Ever.
              </p>
            </FadeUp>
            <div className="mt-10">
              <PillButton to="/processing" variant="ghost">
                Processing protocols
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS — farmminerals "smaller than a cell / integrative / zero emissions" */}
      <section className="border-b border-border bg-coal">
        <div className="container-x py-32 md:py-44">
          <div className="max-w-3xl mb-20">
            <p className="eyebrow text-rust">Why it works</p>
            <WordReveal
              as="h2"
              text="Three commitments. Documented every shipment."
              className="mt-6 font-display font-bold text-bone text-4xl md:text-6xl leading-[1.05] tracking-[-0.03em]"
              stagger={0.05}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                n: "01",
                t: "Single washing station",
                d: "Every kilo passes through our facility. We log fermentation hours, pH, water temperature, and bed time.",
              },
              {
                n: "02",
                t: "Direct contracts only",
                d: "We sign annual contracts with named farms — no collectors, no daily-price middlemen, no anonymous lots.",
              },
              {
                n: "03",
                t: "Off-spec replaced",
                d: "If a shipment misses spec on moisture, defect count, or cup score, it's replaced in the next FCL. No invoice.",
              },
            ].map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.12}>
                <div className="bg-coal p-10 lg:p-12 h-full group hover:bg-card transition-colors duration-500">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-rust" />
                    <span className="font-mono text-xs text-smoke uppercase tracking-[0.18em]">
                      {p.n}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl md:text-3xl text-bone leading-tight">
                    {p.t}
                  </h3>
                  <p className="mt-5 text-ash leading-relaxed">{p.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGINS */}
      <section className="border-b border-border">
        <div className="container-x py-32 md:py-44">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div className="max-w-3xl">
              <p className="eyebrow text-rust">Exclusive origins</p>
              <WordReveal
                as="h2"
                text="Four regions. Direct contracts."
                className="mt-6 font-display font-bold text-bone text-4xl md:text-6xl leading-[1.05] tracking-[-0.03em]"
                stagger={0.05}
              />
            </div>
            <PillButton to="/origins" variant="ghost">
              All origins
            </PillButton>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { n: "Toraja", r: "Sulawesi", a: "1,400 – 1,800 m", v: "Typica · S795" },
              { n: "Ijen", r: "East Java", a: "1,200 – 1,600 m", v: "Sigararutang · Lini-S" },
              { n: "Temanggung", r: "Central Java", a: "1,100 – 1,500 m", v: "Andungsari · Sigararutang" },
              { n: "Flores", r: "Bajawa, NTT", a: "1,200 – 1,500 m", v: "Typica · Catimor" },
            ].map((o, i) => (
              <FadeUp key={o.n} delay={i * 0.08}>
                <div className="bg-coal p-8 lg:p-10 h-full hover:bg-card transition-colors duration-500">
                  <div className="font-mono text-xs text-rust">{o.r}</div>
                  <h3 className="mt-3 font-display text-3xl text-bone">{o.n}</h3>
                  <dl className="spec-grid mt-6">
                    <dt>Altitude</dt>
                    <dd>{o.a}</dd>
                    <dt>Varietals</dt>
                    <dd>{o.v}</dd>
                  </dl>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={originsImg} alt="" loading="lazy" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-coal/85" />
        </div>
        <div className="relative container-x py-32 md:py-48 text-center">
          <p className="eyebrow text-rust">Next step</p>
          <WordReveal
            as="h2"
            text="Up to 1kg sample. 10 business days. No invoice."
            className="mt-8 font-display font-bold text-bone text-[9vw] md:text-[5.5vw] leading-[1.0] tracking-[-0.04em] max-w-5xl mx-auto"
            stagger={0.06}
            trackOut={1}
          />
          <FadeUp delay={0.4}>
            <p className="mt-8 text-ash text-lg max-w-xl mx-auto">
              You cup it before you commit. If it does not perform, no obligation.
            </p>
          </FadeUp>
          <FadeUp delay={0.6}>
            <div className="mt-12 flex justify-center">
              <PillButton to="/request-sample">Request your sample</PillButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
