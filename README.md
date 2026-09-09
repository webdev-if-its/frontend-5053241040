# frontend-nrp

Repo tugas mata kuliah **Frontend**, dibuat dari template [`webdev-if-its/frontend-template`](https://github.com/webdev-if-its/frontend-template). Ganti judul di atas jadi nama repo kalian sendiri (`frontend-nrp`, contoh: `frontend-5025201012`).

## Aturan Umum

- Tugas tiap pertemuan disimpan di folder `pertemuan-XX/` pada repo ini — masing-masing adalah project Vite + React + TypeScript sendiri (`npm install` terpisah per folder).
- Commit message wajib menyebut level yang dicapai: `pertemuan-XX: level N selesai`.
- Deadline push: sebelum pertemuan berikutnya dimulai.
- Semua level dicek otomatis lewat `npm run levels` (Vitest) — baca `pertemuan-XX/SOAL.md` tiap minggu untuk detail levelnya.

## Mengambil Pertemuan Baru Tiap Minggu

Repo ini **tidak otomatis sinkron** dengan template dosen. Begitu ada pertemuan baru, jalankan (ganti `pertemuan-02` sesuai minggu berjalan):

```bash
git fetch https://github.com/webdev-if-its/frontend-template.git main
git checkout FETCH_HEAD -- pertemuan-02
```

Perintah ini **aman dijalankan kapan pun** — tidak akan menimpa folder pertemuan lain yang sudah kalian kerjakan, karena hanya mengambil folder yang disebutkan. Setelah itu, `cd pertemuan-02 && npm install`, lalu commit folder barunya seperti biasa.

Kalau dosen memperbaiki sesuatu di pertemuan yang sudah dirilis (mis. ada bug di test), biasanya cukup ambil ulang file yang diperbaiki saja, bukan seluruh folder — akan diumumkan file mana yang berubah.

---

Bagian di bawah ini **isi bertahap** sesuai level yang sedang kalian kerjakan (lihat `pertemuan-XX/SOAL.md`) — heading-nya dicek otomatis, jangan diganti namanya.

## Struktur Project
dari yang saya baru pelajari dan pahami, `main.tsx` berperan sebagai titik awal untuk menjalankan aplikasi react dan menampilkan komponen App ke dalam elemen root yang ada di `index.html`. Sedangkan `app.tsx` berperan sebagai komponen utama yang menjadi tempat tampilan utama aplikasi yang dibuat dan ditampilkan

## Identitas
- Nama: Annisa Zahra Fitria
- NRP: 5053241040
- Kelas: M

## Commit vs Push
git commit itu digunakan untuk menyimpan perubahan yang sudah dibuat di repository lokal. kalau git push digunakan untuk mengirim commit dari repository lokal ke repository remote seperti github. 

Waktu pertama kali menggunakan github, saya pernah hanya melakukan commit dan tidak melakukan push. Ini terjadi karena saat itu pengetahuan saya masih kurang dimana harusnya juga melakukan push agar perubahan yang sudah dicommit bisa terlihat di repository github. Saya memyadarinya saat mengerjakan proyek bersama teman dimana saat teman saya mengecek repository ternyata belum ada perubahan yang terjadi. Dari pengalaman tersebut, saya jadi paham bahwa commit itu hanya untuk simpan perubahan di repository lokal dan push iyu untuk mengirim perubahan tersebut ke repository github

## JSX vs TSX
(tulis di sini)

## Kenapa Union Type untuk Status
(tulis di sini)

## Refleksi
(tulis di sini)
