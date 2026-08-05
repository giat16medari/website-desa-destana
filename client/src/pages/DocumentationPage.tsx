import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ImageIcon, FileText, ClipboardList, Map } from "lucide-react";

const ACTIVITIES = [
  {
    id: 1,
    title: "FGD Penilaian Ketangguhan Desa (PKD)",
    description:
      "Focus Group Discussion PKD mengkaji kondisi nyata desa berdasarkan indikator ketangguhan: layanan dasar, kebijakan PB, pencegahan & mitigasi, kesiapsiagaan darurat & pemulihan.",
    date: "20 Juli 2026",
    category: "FGD",
  },
  {
    id: 2,
    title: "Pembentukan Forum PRB MEDANA",
    description:
      "Pembentukan Forum Pengurangan Risiko Bencana 'MEDANA (Medari Tangguh Bencana)' lengkap dengan statuta, visi-misi, dan struktur pengurus.",
    date: "Juli 2026",
    category: "Organisasi",
  },
  {
    id: 3,
    title: "Penyusunan Kajian Risiko Bencana (KRB)",
    description:
      "Identifikasi & pemeringkatan ancaman, karakteristik angin kencang, dan penilaian risiko per aset (manusia, ekonomi, fisik, lingkungan, sosial).",
    date: "Juli 2026",
    category: "Kajian",
  },
  {
    id: 4,
    title: "Pembentukan Tim Relawan Desa",
    description:
      "Pembentukan tim relawan dengan 5 bidang tugas: SAR, Dapur Umum, Logistik, Kesehatan, dan Keamanan, beserta tim reaksi cepat.",
    date: "Juli 2026",
    category: "Organisasi",
  },
  {
    id: 5,
    title: "Penyusunan Rencana Kontingensi Desa (RENKON)",
    description:
      "Penyusunan skenario, dampak, tujuan & strategi, struktur komando 12 bidang, serta proyeksi kebutuhan logistik tanggap darurat.",
    date: "Juli 2026",
    category: "Perencanaan",
  },
  {
    id: 6,
    title: "Penyusunan Sistem Peringatan Dini (SPD)",
    description:
      "Penetapan sumber peringatan (BMKG/BPBD), mekanisme penyebaran, zona merah, peringatan khusus difabel, dan tindakan RT/RW & masyarakat.",
    date: "Juli 2026",
    category: "Perencanaan",
  },
  {
    id: 7,
    title: "Pemetaan Rencana Evakuasi (REVAK)",
    description:
      "Identifikasi penduduk kawasan rawan, TES/TEA per dusun, jalur evakuasi, dan kapasitas pengungsian dengan jarak & daya tampung.",
    date: "Juli 2026",
    category: "Pemetaan",
  },
  {
    id: 8,
    title: "Penyusunan Rencana Penanggulangan Bencana (RPB)",
    description:
      "Rekap kegiatan per fase: peningkatan kapasitas, kesiapsiagaan, tanggap darurat, dan pasca bencana — lengkap dengan pelaku, waktu & biaya.",
    date: "Juli 2026",
    category: "Perencanaan",
  },
  {
    id: 9,
    title: "Pengembangan Website DESTANA Medari",
    description:
      "Pengembangan platform informasi digital sebagai warisan (legacy) program KKN GIAT 16 untuk edukasi kebencanaan berkelanjutan.",
    date: "Agustus 2026",
    category: "Implementasi",
  },
];

const STATS = [
  { label: "Lembar Kerja Disusun", value: "8", color: "text-primary" },
  { label: "Dusun Terkaji", value: "7", color: "text-sidebar-primary" },
  { label: "Tim Relawan", value: "18", color: "text-accent" },
  { label: "Bidang Komando", value: "12", color: "text-primary" },
];

const TIMELINE = [
  {
    tahap: "Tahap 1",
    title: "Orientasi & Sosialisasi Awal",
    description:
      "Tim KKN GIAT 16 melakukan orientasi dengan perangkat desa dan sosialisasi awal program DESTANA.",
  },
  {
    tahap: "Tahap 2",
    title: "Kajian Risiko & Penilaian Ketangguhan",
    description:
      "Penyusunan Kajian Risiko Bencana (KRB) dan FGD Penilaian Ketangguhan Desa (PKD) bersama pemangku kepentingan.",
  },
  {
    tahap: "Tahap 3",
    title: "Pembentukan FPRB & Tim Relawan",
    description:
      "Pembentukan Forum PRB MEDANA dan Tim Relawan Desa dengan struktur pengurus dan pembagian tugas.",
  },
  {
    tahap: "Tahap 4",
    title: "Penyusunan Rencana (RENKON, REVAK, SPD, RPB)",
    description:
      "Penyusunan empat dokumen perencanaan: rencana kontingensi, rencana evakuasi, sistem peringatan dini, dan rencana penanggulangan bencana.",
  },
  {
    tahap: "Tahap 5",
    title: "Implementasi Program",
    description:
      "Pengembangan website DESTANA Medari, rencana pemasangan plang jalur evakuasi, dan sosialisasi kepada masyarakat.",
  },
  {
    tahap: "Tahap 6",
    title: "Penyerahan Hasil",
    description:
      "Menyerahkan seluruh hasil kegiatan kepada Pemerintah Desa Medari sebagai dokumentasi dan warisan program.",
  },
];

export default function DocumentationPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "FGD":
        return "bg-primary/10 text-primary";
      case "Organisasi":
        return "bg-sidebar-primary/10 text-sidebar-primary";
      case "Kajian":
        return "bg-accent/10 text-accent";
      case "Perencanaan":
        return "bg-primary/10 text-primary";
      case "Pemetaan":
        return "bg-accent/10 text-accent";
      case "Implementasi":
        return "bg-sidebar-primary/10 text-sidebar-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Perencanaan":
        return ClipboardList;
      case "Pemetaan":
        return Map;
      case "FGD":
      case "Kajian":
        return FileText;
      default:
        return ImageIcon;
    }
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
              Dokumentasi
            </h1>
            <p className="font-body text-xl text-foreground max-w-2xl">
              Daftar kegiatan penyusunan dan implementasi program DESTANA Desa
              Medari oleh tim KKN GIAT 16.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Kegiatan Program
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Sembilan kegiatan utama penyusunan program DESTANA Desa Medari
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ACTIVITIES.map((item) => {
              const Icon = getCategoryIcon(item.category);
              return (
                <motion.div key={item.id} variants={itemVariants}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="w-full h-40 bg-muted flex items-center justify-center">
                      <Icon className="text-muted-foreground" size={40} />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold-display ${getCategoryColor(
                            item.category
                          )}`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-semibold-display text-lg text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-foreground text-sm mb-4 flex-grow">
                        {item.description}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        📅 {item.date}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
          <p className="font-body text-xs text-muted-foreground mt-6 text-center">
            Foto dokumentasi kegiatan akan ditambahkan setelah pelaksanaan di
            lapangan.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Statistik Kegiatan
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ringkasan hasil penyusunan program DESTANA Desa Medari
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
                  <p className={`font-display text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </p>
                  <p className="font-body text-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Timeline Kegiatan
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Alur penyusunan program DESTANA Desa Medari GIAT 16
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-8"
          >
            {TIMELINE.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold-display text-sm">
                      {idx + 1}
                    </div>
                    {idx < TIMELINE.length - 1 && (
                      <div className="w-1 h-16 bg-primary/30 mt-2"></div>
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="font-semibold-display text-primary text-sm mb-1">
                      {item.tahap}
                    </p>
                    <h3 className="font-semibold-display text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}