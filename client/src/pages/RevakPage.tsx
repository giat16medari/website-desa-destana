import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  MapPin,
  Building2,
  Home,
  Users,
  AlertTriangle,
  CheckCircle,
  Church,
  School,
  Radio,
} from "lucide-react";
import { motion } from "framer-motion";
import { THREAT_UTAMA } from "@/data/giat";

// REVAK LK1 — Penduduk kawasan rawan per dusun (aggregated from per-RT data)
const PENDUDUK_RAWAN = [
  { dusun: "Medari", kk: 218, jiwa: 857, l: 308, p: 549, balita: 32, jompo: 67, bumil: 4, difabel: 1 },
  { dusun: "Sobahan", kk: 154, jiwa: 606, l: 317, p: 289, balita: 38, jompo: 51, bumil: 2, difabel: 5 },
  { dusun: "Kopen", kk: 123, jiwa: 390, l: 192, p: 198, balita: 20, jompo: 40, bumil: 0, difabel: 2 },
  { dusun: "Jiwan", kk: 147, jiwa: 405, l: 185, p: 220, balita: 22, jompo: 78, bumil: 0, difabel: 3 },
  { dusun: "Kauman", kk: 127, jiwa: 489, l: 245, p: 244, balita: 36, jompo: 2, bumil: 4, difabel: 0 },
  { dusun: "Bringinan", kk: 63, jiwa: 245, l: 93, p: 152, balita: 25, jompo: 39, bumil: 1, difabel: 2 },
  { dusun: "Mandi", kk: 71, jiwa: 200, l: 92, p: 108, balita: 17, jompo: 19, bumil: 1, difabel: 2 },
];

const TOTAL = PENDUDUK_RAWAN.reduce(
  (acc, d) => ({
    kk: acc.kk + d.kk,
    jiwa: acc.jiwa + d.jiwa,
    balita: acc.balita + d.balita,
    jompo: acc.jompo + d.jompo,
    bumil: acc.bumil + d.bumil,
    difabel: acc.difabel + d.difabel,
  }),
  { kk: 0, jiwa: 0, balita: 0, jompo: 0, bumil: 0, difabel: 0 }
);

// REVAK LK2 & LK4 — Tempat Evakuasi Sementara (TES) & Akhir (TEA)
const EVAKUASI = [
  {
    nama: "Balai Desa Medari",
    tipe: "Tempat Evakuasi Sementara (TES)",
    asal: "Seluruh dusun (titik kumpul utama)",
    jarak: "± 100 m",
    kapasitas: 150,
    fasilitas: "WC 1, listrik 900 VA, PDAM",
    icon: Building2,
  },
  {
    nama: "MI Muhammadiyah Al Falah Medari",
    tipe: "Tempat Evakuasi Akhir (TEA)",
    asal: "Dusun Medari (RT 01–03)",
    jarak: "250–350 m",
    kapasitas: 250,
    fasilitas: "WC 4, listrik 900 VA, PDAM",
    icon: School,
  },
  {
    nama: "Masjid Al-Huda 02/02",
    tipe: "Tempat Evakuasi Akhir (TEA)",
    asal: "Dusun Medari (RT 04–06)",
    jarak: "200–300 m",
    kapasitas: 100,
    fasilitas: "WC 2, listrik 1200 VA, PDAM",
    icon: Church,
  },
  {
    nama: "Masjid Bringinan 01/01",
    tipe: "Tempat Evakuasi Akhir (TEA)",
    asal: "Dusun Bringinan (RT 01–02)",
    jarak: "250 m",
    kapasitas: 100,
    fasilitas: "WC 2, sumur 1, listrik 900 VA, PDAM",
    icon: Church,
  },
  {
    nama: "Masjid Baiturrahim 01/06",
    tipe: "Tempat Evakuasi Akhir (TEA)",
    asal: "Dusun Jiwan (RT 01–05)",
    jarak: "100–200 m",
    kapasitas: 100,
    fasilitas: "WC 2, listrik 450 VA, PDAM",
    icon: Church,
  },
  {
    nama: "Masjid Baiturrahman 02/05",
    tipe: "Tempat Evakuasi Akhir (TEA)",
    asal: "Dusun Kopen (RT 01–02)",
    jarak: "150 m",
    kapasitas: 100,
    fasilitas: "WC 2, listrik 900 VA, PDAM",
    icon: Church,
  },
  {
    nama: "Mushola Mandi 02/04",
    tipe: "Tempat Evakuasi Akhir (TEA)",
    asal: "Dusun Mandi (RT 01–02)",
    jarak: "250 m",
    kapasitas: 50,
    fasilitas: "WC 2, listrik 900 VA, PDAM",
    icon: Church,
  },
  {
    nama: "Masjid Al-Kausar 02/03",
    tipe: "Tempat Evakuasi Akhir (TEA)",
    asal: "Dusun Sobahan (RT 01–03)",
    jarak: "350 m",
    kapasitas: 100,
    fasilitas: "WC 2, sumur 1, listrik 900 VA, PDAM, genset 1",
    icon: Church,
  },
  {
    nama: "Masjid Al-Ikhlas 04/03",
    tipe: "Tempat Evakuasi Akhir (TEA)",
    asal: "Dusun Sobahan (RT 04–06)",
    jarak: "100 m",
    kapasitas: 100,
    fasilitas: "WC 2, sumur 1, listrik 900 VA, PDAM",
    icon: Church,
  },
  {
    nama: "Masjid Jami' Wali Limbung 02/07",
    tipe: "Tempat Evakuasi Akhir (TEA)",
    asal: "Dusun Kauman (RT 01, 02, 05)",
    jarak: "100–250 m",
    kapasitas: 100,
    fasilitas: "WC 2, sumur 1, listrik 900 VA, PDAM, genset 1",
    icon: Church,
  },
];

const KAPASITAS_EVAKUASI = [
  { item: "Kentongan", jumlah: "± 5 unit", ket: "Tersebar di beberapa RT/RW" },
  { item: "Megaphone", jumlah: "± 14 unit", ket: "Untuk pengumuman evakuasi" },
  { item: "Speaker/TOA", jumlah: "± 14 unit", ket: "Terpasang di balai desa & masjid" },
  { item: "HT (Handy Talkie)", jumlah: "Terbatas", ket: "Perlu pengadaan tambahan" },
  { item: "Sepeda Motor", jumlah: "Banyak", ket: "Moda evakuasi utama warga" },
  { item: "Mobil/Truk", jumlah: "Sedikit", ket: "Untuk evakuasi kelompok rentan" },
];

export default function RevakPage() {
  const [openDusun, setOpenDusun] = useState<string | null>(null);

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
              Rencana Evakuasi
            </h1>
            <p className="font-body text-xl text-foreground max-w-2xl">
              Identifikasi penduduk kawasan rawan, tempat evakuasi, dan kapasitas
              pengungsian Desa Medari untuk ancaman{" "}
              <strong>{THREAT_UTAMA}</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Penduduk Kawasan Rawan */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Penduduk Kawasan Rawan
            </h2>
            <p className="font-body text-center text-muted-foreground mb-3 max-w-2xl mx-auto">
              Identifikasi jiwa, kelompok rentan (balita, jompo, ibu hamil,
              difabel) per dusun
            </p>
          </motion.div>

          {/* Total highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10"
          >
            {[
              { label: "Total KK", value: TOTAL.kk, icon: Home },
              { label: "Total Jiwa", value: TOTAL.jiwa, icon: Users },
              { label: "Balita", value: TOTAL.balita, icon: Users },
              { label: "Jompo", value: TOTAL.jompo, icon: Users },
              { label: "Ibu Hamil", value: TOTAL.bumil, icon: Users },
              { label: "Difabel", value: TOTAL.difabel, icon: Users },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <Card key={i} className="p-4 text-center">
                  <Icon className="mx-auto text-primary mb-1" size={18} />
                  <p className="font-display text-2xl font-bold text-primary">
                    {s.value}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {s.label}
                  </p>
                </Card>
              );
            })}
          </motion.div>

          {/* Per-dusun table */}
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
                      <th className="text-left p-3 font-semibold-display">Dusun</th>
                      <th className="text-center p-3 font-semibold-display">KK</th>
                      <th className="text-center p-3 font-semibold-display">Jiwa</th>
                      <th className="text-center p-3 font-semibold-display">L</th>
                      <th className="text-center p-3 font-semibold-display">P</th>
                      <th className="text-center p-3 font-semibold-display">Balita</th>
                      <th className="text-center p-3 font-semibold-display">Jompo</th>
                      <th className="text-center p-3 font-semibold-display">Bumil</th>
                      <th className="text-center p-3 font-semibold-display">Difabel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PENDUDUK_RAWAN.map((d) => (
                      <tr key={d.dusun} className="border-t border-border hover:bg-muted/50">
                        <td className="p-3 font-semibold-display text-foreground">{d.dusun}</td>
                        <td className="p-3 text-center">{d.kk}</td>
                        <td className="p-3 text-center font-semibold">{d.jiwa}</td>
                        <td className="p-3 text-center">{d.l}</td>
                        <td className="p-3 text-center">{d.p}</td>
                        <td className="p-3 text-center">{d.balita}</td>
                        <td className="p-3 text-center">{d.jompo}</td>
                        <td className="p-3 text-center">{d.bumil}</td>
                        <td className="p-3 text-center">{d.difabel}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-primary bg-primary/5">
                      <td className="p-3 font-semibold-display text-primary">Total Desa</td>
                      <td className="p-3 text-center font-bold text-primary">{TOTAL.kk}</td>
                      <td className="p-3 text-center font-bold text-primary">{TOTAL.jiwa}</td>
                      <td className="p-3 text-center font-bold text-primary">317</td>
                      <td className="p-3 text-center font-bold text-primary">351</td>
                      <td className="p-3 text-center font-bold text-primary">{TOTAL.balita}</td>
                      <td className="p-3 text-center font-bold text-primary">{TOTAL.jompo}</td>
                      <td className="p-3 text-center font-bold text-primary">{TOTAL.bumil}</td>
                      <td className="p-3 text-center font-bold text-primary">{TOTAL.difabel}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tempat Evakuasi */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Tempat Evakuasi Sementara & Akhir
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              TES: Balai Desa sebagai titik kumpul. TEA: lokasi pengungsian
              akhir per dusun.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {EVAKUASI.map((e, idx) => {
              const Icon = e.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Card
                    className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full"
                    onClick={() =>
                      setOpenDusun(openDusun === e.nama ? null : e.nama)
                    }
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold-display text-lg text-foreground">
                          {e.nama}
                        </h3>
                        <p className="font-body text-xs text-primary font-semibold mb-2">
                          {e.tipe}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                          <div>
                            <p className="text-muted-foreground text-xs">Asal Pengungsi</p>
                            <p className="font-body text-foreground">{e.asal}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-xs">Jarak</p>
                            <p className="font-body text-foreground">{e.jarak}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-xs">Daya Tampung</p>
                            <p className="font-display font-bold text-primary">{e.kapasitas} orang</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-xs">Daya Dukung</p>
                            <p className="font-body text-foreground text-xs">{e.fasilitas}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
          <p className="font-body text-xs text-muted-foreground mt-4 text-center">
            Klik kartu untuk detail. TES (Tempat Evakuasi Sementara) =
            titik kumpul sementara; TEA (Tempat Evakuasi Akhir) = lokasi
            pengungsian akhir.
          </p>
        </div>
      </section>

      {/* Kapasitas Evakuasi */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Kapasitas untuk Evakuasi
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Inventarisasi alat peringatan dan moda transportasi evakuasi
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {KAPASITAS_EVAKUASI.map((k, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Radio className="text-primary" size={20} />
                    <h3 className="font-semibold-display text-base">{k.item}</h3>
                  </div>
                  <p className="font-display text-2xl font-bold text-primary mb-1">
                    {k.jumlah}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">{k.ket}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Plang Jalur Evakuasi — placeholder */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Plang Jalur Evakuasi
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Tanda visual di sepanjang jalur evakuasi menuju titik kumpul
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-10 bg-muted/50 border-dashed border-2 border-border text-center">
              <MapPin className="mx-auto text-muted-foreground mb-4" size={48} />
              <p className="font-body text-foreground">
                Dokumentasi foto plang jalur evakuasi akan ditambahkan setelah
                pemasangan plang di lokasi-lokasi strategis Desa Medari.
              </p>
              <p className="font-body text-sm text-muted-foreground mt-2">
                Pemasangan plang merupakan agenda Rencana Penanggulangan
                Bencana yang direncanakan pada bulan Agustus.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 bg-primary/5 border-primary/20">
            <div className="flex gap-4 md:gap-6">
              <AlertTriangle className="text-primary flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold-display text-2xl text-primary mb-4">
                  Tips Penting
                </h3>
                <ul className="space-y-3 font-body text-foreground">
                  <li className="flex gap-2"><CheckCircle className="text-accent flex-shrink-0" size={18} /> Pelajari dan hafal jalur evakuasi serta TEA dusun Anda (jarak 100–350 m).</li>
                  <li className="flex gap-2"><CheckCircle className="text-accent flex-shrink-0" size={18} /> Ajarkan anak-anak tentang jalur evakuasi dan titik kumpul (TES: Balai Desa).</li>
                  <li className="flex gap-2"><CheckCircle className="text-accent flex-shrink-0" size={18} /> Utamakan evakuasi kelompok rentan (lansia, difabel, ibu hamil, balita).</li>
                  <li className="flex gap-2"><CheckCircle className="text-accent flex-shrink-0" size={18} /> Saat angin kencang, hindari pohon besar dan bangunan beratap seng.</li>
                  <li className="flex gap-2"><CheckCircle className="text-accent flex-shrink-0" size={18} /> Bantu tetangga yang membutuhkan saat melakukan evakuasi.</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}