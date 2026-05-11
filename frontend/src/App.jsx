import { useState } from 'react'
import DeliveryForm from './DeliveryForm.jsx'
import Timeline from './components/Timeline'
import MetricsPanel from './components/MetricsPanel'
import { optimize } from './api.js'
import mockData from './mock_data'
import './App.css'

export default function App() {
  const [resultado, setResultado] = useState(mockData)

  return (
    <div className="app">
      <div className="app-header">
        <h1>Planejador de Entregas</h1>
        <p>Minimize o maior atraso ordenando entregas por prazo</p>
      </div>

      <DeliveryForm onResult={setResultado} apiFn={optimize} />

      {resultado && (
        <>
          <div className="card">
            <div className="card-title">Comparativo de Ordem</div>
            <Timeline resultado={resultado} />
          </div>

          <div className="card">
            <div className="card-title">Métricas</div>
            <MetricsPanel resultado={resultado} />
          </div>
        </>
      )}
    </div>
  )
}
