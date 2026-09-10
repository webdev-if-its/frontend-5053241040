// TODO(Level 8): beri tipe props yang benar — { judul: string; children: ReactNode }
// (impor tipe ReactNode dari 'react'). Render <section> berisi judul (mis.
// di <h3>) DAN {children} di dalamnya. Lihat SOAL.md untuk kontrak lengkap.
type Props = {
  judul: string;
  children: React.ReactNode;
};

export function Panel({ judul, children }: Props) {
  return (
    <section>
      <h3>{judul}</h3>
      {children}
    </section>
  );
}
