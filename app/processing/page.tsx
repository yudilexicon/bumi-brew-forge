"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { processMethods } from "@/lib/data";
import Link from "next/link";
import { Lock } from "lucide-react";

function SensoryBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between">
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.1em] uppercase">
          {label}
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#c4bdb0]">
          {value}
        </span>
      </div>
      <div className="h-1 bg-[#4a4540]/40 w-full">
        <div
          className="h-1 bg-[#c44b1a] transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function ProcessingPage() {
  const [active, setActive] = useState(processMethods[0].code);
  const method = processMethods.find((m) => m.code === active)!;
  const isOwnIP = method.code === "own-ip";

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#1e1b18] py-20 border-b border-[#4a4540]/40">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-4">
              Processing
            </p>
            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-5xl md:text-6xl text-[#faf8f4] uppercase tracking-tight leading-tight mb-6">
              6 processing methods.<br />
              <span className="text-[#c44b1a]">Every variable controlled.</span>
            </h1>
            <p className="font-[family-name:var(--font-body)] text-base text-[#8a8278] max-w-xl font-light leading-relaxed">
              Owning the washing station means we set fermentation timing, water quality, drying
              conditions, and lot segregation. The four variables that determine cup consistency at scale.
            </p>
          </div>
        </section>

        {/* Method explorer */}
        <section className="bg-[#1e1b18] py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-0 border border-[#4a4540]/40 mb-0">
              {processMethods.map((m) => (
                <button
                  key={m.code}
                  onClick={() => setActive(m.code)}
                  className={`font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] uppercase px-5 py-3 border-r border-[#4a4540]/40 last:border-r-0 transition-colors ${
                    active === m.code
                      ? "bg-[#c44b1a] text-[#faf8f4]"
                      : "text-[#8a8278] hover:text-[#faf8f4] hover:bg-[#4a4540]/20"
                  }`}
                >
                  {m.name}
                  {m.code === "own-ip" && <Lock size={10} className="inline ml-1 mb-0.5" />}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="border border-t-0 border-[#4a4540]/40 p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl text-[#faf8f4] uppercase tracking-wide">
                      {method.name}
                    </h2>
                    {isOwnIP && (
                      <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.1em] uppercase px-2 py-1 bg-[#c44b1a]/20 text-[#c44b1a] border border-[#c44b1a]/30">
                        NDA Required
                      </span>
                    )}
                  </div>

                  <p className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] leading-relaxed font-light mb-8">
                    {isOwnIP
                      ? "Proprietary method engineered for cup consistency across lots and seasons. Processing parameters are protected IP. Full specs disclosed under NDA only. Contact us to arrange a cupping and begin the NDA process."
                      : method.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {[
                      { label: "Complexity", value: method.complexity },
                      { label: "Dry time", value: isOwnIP ? "—" : method.dryTime },
                      { label: "Cup target", value: method.cupTarget },
                      { label: "Segment", value: method.segment },
                      { label: "MOQ", value: method.moq },
                    ].map((d) => (
                      <div key={d.label}>
                        <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.12em] uppercase mb-1">
                          {d.label}
                        </p>
                        <p className="font-[family-name:var(--font-mono)] text-sm text-[#faf8f4]">
                          {d.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.12em] uppercase mb-2">
                      Available origins
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {method.origins.map((o) => (
                        <span
                          key={o}
                          className="font-[family-name:var(--font-mono)] text-[10px] px-2 py-0.5 bg-[#4a4540]/20 text-[#c4bdb0]"
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.12em] uppercase mb-6">
                    Sensory profile
                  </p>
                  {isOwnIP ? (
                    <div className="flex flex-col items-center justify-center h-48 border border-[#4a4540]/40 gap-3">
                      <Lock size={24} className="text-[#4a4540]" />
                      <p className="font-[family-name:var(--font-mono)] text-xs text-[#4a4540] tracking-[0.1em] uppercase">
                        Specs redacted
                      </p>
                      <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#4a4540]">
                        NDA required
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      <SensoryBar label="Acidity" value={method.sensory.acidity} />
                      <SensoryBar label="Sweetness" value={method.sensory.sweetness} />
                      <SensoryBar label="Body" value={method.sensory.body} />
                      <SensoryBar label="Clarity" value={method.sensory.clarity} />
                    </div>
                  )}

                  <div className="mt-8 pt-8 border-t border-[#4a4540]/40">
                    <Link
                      href="/request-sample"
                      className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] uppercase px-4 py-3 bg-[#c44b1a] text-[#faf8f4] hover:bg-[#8c3110] transition-colors"
                    >
                      {isOwnIP ? "Request NDA + cupping sample" : `Request ${method.name} sample →`}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
