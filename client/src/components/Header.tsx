import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { VILLAGE } from "@/data/giat";
import { PROGRAM_SECTIONS } from "@/data/giat";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  const topLinks = [
    { label: "Beranda", href: "/" },
    { label: "Dokumentasi", href: "/documentation" },
    { label: "Mitra", href: "/partners" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img
            src="/images/logo_kkn.png"
            alt="Logo GIAT 16 Desa Medari"
            className="h-12 w-12 object-contain"
          />
          <div className="hidden sm:block">
            <div className="font-display text-lg text-primary">DESTANA</div>
            <div className="font-body text-xs text-sidebar-primary">
              Desa Tangguh Bencana Medari
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="font-body text-foreground hover:text-primary transition-colors"
          >
            Beranda
          </Link>

          {/* Program Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProgramOpen(true)}
            onMouseLeave={() => setProgramOpen(false)}
          >
            <button
              className="font-body text-foreground hover:text-primary transition-colors flex items-center gap-1"
              onClick={() => setProgramOpen((v) => !v)}
              aria-label="Menu Program"
            >
              Program
              <ChevronDown size={16} />
            </button>
            {programOpen && (
              <div className="absolute left-0 top-full pt-2 w-64 z-50">
                <div className="bg-white rounded-lg shadow-xl border border-border p-2 grid gap-1">
                  {PROGRAM_SECTIONS.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      onClick={() => setProgramOpen(false)}
                      className="font-body text-sm text-foreground hover:bg-muted hover:text-primary rounded-md px-3 py-2 transition-colors block"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {topLinks
            .filter((l) => l.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              href="/"
              className="font-body text-foreground hover:text-primary transition-colors py-2 block"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <p className="font-semibold-display text-xs text-muted-foreground uppercase tracking-wide mt-2 mb-1">
              Program
            </p>
            {PROGRAM_SECTIONS.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="font-body text-foreground hover:text-primary transition-colors py-2 pl-3 block"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            {topLinks
              .filter((l) => l.href !== "/")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-body text-foreground hover:text-primary transition-colors py-2 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            <p className="font-body text-xs text-muted-foreground mt-3">
              {VILLAGE.name}, {VILLAGE.kecamatan}
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}