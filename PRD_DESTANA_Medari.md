# Product Requirements Document (PRD): Website DESTANA Desa Medari

## 1. Pendahuluan
Website **DESTANA Desa Medari** adalah platform informasi digital yang dirancang untuk meningkatkan kesiapsiagaan masyarakat Desa Medari, Kecamatan Ngadirejo, Kabupaten Temanggung terhadap potensi bencana alam. Proyek ini merupakan bagian dari program kerja KKN Tematik DESTANA.

## 2. Tujuan Proyek
Proyek pengembangan website DESTANA Desa Medari ini memiliki beberapa tujuan utama. Pertama, website ini bertujuan untuk **menyediakan akses informasi yang komprehensif** mengenai profil Desa Medari serta potensi bencana yang mungkin terjadi di wilayah tersebut. Kedua, website ini akan berfungsi sebagai platform edukasi untuk **mengedukasi masyarakat** tentang Sistem Peringatan Dini (SPD) dan langkah-langkah penanganan yang tepat saat terjadi bencana. Ketiga, website ini akan **memvisualisasikan peta risiko dan jalur evakuasi** secara interaktif, memudahkan warga dalam memahami dan merespons situasi darurat. Keempat, platform ini akan **mendokumentasikan kegiatan sosialisasi KKN** yang telah dilaksanakan, menjadikannya arsip digital yang dapat diakses kapan saja. Terakhir, website ini akan **menyediakan formulir digital** untuk kajian risiko bencana, memungkinkan partisipasi aktif masyarakat dalam upaya mitigasi.


## 3. Target Pengguna
Website DESTANA Desa Medari ini dirancang untuk melayani beberapa kelompok pengguna utama. **Warga Desa Medari** merupakan target primer, yang akan memanfaatkan website ini sebagai sumber informasi dan panduan kesiapsiagaan bencana. Selain itu, **Pemerintah Desa Medari** dan **Tim BPBD Kabupaten Temanggung** akan menggunakan platform ini sebagai alat pendukung dalam manajemen bencana dan penyebaran informasi. Terakhir, **Mahasiswa KKN dan pihak universitas** akan mendapatkan manfaat dari website ini sebagai dokumentasi dan luaran dari program KKN yang telah dilaksanakan, serta sebagai referensi untuk studi lebih lanjut.

## 4. Struktur Website & Fitur Utama

Website DESTANA Desa Medari akan dirancang dengan arsitektur informasi yang intuitif, membagi konten ke dalam beberapa halaman utama untuk memudahkan navigasi. Struktur ini dirancang untuk memastikan pengguna dapat dengan cepat menemukan informasi yang mereka butuhkan, terutama dalam situasi darurat.

| Halaman | Deskripsi Fitur Utama |
| :--- | :--- |
| **Home Page (Scrollable)** | Halaman utama yang menampilkan **Hero Section** dengan judul "DESTANA MEDARI", slogan, dan tombol CTA "Lihat Jalur Evakuasi". Bagian ini juga memuat **Profil Desa** yang mendeskripsikan Desa Medari sebagai desa agraris (tembakau, padi) di kaki gunung, lengkap dengan fasilitas pendidikan dan sarana sosial. Selain itu, terdapat **Informasi Bencana** berupa kartu informasi mengenai potensi bencana utama seperti Tanah Longsor (Risiko Tinggi), Angin Puting Beliung, dan Erupsi Gunung Api. |
| **Sistem Peringatan Dini (SPD) & Penanganan** | Halaman khusus yang menjelaskan **SPD Tanah Longsor**, termasuk tanda-tanda alam (retakan tanah, mata air keruh) dan prosedur bunyi sirine/kentongan. Halaman ini juga merinci **Prosedur Penanganan** dengan langkah-langkah konkret "Saat Terjadi Bencana" dan "Pasca Bencana". |
| **Peta Bencana & Jalur Evakuasi** | Halaman yang menyajikan **Peta Digital** untuk memvisualisasikan titik rawan dan titik aman (seperti Balai Desa dan Lapangan). Terdapat juga panduan **Jalur Evakuasi** yang menunjukkan rute tercepat menuju titik kumpul, serta **Galeri Plang** yang menampilkan foto atau ilustrasi plang jalur evakuasi yang telah dipasang di desa. |
| **Kajian Risiko Bencana (Form)** | Halaman interaktif yang menyediakan **Formulir Input** bagi warga untuk melaporkan kajian risiko bencana. Formulir ini mencakup kolom Nama, Dusun, Jenis Risiko yang diamati, dan Deskripsi. Data yang diinput akan diintegrasikan menggunakan layanan pihak ketiga (seperti Formspree atau WhatsApp) untuk pengiriman data yang cepat dan efisien. |
| **Dokumentasi** | Halaman yang berfungsi sebagai arsip visual, menampilkan **Galeri Foto** dari berbagai kegiatan sosialisasi, pemasangan plang, dan pertemuan dengan warga yang telah dilaksanakan selama program KKN. |

## 5. Spesifikasi Teknis

Untuk memastikan performa yang optimal, keamanan, dan kemudahan pemeliharaan, website ini akan dibangun menggunakan teknologi web modern. Pemilihan *tech stack* ini juga disesuaikan dengan kebutuhan *hosting* di Vercel.

| Komponen | Teknologi yang Digunakan |
| :--- | :--- |
| **Framework** | Vite + React + TypeScript (Static Web Stack) |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React |
| **Hosting** | Vercel |
| **Animasi** | Framer Motion (untuk transisi halus) |

## 6. Rencana Aset Visual

Desain visual website akan difokuskan pada kejelasan informasi dan estetika yang profesional. Penggunaan warna dan aset visual akan disesuaikan dengan tema kebencanaan dan identitas Desa Medari.

| Jenis Aset | Deskripsi |
| :--- | :--- |
| **Logo** | Logo KKN dan Logo DESTANA yang akan ditempatkan di *header* dan *footer* website. |
| **Ilustrasi & Ikon** | Ikon bencana dengan gaya *flat design* untuk memudahkan identifikasi visual pada bagian Informasi Bencana. |
| **Peta** | Peta digital dalam format SVG atau gambar resolusi tinggi yang dihasilkan dari pemetaan manual atau *drone*. |
| **Palet Warna** | Warna dominan yang digunakan meliputi **Orange** (melambangkan Siaga), **Biru** (melambangkan Keamanan), dan **Hijau** (melambangkan identitas Desa agraris). |

## 7. Penutup
Website ini diharapkan menjadi warisan digital (legacy) dari tim KKN yang dapat terus digunakan oleh perangkat desa untuk edukasi kebencanaan berkelanjutan.

## 8. Referensi

- [Profil Desa Medari, Ngadirejo, Temanggung](https://medari-ngadirejo.temanggungkab.go.id/frontend/profil/147)
- [BPBD Kabupaten Sleman - Tahun Ini, Destana di Kabupaten Sleman Bertambah Dua](https://bpbd.slemankab.go.id/tahun-ini-destana-di-kabupaten-sleman-bertambah-dua/)
- [Direktori Penanggulangan Bencana - DESTANA —Desa Tangguh Bencana](https://direktoripb.bnpb.go.id/produk/destanadesa-tangguh-bencana)
