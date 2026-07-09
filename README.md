# Personal Portfolio Website

Sebuah website portfolio pribadi yang modern, minimalis, bersih, dan profesional. Aplikasi ini dibangun dengan memisahkan frontend (single-page application menggunakan Vue 3) dan backend (REST API menggunakan Node.js Express).

## 🚀 Fitur Utama

- **Desain Minimalis & Modern**: Penggunaan whitespace secara optimal dengan aksen warna biru dan tipografi elegan.
- **Responsif**: Dioptimalkan untuk desktop, tablet, dan perangkat mobile.
- **Micro-Animations**: Transisi halaman, efek hover, dan animasi loading yang halus.
- **REST API Integration**: Daftar proyek dimuat secara dinamis dari API backend, dan pesan dari form kontak disimpan dengan validasi lengkap.
- **Struktur MVC**: Kode backend diorganisir dengan pola Model-View-Controller yang rapi dan modular.

---

## 📁 Struktur Folder

```
/Portfolio
├── backend/
│   ├── data/
│   │   ├── messages.json       # Menyimpan data pesan kontak (persisten)
│   │   └── projects.json       # Menyimpan data proyek (REST API source)
│   ├── src/
│   │   ├── controllers/        # Logika aplikasi (C)
│   │   │   ├── contactController.js
│   │   │   └── projectController.js
│   │   ├── models/             # Akses & manipulasi data (M)
│   │   │   ├── contactModel.js
│   │   │   └── projectModel.js
│   │   ├── routes/             # Pemetaan endpoint API (V/Routes)
│   │   │   └── api.js
│   │   └── server.js           # Entry point Express server
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/         # Komponen UI modular & reusable
│   │   │   ├── About.vue
│   │   │   ├── Contact.vue
│   │   │   ├── Footer.vue
│   │   │   ├── Hero.vue
│   │   │   ├── Navbar.vue
│   │   │   ├── Profile.vue
│   │   │   └── Skills.vue
│   │   ├── views/              # View halaman utama
│   │   │   └── HomeView.vue
│   │   ├── router/             # Konfigurasi Vue Router (hash scroll)
│   │   │   └── index.js
│   │   ├── App.vue             # Layout root
│   │   ├── main.js             # Entry point Vue
│   │   └── style.css           # Konfigurasi Tailwind CSS v4 & custom styles
│   ├── index.html
│   ├── vite.config.js          # Integrasi Tailwind CSS v4 plugin
│   └── package.json
│
└── README.md                   # Dokumentasi panduan instalasi
```

---

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3** (Composition API)
- **Vite** (Build Tool)
- **Vue Router 4** (Navigasi halaman & smooth-scrolling)
- **Axios** (HTTP Client untuk komunikasi API)
- **Tailwind CSS v4** (Utility-first CSS framework untuk styling)

### Backend
- **Node.js**
- **Express.js** (REST API framework)
- **CORS** (Membuka akses request lintas domain dari frontend dev server)

---

## ⚙️ Langkah Instalasi & Menjalankan Aplikasi

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) di komputer Anda sebelum memulai.

### 1. Menjalankan Backend (Node.js/Express)

1. Buka terminal baru dan masuk ke direktori `backend`:
   ```bash
   cd backend
   ```
2. Instal seluruh dependensi:
   ```bash
   npm install
   ```
3. Jalankan server backend (secara default berjalan di port `5000`):
   ```bash
   npm start
   ```
   *Server akan berjalan di http://localhost:5000. Anda dapat memverifikasinya dengan mengakses http://localhost:5000/api/projects di browser.*

---

### 2. Menjalankan Frontend (Vue 3 / Vite)

1. Buka terminal baru (biarkan terminal backend tetap berjalan) dan masuk ke direktori `frontend`:
   ```bash
   cd frontend
   ```
2. Instal seluruh dependensi:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan (dev server):
   ```bash
   npm run dev
   ```
4. Buka alamat lokal yang tertera di terminal (biasanya http://localhost:5173 atau http://localhost:5174) di browser Anda untuk melihat aplikasinya secara langsung.

---

## 📝 Catatan Data Persistence
Pesan yang Anda kirim melalui form kontak akan disimpan secara otomatis di file `backend/data/messages.json`. Proyek yang dimuat pada tab Proyek diambil dari file `backend/data/projects.json`. Anda dapat menambahkan proyek baru atau menghapus proyek lama dengan mengubah isi file tersebut.
