import { Card } from "@/components/ui/card";
import {
  Radio,
  MessageSquare,
  Megaphone,
  Bell,
  Wind,
  CheckCircle,
  UserCheck,
  Users,
  Eye,
  ShieldAlert,
} from "lucide-react";
import { motion } from "framer-motion";
import { THREAT_UTAMA, ZONA_MERAH } from "@/data/giat";

export default function SPDPage() {
  const pemantauan = [
    {
      title: "Sumber Peringatan Bahaya",
      desc: "Informasi resmi dari BMKG dan BPBD Kabupaten Temanggung, serta hasil pemantauan pemerintah desa, perangkat desa, RT/RW, relawan, dan masyarakat di wilayah Desa Medari.",
      icon: Radio,
    },
    {
      title: "Bentuk Peringatan Bahaya",
      desc: "Informasi prakiraan cuaca dan peringatan dini melalui pesan tertulis (WhatsApp), penyampaian lisan, pengeras suara, dan sarana peringatan lain yang tersedia di desa.",
      icon: MessageSquare,
    },
    {
      title: "Cara Pemantauan Bahaya",
      desc: "Mengikuti informasi peringatan dini cuaca dari BMKG, mengamati perubahan kondisi cuaca dan kecepatan angin, serta pemantauan langsung lingkungan berpotensi terdampak: pohon besar, tiang listrik, atap rumah, dan bangunan tidak kokoh.",
      icon: Eye,
    },
  ];

  const penyampaian = [
    {
      title: "Sumber Resmi → Desa → Warga",
      desc: "Informasi disampaikan berurutan dari sumber resmi kepada pemerintah desa, kemudian diteruskan kepada kepala dusun, RT/RW, relawan, dan masyarakat melalui grup komunikasi, telepon, pengeras suara, maupun penyampaian langsung.",
    },
    {
      title: "Memastikan Kebenaran Informasi",
      desc: "Pengecekan terhadap sumber resmi BMKG atau BPBD, konfirmasi kepada pemerintah desa atau pihak berwenang, serta verifikasi kondisi di lapangan sebelum informasi disebarluaskan secara lebih luas.",
    },
  ];

  const peringatanUmum = [
    { title: "Pesan Tertulis", desc: "Pesan WhatsApp berisi prakiraan dan peringatan dari BMKG/BPBD.", icon: MessageSquare },
    { title: "Panggilan Telepon", desc: "Telepon langsung antar perangkat desa, kepala dusun, dan ketua RT/RW.", icon: Megaphone },
    { title: "Pengeras Suara", desc: "Pengumuman melalui pengeras suara (TOA) di tiap dusun.", icon: Radio },
    { title: "Door-to-Door", desc: "Penyampaian langsung dari rumah ke rumah oleh RT/RW dan relawan.", icon: UserCheck },
    { title: "Sirene", desc: "Bunyi sirene dengan pola khusus sebagai tanda bahaya.", icon: Bell },
    { title: "Kentongan", desc: "Kentongan dipukul dengan ritme tertentu sebagai peringatan tradisional.", icon: Bell },
  ];

  const tindakan = [
    {
      peran: "Tindakan RT/RW",
      icon: UserCheck,
      steps: [
        "Menerima dan memastikan kebenaran informasi peringatan, lalu segera menyampaikannya kepada warga.",
        "Melakukan pemantauan kondisi lingkungan di wilayahnya.",
        "Membantu kelompok rentan (anak, lansia, ibu hamil, difabel).",
        "Mengarahkan masyarakat untuk menjauhi lokasi berbahaya.",
        "Melaporkan kondisi dan kejadian kepada pemerintah desa.",
      ],
    },
    {
      peran: "Tindakan Masyarakat",
      icon: Users,
      steps: [
        "Mengikuti peringatan dari sumber resmi dengan berlindung di tempat aman.",
        "Menjauhi pohon besar, tiang listrik, bangunan berpotensi roboh, dan benda mudah terbang.",
        "Membawa tas siaga bencana yang telah dipersiapkan sebelumnya.",
        "Mengamankan barang di sekitar rumah.",
        "Membantu anggota keluarga atau tetangga yang membutuhkan bantuan.",
        "Melaporkan kejadian dan kerusakan kepada RT/RW atau pemerintah desa.",
      ],
    },
  ];

  const disasterResponseSteps = [
    {
      phase: "Sebelum Bencana",
      steps: [
        "Pelajari jalur evakuasi dan titik kumpul di dusun Anda.",
        "Siapkan tas darurat berisi dokumen penting dan kebutuhan pokok.",
        "Pantau informasi prakiraan cuaca dari BMKG via WhatsApp/grup RT-RW.",
        "Periksa dan perkuat atap rumah serta bangunan yang tidak kokoh.",
        "Pangkas pohon tinggi dekat pemukiman dan fasilitas umum.",
      ],
    },
    {
      phase: "Saat Terjadi Bencana",
      steps: [
        "Respons peringatan dini dengan cepat dan berlindung di tempat aman.",
        "Menjauhi pohon besar, tiang listrik, dan bangunan yang berpotensi roboh.",
        "Bawa kelompok rentan menuju titik kumpul terdekat.",
        "Jangan kembali ke rumah sampai mendapat izin resmi.",
        "Bantu tetangga yang membutuhkan, terutama anak-anak dan lansia.",
      ],
    },
    {
      phase: "Pasca Bencana",
      steps: [
        "Tetap di tempat aman sampai mendapat informasi resmi.",
        "Berikan informasi tentang korban kepada perangkat desa.",
        "Ikuti arahan dari tim relawan dan petugas kesehatan.",
        "Hati-hati terhadap kabel listrik putus dan reruntuhan.",
        "Bantu dalam proses pemulihan dan pembersihan lingkungan.",
      ],
    },
  ];

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
              Sistem Peringatan Dini
            </h1>
            <p className="font-body text-xl text-foreground max-w-2xl">
              Penyusunan Sistem Peringatan Dini (SPD) untuk ancaman{" "}
              <strong>{THREAT_UTAMA}</strong> di Desa Medari.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pemantauan & Peringatan Bahaya */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Pemantauan & Peringatan Bahaya
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Sumber, bentuk, dan cara pemantauan peringatan bahaya
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {pemantauan.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={32} />
                      </div>
                    </div>
                    <h3 className="font-semibold-display text-xl mb-3 text-center">
                      {p.title}
                    </h3>
                    <p className="font-body text-foreground text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mt-10"
          >
            {penyampaian.map((p, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-6 border-l-4 border-primary">
                  <h3 className="font-semibold-display text-lg text-primary mb-2">
                    {p.title}
                  </h3>
                  <p className="font-body text-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Penyebarluasan Peringatan */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Penyebarluasan Peringatan
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Penyampai, sasaran, dan bentuk peringatan kepada masyarakat
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="font-semibold-display text-lg text-primary mb-3">
                Penyampai Peringatan
              </h3>
              <p className="font-body text-foreground leading-relaxed mb-4">
                Pemerintah Desa Medari melalui perangkat desa, kepala dusun,
                ketua RT/RW, FPRB dan tim relawan, dibantu tokoh masyarakat dan
                tokoh agama.
              </p>
              <h3 className="font-semibold-display text-lg text-sidebar-primary mb-3 mt-6">
                Sasaran Peringatan
              </h3>
              <p className="font-body text-foreground leading-relaxed">
                Seluruh masyarakat Desa Medari, terutama yang tinggal di{" "}
                <strong>zona merah</strong> (Dusun {ZONA_MERAH.join(", ")})
                serta kelompok rentan: anak-anak, lansia, ibu hamil, dan
                penyandang disabilitas.
              </p>
            </Card>

            <Card className="p-8 bg-accent/5 border-accent/20">
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert className="text-accent" size={22} />
                <h3 className="font-semibold-display text-lg text-accent">
                  Peringatan Khusus Difabel
                </h3>
              </div>
              <p className="font-body text-foreground leading-relaxed">
                Bagi penyandang disabilitas, peringatan disampaikan melalui
                pendamping keluarga, kader, relawan, atau petugas yang ditunjuk
                dengan menyesuaikan metode komunikasi sesuai kebutuhan
                masing-masing.
              </p>
            </Card>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {peringatanUmum.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <h3 className="font-semibold-display text-base">
                        {p.title}
                      </h3>
                    </div>
                    <p className="font-body text-foreground text-sm">
                      {p.desc}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Respon/Tindakan */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Respon & Tindakan Terhadap Peringatan
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Tanggung jawab RT/RW dan masyarakat saat menerima peringatan
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {tindakan.map((t, idx) => {
              const Icon = t.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="p-8 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h3 className="font-semibold-display text-2xl text-primary">
                        {t.peran}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {t.steps.map((s, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle
                            className="text-accent flex-shrink-0 mt-1"
                            size={18}
                          />
                          <p className="font-body text-foreground text-sm">
                            {s}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Panduan Respons */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Panduan Respons Bencana
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Langkah konkret sebelum, saat, dan sesudah angin kencang
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {disasterResponseSteps.map((section, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-8 border-l-4 border-primary">
                  <h3 className="font-semibold-display text-2xl text-primary mb-6">
                    {section.phase}
                  </h3>
                  <ul className="space-y-4">
                    {section.steps.map((step, stepIdx) => (
                      <li key={stepIdx} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <CheckCircle className="text-accent" size={20} />
                        </div>
                        <p className="font-body text-foreground">{step}</p>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Catatan Penting */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 bg-primary/5 border-primary/20">
            <div className="flex gap-4 md:gap-6">
              <Wind className="text-primary flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold-display text-2xl text-primary mb-4">
                  Catatan Penting
                </h3>
                <ul className="space-y-3 font-body text-foreground">
                  <li>
                    • Jangan menunggu peringatan resmi untuk mengambil tindakan
                    jika Anda merasakan tanda-tanda bahaya (langit gelap, awan
                    hitam tebal, angin mulai bertiup kencang).
                  </li>
                  <li>
                    • Angin kencang datang tiba-tiba (5–30 menit) — kecepatan
                    respons menyelamatkan nyawa.
                  </li>
                  <li>
                    • Utamakan keselamatan keluarga, khususnya kelompok rentan,
                    di atas harta benda.
                  </li>
                  <li>
                    • Ikuti arahan petugas resmi dan jangan menyebarkan
                    informasi yang tidak terverifikasi.
                  </li>
                  <li>
                    • Hubungi perangkat desa atau tim relawan jika ada orang
                    yang membutuhkan bantuan.
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}