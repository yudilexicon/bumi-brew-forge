import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Mail, MessageSquare, Clock } from "lucide-react";

export const metadata = {
  title: "Contact — Bumi Kopi",
  description:
    "Wholesale enquiries for Bumi Kopi Indonesian green coffee. Email, WhatsApp, or contact form. 24-hour response.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#1e1b18] py-20 border-b border-[#4a4540]/40">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-4">
              Contact
            </p>
            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-5xl md:text-6xl text-[#faf8f4] uppercase tracking-tight leading-tight mb-6">
              Wholesale<br />
              <span className="text-[#c44b1a]">enquiries.</span>
            </h1>
            <p className="font-[family-name:var(--font-body)] text-base text-[#8a8278] max-w-xl font-light leading-relaxed">
              B2B wholesale only. Minimum order quantities apply. Response within 24 business hours.
            </p>
          </div>
        </section>

        <section className="bg-[#1e1b18] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-6">
                  Enquiry form
                </p>
                <ContactForm />
              </div>

              {/* Contact info */}
              <div className="lg:col-span-2 space-y-6">
                <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-6">
                  Direct contact
                </p>

                <div className="border border-[#4a4540]/40 p-6 space-y-5">
                  <div className="flex gap-4 items-start">
                    <Mail size={16} className="text-[#c44b1a] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.1em] uppercase mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:hello@bumi-kopi.com"
                        className="font-[family-name:var(--font-mono)] text-sm text-[#faf8f4] hover:text-[#c44b1a] transition-colors"
                      >
                        hello@bumi-kopi.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <MessageSquare size={16} className="text-[#c44b1a] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.1em] uppercase mb-1">
                        WhatsApp Business
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] font-light">
                        Available on request. Preferred for lot availability and shipping updates.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <Clock size={16} className="text-[#c44b1a] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.1em] uppercase mb-1">
                        Response time
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] font-light">
                        24 hours on business days. Indonesia time (WIB, UTC+7).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-[#4a4540]/40 p-6">
                  <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.12em] uppercase mb-3">
                    Location
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] font-light leading-relaxed">
                    Garut / Cikajang corridor<br />
                    West Java, Indonesia<br />
                    Altitude: 1,200–1,800m asl
                  </p>
                </div>

                <div className="p-6 bg-[#4a4540]/10 border border-[#4a4540]/40">
                  <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#8a8278] tracking-[0.1em] uppercase mb-2">
                    Want to cup first?
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] font-light leading-relaxed mb-4">
                    Free 5kg sample. Full docs. No invoice until approval.
                  </p>
                  <Link
                    href="/request-sample"
                    className="inline-flex items-center gap-1 font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] uppercase text-[#c44b1a] hover:text-[#faf8f4] transition-colors"
                  >
                    Request sample →
                  </Link>
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
