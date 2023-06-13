import "./style.css";
// Array de símbolos de naipes
const naipes = [
  { symbol: "&spades;", color: "black" },
  { symbol: "&hearts;", color: "red" },
  { symbol: "&clubs;", color: "black" },
  { symbol: "&diams;", color: "red" }
];

// Array de números de cartas
const numeros = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

// Función para mostrar una carta aleatoria
function mostrarCartaAleatoria() {
  const showCardElement = document.getElementById("showCard");

  // Generar un índice aleatorio para los símbolos de naipes y los números
  const indiceNaipeAleatorio = Math.floor(Math.random() * naipes.length);
  const indiceNumeroAleatorio = Math.floor(Math.random() * numeros.length);

  // Obtener el símbolo de naipe y el número correspondientes a los índices aleatorios
  const naipe = naipes[indiceNaipeAleatorio];
  const numeroCarta = numeros[indiceNumeroAleatorio];

  // Crear elementos para los símbolos de naipes
  const naipeSuperior = document.createElement("span");
  naipeSuperior.className = "naipe naipe-superior";
  naipeSuperior.innerHTML = naipe.symbol;
  naipeSuperior.style.color = naipe.color;

  const naipeInferior = document.createElement("span");
  naipeInferior.className = "naipe naipe-inferior";
  naipeInferior.innerHTML = naipe.symbol;
  naipeInferior.style.color = naipe.color;

  // Crear elemento para el número de la carta
  const numeroElement = document.createElement("span");
  numeroElement.className = "numero";
  numeroElement.innerHTML = numeroCarta;

  // Verificar si el naipe es "&diams;" o "&hearts;" y establecer el color rojo para el número
  if (naipe.symbol === "&diams;" || naipe.symbol === "&hearts;") {
    numeroElement.style.color = "red";
  }

  // Actualizar el contenido del elemento <p> con la carta aleatoria
  showCardElement.innerHTML = "";
  showCardElement.appendChild(naipeSuperior);
  showCardElement.appendChild(numeroElement);
  showCardElement.appendChild(naipeInferior);
}

// Obtener referencia al botón
const btn = document.getElementById("btn");

// Agregar evento de escucha al botón para llamar a la función mostrarCartaAleatoria
btn.addEventListener("click", mostrarCartaAleatoria);

// Llamar a la función para mostrar una carta aleatoria al cargar la página
mostrarCartaAleatoria();
