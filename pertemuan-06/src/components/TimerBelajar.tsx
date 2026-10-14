// TODO(Level 10): beri tipe props yang benar — { detikAwal: number }.
// Gabungkan semua materi pertemuan ini jadi timer belajar:
// - teks "Sisa: {n} detik" (mulai dari detikAwal), tombol "Mulai"/"Jeda"
//   (bergantian) dan tombol "Reset",
// - saat berjalan, sisa berkurang tiap detik; "Jeda" menghentikan timer
//   (tidak ada timer tersisa); "Reset" mengembalikan sisa ke detikAwal
//   dan berhenti,
// - saat sisa = 0: tampil teks "Selesai!", timer berhenti otomatis, dan
//   tombol "Mulai" dinonaktifkan (disabled),
// - judul tab (document.title) selalu "Sisa: {n} detik" selama komponen
//   terpasang, dan KEMBALI ke judul semula saat komponen dilepas
//   (cleanup).
// Lihat SOAL.md untuk kontrak lengkap.
import { useEffect, useState } from 'react'
export function TimerBelajar(props: {detikAwal: number}) {
  const [sisa, setSisa] = useState(props.detikAwal);
  const [jalan, setJalan] = useState(false);
  useEffect(() => {
    if (!jalan || sisa <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setSisa((nilai) => nilai - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [jalan, sisa]);
  useEffect(() => {
    const judulSebelumnya = document.title;

    document.title = `Sisa: ${sisa} detik`;
    return () => {
      document.title = judulSebelumnya;
    };
  }, [sisa]);
  useEffect(() => {
    if (sisa === 0) {
      setJalan(false);
    }
  }, [sisa]);
  const handleReset = () => {
    setSisa(props.detikAwal);
    setJalan(false);
  };
  const selesai = sisa === 0;
  return (
    <div>
      <p>Sisa: {sisa} detik</p>
      {selesai && <p>Selesai!</p>}
      <button
        onClick={() => setJalan((j) => !j)}
        disabled={selesai}
      >
        {jalan ? "Jeda" : "Mulai"}
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
