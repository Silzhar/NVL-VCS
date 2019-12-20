// XMLHttpRequest: solicitud HTTP, crea instancia, abre URL y envía solicitud.
var lista_peliculas = new XMLHttpRequest();
lista_peliculas.onreadystatechange = function() {
    // JSON.parse() analiza la cadena de texto JSON. / this.responseText) : El contenido de la respuesta se recibe como texto.
    {
        var listado = JSON.parse(this.responseText);
        var i;
        var j;
        var datos = '';

        for (i in listado.peliculas) {
            for (j in listado.peliculas[i].description)
            datos += '<b>Nombre: </b>' + listado.peliculas[i].Nombre + '<br>';
            datos += '<b>Genero: </b>' + listado.peliculas[i].Genero + '<br>';
        }
    }
    //  document.getElementById : Selecciona un elemento del documento por su atributo id
    document.getElementById('datos').innerHTML = datos;
};

// Inicia el pedido.
xmlhttp.openRequest("GET", "lista.json", true);

// Lo envía.
xmlhttp.send();