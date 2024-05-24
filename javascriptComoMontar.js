let azul = document.querySelectorAll(".lado-azul");
let verde = document.querySelectorAll(".lado-verde");
let laranja = document.querySelectorAll(".lado-laranja");
let vermelho = document.querySelectorAll(".lado-vermelho");
let amarelo = document.querySelectorAll(".lado-amarelo");
let branco = document.querySelectorAll(".lado-branco");

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

// Iniciando como montar cubo mágico

let contadorMovimento1 = 0;
let contadorMovimento2 = 0;
let contadorMovimento4 = 0;
let contadorMovimento5 = 0;
let contadorMovimento6 = 0;

let valorP = 0;

let contadorEtapa = 1;
let contadorMovimento;
let titulo = document.querySelector(".titulo");
let mensagem = document.querySelector(".mensagens");
let comandos = document.querySelector(".comandos_montagem");

function movimentoPrimarioR() {
  if (contadorMovimento1 == 0) {
    U();
    contadorMovimento1++;
    return;
  }

  if (contadorMovimento1 == 1) {
    R();
    contadorMovimento1++;
    return;
  }

  if (contadorMovimento1 == 2) {
    U();
    contadorMovimento1++;
    return;
  }

  if (contadorMovimento1 == 3) {
    Rlinha();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 4) {
    Ulinha();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 5) {
    Flinha();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 6) {
    Ulinha();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 7) {
    F();
    contadorMovimento1 = 0;
    contadorEtapa++;
  }
}

function movimentoPrimarioL() {
  if (contadorMovimento1 == 0) {
    Ulinha();
    contadorMovimento1++;
    return;
  }

  if (contadorMovimento1 == 1) {
    Llinha();
    contadorMovimento1++;
    return;
  }

  if (contadorMovimento1 == 2) {
    Ulinha();
    contadorMovimento1++;
    return;
  }

  if (contadorMovimento1 == 3) {
    L();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 4) {
    U();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 5) {
    F();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 6) {
    U();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 7) {
    Flinha();
    contadorMovimento1 = 0;
    contadorEtapa++;
  }
}

function movimentoCruzA() {
  if (contadorMovimento2 == 0) {
    F();
    contadorMovimento2++;
    return;
  }

  if (contadorMovimento2 == 1) {
    R();
    contadorMovimento2++;
    return;
  }

  if (contadorMovimento2 == 2) {
    U();
    contadorMovimento2++;
    return;
  }

  if (contadorMovimento2 == 3) {
    Rlinha();
    contadorMovimento2++;
    return;
  }

  if (contadorMovimento2 == 4) {
    Ulinha();
    contadorMovimento2++;
    return;
  }

  if (contadorMovimento2 == 5) {
    Flinha();
    contadorMovimento2 = 0;
    contadorEtapa++;
  }
}

function movimentoPeixe() {
  if (contadorMovimento4 == 0) {
    R();
    contadorMovimento4++
    return;
  }
  
  if (contadorMovimento4 == 1) {
    U();
    contadorMovimento4++
    return;
  }

  if (contadorMovimento4 == 2) {
    Rlinha();
    contadorMovimento4++
    return;
  }

  if (contadorMovimento4 == 3) {
    U()
    contadorMovimento4++
    return;
  }

  if (contadorMovimento4 == 4) {
    R()
    contadorMovimento4++
    return;
  }

  if (contadorMovimento4 == 5) {
    U()
    U()
    contadorMovimento4++
    return;
  }

  if (contadorMovimento4 == 6) {
    Rlinha()
    contadorEtapa++;
    contadorMovimento4 = 0;
  }
}

function movimentoL() {
  if (contadorMovimento5 == 0) {
    Rlinha();
    contadorMovimento5++
    return;
  }
  
  if (contadorMovimento5 == 1) {
    F();
    contadorMovimento5++
    return;
  }

  if (contadorMovimento5 == 2) {
    Rlinha();
    contadorMovimento5++
    return;
  }

  if (contadorMovimento5 == 3) {
    B();
    B();
    contadorMovimento5++
    return;
  }

  if (contadorMovimento5 == 4) {
    R();
    contadorMovimento5++
    return;
  }

  if (contadorMovimento5 == 5) {
    Flinha();
    contadorMovimento5++
    return;
  }

  if (contadorMovimento5 == 6) {
    Rlinha()
    contadorMovimento5++
    return;
  }

  if (contadorMovimento5 == 7) {
    B();
    B();
    contadorMovimento5++
    return;
  }

  if (contadorMovimento5 == 8) {
    R();
    R();
    contadorEtapa++;
    contadorMovimento5 = 0;
  }
}

function movimentoMinerva() {
  if (contadorMovimento6 == 0) {
    F();
    F();
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 1) {
    U()
    mensagem.innerHTML = "Nesta etapa, é feito um U ou U', gire o topo para o lado em que se encaixa a cor, caso não encaixe a cor do meio do topo, com o meio da face do seu cubo <br> gire para qualquer lado uma vez o topo."
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 2) {
    Rlinha()
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 3) {
    L();
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 4) {
    F();
    F();
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 5) {
    R();    
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 6) {
    Llinha();
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 7) {
    mensagem.innerHTML = "Realize a rotação do topo, dependendo de como irá enxaicar as faces do lado esquerdo e direito."
    U();
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 8) {
    F();
    F();
    contadorMovimento6 = 0;
    contadorEtapa++;
  }
}

function pularEtapa() {
  contadorEtapa = contadorEtapa + valorP;
  fase_inicial();
}

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
    titulo.innerHTML = "Continue clicando no cubo para continuar";
    
    return;
  }
  if (contadorEtapa == 2) {
    azul[1].style.background = cor_azul;
    verde[1].style.background = cor_vermelho;
    laranja[1].style.backgroundColor = cor_verde 
    vermelho[1].style.background = cor_laranja;
    amarelo[1].style.background = cor_branco;
    amarelo[3].style.background = cor_branco;
    amarelo[5].style.background = cor_branco;
    amarelo[7].style.background = cor_branco;
    mensagem.innerHTML = "Coloque todas as partes brancas para cima, como mostrado no cubo <br> Não importa a ordem das outras peças, mas só da branca";
    titulo.innerHTML = "Fazendo cruz branca."
    valorP = 6;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 3) {
    valorP = 0;
    F()
    F()
    mensagem.innerHTML = "Vá girando o lado, para que a cor dos lados encaixe com a do meio <br> E uma por uma, girando para fazer a cruz branca de maneira correta"
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 4) {
    U()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 5) {
    B()
    B()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 6) {
    R()
    R()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 7) {
    U()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 8) {
    L()
    L()
    mensagem.innerHTML = "Agora temos a cruz branca no cubo."
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 9) {
    mensagem.innerHTML = "agora vamos fazer as quinas do branco corretamente;"
    amarelo[1].style.backgroundColor = cor_cinza;
    amarelo[3].style.backgroundColor = cor_cinza;
    amarelo[5].style.backgroundColor = cor_cinza;
    amarelo[7].style.backgroundColor = cor_cinza;
    branco[1].style.backgroundColor = cor_branco;
    branco[3].style.backgroundColor = cor_branco;
    branco[5].style.backgroundColor = cor_branco;
    branco[7].style.backgroundColor = cor_branco;
    azul[1].style.backgroundColor = cor_cinza;
    laranja[1].style.backgroundColor = cor_cinza;
    verde[1].style.backgroundColor = cor_cinza;
    vermelho[1].style.backgroundColor = cor_cinza;
    azul[7].style.backgroundColor = cor_azul;
    laranja[7].style.backgroundColor = cor_laranja;
    verde[7].style.backgroundColor = cor_verde;
    vermelho[7].style.backgroundColor = cor_vermelho;
    vermelho[0].style.backgroundColor = cor_branco;
    azul[2].style.backgroundColor = cor_azul;
    amarelo[8].style.backgroundColor = cor_vermelho;
    contadorEtapa++;
    valorP = 3;
    return;
  }

  if (contadorEtapa == 10) {
    valorP = 0;
    R()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 11) {
    U()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 12) {
    Rlinha()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 13) {
    vermelho[0].style.backgroundColor = cor_cinza;
    azul[2].style.backgroundColor = cor_cinza;
    amarelo[8].style.backgroundColor = cor_cinza;
    vermelho[6].style.backgroundColor = cor_vermelho;
    azul[8].style.backgroundColor = cor_azul;
    branco[2].style.backgroundColor = cor_branco;
    amarelo[6].style.backgroundColor = cor_branco;
    azul[0].style.backgroundColor = cor_laranja;
    laranja[2].style.backgroundColor = cor_azul;
    mensagem.innerHTML = "Outro emplo que estas peças podem estar, é com o branco virado para cima"
    valorP = 7;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 14) {
    valorP = 0;
    Llinha()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 15) {
    U()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 16) {
    L()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 17) {
    U()
    U()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 18) {
    Llinha()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 19) {
    Ulinha()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 20) {
    L()
    mensagem.innerHTML = "Agora é fazer os mesmos movimentos para arrumar todos os 4 lados."
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 21) {
    azul[0].style.backgroundColor = cor_cinza;
    laranja[2].style.backgroundColor = cor_cinza;
    amarelo[6].style.backgroundColor = cor_cinza;
    azul[6].style.backgroundColor = cor_azul;
    laranja[8].style.backgroundColor = cor_laranja;
    laranja[6].style.backgroundColor = cor_laranja;
    verde[8].style.backgroundColor = cor_verde;
    verde[6].style.backgroundColor = cor_verde;
    vermelho[8].style.backgroundColor = cor_vermelho;
    branco[6].style.backgroundColor = cor_branco;
    branco[8].style.backgroundColor = cor_branco;
    branco[0].style.backgroundColor = cor_branco;
    mensagem.innerHTML = "Feito isso, o cubo ficará assim: "
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 22) {
    mensagem.innerHTML = "O próximo passo é arrumas as quinas de duas cores entre os lados coloridos que não possuem a cor amarela"
    azul[1].style.backgroundColor = cor_azul;
    amarelo[7].style.backgroundColor = cor_vermelho;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 23) {
    movimentoPrimarioR();
    return;
  }

  if (contadorEtapa == 24) {
    azul[1].style.backgroundColor = cor_azul;
    amarelo[7].style.backgroundColor = cor_laranja;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 25) {
    movimentoPrimarioL();
    return;
  }

  if (contadorEtapa == 26) {
    mensagem.innerHTML = "Estas são as duas maneira, tanto para o lado esquerdo quando para o direito.";
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 27) {
    mensagem.innerHTML = "Mas e se o cubo estiver assim?";
    laranja[5].style.backgroundColor = cor_azul;
    azul[3].style.backgroundColor = cor_laranja;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 28) {
    mensagem.innerHTML = "Realize o movimento aprendido da mesma maneira, como se alguma outra fosse substituir ela! <br> Cor roxa meramente ilustrativa.";
    azul[1].style.backgroundColor = "darkviolet";
    amarelo[7].style.backgroundColor = "darkviolet";
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 29) {
    movimentoPrimarioL();
    return;
  }

  if (contadorEtapa == 30) {
    mensagem.innerHTML = "Agora que tiramos ela daquele lugar, podemos encaixar ela corretamente:"
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 31) {
    U();
    U();
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 32) {
    movimentoPrimarioL();
    return;
  }

  if (contadorEtapa == 33) {
    mensagem.innerHTML = "Encaixada corretamente!"
    verde[1].style.backgroundColor = cor_cinza;
    amarelo[1].style.backgroundColor = cor_cinza;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 34) {
    mensagem.innerHTML = "Ajeitando todos os lados, seu cubo ficará assim:";
    verde[3].style.backgroundColor = cor_verde;
    verde[5].style.backgroundColor = cor_verde;
    vermelho[5].style.backgroundColor = cor_vermelho;
    laranja[3].style.backgroundColor = cor_laranja;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 35) {
    mensagem.innerHTML = "Agora está na hora de ajeitar o topo amarelo não acha?"
    azul[1].style.backgroundColor = cor_amarelo;
    verde[1].style.backgroundColor = cor_amarelo;
    vermelho[1].style.backgroundColor = cor_amarelo;
    laranja[1].style.backgroundColor = cor_amarelo;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 36) {
    movimentoCruzA();
    return;
  }

  if (contadorEtapa == 37) {
    mensagem.innerHTML = "O cubo ficará com duas peças amarelas viradas para o topo";
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 38) {
    U()
    U()
    mensagem.innerHTML = "Rotacione o topo do cubo(U2) ficando como no cubo abaixo, e repita o movimento anterior";
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 39) {
    movimentoCruzA();
    return;
  }

  if (contadorEtapa == 40) {
    mensagem.innerHTML = "Agora ficará com uma linha no cubo, repita mais uma vez, para que faça a cruz amarela"
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 41) {
    movimentoCruzA();
    return;
  }

  if (contadorEtapa == 42) {
    mensagem.innerHTML = "Agora O cubo possui uma cruz amarela, estamos quase terminando."
    contadorEtapa++;
    return;
  }

  // Alternativa 1

  if (contadorEtapa == 43) {
    mensagem.innerHTML = "Neste momentos podemos ter diversas posições das peças amarelas <br> Porem usamos somente uma sequencia de movimentos para montar completar os amarelos no topo. <br> Caso seu cubo não esteja como no cubo abaixo, é só ir passando até ficar igual"
    valorP = 6;
    amarelo[2].style.backgroundColor = cor_amarelo;
    amarelo[8].style.backgroundColor = cor_amarelo;
    verde[2].style.backgroundColor = cor_amarelo;
    azul[0].style.backgroundColor = cor_amarelo;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 44) {
    // R U Rlinha U R 2U Rlinha
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 45) {
    U();
    mensagem.innerHTML = "Sempre que o topo amarelo parecer este peixinho, sempre o coloque nessa formação:"
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 46) {
    mensagem.innerHTML = "E vamos continuar!"
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 47) {
    U()
    U()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 48) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 49) {
    mensagem.innerHTML = "Cubo totalmente amarelo!";
    contadorEtapa++;
    return;
  }

  // Alternativa 2

  if (contadorEtapa == 50) {
    mensagem.innerHTML = "2 modo"
    amarelo[0].style.backgroundColor = cor_amarelo;
    amarelo[2].style.backgroundColor = cor_cinza;
    amarelo[6].style.backgroundColor = cor_cinza;
    amarelo[8].style.backgroundColor = cor_amarelo;
    verde[0].style.backgroundColor = cor_cinza;
    verde[2].style.backgroundColor = cor_cinza;
    laranja[0].style.backgroundColor = cor_cinza;
    laranja[2].style.backgroundColor = cor_cinza;
    azul[0].style.backgroundColor = cor_amarelo;
    vermelho[2].style.backgroundColor = cor_amarelo;
    valorP = 5;
    contadorEtapa++;
    return;    
  }

  if (contadorEtapa == 51) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 52) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 53) {
    U()
    U()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 54) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 55) {
    mensagem.innerHTML = "Topo amarelo completo!";
    contadorEtapa++;
    return;
  }

  // Alternativa 3

  if (contadorEtapa == 56) {
    amarelo[0].style.backgroundColor = cor_amarelo;
    amarelo[2].style.backgroundColor = cor_amarelo;
    amarelo[6].style.backgroundColor = cor_cinza;
    amarelo[8].style.backgroundColor = cor_cinza;
    azul[0].style.backgroundColor = cor_amarelo;
    azul[2].style.backgroundColor = cor_amarelo;
    vermelho[2].style.backgroundColor = cor_cinza;
    contadorEtapa++;
    valorP = 6;
    return;
  }

  if (contadorEtapa == 57) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 58) {
    Ulinha();
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 59) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 60) {
    U()
    U()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 61) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 62) {
    mensagem.innerHTML = "Topo concluido com sucesso!";
    contadorEtapa++;
    return;
  }

  // Alternativa 4

  if (contadorEtapa == 63) {
    mensagem.innerHTML = "Modo 5";
    amarelo[0].style.backgroundColor = cor_cinza;
    amarelo[2].style.backgroundColor = cor_cinza;
    amarelo[6].style.backgroundColor = cor_cinza;
    amarelo[8].style.backgroundColor = cor_cinza;
    vermelho[0].style.backgroundColor = cor_amarelo;
    vermelho[2].style.backgroundColor = cor_amarelo;
    laranja[0].style.backgroundColor = cor_amarelo;
    laranja[2].style.backgroundColor = cor_amarelo;
    azul[0].style.backgroundColor = cor_cinza;
    azul[2].style.backgroundColor = cor_cinza;
    valorP = 3;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 64) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 65) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 66) {
    mensagem.innerHTML = "Topo concluido com sucesso!"
    contadorEtapa++;
    return;
  }

  // alternativa 5

  if (contadorEtapa == 67) {
    amarelo[0].style.backgroundColor = cor_cinza;
    amarelo[2].style.backgroundColor = cor_cinza;
    amarelo[6].style.backgroundColor = cor_cinza;
    amarelo[8].style.backgroundColor = cor_cinza;
    laranja[0].style.backgroundColor = cor_amarelo;
    laranja[2].style.backgroundColor = cor_amarelo;
    azul[2].style.backgroundColor = cor_amarelo;
    verde[0].style.backgroundColor = cor_amarelo;
    vermelho[0].style.backgroundColor = cor_cinza;
    vermelho[2].style.backgroundColor = cor_cinza;
    contadorEtapa++;
    valorP = 4;
    return;
  }

  if (contadorEtapa == 68) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 69) {
    Ulinha();
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 70) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 71) {
    mensagem.innerHTML = "Montado amarelos!"
    contadorEtapa++;
    return;
  }

  // Alternativa 6

  if (contadorEtapa == 72) {
    mensagem.innerHTML = "Outra vez"
    amarelo[0].style.backgroundColor = cor_cinza;
    amarelo[2].style.backgroundColor = cor_cinza;
    amarelo[6].style.backgroundColor = cor_amarelo;
    amarelo[8].style.backgroundColor = cor_cinza;
    vermelho[0].style.backgroundColor = cor_amarelo;
    verde[0].style.backgroundColor = cor_amarelo;
    laranja[0].style.backgroundColor = cor_amarelo;
    azul[2].style.backgroundColor = cor_cinza;
    laranja[2].style.backgroundColor = cor_cinza;
    valorP = 4;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 73) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 74) {
    U();
    U();
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 75) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 76) {
    mensagem.innerHTML = "Topo montado novamente!"
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 77) {
    mensagem.innerHTML = "Ultima alternativa!"
    amarelo[0].style.backgroundColor = cor_cinza;
    amarelo[2].style.backgroundColor = cor_cinza;
    amarelo[6].style.backgroundColor = cor_amarelo;
    amarelo[8].style.backgroundColor = cor_cinza;
    azul[2].style.backgroundColor = cor_amarelo;
    vermelho[0].style.backgroundColor = cor_cinza;
    vermelho[2].style.backgroundColor = cor_amarelo;
    verde[0].style.backgroundColor = cor_cinza;
    verde[2].style.backgroundColor = cor_amarelo;
    laranja[0].style.backgroundColor = cor_cinza;
    laranja[2].style.backgroundColor = cor_cinza;
    contadorEtapa++;
    valorP = 2;
    return;
  }

  if (contadorEtapa == 78) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 79) {
    mensagem.innerHTML = "Etapas concluidas com sucesso!"
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 80) {
    azul[0].style.backgroundColor = "darkviolet";
    azul[2].style.backgroundColor = "darkviolet";
    mensagem.innerHTML = "Agora temos duas alternativas, ou temos 2 cantos de uma face da mesma cor como o exemplo:, ou não temos. <br> cor meramente ilustrativa, pode ser qualquer cor"
    contadorEtapa++;
    return;
  }


  if (contadorEtapa == 81) {
    mensagem.innerHTML = "Caso não tenha, faça o movimento:"
    azul[0].style.backgroundColor = cor_cinza;
    azul[2].style.backgroundColor = cor_cinza;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 82) {
    movimentoL();
    return;
  }

  if (contadorEtapa == 83) {
    mensagem.innerHTML = "Ao finalizar esta sequência, iremos ter o lado esquerdo, com dois cantos de mesma cor.";
    laranja[0].style.backgroundColor = "darkviolet";
    laranja[2].style.backgroundColor = "darkviolet";
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 84) {
    mensagem.innerHTML = "Rotacione o topo do cubo para este lado que possui duas cores iguais olharem para tras como no exemplo: <br> cor meramente ilustrativa, pode ser qualquer cor";
    U()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 85) {
    movimentoL();
    return;
  }

  if (contadorEtapa == 86) {
    mensagem.innerHTML = "Magicamente você terá os cantos de todas as fazer combinando automaticamente, basta rotacionar para encaixar as cores dos cantos, com seus respectivos lados."
    laranja[0].style.backgroundColor = cor_verde;
    laranja[2].style.backgroundColor = cor_verde;
    azul[0].style.backgroundColor = cor_laranja;
    azul[2].style.backgroundColor = cor_laranja;
    verde[0].style.backgroundColor = cor_vermelho;
    verde[2].style.backgroundColor = cor_vermelho;
    vermelho[0].style.backgroundColor = cor_azul;
    vermelho[2].style.backgroundColor = cor_azul;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 87) {
    U();
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 88) {
    mensagem.innerHTML = "Pode existir um lado em seu cubo, onde pode ou não existir, uma face já completa com a cor correta como no exemplo: ";
    vermelho[1].style.backgroundColor = cor_vermelho;
    contadorEtapa++;
    return;
  }


  if (contadorEtapa == 89) {
    mensagem.innerHTML = "Mas caso não exista tal face, realize o movimento a seguir que alguma face irá ficar arrumada automaticamente.";
    vermelho[1].style.backgroundColor = cor_cinza;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 90) {
    movimentoMinerva();
    return;
  }

  if (contadorEtapa == 91) {
    mensagem.innerHTML = "Feito o movimento, algum dos cantos irá ficar correto.";
    verde[1].style.backgroundColor = cor_verde;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 92) {
    mensagem.innerHTML = "Agora, coloque este lado para tras como no exemplo, e realize o movimento novamente.";
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 93) {
    movimentoMinerva();
    return;
  }

  if (contadorEtapa == 94) {
    azul[1].style.backgroundColor = cor_azul;
    laranja[1].style.backgroundColor = cor_laranja;
    vermelho[1].style.backgroundColor = cor_vermelho;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 95) {
    mensagem.innerHTML = "Se tudo estiver ocorrido corretamente, seu cubo estara montado nesse exato momenento, Parabéns!!"
    contadorEtapa = 0;
    return;
  }
}
