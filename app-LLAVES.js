///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPCION 1
//ERROR AL DESENCRIPTAR SI YA FUE DESENCRIPTADO Y SU RESULTADO SE ENCUENTRA EN EL AREA DE TEXTO DE RESULTADO
//POR EJEMPLO SI LA PALABRA "JAMES" SE ENCUENTRA EN EL RESULTADO Y SE DESENCRIPTA A "JAIMENTERS"
//SE OBTIENE COMO RESULTADO "JA". POR ESO NO SE HA CONSIDERADO ESTA SOLUCION
//EL ERROR DESCRITO ANTERIORMENTE, ES GENERADO POR EL USO DE .REVERSE()
/*
// Matriz de claves
var matrizClave = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
];

// Función para encriptar
function encriptar(inputText) {
    var result = procesarTexto(inputText, 'encrypt');
    return result;
}

// Función para desencriptar
function desencriptar(inputText) {
    var result = procesarTexto(inputText, 'decrypt');
    return result;
}

// Función para procesar el texto
function procesarTexto(msg, action) {
    var k = [0, 1];
    if (action === 'decrypt') {
        k=k.reverse();
        matrizClave=matrizClave.reverse();
    }
    for (let i = 0; i < matrizClave.length; i++) {
        msg = msg.replaceAll(matrizClave[i][k[0]], matrizClave[i][k[1]]);
    }
    return msg;
}
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPCION 2
/*
// Definir la matriz de llaves de encriptación

var llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  
// Definir una función que encripta un texto dado
function encriptar(texto) {
// Crear una variable para almacenar el texto encriptado
var encriptado = "";
// Recorrer cada letra del texto
for (var i = 0; i < texto.length; i++) {
    // Obtener la letra actual
    var letra = texto[i];
    // Buscar si la letra tiene una llave de encriptación
    var encontrada = false;
    for (var j = 0; j < llaves.length; j++) {
    // Comparar la letra con la primera columna de la llave
    if (letra == llaves[j][0]) {
        // Si coincide, reemplazar la letra por la segunda columna de la llave
        encriptado += llaves[j][1];
        // Marcar que se encontró la llave
        encontrada = true;
        // Salir del bucle interno
        break;
    }
    }
    // Si no se encontró la llave, mantener la letra original
    if (!encontrada) {
    encriptado += letra;
    }
}
// Devolver el texto encriptado
return encriptado;
}

// Definir una función que desencripta un texto dado
function desencriptar(texto) {
// Crear una variable para almacenar el texto desencriptado
var desencriptado = "";
// Recorrer cada letra del texto
for (var i = 0; i < texto.length; i++) {
    // Obtener la letra actual
    var letra = texto[i];
    // Buscar si la letra forma parte de una llave de encriptación
    var encontrada = false;
    for (var j = 0; j < llaves.length; j++) {
    // Comparar la letra con la primera letra de la segunda columna de la llave
    if (letra == llaves[j][1][0]) {
        // Si coincide, verificar si el resto de la segunda columna de la llave también coincide
        var coincidencia = true;
        for (var k = 1; k < llaves[j][1].length; k++) {
        // Si alguna letra no coincide, romper el bucle interno
        if (texto[i + k] != llaves[j][1][k]) {
            coincidencia = false;
            break;
        }
        }
        // Si todas las letras coinciden, reemplazar la segunda columna de la llave por la primera columna
        if (coincidencia) {
        desencriptado += llaves[j][0];
        // Marcar que se encontró la llave
        encontrada = true;
        // Avanzar el índice del texto según la longitud de la llave
        i += llaves[j][1].length - 1;
        // Salir del bucle interno
        break;
        }
    }
    }
    // Si no se encontró la llave, mantener la letra original
    if (!encontrada) {
    desencriptado += letra;
    }
}
// Devolver el texto desencriptado
return desencriptado;
}  
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPCION 3

//Funciones encriptar/desencriptar

var llaves=[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];
function encriptar(mensaje){
    for(let i=0;i<llaves.length;i++){
    mensaje=mensaje.replaceAll(llaves[i][0],llaves[i][1]);
    }
    return mensaje;
}
//NO USAR llaves = llaves.reverse(); USAR LO SIGUIENTE:
var llavesReverse=[
    ["u","ufat"],
    ["o","ober"],
    ["a","ai"],
    ["i","imes"],
    ["e","enter"] 
];
function desencriptar(mensaje){
    for(let i=0;i<llavesReverse.length;i++){
    mensaje=mensaje.replaceAll(llavesReverse[i][1],llavesReverse[i][0]);
    }
    return mensaje;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPCION 4
//DESCARTAR ESTA OPCION. ERROR SIMILAR AL DE LA OPCION 1. CONCLUSION: ERROR GENERADO POR EL USO DE .REVERSE()

/*

var llaves = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
]
var llaveSelector=[0,1];
function encriptar(mensaje){  
for (let i = 0; i < llaves.length; i++) {
    mensaje = mensaje.replaceAll(llaves[i][llaveSelector[0]], llaves[i][llaveSelector[1]]);
}
return mensaje;
}
function desencriptar(mensaje){
llaveSelector=llaveSelector.reverse();
llaves=llaves.reverse();
for (let i = 0; i < llaves.length; i++) {
    mensaje = mensaje.replaceAll(llaves[i][llaveSelector[0]], llaves[i][llaveSelector[1]]);
}
return mensaje;
}

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPCION 5

// Función que encripta un texto usando las llaves de encriptación
/*
function encriptar(texto) {
// Reemplaza cada letra por su correspondiente llave
texto = texto.replace(/e/g, "enter");
texto = texto.replace(/i/g, "imes");
texto = texto.replace(/a/g, "ai");
texto = texto.replace(/o/g, "ober");
texto = texto.replace(/u/g, "ufat");
// Devuelve el texto encriptado
return texto;
}

// Función que desencripta un texto usando las llaves de encriptación
function desencriptar(texto) {
// Reemplaza cada llave por su correspondiente letra
texto = texto.replace(/ufat/g, "u");
texto = texto.replace(/ober/g, "o");
texto = texto.replace(/ai/g, "a");
texto = texto.replace(/imes/g, "i");
texto = texto.replace(/enter/g, "e");
// Devuelve el texto desencriptado
return texto;
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPCION 6

// Objeto que guarda las llaves de encriptación
/*
var llaves = {
"e": "enter",
"i": "imes",
"a": "ai",
"o": "ober",
"u": "ufat"
};

// Función que encripta el texto
function encriptar(texto) {
// Expresión regular que busca las letras que tienen llave
var regex = /[eiaou]/g;
// Reemplaza las letras por los valores de las llaves usando una función de callback
var encriptado = texto.replace(regex, function(match) {
return llaves[match];
});
return encriptado;
}

// Función que desencripta el texto
function desencriptar(texto) {
// Expresión regular que busca los valores de las llaves
var regex = /enter|imes|ai|ober|ufat/g;
// Reemplaza los valores de las llaves por las letras usando una función de callback
var desencriptado = texto.replace(regex, function(match) {
// Busca la llave que tiene el valor coincidente
for (var llave in llaves) {
    if (llaves[llave] == match) {
        return llave;
    }
}
});
return desencriptado;
}*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPCION 7
/*
//Objeto que guarda las llaves de encriptación
var llaves = {
"e": "enter",
"i": "imes",
"a": "ai",
"o": "ober",
"u": "ufat"
};

// Función que encripta el texto
function encriptar(texto) {
var encriptado = "";
for (var i = 0; i < texto.length; i++) {
var letra = texto[i];
if (llaves[letra]) {
    // Si la letra tiene una llave, la reemplaza por el valor
    encriptado += llaves[letra];
} else {
    // Si no, la deja igual
    encriptado += letra;
}
}
return encriptado;
}

//Función que desencripta el texto
function desencriptar(texto) {
var desencriptado = "";
var i = 0;
while (i < texto.length) {
var letra = texto[i];
var encontrado = false;
// Busca si la letra es el inicio de una llave
for (var llave in llaves) {
    var valor = llaves[llave];
    var longitud = valor.length;
    // Compara el texto con el valor de la llave
    if (texto.substring(i, i + longitud) == valor) {
        // Si coincide, lo reemplaza por la llave
        desencriptado += llave;
        // Avanza el índice según la longitud del valor
        i += longitud;
        encontrado = true;
        break;
    }
}
if (!encontrado) {
    // Si no encuentra ninguna llave, deja la letra igual
    desencriptado += letra;
    i++;
}
}
return desencriptado;
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*/ Función que copia el texto de un elemento al portapapeles
function copiar(elemento) {
// Selecciona el texto del elemento
elemento.select();
// Copia el texto al portapapeles
navigator.clipboard.writeText(elemento.value);
}*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Función que copia el texto de un elemento al portapapeles
function copiar(elemento) { 
    // Selecciona el texto del elemento
    elemento.select();
    // Copia el texto al portapapeles
    document.execCommand("copy");
    if(elemento.value==""){alert("El texto está vacío. Ingrese un texto para procesarlo")}else{
    alert("Texto copiado al portapapeles");}
    }
    // Función que limpia el texto de un elemento
    function limpiar(elemento) {
        // Borro el texto del elemento
        elemento.value = "";
    }
    // Función que limpia el portapapeles
    function limpiarPortapapeles() {
        // Limpio el portapapeles
        navigator.clipboard.writeText("");
    }
// Función que valida que el texto introducido sea válido
function validar(texto) {
    // Creo una expresión regular para buscar caracteres no permitidos
    var regex = /[A-ZÁÉÍÓÚáéíóú]/g;
    // Verifico si el texto contiene caracteres no permitidos
    if (regex.test(texto)) {
        // Muestro un mensaje de error
        alert("El texto contiene caracteres no permitidos. Solo se aceptan letras minúsculas sin tilde.");
        // Devuelvo falso
        return false;
    } else {
        // Devuelvo verdadero
        return true;
    }
}
// Función que procesa el texto según la opción elegida
function procesar(opcion) {
    // Obtengo el elemento que contiene el texto original
    var textoIngresado = document.getElementById("texto");
    // Obtengo el elemento que contiene el texto encriptado
    var textoProcesado = document.getElementById("resultado");
    // Obtengo el valor del texto original
    var texto = textoIngresado.value;
    // Verifico que el texto no esté vacío
    if (texto != "") {
        // Verifico que el texto sea válido
        if (validar(texto)) {
            // Verifico la opción elegida
            if (opcion == "encriptar") {
                // Encripto el texto y lo asigno al texto encriptado
                textoProcesado.value = encriptar(texto);
            } else if (opcion == "desencriptar") {
                // Desencripto el texto y lo asigno al texto encriptado
                textoProcesado.value = desencriptar(texto);
            }
            }
            // Limpio el texto original
            limpiar(textoIngresado);
        } else {
        // Muestro un mensaje de error
        alert("El texto está vacío. Por favor, introduzca algún texto.");
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funcion onclick del boton Copiar
function onclickCopiar(){
    copiar(document.getElementById('resultado'));
    limpiar(document.getElementById('resultado'));
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funcion onclick del boton Limpiar
function onclickLimpiar(){
    limpiar(document.getElementById('texto')); 
    limpiar(document.getElementById('resultado'));
    limpiarPortapapeles();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
