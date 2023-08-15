// Esta es la sexta clase del curso Front End 2 de CDT.

// ------------------------------------------
// // C6A/Eventos
// ------------------------------------------

let eventos = () => {
  // Un evento es una acción que transcurre en el navegador (documento HTML) o que es ejecutada comunmente por el usuario. Se verán tres eventos, onload, onclick y preventDefault.

  // ONLOAD - Permite que todo el script se ejecute cuando se haya cargado por completo el objeto document dentro del objeto window.
  window.onload = function () {
    console.log("El documento está listo");
  };

  // ONCLICK - Permite ejecutar una acción cuando se haga click sobre el elemento al cual se le está aplicando la propiedad

  window.onclick = function () {
    console.log("Hiciste clic!");
  };

  // PREVENTDEFAULT - Permite evitar que se ejecute el evento predeterminado -o nativo- del elemento al que se lo estemos aplicando.

  // Atrapamos el elemento
  let hipervinculo = document.querySelector("a");

  // Atrapamos el evento
  hipervinculo.addEventListener("click", function (event) {
    console.log("Hiciste click");
    // Prevenimos la  acción nativa
    event.preventDefault();
  });

  /** Eventos más usados:
   * onclick      cuando el usuario hace clic.
   * ondblclick   cuando el usuario hace doble clic.
   * onmouseover  cuando el mouse se mueve sobre el elemento
   * onmousemove  cuando se mueve el mouse
   * onscroll     cuando se hace scroll
   * onkeydown    cuando se aprieta una tecla
   * onload       cuando se carga la página
   * onsubmit     cuando se envía un formulario
   * More info: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
   */
};

let ejercicioEventosPy = () => {
  window.addEventListener("load", function () {
    let homeButton = document.querySelector(".home-button");

    homeButton.addEventListener("click", function () {
      alert("Tocaste el botón!");
    });

    let aboutButton = document.querySelector(".about-button");

    aboutButton.addEventListener("click", function (e) {
      e.preventDefault();

      console.log(this);
      alert("Quisiste saber más sobre el about?");
    });
  });
};

let eventosDeMouse = () => {
  // COn el evento click, podemos cambiar los valores al hacer click sobre un elemento
  window.addEventListener("load", function () {
    let homeButton = document.querySelector(".home-button");
    homeButton.addEventListener("click", function () {
      homeButton.style.color = "red";
      //homeButton.style.color = prompt("Elija su color preferido") *El color que ingrese el usuario, en ingles, será el nuevo valor asignado.
    });
  });

  // Con el evento mouseover, podemos cambiar los valores al pasar el mouse sobre un elemento.
  window.addEventListener("load", function () {
    let homeButton = document.querySelector(".home-button");
    homeButton.addEventListener("mouseover", function () {
      homeButton.style.color = "red";
    });

    let texto = this.document.querySelector(".text");
    texto.onmouseover = function () {
      console.log("pasaste el mouse");
    };
    // o bien,
    texto.addEventListener("mouseover", function () {
      console.log("pasaste el mouse");
    });
  });

  // Con el evento mouseout, la acción se ejecuta cuando pasamos sobre el elemento y luego dejamos de estar sobre el mismo.
  window.addEventListener("load", function () {
    let homeButton = document.querySelector(".home-button");
    homeButton.addEventListener("mouseout", function () {
      homeButton.style.color = "red";
    });

    let texto = this.document.querySelector(".text");
    texto.onmouseout = function () {
      console.log("quitaste el mouse");
    };

    // o bien,
    texto.addEventListener("mouseout", function () {
      console.log("quitaste el mouse");
    });
  });

  // Si queremos que los comportamientos s ehagan en todos los botones, hay que buscar una clase en comun. Ejecutamos el evento sobre todos los de esa clase.

  window.addEventListener("load", function () {
    let botones = document.querySelectorAll(".w3-button");

    for (let i = 0; i < botones.length; i++) {
      botones[i].addEventListener("click", function () {
        this.style.color = "Red"; // con el this, se hace referencia al evento que sucede en aquel momento, es decir, en cada boton que haga click, ocurrira la acci[on.]
      });
    }
  });
};

let eventosDeTeclado = () => {
  // eventos del teclado, se originan al realizar acciones con el teclado, keydown, keyup y keypress

  window.addEventListener("keypress", function () {
    this.alert(1); // cuando se pulse cualquier tecla, saldrá una alerta con un numero 1.
  });

  window.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      this.alert("Ey! tocaste enter"); // asignandole el evento a la funcion y con un condicional, e.key en este caso, se puede ver en pantalla un mensaje cuando se presione la tecla enter.
    }
  });

  //onkeydown -> se lanza cuando una tecla es presionada (hacia abajo). A diferencia del evento keypress, keydown es lanzado para las teclas que producen un carácter y también para las que no lo producen.

  let miInputDown = document.querySelector("#miInput");
  miInputDown.onkeydown = function (event) {
    alert("Se presionó la tecla: " + event.key);
  };

  //onkeyup -> Este evento se dispara únicamente cuando la tecla se suelta.

  let miInputUp = document.querySelector("#miInputUp");
  miInputUp.onkeyup = function (event) {
    alert("Se soltó la tecla: " + event.key);
  };

  //onkeypress -> Este evento se dispara al finalizar el recorrido de presiónn y liberación de la tecla.

  let miInputPress = document.querySelector("#miInputPress");
  miInputPress.onkeypress = function (event) {
    alert("Se presiono la tecla: " + event.key);
  };
};

let invocarFunciones = () => {
  // Se indicaran conceptos utiles para el uso de funciones:

  //Scope -> Es el contexto actual de ejecución. Ese contexto se refiere al "ámbito de vida" de las variables. Las mismas que "nacen" en un determinado bloque, "mueren" en ese bloque.

  function funcionDeEjemploScope() {
    const x = "declarada dentro de la funcion"; // x solo se puede utilizar en funcionDeEjemploScope
    console.log("Funcion interna");
    console.log(x);
  }
  console.log(x); // error, si queremos llamar una variable desde afuera de su bloque, esta no va a existir.

  console.log(funcionDeEjemploScope);

  function funcionPrimaria() {
    //También entra en juego la jerarquía de los bloques, esto quiere decir que los scopes secundarios tienen acceso a los ámbitos primarios, pero no al revés. Es decir, desde dentro (bloque inferior) podemos llamar a las variables superiores, pero en el caso inverso no es posible, ya que no se detecta como definida, es inexistente en ese scope.Por ejemplo:

    const variablePrimaria = "Me encuentro en el bloque superior";

    function funcionSecundaria() {
      const variableSecundaria = "Soy del bloque inferior";

      console.log("Dentro: " + variablePrimaria);
      console.log("Dentro: " + variableSecundaria);
    }
    funcionSecundaria();

    console.log("Fuera: " + variablePrimaria);
    console.log("Fuera: " + variableSecundaria); // error
  }
  funcionPrimaria();

  let arrowFunctions = () => {
    // Permite notaciones máß cortas. Debe ser utilizada con una variable cuyo nombre será el nombre de la función. Si luego de utilizar '=>', no se abren llaves, lo siguiente será devuelto como si se tratara de un return, pero la función no puede tener máß de una línea.
    let sumar = (a, b) => {
      let valor = a + b;
      return valor;
    };

    // o bien

    let sumar2 = (a, b) => a + b;
    console.log(sumar + sumar2);

    console.log(arrowFunctions);
  };

  let funcionComoParametro = () => {
    // JS permite utilizar una función como parámetro de otra

    // la funcion "ejecutor" realiza todo su algoritmo y cuando lo necesita, ejecuta la funcion "func" pasada como parámetro.
    function ejecutor(func) {
      // código de la función
      func();
      // código de la función
    }
    // sumar es pasadad como argumento al momento de invocar dicha funcion
    function sumar(a, b) {
      return a + b;
    }
    // la funcion ejecutor es la responsable de ejecutar la funcion "sumar".
    ejecutor(sumar(1, 2));

    console.log(funcionComoParametro);
  };

  let callbacks = () => {
    //callback es el nombre que se le suele dar a funciones que son utilizadas como parámetros de otra función.

    miFuncion("este es un parámetro aleatorio", (a, b) => {
      return a + b;
    });

    //En este ejemplo, el callbacj es la funcion (a,b) => {return a+b}. Este mismo ejemplo podria ser escrito de la siguiente manera:

    // Opcion 1
    miFuncion("este es un parámetro aleatorio", (a, b) => a + b);

    // Opcion 2
    miFuncion("este es un parámetro aleatorio", function (a, b) {
      return a + b;
    });

    // Opcion 3 -> Esta es la más utilizada
    miFuncion("este es un parámetro aleatorio", (a, b) => {
      return a + b;
    });

    console.log(callbacks);
  };

let funciones =()=>{
  // funciones son estructuras de JS, fragmentos de código, que no se ejecutan hasta que sean invocados o llamados mediante un nombre o identificador

function sumar (parametro1, parametro2){
  let valor = parametro1, parametro2;
  return valor;
}
sumar(1,3);


console.log(funciones);
};









};

/** Preguntas playground
 * 1) Si queremos disparar un evento al hacer click sobre el elemento, el código sería de la siguiente manera: elemento.addEventListener("click", function(e){});
 * 2) El propósito de .preventDefault(); es evitar que el elemento ejecute el evento que trae por default para que podamos manipularlo antes.
 * 3) La propiedad "key" almacena el valor de la tecla presionada
 * 4) "onkeyup" va tras el elemento (elemento.onkeyup = function()) y sirve para indicar una acción cuando se libera una tecla tras ser presionada
 */
