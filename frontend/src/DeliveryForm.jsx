import { useState } from 'react'
import { optimize as mockOptimize } from './mock_api.js'

export default function DeliveryForm({ onResult, apiFn = mockOptimize }) {
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
    const resultado = await apiFn(entregas)
    onResult(resultado)
  }

  return (
    <div className="card">
      <div className="card-title">Cadastro de Entregas</div>

      <div className="form-row">
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
        <button className="btn btn-secondary" onClick={handleAdd}>
          Adicionar
        </button>
      </div>

      {entregas.length > 0 && (
        <ul className="delivery-list">
          {entregas.map((e) => (
            <li key={e.id} className="delivery-item">
              <span className="delivery-name">{e.nome}</span>
              <span className="delivery-badge">{e.duracao} min</span>
              <span className="delivery-badge deadline">prazo: {e.deadline} min</span>
            </li>
          ))}
        </ul>
      )}

      <button
        className="btn btn-primary"
        onClick={handleOptimize}
        disabled={entregas.length === 0}
      >
        Otimizar
      </button>
    </div>
  )
}
