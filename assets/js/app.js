/*  1.- crear div vacio para que contenga cada lista 
	2.- crear eventos de click para cada nueva interaccion:
		click que abra input + botones 
		click que permita guardar la lista en un div nuevo

*/

/*le quito el display al formulario que contiene el input */
document.getElementById("input-container").style.display = "none";
/*guardo en una variable la seccion*/
var listas = document.getElementById("listas");
/*rescato el contenedor de todo*/

/*funcion para que al hacer click se abra el input*/
var expand = document.getElementById("tablero");
expand.addEventListener("click", function() {
    var container = document.getElementById("big-container");
    /*rescato el div y el p que tienen el texto que indica añadir lista*/
    var tablero = document.getElementById("tablero");
    tablero.style.display = "none";
    /*rescato el contenedor del input*/
    var inputContainer = document.getElementById("input-container");
    inputContainer.style.display = "inline-block"
    /*rescato el input*/
    var input = document.getElementById("text-from-list");
});

var botoncillo = document.getElementById("boton-agregar");
botoncillo.addEventListener("click", function(){
    var contenedorListas = document.getElementById("list-container");
    document.getElementById("input-container").style.float = "left";
    document.getElementById("list-container").style.float = "left";
    /*obtener valor ingresado por el usuario*/
    var titulo = document.getElementById("text-from-list").value;
    /*limpiar el input*/
    document.getElementById("text-from-list").value="";
    /*creo el titulo de la lista*/
    var tituloLista = document.createTextNode(NombreLista);
    /*guardo todo en el contenedor*/
    var divContainer = document.createElement("div");
    divContainer.classList.add("divContainer");
    var parrafoDelTitulo = document.createElement("p");

    parrafoDelTitulo.appendChild(tituloLista);
    divContainer.appendChild(parrafoDelTitulo);
    contenedorListas.appendChild(divContainer);
});

/*Le hago click y desaparece... me rindo x.x */