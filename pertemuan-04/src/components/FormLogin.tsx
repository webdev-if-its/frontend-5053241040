// TODO(Level 4): beri tipe props yang benar — { onLogin: (email: string) =>
// void }. Render <form> berisi input berlabel "Email" dan tombol submit
// "Masuk". Saat form dikirim: cegah reload halaman (e.preventDefault()),
// lalu panggil onLogin dengan isi email.
// Lihat SOAL.md untuk kontrak lengkap.
export function FormLogin(props: {
  onLogin: (email: string) => void;
}) {
  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("email") as HTMLInputElement;
    props.onLogin(input.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input name="email"/>
      </label>
      <button type="submit">
        Masuk
      </button>
    </form>
  );
}

