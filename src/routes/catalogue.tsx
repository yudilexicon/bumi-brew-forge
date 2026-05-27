import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";
import { useState } from "react";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Catalogue — Current lots — Bumi Kopi" },
      { name: "description", content: "Active green coffee lots available for FOB shipment. Filter by origin, processing method, and grade tier." },
    ],
  }),
  component: Catalogue,
});

type Lot = { code: string; origin: string; method: string; screen: string; moisture: string; score: number; tier: "Commercial" | "Specialty" | "Experimental" | "Own IP"; price: string; available: string; harvest: string; };

const lots: Lot[] = [
  { code: "BK-GRT-W-2604", origin: "Garut", method: "Washed", screen: "17+", moisture: "11.4%", score: 86.2, tier: "Specialty", price: "$13.40", available: "8,400 kg", harvest: "2026 / Q2" },
  { code: "BK-TRJ-N-2601", origin: "Toraja", method: "Natural", screen: "16+", moisture: "11.1%", score: 87.0, tier: "Specialty", price: "$15.20", available: "1,380 kg", harvest: "2026 / Q1" },
  { code: "BK-IJN-A-2603", origin: "Ijen", method: "Anaerobic", screen: "17+", moisture: "11.6%", score: 88.5, tier: "Experimental", price: "$19.80", available: "414 kg", harvest: "2026 / Q1" },
  { code: "BK-TMG-W-2511", origin: "Temanggung", method: "Washed", screen: "15+", moisture: "11.8%", score: 83.5, tier: "Commercial", price: "$9.10", available: "1 FCL", harvest: "2025 / Q4" },
  { code: "BK-FLR-H-2602", origin: "Flores Bajawa", method: "Honey", screen: "16+", moisture: "11.3%", score: 86.8, tier: "Specialty", price: "$14.60", available: "690 kg", harvest: "2026 / Q1" },
  { code: "BK-GRT-X-2605", origin: "Garut", method: "Own IP", screen: "18+", moisture: "11.2%", score: 87.8, tier: "Own IP", price: "$24.00", available: "207 kg", harvest: "2026 / Q2" },
  { code: "BK-IJN-W-2512", origin: "Ijen", method: "Washed", screen: "16+", moisture: "11.5%", score: 84.0, tier: "Commercial", price: "$8.80", available: "2 FCL", harvest: "2025 / Q4" },
  { code: "BK-TRJ-I-2606", origin: "Toraja", method: "Infused", screen: "17+", moisture: "11.4%", score: 87.5, tier: "Experimental", price: "$17.50", available: "276 kg", harvest: "2026 / Q2" },
];

const tiers = ["All", "Commercial", "Specialty", "Experimental", "Own IP"] as const;

function Catalogue() {
  const [filter, setFilter] = useState<(typeof tiers)[number]>("All");
  const filtered = filter === "All" ? lots : lots.filter((l) => l.tier === filter);
  return (
    <>
      <PageHeader
        eyebrow="Bumi Kopi · Live catalogue"
        title="Current lots. FOB Tanjung Priok."
        lede="Updated weekly. All prices in USD per kilogram, FOB. Sample of any lot available within 10 business days."
      />
      <section className="container-x py-10 border-b border-border">
        <div className="flex flex-wrap gap-2">
          {tiers.map((t) => (
            <button key={t} onClick={() => setFilter(t)} className={`font-mono text-xs uppercase tracking-wider px-4 py-2 border ${filter === t ? "bg-rust border-rust text-white" : "border-border text-ash hover:border-rust hover:text-rust"}`}>
              {t}
            </button>
          ))}
        </div>
      </section>
      <section className="container-x py-12">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-sm">
            <thead className="text-smoke uppercase text-[11px] tracking-[0.14em] border-b border-border">
              <tr>
                <th className="py-4 pr-4">Lot code</th>
                <th className="py-4 pr-4">Origin</th>
                <th className="py-4 pr-4">Method</th>
                <th className="py-4 pr-4">Screen</th>
                <th className="py-4 pr-4">Moisture</th>
                <th className="py-4 pr-4">Q Grade</th>
                <th className="py-4 pr-4">Available</th>
                <th className="py-4 pr-4">FOB / kg</th>
                <th className="py-4"></th>
              </tr>
            </thead>
            <tbody className="text-bone">
              {filtered.map((l) => (
                <tr key={l.code} className="border-b border-border hover:bg-card transition-colors">
                  <td className="py-4 pr-4 text-rust">{l.code}</td>
                  <td className="py-4 pr-4">{l.origin}</td>
                  <td className="py-4 pr-4">{l.method}</td>
                  <td className="py-4 pr-4">{l.screen}</td>
                  <td className="py-4 pr-4">{l.moisture}</td>
                  <td className="py-4 pr-4">{l.score}</td>
                  <td className="py-4 pr-4 text-smoke">{l.available}</td>
                  <td className="py-4 pr-4">{l.price}</td>
                  <td className="py-4">
                    <Link to="/request-sample" search={{ lot: l.code } as never} className="text-rust hover:underline">Request →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 font-mono text-xs text-smoke">All lots subject to availability. Cupping report and moisture certificate included with sample. Off-spec → replaced.</p>
      </section>
    </>
  );
}
