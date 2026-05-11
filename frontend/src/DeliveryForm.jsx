import { useState } from 'react'
import { optimize } from './mock_api.js'

export default function DeliveryForm({ onResult }) {
  const [form, setForm] = useState({ nome: '', duracao: '', deadline: '' })
  const [entregas, setEntregas] = useState([])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleAdd() {
    if (!form.nome || !form.duracao || !form.deadline) return
    const nova = {
      id: entregas.length + 1,
      nome: form.nome,
      duracao: Number(form.duracao),
      deadline: Number(form.deadline),
    }
    setEntregas([...entregas, nova])
    setForm({ nome: '', duracao: '', deadline: '' })
  }

  async function handleOptimize() {
    if (entregas.length === 0) return
    const resultado = await optimize(entregas)
    onResult(resultado)
  }

  return (
    <div>
      <h2>Cadastro de Entregas</h2>

      <div>
        <input
          name="nome"
          placeholder="Nome da entrega"
          value={form.nome}
          onChange={handleChange}
        />
        <input
          name="duracao"
          type="number"
          placeholder="Duração (min)"
          value={form.duracao}
          onChange={handleChange}
        />
        <input
          name="deadline"
          type="number"
          placeholder="Prazo (min)"
          value={form.deadline}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Adicionar</button>
      </div>

      {entregas.length > 0 && (
        <ul>
          {entregas.map((e) => (
            <li key={e.id}>
              {e.nome} — {e.duracao} min — prazo: {e.deadline} min
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleOptimize} disabled={entregas.length === 0}>
        Otimizar
      </button>
    </div>
  )
}
