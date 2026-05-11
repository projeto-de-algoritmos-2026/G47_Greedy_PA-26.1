import "./Timeline.css"

function Timeline({ deliveries }) {

  return (

    <div className="timeline-container">

      <h2>Timeline de Entregas</h2>

      {
        deliveries.map((item, index) => (

          <div
            className="timeline-item"
            key={index}
          >

            <div
              className="line before"
              title={`Antes: ${item.before_distance} km`}
            />

            <div className="timeline-content">

              <h3>{item.delivery}</h3>

              <p>
                Economia: {item.saved} km
              </p>

            </div>

            <div
              className="line after"
              title={`Depois: ${item.after_distance} km`}
            />

          </div>
        ))
      }

    </div>
  )
}

export default Timeline
