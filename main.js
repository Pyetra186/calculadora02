'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosTriplo = document.getElementById('botao-mostrar-numeros-triplo')

function mostarNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[i]
        container.appendChild(novoSpan)
    }
}
function mostarNumerosPares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros-pares')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
        if(numeros[i]% 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        }
    }
    function mostrarNumerosTriplo() {
        const numeros = document.getElementById('numeros').value.split(',')
        const container = document.getElementById('container-mostrar-numeros-triplo')
        container.replaceChildren('')
        const ultimoIndice = numeros.length
        for (let contador = 0; contador < ultimoIndice; contador++) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]*3
            container.appendChild(novoSpan)
        }
    }
    function mostrarNumerosImpar() {
        const numeros = document.getElementById('numeros').value.split(',')
        const container = document.getElementById('container-mostrar-numeros-impar')
        container.replaceChildren('')
        const ultimoIndice = numeros.length
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if(numeros[contador] % 2 == 0){
            const novaSpan = document.createElement('span')
            novaSpan.textContent = numeros[contador]*1+1
            container.appendChild(novaSpan)
            }
            if(numeros[contador] % 2 == 1){
            const novaSpan = document.createElement('span')
            novaSpan.textContent = numeros[contador]*1+2
            container.appendChild(novaSpan)
            }
        }
    }
    function mostrarNumeros3e5() {
        const numeros = document.getElementById('numeros').value.split(',')
        const container = document.getElementById('container-mostrar-numeros-3e5')
        container.replaceChildren('')
        const ultimoIndice = numeros.length
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if(numeros[contador]%3==0 && numeros[contador]%5==0){
            const novaSpan = document.createElement('span')
            novaSpan.textContent = numeros[contador]
            container.appendChild(novaSpan)
            }
        }
    }
    function mostrarNumeros3ou5() {
        const numeros = document.getElementById('numeros').value.split(',')
        const container = document.getElementById('container-mostrar-numeros-3ou5')
        container.replaceChildren('')
        const ultimoIndice = numeros.length
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if(numeros[contador]%3==0 || numeros[contador]%5==0){
            const novaSpan = document.createElement('span')
            novaSpan.textContent = numeros[contador]
            container.appendChild(novaSpan)
            }
        }
    }
    function mostrarNumerosPrimos() {
        const numeros = document.getElementById('numeros').value.split(',')
        const container = document.getElementById('container-mostrar-numeros-primos')
        container.replaceChildren('')
        const ultimoIndice = numeros.length
        for (let contador = 0; contador < ultimoIndice; contador++) {
            if(numeros[contador]%numeros[contador]==1 && numeros[contador]%1==numeros[contador]){
            const novaSpan = document.createElement('span')
            novaSpan.textContent = numeros[contador]
            container.appendChild(novaSpan)
            }
        }
    }
}

botaoMostrarNumeros.addEventListener('click', mostarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostarNumerosPares)
botaoMostrarNumerosTriplo.addEventListener('click', mostrarNumerosTriplo)
botaoMostrarNumerosImpar.addEventListener('click', mostrarNumerosImpar)
botaoMostrarNumeros3e5.addEventListener('click', mostrarNumeros3e5)
botaoMostrarNumeros3ou5.addEventListener('click', mostrarNumeros3ou5)
botaoMostrarNumerosPrimos.addEventListener('click', mostrarNumerosPrimos)
