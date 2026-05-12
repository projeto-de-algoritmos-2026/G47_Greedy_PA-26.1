# G47_Greedy_PA-26.1

## Nome do Projeto

**Número da Lista**: 1<br>
**Conteúdo da Disciplina**: Greedy Algorithms<br>

## Alunos

| Matrícula | Aluno                       |
| --------- | --------------------------- |
| 221022060 | Leonardo Fachinello Bonetti |
| 241025784 | João Paulo da Silva Pereira |

---

## Sobre

O projeto tem como objetivo aplicar algoritmos gulosos (*Greedy Algorithms*) para encontrar rotas mais eficientes entre diferentes pontos de uma cidade, utilizando dados reais de mapas através da biblioteca OSMnx.

A aplicação recebe uma origem e um destino informados pelo usuário e calcula diferentes estratégias de rotas, analisando fatores como:

* menor distância;
* economia de percurso;
* percentual de melhoria;
* comparação entre algoritmos;
* detalhes da rota encontrada.

O sistema possui:

* **Backend em Flask**, responsável pelos algoritmos, cálculos e API;
* **Frontend web**, responsável pela interface visual e exibição dos resultados;
* Integração com grafos utilizando:

  * OSMnx
  * NetworkX

O projeto demonstra, na prática, como algoritmos gulosos podem ser utilizados para resolver problemas reais de otimização de caminhos.

---

## Screenshots

### Tela Inicial

Adicione aqui uma imagem da tela inicial do sistema.

### Resultado das Rotas

Adicione aqui uma imagem mostrando as rotas calculadas.

### Comparação dos Algoritmos

Adicione aqui uma imagem exibindo as métricas e economia gerada.

---

## Instalação

**Linguagem**: Python<br>
**Framework**: Flask<br>

### Pré-requisitos

Antes de começar, você precisará ter instalado:

* Python 3.10 ou superior
* pip
* Git

---

### Clone o repositório

```bash
git clone https://github.com/projeto-de-algoritmos-2026/G47_Greedy_PA-26.1.git
```

Entre na pasta do projeto:

```bash
cd G47_Greedy_PA-26.1
```

---

### Criar ambiente virtual

Linux/Mac:

```bash
python3 -m venv venv
source venv/bin/activate
```

Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

---

### Instalar dependências

```bash
pip install -r requirements.txt
```

---

## Execução

### Rodar o backend

Entre na pasta backend:

```bash
cd backend
```

Execute:

```bash
python app.py
```

O servidor iniciará em:

```bash
http://localhost:5000
```

---

### Rodar o frontend

Abra outro terminal e entre na pasta frontend:

```bash
cd frontend
```

Caso utilize Live Server:

```bash
Clique com o botão direito em index.html → Open with Live Server
```

Ou abra diretamente o arquivo `index.html` no navegador.

---

## Uso

1. Abra o frontend no navegador;
2. Informe:

   * ponto de origem;
   * ponto de destino;
3. Escolha a estratégia disponível;
4. Execute a busca da rota;
5. Visualize:

   * caminho encontrado;
   * distância total;
   * economia gerada;
   * percentual de melhoria;
   * detalhes da rota.

---

## Estrutura do Projeto

```bash
G47_Greedy_PA-26.1
│
├── backend/
│   ├── algorithms/
│   ├── services/
│   ├── metrics.py
│   ├── app.py
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## Tecnologias Utilizadas

* Python
* Flask
* OSMnx
* NetworkX
* HTML
* CSS
* JavaScript

---

## Outros

Este projeto foi desenvolvido para a disciplina de Projeto de Algoritmos da Universidade de Brasília (UnB), com foco na aplicação prática de algoritmos gulosos em problemas de grafos e otimização de caminhos.

Repositório oficial:

[G47_Greedy_PA-26.1](https://github.com/projeto-de-algoritmos-2026/G47_Greedy_PA-26.1.git?utm_source=chatgpt.com)
