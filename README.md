# Untuk Olell ♡ Web Ulang Tahun

Web ulang tahun mobile-first bertema pink coquette. Tanpa framework dan tanpa build step, cukup HTML, CSS, dan JavaScript biasa.

## Isi halaman
Hero + hitung mundur ulang tahun, kue yang lilinnya bisa ditiup, galeri polaroid (Bab 1), video kenangan, linimasa (Bab 2), counter hari jadian, surat yang bisa dibuka (Bab 3), kartu "hal yang aku suka dari kamu", kejutan terakhir, dan tombol musik.

## Jalankan lokal
1. Buka `index.html` di browser, atau pakai VS Code extension **Live Server** (Go Live) kalau browser membatasi fitur lokal.
2. Cek tampilan di mode HP lewat DevTools (Ctrl/Cmd + Shift + M).

## Personalisasi (semua di `script.js`, objek `CONFIG`)
- `birthday`: tanggal ulang tahun, format `YYYY-MM-DD` (sekarang `2026-10-31`).
- `relationshipStart`: tanggal jadian untuk counter. Kosong = tampil petunjuk.
- `gallery`, `cover`: nama file foto dan caption.
- `timeline`: judul, tanggal, dan cerita kalian.
- `reasons`: kartu "hal yang aku suka dari kamu".
- `letter`, `surprise`: isi surat dan pesan kejutan.

## Ganti foto, video, musik
- Foto di `assets/photos/`: `cover.jpg`, `photo-01.jpg` sampai `photo-06.jpg`. Kalau belum ada, placeholder tampil otomatis.
- Video di `assets/video/our-moments.mp4`. Pakai MP4 pendek dan terkompresi supaya cepat dibuka di HP.
- Musik di `assets/audio/our-song.mp3`. Mulai setelah tombol **play our song** ditekan. Pakai lagu yang kamu berhak gunakan.

## Publish
GitHub Pages atau Netlify bisa dipakai gratis. Foto di repo publik bisa dilihat siapa pun, jadi pakai repo private atau hanya foto yang nyaman dibagikan.

## Jadi aplikasi
Dari sini bisa dibungkus jadi aplikasi HP, misalnya PWA (manifest + service worker, bisa di-"Add to Home Screen") atau Capacitor untuk APK/IPA.
