// Esta es la segunda clase del curso Front End 2 de CDT.

//const prompt = require('syncprompt');     // Se debe instalar prompt para ver por terminal, más información en https://stackoverflow.com/questions/12042534/node-js-synchronous-prompt
// Si prompt esta activo en terminal, no funcionará en live server.
// ------------------------------------------
// // C2A/Introducción a JavaScript Front
// ------------------------------------------

// Capitulo Introduccion
const metodosWindow = () => {
  // Mensaje de alerta, retorna en consola undefined porque no retorna nada, muestra un mensaje en la página con un botón ok
  alert("Esto es una alerta: Ejercicios clase 2");

  // Mensaje de confirmación, retorna true o false dependiendo de la elección tomada en el mensaje que se despliega en la página, si o no.

  confirm("Desea confirmar está acción?");

  // Guardaremos el retorno de confirm (boolean) en una variable asi podemos usarla con ambos valores según la decisión del usuario
  let confirmacion = confirm("Estas seguro de confirmar esta acción?");
  console.log(confirmacion);

  // prompt(), este muestra un cuadro de diálogo con mensaje opcional, que solicita al usuario que introduzca un texto.
  //Además tiene dos opciones: “Aceptar” o “Cancelar”. Retorna un string.
  prompt(
    "Acá el usuario puede ingresar un texto que será retornado por consola"
  );
  console.log(prompt("Inserta tu nombre"));

  // Al igual que con confirm, y como retorna un string, podremos guardarlo en una variable para guardar el resultado a posterior.
  // Si el usuario coloca aceptar e ingresa texto, retorna string. Si coloca cancelar, regresa un null.
  let nombreUsuario = prompt("Ingrese su nombre aqui:");
  console.log(nombreUsuario);

  // Haremos un ejemplo usando los tres metodos, el ejercicio será ofrecer participar en un concurso, si se accede, solicitar datos.

  let deseaConcursar = confirm("Desea participar de este concurso?");
  let nombreConcursante = prompt("Ingresa tu nombre");

  if (deseaConcursar) {
    alert(`Ya estás participando ${nombreConcursante}`);
  } else {
    alert(`No te preocupes, eres bienvenido cuando quieras`);
  }
};

//metodosWindow();

/*Preguntas playground:
1) Un modal e suna pequeña ventana emergente con que el usuario interactúa y no desaparece hasta que presiona "ok" o "aceptar"
2) prompt() es el metodo window que se usa en JS para que el usuario ingrese datos por teclado
3) Con alert hay un botón para aceptar que el mensaje fue recibido, confirm hace una consulta al usuario y este decide por "Aceptar" o "Cancelar"
4) Si no se completa un dato en prompt y se pulsa "Aceptar" retorna por defecto un string vacío, en caso de pulsar "cancelar" retorna un null
5) Los datos recibidos de los metodos window se pierden si no son almacenados en una variable
6) En una acción prompt() si el usuario apreta cancelar, retornara un null.
7) Un confirm () almacena un dato booleano.
*/

// Capitulo Desarrollo

//objetos Math tiene propiedades y metodos para constantes y funciones matemáticas.
// Ver aqui todas las propiedades: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math#propiedades
const objetosMath = () => {
  //propiedad que devuelve PI
  Math.PI;

  //propiedad que retorna un punto flotante, un número pseudoaleatorio dentro de un rango entre 0 y 1 pero sin incluir el 1). No recibe parametros.
  Math.random();

  let randomSimple = Math.random();

  //parseInt parsea el resultado, convierte el contenido en un número entero, extraerá números enteros de la cadena hasta que encuentre un carácter no numérico. Si la cadena no contiene números al principio, la función devolverá NaN (Not a Number). Para evitar esto, es recomendable verificar que el resultado de parseInt no sea NaN antes de usar el número resultante en cálculos.

  parseInt(randomSimple);

  let randomEscalado = Math.random() * (100 - 1) + 1;
  parseInt(randomEscalado);

  //propiedad que recibe un numero, idealmente con punto flotante (float) y retorna el valor del número al número entero más cercano.
  Math.round();

  let num = Math.round(20.49);
  console.log(num);
  let aleatorio = Math.random() * (100 - 1) + 1;
  Math.round(aleatorio);

  //propiedad que recibe con conjunto de números y retorna el mayor de cero o más números. Si al menos uno d elos argumentos no puede ser convertido a número, el resultado es NaN.
  Math.max();

  let numUno = Math.max(10, 20);
  let numDos = Math.max(10, 20);
  let numTres = Math.max(10, 20);

  console.log(numUno + numDos + numTres);
};
//objetosMath();

// Aplicaremos los metodos con el juego papel, piedra o tijera:

/*
1) Usuario debe ingresar al juego
2) Usuario debe seleccionar una acción
3) Usuario debe saber si ganó o no
*/
const piedraPapelTijera = () => {
  // const intento1 = () => {
  // let confirmacionJuego = confirm("Quieres jugar a piedra, papel o tijera?")
  // let ingresarNombre = prompt("Ingresa tu nombre");
  // let numeroJugador = parseInt(prompt("Ingresa 1, 2 o 3 según tu jugada, siendo 1: piedra, 2: papel y 3: tijera"));
  // let numeroRandom = parseInt(Math.random()*3+1);
  // if (confirmacionJuego){
  //    alert("Ya estas participando");
  //    ingresarNombre;
  // }else {
  //     alert("Que tengas un día bkn!")
  // }
  // // switch(resultadoJuego){
  // //     case empate:
  // //         numeroRandom=numeroJugador;
  // //         alert("Es un empate");
  // //         break;
  // //     case pierde:
  // //         numeroJugador==3 && numeroRandom==1;
  // //         numeroJugador==2 && numeroRandom==3;
  // //         numeroJugador==1 && numeroRandom==2;
  // //         alert("Has perdido");
  // //         break;
  // //     default:
  // //         alert("Felicidades, ganaste!");
  //     };

  // Se debe consultar al usuario si quiere jugar o no
  let confirmacion = confirm("Quieres jugar a piedra papel o tijera?");

  // Si quiere jugar, se le debe solicitar el nombre, si no, despedir.
  if (confirmacion) {
    const ingresarNombre = prompt("ingresa tu nombre a continuación: ");
    console.log(ingresarNombre);
  } else {
    return alert("Que tengas un buen día");
  }

  // Desarrollo del juego

  //Ingresar un numero que defina piedra, papel o tijera
  let numeroJugador = null;
  let input = null;
  let msjError = "";

  // Verificar que el número ingresado este entre los valores esperados, si no, volver a pedir el número
  do {
    input = prompt(
      msjError +
        "Ingrese el número que represente las opciones de juego, siendo: [1 = piedra] [2 = papel] [3 = tijera]"
    );
    numeroJugador = parseInt(input);
    msjError = "Error: \n";
  } while (numeroJugador > 3 || numeroJugador < 1 || input.length !== 1);

  console.log(input);
  //El computador debe generar un numero random para competir
  let numeroComputadora = parseInt(Math.random() * 3) + 1;
  alert(`El oponente a elegido la opción número ${numeroComputadora}`);

  // Se debe comparar los resultados y definir al ganador
  if (numeroJugador == numeroComputadora) {
    alert("Es un empate");
  } else if (numeroJugador == 1 && numeroComputadora == 3) {
    alert("Ganaste! Elegiste piedra y el oponente eligió tijera");
  } else if (numeroJugador == 2 && numeroComputadora == 1) {
    alert("Ganaste! Elegiste papel y el oponente eligió piedra");
  } else if (numeroJugador == 3 && numeroComputadora == 2) {
    alert("Ganaste! Elegiste tijera y el oponente eligió papel");
  } else {
    alert("Lo siento, perdiste");
  }
};

// piedraPapelTijera();

//Parsear es convertir un string de un prompt a un dato tipo número
const parseando = () => {
  //parseInt() es una función que parsea una cadena de texto y devuelve un número entero, solo devuelve la parte entera del número que ingresemos, por lo que si tenemos decimales, los mismos quedarán truncados.

  parseInt("22");
  parseInt(prompt("Ingrese edad"));

  // para guardar los datos, es bueno implementar variables que almacenen los resultados

  let a = parseInt("22");
  let b = parseInt(prompt("Ingrese edad"));
  let c = parseInt("22" + "150");
  let d = parseInt(22 + 150);
  let e = parseInt(22 + parseInt("150"));
  let f = parseInt(22.55);
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  console.log(f);

  // parseFloat() parsea una cadena de texto pero si retorna los números decimales que existan.

  console.log(parseFloat(22.34));
  console.log(parseFloat(2.3456284));

  //Nan, esta propiedad nos indica que el valor no es un número (Not a Number), por lo que esto nos produciría un errror si queremos realizar alguna operación aritmética con este valor.
};
//parseando();

const desafio1 = () => {
  /**
 * Dado el siguiente codigo:
let edad = parseInt(prompt("Ingrese su edad"));
if(edad>18){
console.log("Es mayor de edad");
}else{
console.log("Es menor de edad");
}
Responder lo siguiente:
A) Cual es el resultado de este codigo?
  R: Se despliega una ventana para ingresar la edad y te indica si es mayor o menos a 18, pero no tiene validaciones de tipo de dato
B) Es correcto lo que arroja en base a lo que ingresó el usuario?
  R: Si es que solo ingresa datos numericos enternos, si. No hay validación de tipo de datos
C) Donde podría existir un problema?
  R: En la validación de datos ingresados y en mayor o igual que, y que la edad sea a partir de cero.
D) Como podríamos solucionarlo y llegar a un mejor resultado utilizando los métodos que ya conocemos?
 */

  let edad = null;
  let inputEdad = null;
  let msjError = "";

  do {
    inputEdad = prompt(msjError + "Ingrese su edad: ");
    edad = parseInt(inputEdad);
    msjError = "Error, el valor debe ser mayor a cero y númerico\n";
  } while (isNaN(inputEdad) || inputEdad <= 0);

  console.log(inputEdad);

  if (edad >= 18) {
    alert("eres mayor de edad");
  } else {
    alert("Eres menor de edad");
  }
};

//desafio1();

// Bucles especificos, recorren elementos iterables.

//For in, itera una caracteristica o elemento dentro de un objeto. Propiedades enumerables usados en objetos
const bucleForIn = () => {
  let personaje = {
    nombre: "Luke",
    apellido: "Skywalker",
    edad: 25,
  };

  //Usaremos el ciclo for para buscar alguna de las caracteristicas en determinado personaje
  for (let caracteristica in personaje) {
    // Para efectos del for, simularemos que caracteristicas es un array, por tal, iremos recorriendo caracteristica por caracteristica del personaje.
    console.log(personaje[caracteristica]);
  };
};
//bucleForIn();

// For of, itera sobre un array para buscar uno de los elementos. Elementos iterables usados con arrays o strings
const bucleForOf = () => {

let serie = ["Once upon a time", "Futurama", "Naruto"];

for (let unaSerie of serie){
  console.log(unaSerie);
}
};

//bucleForOf();
