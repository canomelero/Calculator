document.addEventListener("DOMContentLoaded", () => {

    const pantalla = document.querySelector(".num-pantalla");
    let cadena = "";
    let num_int = 0;
    const arrayBotones = [];

    // Se añaden los operadores
    arrayBotones.push(document.querySelector("#suma"));
    arrayBotones.push(document.querySelector("#resta"));
    arrayBotones.push(document.querySelector("#division"));
    arrayBotones.push(document.querySelector("#multiplicacion"));
    arrayBotones.push(document.querySelector("#modulo"));
    arrayBotones.push(document.querySelector("#punto"));
    arrayBotones.push(document.querySelector("#borrar"));
    arrayBotones.push(document.querySelector("#resolver"));
    
    // Se añaden los números
    arrayBotones.push(document.querySelector("#num0"));
    arrayBotones.push(document.querySelector("#num1"));
    arrayBotones.push(document.querySelector("#num2"));
    arrayBotones.push(document.querySelector("#num3"));
    arrayBotones.push(document.querySelector("#num4"));
    arrayBotones.push(document.querySelector("#num5"));
    arrayBotones.push(document.querySelector("#num6"));
    arrayBotones.push(document.querySelector("#num7"));
    arrayBotones.push(document.querySelector("#num8"));
    arrayBotones.push(document.querySelector("#num9"));


    // Se recorre el array hasta encontrar el botón sobre el que se ha pulsado
    const tam_array = arrayBotones.length;
    for(let i = 0; i < tam_array; i++) {
        arrayBotones[i].addEventListener('click', cargarValor);
    }


    // #### Funciones ####
    function cargarValor(evento) {
        const boton = evento.target.value;
    
        if(boton !== "=" && boton !== "C") {
            cadena += boton;
            agregarPantalla(cadena);
        }
        else if(boton === "=") {
            let resultado = eval(cadena);
            cadena = resultado;
            agregarPantalla(resultado);
        }

        console.log(num_int);
        // console.log(cadena);
    }

    function agregarPantalla(numero) {
        limpiarPantalla();
        const row = document.createElement("p");

        row.innerHTML = `
            <p>${numero}</p>
        `;
      
        pantalla.appendChild(row);
    }

    function limpiarPantalla() {
        while(pantalla.firstChild) {
            pantalla.removeChild(pantalla.firstChild);
        }
    }
});