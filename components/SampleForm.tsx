"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  company: z.string().min(2, "Company required"),
  email: z.string().email("Valid email required"),
  country: z.string().min(2, "Country required"),
  roasteryType: z.enum(["specialty", "commercial", "importer", "other"]),
  weeklyVolume: z.string().min(1, "Weekly volume required"),
  targetPrice: z.string().min(1, "Target price range required"),
  preferredOrigin: z.string().optional(),
  preferredProcess: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const fieldClass =
  "w-full bg-transparent border border-[#4a4540]/60 px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#faf8f4] placeholder:text-[#4a4540] focus:outline-none focus:border-[#8a8278] transition-colors";

const labelClass =
  "font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.12em] uppercase mb-1.5 block";

const errorClass = "font-[family-name:var(--font-mono)] text-[10px] text-[#c44b1a] mt-1";

export default function SampleForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/sample-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Email us at hello@bumi-kopi.com");
    }
  }

  if (submitted) {
    return (
      <div className="border border-[#3d5c1e] bg-[#3d5c1e]/10 p-8">
        <p className="font-[family-name:var(--font-display)] font-extrabold text-xl text-[#faf8f4] uppercase tracking-wide mb-3">
          Request received.
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] font-light leading-relaxed">
          We&apos;ll reply within 24 hours to confirm availability and shipping timeline.
          Check your inbox — including spam.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Name</label>
          <input {...register("name")} placeholder="Your name" className={fieldClass} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Company</label>
          <input {...register("company")} placeholder="Roastery or company name" className={fieldClass} />
          {errors.company && <p className={errorClass}>{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Email</label>
          <input {...register("email")} type="email" placeholder="hello@yourroastery.com" className={fieldClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Country</label>
          <input {...register("country")} placeholder="Australia, Germany, Japan..." className={fieldClass} />
          {errors.country && <p className={errorClass}>{errors.country.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Buyer type</label>
        <select {...register("roasteryType")} className={fieldClass}>
          <option value="">Select...</option>
          <option value="specialty">Specialty roastery</option>
          <option value="commercial">Commercial volume roaster</option>
          <option value="importer">Green bean importer</option>
          <option value="other">Other</option>
        </select>
        {errors.roasteryType && <p className={errorClass}>{errors.roasteryType.message}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Weekly volume (kg)</label>
          <input {...register("weeklyVolume")} placeholder="e.g. 50kg, 500kg, 2,000kg" className={fieldClass} />
          {errors.weeklyVolume && <p className={errorClass}>{errors.weeklyVolume.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Target price (USD/kg FOB)</label>
          <input {...register("targetPrice")} placeholder="e.g. $9–12/kg" className={fieldClass} />
          {errors.targetPrice && <p className={errorClass}>{errors.targetPrice.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Preferred origin (optional)</label>
          <select {...register("preferredOrigin")} className={fieldClass}>
            <option value="">Any / no preference</option>
            <option value="garut-cikajang">Garut / Cikajang (West Java)</option>
            <option value="toraja">Toraja (Sulawesi)</option>
            <option value="ijen">Ijen (East Java)</option>
            <option value="temanggung">Temanggung (Central Java)</option>
            <option value="flores">Flores / Bajawa</option>
            <option value="sidikalang">Sidikalang (North Sumatra)</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Preferred process (optional)</label>
          <select {...register("preferredProcess")} className={fieldClass}>
            <option value="">Any / no preference</option>
            <option value="washed">Washed</option>
            <option value="honey">Honey</option>
            <option value="natural">Natural</option>
            <option value="anaerobic">Anaerobic</option>
            <option value="infused">Infused</option>
            <option value="own-ip">Own IP (NDA required)</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Additional notes (optional)</label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Screen size requirements, cup score target, shipping preferences..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full font-[family-name:var(--font-mono)] text-sm tracking-[0.1em] uppercase px-6 py-4 bg-[#c44b1a] text-[#faf8f4] hover:bg-[#8c3110] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? "Sending..." : "Submit sample request"}
      </button>

      <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#4a4540] text-center">
        We reply within 24 hours. Sample ships within 10 business days of confirmation.
      </p>
    </form>
  );
}
