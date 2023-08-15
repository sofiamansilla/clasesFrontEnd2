// Esta es la primera clase del curso Front End 2 de CDT.

// ------------------------------------------
// // C1A/Bienvenida - Buenas prácticas
// ------------------------------------------

//Los mensajes de consola tienen distintas variantes que permiten visualizar el resultado del código en la terminal
const consolasLogErrorWarn = () => {
  console.log("console.log : Esto escribe un mensaje por consola");
  console.error("console.error: Escribe un error por consola");
  console.warn("console.warn: Esto escribe una advertencia en consola");

  // la consola puede mostrar resultados de operaciones aritmeticas y relacionales
  let numero = 5;
  let numeroEnLetras = 5;

  console.log(numero == numeroEnLetras);
  console.log(numero === numeroEnLetras);
};
consolasLogErrorWarn();

// console.table es otra forma de visualizar un objeto o array en la
// consola de manera un poco más visual, por ejemplo:

const consoleTable = () => {
  console.log(
    "console.table: Las siguientes tablas muestran ordenados los objetos y array"
  );
  let miObjeto = {
    mensaje: "Mensaje de texto",
    utilidad: "prueba de JS",
  };

  let miArray = [
    "Primer mensaje del array",
    "Segundo mensaje del erray",
    "Tercer mensaje del array",
  ];
  console.table(miObjeto);
  console.table(miArray);
};
consoleTable();

// El metodo alert() pertenece al objeto window, muestra mensaje de alerta en pantalla
const mensajeAlerta = () => {
  alert("Esto es una alerta.");
};
mensajeAlerta();

alert("hola")


// Existen dos tipos de formas para vincular HTML y Javascript, interna y externa.
const vinculacionHtmlJS=()=>{
   
/* 
Vinculacion interna: Permite escribir código JS directamente en HTML

<body>
    ...
    <script>
        console.log("Hola Mundo!");
    </script>
</body>

Vinculación externa: Permite linkear nuestro HTML con un JS externo

<body>
    ...
    <script src="js/main.js"></script>
</body>

*/


};

/*Preguntas playground:
1) Ctrl, shift + i abre la consola del navegador
2) El resultado de console.log(5+5) es 10
3) Si se puede crear una variable directamente en consola
4) La consola es visible para todos los usuarios
5) A través de la consola puedo modificar las páginas web
6) La función principal de la consola es depurar páginas web
7) La consola no se puede desactivar en el sitio web por que es una herramienta del navegador
8) Al cerrar la consola no se pierden todos los cambios realizados en la misma
*/
