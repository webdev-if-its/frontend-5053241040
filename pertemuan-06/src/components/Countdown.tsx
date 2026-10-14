// TODO(Level 9): beri tipe props yang benar — { detikAwal: number;
// onSelesai: () => void }. Tampilkan "Sisa: {n}" yang mulai dari detikAwal
// dan berkurang 1 tiap detik. Saat mencapai 0: panggil onSelesai TEPAT
// SEKALI, berhenti di 0 (tidak negatif), dan tidak ada timer tersisa.
// Saat komponen dilepas di tengah jalan, timer harus dibersihkan dan
// onSelesai tidak boleh terpanggil.
// Lihat SOAL.md untuk kontrak lengkap.
import { useEffect, useState } from 'react'
export function Countdown(props: {detikAwal: number; onSelesai: () => void}) {
  const [sisa, setSisa] = useState(props.detikAwal)
  useEffect(() => {
    if (sisa <= 0) {
      props.onSelesai()
      return
    }
    const timer = setInterval(() => {
      setSisa((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [sisa, props.onSelesai])
  return <p>Sisa: {sisa}</p>
}
