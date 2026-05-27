import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";
import { useState } from "react";

export const Route = createFileRoute("/request-sample")({
  head: () => ({
    meta: [
      { title: "Request a 5kg cupping sample — Bumi Kopi" },
      { name: "description", content: "Zero-risk first shipment. 5kg sample within 10 business days. No invoice until you approve." },
    ],
  }),
  component: RequestSample,
});

function RequestSample() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Bumi Kopi · Sample request"
        title="5kg cupping sample. 10 business days. No invoice."
        lede="Fill the form. Operations will reply within 1 business day with shipping confirmation and lot documentation."
      />
      <section className="container-x py-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          {sent ? (
            <div className="border border-rust bg-card p-10">
              <p className="font-mono text-rust text-xs uppercase tracking-wider">Request received</p>
              <h2 className="mt-3 font-display text-3xl text-bone">Operations will reply within 1 business day.</h2>
              <p className="mt-4 text-ash">A confirmation is on its way to your inbox. If urgent, email hello@bumi-kopi.com directly.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Company" name="company" required />
                <Field label="Contact name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Country" name="country" required />
              </div>
              <SelectField label="Account type" name="type" options={["Specialty roaster", "Commercial roaster", "Importer", "Distributor", "Other"]} />
              <div className="grid md:grid-cols-2 gap-4">
                <SelectField label="Preferred origin" name="origin" options={["No preference", "Garut", "Toraja", "Ijen", "Temanggung", "Flores"]} />
                <SelectField label="Preferred method" name="method" options={["No preference", "Washed", "Honey", "Natural", "Anaerobic", "Infused", "Own IP"]} />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Target screen size" name="screen" placeholder="e.g. 17+" />
                <Field label="Target annual volume (kg)" name="volume" placeholder="e.g. 19,200" />
              </div>
              <Field label="Specific lot code (optional)" name="lot" placeholder="e.g. BK-GRT-W-2604" />
              <TextareaField label="Notes" name="notes" placeholder="Cup profile preferences, shipping address country, certifications required..." />
              <button type="submit" className="btn-primary w-full justify-center">Send sample request →</button>
              <p className="font-mono text-[11px] text-smoke uppercase tracking-wider">By submitting, you consent to Bumi Kopi storing this enquiry for trade purposes only.</p>
            </form>
          )}
        </div>

        <aside className="lg:col-span-5 space-y-6">
          <div className="border border-border bg-card p-8">
            <p className="eyebrow text-rust">The offer</p>
            <h3 className="mt-3 font-display text-2xl text-bone">Zero-risk first shipment</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "5kg sample, GrainPro, DHL",
                "Cupping report + moisture certificate",
                "10 business days door-to-door",
                "No invoice until you approve",
                "Off-spec → replaced at no cost",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-bone"><span className="text-rust font-mono">✓</span>{p}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border p-8">
            <p className="eyebrow">Operations contact</p>
            <p className="mt-3 font-mono text-bone">hello@bumi-kopi.com</p>
            <p className="font-mono text-smoke text-sm mt-1">+62 821 1500 0140</p>
            <p className="mt-4 text-sm text-ash">Cikajang, Garut · West Java · 44171 · Indonesia</p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-smoke">{label}{required && <span className="text-rust"> *</span>}</span>
      <input name={name} type={type} required={required} placeholder={placeholder} className="mt-2 w-full bg-transparent border border-border focus:border-rust outline-none px-4 py-3 text-bone font-mono text-sm transition-colors" />
    </label>
  );
}
function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-smoke">{label}</span>
      <select name={name} className="mt-2 w-full bg-coal border border-border focus:border-rust outline-none px-4 py-3 text-bone font-mono text-sm">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
function TextareaField({ label, name, placeholder }: { label: string; name: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-smoke">{label}</span>
      <textarea name={name} placeholder={placeholder} rows={4} className="mt-2 w-full bg-transparent border border-border focus:border-rust outline-none px-4 py-3 text-bone font-mono text-sm" />
    </label>
  );
}
