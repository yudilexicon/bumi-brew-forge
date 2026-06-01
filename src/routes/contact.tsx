import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bumi Kopi" },
      { name: "description", content: "Direct contact for sample requests, FCL contracts, and processing enquiries. Bandung, West Java." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Bumi Kopi · Contact"
        title="Direct line to operations."
        lede="No call centre, no gatekeeper. Email reaches the desk that ships the coffee."
      />
      <section className="container-x py-20 grid lg:grid-cols-2 gap-px bg-border">
        <div className="bg-coal p-10">
          <p className="eyebrow text-rust">All inquiries · Email</p>
          <h2 className="mt-4 font-display text-3xl text-bone">
            <a href="mailto:hello@bumi-kopi.com" className="hover:text-rust transition-colors">hello@bumi-kopi.com</a>
          </h2>
          <p className="mt-3 text-ash text-sm">Sample requests, quotations, FCL contracts, shipment status, documentation — one inbox for everything.</p>
          <p className="font-mono text-smoke text-xs mt-6">Replies Mon – Fri · 08:00 – 17:00 WIB (GMT+7)</p>
        </div>
        <div className="bg-coal p-10">
          <p className="eyebrow text-rust">WhatsApp · Direct</p>
          <h2 className="mt-4 font-display text-3xl text-bone">
            <a href="https://wa.me/6285726666677" target="_blank" rel="noopener noreferrer" className="hover:text-rust transition-colors">+62 857 2666 6677</a>
          </h2>
          <p className="mt-3 text-ash text-sm">Fastest channel for urgent shipment and sample questions.</p>
          <a href="https://wa.me/6285726666677" target="_blank" rel="noopener noreferrer" className="btn-ghost mt-6 inline-flex">Open WhatsApp →</a>
        </div>
      </section>

      <section className="container-x py-20 grid md:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow text-rust">Physical address</p>
          <h3 className="mt-4 font-display text-3xl text-bone">Washing station + HQ</h3>
          <p className="mt-4 text-ash">
            PT Bumi Kopi Indonesia<br/>
            Jl. Cikajang–Pameungpeuk Km 4<br/>
            Bandung Regency 44171<br/>
            West Java, Indonesia
          </p>
          <p className="mt-6 font-mono text-xs text-smoke">−7.3789° S · 107.7944° E</p>
        </div>
        <div>
          <p className="eyebrow text-rust">Visits</p>
          <h3 className="mt-4 font-display text-3xl text-bone">Buyer visits welcome.</h3>
          <p className="mt-4 text-ash">Tour of the washing station, drying beds, and hulling line. Cupping lab on-site. 3-hour drive from Bandung (BDO). Schedule 2 weeks ahead.</p>
          <Link to="/request-sample" className="btn-ghost mt-6">Schedule a visit →</Link>
        </div>
      </section>
    </>
  );
}
