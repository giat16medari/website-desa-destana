import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Clock,
  AlertTriangle,
  Target,
  Users,
  ChevronDown,
  ClipboardList,
  Boxes,
} from "lucide-react";
import { motion } from "framer-motion";
import { THREAT_UTAMA } from "@/data/giat";

const SKENARIO = [
  { k: "Waktu kejadian", v: "Peringatan bahaya diterima pukul 08.00" },
  { k: "Lama kejadian", v: "± 30–45 menit (terjadi tiba-tiba, singkat namun intens)" },
  { k: "Luas daerah terdampak", v: "1 Desa (Desa Medari)" },
  {
    k: "Potensi bencana ikutan",
    v: "Pohon tumbang, kabel listrik putus, gangguan akses jalan karena reruntuhan, kerusakan infrastruktur, kerusakan lahan produktif",
  },
];

const DAMPAK = [
  { kategori: "Manusia", rincian: [
    "Cedera akibat tertimpa bangunan — 6",
    "Luka karena pecahan kaca — 4",
    "Cedera akibat tertimpa pohon — 2",
    "Trauma/ketakutan pascabencana — 10",
    "Kematian — 1",
  ]},
  { kategori: "Sosial", rincian: ["Gangguan koordinasi lembaga — 5"] },
  { kategori: "Ekonomi/Finansial", rincian: [
    "Kehilangan penghasilan harian lahan — 2",
    "Rusaknya warung — 3",
    "Aset pertanian rusak — 5",
    "Harta benda pribadi hilang/rusak — 10",
  ]},
  { kategori: "Fisik/Infrastruktur", rincian: [
    "Rumah roboh — 5",
    "Listrik padam — 1 desa",
    "Sekolah rusak — 2",
  ]},
  { kategori: "Alam/Lingkungan", rincian: [
    "Pohon tumbang — 15",
    "Sampah/polusi pascabencana — 7 dusun",
  ]},
];

const TUJUAN_STRATEGI = [
  { tujuan: "Pengerahan seluruh sumberdaya untuk penanganan tanggap darurat bencana", strategi: ["Menetapkan situasi darurat bencana dengan SK Kepala Desa", "Menetapkan masa tanggap darurat bencana selama 5 hari"] },
  { tujuan: "Korban meninggal dunia 1 jiwa", strategi: ["Memperkuat koordinasi dalam penyusunan rencana kontingensi", "Peningkatan kapasitas warga melalui program Destana", "Pelaksanaan latihan kesiapsiagaan berkala", "Kolaborasi FPRB Desa Medari dengan BPBD Kabupaten Temanggung"] },
  { tujuan: "Korban luka-luka 22 jiwa tertangani hingga Puskesmas/rumah sakit", strategi: ["Pengaktifan SOP kesehatan desa", "Koordinasi dengan rumah sakit rujukan terdekat", "Kesiapan armada ambulans & petugas medis", "Dukungan Tim Relawan hingga proses rujukan"] },
  { tujuan: "Kebutuhan dasar pengungsi tercukupi", strategi: ["Kesiapan tim dapur umum & logistik", "Identifikasi kelompok rentan (balita, lansia, ibu hamil, difabel)", "Pelibatan seluruh relawan & FPRB bersama perangkat desa", "Implementasi SOP penanganan kedaruratan"] },
  { tujuan: "Dihasilkannya data kerusakan & kerugian untuk tahap pasca bencana", strategi: ["Pelaksanaan kajian awal oleh tim desa", "Penyampaian hasil kajian kepada pemerintah desa & BPBD", "Data digunakan sebagai dasar tahap lanjutan"] },
];

const BIDANG_LIST: {
  nama: string;
  koordinator: string;
  anggota: string;
  situasi: string;
  sasaran: string[];
  kegiatan: string[];
  kebutuhan: { item: string; dibutuhkan: string; tersedia: string; kekurangan: string }[];
}[] = [
  {
    nama: "1. Sekretariat",
    koordinator: "Ranto Isheriyanto",
    anggota: "Arinawang Ambar Ketawang",
    situasi:
      "Diperlukan koordinasi lintas sektor yang cepat, tepat, dan terorganisir. Sekretariat berperan sebagai pusat pengelolaan administrasi, informasi, dan dokumentasi untuk mendukung operasi tanggap darurat serta memastikan pelaporan dan komunikasi antar sektor berjalan efektif.",
    sasaran: [
      "Koordinasi lintas sektor efektif dalam respons bencana.",
      "Data administrasi & dokumentasi lengkap, sistematis, mudah diakses.",
      "Penyampaian informasi cepat, akurat, dan tepat sasaran.",
    ],
    kegiatan: [
      "Mengarsipkan dokumen tanggap darurat secara sistematis & rapi.",
      "Mencatat & menyusun laporan perkembangan situasi berkala.",
      "Mengelola penyampaian informasi data penting secara cepat & akurat.",
      "Menyediakan ATK, dokumen operasional, dan sarana komunikasi.",
    ],
    kebutuhan: [
      { item: "Laptop", dibutuhkan: "12 unit", tersedia: "12", kekurangan: "0" },
      { item: "Printer", dibutuhkan: "4", tersedia: "4", kekurangan: "0" },
      { item: "Kertas HVS A4", dibutuhkan: "20 rim", tersedia: "20", kekurangan: "0" },
      { item: "Map & Ordner", dibutuhkan: "6 set", tersedia: "4", kekurangan: "2" },
      { item: "Pulpen & Spidol", dibutuhkan: "20", tersedia: "20", kekurangan: "0" },
      { item: "HT", dibutuhkan: "10 unit", tersedia: "7", kekurangan: "3" },
      { item: "Papan Informasi", dibutuhkan: "7", tersedia: "7", kekurangan: "0" },
      { item: "Meja lipat & kursi", dibutuhkan: "15 set", tersedia: "15", kekurangan: "0" },
    ],
  },
  {
    nama: "2. Peringatan Dini",
    koordinator: "Bejo Samsudin",
    anggota: "Indah Kurniawati",
    situasi:
      "Desa Medari memiliki kerentanan tinggi terhadap angin kencang yang dapat terjadi tiba-tiba. Sistem peringatan dini perlu menyampaikan informasi cepat, tepat, akurat agar masyarakat punya waktu cukup untuk evakuasi.",
    sasaran: [
      "Alat peringatan dini terpasang di lokasi strategis.",
      "Informasi potensi bencana tersampaikan cepat, tepat, akurat.",
      "Meningkatnya kesiapsiagaan masyarakat.",
    ],
    kegiatan: [
      "Memasang kentongan & pengeras suara di titik strategis.",
      "Pelatihan kode/sinyal peringatan bencana.",
      "Mengoptimalkan grup WhatsApp RT/RW untuk peringatan dini.",
      "Simulasi evakuasi berkala.",
    ],
    kebutuhan: [
      { item: "Pengeras suara wireless", dibutuhkan: "6", tersedia: "4", kekurangan: "2" },
      { item: "Kentongan", dibutuhkan: "10", tersedia: "7", kekurangan: "3" },
      { item: "Banner/Poster", dibutuhkan: "9", tersedia: "8", kekurangan: "1" },
      { item: "Jas hujan relawan", dibutuhkan: "18", tersedia: "16", kekurangan: "2" },
      { item: "Buku panduan tanggap bencana", dibutuhkan: "18", tersedia: "8", kekurangan: "10" },
      { item: "Peluit", dibutuhkan: "15", tersedia: "15", kekurangan: "0" },
      { item: "HT", dibutuhkan: "18", tersedia: "15", kekurangan: "3" },
    ],
  },
  {
    nama: "3. Evakuasi",
    koordinator: "Hendri Erfanto",
    anggota: "Kadarusman",
    situasi:
      "Angin puting beliung berpotensi menimbulkan kebutuhan evakuasi cepat, terutama bagi kelompok rentan (lansia, difabel, anak, ibu hamil). Evakuasi harus cepat, terkoordinasi, sesuai prosedur segera setelah indikasi bahaya.",
    sasaran: [
      "Meminimalkan risiko korban jiwa.",
      "Evakuasi kelompok rentan secara aman menuju pengungsian.",
      "Penanganan korban luka & meninggal secara cepat & sesuai prinsip kemanusiaan.",
    ],
    kegiatan: [
      "Evakuasi ke titik kumpul sesuai prosedur.",
      "1 relawan mendampingi 1 kelompok rentan.",
      "Mengutamakan penyelamatan korban yang masih hidup.",
      "Pemulasaraan jenazah secara layak.",
      "Memanfaatkan tandu, helm, peluit, jas hujan, kendaraan darurat.",
    ],
    kebutuhan: [
      { item: "Tandu", dibutuhkan: "5", tersedia: "8", kekurangan: "0" },
      { item: "Helm relawan", dibutuhkan: "18", tersedia: "18", kekurangan: "0" },
      { item: "Jas hujan", dibutuhkan: "18", tersedia: "16", kekurangan: "2" },
      { item: "Sepatu boot", dibutuhkan: "18", tersedia: "20", kekurangan: "0" },
      { item: "Sarung tangan", dibutuhkan: "18", tersedia: "20", kekurangan: "0" },
      { item: "Kantong jenazah", dibutuhkan: "20", tersedia: "20", kekurangan: "0" },
      { item: "Kendaraan pick-up/truk", dibutuhkan: "3", tersedia: "3", kekurangan: "0" },
      { item: "Matras & selimut", dibutuhkan: "25 set", tersedia: "27", kekurangan: "0" },
    ],
  },
  {
    nama: "4. SAR (Pencarian & Pertolongan)",
    koordinator: "Tafrichan Ichsani",
    anggota: "Suwarno",
    situasi:
      "Setelah bencana, terdapat potensi korban luka, tertimpa reruntuhan, atau hilang. Diperlukan operasi pencarian & penyelamatan cepat, terkoordinasi, efektif: pencarian korban, P3, evakuasi ke fasilitas kesehatan.",
    sasaran: [
      "Meminimalkan jumlah korban.",
      "Evakuasi korban luka & meninggal cepat & sesuai prosedur.",
      "Korban hidup dievakuasi ke fasilitas kesehatan.",
      "Pemulasaraan jenazah layak & bermartabat.",
    ],
    kegiatan: [
      "Evakuasi dengan pendampingan kelompok rentan (1 relawan : 1 rentan).",
      "Mengutamakan korban yang masih hidup.",
      "Pemulasaraan jenazah sesuai prinsip kemanusiaan.",
      "Pencarian korban di wilayah terdampak.",
      "Evakuasi dengan tandu & P3 di lokasi.",
      "Memindahkan korban ke fasilitas kesehatan/pengungsian.",
      "Koordinasi pembaruan data korban berkala.",
    ],
    kebutuhan: [
      { item: "P3K", dibutuhkan: "10 set", tersedia: "5", kekurangan: "5" },
      { item: "Bendera penanda korban", dibutuhkan: "30", tersedia: "25", kekurangan: "5" },
      { item: "Tali", dibutuhkan: "10 rol", tersedia: "2", kekurangan: "8" },
      { item: "Peluit", dibutuhkan: "10", tersedia: "8", kekurangan: "2" },
      { item: "Tandu", dibutuhkan: "10", tersedia: "2", kekurangan: "8" },
      { item: "Kantong jenazah", dibutuhkan: "15", tersedia: "0", kekurangan: "15" },
      { item: "Helm", dibutuhkan: "15", tersedia: "10", kekurangan: "5" },
      { item: "Masker", dibutuhkan: "30", tersedia: "0", kekurangan: "30" },
      { item: "Sepatu boot", dibutuhkan: "30", tersedia: "5", kekurangan: "25" },
      { item: "Sarung tangan", dibutuhkan: "30", tersedia: "0", kekurangan: "30" },
      { item: "Radio HT", dibutuhkan: "5", tersedia: "2", kekurangan: "3" },
      { item: "Kendaraan darurat", dibutuhkan: "2", tersedia: "2", kekurangan: "0" },
    ],
  },
  {
    nama: "5. Layanan Kesehatan",
    koordinator: "Mardiyanti Dwi Ariyani",
    anggota: "Reni Rahmawati",
    situasi:
      "Angin kencang berpotensi menimbulkan korban luka ringan, berat, hingga meninggal. Diperlukan kesiapsiagaan tenaga kesehatan, dukungan psikososial & trauma healing, serta layanan kesehatan bergerak karena akses dapat terhambat medan/cuaca.",
    sasaran: [
      "Pelayanan kesehatan terpenuhi bagi korban luka & trauma.",
      "Deteksi & penanganan kondisi medis darurat cepat.",
      "Layanan rujukan tersedia untuk penanganan lanjutan.",
    ],
    kegiatan: [
      "Menyiapkan & mengoperasikan pos pelayanan kesehatan.",
      "Pemeriksaan, P3, dan pengobatan dasar.",
      "Menyediakan obat esensial & konsultasi.",
      "Rujukan untuk penanganan lanjutan.",
      "Memantau kondisi kesehatan pengungsi berkala.",
      "Mobilisasi cepat & penanganan awal di lokasi.",
      "Pendataan pengungsi & kondisi kesehatannya.",
    ],
    kebutuhan: [
      { item: "Tenda kesehatan", dibutuhkan: "3", tersedia: "1", kekurangan: "2" },
      { item: "P3K lengkap", dibutuhkan: "10 set", tersedia: "8", kekurangan: "2" },
      { item: "Obat dasar", dibutuhkan: "15 paket", tersedia: "13", kekurangan: "2" },
      { item: "Meja periksa & kursi", dibutuhkan: "5", tersedia: "3", kekurangan: "2" },
      { item: "Termometer & tensi", dibutuhkan: "5", tersedia: "3", kekurangan: "2" },
      { item: "Alat rapid test", dibutuhkan: "30", tersedia: "3", kekurangan: "27" },
      { item: "Masker & handsanitizer", dibutuhkan: "50", tersedia: "0", kekurangan: "50" },
      { item: "Stetoskop", dibutuhkan: "5", tersedia: "3", kekurangan: "2" },
      { item: "Kain segitiga", dibutuhkan: "50", tersedia: "20", kekurangan: "30" },
      { item: "Sarung tangan", dibutuhkan: "50", tersedia: "15", kekurangan: "35" },
      { item: "Radio HT", dibutuhkan: "5", tersedia: "2", kekurangan: "3" },
    ],
  },
  {
    nama: "6. Barak Pengungsian",
    koordinator: "Sakroni",
    anggota: "Indah Kurniawati",
    situasi:
      "Sebagian warga kehilangan/tidak dapat menempati rumah sehingga membutuhkan tempat pengungsian sementara yang aman & layak, didukung pemenuhan kebutuhan dasar (logistik, tempat istirahat, air bersih, sanitasi).",
    sasaran: [
      "Tempat pengungsian aman & layak.",
      "Kebutuhan dasar pengungsi terpenuhi.",
      "Pengelolaan pengungsian tertib, aman, efektif.",
    ],
    kegiatan: [
      "Mendirikan tenda/tempat pengungsian sementara.",
      "Menyediakan alas tidur, selimut, logistik.",
      "Mengoperasikan dapur umum.",
      "Menyediakan air bersih & sanitasi darurat.",
      "Pendataan & penataan pengungsi.",
    ],
    kebutuhan: [
      { item: "Tenda pengungsian", dibutuhkan: "5", tersedia: "1", kekurangan: "4" },
      { item: "Matras & selimut", dibutuhkan: "30", tersedia: "15", kekurangan: "15" },
      { item: "Tikar plastik", dibutuhkan: "30", tersedia: "12", kekurangan: "18" },
      { item: "Ember & gayung", dibutuhkan: "5", tersedia: "5", kekurangan: "0" },
      { item: "Peralatan masak", dibutuhkan: "8 set", tersedia: "5", kekurangan: "3" },
      { item: "MCK darurat", dibutuhkan: "5", tersedia: "4", kekurangan: "1" },
      { item: "Air minum galon", dibutuhkan: "5", tersedia: "3", kekurangan: "2" },
      { item: "Penerangan emergency", dibutuhkan: "6", tersedia: "2", kekurangan: "4" },
      { item: "Pakaian layak pakai", dibutuhkan: "50", tersedia: "0", kekurangan: "50" },
      { item: "Genset", dibutuhkan: "3", tersedia: "1", kekurangan: "2" },
      { item: "Meja & kursi lipat", dibutuhkan: "7", tersedia: "5", kekurangan: "2" },
      { item: "Tendon air bersih", dibutuhkan: "3", tersedia: "1", kekurangan: "2" },
    ],
  },
  {
    nama: "7. Dapur Umum",
    koordinator: "Riyanti",
    anggota: "Riski Arif Afriza Darman",
    situasi:
      "Angin kencang berpotensi mengganggu ketersediaan bahan pangan karena terhambatnya distribusi & aktivitas masyarakat. Diperlukan dapur umum untuk memenuhi kebutuhan makanan selama tanggap darurat.",
    sasaran: [
      "Ketersediaan pangan bagi masyarakat terdampak terjamin.",
      "Distribusi logistik pangan tepat & merata.",
      "Logistik bahan makanan terkelola efektif.",
    ],
    kegiatan: [
      "Menyediakan makanan siap saji aman & layak.",
      "Menyalurkan makanan & logistik pangan tepat sasaran.",
      "Menjaga ketersediaan & kelancaran distribusi.",
    ],
    kebutuhan: [
      { item: "Kompor gas", dibutuhkan: "4 tungku", tersedia: "1", kekurangan: "3" },
      { item: "Tabung gas", dibutuhkan: "4 unit", tersedia: "1", kekurangan: "3" },
      { item: "Alat masak", dibutuhkan: "5 set", tersedia: "3", kekurangan: "2" },
      { item: "Alat makan", dibutuhkan: "30 set", tersedia: "15", kekurangan: "15" },
      { item: "Sarana kebersihan", dibutuhkan: "10 set", tersedia: "2", kekurangan: "8" },
      { item: "Lampu senter", dibutuhkan: "10", tersedia: "4", kekurangan: "6" },
      { item: "Radio HT", dibutuhkan: "5", tersedia: "1", kekurangan: "4" },
      { item: "Peralatan keamanan diri", dibutuhkan: "15 set", tersedia: "5", kekurangan: "10" },
    ],
  },
  {
    nama: "8. Bantuan Non Pangan",
    koordinator: "Slamet Juwari",
    anggota: "Mafthuchah",
    situasi:
      "Masyarakat terdampak membutuhkan bantuan nonpangan untuk kebutuhan dasar & pemulihan. Penyaluran perlu cepat, tepat, terkoordinasi.",
    sasaran: [
      "Penyaluran bantuan nonpangan terlaksana.",
      "Hunian sementara bagi rumah tidak layak huni.",
      "Koordinasi lintas sektor dalam penyaluran bantuan.",
    ],
    kegiatan: [
      "Menyalurkan bantuan nonpangan ke pengungsian, rumah terdampak, fasilitas umum.",
      "Mendirikan tenda sebagai hunian sementara.",
      "Koordinasi dengan BPBD, Dinas Sosial, relawan, instansi terkait.",
    ],
    kebutuhan: [
      { item: "Tenda", dibutuhkan: "1 set", tersedia: "1", kekurangan: "0" },
      { item: "Perlengkapan tidur", dibutuhkan: "29 set", tersedia: "0", kekurangan: "29" },
      { item: "Pakaian", dibutuhkan: "60 set", tersedia: "0", kekurangan: "60" },
      { item: "Alat mandi", dibutuhkan: "30 set", tersedia: "0", kekurangan: "30" },
    ],
  },
  {
    nama: "9. Air dan Sanitasi",
    koordinator: "Purnomo Nugroho",
    anggota: "Muhrim",
    situasi:
      "Kerusakan infrastruktur dapat membatasi akses air bersih & mengganggu fasilitas sanitasi. Bidang air & sanitasi perlu segera ditangani dalam tanggap darurat.",
    sasaran: [
      "Akses air bersih bagi masyarakat.",
      "Fasilitas sanitasi tetap layak.",
      "Pemulihan jaringan air & sanitasi secepat mungkin.",
    ],
    kegiatan: [
      "Menyalurkan air bersih & menyediakan pasokan alternatif.",
      "Memasang & memperbaiki toilet portabel.",
      "Identifikasi kerusakan, perbaikan, pemantauan kualitas air & sanitasi.",
    ],
    kebutuhan: [
      { item: "Air bersih", dibutuhkan: "150 liter/hari", tersedia: "0", kekurangan: "150" },
      { item: "Jamban darurat", dibutuhkan: "5 unit", tersedia: "3", kekurangan: "2" },
    ],
  },
  {
    nama: "10. Pendidikan",
    koordinator: "Susilan",
    anggota: "Endang Lestari",
    situasi:
      "Angin kencang berpotensi merusak bangunan sekolah (atap lepas, ruang kelas rusak, pohon tumbang menimpa gedung) sehingga menghambat KBM. Diperlukan fasilitas pembelajaran darurat.",
    sasaran: [
      "Keamanan warga sekolah terjamin.",
      "Data kerusakan sekolah & kebutuhan fasilitas darurat tersedia.",
      "Layanan pendidikan darurat segera dilaksanakan.",
    ],
    kegiatan: [
      "Pengamanan & evakuasi siswa ke lokasi aman.",
      "Pendataan kerusakan bangunan sekolah.",
      "Melibatkan guru dalam kesiapsiagaan & fasilitas darurat.",
      "Menyelenggarakan KBM melalui pendidikan darurat.",
      "Sosialisasi & pelatihan mitigasi kepada siswa, guru, orang tua.",
    ],
    kebutuhan: [
      { item: "Tenda darurat", dibutuhkan: "6", tersedia: "5", kekurangan: "1" },
      { item: "Radio HT", dibutuhkan: "10", tersedia: "2", kekurangan: "8" },
      { item: "Megaphone", dibutuhkan: "2", tersedia: "1", kekurangan: "1" },
      { item: "Kotak P3K", dibutuhkan: "2", tersedia: "2", kekurangan: "0" },
      { item: "Alat kebersihan", dibutuhkan: "4 set", tersedia: "2", kekurangan: "2" },
      { item: "Lampu darurat", dibutuhkan: "2", tersedia: "1", kekurangan: "1" },
      { item: "Alat tulis", dibutuhkan: "5 set", tersedia: "4", kekurangan: "1" },
      { item: "Meja lipat & kursi belajar", dibutuhkan: "100 set", tersedia: "25", kekurangan: "75" },
    ],
  },
  {
    nama: "11. Keamanan",
    koordinator: "Wahyudi",
    anggota: "Miszaeni",
    situasi:
      "Angin kencang merusak rumah & infrastruktur sehingga warga mengungsi. Terdapat potensi kriminal (pencurian/penjarahan). Diperlukan pengamanan untuk menjaga ketertiban & melindungi masyarakat dan aset.",
    sasaran: [
      "Menjaga ketertiban & keamanan lingkungan.",
      "Mencegah tindak kejahatan (pencurian, penjarahan).",
      "Melindungi aset masyarakat terdampak.",
      "Memberi jaminan keamanan korban bencana.",
    ],
    kegiatan: [
      "Berkoordinasi dengan kepolisian, aparat desa, & pihak terkait.",
      "Patroli rutin di wilayah berpotensi gangguan keamanan.",
      "Mengatur & membatasi akses menuju lokasi bencana.",
      "Memberikan rasa aman kepada korban.",
    ],
    kebutuhan: [
      { item: "Helm pelindung", dibutuhkan: "20", tersedia: "2", kekurangan: "18" },
      { item: "Seragam/jaket pengaman", dibutuhkan: "20 set", tersedia: "2", kekurangan: "18" },
      { item: "Sepatu boot", dibutuhkan: "20 set", tersedia: "2", kekurangan: "18" },
      { item: "Masker debu", dibutuhkan: "20", tersedia: "2", kekurangan: "18" },
      { item: "HT/radio", dibutuhkan: "20", tersedia: "0", kekurangan: "20" },
      { item: "Megaphone", dibutuhkan: "7", tersedia: "7", kekurangan: "0" },
      { item: "Handphone", dibutuhkan: "25", tersedia: "25", kekurangan: "0" },
      { item: "Peluit", dibutuhkan: "12", tersedia: "7", kekurangan: "5" },
      { item: "Lampu sorot", dibutuhkan: "5", tersedia: "0", kekurangan: "5" },
      { item: "Gergaji", dibutuhkan: "4 set", tersedia: "2", kekurangan: "2" },
      { item: "Tenda pos keamanan", dibutuhkan: "5 set", tersedia: "2", kekurangan: "3" },
      { item: "Tanda pengaman (barikade)", dibutuhkan: "10 set", tersedia: "0", kekurangan: "10" },
      { item: "Mobil pengaman", dibutuhkan: "2", tersedia: "1", kekurangan: "1" },
    ],
  },
  {
    nama: "12. Pengkajian Kerusakan & Kerugian",
    koordinator: "Wiyadi",
    anggota: "Puji Slamet",
    situasi:
      "Setelah angin kencang mereda & masyarakat dievakuasi, dilakukan pengkajian cepat terhadap korban, kerusakan, & kerugian untuk memperoleh data akurat sebagai dasar penanganan darurat & pemulihan.",
    sasaran: [
      "Data kerusakan & kerugian terdokumentasi lengkap & akurat.",
      "Transparansi & akuntabilitas penanggulangan bencana.",
      "Hasil pengkajian tersusun sistematis & terdokumentasi.",
      "Hasil dapat dipertanggungjawabkan & menjadi acuan pemulihan.",
    ],
    kegiatan: [
      "Penilaian cepat infrastruktur, fasilitas umum, rumah, jaringan komunikasi.",
      "Mengelompokkan kerusakan: ringan, sedang, berat.",
      "Koordinasi lintas sektor (kesehatan, perumahan, pendidikan, transportasi, ekonomi).",
      "Menyusun laporan cepat, akurat, dapat dipertanggungjawabkan.",
    ],
    kebutuhan: [
      { item: "Formulir pendataan", dibutuhkan: "20 set", tersedia: "4", kekurangan: "16" },
      { item: "Alat tulis", dibutuhkan: "10 set", tersedia: "2", kekurangan: "8" },
      { item: "Radio HT", dibutuhkan: "20", tersedia: "5", kekurangan: "15" },
      { item: "Peta wilayah", dibutuhkan: "7", tersedia: "7", kekurangan: "0" },
      { item: "Kamera & drone", dibutuhkan: "2", tersedia: "1", kekurangan: "1" },
      { item: "Laptop", dibutuhkan: "4", tersedia: "2", kekurangan: "2" },
      { item: "Alat ukur", dibutuhkan: "4", tersedia: "1", kekurangan: "3" },
      { item: "Peralatan keamanan", dibutuhkan: "4 set", tersedia: "2", kekurangan: "2" },
    ],
  },
];

const KOMANDAN = { penanggungJawab: "Yosep Restu Adi", wakil: "Muhamad Nurwakhid" };

export default function RenkonPage() {
  const [openBidang, setOpenBidang] = useState<number | null>(0);

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
              Rencana Kontingensi Desa
            </h1>
            <p className="font-body text-xl text-foreground max-w-2xl">
              RENCON DESA — penyusunan skenario, dampak, tujuan, struktur
              komando, dan proyeksi kebutuhan untuk ancaman{" "}
              <strong>{THREAT_UTAMA}</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skenario Kejadian */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
            Skenario Kejadian
          </h2>
          <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Karakter & keterangan skenario kejadian angin kencang
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 divide-y divide-border">
              {SKENARIO.map((s, i) => (
                <div key={i} className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row gap-2 md:gap-6">
                  <div className="flex items-center gap-2 md:w-64 flex-shrink-0">
                    <Clock className="text-primary" size={18} />
                    <p className="font-semibold-display text-foreground">{s.k}</p>
                  </div>
                  <p className="font-body text-foreground">{s.v}</p>
                </div>
              ))}
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skenario Dampak */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
            Skenario Dampak
          </h2>
          <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Perkiraan bentuk risiko pada aset & jumlah
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DAMPAK.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <h3 className="font-semibold-display text-lg text-primary mb-4">{d.kategori}</h3>
                  <ul className="space-y-2">
                    {d.rincian.map((r, j) => (
                      <li key={j} className="flex gap-2 font-body text-sm text-foreground">
                        <AlertTriangle className="text-sidebar-primary flex-shrink-0 mt-0.5" size={14} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tujuan & Strategi */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
            Tujuan & Strategi Penanganan Darurat
          </h2>
          <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tujuan tanggap darurat & strategi pencapaian
          </p>

          <div className="space-y-6">
            {TUJUAN_STRATEGI.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-l-4 border-primary">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="text-primary" size={20} />
                    <h3 className="font-semibold-display text-lg text-primary">{t.tujuan}</h3>
                  </div>
                  <ul className="space-y-2 pl-7">
                    {t.strategi.map((s, j) => (
                      <li key={j} className="flex gap-2 font-body text-sm text-foreground">
                        <span className="text-sidebar-primary">→</span> {s}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Struktur Komando */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
            Struktur Komando Penanganan Darurat
          </h2>
          <p className="font-body text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Penanggung jawab & 12 bidang operasi
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            <Card className="p-5 bg-primary/5 border-primary/20 text-center">
              <p className="font-body text-sm text-muted-foreground">Penanggung Jawab / Komandan</p>
              <p className="font-semibold-display text-lg text-primary">{KOMANDAN.penanggungJawab}</p>
            </Card>
            <Card className="p-5 bg-sidebar-primary/5 border-sidebar-primary/20 text-center">
              <p className="font-body text-sm text-muted-foreground">Koordinator Umum / Wakil Komandan</p>
              <p className="font-semibold-display text-lg text-sidebar-primary">{KOMANDAN.wakil}</p>
            </Card>
          </div>

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
                      <th className="text-left p-3 font-semibold-display">Bidang Operasi</th>
                      <th className="text-left p-3 font-semibold-display">Koordinator</th>
                      <th className="text-left p-3 font-semibold-display">Anggota</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BIDANG_LIST.map((b, i) => (
                      <tr key={i} className="border-t border-border hover:bg-muted/50">
                        <td className="p-3 font-semibold-display text-foreground">
                          {b.nama}
                        </td>
                        <td className="p-3 font-body">{b.koordinator}</td>
                        <td className="p-3 font-body text-muted-foreground">{b.anggota}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body text-xs text-muted-foreground p-3 text-center">
                Lihat detail perencanaan & kebutuhan tiap bidang pada bagian di
                bawah
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Detail per Bidang (accordion) */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-center">
            Perencanaan & Proyeksi Kebutuhan per Bidang
          </h2>
          <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Situasi, sasaran, kegiatan, dan proyeksi kebutuhan logistik 12
            bidang operasi
          </p>

          <div className="space-y-4">
            {BIDANG_LIST.map((b, i) => {
              const open = openBidang === i;
              return (
                <Card key={i} className="overflow-hidden">
                  <button
                    className="w-full text-left p-5 flex items-center justify-between hover:bg-muted/50 transition-colors"
                    onClick={() => setOpenBidang(open ? null : i)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Users className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold-display text-lg text-foreground">{b.nama}</h3>
                        <p className="font-body text-xs text-muted-foreground">
                          Koor: {b.koordinator} • Anggota: {b.anggota}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>

                  {open && (
                    <div className="p-5 pt-0 border-t border-border space-y-5">
                      <div>
                        <h4 className="font-semibold-display text-sm text-primary mb-1 flex items-center gap-1">
                          <AlertTriangle size={14} /> Situasi
                        </h4>
                        <p className="font-body text-sm text-foreground leading-relaxed">{b.situasi}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <h4 className="font-semibold-display text-sm text-sidebar-primary mb-2 flex items-center gap-1">
                            <Target size={14} /> Sasaran
                          </h4>
                          <ul className="space-y-1.5">
                            {b.sasaran.map((s, j) => (
                              <li key={j} className="font-body text-sm text-foreground flex gap-2">
                                <span className="text-primary">•</span> {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold-display text-sm text-accent mb-2 flex items-center gap-1">
                            <ClipboardList size={14} /> Kegiatan
                          </h4>
                          <ul className="space-y-1.5">
                            {b.kegiatan.map((k, j) => (
                              <li key={j} className="font-body text-sm text-foreground flex gap-2">
                                <span className="text-accent">•</span> {k}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold-display text-sm text-primary mb-2 flex items-center gap-1">
                          <Boxes size={14} /> Proyeksi Kebutuhan
                        </h4>
                        <div className="overflow-x-auto rounded-md border border-border">
                          <table className="w-full text-sm">
                            <thead className="bg-muted/50">
                              <tr>
                                <th className="text-left p-2 font-semibold-display">Item</th>
                                <th className="text-center p-2 font-semibold-display">Dibutuhkan</th>
                                <th className="text-center p-2 font-semibold-display">Tersedia</th>
                                <th className="text-center p-2 font-semibold-display">Kekurangan</th>
                              </tr>
                            </thead>
                            <tbody>
                              {b.kebutuhan.map((k, j) => {
                                const gap = parseInt(k.kekurangan) || 0;
                                return (
                                  <tr key={j} className="border-t border-border">
                                    <td className="p-2 font-body">{k.item}</td>
                                    <td className="p-2 text-center">{k.dibutuhkan}</td>
                                    <td className="p-2 text-center text-muted-foreground">{k.tersedia}</td>
                                    <td className={`p-2 text-center font-semibold ${gap > 0 ? "text-primary" : "text-accent"}`}>
                                      {k.kekurangan}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}