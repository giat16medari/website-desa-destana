import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Handshake, Building2 } from "lucide-react";
import { PARTNERS, PENDUKUNG } from "@/data/giat";

const COLLABORATION = [
  {
    title: "UNNES",
    description:
      "Sebagai institusi pendidikan, UNNES menyediakan mahasiswa berkualitas dan pendampingan akademis untuk memastikan program KKN Tematik DESTANA berjalan dengan baik dan menghasilkan luaran yang bermanfaat.",
  },
  {
    title: "GIAT 16 Medari",
    description:
      "Kelompok KKN ini adalah tim pelaksana utama yang bekerja langsung dengan masyarakat Desa Medari untuk mengidentifikasi risiko, merencanakan mitigasi, dan melaksanakan kegiatan sosialisasi.",
  },
  {
    title: "Desa Medari",
    description:
      "Sebagai mitra lokal, Desa Medari menyediakan akses ke masyarakat, fasilitas, dan data lokal yang diperlukan untuk keberhasilan implementasi program DESTANA.",
  },
];

const STATS = [
  { label: "Indeks Ketangguhan", value: "57.16" },
  { label: "Dusun Terlibat", value: "7" },
  { label: "Tim Relawan", value: "18" },
  { label: "Bidang Komando RENKON", value: "12" },
];

export default function PartnersPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary/10 to-sidebar-primary/10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-4">
              Mitra & Kolaborator
            </h1>
            <p className="font-body text-xl text-foreground max-w-2xl">
              Program DESTANA Desa Medari adalah hasil kolaborasi dari berbagai
              pihak yang berkomitmen untuk meningkatkan kesiapsiagaan bencana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Organisasi Pendukung Utama
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Tiga institusi inti program DESTANA Desa Medari
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {PARTNERS.map((partner) => (
              <motion.div key={partner.id} variants={itemVariants}>
                <Card className="h-full p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                  <div className="w-full h-40 mb-6 flex items-center justify-center bg-muted rounded-lg overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  </div>
                  <h3 className="font-semibold-display text-lg text-foreground mb-2">
                    {partner.name}
                  </h3>
                  <p className="font-body text-sm text-primary font-semibold mb-3">
                    {partner.subtitle}
                  </p>
                  <p className="font-body text-foreground text-sm">
                    {partner.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pendukung */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Instansi Pendukung
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Pihak-pihak yang mendukung implementasi program DESTANA Desa Medari
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {PENDUKUNG.map((p, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="p-5 flex items-center gap-3 h-full">
                  <div className="p-2.5 bg-primary/10 rounded-lg flex-shrink-0">
                    <Building2 className="text-primary" size={22} />
                  </div>
                  <p className="font-body text-sm text-foreground font-semibold-display">
                    {p}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Tentang Kolaborasi Ini
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Bagaimana ketiga pihak bekerja sama untuk DESTANA
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {COLLABORATION.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <h3 className="font-semibold-display text-lg text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Handshake className="text-primary" size={28} />
              <h2 className="font-display text-4xl font-bold text-foreground">
                Dampak Kolaborasi
              </h2>
            </div>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Hasil nyata dari kerjasama GIAT 16 dengan Desa Medari
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {STATS.map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-6 text-center">
                  <p className="font-display text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-foreground text-sm">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}