// Esta es la tercera clase del curso Front End 2 de CDT.

// ------------------------------------------
// // C3A/Introducción al DOM
// ------------------------------------------

//El objeto window representa la ventana que contiene al documento y el objeto document representa al DOM (Documento de HTML) cargado en esa ventana. El DOM (Document object model) representa al documento que se carga en el navegador como un árbol de nodos, e donde cada nodo representa una parte del documento.

/**
 *     El objeto Window, como bien lo indica su nombre, se refiere a toda la ventana que vemos en el navegador. 
 * Ref: https://developer.mozilla.org/es/docs/Web/API/Window
Este se utiliza principalmente para manipular la ventana. Algunas de las funciones más conocidas y comúnmente utilizadas del objeto Window pueden ser:
window.location → Retorna un objeto con los detalles de la URL, la ruta, el href, etc.
window.height y window.width → Retorna la altura y/o el ancho de la pantalla actual de la ventana.

A diferencia del Window, el objeto Document se utiliza para leer y modificar, si así lo deseamos, el contenido de la ventana. Por ejemplo, lo podríamos usar para modificar nuestro HTML a través de sus clases y estilos. 
Solemos llamar al objeto Document: DOM (Document Object Model) y, como se ve en el diagrama, se encuentra dentro del objeto Window. Para acceder a él y todos sus métodos, deberíamos hacerlo de la siguiente manera: 
window.document.title → Retorna el título del documento sobre el que estamos navegando. 
Sin embargo, JS Front nos permite abreviarlo así:
document.title
Ref: https://developer.mozilla.org/es/docs/Web/API/Document
Los Divs son componentes de nuestro HTML que pueden ser modificados y manipulados a través del uso del objeto Document.
 
    
 */

//Los selectores retornan un elemento o una lista de ellos y para hacer uso de ellos debemos hacer uso del objeto document.
const domSelectores = () => {
  //querySelector(): Recibe un string que indica el selectros CSS del elemento del DOM que se busca
  let titulo = document.querySelector(".title"); // Nos retornará el primer elemento del HTML que contenta la clase "title"

  // querySelectorAll(): Recibe un string que indica el selector CSS del elemento del DOM que estamos buscando.
  let nombre = document.querySelectorAll(".name");
  let div = document.querySelectorAll("div"); // Nos retornará un listado de elementos que coincidan con la búsqueda especificada)

  // getElementByld(): Recibe un string únicamente con el nombre del id del elemento del DOM buscado.
  let marca = document.getElementById("marca");
  // Retorna el elemento cuyo id coincida con el deseado.

  let marcaQuerySelector = document.querySelector("#marca");
  //también podemos buscar elementos por su id mediante los selectores anteriores, pero debemos anteponer un # para aclarar que es un id.
};

domSelectores();

/**Preguntas playground
 * 1) JavaScript nos permite interactuar con el front-end del usuario siempre y cuando se haga una petición al servidor. FALSO, siempre permite su interacción
 * 2) DOM es La representación en objetos que hace JavaScript del documento HTML.
 * 3) El objeto window representa la venta donde estamos navegando
 * 4) Mediante el objeto document podemos leer todos los elementos del HTML y modificarlos, si así lo quisiéramos.
 * 5)El objeto Window se utiliza para leer y manipular la ventana del navegador. Mientras que el objeto Document se encarga del contenido. Desde el document podemos modificar las clases y estilos de nuestro HTML. Mientras que desde el window podríamos leer y modificar la ocación de nuestro navegador.
 */
