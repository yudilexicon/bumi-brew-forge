import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#8a8278] tracking-[0.2em] uppercase mb-4">
            404
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-5xl text-[#faf8f4] uppercase tracking-tight mb-6">
            Page not found.
          </h1>
          <p className="font-[family-name:var(--font-body)] text-base text-[#8a8278] font-light mb-10">
            That lot might be sold out, or the URL is wrong.
          </p>
          <div className="flex gap-4">
            <Link
              href="/"
              className="font-[family-name:var(--font-mono)] text-sm tracking-[0.1em] uppercase px-5 py-3 bg-[#c44b1a] text-[#faf8f4] hover:bg-[#8c3110] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/catalogue"
              className="font-[family-name:var(--font-mono)] text-sm tracking-[0.1em] uppercase px-5 py-3 border border-[#4a4540] text-[#c4bdb0] hover:border-[#8a8278] transition-colors"
            >
              View catalogue
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
