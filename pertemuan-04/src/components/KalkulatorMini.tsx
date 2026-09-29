// TODO(Level 8): komponen TANPA props. Render dua input angka berlabel
// "Angka A" dan "Angka B" (type="number") dan teks "Hasil: {A + B}".
// Ingat: e.target.value SELALU string — ubah ke number sebelum dijumlahkan,
// dan input kosong dianggap 0.
// Lihat SOAL.md untuk kontrak lengkap.
import {useState} from "react"
export function KalkulatorMini() {
  const [angkaA, setAngkaA] = useState(0);
  const [angkaB, setAngkaB] = useState(0);
  function handleA(
    e: React.ChangeEvent<HTMLInputElement>) {
      setAngkaA(Number(e.target.value))
    }
  function handleB(
    e: React.ChangeEvent<HTMLInputElement>){
      setAngkaB(Number(e.target.value)) 
    }
  return (
    <div>
      <label>
        Angka A 
        <input type="number" value={angkaA} onChange={handleA}/>
      </label>
      <label>
      Angka B
      <input type="number" value={angkaB} onChange={handleB}/>
      </label>
      <p>Hasil: {angkaA+angkaB}</p>
    </div>
  )
  
}
