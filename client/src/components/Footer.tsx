import { Link } from "wouter";
import { PROGRAM_SECTIONS, VILLAGE } from "@/data/giat";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo_kkn.png"
                alt="Logo GIAT 16"
                className="h-10 w-10 object-contain"
              />
              <div>
                <div className="font-display text-lg text-primary">
                  DESTANA Medari
                </div>
                <div className="font-body text-xs text-sidebar-primary">
                  Medari Tangguh Bencana
                </div>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground">
              Platform informasi Desa Tangguh Bencana Desa Medari, Ngadirejo,
              Temanggung. Forum PRB <strong>MEDANA</strong> — Siaga bersama,
              Medari tangguh selamanya.
            </p>
          </div>

          {/* Program Links */}
          <div>
            <h4 className="font-semibold-display text-sm mb-4">Program</h4>
            <ul className="space-y-2 text-sm">
              {PROGRAM_SECTIONS.slice(0, 5).map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${item.slug}`}
                    className="text-foreground hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold-display text-sm mb-4">Lainnya</h4>
            <ul className="space-y-2 text-sm">
              {PROGRAM_SECTIONS.slice(5).map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${item.slug}`}
                    className="text-foreground hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/documentation"
                  className="text-foreground hover:text-primary"
                >
                  Dokumentasi
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-foreground hover:text-primary"
                >
                  Mitra
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold-display text-sm mb-4">Kontak</h4>
            <p className="font-body text-sm text-muted-foreground">
              {VILLAGE.alamatForum}
              <br />
              <a
                href={`mailto:${VILLAGE.email}`}
                className="text-primary hover:underline"
              >
                {VILLAGE.email}
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="font-body text-sm text-center text-muted-foreground">
            © {currentYear} DESTANA Desa Medari. Program KKN Tematik GIAT 16
            UNNES × Desa Medari.
          </p>
        </div>
      </div>
    </footer>
  );
}