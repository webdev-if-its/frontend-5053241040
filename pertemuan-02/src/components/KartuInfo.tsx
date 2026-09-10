// TODO(Level 10, bonus): beri tipe props yang benar — { judul: string;
// catatan?: string; children: ReactNode } (catatan OPSIONAL). Render:
// - judul (selalu tampil)
// - catatan (HANYA tampil kalau diberikan — jangan sampai teks "undefined"
//   ikut muncul kalau catatan tidak diisi)
// - children (selalu tampil)
// Lihat SOAL.md untuk kontrak lengkap.
type Props = {
  judul: string;
  catatan?: string;
  children: React.ReactNode;
};
export function KartuInfo({ judul, catatan, children }: Props) {
  return (
    <div>
      <h3>{judul}</h3>
      {catatan && <p>{catatan}</p>}
      {children}
    </div>
  );
}
