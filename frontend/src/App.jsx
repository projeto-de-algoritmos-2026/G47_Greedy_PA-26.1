import { useState } from 'react'
import DeliveryForm from './DeliveryForm.jsx'
import { optimize } from './api.js'
import { useEffect, useState } from "react"
import "./App.css"
import Timeline from "./components/Timeline"
import MetricsPanel from "./components/MetricsPanel"
import mockData from "./mock_data"
import { metrics as metricsRequest } from "./services/api"
// descomente quando os componentes estiverem implementados:
// import Timeline from './Timeline.jsx'
// import MetricsPanel from './MetricsPanel.jsx'

export default function App() {
  const [resultado, setResultado] = useState(null)

  return (
    <div>
      <h1>Planejador de Entregas</h1>

      <DeliveryForm onResult={setResultado} apiFn={optimize} />

      {resultado && (
        <div>
          {/* descomente quando os componentes estiverem implementados: */}
          {/* <Timeline resultado={resultado} /> */}
          {/* <MetricsPanel resultado={resultado} /> */}

          <pre>{JSON.stringify(resultado, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

function App() {
  const [metrics, setMetrics] = useState(null)
  useEffect(() => {
    async function loadMetrics() {
      try {
        const response = await metricsRequest(mockData)
        setMetrics(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    loadMetrics()
  }, [])
  return (
    <div className="app">
      <h1>
        Sistema de Otimização de Entregas
      </h1>
      {
        metrics && (
          <>
            <Timeline deliveries={metrics.details} />
            <MetricsPanel metrics={metrics} />
          </>
        )
      }
    </div>
  )
}
export default App

