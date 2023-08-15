// Esta es la cuarta clase del curso Front End 2 de CDT.

// ------------------------------------------
// // C4A/Modificar elementos con JavaScript
// ------------------------------------------

// innerHTML & innerText son propiedades que se utilizan para acceder y modificar el contenido de elementos HTML en una página web
const innerHTML_Text = () => {
  // Seleccionamos el h1 en el query
  let titulo = document.querySelector("h1");
  console.log(titulo);

  // Cambiamos el texto del h1
  titulo.innerHTML = "Soy un contenido nuevo desde JavaScript";

  // Se evidencia en consola el cambio de texto de h1
  console.log(titulo.innerHTML);

  // Para solo cambiar una parte del texto o agregar una adicional, el interhtml te muestra el texto existente y puedes concatenar el mismo a un texto adicional, en este ejemplo, quedara el ingresado más arriba más la palabra hello.

  titulo.innerHTML = titulo.innerHTML + " Hello";
  console.log(titulo.innerHTML);
  // Este último se puede abreviar de la siguiente manera:
  titulo.innerHTML += " Hello There";
  console.log(titulo.innerHTML);

  //Para leer o modificar el contenido de una etiqueta HTML, se usa la siguiente propiedad:

  document.querySelector("div.nomre").innerHTML; // Si queremos guardar el valor, hay que asignarle una variable a esa linea de código.

  // También podemos capturar clases que tengamos en el HTML
  let parrafoEspecial = document.querySelector(".parrafo-especial");
  // Y podemos cambiar el interior del texto del parrafo seleccionado.
  parrafoEspecial.innerHTML = "Un texto con algo <i>en cursiva<i>";
  console.log(parrafoEspecial);

  //Para modificar el contenido de una etiqueta HTML, sin perder el contenido que ya estaba, se utiliza la siguiente propiedad:
  document.querySelector("div.nombre").innerHTML += "Papitas";
  // De esta forma, estamos agregando al div con clase compras la palabra "papitas", se lee de la siguiente manera:
  <div class="compras"> "Jamón, Queso, Pan" Papitas</div>;

  //.InnerText es lo mismo que .innerHTML pero es enfocado solo en texto plano, es decir, si utilizo selectores para cursivas, solo se mostrará el caractér. Para implementar texto y html, el que conviene es inner.HTML.

  document.querySelector("div.nombre").innerText; // Para leer o modificar
  document.querySelector("div.nombre").innerText = "Maria"; // Modificar el texto de una etiqueta HTML
  document.querySelector("div.nombre").innerText += "Messi"; // Agregar contenido al texto de una etiqueta HTML
  <div class="nombre">Leo Messi</div>; // El texto nuevo se incluye dentro de la etiqueta div
};

//innerHTML_Text();

// Template String o template literal, caracteristica de algunos lenguajes de programacion que permite la consutrccion de cadenas de texto de manera más legible y flexible. Permiten incrustar variables directamente en una cadena usando marcadores especiales. `${variable}`
const templateStrings = () => {
  //Obtenemos un elemento del HTML
  const body = document.getElementById("body");

  // Función con tres parametros
  function publicarNoticia(titulo, subtitulo, cuerpo) {
    // Definimos nuestro template
    const templateNoticia = `
        
        <header>
            Diario muy confiable
        </header>

        <h1> ${titulo} </h1>
        <h2> ${subtitulo} </h2>
        <p> ${cuerpo} </p>

        <footer>
        Autor:
        </footer>
        `;

    // Modificamos nuestro elemento HTML modificando nuestro innerHTML

    body.innerHTML(templateNoticia);
  }
  console.log(publicarNoticia);

  const nombre = "Mauro";
  const miTemplate = `Mi nombre es ${nombre}`;
  console.log(miTemplate);

  const miTemplate2 = `2 * 3 es ${2 * 3}`;
  console.log(miTemplate2);

  const ejercicioPY = () => {
    function escribirHTML(titulo, texto) {
      const body = document.getElementById("body");
      const miTemplate = `
      <h1>${titulo}</h1>
      <p>${texto}</p>
      `;
      body.innerHTML += miTemplate;
    }

    escribirHTML("Hola", "Esto es un ejemplo de string en html");
    escribirHTML(
      "Es dinamico",
      "Podemos insertar elementos HTML mediante <b>Javascript</b>"
    );
    escribirHTML(
      "Facilita la programación",
      "Evita escribir mucho código y reutilizar el que si escribamos"
    );
    escribirHTML(
      "En este ejemplo",
      "hemos utilizado una única función para poder escribir 4 veces en HTML, ¿te imaginas lo que seria esto sin esta función?"
    );
  };
  console.log(ejercicioPY);

  //Dado un objeto JS, generar un template string para que se modifique la información
  const ejercicioPY2 = () => {
    //Definimos el objeto Js
    let personaje = {
      nombre: "Michael",
      apellido: "Scott",
      nacimiento: {
        fecha: "15/04/1965",
        ciudad: "Scranton",
        estado: "Pensilvania",
      },
      imagenUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/MichaelScott.png/220px-MichaelScott.png",
      trabajo: {
        rol: "manager regional",
        compania: "Dunder Mifflin",
      },
    };
    // Realizamos el template literals
    let planillaHtml = `
<div style="border: 1px solid black; width: 500px;">
    <img src="(${persona.e.imagenUrl})" width="100%" alt="">
  <h3>Nombre</h3>
  <h4>${personaje.nombre}</h4>
  <h3>Apellido</h3>
  <h4>${personaje.apellido}</h4>
  <h3>Nacimiento</h3>
  <h4>${personaje.nacimiento.fecha}</h4>
  <h3>Lugar</h3>
  <h4>${personaje.nacimiento.ciudad}, ${personaje.nacimiento.estado}</h4>
  <hr>
  <h3>Trabajo</h3>
  <p> ${personaje.trabajo.rol}, en <strong> ${personaje.trabajo.compania}</strong>.</p>
  </div>`;

    console.log(planillaHtml);
  };
  console.log(ejercicioPY2);
};

// Modificar estilos
const modStyles = () => {
  //Ya seleccionado el elemento, solo agregar la propiedad .style
  document.querySelector("h1").style;

  let confirmarCambios = confirm("Quieres cambiar el color del titulo?");
  if (confirmarCambios) {
    let titulo = document.querySelector("h1");
    titulo.innerHTML += "Soy un contenido nuevo desde JS";
    titulo.style.color = "crimson";
    titulo.style.fontSize = "50px";
  }
};

/**Modificar clases
 * classList.add();  -> Permite agregar una clase nueva al elemento que tengamos seleccionado
 * classList.remove(); -> Permite quitarle una clase existente al elemento que tenemos seleccionado
 * classList.toggle(); -> Revisa si existe una clase en el elemento seleccionado. De ser asi, la remueve, de lo contrario, si la clase no existe, la agrega.
 * classList.contains(); -> Permite preguntar si un elemento tiene una clase determinada. Devuelve un valor booleano
 */
const modClass = () => {
  let titulo = document.querySelector("h1");
  titulo.innerHTML += "Soy un contenido nuevo desde JS";
  titulo.classList.add("titulo-destacado");

  let confirmaEliminarClase = confirm("Quieres eliminar la clase del titulo?");
  titulo, classList.remove("titulo-destacado");

  //classList.add (class inicial: "cita" , class final: "cita italicas")
  let citaAdd = document.querySelector(".cita");
  citaAdd.classList.add("italicas");

  //classList.remove (class inicial: "cita" , class final: "")
  let citaRemove = document.querySelector(".cita");
  citaRemove.classList.remove("cita");

  //classList.add (class inicial: "cita" , class final: "cita italicas")
  let citaToggle = document.querySelector('p');
  citaToggle.classList.toggle('cita');

  let citaContains = document.querySelector('.italicas');
  citaContains.classList.contains('cita'); //false
 

  let citaContains2 = document.querySelector('.italicas');
  citaContains2.classList.contains('italicas'); //true
};
