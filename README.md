# Semangat Damaiii Nurobbi! 👋

Website motivasi yang cute dan menyenangkan untuk teman spesial.

## Fitur

- ✨ Avatar melayang dengan animasi
- 🎨 Desain cute dan responsive
- 🎵 Background music (coming soon)
- 🖼️ Gambar karakter melayang di samping kanan dan kiri

## Struktur File

```
.
├── index.html       # File utama HTML
├── style.css        # Styling CSS
├── script.js        # JavaScript untuk musik
├── images/          # Folder berisi semua gambar
└── README.md        # File ini
```

## Cara Host di GitHub Pages

1. **Buat repository baru di GitHub:**
   - Pergi ke https://github.com/new
   - Nama repository: `nama-yang-kamu-mau` (atau `username.github.io` untuk domain utama)
   - Buat public repository

2. **Hubungkan lokal ke GitHub:**

   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/nama-repo.git
   git push -u origin main
   ```

3. **Aktifkan GitHub Pages:**
   - Buka settings repository GitHub
   - Ke bagian "Pages" di sidebar
   - Pilih branch `main` sebagai source
   - Save dan tunggu loading (biasanya 1-2 menit)

4. **Akses website:**
   - Jika nama repo regular: `https://username.github.io/nama-repo`
   - Jika nama repo `username.github.io`: `https://username.github.io`

## Troubleshooting

- Pastikan index.html ada di root directory
- Paths untuk images dan files harus relatif
- Tunggu beberapa menit untuk propagasi DNS
