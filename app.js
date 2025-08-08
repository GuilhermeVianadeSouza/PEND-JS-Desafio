'use strict'

const botaoTrocarImagem = document.getElementById('trocar-imagem')

function trocarImagem(){
    const image = document.getElementById('image').value
    const imagemEscolhida = image.replace(' ', '-')

    document.documentElement.style.setProperty('--imagem-fundo', `var(--${imagemEscolhida})`)
}

botaoTrocarImagem.addEventListener('click', trocarImagem)

const containerCentral = document.querySelector('.tela-principal');
const botaoAutoTroca = document.getElementById('troca-automatica');

let animationOn = false

function ligarCarrossel(){
    animationOn = !animationOn

    containerCentral.classList.toggle('animacao-ativo')

    if (containerCentral.classList.contains('animacao-ativo')){
        botaoAutoTroca.textContent = 'Parar animação ativa'
    } else {
        botaoAutoTroca.textContent = 'Iniciar animação.'
    }
}

botaoAutoTroca.addEventListener('click', ligarCarrossel)