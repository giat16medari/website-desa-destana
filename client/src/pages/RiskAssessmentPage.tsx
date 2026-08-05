import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Wind, TrendingUp, Activity } from "lucide-react";
import {
  THREAT_RANKING,
  THREAT_UTAMA,
  DUSUN_OPTIONS,
  RISK_TYPES,
} from "@/data/giat";

const KARAKTERISTIK = [
  { char: "Asal/Penyebab", val: "Terjadi saat cuaca tidak menentu, terutama musim hujan/pancaroba. Disertai hujan deras, petir, dan awan hitam tebal." },
  { char: "Faktor Perusak", val: "Tiupan angin sangat kencang merobohkan pohon, menerbangkan genteng seng, dan merusak pohon." },
  { char: "Tanda Peringatan", val: "Langit menjadi gelap, muncul awan hitam tebal, angin mulai bertiup semakin kencang." },
  { char: "Sela Waktu", val: "5–30 menit antara tanda peringatan dan datangnya ancaman." },
  { char: "Kecepatan Hadir", val: "Tinggi — datang tiba-tiba tanpa banyak tanda awal." },
  { char: "Perioda", val: "Pada pergantian musim (pancaroba)." },
  { char: "Frekuensi", val: "Sedang, terjadi beberapa kali dalam setahun." },
  { char: "Durasi", val: "5–30 menit." },
  { char: "Intensitas", val: "Sedang hingga tinggi." },
  { char: "Posisi", val: "Seluruh wilayah desa, terutama rumah dekat pohon besar, atap seng, dan lahan pertanian." },
];

const ASET_RISIKO = [
  {
    kategori: "Manusia",
    risiko: ["Cedera akibat tertimpa bangunan", "Luka karena pecahan kaca", "Tersengat listrik dari kabel putus", "Trauma/ketakutan pascabencana", "Kematian"],
  },
  {
    kategori: "Ekonomi/Finansial",
    risiko: ["Kehilangan penghasilan harian lahan", "Rusaknya warung", "Aset pertanian rusak", "Harta benda pribadi hilang/rusak"],
  },
  {
    kategori: "Fisik/Infrastruktur",
    risiko: ["Rumah roboh", "Listrik padam", "Sekolah rusak"],
  },
  {
    kategori: "Alam/Lingkungan",
    risiko: ["Pohon tumbang (seluruh pohon bambu di desa)", "Sampah/polusi pascabencana"],
  },
  {
    kategori: "Sosial/Politik",
    risiko: ["Gangguan koordinasi lembaga"],
  },
];

export default function RiskAssessmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    dusun: "",
    riskType: "",
    description: "",
    contact: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.dusun ||
      !formData.riskType ||
      !formData.description
    ) {
      toast.error("Mohon lengkapi semua field yang wajib diisi");
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      toast.success("Kajian risiko berhasil dikirim!");
      setTimeout(() => {
        setFormData({ name: "", dusun: "", riskType: "", description: "", contact: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      toast.error("Terjadi kesalahan saat mengirim formulir");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Kajian Risiko Bencana
            </h1>
            <p className="font-body text-xl text-foreground max-w-2xl">
              Jenis ancaman, pemeringkatan, dan penilaian risiko Desa Medari
              untuk ancaman utama <strong>{THREAT_UTAMA}</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pemeringkatan Ancaman */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-2 text-center">
              Pemeringkatan Ancaman
            </h2>
            <p className="font-body text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skor = Kemungkinan Terjadi × Perkiraan Dampak (skala 1–4)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="text-left p-4 font-semibold-display text-foreground">Ragam Ancaman</th>
                      <th className="text-center p-4 font-semibold-display text-foreground">Kemungkinan</th>
                      <th className="text-center p-4 font-semibold-display text-foreground">Dampak</th>
                      <th className="text-center p-4 font-semibold-display text-foreground">Total</th>
                      <th className="text-center p-4 font-semibold-display text-foreground">Tingkat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {THREAT_RANKING.map((t) => (
                      <tr key={t.name} className="border-t border-border hover:bg-muted/50">
                        <td className="p-4 font-body text-foreground flex items-center gap-2">
                          <Wind className="text-primary" size={16} />
                          {t.name}
                        </td>
                        <td className="p-4 text-center font-body">{t.kemungkinan}</td>
                        <td className="p-4 text-center font-body">{t.dampak}</td>
                        <td className="p-4 text-center font-display font-bold text-primary">{t.total}</td>
                        <td className="p-4 text-center">
                          <span className={`text-xs font-semibold-display px-2 py-1 rounded-full ${t.level === "Tinggi" ? "bg-primary/20 text-primary" : t.level === "Sedang" ? "bg-sidebar-primary/20 text-sidebar-primary" : "bg-accent/20 text-accent"}`}>
                            {t.level}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <p className="font-body text-xs text-muted-foreground mt-3">
              Kemungkinan: 1=Sangat kecil, 2=Kecil, 3=Sangat mungkin, 4=Pasti terjadi. Dampak: 1=Tidak parah, 2=Agak parah, 3=Parah, 4=Sangat parah.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Karakteristik Ancaman */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Karakteristik Ancaman Angin Kencang
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Hasil diskusi kelompok mengenai karakter ancaman
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {KARAKTERISTIK.map((k, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="text-primary" size={18} />
                    <h3 className="font-semibold-display text-base text-primary">
                      {k.char}
                    </h3>
                  </div>
                  <p className="font-body text-foreground text-sm leading-relaxed">
                    {k.val}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Penilaian Risiko per Aset */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Penilaian Risiko per Aset Berisiko
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Perkiraan bentuk risiko pada aset desa akibat angin kencang
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ASET_RISIKO.map((a, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-6 h-full">
                  <h3 className="font-semibold-display text-lg text-primary mb-4">
                    {a.kategori}
                  </h3>
                  <ul className="space-y-2">
                    {a.risiko.map((r, i) => (
                      <li key={i} className="flex gap-2 font-body text-sm text-foreground">
                        <AlertTriangle className="text-sidebar-primary flex-shrink-0 mt-0.5" size={14} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Formulir Kajian Risiko */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
              Formulir Kajian Risiko
            </h2>
            <p className="font-body text-center text-muted-foreground mb-12">
              Bantu identifikasi dan dokumentasikan risiko bencana yang Anda
              amati di Desa Medari
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-12 bg-accent/5 border-accent/20 text-center">
                <CheckCircle className="mx-auto text-accent mb-4" size={48} />
                <h3 className="font-semibold-display text-2xl text-accent mb-2">
                  Terima Kasih!
                </h3>
                <p className="font-body text-foreground">
                  Laporan kajian risiko Anda telah berhasil dikirim. Tim MEDANA
                  FPRB akan menindaklanjuti informasi yang Anda berikan.
                </p>
              </Card>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="font-semibold-display text-sm mb-2 block">
                  Nama Lengkap <span className="text-primary">*</span>
                </label>
                <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Masukkan nama lengkap Anda" className="font-body" required />
              </div>

              <div>
                <label className="font-semibold-display text-sm mb-2 block">
                  Dusun <span className="text-primary">*</span>
                </label>
                <Select value={formData.dusun} onValueChange={(v) => handleSelectChange("dusun", v)}>
                  <SelectTrigger className="font-body">
                    <SelectValue placeholder="Pilih dusun" />
                  </SelectTrigger>
                  <SelectContent>
                    {DUSUN_OPTIONS.map((o) => (
                      <SelectItem key={o.value} value={o.value}>
                        {o.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="font-semibold-display text-sm mb-2 block">
                  Jenis Risiko <span className="text-primary">*</span>
                </label>
                <Select value={formData.riskType} onValueChange={(v) => handleSelectChange("riskType", v)}>
                  <SelectTrigger className="font-body">
                    <SelectValue placeholder="Pilih jenis risiko" />
                  </SelectTrigger>
                  <SelectContent>
                    {RISK_TYPES.map((t) => (
                      <SelectItem key={t.value} value={t.value}>
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="font-semibold-display text-sm mb-2 block">
                  Nomor Kontak (Opsional)
                </label>
                <Input type="tel" name="contact" value={formData.contact} onChange={handleInputChange} placeholder="Nomor telepon atau WhatsApp" className="font-body" />
              </div>

              <div>
                <label className="font-semibold-display text-sm mb-2 block">
                  Deskripsi Risiko <span className="text-primary">*</span>
                </label>
                <Textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Jelaskan risiko yang Anda amati, lokasi spesifik, dan dampak potensialnya..." className="font-body min-h-32" required />
              </div>

              <div className="pt-4">
                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg">
                  {isSubmitting ? "Mengirim..." : "Kirim Laporan"}
                </Button>
              </div>
              <p className="font-body text-xs text-muted-foreground text-center">
                Dengan mengisi formulir ini, Anda membantu upaya mitigasi bencana
                di Desa Medari.
              </p>
            </motion.form>
          )}
        </div>
      </section>

      {/* Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="text-primary" size={20} />
                <h3 className="font-semibold-display text-lg text-primary">
                  Apa itu Kajian Risiko?
                </h3>
              </div>
              <p className="font-body text-foreground leading-relaxed">
                Kajian risiko adalah proses identifikasi dan dokumentasi potensi
                bencana di suatu lokasi. Informasi ini membantu pemerintah desa
                dan BPBD Kabupaten Temanggung dalam merencanakan mitigasi dan
                kesiapsiagaan bencana.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="text-sidebar-primary" size={20} />
                <h3 className="font-semibold-display text-lg text-sidebar-primary">
                  Apa yang Harus Dilaporkan?
                </h3>
              </div>
              <p className="font-body text-foreground leading-relaxed">
                Laporkan tanda-tanda alam yang mencurigakan, perubahan kondisi
                lingkungan, atau area yang terlihat rawan bencana. Semakin detail
                informasi Anda, semakin membantu perencanaan mitigasi.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}