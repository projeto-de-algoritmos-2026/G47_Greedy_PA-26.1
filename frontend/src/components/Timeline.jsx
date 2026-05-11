import './Timeline.css'

function DeliveryBlock({ entrega, totalMin }) {
  const left  = (entrega.inicio / totalMin) * 100
  const width = ((entrega.fim - entrega.inicio) / totalMin) * 100
  const atrasado = entrega.atraso > 0

  return (
    <div
      className={`delivery-block ${atrasado ? 'atrasado' : ''}`}
      style={{ left: `${left}%`, width: `${width}%` }}
      title={`${entrega.nome} | ${entrega.inicio}–${entrega.fim} min | prazo: ${entrega.deadline} min | atraso: ${entrega.atraso} min`}
    >
      <span className="block-label">{entrega.nome}</span>
    </div>
  )
}

function Timeline({ resultado }) {
  if (!resultado) return null

  const { ordem_chegada, ordem_otimizada } = resultado
  const totalMin = Math.max(
    ...ordem_chegada.map(e => e.fim),
    ...ordem_otimizada.map(e => e.fim),
  )

  return (
    <div className="timeline-container">
      <div className="timeline-legend">
        <span><span className="legend-dot no-delay" />Sem atraso</span>
        <span><span className="legend-dot delay" />Com atraso</span>
      </div>

      <div className="timeline-section">
        <div className="section-label">Ordem original</div>
        <div className="track">
          {ordem_chegada.map(e => (
            <DeliveryBlock key={e.id} entrega={e} totalMin={totalMin} />
          ))}
        </div>
      </div>

      <div className="timeline-section">
        <div className="section-label">Ordem otimizada</div>
        <div className="track">
          {ordem_otimizada.map(e => (
            <DeliveryBlock key={e.id} entrega={e} totalMin={totalMin} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
