import { Card } from "@/components/ui/card";
import {
  Users,
  Target,
  Heart,
  Wallet,
  Network,
  Briefcase,
  Flag,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const STATUTA = {
  alasan:
    "Desa Medari memiliki ancaman bencana seperti abrasi pada lahan pertanian, angin kencang, gempa bumi, dan gunung meletus. Oleh karena itu diperlukan forum yang menjadi wadah koordinasi dan partisipasi masyarakat untuk meningkatkan kesiapsiagaan, mengurangi risiko bencana, serta memperkuat ketangguhan desa dalam menghadapi bencana.",
  nama: "MEDANA (Medari Tangguh Bencana)",
  semboyan: "Siaga bersama, Medari tangguh selamanya",
  alamat: "Balai Desa Medari, Kecamatan Ngadirejo, Kabupaten Temanggung, Jawa Tengah",
  visi: "Terwujudnya masyarakat Desa Medari yang tangguh, siaga, dan mandiri dalam menghadapi bencana.",
  misi: [
    "Meningkatkan kapasitas masyarakat dalam pengurangan risiko bencana.",
    "Memperkuat koordinasi antar lembaga desa dengan masyarakat.",
    "Melaksanakan sosialisasi, pelatihan, dan simulasi kebencanaan secara berkala.",
    "Mendukung penyusunan dan pelaksanaan Rencana Kontingensi Desa (RENKON DESA).",
  ],
  fungsi: [
    "Mengkoordinasikan kegiatan pengurangan risiko bencana di desa.",
    "Menjadi wadah komunikasi antara pemerintah desa, relawan, dan masyarakat.",
    "Melaksanakan edukasi, pelatihan, dan simulasi kebencanaan.",
    "Memberikan masukan dalam penyusunan kebijakan pembangunan desa berbasis risiko bencana.",
  ],
  nilai: [
    "Gotong royong",
    "Tanggung jawab",
    "Kepedulian",
    "Partisipasi",
    "Inklusif",
    "Tangguh",
    "Berkelanjutan",
  ],
  anggota: [
    "Perangkat Desa", "BPD", "Linmas", "Babinsa", "Bhabinkamtibmas",
    "PKD", "Karang Taruna", "PKK", "Kelompok Tani", "Bumdes",
    "Tokoh Masyarakat", "Tokoh Pemuda", "Relawan Desa",
  ],
};

const PENGURUS_JABATAN = [
  { jabatan: "Pembina", orang: ["BPBD Kabupaten Temanggung", "Puskesmas Banjarsari"] },
  { jabatan: "Pelindung", orang: ["Kepala Desa Medari", "Ketua BPD Desa Medari"] },
  { jabatan: "Pendamping", orang: ["Bhabinkamtibmas Desa Medari", "Babinsa Desa Medari", "Kasi Trantib Kecamatan Ngadirejo", "Bidan Desa Medari"] },
  { jabatan: "Ketua", orang: ["Yosep Restu Adi"] },
  { jabatan: "Wakil Ketua", orang: ["Azis Muslim"] },
  { jabatan: "Sekretaris", orang: ["Ranto Isheriyanto"] },
  { jabatan: "Bendahara", orang: ["Arinawang Ambar Ketawang"] },
];

const PENGURUS_BIDANG = [
  { bidang: "Pendidikan", koordinator: "Susilan", anggota: "Endang Lestari" },
  { bidang: "Kebijakan", koordinator: "Hendri Erfanto", anggota: "Reni Rahmawati" },
  { bidang: "Logistik", koordinator: "Muhamad Nurwakhid", anggota: "Rizki Arif Afriza Darman" },
  { bidang: "Data & Informasi", koordinator: "Bejo Samsudin", anggota: "Indah Kurniawati" },
  { bidang: "Pencegahan & Kesiapsiagaan", koordinator: "Supardi", anggota: "Miszaeni" },
  { bidang: "Tanggap Darurat", koordinator: "Kadarusman", anggota: "Suwarno" },
  { bidang: "Pemulihan", koordinator: "Wiyadi", anggota: "Puji Slamet" },
];

const KEGIATAN_BIDANG = [
  { bidang: "Pendidikan & Pelatihan", fungsi: "Meningkatkan pengetahuan & kapasitas masyarakat dalam PRB", kegiatan: "Sosialisasi kebencanaan, pelatihan P3, simulasi evakuasi", sasaran: "Masyarakat, relawan, perangkat desa, pelajar", waktu: "3 bulan sekali" },
  { bidang: "Kebijakan & Perencanaan", fungsi: "Mendukung penyusunan kebijakan desa PRB", kegiatan: "Penyusunan PERDES/SK Destana, Rencana Kontingensi, SOP", sasaran: "Pemerintah Desa, BPD, Forum Destana", waktu: "1 tahun sekali" },
  { bidang: "Logistik", fungsi: "Menyiapkan & mengelola kebutuhan logistik", kegiatan: "Pengadaan, penyimpanan, pendataan, distribusi logistik darurat", sasaran: "Warga terdampak & relawan", waktu: "Sebelum & saat bencana" },
  { bidang: "Data & Informasi", fungsi: "Mengelola data kebencanaan & menyebarkan informasi", kegiatan: "Pendataan wilayah rawan, kelompok rentan, jalur evakuasi", sasaran: "Pemerintah desa, relawan, masyarakat", waktu: "Pra bencana, diperbarui berkala" },
  { bidang: "Pencegahan & Kesiapsiagaan", fungsi: "Meningkatkan kesiapan masyarakat", kegiatan: "Gotong royong, penghijauan, pemantauan daerah rawan, simulasi", sasaran: "Seluruh warga Desa Medari", waktu: "4 bulan sekali" },
  { bidang: "Tanggap Darurat", fungsi: "Mengkoordinasikan penanganan darurat", kegiatan: "Aktivasi posko, evakuasi, P3, reaksi cepat, koordinasi BPBD", sasaran: "Korban & petugas tanggap darurat", waktu: "Saat terjadi bencana" },
  { bidang: "Rehabilitasi & Rekonstruksi", fungsi: "Mendukung pemulihan pasca bencana", kegiatan: "Pembersihan lingkungan, perbaikan fasilitas, trauma healing", sasaran: "Masyarakat terdampak", waktu: "Setelah bencana hingga pulih" },
];

const JEJARING = [
  {
    kegiatan: "Pelatihan Sosialisasi & Pelatihan Kebencanaan",
    pihak: "PKK, Karang Taruna, Linmas, Kelompok Tani, Bumdes, PKD, Babinsa, Perangkat Desa",
    output: "Peserta mampu memberikan edukasi & sosialisasi kebencanaan kepada masyarakat",
    jejaring: "BPBD Kabupaten Temanggung",
  },
  {
    kegiatan: "Penyusunan SOP & Struktur Organisasi FPRB",
    pihak: "Pengurus FPRB/Destana Desa Medari",
    output: "Tersusunnya SOP, struktur organisasi & pembagian tugas yang jelas",
    jejaring: "BPBD Kabupaten Temanggung",
  },
  {
    kegiatan: "Simulasi Tanggap Darurat Bencana",
    pihak: "FPRB, Linmas, Babinsa, PKD, Karang Taruna, Masyarakat",
    output: "Masyarakat memahami prosedur evakuasi, P3, dan koordinasi saat bencana",
    jejaring: "BPBD Kabupaten Temanggung, Puskesmas Ngadirejo",
  },
  {
    kegiatan: "Kerja Sama dengan Perguruan Tinggi",
    pihak: "Pengurus FPRB & Pemerintah Desa",
    output: "Pendampingan, penelitian, pengabdian masyarakat, pelatihan kebencanaan",
    jejaring: "UNNES",
  },
  {
    kegiatan: "Koordinasi Instansi Penanggulangan Bencana",
    pihak: "Pemerintah Desa & Pengurus FPRB",
    output: "Koordinasi kesiapsiagaan, tanggap darurat, dan pemulihan bencana",
    jejaring: "BPBD, TNI, POLRI, Puskesmas",
  },
  {
    kegiatan: "Kemitraan Dunia Usaha/CSR",
    pihak: "Pemerintah Desa, BUMDES, FPRB",
    output: "Dukungan sarana, logistik, dan pembiayaan kegiatan PRB",
    jejaring: "Mitra/instansi dunia usaha",
  },
];

export default function FprbPage() {
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
      <section className="bg-gradient-to-r from-primary/10 to-sidebar-primary/10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-4">
              Forum PRB MEDANA
            </h1>
            <p className="font-body text-xl text-foreground max-w-2xl">
              Forum Pengurangan Risiko Bencana —{" "}
              <strong>Medari Tangguh Bencana</strong>. Siaga bersama, Medari
              tangguh selamanya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statuta */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Statuta Forum
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Dasar pembentukan, nama, visi-misi, dan nilai forum
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 md:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <Flag className="text-primary" size={20} />
                <h3 className="font-semibold-display text-lg text-primary">Alasan Pembentukan</h3>
              </div>
              <p className="font-body text-foreground leading-relaxed">{STATUTA.alasan}</p>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold-display text-sm text-muted-foreground mb-1">Nama Forum</h3>
              <p className="font-display text-2xl font-bold text-primary mb-3">{STATUTA.nama}</p>
              <h3 className="font-semibold-display text-sm text-muted-foreground mb-1">Semboyan</h3>
              <p className="font-display text-lg text-sidebar-primary">"{STATUTA.semboyan}"</p>
              <div className="flex items-start gap-2 mt-4">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={16} />
                <p className="font-body text-sm text-foreground">{STATUTA.alamat}</p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Target className="text-primary" size={20} />
                <h3 className="font-semibold-display text-lg text-primary">Visi</h3>
              </div>
              <p className="font-body text-foreground leading-relaxed mb-5">{STATUTA.visi}</p>
              <div className="flex items-center gap-2 mb-3">
                <Target className="text-sidebar-primary" size={20} />
                <h3 className="font-semibold-display text-lg text-sidebar-primary">Misi</h3>
              </div>
              <ul className="space-y-2">
                {STATUTA.misi.map((m, i) => (
                  <li key={i} className="flex gap-2 font-body text-sm text-foreground">
                    <span className="text-primary font-bold">{i + 1}.</span> {m}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="text-primary" size={20} />
                <h3 className="font-semibold-display text-lg text-primary">Fungsi Forum</h3>
              </div>
              <ul className="space-y-2">
                {STATUTA.fungsi.map((f, i) => (
                  <li key={i} className="flex gap-2 font-body text-sm text-foreground">
                    <span className="text-primary">•</span> {f}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="text-sidebar-primary" size={20} />
                <h3 className="font-semibold-display text-lg text-sidebar-primary">Nilai yang Diusung</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {STATUTA.nilai.map((n, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold-display">
                    {n}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-3 mt-6">
                <Users className="text-primary" size={20} />
                <h3 className="font-semibold-display text-lg text-primary">Anggota Forum</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {STATUTA.anggota.map((a, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-muted text-foreground text-xs font-body">
                    {a}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Wallet className="text-accent" size={20} />
                <h3 className="font-semibold-display text-lg text-accent">Sumber & Penggunaan Dana</h3>
              </div>
              <p className="font-body text-sm text-foreground leading-relaxed mb-2">
                <strong>Sumber:</strong> APBDes
              </p>
              <p className="font-body text-sm text-foreground leading-relaxed mb-2">
                <strong>Penggunaan:</strong> Kepelatihan & sumber kebencanaan, alat siaga darurat (HT, Tandu, P3K), sosialisasi, operasional forum, logistik darurat.
              </p>
              <p className="font-body text-sm text-foreground leading-relaxed">
                <strong>Pertanggungjawaban:</strong> Laporan keuangan transparan disampaikan kepada pemerintah desa dan dipublikasikan melalui papan informasi Balai Desa.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Struktur Pengurus */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Struktur Pengurus FPRB
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Susunan pengurus forum MEDANA Desa Medari
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {PENGURUS_JABATAN.map((p, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-5 h-full">
                  <p className="font-semibold-display text-sm text-primary mb-2">{p.jabatan}</p>
                  <ul className="space-y-1">
                    {p.orang.map((o, i) => (
                      <li key={i} className="font-body text-foreground">{o}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-4 text-center">
              Koordinator Bidang & Anggota
            </h3>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="text-left p-3 font-semibold-display">Bidang</th>
                      <th className="text-left p-3 font-semibold-display">Koordinator</th>
                      <th className="text-left p-3 font-semibold-display">Anggota</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PENGURUS_BIDANG.map((b, i) => (
                      <tr key={i} className="border-t border-border hover:bg-muted/50">
                        <td className="p-3 font-semibold-display text-foreground">{b.bidang}</td>
                        <td className="p-3 font-body">{b.koordinator}</td>
                        <td className="p-3 font-body text-muted-foreground">{b.anggota}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Rencana Kegiatan */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Rencana Kegiatan FPRB
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Bidang, fungsi, kegiatan, sasaran, dan waktu pelaksanaan
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {KEGIATAN_BIDANG.map((k, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold-display text-lg text-primary mb-2">{k.bidang}</h3>
                  <p className="font-body text-sm text-muted-foreground italic mb-3">{k.fungsi}</p>
                  <p className="font-body text-sm text-foreground mb-2">{k.kegiatan}</p>
                  <p className="font-body text-xs text-muted-foreground">
                    <strong>Sasaran:</strong> {k.sasaran}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    <strong>Waktu:</strong> {k.waktu}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Jejaring */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Penguatan Kelembagaan & Jejaring
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Kegiatan, pihak pelaksana, output, dan jejaring luar desa
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {JEJARING.map((j, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-6 h-full border-l-4 border-sidebar-primary">
                  <div className="flex items-center gap-2 mb-2">
                    <Network className="text-sidebar-primary" size={18} />
                    <h3 className="font-semibold-display text-base text-foreground">{j.kegiatan}</h3>
                  </div>
                  <p className="font-body text-sm text-foreground mb-2">
                    <strong>Pihak:</strong> {j.pihak}
                  </p>
                  <p className="font-body text-sm text-foreground mb-2">
                    <strong>Output:</strong> {j.output}
                  </p>
                  <p className="font-body text-xs text-primary font-semibold">
                    Jejaring: {j.jejaring}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}