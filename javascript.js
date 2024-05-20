let azul = document.querySelectorAll(".lado-azul");
let verde = document.querySelectorAll(".lado-verde");
let laranja = document.querySelectorAll(".lado-laranja");
let vermelho = document.querySelectorAll(".lado-vermelho");
let amarelo = document.querySelectorAll(".lado-amarelo");
let branco = document.querySelectorAll(".lado-branco");

let contadorEtapa = 1

let cor_cinza = "gray";
let cor_azul = "blue";
let cor_verde = "rgb(3, 255, 3)";
let cor_laranja =  "orange";
let cor_vermelho = "red";
let cor_amarelo = "yellow";
let cor_branco = "white";

const cube = document.querySelector(".cube");
let mouseX = 0;
let mouseY = 0;
const rotationValue = 410;

const handleMouseMove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
  rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

window.addEventListener("mousemove", handleMouseMove);

function handleKeyDown(event) {
  switch (event.key) {
    case 'r':
      // R
      R()
      break;
    case 't':
      // R Linha
      Rlinha()
      break;
    case 'l':
      // L
      L()
      break;
    case 'k':
      // L Linha
      Llinha();
      break;
    case 'u':
      // U
      U()
      break;
    case 'i':
      // U Linha
      Ulinha()
      break;
    case 'd':
      // D
      D()
      break;
    case 's':
      // D Linha
      Dlinha()
      break;
    case 'f':
      // F
      F()
      break;
    case 'g':
      // F Linha
      Flinha()
      break;
    case 'b':
      // B
      B()
      break;
    case 'n':
      // B Linha
      Blinha()
      break;
    
    default:
      console.log(`Tecla não mapeada: ${event.key}`);
  }
}

function minhaFuncaoA() {
  console.log('Função para a tecla "a"');
  // Código da função para a tecla "a"
}

function minhaFuncaoB() {
  console.log('Função para a tecla "b"');
  // Código da função para a tecla "b"
}

window.addEventListener('keydown', handleKeyDown);

function R() {
  // Capturando os valores de background-color no momento da execução
  const ladoAzul1Color = window.getComputedStyle(azul[2]).backgroundColor;
  const ladoAzul2Color = window.getComputedStyle(azul[5]).backgroundColor;
  const ladoAzul3Color = window.getComputedStyle(azul[8]).backgroundColor;

  const ladoAmarelo1Color = window.getComputedStyle(amarelo[2]).backgroundColor;
  const ladoAmarelo2Color = window.getComputedStyle(amarelo[5]).backgroundColor;
  const ladoAmarelo3Color = window.getComputedStyle(amarelo[8]).backgroundColor;

  const ladoVerde1Color = window.getComputedStyle(verde[0]).backgroundColor;
  const ladoVerde2Color = window.getComputedStyle(verde[3]).backgroundColor;
  const ladoVerde3Color = window.getComputedStyle(verde[6]).backgroundColor;

  const ladoBranco1Color = window.getComputedStyle(branco[2]).backgroundColor;
  const ladoBranco2Color = window.getComputedStyle(branco[5]).backgroundColor;
  const ladoBranco3Color = window.getComputedStyle(branco[8]).backgroundColor;

  const ladoVermelho0Cor = window.getComputedStyle(vermelho[0]).backgroundColor;
  const ladoVermelho1Cor = window.getComputedStyle(vermelho[1]).backgroundColor;
  const ladoVermelho2Cor = window.getComputedStyle(vermelho[2]).backgroundColor;
  const ladoVermelho3Cor = window.getComputedStyle(vermelho[3]).backgroundColor;
  const ladoVermelho5Cor = window.getComputedStyle(vermelho[5]).backgroundColor;
  const ladoVermelho6Cor = window.getComputedStyle(vermelho[6]).backgroundColor;
  const ladoVermelho7Cor = window.getComputedStyle(vermelho[7]).backgroundColor;
  const ladoVermelho8Cor = window.getComputedStyle(vermelho[8]).backgroundColor;

  // Função para aplicar as cores capturadas.
  function aplicaMudancaCor() {
    azul[2].style.background = ladoBranco1Color;
    azul[5].style.background = ladoBranco2Color;
    azul[8].style.background = ladoBranco3Color;

    amarelo[2].style.background = ladoAzul1Color;
    amarelo[5].style.background = ladoAzul2Color;
    amarelo[8].style.background = ladoAzul3Color;

    verde[6].style.background = ladoAmarelo1Color;
    verde[3].style.background = ladoAmarelo2Color;
    verde[0].style.background = ladoAmarelo3Color;

    branco[8].style.background = ladoVerde1Color;
    branco[5].style.background = ladoVerde2Color;
    branco[2].style.background = ladoVerde3Color;

    vermelho[0].style.background = ladoVermelho6Cor;
    vermelho[1].style.background = ladoVermelho3Cor;
    vermelho[2].style.background = ladoVermelho0Cor;
    vermelho[3].style.background = ladoVermelho7Cor;
    vermelho[5].style.background = ladoVermelho1Cor;
    vermelho[6].style.background = ladoVermelho8Cor;
    vermelho[7].style.background = ladoVermelho5Cor;
    vermelho[8].style.background = ladoVermelho2Cor;
  }
  // Retornando a função para ser chamada posteriormente.
  aplicaMudancaCor();
}

function Rlinha() {
  // Capturando os valores de background-color no momento da execução
  const ladoAzul1Color = window.getComputedStyle(azul[2]).backgroundColor;
  const ladoAzul2Color = window.getComputedStyle(azul[5]).backgroundColor;
  const ladoAzul3Color = window.getComputedStyle(azul[8]).backgroundColor;

  const ladoAmarelo1Color = window.getComputedStyle(amarelo[2]).backgroundColor;
  const ladoAmarelo2Color = window.getComputedStyle(amarelo[5]).backgroundColor;
  const ladoAmarelo3Color = window.getComputedStyle(amarelo[8]).backgroundColor;

  const ladoVerde1Color = window.getComputedStyle(verde[0]).backgroundColor;
  const ladoVerde2Color = window.getComputedStyle(verde[3]).backgroundColor;
  const ladoVerde3Color = window.getComputedStyle(verde[6]).backgroundColor;

  const ladoBranco1Color = window.getComputedStyle(branco[2]).backgroundColor;
  const ladoBranco2Color = window.getComputedStyle(branco[5]).backgroundColor;
  const ladoBranco3Color = window.getComputedStyle(branco[8]).backgroundColor;

  const ladoVermelho0Cor = window.getComputedStyle(vermelho[0]).backgroundColor;
  const ladoVermelho1Cor = window.getComputedStyle(vermelho[1]).backgroundColor;
  const ladoVermelho2Cor = window.getComputedStyle(vermelho[2]).backgroundColor;
  const ladoVermelho3Cor = window.getComputedStyle(vermelho[3]).backgroundColor;
  const ladoVermelho5Cor = window.getComputedStyle(vermelho[5]).backgroundColor;
  const ladoVermelho6Cor = window.getComputedStyle(vermelho[6]).backgroundColor;
  const ladoVermelho7Cor = window.getComputedStyle(vermelho[7]).backgroundColor;
  const ladoVermelho8Cor = window.getComputedStyle(vermelho[8]).backgroundColor;

  // Função para aplicar as cores capturadas.
  function aplicaMudancaCor() {
    azul[2].style.background = ladoAmarelo1Color;
    azul[5].style.background = ladoAmarelo2Color;
    azul[8].style.background = ladoAmarelo3Color;

    amarelo[8].style.background = ladoVerde1Color;
    amarelo[5].style.background = ladoVerde2Color;
    amarelo[2].style.background = ladoVerde3Color;

    verde[6].style.background = ladoBranco1Color;
    verde[3].style.background = ladoBranco2Color;
    verde[0].style.background = ladoBranco3Color;

    branco[2].style.background = ladoAzul1Color;
    branco[5].style.background = ladoAzul2Color;
    branco[8].style.background = ladoAzul3Color;

    vermelho[0].style.background = ladoVermelho2Cor;
    vermelho[1].style.background = ladoVermelho5Cor;
    vermelho[2].style.background = ladoVermelho8Cor;
    vermelho[3].style.background = ladoVermelho1Cor;
    vermelho[5].style.background = ladoVermelho7Cor;
    vermelho[6].style.background = ladoVermelho0Cor;
    vermelho[7].style.background = ladoVermelho3Cor;
    vermelho[8].style.background = ladoVermelho6Cor;
  }
  // Retornando a função para ser chamada posteriormente.
  aplicaMudancaCor();
}

function L() {
  // Capturando os valores de background-color no momento da execução
  const ladoAzul1Color = window.getComputedStyle(azul[0]).backgroundColor;
  const ladoAzul2Color = window.getComputedStyle(azul[3]).backgroundColor;
  const ladoAzul3Color = window.getComputedStyle(azul[6]).backgroundColor;

  const ladoAmarelo1Color = window.getComputedStyle(amarelo[0]).backgroundColor;
  const ladoAmarelo2Color = window.getComputedStyle(amarelo[3]).backgroundColor;
  const ladoAmarelo3Color = window.getComputedStyle(amarelo[6]).backgroundColor;

  const ladoVerde1Color = window.getComputedStyle(verde[2]).backgroundColor;
  const ladoVerde2Color = window.getComputedStyle(verde[5]).backgroundColor;
  const ladoVerde3Color = window.getComputedStyle(verde[8]).backgroundColor;

  const ladoBranco1Color = window.getComputedStyle(branco[0]).backgroundColor;
  const ladoBranco2Color = window.getComputedStyle(branco[3]).backgroundColor;
  const ladoBranco3Color = window.getComputedStyle(branco[6]).backgroundColor;

  const ladoLaranja0Cor = window.getComputedStyle(laranja[0]).backgroundColor;
  const ladoLaranja1Cor = window.getComputedStyle(laranja[1]).backgroundColor;
  const ladoLaranja2Cor = window.getComputedStyle(laranja[2]).backgroundColor;
  const ladoLaranja3Cor = window.getComputedStyle(laranja[3]).backgroundColor;
  const ladoLaranja5Cor = window.getComputedStyle(laranja[5]).backgroundColor;
  const ladoLaranja6Cor = window.getComputedStyle(laranja[6]).backgroundColor;
  const ladoLaranja7Cor = window.getComputedStyle(laranja[7]).backgroundColor;
  const ladoLaranja8Cor = window.getComputedStyle(laranja[8]).backgroundColor;

  // Função para aplicar as cores capturadas.
  function aplicaMudancaCor() {
    azul[0].style.background = ladoAmarelo1Color;
    azul[3].style.background = ladoAmarelo2Color;
    azul[6].style.background = ladoAmarelo3Color;

    amarelo[0].style.background = ladoVerde3Color;
    amarelo[3].style.background = ladoVerde2Color;
    amarelo[6].style.background = ladoVerde1Color;

    verde[2].style.background = ladoBranco3Color;
    verde[5].style.background = ladoBranco2Color;
    verde[8].style.background = ladoBranco1Color;

    branco[0].style.background = ladoAzul1Color;
    branco[3].style.background = ladoAzul2Color;
    branco[6].style.background = ladoAzul3Color;

    laranja[0].style.background = ladoLaranja6Cor;
    laranja[1].style.background = ladoLaranja3Cor;
    laranja[2].style.background = ladoLaranja0Cor;
    laranja[3].style.background = ladoLaranja7Cor;
    laranja[5].style.background = ladoLaranja1Cor;
    laranja[6].style.background = ladoLaranja8Cor;
    laranja[7].style.background = ladoLaranja5Cor;
    laranja[8].style.background = ladoLaranja2Cor;
  }
  // Retornando a função para ser chamada posteriormente.
  aplicaMudancaCor();
}

function Llinha() {
  // Capturando os valores de background-color no momento da execução
  const ladoAzul1Color = window.getComputedStyle(azul[0]).backgroundColor;
  const ladoAzul2Color = window.getComputedStyle(azul[3]).backgroundColor;
  const ladoAzul3Color = window.getComputedStyle(azul[6]).backgroundColor;

  const ladoAmarelo1Color = window.getComputedStyle(amarelo[0]).backgroundColor;
  const ladoAmarelo2Color = window.getComputedStyle(amarelo[3]).backgroundColor;
  const ladoAmarelo3Color = window.getComputedStyle(amarelo[6]).backgroundColor;

  const ladoVerde1Color = window.getComputedStyle(verde[2]).backgroundColor;
  const ladoVerde2Color = window.getComputedStyle(verde[5]).backgroundColor;
  const ladoVerde3Color = window.getComputedStyle(verde[8]).backgroundColor;

  const ladoBranco1Color = window.getComputedStyle(branco[0]).backgroundColor;
  const ladoBranco2Color = window.getComputedStyle(branco[3]).backgroundColor;
  const ladoBranco3Color = window.getComputedStyle(branco[6]).backgroundColor;

  const ladoLaranja0Cor = window.getComputedStyle(laranja[0]).backgroundColor;
  const ladoLaranja1Cor = window.getComputedStyle(laranja[1]).backgroundColor;
  const ladoLaranja2Cor = window.getComputedStyle(laranja[2]).backgroundColor;
  const ladoLaranja3Cor = window.getComputedStyle(laranja[3]).backgroundColor;
  const ladoLaranja5Cor = window.getComputedStyle(laranja[5]).backgroundColor;
  const ladoLaranja6Cor = window.getComputedStyle(laranja[6]).backgroundColor;
  const ladoLaranja7Cor = window.getComputedStyle(laranja[7]).backgroundColor;
  const ladoLaranja8Cor = window.getComputedStyle(laranja[8]).backgroundColor;

  // Função para aplicar as cores capturadas.
  function aplicaMudancaCor() {
    azul[0].style.background = ladoBranco1Color;
    azul[3].style.background = ladoBranco2Color;
    azul[6].style.background = ladoBranco3Color;

    amarelo[0].style.background = ladoAzul1Color;
    amarelo[3].style.background = ladoAzul2Color;
    amarelo[6].style.background = ladoAzul3Color;

    verde[8].style.background = ladoAmarelo1Color;
    verde[5].style.background = ladoAmarelo2Color;
    verde[2].style.background = ladoAmarelo3Color;

    branco[6].style.background = ladoVerde1Color;
    branco[3].style.background = ladoVerde2Color;
    branco[0].style.background = ladoVerde3Color;

    laranja[0].style.background = ladoLaranja2Cor;
    laranja[1].style.background = ladoLaranja5Cor;
    laranja[2].style.background = ladoLaranja8Cor;
    laranja[3].style.background = ladoLaranja1Cor;
    laranja[5].style.background = ladoLaranja7Cor;
    laranja[6].style.background = ladoLaranja0Cor;
    laranja[7].style.background = ladoLaranja3Cor;
    laranja[8].style.background = ladoLaranja6Cor;
  }
  // Retornando a função para ser chamada posteriormente.
  aplicaMudancaCor();
}

function U(){
  // Capturando os valores de background-color no momento da execução
  const ladoAzul1Color = window.getComputedStyle(azul[0]).backgroundColor;
  const ladoAzul2Color = window.getComputedStyle(azul[1]).backgroundColor;
  const ladoAzul3Color = window.getComputedStyle(azul[2]).backgroundColor;  

  const ladoVerde1Color = window.getComputedStyle(verde[0]).backgroundColor;
  const ladoVerde2Color = window.getComputedStyle(verde[1]).backgroundColor;
  const ladoVerde3Color = window.getComputedStyle(verde[2]).backgroundColor;

  const ladoLaranja1Color = window.getComputedStyle(laranja[0]).backgroundColor;
  const ladoLaranja2Color = window.getComputedStyle(laranja[1]).backgroundColor;
  const ladoLaranja3Color = window.getComputedStyle(laranja[2]).backgroundColor;

  const ladoVermelho1Color = window.getComputedStyle(vermelho[0]).backgroundColor;
  const ladoVermelho2Color = window.getComputedStyle(vermelho[1]).backgroundColor;
  const ladoVermelho3Color = window.getComputedStyle(vermelho[2]).backgroundColor;

  const ladoAmarelo0Cor = window.getComputedStyle(amarelo[0]).backgroundColor;
  const ladoAmarelo1Cor = window.getComputedStyle(amarelo[1]).backgroundColor;
  const ladoAmarelo2Cor = window.getComputedStyle(amarelo[2]).backgroundColor;
  const ladoAmarelo3Cor = window.getComputedStyle(amarelo[3]).backgroundColor;
  const ladoAmarelo5Cor = window.getComputedStyle(amarelo[5]).backgroundColor;
  const ladoAmarelo6Cor = window.getComputedStyle(amarelo[6]).backgroundColor;
  const ladoAmarelo7Cor = window.getComputedStyle(amarelo[7]).backgroundColor;
  const ladoAmarelo8Cor = window.getComputedStyle(amarelo[8]).backgroundColor;
  
  // Função para aplicar as cores capturadas.
  function aplicaMudancaCor() {
    azul[0].style.background = ladoVermelho1Color;
    azul[1].style.background = ladoVermelho2Color;
    azul[2].style.background = ladoVermelho3Color;

    verde[0].style.background = ladoLaranja1Color;
    verde[1].style.background = ladoLaranja2Color;
    verde[2].style.background = ladoLaranja3Color; 
    
    laranja[0].style.background = ladoAzul1Color;
    laranja[1].style.background = ladoAzul2Color;
    laranja[2].style.background = ladoAzul3Color;

    vermelho[0].style.background = ladoVerde1Color;
    vermelho[1].style.background = ladoVerde2Color;
    vermelho[2].style.background = ladoVerde3Color;

    amarelo[0].style.background = ladoAmarelo6Cor;
    amarelo[1].style.background = ladoAmarelo3Cor;
    amarelo[2].style.background = ladoAmarelo0Cor;
    amarelo[3].style.background = ladoAmarelo7Cor;
    amarelo[5].style.background = ladoAmarelo1Cor;
    amarelo[6].style.background = ladoAmarelo8Cor;
    amarelo[7].style.background = ladoAmarelo5Cor;
    amarelo[8].style.background = ladoAmarelo2Cor;
  }
  // Retornando a função para ser chamada posteriormente.
  aplicaMudancaCor();
}

function Ulinha() {
  // Capturando os valores de background-color no momento da execução
  const ladoAzul1Color = window.getComputedStyle(azul[0]).backgroundColor;
  const ladoAzul2Color = window.getComputedStyle(azul[1]).backgroundColor;
  const ladoAzul3Color = window.getComputedStyle(azul[2]).backgroundColor;  

  const ladoVerde1Color = window.getComputedStyle(verde[0]).backgroundColor;
  const ladoVerde2Color = window.getComputedStyle(verde[1]).backgroundColor;
  const ladoVerde3Color = window.getComputedStyle(verde[2]).backgroundColor;

  const ladoLaranja1Color = window.getComputedStyle(laranja[0]).backgroundColor;
  const ladoLaranja2Color = window.getComputedStyle(laranja[1]).backgroundColor;
  const ladoLaranja3Color = window.getComputedStyle(laranja[2]).backgroundColor;

  const ladoVermelho1Color = window.getComputedStyle(vermelho[0]).backgroundColor;
  const ladoVermelho2Color = window.getComputedStyle(vermelho[1]).backgroundColor;
  const ladoVermelho3Color = window.getComputedStyle(vermelho[2]).backgroundColor;

  const ladoAmarelo0Cor = window.getComputedStyle(amarelo[0]).backgroundColor;
  const ladoAmarelo1Cor = window.getComputedStyle(amarelo[1]).backgroundColor;
  const ladoAmarelo2Cor = window.getComputedStyle(amarelo[2]).backgroundColor;
  const ladoAmarelo3Cor = window.getComputedStyle(amarelo[3]).backgroundColor;
  const ladoAmarelo5Cor = window.getComputedStyle(amarelo[5]).backgroundColor;
  const ladoAmarelo6Cor = window.getComputedStyle(amarelo[6]).backgroundColor;
  const ladoAmarelo7Cor = window.getComputedStyle(amarelo[7]).backgroundColor;
  const ladoAmarelo8Cor = window.getComputedStyle(amarelo[8]).backgroundColor;

  function aplicaMudancaCor() {
    azul[0].style.background = ladoLaranja1Color;
    azul[1].style.background = ladoLaranja2Color;
    azul[2].style.background = ladoLaranja3Color;

    verde[0].style.background = ladoVermelho1Color;
    verde[1].style.background = ladoVermelho2Color;
    verde[2].style.background = ladoVermelho3Color; 
    
    laranja[0].style.background = ladoVerde1Color;
    laranja[1].style.background = ladoVerde2Color;
    laranja[2].style.background = ladoVerde3Color;

    vermelho[0].style.background = ladoAzul1Color;
    vermelho[1].style.background = ladoAzul2Color;
    vermelho[2].style.background = ladoAzul3Color;

    amarelo[0].style.background = ladoAmarelo2Cor;
    amarelo[1].style.background = ladoAmarelo5Cor;
    amarelo[2].style.background = ladoAmarelo8Cor;
    amarelo[3].style.background = ladoAmarelo1Cor;
    amarelo[5].style.background = ladoAmarelo7Cor;
    amarelo[6].style.background = ladoAmarelo0Cor;
    amarelo[7].style.background = ladoAmarelo3Cor;
    amarelo[8].style.background = ladoAmarelo6Cor;
  }
  // Retornando a função para ser chamada posteriormente.
  aplicaMudancaCor();
}

function D() {
  // Capturando os valores de background-color no momento da execução
  const ladoAzul1Color = window.getComputedStyle(azul[6]).backgroundColor;
  const ladoAzul2Color = window.getComputedStyle(azul[7]).backgroundColor;
  const ladoAzul3Color = window.getComputedStyle(azul[8]).backgroundColor;  

  const ladoVerde1Color = window.getComputedStyle(verde[6]).backgroundColor;
  const ladoVerde2Color = window.getComputedStyle(verde[7]).backgroundColor;
  const ladoVerde3Color = window.getComputedStyle(verde[8]).backgroundColor;

  const ladoLaranja1Color = window.getComputedStyle(laranja[6]).backgroundColor;
  const ladoLaranja2Color = window.getComputedStyle(laranja[7]).backgroundColor;
  const ladoLaranja3Color = window.getComputedStyle(laranja[8]).backgroundColor;

  const ladoVermelho1Color = window.getComputedStyle(vermelho[6]).backgroundColor;
  const ladoVermelho2Color = window.getComputedStyle(vermelho[7]).backgroundColor;
  const ladoVermelho3Color = window.getComputedStyle(vermelho[8]).backgroundColor;

  const ladoBranco0Cor = window.getComputedStyle(branco[0]).backgroundColor;
  const ladoBranco1Cor = window.getComputedStyle(branco[1]).backgroundColor;
  const ladoBranco2Cor = window.getComputedStyle(branco[2]).backgroundColor;
  const ladoBranco3Cor = window.getComputedStyle(branco[3]).backgroundColor;
  const ladoBranco5Cor = window.getComputedStyle(branco[5]).backgroundColor;
  const ladoBranco6Cor = window.getComputedStyle(branco[6]).backgroundColor;
  const ladoBranco7Cor = window.getComputedStyle(branco[7]).backgroundColor;
  const ladoBranco8Cor = window.getComputedStyle(branco[8]).backgroundColor;

  function aplicaMudancaCor() {
    azul[6].style.background = ladoLaranja1Color;
    azul[7].style.background = ladoLaranja2Color;
    azul[8].style.background = ladoLaranja3Color;

    verde[6].style.background = ladoVermelho1Color;
    verde[7].style.background = ladoVermelho2Color;
    verde[8].style.background = ladoVermelho3Color; 
    
    laranja[6].style.background = ladoVerde1Color;
    laranja[7].style.background = ladoVerde2Color;
    laranja[8].style.background = ladoVerde3Color;

    vermelho[6].style.background = ladoAzul1Color;
    vermelho[7].style.background = ladoAzul2Color;
    vermelho[8].style.background = ladoAzul3Color;

    branco[0].style.background = ladoBranco6Cor;
    branco[1].style.background = ladoBranco3Cor;
    branco[2].style.background = ladoBranco0Cor;
    branco[3].style.background = ladoBranco7Cor;
    branco[5].style.background = ladoBranco1Cor;
    branco[6].style.background = ladoBranco8Cor;
    branco[7].style.background = ladoBranco5Cor;
    branco[8].style.background = ladoBranco2Cor;
  }
  // Retornando a função para ser chamada posteriormente.
  aplicaMudancaCor();
}

function Dlinha() {
  // Capturando os valores de background-color no momento da execução
  const ladoAzul1Color = window.getComputedStyle(azul[6]).backgroundColor;
  const ladoAzul2Color = window.getComputedStyle(azul[7]).backgroundColor;
  const ladoAzul3Color = window.getComputedStyle(azul[8]).backgroundColor;  

  const ladoVerde1Color = window.getComputedStyle(verde[6]).backgroundColor;
  const ladoVerde2Color = window.getComputedStyle(verde[7]).backgroundColor;
  const ladoVerde3Color = window.getComputedStyle(verde[8]).backgroundColor;

  const ladoLaranja1Color = window.getComputedStyle(laranja[6]).backgroundColor;
  const ladoLaranja2Color = window.getComputedStyle(laranja[7]).backgroundColor;
  const ladoLaranja3Color = window.getComputedStyle(laranja[8]).backgroundColor;

  const ladoVermelho1Color = window.getComputedStyle(vermelho[6]).backgroundColor;
  const ladoVermelho2Color = window.getComputedStyle(vermelho[7]).backgroundColor;
  const ladoVermelho3Color = window.getComputedStyle(vermelho[8]).backgroundColor;

  const ladoBranco0Cor = window.getComputedStyle(branco[0]).backgroundColor;
  const ladoBranco1Cor = window.getComputedStyle(branco[1]).backgroundColor;
  const ladoBranco2Cor = window.getComputedStyle(branco[2]).backgroundColor;
  const ladoBranco3Cor = window.getComputedStyle(branco[3]).backgroundColor;
  const ladoBranco5Cor = window.getComputedStyle(branco[5]).backgroundColor;
  const ladoBranco6Cor = window.getComputedStyle(branco[6]).backgroundColor;
  const ladoBranco7Cor = window.getComputedStyle(branco[7]).backgroundColor;
  const ladoBranco8Cor = window.getComputedStyle(branco[8]).backgroundColor;
  
  // Função para aplicar as cores capturadas.
  function aplicaMudancaCor() {
    azul[6].style.background = ladoVermelho1Color;
    azul[7].style.background = ladoVermelho2Color;
    azul[8].style.background = ladoVermelho3Color;

    verde[6].style.background = ladoLaranja1Color;
    verde[7].style.background = ladoLaranja2Color;
    verde[8].style.background = ladoLaranja3Color; 
    
    laranja[6].style.background = ladoAzul1Color;
    laranja[7].style.background = ladoAzul2Color;
    laranja[8].style.background = ladoAzul3Color;

    vermelho[6].style.background = ladoVerde1Color;
    vermelho[7].style.background = ladoVerde2Color;
    vermelho[8].style.background = ladoVerde3Color;

    branco[0].style.background = ladoBranco2Cor;
    branco[1].style.background = ladoBranco5Cor;
    branco[2].style.background = ladoBranco8Cor;
    branco[3].style.background = ladoBranco1Cor;
    branco[5].style.background = ladoBranco7Cor;
    branco[6].style.background = ladoBranco0Cor;
    branco[7].style.background = ladoBranco3Cor;
    branco[8].style.background = ladoBranco6Cor;
  }
  // Retornando a função para ser chamada posteriormente.
  aplicaMudancaCor();
}

function F() {
  // Capturando os valores de background-color no momento da execução
  const ladoLaranja1Color = window.getComputedStyle(laranja[2]).backgroundColor;
  const ladoLaranja2Color = window.getComputedStyle(laranja[5]).backgroundColor;
  const ladoLaranja3Color = window.getComputedStyle(laranja[8]).backgroundColor;

  const ladoVermelho1Color = window.getComputedStyle(vermelho[0]).backgroundColor;
  const ladoVermelho2Color = window.getComputedStyle(vermelho[3]).backgroundColor;
  const ladoVermelho3Color = window.getComputedStyle(vermelho[6]).backgroundColor;

  const ladoAmarelo1Color = window.getComputedStyle(amarelo[6]).backgroundColor;
  const ladoAmarelo2Color = window.getComputedStyle(amarelo[7]).backgroundColor;
  const ladoAmarelo3Color = window.getComputedStyle(amarelo[8]).backgroundColor;

  const ladoBranco1Color = window.getComputedStyle(branco[0]).backgroundColor;
  const ladoBranco2Color = window.getComputedStyle(branco[1]).backgroundColor;
  const ladoBranco3Color = window.getComputedStyle(branco[2]).backgroundColor;

  const ladoAzul0Cor = window.getComputedStyle(azul[0]).backgroundColor;
  const ladoAzul1Cor = window.getComputedStyle(azul[1]).backgroundColor;
  const ladoAzul2Cor = window.getComputedStyle(azul[2]).backgroundColor;
  const ladoAzul3Cor = window.getComputedStyle(azul[3]).backgroundColor;
  const ladoAzul5Cor = window.getComputedStyle(azul[5]).backgroundColor;
  const ladoAzul6Cor = window.getComputedStyle(azul[6]).backgroundColor;
  const ladoAzul7Cor = window.getComputedStyle(azul[7]).backgroundColor;
  const ladoAzul8Cor = window.getComputedStyle(azul[8]).backgroundColor;
  
  // Função para aplicar as cores capturadas.
  function aplicaMudancaCor() {
    amarelo[8].style.background = ladoLaranja1Color;
    amarelo[7].style.background = ladoLaranja2Color;
    amarelo[6].style.background = ladoLaranja3Color;

    laranja[2].style.background = ladoBranco1Color;
    laranja[5].style.background = ladoBranco2Color;
    laranja[8].style.background = ladoBranco3Color; 
    
    branco[2].style.background = ladoVermelho1Color;
    branco[1].style.background = ladoVermelho2Color;
    branco[0].style.background = ladoVermelho3Color;

    vermelho[0].style.background = ladoAmarelo1Color;
    vermelho[3].style.background = ladoAmarelo2Color;
    vermelho[6].style.background = ladoAmarelo3Color;

    azul[0].style.background = ladoAzul6Cor;
    azul[1].style.background = ladoAzul3Cor;
    azul[2].style.background = ladoAzul0Cor;
    azul[3].style.background = ladoAzul7Cor;
    azul[5].style.background = ladoAzul1Cor;
    azul[6].style.background = ladoAzul8Cor;
    azul[7].style.background = ladoAzul5Cor;
    azul[8].style.background = ladoAzul2Cor;
  }
  // Retornando a função para ser chamada posteriormente.
  aplicaMudancaCor();
}

function Flinha() {
  // Capturando os valores de background-color no momento da execução
  const ladoLaranja1Color = window.getComputedStyle(laranja[2]).backgroundColor;
  const ladoLaranja2Color = window.getComputedStyle(laranja[5]).backgroundColor;
  const ladoLaranja3Color = window.getComputedStyle(laranja[8]).backgroundColor;

  const ladoVermelho1Color = window.getComputedStyle(vermelho[0]).backgroundColor;
  const ladoVermelho2Color = window.getComputedStyle(vermelho[3]).backgroundColor;
  const ladoVermelho3Color = window.getComputedStyle(vermelho[6]).backgroundColor;

  const ladoAmarelo1Color = window.getComputedStyle(amarelo[6]).backgroundColor;
  const ladoAmarelo2Color = window.getComputedStyle(amarelo[7]).backgroundColor;
  const ladoAmarelo3Color = window.getComputedStyle(amarelo[8]).backgroundColor;

  const ladoBranco1Color = window.getComputedStyle(branco[0]).backgroundColor;
  const ladoBranco2Color = window.getComputedStyle(branco[1]).backgroundColor;
  const ladoBranco3Color = window.getComputedStyle(branco[2]).backgroundColor;

  const ladoAzul0Cor = window.getComputedStyle(azul[0]).backgroundColor;
  const ladoAzul1Cor = window.getComputedStyle(azul[1]).backgroundColor;
  const ladoAzul2Cor = window.getComputedStyle(azul[2]).backgroundColor;
  const ladoAzul3Cor = window.getComputedStyle(azul[3]).backgroundColor;
  const ladoAzul5Cor = window.getComputedStyle(azul[5]).backgroundColor;
  const ladoAzul6Cor = window.getComputedStyle(azul[6]).backgroundColor;
  const ladoAzul7Cor = window.getComputedStyle(azul[7]).backgroundColor;
  const ladoAzul8Cor = window.getComputedStyle(azul[8]).backgroundColor;
  
  // Função para aplicar as cores capturadas.
  function aplicaMudancaCor() {
    amarelo[6].style.background = ladoVermelho1Color;
    amarelo[7].style.background = ladoVermelho2Color;
    amarelo[8].style.background = ladoVermelho3Color;

    laranja[8].style.background = ladoAmarelo1Color;
    laranja[5].style.background = ladoAmarelo2Color;
    laranja[2].style.background = ladoAmarelo3Color; 
    
    branco[0].style.background = ladoLaranja1Color;
    branco[1].style.background = ladoLaranja2Color;
    branco[2].style.background = ladoLaranja3Color;

    vermelho[6].style.background = ladoBranco1Color;
    vermelho[3].style.background = ladoBranco2Color;
    vermelho[0].style.background = ladoBranco3Color;

    azul[0].style.background = ladoAzul2Cor;
    azul[1].style.background = ladoAzul5Cor;
    azul[2].style.background = ladoAzul8Cor;
    azul[3].style.background = ladoAzul1Cor;
    azul[5].style.background = ladoAzul7Cor;
    azul[6].style.background = ladoAzul0Cor;
    azul[7].style.background = ladoAzul3Cor;
    azul[8].style.background = ladoAzul6Cor;
  }
  // Retornando a função para ser chamada posteriormente.
  aplicaMudancaCor();
}

function B() {
  // Capturando os valores de background-color no momento da execução
  const ladoLaranja1Color = window.getComputedStyle(laranja[0]).backgroundColor;
  const ladoLaranja2Color = window.getComputedStyle(laranja[3]).backgroundColor;
  const ladoLaranja3Color = window.getComputedStyle(laranja[6]).backgroundColor;

  const ladoVermelho1Color = window.getComputedStyle(vermelho[2]).backgroundColor;
  const ladoVermelho2Color = window.getComputedStyle(vermelho[5]).backgroundColor;
  const ladoVermelho3Color = window.getComputedStyle(vermelho[8]).backgroundColor;

  const ladoAmarelo1Color = window.getComputedStyle(amarelo[0]).backgroundColor;
  const ladoAmarelo2Color = window.getComputedStyle(amarelo[1]).backgroundColor;
  const ladoAmarelo3Color = window.getComputedStyle(amarelo[2]).backgroundColor;

  const ladoBranco1Color = window.getComputedStyle(branco[6]).backgroundColor;
  const ladoBranco2Color = window.getComputedStyle(branco[7]).backgroundColor;
  const ladoBranco3Color = window.getComputedStyle(branco[8]).backgroundColor;

  const ladoVerde0Cor = window.getComputedStyle(verde[0]).backgroundColor;
  const ladoVerde1Cor = window.getComputedStyle(verde[1]).backgroundColor;
  const ladoVerde2Cor = window.getComputedStyle(verde[2]).backgroundColor;
  const ladoVerde3Cor = window.getComputedStyle(verde[3]).backgroundColor;
  const ladoVerde5Cor = window.getComputedStyle(verde[5]).backgroundColor;
  const ladoVerde6Cor = window.getComputedStyle(verde[6]).backgroundColor;
  const ladoVerde7Cor = window.getComputedStyle(verde[7]).backgroundColor;
  const ladoVerde8Cor = window.getComputedStyle(verde[8]).backgroundColor;
  
  // Função para aplicar as cores capturadas.
  function aplicaMudancaCor() {
    amarelo[0].style.background = ladoVermelho1Color;
    amarelo[1].style.background = ladoVermelho2Color;
    amarelo[2].style.background = ladoVermelho3Color;

    laranja[6].style.background = ladoAmarelo1Color;
    laranja[3].style.background = ladoAmarelo2Color;
    laranja[0].style.background = ladoAmarelo3Color; 
    
    branco[6].style.background = ladoLaranja1Color;
    branco[7].style.background = ladoLaranja2Color;
    branco[8].style.background = ladoLaranja3Color;

    vermelho[8].style.background = ladoBranco1Color;
    vermelho[5].style.background = ladoBranco2Color;
    vermelho[2].style.background = ladoBranco3Color;

    verde[0].style.background = ladoVerde6Cor;
    verde[1].style.background = ladoVerde3Cor;
    verde[2].style.background = ladoVerde0Cor;
    verde[3].style.background = ladoVerde7Cor;
    verde[5].style.background = ladoVerde1Cor;
    verde[6].style.background = ladoVerde8Cor;
    verde[7].style.background = ladoVerde5Cor;
    verde[8].style.background = ladoVerde2Cor;
  }
  // Retornando a função para ser chamada posteriormente.
  aplicaMudancaCor();
}

function Blinha() {
  // Capturando os valores de background-color no momento da execução
  const ladoLaranja1Color = window.getComputedStyle(laranja[0]).backgroundColor;
  const ladoLaranja2Color = window.getComputedStyle(laranja[3]).backgroundColor;
  const ladoLaranja3Color = window.getComputedStyle(laranja[6]).backgroundColor;

  const ladoVermelho1Color = window.getComputedStyle(vermelho[2]).backgroundColor;
  const ladoVermelho2Color = window.getComputedStyle(vermelho[5]).backgroundColor;
  const ladoVermelho3Color = window.getComputedStyle(vermelho[8]).backgroundColor;

  const ladoAmarelo1Color = window.getComputedStyle(amarelo[0]).backgroundColor;
  const ladoAmarelo2Color = window.getComputedStyle(amarelo[1]).backgroundColor;
  const ladoAmarelo3Color = window.getComputedStyle(amarelo[2]).backgroundColor;

  const ladoBranco1Color = window.getComputedStyle(branco[6]).backgroundColor;
  const ladoBranco2Color = window.getComputedStyle(branco[7]).backgroundColor;
  const ladoBranco3Color = window.getComputedStyle(branco[8]).backgroundColor;

  const ladoVerde0Cor = window.getComputedStyle(verde[0]).backgroundColor;
  const ladoVerde1Cor = window.getComputedStyle(verde[1]).backgroundColor;
  const ladoVerde2Cor = window.getComputedStyle(verde[2]).backgroundColor;
  const ladoVerde3Cor = window.getComputedStyle(verde[3]).backgroundColor;
  const ladoVerde5Cor = window.getComputedStyle(verde[5]).backgroundColor;
  const ladoVerde6Cor = window.getComputedStyle(verde[6]).backgroundColor;
  const ladoVerde7Cor = window.getComputedStyle(verde[7]).backgroundColor;
  const ladoVerde8Cor = window.getComputedStyle(verde[8]).backgroundColor;
  
  // Função para aplicar as cores capturadas.
  function aplicaMudancaCor() {
    amarelo[2].style.background = ladoLaranja1Color;
    amarelo[1].style.background = ladoLaranja2Color;
    amarelo[0].style.background = ladoLaranja3Color;

    laranja[0].style.background = ladoBranco1Color;
    laranja[3].style.background = ladoBranco2Color;
    laranja[6].style.background = ladoBranco3Color; 
    
    branco[8].style.background = ladoVermelho1Color;
    branco[7].style.background = ladoVermelho2Color;
    branco[6].style.background = ladoVermelho3Color;

    vermelho[2].style.background = ladoAmarelo1Color;
    vermelho[5].style.background = ladoAmarelo2Color;
    vermelho[8].style.background = ladoAmarelo3Color;

    verde[0].style.background = ladoVerde2Cor;
    verde[1].style.background = ladoVerde5Cor;
    verde[2].style.background = ladoVerde8Cor;
    verde[3].style.background = ladoVerde1Cor;
    verde[5].style.background = ladoVerde7Cor;
    verde[6].style.background = ladoVerde0Cor;
    verde[7].style.background = ladoVerde3Cor;
    verde[8].style.background = ladoVerde6Cor;
  }
  // Retornando a função para ser chamada posteriormente.
  aplicaMudancaCor();
}
  // Função para aplicar as cores capturadas
  function applyCapturedColors() {
    azul[2].style.background = ladoBranco1Color;
    azul[5].style.background = ladoBranco2Color;
    azul[8].style.background = ladoBranco3Color;

    amarelo[2].style.background = ladoAzul1Color;
    amarelo[5].style.background = ladoAzul2Color;
    amarelo[8].style.background = ladoAzul3Color;

    verde[0].style.background = ladoAmarelo1Color;
    verde[3].style.background = ladoAmarelo2Color;
    verde[6].style.background = ladoAmarelo3Color;

    branco[2].style.background = ladoVerde1Color;
    branco[5].style.background = ladoVerde2Color;
    branco[8].style.background = ladoVerde3Color;
  }

// dá pra fazer varias funções que torcam as cores, ou seja, rotaciona os lados para você jamanta
function reiniciaCuboEstagio1() {
  for (let index = 0; index < 9; index++) {
    azul[index].style.background = cor_cinza;
    verde[index].style.background = cor_cinza;
    laranja[index].style.background = cor_cinza;
    vermelho[index].style.background = cor_cinza;
    amarelo[index].style.background = cor_cinza;
    branco[index].style.background = cor_cinza;
  }
  azul[4].style.background = cor_azul;
  verde[4].style.background = cor_verde;
  laranja[4].style.background = cor_laranja;
  vermelho[4].style.background = cor_vermelho;
  amarelo[4].style.background = cor_amarelo;
  branco[4].style.background = cor_branco;
}

function fase_inicial(){
  if (contadorEtapa == 1) {
    reiniciaCuboEstagio1();
    contadorEtapa++;
    return;
  }
  if (contadorEtapa == 2) {
    azul[1].style.background = cor_azul;
    verde[1].style.background = cor_verde;
    laranja[1].style.background = laranja;
    vermelho[1].style.background = cor_vermelho;
    amarelo[1].style.background = cor_branco;
    amarelo[3].style.background = cor_branco;
    amarelo[5].style.background = cor_branco;
    amarelo[7].style.background = cor_branco;
    contadorEtapa++;
    return;
  }
  if (contadorEtapa == 3) {
    reiniciaCuboEstagio1();
    azul[7].style.background = cor_azul;
    verde[7].style.background = cor_verde;
    laranja[7].style.background = cor_laranja;
    vermelho[7].style.background = cor_vermelho;
    branco[1].style.background = cor_branco;
    branco[3].style.background = cor_branco;
    branco[5].style.background = cor_branco;
    branco[7].style.background = cor_branco;
    contadorEtapa++;
    return;
  }
  if (contadorEtapa == 4) {
    azul[2].style.background = cor_azul;
    vermelho[0].style.background = cor_branco;
    amarelo[8].style.background = cor_vermelho;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 5) {
    // Desfazendo a modificação
    azul[2].style.background = cor_cinza;

    vermelho[0].style.background = cor_cinza;
    vermelho[7].style.background = cor_cinza;

    branco[5].style.background = cor_cinza;

    amarelo[8].style.background = cor_cinza;

    // Fazendo movimento

    azul[5].style.background = cor_branco;

    vermelho[2].style.background = cor_branco;
    vermelho[3].style.background = cor_vermelho;

    amarelo[2].style.background = cor_azul;

    verde[0].style.background = cor_vermelho;

    contadorEtapa++;
    return;
  }
  if (contadorEtapa == 6) {
    // Desfazendo a modificação

    vermelho[2].style.background = cor_cinza;
    
    amarelo[2].style.background = cor_cinza;
    
    verde[0].style.background = cor_cinza;

    // Fazendo movimento

    azul[2].style.background = cor_branco;

    vermelho[3].style.background = cor_vermelho;
    vermelho[0].style.background = cor_vermelho;

    amarelo[8].style.background = cor_azul;

    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 7) {
    // Desfazendo a modificação

    azul[2].style.background = cor_cinza;
    azul[5].style.background = cor_cinza;
    
    vermelho[3].style.background = cor_cinza;
    vermelho[0].style.background = cor_cinza;
    
    amarelo[8].style.background = cor_cinza;

    // Fazendo movimento

    azul[8].style.background = cor_azul;

    vermelho[6].style.background = cor_vermelho;
    vermelho[7].style.background = cor_vermelho;

    branco[2].style.background = cor_branco;
    branco[5].style.background = cor_branco;

    contadorEtapa = contadorEtapa + 5;
    return;

  }

  if (contadorEtapa == 12) {

    branco[0].style.background = cor_branco;
    branco[6].style.background = cor_branco;
    branco[8].style.background = cor_branco;

    azul[6].style.background = cor_azul;

    vermelho[8].style.background = cor_vermelho;

    verde[6].style.background = cor_verde;
    verde[8].style.background = cor_verde;

    laranja[6].style.background = cor_laranja;
    laranja[8].style.background = cor_laranja;
    contadorEtapa ++;
    return;
  }

  if (contadorEtapa == 13) {

    azul[1].style.background = cor_azul;
    amarelo[7].style.background = cor_vermelho;
    
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 14) {
    
    azul[1].style.background = cor_cinza;
    amarelo[7].style.background = cor_cinza;

    laranja[1].style.background = cor_azul;

    amarelo[3].style.background = cor_vermelho;

    contadorEtapa++;
    return;
  }

}