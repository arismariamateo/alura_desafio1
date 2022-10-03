var btn1=document.querySelector(".btn-encriptar");
var btn2=document.querySelector(".btn-desencriptar");
var btn3=document.querySelector(".btn-copiar");

var munheco=document.querySelector(".contenedor-munheco");
var h3=document.querySelector(".contenedor-h3");
var parrafo=document.querySelector(".contenedor-parrafo");
var resultado=document.querySelector(".texto-resultado");


btn1.onclick=encriptar;
btn2.onclick=desencriptar;
btn3.onclick=copiar;



function encriptar(){
    ocultarAdelate();
    resultado.textContent=encriptarTexto(recuperarTexto());
    

}

function desencriptar(){
    ocultarAdelate();
    resultado.textContent=desencriptarTexto(recuperarTexto());
    
}

function recuperarTexto(){
    var area=document.querySelector(".area");
    return area.value
}




function ocultarAdelate(){
    munheco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");

}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal="";

    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal=textoFinal + "ai";
        }else
        if (texto[i] == "e"){
            textoFinal=textoFinal + "enter";
        }else
        if (texto[i] == "i"){
            textoFinal=textoFinal + "imesi";
        }else
        if (texto[i] == "o"){
            textoFinal=textoFinal + "ober";
        }else
        if (texto[i] == "u"){
            textoFinal=textoFinal + "ufat";
        }else{
            textoFinal=textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal="";

    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal=textoFinal + "a";
            i = i + 1;
        }else
        if (texto[i] == "e"){
            textoFinal=textoFinal + "e";
            i = i + 4;
        }else
        if (texto[i] == "i"){
            textoFinal=textoFinal + "i";
            i = i + 3;
        }else
        if (texto[i] == "o"){
            textoFinal=textoFinal + "o";
            i = i + 3;
        }else
        if (texto[i] == "u"){
            textoFinal=textoFinal + "u";
            i = i + 3;
        }else{
            textoFinal=textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function copiar() {
  var contenido = document.querySelector(".texto-resultado");
  contenido.select();
  document.e
}
  
  






