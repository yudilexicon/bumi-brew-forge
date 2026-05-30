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
  weeklyVolume: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more"),
});

type FormData = z.infer<typeof schema>;

const fieldClass =
  "w-full bg-transparent border border-[#4a4540]/60 px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#faf8f4] placeholder:text-[#4a4540] focus:outline-none focus:border-[#8a8278] transition-colors";

const labelClass =
  "font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.12em] uppercase mb-1.5 block";

const errorClass = "font-[family-name:var(--font-mono)] text-[10px] text-[#c44b1a] mt-1";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(_data: FormData) {
    try {
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Email us at hello@bumi-kopi.com");
    }
  }

  if (submitted) {
    return (
      <div className="border border-[#3d5c1e] bg-[#3d5c1e]/10 p-8">
        <p className="font-[family-name:var(--font-display)] font-extrabold text-xl text-[#faf8f4] uppercase tracking-wide mb-3">
          Enquiry received.
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] font-light leading-relaxed">
          We&apos;ll be in touch within 24 hours. Check your inbox — including spam.
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
          <input {...register("company")} placeholder="Company name" className={fieldClass} />
          {errors.company && <p className={errorClass}>{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Email</label>
          <input {...register("email")} type="email" placeholder="you@company.com" className={fieldClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Country</label>
          <input {...register("country")} placeholder="Country" className={fieldClass} />
          {errors.country && <p className={errorClass}>{errors.country.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Weekly volume (optional)</label>
        <input {...register("weeklyVolume")} placeholder="Approximate weekly green bean volume" className={fieldClass} />
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us what you're sourcing — origin, process, volume, timeline..."
          className={`${fieldClass} resize-none`}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full font-[family-name:var(--font-mono)] text-sm tracking-[0.1em] uppercase px-6 py-4 bg-[#c44b1a] text-[#faf8f4] hover:bg-[#8c3110] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? "Sending..." : "Send enquiry"}
      </button>

      <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#4a4540] text-center">
        Response within 24 hours on business days.
      </p>
    </form>
  );
}
