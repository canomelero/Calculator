document.addEventListener("DOMContentLoaded", () => {

    const pantalla = document.querySelector(".num-pantalla");
    let cadena = "";      // numero que se va a ir imprimiendo en la pantalla de la calculadora
    let numero = "";      // numero que se verá desde la consola del navegador
    let cont_punto = 0;   // variale para controlar que el número tenga máximo "un punto"
    const arrayBotones = [];

    // Se añaden los operadores
    for(let i = 1; i <= 5; i++) {
        arrayBotones.push(document.querySelector(`#operacion${i}`));
    }

    arrayBotones.push(document.querySelector("#punto"));
    arrayBotones.push(document.querySelector("#borrar"));
    arrayBotones.push(document.querySelector("#resolver"));
    
    // Se añaden los números
    for(let i = 0; i <= 9; i++) {
        arrayBotones.push(document.querySelector(`#num${i}`));
    }


    // Se recorre el array hasta encontrar el botón sobre el que se ha pulsado
    for(let i = 0; i < arrayBotones.length; i++) {
        arrayBotones[i].addEventListener('click', cargarValor);
    }


    // #### Funciones ####
    function cargarValor(evento) {
        let boton = evento.target.value;
    
        if(boton !== "=" && boton !== "C") { 
            cadena += boton;

            if(boton === "x") {
                boton = "*";
            }

            if(boton === ".") {
                cont_punto++;
            }

            if(cont_punto > 1) {
                agregarPantalla("SyntaxError");
                return;     // Si se introducen dos puntos, la función lanza un error
            }

            numero += boton;
            imprimirDatos(numero, cadena);
        }
        else if(boton === "=") {
            let resultado = eval(numero);
            cadena = resultado;
            numero = resultado;
            imprimirDatos(resultado, cadena);
        }
        else if(boton === "C") {
            numero = "";
            cadena = "";
            cont_punto = 0;
            imprimirDatos(numero, cadena);
        } 
    }

    function agregarPantalla(numero) {
        limpiarPantalla();
        const row = document.createElement("p");

        row.innerHTML = `
            <p>${numero}</p>
        `;
      
        pantalla.appendChild(row);
    }

    function imprimirDatos(numero, string) {
        agregarPantalla(string);
        console.log(numero);
    }

    function limpiarPantalla() {
        while(pantalla.firstChild) {
            pantalla.removeChild(pantalla.firstChild);
        }
    }
});