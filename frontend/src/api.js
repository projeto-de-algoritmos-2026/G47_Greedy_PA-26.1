const BASE_URL = 'http://localhost:5000'

export async function optimize(entregas) {
  const res = await fetch(`${BASE_URL}/optimize`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ entregas }),
  })
  return res.json()
}

export async function metrics(resultado) {
  const res = await fetch(`${BASE_URL}/metrics`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(resultado),
  })
  return res.json()
}
