*Tugas Mobile Multiplatform*

1. Nama: Muhammad Ihsanul Fikri
2. Kelas: 5A Teknik Informatika
3. NIM: 2430511027

*Langkah-langkah:*
1. Ekstrak atau clone source code project ini.
2. Buka terminal atau command prompt, lalu arahkan (navigate) ke dalam root folder project (diary-app):
   cd path/ke/folder/diary-app
3. Jika folder node_modules belum ada (karena tidak disertakan saat pengumpulan), install dependencies terlebih dahulu dengan menjalankan:
   npm install
4. Jalankan development server Expo dengan perintah:
   npx expo start
5. Cara melihat aplikasi:
6. Perangkat Fisik: Buka aplikasi Expo Go di HP Anda, lalu scan QR Code yang muncul di terminal.
7. Android Emulator: Tekan tombol a pada terminal untuk membuka aplikasi langsung di emulator yang sedang berjalan.
8. Untuk menghentikan server, tekan Ctrl + C pada terminal.

*Fitur yang Diselesaikan:*
- Berdasarkan modul praktikum pertemuan 3, berikut adalah fitur yang telah berhasil diimplementasikan:
1. Design Tokens & Arsitektur Styling: Menggunakan src/styles/tokens.js untuk memusatkan nilai warna, spacing, radius, tipografi, dan breakpoint agar lebih konsisten dan rapi.
2. Interactive DiaryCard: Mengubah kartu statis menjadi komponen interaktif menggunakan Pressable dengan efek ripple pada Android dan penambahan accessibilityLabel.
3. Layout Responsif (1-2 Kolom): Menggunakan FlatList yang secara otomatis beradaptasi menampilkan 1 kolom pada perangkat mobile (layar kecil) dan 2 kolom pada layar lebar (seperti tablet).
4. Modal Detail: Menampilkan komponen DiaryDetailModal (lengkap dengan hero image) yang muncul di atas layar (tanpa berpindah screen) ketika sebuah DiaryCard ditekan.
5. Aksesibilitas Dasar: Penambahan kontras, target sentuh yang proporsional (> 44dp), serta label bantu (accessibilityLabel).
