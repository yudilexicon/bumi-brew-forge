import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#4a4540]/40 bg-[#1e1b18]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="font-[family-name:var(--font-display)] font-extrabold text-2xl tracking-[0.06em] text-[#faf8f4] uppercase mb-2">
              BUMI KOPI
            </p>
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.1em] mb-6">
              Indonesian Green Coffee · Processing House
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[#c4bdb0] leading-relaxed max-w-sm">
              B2B green bean export from owned processing infrastructure in West Java.
              6 origins. 6 processing methods. Volume welcome.
            </p>
          </div>

          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.15em] uppercase mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {[
                { href: "/origins", label: "Origins" },
                { href: "/processing", label: "Processing" },
                { href: "/catalogue", label: "Catalogue" },
                { href: "/about", label: "About" },
                { href: "/request-sample", label: "Request Sample" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-[family-name:var(--font-body)] text-sm text-[#8a8278] hover:text-[#faf8f4] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.15em] uppercase mb-4">
              Contact
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@bumi-kopi.com"
                  className="font-[family-name:var(--font-mono)] text-sm text-[#8a8278] hover:text-[#faf8f4] transition-colors"
                >
                  hello@bumi-kopi.com
                </a>
              </li>
              <li className="font-[family-name:var(--font-body)] text-sm text-[#8a8278]">
                Garut / Cikajang, West Java
              </li>
              <li className="font-[family-name:var(--font-body)] text-sm text-[#8a8278]">
                Indonesia
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/request-sample"
                className="inline-block font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] uppercase px-4 py-2 bg-[#c44b1a] text-[#faf8f4] hover:bg-[#8c3110] transition-colors"
              >
                Request Sample →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#4a4540]/40 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#4a4540]">
            © {new Date().getFullYear()} Bumi Kopi. B2B wholesale only.
          </p>
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#4a4540]">
            bumi-kopi.com
          </p>
        </div>
      </div>
    </footer>
  );
}
