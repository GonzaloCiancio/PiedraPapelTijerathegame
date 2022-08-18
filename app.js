// "use strict";
// alert("Hola");

let btnJugar = document.querySelector(".jugar");
// let opcionRBox = document.querySelector('input[name="opcion"].checked');
let imagen = document.querySelector(".opcion");
let imagen2 = document.querySelector(".imagen2");
// console.log(imagen);
// console.log(imagen2);
//opciones
let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijera = document.getElementById("tijera");
//opciones
// console.log(piedra);
// console.log(papel);
// console.log(tijeras);

//Opcion Jugador

function checkButton(Event) {
  opcionJugador = Event.target.value;
  // console.log(Event.target.value);
  imagen.setAttribute("src", `${opcionJugador}.png`);
}

let suma = 0;
let segundos;

let pi = 1;
let pa = 2;
let tj = 3;

function cuentaRegresiva() {
  segundos = setInterval(() => {
    contador();
    if (suma === 1) {
      pi = "piedra";
      // console.log(pi);
      pa = "papel";
    } else if (suma === 2) {
      // console.log(pa);
    } else if (suma === 3) {
      tj = "tijera";
      // console.log(tj);
    }
  }, 1000);
}
function contador() {
  suma++;
  // console.log(suma);
  if (suma >= 4) {
    clearInterval(segundos);
    suma = 0;
  }
}

piedra.addEventListener("click", checkButton);
papel.addEventListener("click", checkButton);
tijera.addEventListener("click", checkButton);

//Opcion Maquina
let opcionMaquina;

let score1;
let score2;

function maquina() {
  let randomMaquina = Math.floor(Math.random() * 3 + 1);
  // console.log(randomMaquina);
  // let opcionMaquina;
  if (randomMaquina === 1) {
    opcionMaquina = "piedra";
    // console.log(opcionMaquina);
  } else if (randomMaquina === 2) {
    opcionMaquina = "papel";
    // console.log(opcionMaquina);
  } else {
    opcionMaquina = "tijera";
    // console.log(opcionMaquina);
  }
  imagen2.setAttribute("src", `${opcionMaquina}.png`);
}
btnJugar.addEventListener("click", () => {
  maquina();
  cuentaRegresiva();
  if (piedra.checked) {
    if (opcionMaquina === "piedra") {
      alert("Empate");
    } else if (opcionMaquina === "papel") {
      alert("Perdiste");
    } else if (opcionMaquina === "tijera") {
      alert("Ganaste");
    }
  } else if (papel.checked) {
    if (opcionMaquina === "piedra") {
      alert("Ganaste");
    } else if (opcionMaquina === "papel") {
      alert("Empate");
    } else if (opcionMaquina === "tijera") {
      alert("Perdiste");
    }
  } else if (tijera.checked) {
    if (opcionMaquina === "piedra") {
      alert("Perdiste");
    } else if (opcionMaquina === "papel") {
      alert("Ganaste");
    } else if (opcionMaquina === "tijera") {
      alert("Empate");
    }
  }
});
