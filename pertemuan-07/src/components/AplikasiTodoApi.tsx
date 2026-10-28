// TODO(Level 8-10): komponen TANPA props — aplikasi todo yang tersambung ke
// API lewat fungsi di '../api/todos' (JANGAN memanggil fetch() langsung di
// sini):
// - saat pertama tampil: ambil daftar (getTodos) dan tampilkan sebagai <li>,
//   tiap <li> berisi checkbox berlabel title + tombol "Hapus",
// - form dengan input berlabel "Todo baru" + tombol "Tambah": panggil
//   addTodo(title), lalu tambahkan todo HASIL RESPONS ke akhir daftar dan
//   kosongkan input,
// - klik checkbox: panggil updateTodo(id, !completed), lalu ganti todo itu di
//   state dengan HASIL RESPONS,
// - klik "Hapus": panggil hapusTodo(id), lalu buang todo itu dari state.
// Lihat SOAL.md untuk kontrak lengkap.
import { useEffect, useState } from "react"
import { getTodos, addTodo, updateTodo, hapusTodo } from "../api/todos"
import type { Todo } from "../types"
export function AplikasiTodoApi() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState("")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  useEffect (() => {
    getTodos() .then ((data) => {
      setTodos(data);
    })
    .catch((err: unknown) => {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan yang tidak diketahui");
    })
    .finally(() => {
      setLoading(false);
    });
  },[]);
  async function handleTambah() {
    const judul = title.trim();
    if (judul === "") {
      return;
    }
    try {
      const todoBaru = await addTodo(judul);
      setTodos((todosSebelumnya) => [...todosSebelumnya, todoBaru]);
      setTitle("");
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan yang tidak diketahui");
    }
  }
  
async function handleToggle(todo: Todo) {
  try {
    const todoDiperbarui = await updateTodo(todo.id, !todo.completed)
    setTodos((todosSebelumnya) =>
      todosSebelumnya.map((item) =>
        item.id === todo.id ? todoDiperbarui : item
      )
    );
    setError(null);
  } catch (err: unknown) {
    setError(err instanceof Error ? err.message : "Terjadi kesalahan yang tidak diketahui")
  }
}

async function handleHapus(id: number) {
  try {
    await hapusTodo(id);
    setTodos((todosSebelumnya) =>
      todosSebelumnya.filter((todo) => todo.id !== id)
    );
    setError(null);
  } catch (err: unknown) {
    setError(err instanceof Error ? err.message : "Terjadi kesalahan yang tidak diketahui")
  }
}

  if (loading) {
    return <p>Memuat...</p>
  }

  return (<div>
    {error !== null && <p>Terjadi error: {error}</p>}
    <form onSubmit={(event) => {
        event.preventDefault();
        void handleTambah();
      }}> 
      <label htmlFor="todo-baru">Todo baru:</label>
      <input 
      id="todo-baru"
      value={title}
      onChange={(event) => setTitle(event.target.value)}/>
      <button type="submit">Tambah</button>
    </form>
    <ul>
      {todos.map((todo) => 
      <li key ={todo.id}>   
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => void handleToggle(todo)}
          aria-label={todo.title}/>
        <span>{todo.title}</span>
        <button
          type="button"
          onClick={() => void handleHapus(todo.id)}>
          Hapus
        </button>
      </li>
      )}
    </ul>
  </div>
  );
}
