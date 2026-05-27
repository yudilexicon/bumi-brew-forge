"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/origins", label: "Origins" },
  { href: "/processing", label: "Processing" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#4a4540]/40 bg-[#1e1b18]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] font-extrabold text-xl tracking-[0.06em] text-[#faf8f4] uppercase"
        >
          BUMI KOPI
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-[family-name:var(--font-mono)] text-xs tracking-[0.12em] uppercase transition-colors",
                pathname === item.href
                  ? "text-[#faf8f4]"
                  : "text-[#8a8278] hover:text-[#faf8f4]"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/request-sample"
            className="font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] uppercase px-4 py-2 bg-[#c44b1a] text-[#faf8f4] hover:bg-[#8c3110] transition-colors"
          >
            Request Sample
          </Link>
        </nav>

        <button
          className="md:hidden text-[#faf8f4]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1e1b18] border-t border-[#4a4540]/40 px-6 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "font-[family-name:var(--font-mono)] text-xs tracking-[0.12em] uppercase py-2",
                pathname === item.href ? "text-[#faf8f4]" : "text-[#8a8278]"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/request-sample"
            onClick={() => setOpen(false)}
            className="font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] uppercase px-4 py-3 bg-[#c44b1a] text-[#faf8f4] text-center mt-2"
          >
            Request Sample
          </Link>
        </div>
      )}
    </header>
  );
}
