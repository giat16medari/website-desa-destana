// Shared GIAT 16 Desa Medari data — sourced from "GIAT 16 DESA MEDARI" documents.

export const VILLAGE = {
  name: "Desa Medari",
  kecamatan: "Kecamatan Ngadirejo",
  kabupaten: "Kabupaten Temanggung",
  provinsi: "Provinsi Jawa Tengah",
  alamatForum: "Balai Desa Medari, Kecamatan Ngadirejo, Kabupaten Temanggung, Jawa Tengah",
  email: "medari-ngadirejo@temanggungkab.go.id",
};

export const THREAT_UTAMA = "Cuaca Ekstrem (Angin Kencang)";

export const ZONA_MERAH = ["Sobahan", "Jiwan", "Mandi"];

export const DUSUN_OPTIONS = [
  { value: "medari", label: "Dusun Medari" },
  { value: "bringinan", label: "Dusun Bringinan" },
  { value: "sobahan", label: "Dusun Sobahan" },
  { value: "mandi", label: "Dusun Mandi" },
  { value: "kopen", label: "Dusun Kopen" },
  { value: "jiwan", label: "Dusun Jiwan" },
  { value: "kauman", label: "Dusun Kauman" },
];

// KRB Lembar Kerja 2 — Pemeringkatan Ancaman (Kemungkinan × Dampak = Total)
export const THREAT_RANKING = [
  { name: "Angin Kencang", kemungkinan: 4, dampak: 2, total: 6, level: "Tinggi" },
  { name: "Hama/Penyakit Tanaman", kemungkinan: 4, dampak: 2, total: 6, level: "Tinggi" },
  { name: "Kekeringan", kemungkinan: 4, dampak: 1, total: 5, level: "Sedang" },
  { name: "Banjir", kemungkinan: 3, dampak: 1, total: 4, level: "Sedang" },
  { name: "Konflik Masyarakat", kemungkinan: 3, dampak: 1, total: 4, level: "Sedang" },
  { name: "Gempa Bumi", kemungkinan: 2, dampak: 1, total: 3, level: "Rendah" },
  { name: "Tanah Longsor", kemungkinan: 2, dampak: 1, total: 2, level: "Rendah" },
  { name: "Kebakaran", kemungkinan: 1, dampak: 1, total: 2, level: "Rendah" },
];

export const RISK_TYPES = [
  { value: "angin", label: "Angin Kencang (Cuaca Ekstrem)" },
  { value: "hama", label: "Hama/Penyakit Tanaman" },
  { value: "kekeringan", label: "Kekeringan" },
  { value: "banjir", label: "Banjir" },
  { value: "konflik", label: "Konflik Masyarakat" },
  { value: "gempa", label: "Gempa Bumi" },
  { value: "longsor", label: "Tanah Longsor" },
  { value: "kebakaran", label: "Kebakaran" },
  { value: "abrasi", label: "Abrasi Lahan Pertanian" },
  { value: "lainnya", label: "Lainnya" },
];

// PKD — Penilaian Ketangguhan Desa (Hasil Penilaian)
export const PKD = {
  indeks: 57.16,
  tingkat: "TANGGUH PRATAMA",
  kriteria: {
    utama: "≥ 83,33",
    madya: "58,33 – 83,33",
    pratama: "< 58,33",
  },
  komponen: [
    { name: "Layanan Dasar", indeks: 0.8714, persen: 87.14, bobot: "20%" },
    { name: "Peraturan & Kebijakan PB", indeks: 0.52, persen: 52.0, bobot: "20%" },
    { name: "Pencegahan & Mitigasi", indeks: 0.4667, persen: 46.67, bobot: "20%" },
    { name: "Kesiapsiagaan Darurat", indeks: 0.6, persen: 60.0, bobot: "20%" },
    { name: "Kesiapsiagaan Pemulihan", indeks: 0.4, persen: 40.0, bobot: "20%" },
  ],
  fgd: {
    tanggal: "Senin, 20 Juli 2026",
    nomor: "001/GIAT16/VII/2026",
    tempat: "Balai Desa Medari",
    peserta:
      "Pemerintah Desa Medari, BPD, Forum Pengurangan Risiko Bencana (FPRB), Tim Relawan, PKK, Tokoh Masyarakat, Tokoh Pemuda",
    kepalaDesa: "Kasihanto",
    koordinator: "Faiq Aufal Marom",
  },
};

export const PARTNERS = [
  {
    id: 1,
    name: "Universitas Negeri Semarang",
    subtitle: "UNNES",
    description:
      "Institusi pendidikan penyelenggara program KKN Tematik DESTANA, menyediakan mahasiswa dan pendampingan akademis.",
    logo: "/images/logo_unnes_transparent.png",
  },
  {
    id: 2,
    name: "GIAT 16 Medari",
    subtitle: "Kelompok KKN",
    description:
      "Tim pelaksana utama yang bekerja langsung dengan masyarakat Desa Medari untuk identifikasi risiko, mitigasi, dan sosialisasi.",
    logo: "/images/logo_kkn.png",
  },
  {
    id: 3,
    name: "Desa Medari",
    subtitle: "Mitra Lokal",
    description:
      "Pemerintah Desa Medari sebagai mitra implementasi program, menyediakan akses, fasilitas, dan data lokal.",
    logo: "/images/logo_medari.jpg",
  },
];

export const PENDUKUNG = [
  "BPBD Kabupaten Temanggung",
  "Puskesmas Banjarsari",
  "Puskesmas Ngadirejo",
  "Babinsa Desa Medari",
  "Bhabinkamtibmas Desa Medari",
  "Kasi Trantib Kecamatan Ngadirejo",
  "Bidan Desa Medari",
];

// Program overview cards used on the Home page.
export const PROGRAM_SECTIONS = [
  { slug: "spd", title: "Sistem Peringatan Dini", desc: "Sumber peringatan, mekanisme penyebaran, dan tindakan masyarakat." },
  { slug: "krb", title: "Kajian Risiko Bencana", desc: "Jenis ancaman, pemeringkatan, karakteristik, dan kegiatan PRB." },
  { slug: "revak", title: "Rencana Evakuasi", desc: "Penduduk rawan, tempat evakuasi, jalur, dan kapasitas pengungsian." },
  { slug: "fprb", title: "Forum PRB (MEDANA)", desc: "Statuta, visi-misi, struktur pengurus, dan jejaring forum." },
  { slug: "relawan", title: "Tim Relawan", desc: "Anggota, pembagian tugas lima bidang, dan penguatan kelembagaan." },
  { slug: "renkon", title: "Rencana Kontingensi", desc: "Skenario, dampak, struktur komando, dan proyeksi kebutuhan." },
  { slug: "rpb", title: "Rencana Penanggulangan", desc: "Kegiatan per fase: pra bencana, tanggap darurat, pasca bencana." },
  { slug: "pkd", title: "Penilaian Ketangguhan Desa", desc: "Hasil indeks ketangguhan dan rekomendasi aksi peningkatan." },
];

export const NAV_GROUPS = [
  { label: "Program", items: PROGRAM_SECTIONS.map((p) => ({ label: p.title, href: `/${p.slug}` })) },
];