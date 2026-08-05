import { Card } from "@/components/ui/card";
import {
  Users,
  HardHat,
  Utensils,
  Package,
  Stethoscope,
  ShieldCheck,
  Zap,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";

const PENGGURUS = [
  { jabatan: "Pembina", orang: ["BPBD Kabupaten Temanggung", "Puskesmas Banjarsari"] },
  { jabatan: "Pelindung", orang: ["Kepala Desa Medari", "Ketua BPD Desa Medari"] },
  { jabatan: "Pendamping", orang: ["Bhabinkamtibmas Desa Medari", "Babinsa Desa Medari", "Kasi Trantib Kecamatan Ngadirejo", "Bidan Desa Medari"] },
  { jabatan: "Ketua Tim Relawan", orang: ["Muhamad Nurwakhid"] },
];

const TIM_REAKSI_CEPAT = [
  "Muhrim", "Sakroni", "Mafthuchah", "Purnomo Nugroho",
  "Jauri", "Hendri Erfanto", "Slamet Juwari",
];

const BIDANG = [
  {
    nama: "Bidang SAR (Pencarian & Penyelamatan)",
    icon: HardHat,
    koordinator: "Tafrichan Ichsani",
    anggota: "Suwarno",
    tugas: [
      "Melakukan pencarian, penyelamatan, dan evakuasi korban bencana.",
      "Mengevakuasi kelompok rentan.",
      "Membuka akses menuju lokasi terdampak.",
      "Koordinasi dengan tim kesehatan dan logistik.",
    ],
  },
  {
    nama: "Bidang Dapur Umum",
    icon: Utensils,
    koordinator: "Riyanti",
    anggota: "Riski Arif Afriza Darman",
    tugas: [
      "Menyiapkan bahan makanan dan peralatan masak.",
      "Memasak serta membagikan makanan kepada pengungsi dan relawan.",
      "Mengolah kebutuhan konsumsi harian di posko pengungsian.",
    ],
  },
  {
    nama: "Bidang Logistik dan Peralatan",
    icon: Package,
    koordinator: "Susilan",
    anggota: "Indah Kurniawati",
    tugas: [
      "Inventarisasi bantuan yang masuk dan keluar.",
      "Mengelola bidang logistik.",
      "Menyalurkan bantuan sesuai kebutuhan korban.",
      "Menyiapkan perlengkapan evakuasi dan peralatan darurat.",
    ],
  },
  {
    nama: "Bidang Kesehatan",
    icon: Stethoscope,
    koordinator: "Mardiyanti Dwi Ariyani",
    anggota: "Reni Rahmawati",
    tugas: [
      "Memberikan pertolongan pertama kepada korban.",
      "Melakukan pemeriksaan di posko.",
      "Melakukan edukasi PHBS di pengungsian.",
      "Koordinasi dengan puskesmas untuk penanganan lanjutan.",
    ],
  },
  {
    nama: "Bidang Keamanan",
    icon: ShieldCheck,
    koordinator: "Wahyudi",
    anggota: "Miszaeni",
    tugas: [
      "Menjaga keamanan posko dan pengungsian.",
      "Mengatur lalu lintas dan akses menuju bencana.",
      "Mengamankan aset rumah warga yang ditinggalkan saat mengungsi.",
    ],
  },
];

const ANGGOTA = [
  { nama: "Muhamad Nurwakhid", rt: "02", lahir: "1 Mei 1987", pekerjaan: "Perangkat Desa" },
  { nama: "Muhrim", rt: "02", lahir: "10 Juni 1972", pekerjaan: "Perangkat Desa" },
  { nama: "Sakroni", rt: "—", lahir: "—", pekerjaan: "—", kebutuhan: true },
  { nama: "Mafthuchah", rt: "02", lahir: "20 Agustus 1993", pekerjaan: "Ibu Rumah Tangga" },
  { nama: "Purnomo Nugroho", rt: "—", lahir: "—", pekerjaan: "—", kebutuhan: true },
  { nama: "Jauri", rt: "01", lahir: "12 Agustus 1968", pekerjaan: "Perangkat Desa" },
  { nama: "Hendri Erfanto", rt: "03", lahir: "26 Mei 1987", pekerjaan: "Perangkat Desa" },
  { nama: "Slamet Juwari", rt: "05", lahir: "13 Januari 1969", pekerjaan: "Perangkat Desa" },
  { nama: "Tafrichan Ichsani", rt: "05", lahir: "9 Februari 1990", pekerjaan: "—", kebutuhan: true },
  { nama: "Suwarno", rt: "01", lahir: "2 September 1974", pekerjaan: "Petani" },
  { nama: "Riyanti", rt: "01", lahir: "27 Desember 1989", pekerjaan: "—" },
  { nama: "Riski Arif Afriza Darman", rt: "02", lahir: "11 April 2001", pekerjaan: "Wiraswasta" },
  { nama: "Susilan", rt: "04", lahir: "04 April 1973", pekerjaan: "Perangkat Desa" },
  { nama: "Indah Kurniawati", rt: "02", lahir: "08 September 1990", pekerjaan: "—" },
  { nama: "Mardiyanti Dwi Ariyani", rt: "03", lahir: "—", pekerjaan: "—", kebutuhan: true },
  { nama: "Reni Rahmawati", rt: "03", lahir: "—", pekerjaan: "—" },
  { nama: "Wahyudi", rt: "03", lahir: "07 Desember 1958", pekerjaan: "—" },
  { nama: "Miszaeni", rt: "03", lahir: "—", pekerjaan: "—" },
];

const PENGUATAN = [
  {
    kegiatan: "Latihan dasar relawan kebencanaan (evakuasi, P3, komunikasi darurat)",
    pihak: "Tim relawan, Linmas, Karang Taruna, PKD, Babinsa, PKK",
    output: "Relawan memiliki keterampilan dasar penanggulangan bencana",
    jejaring: "BPBD Kabupaten Temanggung, Puskesmas Ngadirejo",
  },
  {
    kegiatan: "Simulasi gabungan lintas bidang (SAR, Kesehatan, Logistik, Dapur Umum, Komunikasi)",
    pihak: "Seluruh tim relawan desa",
    output: "Relawan mampu bekerja sama dan berkoordinasi saat penanganan bencana",
    jejaring: "BPBD, Koramil, Polsek",
  },
  {
    kegiatan: "Pendataan dan pemetaan kemampuan relawan",
    pihak: "Koordinator tim relawan, pemerintah desa",
    output: "Data potensi, keahlian, dan jumlah relawan terdokumentasi",
    jejaring: "BPBD Kabupaten Temanggung",
  },
  {
    kegiatan: "Kemitraan dengan dunia usaha dan perguruan tinggi",
    pihak: "Pemerintah desa, BumDes, tim relawan",
    output: "Dukungan pelatihan, logistik, dan pendampingan kegiatan kebencanaan",
    jejaring: "UNNES, Forum PRB Kabupaten Temanggung",
  },
];

export default function RelawanPage() {
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
              Tim Relawan Desa Medari
            </h1>
            <p className="font-body text-xl text-foreground max-w-2xl">
              Tim relawan kebencanaan yang dibentuk untuk pencegahan,
              kesiapsiagaan, dan penanganan awal saat terjadi bencana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pengurus */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Struktur Tim Relawan
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Pembina, pelindung, pendamping, dan ketua tim relawan
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {PENGGURUS.map((p, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-5 h-full">
                  <p className="font-semibold-display text-sm text-primary mb-2">{p.jabatan}</p>
                  <ul className="space-y-1">
                    {p.orang.map((o, i) => (
                      <li key={i} className="font-body text-foreground text-sm">{o}</li>
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
            className="mt-6"
          >
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-primary" size={22} />
                <h3 className="font-semibold-display text-lg text-primary">Tim Reaksi Cepat</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {TIM_REAKSI_CEPAT.map((n, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-white border border-primary/30 text-foreground text-sm font-body">
                    {n}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Pembagian Tugas per Bidang */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Pembagian Tugas per Bidang
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Lima bidang tugas tim relawan Desa Medari
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {BIDANG.map((b, idx) => {
              const Icon = b.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold-display text-lg">{b.nama}</h3>
                        <p className="font-body text-sm text-primary font-semibold">
                          Koor: {b.koordinator}
                        </p>
                      </div>
                    </div>
                    <p className="font-body text-xs text-muted-foreground mb-3">
                      Anggota: {b.anggota}
                    </p>
                    <ul className="space-y-2">
                      {b.tugas.map((t, i) => (
                        <li key={i} className="flex gap-2 font-body text-sm text-foreground">
                          <span className="text-primary">•</span> {t}
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

      {/* Daftar Anggota */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Daftar Anggota Tim Relawan
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {ANGGOTA.length} anggota tim relawan Desa Medari
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="text-left p-3 font-semibold-display">No</th>
                      <th className="text-left p-3 font-semibold-display">Nama</th>
                      <th className="text-center p-3 font-semibold-display">RT</th>
                      <th className="text-left p-3 font-semibold-display">Tanggal Lahir</th>
                      <th className="text-left p-3 font-semibold-display">Pekerjaan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ANGGOTA.map((a, i) => (
                      <tr key={i} className="border-t border-border hover:bg-muted/50">
                        <td className="p-3 text-muted-foreground">{i + 1}</td>
                        <td className="p-3 font-body text-foreground">{a.nama}</td>
                        <td className="p-3 text-center">{a.rt}</td>
                        <td className="p-3 font-body">{a.lahir || "—"}</td>
                        <td className="p-3 font-body text-muted-foreground">{a.pekerjaan || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Penguatan Kelembagaan */}
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
              Kegiatan penguatan kapasitas dan pengembangan jejaring tim relawan
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {PENGUATAN.map((p, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-6 h-full border-l-4 border-sidebar-primary">
                  <div className="flex items-center gap-2 mb-2">
                    <Network className="text-sidebar-primary" size={18} />
                    <h3 className="font-semibold-display text-base">{p.kegiatan}</h3>
                  </div>
                  <p className="font-body text-sm text-foreground mb-1">
                    <strong>Pihak:</strong> {p.pihak}
                  </p>
                  <p className="font-body text-sm text-foreground mb-1">
                    <strong>Output:</strong> {p.output}
                  </p>
                  <p className="font-body text-xs text-primary font-semibold">
                    Jejaring: {p.jejaring}
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