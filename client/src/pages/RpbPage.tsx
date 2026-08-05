import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Eye,
  Siren,
  Wrench,
  CheckCircle,
  Wallet,
  Users,
  Calendar,
} from "lucide-react";
import { THREAT_UTAMA } from "@/data/giat";

const FASES = [
  {
    fase: "Pra Bencana — Peningkatan Kapasitas",
    desc: "Pencegahan, mitigasi, dan peningkatan kapasitas masyarakat",
    icon: ShieldCheck,
    color: "text-primary",
    kegiatan: [
      {
        nama: "Sosialisasi Sistem Peringatan Dini Angin Kencang",
        tujuan: "Meningkatkan pengetahuan dan kesiapsiagaan masyarakat dalam memahami sumber informasi, tanda-tanda, mekanisme penyebaran peringatan dini, serta tindakan sebelum dan saat terjadi angin kencang.",
        pelaku: "Pemerintah Desa, BPBD, perangkat desa, RT/RW, FPRB & tim relawan, masyarakat",
        waktu: "Juli",
        biaya: "Rp 2.000.000",
        sumber: "Dana Desa/APBDes",
      },
      {
        nama: "Pembuatan & Pemasangan Papan Jalur Evakuasi",
        tujuan: "Memberikan petunjuk arah yang jelas menuju lokasi aman/titik kumpul apabila terjadi angin kencang yang membahayakan.",
        pelaku: "Pemerintah Desa, perangkat desa, RT/RW, FPRB & tim relawan, masyarakat",
        waktu: "Agustus",
        biaya: "Rp 3.000.000",
        sumber: "Dana Desa/APBDes",
      },
      {
        nama: "Pelatihan Penggunaan Alat Peringatan Dini (Kentongan, TOA, WhatsApp)",
        tujuan: "Meningkatkan kemampuan masyarakat menggunakan sistem peringatan dini agar informasi bencana tersampaikan cepat dan tepat.",
        pelaku: "BPBD, Pemerintah Desa, Relawan, Babinsa/Bhabinkamtibmas, Masyarakat",
        waktu: "Setiap bulan 1 kali",
        biaya: "Rp 3.000.000",
        sumber: "Dana Desa/APBDes, Swadaya",
      },
      {
        nama: "Pembentukan Tim Relawan Kebencanaan Desa",
        tujuan: "Membentuk tim relawan yang siap melakukan pencegahan, kesiapsiagaan, dan penanganan awal saat bencana.",
        pelaku: "Pemerintah Desa, BPBD, Karang Taruna, Linmas, Tokoh Masyarakat",
        waktu: "Juli",
        biaya: "Rp 2.500.000",
        sumber: "Dana Desa, APBDes, Swadaya",
      },
      {
        nama: "Simulasi Evakuasi Angin Kencang untuk Masyarakat & Sekolah",
        tujuan: "Meningkatkan kesiapsiagaan masyarakat & warga sekolah dalam evakuasi cepat, aman, dan terkoordinasi.",
        pelaku: "BPBD, Pemerintah Desa, Pihak Sekolah, Relawan, Babinsa/Bhabinkamtibmas, Guru, Siswa, Masyarakat",
        waktu: "Juli",
        biaya: "Rp 5.000.000",
        sumber: "Dana Desa, APBDes, BOS, Swadaya",
      },
    ],
  },
  {
    fase: "Pra Bencana — Kesiapsiagaan",
    desc: "Tahap kesiapsiagaan saat terdapat potensi bencana",
    icon: Eye,
    color: "text-sidebar-primary",
    kegiatan: [
      {
        nama: "Pendataan Rumah & Fasilitas Umum Rawan Angin Kencang",
        tujuan: "Mengidentifikasi rumah dan fasilitas umum yang rentan dampak angin kencang sebagai dasar prioritas penanganan.",
        pelaku: "Pemerintah Desa, perangkat desa, RT/RW, FPRB & tim relawan, masyarakat",
        waktu: "Juli",
        biaya: "Rp 1.500.000",
        sumber: "Dana Desa/APBDes",
      },
      {
        nama: "Pemetaan Jalur Evakuasi & Titik Kumpul",
        tujuan: "Menentukan jalur evakuasi dan titik kumpul yang aman, mudah diakses, dan diketahui masyarakat.",
        pelaku: "Pemerintah Desa, perangkat desa, RT/RW, FPRB & tim relawan, masyarakat",
        waktu: "Juli",
        biaya: "Rp 2.000.000",
        sumber: "Dana Desa/APBDes",
      },
      {
        nama: "Workshop Edukasi Struktural Rumah Tahan Angin",
        tujuan: "Meningkatkan pengetahuan masyarakat memperkuat struktur rumah & bagian bangunan rentan angin kencang.",
        pelaku: "Pemerintah Desa, BPBD, tenaga ahli/praktisi konstruksi, perangkat desa, masyarakat",
        waktu: "Juli",
        biaya: "Rp 3.000.000",
        sumber: "Dana Desa/APBDes",
      },
      {
        nama: "Simulasi Evakuasi Warga & Sekolah",
        tujuan: "Warga & warga sekolah mampu merespons peringatan dini serta evakuasi cepat, tertib, aman.",
        pelaku: "Pemerintah Desa, BPBD, pemerintah kecamatan, sekolah, guru, siswa, RT/RW, FPRB & tim relawan",
        waktu: "Juli",
        biaya: "Rp 4.000.000",
        sumber: "Dana Desa/APBDes",
      },
      {
        nama: "Pembentukan & Pelatihan Tim Siaga Bencana Desa",
        tujuan: "Membentuk & meningkatkan kapasitas tim untuk pemantauan, penyebarluasan peringatan, koordinasi, penanganan awal.",
        pelaku: "Pemerintah Desa, BPBD, perangkat desa, FPRB & tim relawan, tenaga kesehatan, RT/RW, masyarakat",
        waktu: "Juli",
        biaya: "Rp 5.000.000",
        sumber: "Dana Desa/APBDes",
      },
    ],
  },
  {
    fase: "Tanggap Darurat",
    desc: "Penanganan saat terjadi bencana",
    icon: Siren,
    color: "text-primary",
    kegiatan: [
      {
        nama: "Menghidupkan EWS & Pengeras Suara",
        tujuan: "Memberikan peringatan dini kepada masyarakat agar segera melakukan tindakan penyelamatan.",
        pelaku: "BPBD, Pemerintah Desa, Relawan, Linmas",
        waktu: "5 menit",
        biaya: "—",
        sumber: "—",
      },
      {
        nama: "Melakukan Evakuasi",
        tujuan: "Menyelamatkan masyarakat dari lokasi terdampak ke tempat yang aman.",
        pelaku: "BPBD, Basarnas, TNI/Polri, Relawan, Pemerintah Desa",
        waktu: "15–30 menit",
        biaya: "—",
        sumber: "—",
      },
      {
        nama: "Mengaktifkan Pos Pengungsian",
        tujuan: "Menyediakan tempat pengungsian aman serta memenuhi kebutuhan dasar pengungsi.",
        pelaku: "BPBD, Pemerintah Desa, Dinas Sosial, PMI, Relawan",
        waktu: "1 jam",
        biaya: "Rp 10.000.000",
        sumber: "APBD darurat desa, Dana Siap Pakai",
      },
      {
        nama: "Melakukan Kajian Kerugian",
        tujuan: "Mengidentifikasi tingkat kerusakan, korban, dan kerugian sebagai dasar penanganan lanjutan.",
        pelaku: "BPBD, Pemerintah Desa, Bapperida, Relawan",
        waktu: "24 jam",
        biaya: "—",
        sumber: "—",
      },
      {
        nama: "Mengelola Logistik Pengungsian",
        tujuan: "Memastikan kebutuhan dasar pengungsi (makanan, air, obat, selimut, perlengkapan darurat) tersedia & terdistribusi tepat sasaran.",
        pelaku: "BPBD, Dinas Sosial, Pemerintah Desa, Relawan, PMI, Tagana, Tim Logistik",
        waktu: "24 jam",
        biaya: "Rp 15.000.000",
        sumber: "APBDes, Dana Siap Pakai",
      },
    ],
  },
  {
    fase: "Pasca Bencana",
    desc: "Pemulihan setelah bencana",
    icon: Wrench,
    color: "text-accent",
    kegiatan: [
      {
        nama: "Pendataan Kerusakan Rumah Warga & Fasilitas Umum",
        tujuan: "Mengidentifikasi tingkat kerusakan & kerugian sebagai dasar penyaluran bantuan & rehabilitasi.",
        pelaku: "Pemerintah Desa, FPRB & Relawan, RT/RW",
        waktu: "Hari ke-1",
        biaya: "Rp 300.000",
        sumber: "APBDes, Dana Desa",
      },
      {
        nama: "Pembersihan Ranting & Pu" + "ing Kecil di Jalan",
        tujuan: "Memulihkan akses jalan agar aktivitas masyarakat kembali normal & mengurangi potensi bahaya lanjutan.",
        pelaku: "Pemerintah Desa, FPRB & Relawan, Linmas, Seluruh masyarakat",
        waktu: "Hari ke-2",
        biaya: "Rp 750.000",
        sumber: "Dana Desa, APBDes, Swadaya",
      },
      {
        nama: "Gotong-Royong Perbaikan Ringan Rumah Warga",
        tujuan: "Membantu mempercepat pemulihan tempat tinggal warga terdampak melalui kerja sama masyarakat.",
        pelaku: "Pemerintah Desa, Seluruh masyarakat, FPRB & Relawan",
        waktu: "Hari ke-2 & 3",
        biaya: "Rp 1.000.000",
        sumber: "Dana Desa, Swadaya",
      },
      {
        nama: "Distribusi Logistik Darurat Ringan",
        tujuan: "Memenuhi kebutuhan dasar masyarakat terdampak selama pemulihan awal.",
        pelaku: "BPBD, Pemerintah Desa, FPRB & Relawan",
        waktu: "Hari ke-2",
        biaya: "Rp 1.200.000",
        sumber: "APBDes, Dana Desa",
      },
      {
        nama: "Monitoring Pasca Pulih Lingkungan",
        tujuan: "Memantau kondisi lingkungan & masyarakat setelah pemulihan untuk memastikan tidak ada dampak lanjutan.",
        pelaku: "Tim Siaga Bencana, Pemerintah Desa, FPRB & Relawan, RT/RW",
        waktu: "Hari ke-3 s/d ke-7",
        biaya: "Rp 350.000",
        sumber: "APBDes, Dana Desa, Swadaya",
      },
    ],
  },
];

export default function RpbPage() {
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
              Rencana Penanggulangan Bencana
            </h1>
            <p className="font-body text-xl text-foreground max-w-2xl">
              Rekap kegiatan per fase untuk ancaman{" "}
              <strong>{THREAT_UTAMA}</strong> di Desa Medari — dari peningkatan
              kapasitas hingga pemulihan pascabencana.
            </p>
          </motion.div>
        </div>
      </section>

      {FASES.map((fase, fIdx) => {
        const Icon = fase.icon;
        return (
          <section
            key={fIdx}
            className={fIdx % 2 === 0 ? "py-16 md:py-24 bg-white" : "py-16 md:py-24 bg-card"}
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className={fase.color} size={28} />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    {fase.fase}
                  </h2>
                </div>
                <p className="font-body text-muted-foreground ml-14">
                  {fase.desc}
                </p>
              </motion.div>

              <div className="space-y-6">
                {fase.kegiatan.map((k, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-sm">
                          {idx + 1}
                        </div>
                        <h3 className="font-semibold-display text-lg text-primary">
                          {k.nama}
                        </h3>
                      </div>

                      <p className="font-body text-foreground leading-relaxed mb-4 ml-11">
                        {k.tujuan}
                      </p>

                      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 ml-11 text-sm">
                        <div className="flex items-start gap-2">
                          <Users className="text-sidebar-primary flex-shrink-0 mt-0.5" size={16} />
                          <div>
                            <p className="text-xs text-muted-foreground">Pelaku</p>
                            <p className="font-body text-foreground">{k.pelaku}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Calendar className="text-accent flex-shrink-0 mt-0.5" size={16} />
                          <div>
                            <p className="text-xs text-muted-foreground">Waktu</p>
                            <p className="font-body text-foreground">{k.waktu}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Wallet className="text-primary flex-shrink-0 mt-0.5" size={16} />
                          <div>
                            <p className="text-xs text-muted-foreground">Biaya</p>
                            <p className="font-body text-foreground">{k.biaya}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                          <div>
                            <p className="text-xs text-muted-foreground">Sumber Biaya</p>
                            <p className="font-body text-foreground">{k.sumber}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}