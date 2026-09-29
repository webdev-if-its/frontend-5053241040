// TODO(Level 5): beri tipe props yang benar — { awal?: number }. Simpan
// angka di useState<number> (nilai awal = props.awal, default 0) dan render
// teks "Jumlah: {angka}" plus tiga tombol: "+" (tambah 1), "-" (kurangi 1),
// "Reset" (kembali ke nilai awal).
// Lihat SOAL.md untuk kontrak lengkap.
import { useState } from "react";
export function Penghitung(props: {awal?:number}) {
  const nilaiAwal = props.awal ?? 0;
  const [angka, setAngka] = useState(nilaiAwal);
  return (
    <div>
      <p>Jumlah: {angka}</p>
      <button onClick={() => setAngka(angka + 1)}>
        +
      </button>
      <button onClick={() => setAngka(angka - 1)}>
        -
      </button>
      <button onClick={() => setAngka(nilaiAwal)}>
        Reset
      </button>
    </div>
  );
}
