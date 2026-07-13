# Dhea Putri Miradikna — Portfolio

Website portofolio pribadi, dibangun dengan **React + Vite**. Berisi profil,
pengalaman kerja, project GitHub, skill, dan sertifikasi — semua datanya
diambil dari CV dan diedit di satu file saja (`src/data/profile.js`).

## 1. Menjalankan di komputer sendiri

Butuh [Node.js](https://nodejs.org) versi **20.12 ke atas** (disarankan pakai versi LTS terbaru langsung — misalnya v22.x). Kalau muncul error seperti `SyntaxError: ... does not provide an export named 'styleText'` saat `npm run dev`, itu tandanya Node.js kamu terlalu lama — update dulu ke versi LTS terbaru, lalu hapus folder `node_modules` dan file `package-lock.json`, dan jalankan `npm install` ulang.

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## 2. Mengedit isi konten

Semua teks (bio, pengalaman kerja, daftar project, skill, sertifikasi, kontak)
ada di:

```
src/data/profile.js
```

Cukup ubah teks di file itu — tidak perlu menyentuh file komponen lain.
Foto profil ada di `public/profile.jpg` (tinggal timpa file itu dengan foto
baru bila ingin ganti, dengan nama file yang sama).

## 3. Deploy ke GitHub Pages

Ada dua cara. **Cara A (rekomendasi)** otomatis setiap kali kamu push kode baru.

### Cara A — Otomatis lewat GitHub Actions

1. Buat repository baru di GitHub, misalnya bernama `portfolio`.
2. Buka `vite.config.js`, pastikan baris `base` cocok dengan nama repo:
   ```js
   base: '/portfolio/',   // ganti '/portfolio/' sesuai nama repo kamu
   ```
   > Kalau repo-nya bernama persis `<username-kamu>.github.io`, ganti jadi `base: '/'`.
3. Push seluruh folder ini ke repo tersebut:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/dheamiradikna/portfolio.git
   git push -u origin main
   ```
4. Di GitHub, buka **Settings → Pages**, lalu di bagian **Source** pilih
   **GitHub Actions** (bukan "Deploy from a branch").
5. Buka tab **Actions** di repo — workflow "Deploy to GitHub Pages" akan
   berjalan otomatis. Setelah selesai (biasanya 1–2 menit), situs akan aktif di:
   ```
   https://dheamiradikna.github.io/portfolio/
   ```
6. Setiap kali kamu push perubahan baru ke branch `main`, situs akan
   ter-update otomatis — tidak perlu build manual lagi.

### Cara B — Manual dengan paket `gh-pages`

Kalau tidak ingin pakai GitHub Actions:

```bash
npm run deploy
```

Perintah ini akan build project lalu mem-push hasilnya ke branch `gh-pages`.
Lalu di **Settings → Pages**, pilih **Source: Deploy from a branch**, branch
`gh-pages`, folder `/ (root)`.

## 4. Struktur project

```
src/
  data/profile.js       ← semua konten (edit di sini)
  components/           ← tiap bagian halaman (Hero, About, Projects, dst.)
  App.jsx                ← menyusun urutan section
  index.css              ← warna, font, dan gaya global
public/
  profile.jpg             ← foto profil
.github/workflows/deploy.yml  ← otomatisasi deploy ke GitHub Pages
```

## 5. Menambah / mengubah project

Buka `src/data/profile.js`, cari array `projects`, lalu tambah/edit objeknya:

```js
{
  name: "nama-repo",
  description: "Deskripsi singkat project.",
  tags: ["Tag1", "Tag2"],
  lang: "Python",
  url: "https://github.com/dheamiradikna/nama-repo",
}
```
