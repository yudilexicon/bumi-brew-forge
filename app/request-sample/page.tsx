import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SampleForm from "@/components/SampleForm";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Request Sample — Bumi Kopi",
  description:
    "Request a free 5kg green bean cupping sample with full documentation. No invoice until you approve the lot.",
};

const steps = [
  { step: "01", label: "Fill in the form", detail: "Tell us your origin, process, weekly volume, and target price range." },
  { step: "02", label: "We confirm", detail: "Reply within 24 hours. We confirm we can supply before shipping anything." },
  { step: "03", label: "Sample ships", detail: "5kg GrainPro sample dispatched within 10 business days. Full documentation pack included." },
  { step: "04", label: "You cup it", detail: "Take 3 business days. Evaluate against your standards. Share your notes with us." },
  { step: "05", label: "Your call", detail: "Approve the lot — we invoice and begin the first order. Don't approve — you owe nothing." },
];

export default function RequestSamplePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#1e1b18] py-20 border-b border-[#4a4540]/40">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-4">
              The offer
            </p>
            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-5xl md:text-6xl text-[#faf8f4] uppercase tracking-tight leading-tight mb-6">
              Try before you invoice.<br />
              <span className="text-[#c44b1a]">Zero risk.</span>
            </h1>
            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-4">
              {[
                "5kg cupping sample, on us",
                "Full documentation pack",
                "No invoice until you approve",
                "Off-spec → replaced at no cost",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#c44b1a]" />
                  <span className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1e1b18] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-6">
                  Request form
                </p>
                <SampleForm />
              </div>

              {/* Steps */}
              <div className="lg:col-span-2">
                <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-6">
                  What happens next
                </p>
                <div className="space-y-0 border border-[#4a4540]/40">
                  {steps.map((s) => (
                    <div key={s.step} className="flex gap-4 p-5 border-b border-[#4a4540]/40 last:border-b-0">
                      <p className="font-[family-name:var(--font-mono)] text-xs text-[#c44b1a] shrink-0 mt-0.5">
                        {s.step}
                      </p>
                      <div>
                        <p className="font-[family-name:var(--font-display)] font-extrabold text-sm text-[#faf8f4] uppercase tracking-wide mb-1">
                          {s.label}
                        </p>
                        <p className="font-[family-name:var(--font-body)] text-xs text-[#8a8278] font-light leading-relaxed">
                          {s.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 border border-[#4a4540]/40 bg-[#4a4540]/10">
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.1em] uppercase mb-2">
                    The only condition
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] font-light leading-relaxed">
                    Tell us your weekly volume and target price range. We confirm we can supply before
                    shipping the sample. No point both of us wasting time.
                  </p>
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
