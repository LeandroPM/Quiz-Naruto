const perguntas= [
    {
      pergunta: "Quem é o protagonista da série Naruto?",
      resposta: [
        "Sasuke Uchiha",
        "Naruto Uzumaki",
        "Sakura Haruno",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do mentor de Naruto?",
      resposta: [
        "Kakashi Hatake",
        "Jiraiya",
        "Orochimaru",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do jutsu de assinatura de Naruto?",
      resposta: [
        "Chidori",
        "Rasengan",
        "Amaterasu",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o líder da Akatsuki?",
      resposta: [
        "Madara Uchiha",
        "Obito Uchiha",
        "Pain (Nagato)",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do pai de Naruto?",
      resposta: [
        "Minato Namikaze",
        "Hiruzen Sarutobi",
        "Itachi Uchiha",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é conhecido como 'O Sábio dos Seis Caminhos'?",
      resposta: [
        "Hagoromo Ōtsutsuki",
        "Indra Ōtsutsuki",
        "Hashirama Senju",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a habilidade especial de Sasuke Uchiha?",
      resposta: [
        "Byakugan",
        "Sharingan",
        "Rinnegan",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a aldeia natal de Naruto?",
      resposta: [
        "Aldeia da Névoa",
        "Aldeia da Folha",
        "Aldeia da Areia",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o irmão mais velho de Sasuke Uchiha?",
      resposta: [
        "Itachi Uchiha",
        "Madara Uchiha",
        "Indra Ōtsutsuki",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a criatura que habita dentro de Naruto?",
      resposta: [
        "Kurama",
        "Shukaku",
        "Gamabunta",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz') //Ta identificando a ID do HTML
  const template = document.querySelector('template')
  
  const correta = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = correta.size + 'de' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true) 
    quizItem.querySelector('h3').textContent = item.pergunta
  
      for(let resposta of item.resposta) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta 
  
        correta.delete(item)
        if(estaCorreta) {
          correta.add(item)
        }
  
        mostrarTotal.textContent = correta.size + 'de' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }