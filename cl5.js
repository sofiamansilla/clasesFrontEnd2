// Esta es la quinta clase del curso Front End 2 de CDT.

// ------------------------------------------
// // C5A/Trajando con nodos
// ------------------------------------------

// Los nodos son elementos o etiquetas del HTML que en conjunto forman un "arbol de nodos" al que llamamos DOM (Document Objet Model). En JS el nodo objeto principal es el document, y dentro de él, se clasifican los otros: Todas las etiquetas del HTML que son nodos de elementos, los nodos de atributos de los elementos, los nodos de texto y los nodos de comentarios.

const Introduccion = () => {
  //Esqueleto de nodos que representa la estructura base de una web

  // <html>
  // <head>
  //     <meta>
  // </head>
  // <body>
  //     <header>
  //         <!-- comentario  -->
  //         <h1 class=""></h1>
  //         <nav></nav>
  //     </header>
  //     <footer>
  //         <p></p>
  //         <a href="">  </a>
  //     </footer>
  // </body>

  //Métodos específicos para crear nodos en el HTML en JS y luego insertarlos al DOM:

  createElement(
    "Crea un nodo de tipo elemento según el nombre de la etiqueta de HTML que le indiquemos"
  );

  createTextNode(
    "Crea un nodo de texto explicitado entre comillas. No se visualiza hasta asignarlo a un elemento existente del DOM"
  );

  appendChild(
    "Adhiere dentro del DOM un elemento hijo a un elemento padre. Si el elemento padre ya existía en el documento, cambia su posición hacia el otro elemento padre indicado. Si no existe, lo creamos con el método 1."
  );

  /** Sintaxis para crear un nodo elemento
   *  Objeto (document): Se especifica el objeto document como prefijo, sin este dato no se creará el nodo, por lo que debe utilizarse siempre.
   *  Método (create): Aqui definiremos el método que usamos para creear el nodo según el tipo que necesitemos. En este caso, createElemento para crear una etiqueta input.
   *  Elemento (input): Aquí colocaremos el nombre del nodo que queramos crear en el DOM. Por ejemplo "button", "div", "section", etcétera.
   */

  document.createElement("input");
  document.createTextNode("Hola Mundo");

  /** Sintaxis para adherir un elemento hijo al DOM
   * Objeto (elemento padre): En este caso, se incorpora inmediatamente después del body. También podríamos, por ejemplo, seleccionar al elemento padre por su ID.
   * Método (appendChild): Gracias a este método podremos asignarle el elemento hijo a un elemento padre y visualizar los cambios por pantalla en el navegador
   * Variable (elemento hijo): Es indispensable colocar la variable en donde almacenamos previamente el elemento hijo seleccionado o creado para que se pueda posicionar en el documento. No lleva comillas.
   */

  document.body.appendChild(título);

  // Ejemplo en JS:

  let botonVerMas = document.createElement("button");
  let botonTexto = document.createTextNode("Ver más");
  botonVerMas.appendChild(botonTexto);
  document.body.appendChild(botonVerMas);

  // Resultado de ejemplo en html:

  {
    /* <body>
    <button> Ver más</button>
</body> */
  }
};

const ejercicioNodos = () => {
  // Listado de frutas (peras, manzanas)

  //Manejando el item de peras
  let nodo1 = document.createElement("li");
  let peras = document.createTextNode("peras");
  nodo1.appendChild(peras);

  //Manejando el item de manzanas
  let nodo2 = document.createElement("li");
  let manzanas = document.createElement("manzanas");
  nodo2.appendChild(manzanas);

  //Obteniendo listas y agregando

  let lista = document.getElementById("lista");
  lista.appendChild(nodo1);
  lista.appendChild(nodo2);
};

const elementosYatributosDinamicos = () => {
  <a href="http://www.google.com/">Ir a Google</a>;
  /** Atributo
   * En HTML, un atributo es un modificador de un elemento. Es una palabra especial que nos permite controlar un determinado comportamiento de nuestra etiqueta. Un elemento HTML se compone de:
   * <a> Etiqueta de apertura y etiqueta de cierre </a>
   * href = "Atributo"
   * Por eje,plo, en la etiqueta a tenemos un atributo fundamental que es el href, el cual indica la url a la que se apunta con el enlace
   */

  /** Etiquetas de atributos
   * Etiqueta <img>: alt, src y width
   * Etiqueta <a>: href y target
   * Etiqueta <meta>: charset y name
   */

  /** Atributos dinámicos
   * Los atributos usualmente están formados en pares de clave:valor (hay excepciones como <multiple>, booleano, usado con inpit y select y es para formularios)
   */

  let hasAttribute = () => {
    //Consulta si el elemento tiene o no un determinado atributo, recibiendo uno y retornando true si existe o false si no.

    let elemento = document.querySelector("#portada"); //Seleccionamos un elemento HTML
    elemento.hasAttribute("src"); // Consultamos si tiene un atributo src -> true
  };

  let getAttribute = () => {
    //Permite obtener el valor de un determinado atributo. Recibe un nombre de un atributo y retorna el valor si existe, de lo contrario devuelve nul.

    let elemento = document.querySelector("#portada"); // Seleccionamos un elemento del HTML
    elemento.getAttribute("src"); // imagen_portada.jpg
  };

  let removeAttribute = () => {
    //Borra el atributo y sus valores del elemento. Si no lo encuentra, no hace nada. Recibe el nombre del atributo y lo elimina.

    let elemento = document.querySelector("#portada"); // Seleccionamos un elemento del HTML
    elemento.removeAttribute("src"); // Pedimos el valor del atributo
  };

  let setAttribute = () => {
    // Permite agregar un atributo con su respectivo valor al elemento seleccionado, recibe el nombre del atributo y un valor para el mismo. En cualquier caso, no retorna ningún valor.

    let elementos = document.querySelector("#portada"); // Seleccionamos un elemento del HTML
    elemento.setAttribute("src", "imagen_portada.jpg"); // Pedimos el valor del atributo
  };

/** Atributos dinamicos, tarea playground
 * 
//1- Agregar a la tarjeta, el atributo "class" con el valor "card"

let divCard = document.querySelector("#tarjeta"); // con # selecciona ID, con . clases. Sin nada son elementos.
divCard.setAttribute("class", "card");

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"

let img = document.querySelector("#logo");
img.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png");

//3- Quitarle al titulo la clase que le está dando un formato feo

let h1 = document.querySelector("h1");
h1.removeAttribute("class");

//4- Chequear si el link a youtube posee o no el atributo href

let linkYoutube = document.querySelector("#link_youtube");
let hasAttr = linkYoutube.hasAttribute("href");
//console.log(hasAttr);

//5- Obtener el href del link a wikipedia y mostrarlo por consola

let linkWikipedia = document.querySelector("#link_wikipedia");
let attr = linkWikipedia.getAttribute("href");
console.log(attr);

 */

};

/** Preguntas Playground
 * 1) El método createNodeText() podría ser una cadena de texto vacía, lleva comillas y no se visualiza hasta asignarlo a un elemento
 * 2) appendChild asignará un elemento hijo si creamos antes el elemento padre con createElement o seleccionando un elemento existente del DOM.
 * 3) El siguiente ejercicio da como resultado: un <p> con el texto “Buenos dias” dentro de un <div> 
        <script>
        var p = document.createElement("P")
        var texT = document.createTextNode("Buenos Dias");
        p.appendChild(texT);
        var diV = document.querySelector("div").appendChild(p);
        document.body.appendChild(diV)
        </script> 
 */
