const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const paragrafo document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que no planeta há ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_mundo} jogam algum jogo eletrônico e passam em média ${dados.tempo_medio} horas conectadas.`
    console.log(paragrafo)

    const container = document.getElementById('graficos-container')
}

vizualizarinformacoesGlobais()