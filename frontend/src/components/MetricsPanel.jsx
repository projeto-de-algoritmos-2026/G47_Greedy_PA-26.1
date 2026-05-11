import "./MetricsPanel.css"

function MetricsPanel({ metrics }) {

  if (!metrics) {

    return null
  }

  return (

    <div className="metrics-panel">

      <h2>Métricas Comparativas</h2>

      <div className="metrics-grid">

        <div className="metric-card">

          <h3>Distância</h3>

          <p>
            Antes: {metrics.before_distance} km
          </p>

          <p>
            Depois: {metrics.after_distance} km
          </p>

        </div>

        <div className="metric-card">

          <h3>Atrasos</h3>

          <p>
            Antes: {metrics.before_delay} min
          </p>

          <p>
            Depois: {metrics.after_delay} min
          </p>

        </div>

        <div className="metric-card savings">

          <h3>Economia</h3>

          <p>
            {metrics.savings} km economizados
          </p>

          <p>
            {metrics.savings_percent}%
          </p>

        </div>

      </div>

    </div>
  )
}

export default MetricsPanel
