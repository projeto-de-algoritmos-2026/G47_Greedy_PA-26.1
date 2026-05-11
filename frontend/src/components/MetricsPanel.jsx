import './MetricsPanel.css'

function MetricsPanel({ resultado }) {
  if (!resultado) return null

  const { max_atraso_antes, max_atraso_depois } = resultado
  const economia = max_atraso_antes - max_atraso_depois
  const percentual = max_atraso_antes > 0
    ? Math.round((economia / max_atraso_antes) * 100)
    : 0

  return (
    <div className="metrics-panel">
      <div className="metrics-grid">
        <div className="metric-card danger">
          <h3>Maior atraso antes</h3>
          <div className="metric-value">{max_atraso_antes} <span>min</span></div>
          <div className="metric-sub">na ordem original</div>
        </div>

        <div className="metric-card savings">
          <h3>Maior atraso depois</h3>
          <div className="metric-value">{max_atraso_depois} <span>min</span></div>
          <div className="metric-sub">após otimização</div>
        </div>

        <div className="metric-card savings">
          <h3>Economia</h3>
          <div className="metric-value">{percentual}%</div>
          <div className="metric-sub">{economia} min a menos no pior atraso</div>
        </div>
      </div>
    </div>
  )
}

export default MetricsPanel
