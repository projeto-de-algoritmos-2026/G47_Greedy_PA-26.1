import { useState } from 'react'
import DeliveryForm from './DeliveryForm.jsx'
import { optimize } from './api.js'

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
