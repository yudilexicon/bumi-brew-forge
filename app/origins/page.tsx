import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { origins } from "@/lib/data";
import Link from "next/link";

export const metadata = {
  title: "Origins — Bumi Kopi",
  description:
    "6 Indonesian coffee origins. Owned processing in West Java. Exclusive access to Toraja, Ijen, Temanggung, Flores, and Sidikalang.",
};

export default function OriginsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#1e1b18] py-20 border-b border-[#4a4540]/40">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-4">
              Origins
            </p>
            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-5xl md:text-6xl text-[#faf8f4] uppercase tracking-tight leading-tight mb-6">
              6 origins.<br />
              <span className="text-[#c44b1a]">1 owned.</span><br />
              5 exclusive.
            </h1>
            <p className="font-[family-name:var(--font-body)] text-base text-[#8a8278] max-w-xl font-light leading-relaxed">
              West Java is home base. Toraja, Ijen, Temanggung, Flores, and Sidikalang are first-hand
              processor partnerships — sole export channel. No competing export route.
            </p>
          </div>
        </section>

        {/* Origin grid */}
        <section className="bg-[#1e1b18] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#4a4540]/40">
              {origins.map((origin, i) => (
                <div
                  key={origin.slug}
                  className={`p-8 border-[#4a4540]/40 ${
                    i % 3 !== 2 ? "lg:border-r" : ""
                  } ${i % 2 !== 1 ? "md:border-r lg:border-r-0" : ""} ${
                    i < origins.length - 3 ? "lg:border-b" : ""
                  } ${i < origins.length - 2 ? "md:border-b" : ""} border-b last:border-b-0`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.15em] uppercase mb-1">
                        {origin.region}
                      </p>
                      <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-[#faf8f4] uppercase tracking-wide">
                        {origin.name}
                      </h2>
                    </div>
                    <span
                      className={`font-[family-name:var(--font-mono)] text-[10px] tracking-[0.1em] uppercase px-2 py-1 mt-1 ${
                        origin.exclusivity === "owned"
                          ? "bg-[#3d5c1e] text-[#e8f0dc]"
                          : "bg-[#4a4540]/40 text-[#c4bdb0]"
                      }`}
                    >
                      {origin.exclusivity === "owned" ? "Owned processing" : "Exclusive access"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.12em] uppercase mb-1">
                        Altitude
                      </p>
                      <p className="font-[family-name:var(--font-mono)] text-sm text-[#faf8f4]">
                        {origin.altitude}
                      </p>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.12em] uppercase mb-1">
                        Cup target
                      </p>
                      <p className="font-[family-name:var(--font-mono)] text-sm text-[#faf8f4]">
                        {origin.cupTarget}
                      </p>
                    </div>
                  </div>

                  <p className="font-[family-name:var(--font-body)] text-sm text-[#8a8278] leading-relaxed font-light mb-6">
                    {origin.description}
                  </p>

                  <div className="mb-4">
                    <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.12em] uppercase mb-2">
                      Cultivars
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {origin.cultivars.map((c) => (
                        <span
                          key={c}
                          className="font-[family-name:var(--font-mono)] text-[10px] px-2 py-0.5 border border-[#4a4540]/60 text-[#8a8278]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.12em] uppercase mb-2">
                      Available processes
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {origin.processes.map((p) => (
                        <span
                          key={p}
                          className="font-[family-name:var(--font-mono)] text-[10px] px-2 py-0.5 bg-[#4a4540]/20 text-[#c4bdb0]"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/request-sample"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm tracking-[0.1em] uppercase px-6 py-4 bg-[#c44b1a] text-[#faf8f4] hover:bg-[#8c3110] transition-colors"
              >
                Request a cupping sample from any origin →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
