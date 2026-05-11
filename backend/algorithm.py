def simulate_order(entregas):
    time = 0
    result = []
    for e in entregas:
        inicio = time
        fim = time + e['duracao']
        atraso = max(0, fim - e['deadline'])
        result.append({**e, 'inicio': inicio, 'fim': fim, 'atraso': atraso})
        time = fim
    return result


def minimize_lateness(entregas):
    ordem_chegada = simulate_order(entregas)

    sorted_entregas = sorted(entregas, key=lambda e: e['deadline'])
    ordem_otimizada = simulate_order(sorted_entregas)

    max_atraso_antes = max((e['atraso'] for e in ordem_chegada), default=0)
    max_atraso_depois = max((e['atraso'] for e in ordem_otimizada), default=0)

    return {
        'ordem_chegada': ordem_chegada,
        'ordem_otimizada': ordem_otimizada,
        'max_atraso_antes': max_atraso_antes,
        'max_atraso_depois': max_atraso_depois,
    }


if __name__ == '__main__':
    exemplo = [
        {'id': 1, 'nome': 'Supermercado', 'duracao': 90, 'deadline': 150},
        {'id': 2, 'nome': 'Farmácia',     'duracao': 30, 'deadline': 60},
        {'id': 3, 'nome': 'Escola',       'duracao': 60, 'deadline': 200},
        {'id': 4, 'nome': 'Hospital',     'duracao': 45, 'deadline': 120},
    ]
    resultado = minimize_lateness(exemplo)
    print('Max atraso antes: ', resultado['max_atraso_antes'])
    print('Max atraso depois:', resultado['max_atraso_depois'])
