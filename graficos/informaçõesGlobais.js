const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const paragrafo document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que no planeta há ${dados.total_pessoas_mundo} de pessoas`
}

vizualizarinformacoesGlobais()