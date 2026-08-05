import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import {
  Award,
  ClipboardCheck,
  FileText,
  Users,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { PKD, THREAT_UTAMA } from "@/data/giat";

const REKOMENDASI = [
  {
    komponen: "Layanan Dasar",
    indeks: "0.87",
    tindakan: [
      "Kerjasama dengan dinas/lembaga untuk layanan pendidikan, kesehatan, air bersih, & pangan-gizi.",
      "Penguatan layanan UMKM/BUMDes, komunikasi, administrasi, & perlindungan lingkungan.",
      "Usul layanan keagamaan & layanan khusus difabel melalui Musrenbang.",
    ],
  },
  {
    komponen: "Peraturan & Kebijakan PB",
    indeks: "0.52",
    tindakan: [
      "Usul pengkajian risiko bencana & kelembagaan PB desa melalui Musrenbang.",
      "Kerjasama penyusunan Rencana Penanggulangan Bencana & pelatihan PB.",
      "Usul SOP kerjasama dengan pihak luar dalam penanggulangan bencana.",
    ],
  },
  {
    komponen: "Pencegahan & Mitigasi",
    indeks: "0.47",
    tindakan: [
      "Usul program mitigasi bencana & sosialisasi pengetahuan kebencanaan.",
      "Penguatan kegiatan pencegahan bencana secara berkala.",
    ],
  },
  {
    komponen: "Kesiapsiagaan Darurat",
    indeks: "0.60",
    tindakan: [
      "Kembangkan sistem peringatan bahaya yang efektif.",
      "Kerjasama pengembangan rencana & jalur evakuasi.",
      "Rencanakan & tetapkan tempat pengungsian bersama BPBD.",
      "Lakukan simulasi/uji kesiapsiagaan secara rutin.",
    ],
  },
  {
    komponen: "Kesiapsiagaan Pemulihan",
    indeks: "0.40",
    tindakan: [
      "Usul mekanisme penilaian pasca bencana & pemulihan dini mandiri via anggaran desa.",
      "Usul mekanisme pengelolaan bantuan yang transparan & akuntabel.",
      "Kerjasama pembangunan kembali yang lebih kuat & aman pasca bencana.",
    ],
  },
];

const chartData = PKD.komponen.map((k) => ({
  name: k.name,
  Indeks: Number((k.persen / 100).toFixed(2)),
  fill: k.persen >= 60 ? "#2D7A3E" : k.persen >= 50 ? "#0066CC" : "#FF6B35",
}));

const radarData = PKD.komponen.map((k) => ({
  komponen: k.name.length > 22 ? k.name.slice(0, 20) + "…" : k.name,
  Indeks: Number((k.persen / 100).toFixed(2)),
}));

export default function PkdPage() {
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
              Penilaian Ketangguhan Desa
            </h1>
            <p className="font-body text-xl text-foreground max-w-2xl">
              Hasil PKD Desa Medari Tahun 2026 untuk jenis bencana{" "}
              <strong>{THREAT_UTAMA}</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hasil Utama */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Hasil Penilaian
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Kriteria: Tangguh Bencana Utama ≥ 83,33 | Madya 58,33–83,33 |
              Pratama &lt; 58,33
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 text-center bg-primary/5 border-primary/20">
              <Award className="mx-auto text-primary mb-3" size={40} />
              <p className="font-body text-sm text-muted-foreground mb-1">
                Tingkat Ketangguhan
              </p>
              <p className="font-display text-3xl font-bold text-primary mb-1">
                {PKD.tingkat}
              </p>
            </Card>
            <Card className="p-8 text-center bg-sidebar-primary/5 border-sidebar-primary/20">
              <TrendingUp className="mx-auto text-sidebar-primary mb-3" size={40} />
              <p className="font-body text-sm text-muted-foreground mb-1">
                Indeks Ketangguhan
              </p>
              <p className="font-display text-5xl font-bold text-sidebar-primary mb-1">
                {PKD.indeks}
              </p>
            </Card>
            <Card className="p-8 text-center bg-accent/5 border-accent/20">
              <ShieldCheck className="mx-auto text-accent mb-3" size={40} />
              <p className="font-body text-sm text-muted-foreground mb-1">
                Jenis Bencana
              </p>
              <p className="font-display text-base font-bold text-accent mb-1 leading-tight">
                {THREAT_UTAMA}
              </p>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold-display text-lg mb-4 text-center">
                Indeks per Komponen
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 10 }}
                      interval={0}
                      angle={-15}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis domain={[0, 1]} tick={{ fontSize: 11 }} />
                    <Tooltip
                      formatter={(v: number) => [v.toFixed(2), "Indeks"]}
                      contentStyle={{ fontSize: 12, borderRadius: 8 }}
                    />
                    <Bar dataKey="Indeks" radius={[6, 6, 0, 0]}>
                      {chartData.map((entry, i) => (
                        <Cell key={i} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold-display text-lg mb-4 text-center">
                Radar Ketangguhan
              </h3>
              <div className="h-80 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} outerRadius="75%">
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="komponen" tick={{ fontSize: 10 }} />
                    <PolarRadiusAxis domain={[0, 1]} tick={{ fontSize: 9 }} angle={30} />
                    <Radar
                      name="Indeks"
                      dataKey="Indeks"
                      stroke="#FF6B35"
                      fill="#FF6B35"
                      fillOpacity={0.4}
                    />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
          <p className="font-body text-xs text-muted-foreground mt-3 text-center">
            Indeks Komponen: {PKD.komponen.map((k) => `${k.name} ${k.persen}%`).join(" · ")}
          </p>
        </div>
      </section>

      {/* Komponen table */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
            Rincian Indeks Komponen
          </h2>
          <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Lima komponen penilaian ketangguhan masing-masing berbobot 20%
          </p>

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
                      <th className="text-left p-3 font-semibold-display">Komponen</th>
                      <th className="text-center p-3 font-semibold-display">Indeks Komponen</th>
                      <th className="text-center p-3 font-semibold-display">Persen</th>
                      <th className="text-center p-3 font-semibold-display">Bobot</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PKD.komponen.map((k, i) => (
                      <tr key={i} className="border-t border-border hover:bg-muted/50">
                        <td className="p-3 text-muted-foreground">{i + 1}</td>
                        <td className="p-3 font-body text-foreground">{k.name}</td>
                        <td className="p-3 text-center font-body">{k.indeks.toFixed(4)}</td>
                        <td className="p-3 text-center font-display font-bold text-primary">
                          {k.persen}%
                        </td>
                        <td className="p-3 text-center">{k.bobot}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Rekomendasi Aksi */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
            Rekomendasi Kerangka Aksi
          </h2>
          <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Rekomendasi peningkatan ketangguhan per komponen
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {REKOMENDASI.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full border-l-4 border-primary">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold-display text-lg text-primary">
                      {r.komponen}
                    </h3>
                    <span className="font-display text-xl font-bold text-sidebar-primary bg-sidebar-primary/10 px-3 py-1 rounded-md">
                      {r.indeks}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {r.tindakan.map((t, j) => (
                      <li key={j} className="flex gap-2 font-body text-sm text-foreground">
                        <ClipboardCheck className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Berita Acara FGD */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
            Berita Acara FGD PKD
          </h2>
          <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Focus Group Discussion Penilaian Ketangguhan Bencana Desa Medari
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="text-primary" size={20} />
                <h3 className="font-semibold-display text-lg text-primary">
                  Berita Acara
                </h3>
              </div>
              <p className="font-body text-foreground leading-relaxed mb-3">
                <strong>Nomor:</strong> {PKD.fgd.nomor}
              </p>
              <p className="font-body text-foreground leading-relaxed mb-3">
                Pada hari ini, <strong>{PKD.fgd.tanggal}</strong>, bertempat di{" "}
                <strong>{PKD.fgd.tempat}</strong>, Kecamatan Ngadirejo, Kabupaten
                Temanggung, telah dilaksanakan Focus Group Discussion (FGD)
                Penilaian Ketangguhan Bencana Desa Medari.
              </p>
              <p className="font-body text-foreground leading-relaxed mb-3">
                <strong>Peserta:</strong> {PKD.fgd.peserta}.
              </p>
              <p className="font-body text-foreground leading-relaxed">
                FGD dilaksanakan sebagai bagian dari proses PKD melalui diskusi
                partisipatif dengan mengkaji kondisi nyata desa berdasarkan
                indikator penilaian: layanan dasar, kebijakan penanggulangan
                bencana, pencegahan & mitigasi, kesiapsiagaan darurat, serta
                kesiapsiagaan pemulihan.
              </p>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 bg-primary/5 border-primary/20 text-center">
                <Users className="mx-auto text-primary mb-2" size={28} />
                <p className="font-body text-sm text-muted-foreground">Kepala Desa Medari</p>
                <p className="font-semibold-display text-lg text-primary mt-1">
                  {PKD.fgd.kepalaDesa}
                </p>
              </Card>
              <Card className="p-6 bg-sidebar-primary/5 border-sidebar-primary/20 text-center">
                <Users className="mx-auto text-sidebar-primary mb-2" size={28} />
                <p className="font-body text-sm text-muted-foreground">
                  Koordinator Giat 16 Desa Medari
                </p>
                <p className="font-semibold-display text-lg text-sidebar-primary mt-1">
                  {PKD.fgd.koordinator}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}