export async function optimize(entregas) {
  return {
    ordem_chegada: [
      { id: 1, nome: 'Supermercado', inicio: 0,   fim: 90,  deadline: 150, atraso: 0   },
      { id: 2, nome: 'Farmácia',     inicio: 90,  fim: 120, deadline: 60,  atraso: 60  },
      { id: 3, nome: 'Escola',       inicio: 120, fim: 180, deadline: 200, atraso: 0   },
      { id: 4, nome: 'Hospital',     inicio: 180, fim: 225, deadline: 120, atraso: 105 },
    ],
    ordem_otimizada: [
      { id: 2, nome: 'Farmácia',     inicio: 0,   fim: 30,  deadline: 60,  atraso: 0  },
      { id: 4, nome: 'Hospital',     inicio: 30,  fim: 75,  deadline: 120, atraso: 0  },
      { id: 1, nome: 'Supermercado', inicio: 75,  fim: 165, deadline: 150, atraso: 15 },
      { id: 3, nome: 'Escola',       inicio: 165, fim: 225, deadline: 200, atraso: 25 },
    ],
    max_atraso_antes: 105,
    max_atraso_depois: 25,
  }
}
