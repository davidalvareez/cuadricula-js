//EJERCICIO 1
function ejercicio1() {
    //Le decimos que introduzca el numero y su letra del NIF
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var numeroNIF = prompt('Introduce tu numero del NIF');
    var letraNIF = prompt('Introduce la letra del NIF');
    if (numeroNIF < 99999999 && numeroNIF < 0) {
        alert('el numero no es correcto')
    } else {
        if (letraNIF.toUpperCase() == letras[numeroNIF % 23]) {
            alert('El NIF es correcto -> ' + numeroNIF + letraNIF);
        } else {
            alert('El NIF NO es correcto');
        }
    }
}
var funcion1 = function() {
    document.getElementById('resultadoContent').style.width = '400px';
    document.getElementById('resultadoContent').style.height = '100px';
    document.getElementById('resultadoContent').className = 'modalbox resize';
    document.getElementById("tituloResultado").innerHTML = 'Ejercicio 1';
    document.getElementById("contenidoResultado").innerHTML = '<a href="#" onclick="ejercicio1()">Calcular NIF/NIE</a>';
}



//EJERCICIO 2
var funcion2 = function() {
    document.getElementById('resultadoContent').style.width = '1000px';
    document.getElementById('resultadoContent').style.height = '500px';
    document.getElementById('resultadoContent').className = 'modalbox resize';
    document.getElementById("tituloResultado").innerHTML = 'Ejercicio 2';
    document.getElementById("contenidoResultado").innerHTML = '<p>Lorem ipsum dolor sit amet, <a href="http://prueba">consectetuer adipiscing elit</a>. Sed mattis enim vitae orci. Phasellus libero. Maecenas nisl arcu, consequat congue, commodo nec, commodo ultricies, turpis. Quisque sapien nunc, posuere vitae, rutrum' +
        'et, luctus at, pede. Pellentesque massa ante, ornare id, aliquam vitae, ultrices porttitor, pede. Nullam sit amet nisl elementum elit convallis malesuada. Phasellus magna sem, semper quis, faucibus ut, rhoncus non, mi. <a href="http://prueba2">Fusce porta</a>.' +
        'Duis pellentesque, felis eu adipiscing ullamcorper, odio urna consequat arcu, at posuere ante quam non dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis scelerisque. Donec lacus neque, vehicula in, eleifend vitae, venenatis' +
        'ac, felis. Donec arcu. Nam sed tortor nec ipsum aliquam ullamcorper. Duis accumsan metus eu urna. Aenean vitae enim. Integer lacus. Vestibulum venenatis erat eu odio. Praesent id metus.</p>' +
        '<p>Aenean at nisl. Maecenas egestas dapibus odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin consequat auctor diam. <a href="http://prueba">Ut bibendum blandit est</a>. Curabitur vestibulum. Nunc malesuada' +
        'porttitor sapien. Aenean a lacus et metus venenatis porta. Suspendisse cursus, sem non dapibus tincidunt, lorem magna porttitor felis, id sodales dolor dolor sed urna. Sed rutrum nulla vitae tellus. Sed quis eros nec lectus tempor lacinia. Aliquam' +
        'nec lectus nec neque aliquet dictum. Etiam <a href="http://prueba3">consequat sem quis massa</a>. Donec aliquam euismod diam. In magna massa, mattis id, pellentesque sit amet, porta sit amet, lectus. Curabitur posuere. Aliquam in elit. Fusce condimentum,' +
        'arcu in scelerisque lobortis, ante arcu scelerisque mi, at cursus mi risus sed tellus.</p>' +
        '<p>Donec sagittis, nibh nec ullamcorper tristique, pede velit feugiat massa, at sollicitudin justo tellus vitae justo. Vestibulum aliquet, nulla sit amet imperdiet suscipit, nunc erat laoreet est, a <a href="http://prueba">aliquam leo odio sed sem</a>.' +
        'Quisque eget eros vehicula diam euismod tristique. Ut dui. Donec in metus sed risus laoreet sollicitudin. Proin et nisi non arcu sodales hendrerit. In sem. Cras id augue eu lorem dictum interdum. Donec pretium. Proin <a href="http://prueba4">egestas</a>        adipiscing ligula. Duis iaculis laoreet turpis. Mauris mollis est sit amet diam. Curabitur hendrerit, eros quis malesuada tristique, ipsum odio euismod tortor, a vestibulum nisl mi at odio. <a href="http://prueba5">Sed non lectus non est pellentesque</a>        auctor.</p>';
    // Numero de enlaces de la pagina
    var content = document.getElementById("contenidoResultado");
    var enlaces = content.getElementsByTagName("a");
    var msg = "Numero de enlaces = " + enlaces.length;

    // Direccion del penultimo enlace
    msg += "Direccion del penultimo enlace: " + enlaces[enlaces.length - 2].href;

    // Numero de enlaces que apuntan a http://prueba
    var contador = 0;
    for (i in enlaces) {
        if (enlaces[i].href == "http://prueba/") {
            contador++;

        }
    }
    msg += "Numero de enlaces que apuntan a http://prueba/ -> " + contador;

    // Numero de enlaces del tercer párrafo
    var parrafos = content.getElementsByTagName("p");
    enlaces = parrafos[2].getElementsByTagName("a");
    msg += "Numero de enlaces del tercer parrafo -> " + enlaces.length;
    content.innerHTML = msg + content.innerHTML;
}

//EJERCICIO 3
var funcion3 = function() {
    document.getElementById('resultadoContent').style.width = '400px';
    document.getElementById('resultadoContent').className = 'modalbox resize';
    document.getElementById("tituloResultado").innerHTML = 'Ejercicio 3';
    document.getElementById("contenidoResultado").innerHTML = '<a href="#" onclick="listarDiasSemana()">Los días de la semana son...</a>';
}

//EJERCICIO 4
var funcion4 = function() {
    document.getElementById('resultadoContent').style.width = '400px';
    document.getElementById('resultadoContent').className = 'modalbox resize';
    document.getElementById("tituloResultado").innerHTML = 'Ejercicio 4';
    document.getElementById("contenidoResultado").innerHTML = '<a href="#" onclick="listarDiasSemana()">Los días de la semana son...</a>';
}

//EJERCICIO 5
var funcion5 = function() {
    document.getElementById('resultadoContent').style.width = '400px';
    document.getElementById('resultadoContent').className = 'modalbox resize';
    document.getElementById("tituloResultado").innerHTML = 'Ejercicio 5';
    document.getElementById("contenidoResultado").innerHTML = '<a href="#" onclick="listarDiasSemana()">Los días de la semana son...</a>';
}

//EJERCICIO 6
var funcion6 = function() {
    document.getElementById('resultadoContent').style.width = '400px';
    document.getElementById('resultadoContent').className = 'modalbox resize';
    document.getElementById("tituloResultado").innerHTML = 'Ejercicio 6';
    document.getElementById("contenidoResultado").innerHTML = '<a href="#" onclick="listarDiasSemana()">Los días de la semana son...</a>';
}

//EJERCICIO 7
var funcion7 = function() {
    document.getElementById('resultadoContent').style.width = '400px';
    document.getElementById('resultadoContent').className = 'modalbox resize';
    document.getElementById("tituloResultado").innerHTML = 'Ejercicio 7';
    document.getElementById("contenidoResultado").innerHTML = '<a href="#" onclick="listarDiasSemana()">Los días de la semana son...</a>';
}

//EJERCICIO 8
var funcion8 = function() {
    document.getElementById('resultadoContent').style.width = '400px';
    document.getElementById('resultadoContent').className = 'modalbox resize';
    document.getElementById("tituloResultado").innerHTML = 'Ejercicio 8';
    document.getElementById("contenidoResultado").innerHTML = '<a href="#" onclick="listarDiasSemana()">Los días de la semana son...</a>';
}