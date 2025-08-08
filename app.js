'use strict'

const botaoTrocarImagem = document.getElementById('trocar-imagem')

function trocarImagem(){
    const image = document.getElementById('image').value
    const imagemEscolhida = image.replace(' ', '-')

    document.documentElement.style.setProperty('--imagem-fundo', `var(--${imagemEscolhida}`)
}

function trocaAutomatica(){

}

botaoTrocarImagem.addEventListener('click', trocarImagem)