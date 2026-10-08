// TODO(Level 1): beri tipe props yang benar — { judul: string }. Render
// <h1> berisi judul, DAN ubah judul tab browser (document.title) menjadi
// judul itu. Mengubah document.title adalah SIDE EFFECT — taruh di dalam
// useEffect (bukan di badan komponen), dan pastikan judul tab ikut berubah
// saat prop judul berubah.
// Lihat SOAL.md untuk kontrak lengkap.
import { useEffect } from "react";
export function JudulHalaman(props: {judul: string}) {
  useEffect(() => {
    document.title = props.judul;
  }, [props.judul]);
  return <h1>{props.judul}</h1>;
}
