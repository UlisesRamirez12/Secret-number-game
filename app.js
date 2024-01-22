let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let maximoNumeros = 10;

parametrosIniciales();

function verificarIntento(){
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else
    {
        limpiarCaja();

        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número es menor');
        }else{
            asignarTextoElemento('p','El número es mayor');
        }

        intentos++;
    }
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroAleatorio() {
    let numAleatorio = Math.floor(Math.random()*maximoNumeros)+1;
    
    if(numerosSorteados.length == maximoNumeros){
        asignarTextoElemento('p','Se sortearon todos los números posibles');
    }

    if (numerosSorteados.includes(numAleatorio)) {
        
        return generarNumeroAleatorio();
    }else
    {
        numerosSorteados.push(numAleatorio);
        console.log(numerosSorteados);
        return numAleatorio;
    }
}

function parametrosIniciales(){

    asignarTextoElemento('p',`Dijete un número entre 1 y ${maximoNumeros}`);
    asignarTextoElemento('h1','Juego del número secreto');    
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
}

function reiniciarJuego() {
    parametrosIniciales();
    limpiarCaja();
    document.getElementById('reiniciar').setAttribute('disabled',true);//desabilidito el boton otra vez
}

function limpiarCaja() {
        document.querySelector('#valorUsuario').value = '';
}