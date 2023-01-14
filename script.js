/*a - ai 
e - enter 
i - imes 
o - ober 
u - ufat */

function encriptar(){
    var texto = document.getElementById("txtEncriptar").value.toLowerCase(); //value.toLowerCase() para que convierta las mayusculas a minusculas
    
    //i para que afecte mayusculas como minusculas
    //g es para toda la linEa U oración
    //m para que afecte a multiples linea o parafos
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgderecha").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    

    document.getElementById("texto2").innerHTML = txtCifrado;

    document.getElementById("btnCopiar").style.display = "show";

    document.getElementById("btnCopiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("txtEncriptar").value.toLowerCase();
    
    //i para que afecte mayusculas como minusculas
    //g es para toda la lina o oracuión
    //m para que afecte a multiples linea o parafos
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imgderecha").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    

    document.getElementById("texto2").innerHTML = txtCifrado;

    document.getElementById("btnCopiar").style.display = "show";

    document.getElementById("btnCopiar").style.display = "inherit";
}

function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select() /*Nota personal xd, para que funcione la propiedad 
    select el #texto2 debe de ser tipo textarea, no etiqueta p*/

    document.execCommand("copy");
    alert("Copiado");
}

