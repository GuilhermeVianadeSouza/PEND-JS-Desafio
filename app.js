'use strict'

const botaoTrocarImagem = document.getElementById('trocar-imagem')

function trocarImagem(){
    const image = document.getElementById('image').value
    document.documentElement.style.setProperty('--imagem-fundo', image)
}

function trocaAutomatica(){

}

botaoTrocarImagem.addEventListener('click', trocarImagem)