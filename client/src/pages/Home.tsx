import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wind, Bug, Droplet, CloudRain, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  PARTNERS,
  PROGRAM_SECTIONS,
  THREAT_RANKING,
  PKD,
  ZONA_MERAH,
} from "@/data/giat";

export default function Home() {
  const disasterHighlights = [
    {
      name: "Angin Kencang",
      level: "Risiko Tinggi",
      description:
        "Ancaman utama Desa Medari pada musim pancaroba — terjadi tiba-tiba (5–30 menit), merobohkan pohon dan menerbangkan atap seng.",
      icon: Wind,
      color: "text-primary",
    },
    {
      name: "Hama/Penyakit Tanaman",
      level: "Risiko Tinggi",
      description:
        "Penyakit tanaman cabai dan DBD menjadi ancaman yang berulang bagi perekonomian dan kesehatan warga.",
      icon: Bug,
      color: "text-sidebar-primary",
    },
    {
      name: "Kekeringan & Banjir",
      level: "Risiko Sedang",
      description:
        "Kekeringan musim kemarau dan banjir/abrasi lahan pertanian mengancam ketahanan pangan desa.",
      icon: Droplet,
      color: "text-accent",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-primary/10 to-sidebar-primary/10 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-4">
              DESTANA Medari
            </h1>
            <p className="font-body text-xl md:text-2xl text-foreground mb-3">
              Medari Tangguh Bencana — Siaga bersama, Medari tangguh selamanya
            </p>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl">
              Forum PRB <strong>MEDANA</strong> bersama Pemerintah Desa Medari,
              Kecamatan Ngadirejo, Kabupaten Temanggung, meningkatkan
              kesiapsiagaan masyarakat menghadapi ancaman utama:{" "}
              <strong>Cuaca Ekstrem (Angin Kencang)</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/revak">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg">
                  Lihat Jalur Evakuasi
                </Button>
              </Link>
              <Link href="/spd">
                <Button
                  variant="outline"
                  className="border-sidebar-primary text-sidebar-primary hover:bg-sidebar-primary/10 font-semibold px-8 py-6 text-lg"
                >
                  Pelajari Sistem Peringatan Dini
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profil Desa */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Profil Desa Medari
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Desa agraris di Kecamatan Ngadirejo, Kabupaten Temanggung, Jawa
              Tengah
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-semibold-display text-2xl text-primary mb-3">
                  Lokasi & Geografis
                </h3>
                <p className="font-body text-foreground leading-relaxed">
                  Desa Medari terletak di Kecamatan Ngadirejo, Kabupaten
                  Temanggung, Jawa Tengah. Wilayahnya dikelilingi pesawahan
                  hijau di kaki pegunungan, dengan kondisi alam indah namun
                  memerlukan kesiapsiagaan terhadap cuaca ekstrem.
                </p>
              </div>
              <div>
                <h3 className="font-semibold-display text-2xl text-sidebar-primary mb-3">
                  Mata Pencaharian & Budaya
                </h3>
                <p className="font-body text-foreground leading-relaxed">
                  Penduduk hidup agraris — bercocok tanam padi, tembakau, dan
                  sayuran. Keindahan alam dan budaya tradisional masih kuat,
                  menjadikannya tempat dengan kehidupan desa yang autentik.
                </p>
              </div>
              <div>
                <h3 className="font-semibold-display text-2xl text-accent mb-3">
                  Zona Rawan Bencana
                </h3>
                <p className="font-body text-foreground leading-relaxed">
                  Zona merah rentan angin kencang meliputi{" "}
                  <strong>Dusun {ZONA_MERAH.join(", ")}</strong>, dengan 7 dusun
                  keseluruhan: Medari, Bringinan, Sobahan, Mandi, Kopen, Jiwan,
                  dan Kauman.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-primary/5 border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="text-primary" size={28} />
                  <h3 className="font-semibold-display text-xl text-primary">
                    Hasil Penilaian Ketangguhan Desa 2026
                  </h3>
                </div>
                <p className="font-display text-5xl font-bold text-primary mb-1">
                  {PKD.indeks}
                </p>
                <p className="font-semibold-display text-lg text-sidebar-primary mb-4">
                  {PKD.tingkat}
                </p>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Hasil Focus Group Discussion (FGD) PKD pada{" "}
                  {PKD.fgd.tanggal} bersama Pemerintah Desa, BPD, FPRB, Tim
                  Relawan, dan PKK Desa Medari.
                </p>
                <Link href="/pkd">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    Lihat Detail PKD
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Program Destana Medari
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Delapan komponen penyusunan Desa Tangguh Bencana Desa Medari
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {PROGRAM_SECTIONS.map((prog) => (
              <motion.div key={prog.slug} variants={itemVariants}>
                <Link href={`/${prog.slug}`}>
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow hover:border-primary/40 group cursor-pointer">
                    <h3 className="font-semibold-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {prog.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {prog.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary mt-4 font-semibold-display">
                      Pelajari <ArrowRight size={14} />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Potensi Bencana */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Potensi Bencana
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Pemeringkatan ancaman Desa Medari berdasarkan Kajian Risiko
              Bencana (KRB)
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {disasterHighlights.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-primary/10 ${d.color}`}>
                        <Icon size={32} />
                      </div>
                      <div>
                        <h3 className="font-semibold-display text-lg">
                          {d.name}
                        </h3>
                        <p className="font-body text-xs text-primary font-semibold">
                          {d.level}
                        </p>
                      </div>
                    </div>
                    <p className="font-body text-foreground leading-relaxed">
                      {d.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Threat ranking compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <CloudRain className="text-primary" size={20} />
                <h3 className="font-semibold-display text-lg">
                  Pemeringkatan Ancaman
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {THREAT_RANKING.map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center justify-between rounded-md border border-border px-3 py-2"
                  >
                    <span className="font-body text-sm">{t.name}</span>
                    <span className="font-display font-bold text-primary">
                      {t.total}
                    </span>
                  </div>
                ))}
              </div>
              <p className="font-body text-xs text-muted-foreground mt-3">
                Skor = Kemungkinan × Perkiraan Dampak. Selengkapnya di{" "}
                <Link
                  href="/krb"
                  className="text-primary hover:underline font-semibold"
                >
                  Kajian Risiko
                </Link>
                .
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Mitra Program DESTANA
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Kolaborasi tiga institusi yang berkomitmen pada kesiapsiagaan
              bencana Desa Medari
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {PARTNERS.map((partner, idx) => (
              <motion.div key={partner.id} variants={itemVariants}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-full h-40 mb-4 flex items-center justify-center bg-muted rounded-lg">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  </div>
                  <h3 className="font-semibold-display text-lg text-foreground">
                    {partner.name}
                  </h3>
                  <p className="font-body text-sm text-primary font-semibold">
                    {partner.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link href="/partners">
              <Button variant="outline">Lihat Semua Mitra & Pendukung</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-sidebar-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Berpartisipasi dalam Mitigasi Bencana
            </h2>
            <p className="font-body text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Bantu kami mengidentifikasi risiko bencana di desa Anda dengan
              mengisi formulir kajian risiko.
            </p>
            <Link href="/krb">
              <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-6 text-lg">
                Isi Formulir Kajian Risiko
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}