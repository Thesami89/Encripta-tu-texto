
function btnEncriptador(){
    let prueba1 = document.getElementById('mensaje').value
     document.getElementById('resultado').innerHTML = prueba1

    mostrarMensaje();        

}


function encriptador(frase){

    let newText = frase.
    replace(/e/g, 'enter').
    replace(/i/g, 'imes').
    replace(/a/g, 'ai').
    replace(/o/g, 'ober').
    replace(/u/g, 'ufat');

    return newText
}

function mostrarMensaje(){
    let prueba3 = document.getElementById('mensaje').value
    prueba3 = prueba3.toLowerCase();
    document.getElementById('resultado').innerHTML = encriptador(prueba3);
}

function btnDesencriptador(){
    let prueba1 = document.getElementById('mensaje').value
    document.getElementById('resultado').innerHTML = prueba1

    mostrarMensaje2();
}

function desencriptador(frase){

    let newText = frase.
    replace(/enter/g, 'e').
    replace(/imes/g, 'i').
    replace(/ai/g, 'a').
    replace(/ober/g, 'o').
    replace(/ufat/g, 'u');

    return newText
}

function mostrarMensaje2(){
    let prueba4 = document.getElementById('mensaje').value
    prueba4 = prueba4.toLowerCase();
    document.getElementById('resultado').innerHTML = desencriptador(prueba4);
}