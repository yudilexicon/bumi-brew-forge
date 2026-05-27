import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lots } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Lot Catalogue — Bumi Kopi",
  description:
    "Live green bean lot availability. Origin, process, screen size, moisture, cup score. Request any lot directly.",
};

export default function CataloguePage() {
  const available = lots.filter((l) => l.status !== "sold");

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#1e1b18] py-20 border-b border-[#4a4540]/40">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-4">
              Lot catalogue
            </p>
            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-5xl md:text-6xl text-[#faf8f4] uppercase tracking-tight leading-tight mb-6">
              Current<br />
              <span className="text-[#c44b1a]">lot availability.</span>
            </h1>
            <p className="font-[family-name:var(--font-body)] text-base text-[#8a8278] max-w-xl font-light leading-relaxed">
              All lots ship with moisture certificate, screen breakdown, Q Grade report, phytosanitary
              certificate, and country of origin documentation.
            </p>
          </div>
        </section>

        {/* Lot table */}
        <section className="bg-[#1e1b18] py-12">
          <div className="max-w-7xl mx-auto px-6">
            {/* Desktop table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full border border-[#4a4540]/40">
                <thead>
                  <tr className="border-b border-[#4a4540]/40 bg-[#4a4540]/10">
                    {["Lot code", "Origin", "Process", "Screen", "Moisture", "Cup score", "Available", "MOQ", "Segment", "Status"].map(
                      (h) => (
                        <th
                          key={h}
                          className="text-left font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.12em] uppercase px-4 py-3"
                        >
                          {h}
                        </th>
                      )
                    )}
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {available.map((lot, i) => (
                    <tr
                      key={lot.code}
                      className={`border-b border-[#4a4540]/40 last:border-b-0 hover:bg-[#4a4540]/10 transition-colors ${
                        i % 2 === 0 ? "" : "bg-[#4a4540]/5"
                      }`}
                    >
                      <td className="px-4 py-4 font-[family-name:var(--font-mono)] text-xs text-[#faf8f4] font-medium">
                        {lot.code}
                      </td>
                      <td className="px-4 py-4 font-[family-name:var(--font-body)] text-sm text-[#c4bdb0]">
                        {lot.origin}
                      </td>
                      <td className="px-4 py-4 font-[family-name:var(--font-mono)] text-xs text-[#c4bdb0]">
                        {lot.process}
                      </td>
                      <td className="px-4 py-4 font-[family-name:var(--font-mono)] text-xs text-[#faf8f4]">
                        {lot.screen}
                      </td>
                      <td className="px-4 py-4 font-[family-name:var(--font-mono)] text-xs text-[#faf8f4]">
                        {lot.moisture}
                      </td>
                      <td className="px-4 py-4 font-[family-name:var(--font-mono)] text-xs font-medium text-[#faf8f4]">
                        {lot.cupScore}
                      </td>
                      <td className="px-4 py-4 font-[family-name:var(--font-mono)] text-xs text-[#c4bdb0]">
                        {lot.available}
                      </td>
                      <td className="px-4 py-4 font-[family-name:var(--font-mono)] text-xs text-[#c4bdb0]">
                        {lot.moq}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`font-[family-name:var(--font-mono)] text-[10px] tracking-[0.1em] uppercase px-2 py-0.5 ${
                            lot.priceTier === "specialty"
                              ? "bg-[#3d5c1e]/40 text-[#e8f0dc]"
                              : "bg-[#4a4540]/40 text-[#c4bdb0]"
                          }`}
                        >
                          {lot.priceTier}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`font-[family-name:var(--font-mono)] text-[10px] tracking-[0.1em] uppercase px-2 py-0.5 ${
                            lot.status === "limited"
                              ? "bg-[#c44b1a]/20 text-[#c44b1a]"
                              : "text-[#3d5c1e]"
                          }`}
                        >
                          {lot.status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <Link
                          href={`/request-sample?lot=${lot.code}`}
                          className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.1em] uppercase text-[#c44b1a] hover:text-[#faf8f4] transition-colors flex items-center gap-1 whitespace-nowrap"
                        >
                          Request <ArrowRight size={10} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="lg:hidden space-y-4">
              {available.map((lot) => (
                <div key={lot.code} className="border border-[#4a4540]/40 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <p className="font-[family-name:var(--font-mono)] text-xs text-[#faf8f4] font-medium">
                      {lot.code}
                    </p>
                    <span
                      className={`font-[family-name:var(--font-mono)] text-[10px] tracking-[0.1em] uppercase px-2 py-0.5 ${
                        lot.status === "limited"
                          ? "bg-[#c44b1a]/20 text-[#c44b1a]"
                          : "text-[#3d5c1e]"
                      }`}
                    >
                      {lot.status}
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] mb-1">
                    {lot.origin} · {lot.process}
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-4 mb-5">
                    {[
                      { label: "Screen", value: lot.screen },
                      { label: "Moisture", value: lot.moisture },
                      { label: "Cup score", value: lot.cupScore },
                    ].map((d) => (
                      <div key={d.label}>
                        <p className="font-[family-name:var(--font-mono)] text-[9px] text-[#8a8278] tracking-[0.1em] uppercase mb-0.5">
                          {d.label}
                        </p>
                        <p className="font-[family-name:var(--font-mono)] text-sm text-[#faf8f4]">
                          {d.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/request-sample?lot=${lot.code}`}
                    className="inline-flex items-center gap-1 font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] uppercase text-[#c44b1a] hover:text-[#faf8f4] transition-colors"
                  >
                    Request this lot <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border border-[#4a4540]/40 bg-[#4a4540]/10">
              <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.1em] mb-2">
                Don&apos;t see what you need?
              </p>
              <p className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] font-light mb-4">
                This catalogue is updated as new lots are graded. Tell us your target origin, process,
                and volume — we&apos;ll confirm availability or expected harvest date.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] uppercase text-[#c44b1a] hover:text-[#faf8f4] transition-colors"
              >
                Send wholesale enquiry <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
