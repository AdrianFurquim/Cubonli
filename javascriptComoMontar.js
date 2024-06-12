let azul = document.querySelectorAll(".lado-azul");
let verde = document.querySelectorAll(".lado-verde");
let laranja = document.querySelectorAll(".lado-laranja");
let vermelho = document.querySelectorAll(".lado-vermelho");
let amarelo = document.querySelectorAll(".lado-amarelo");
let branco = document.querySelectorAll(".lado-branco");

// Variaveis com as cores para facilitar a digitação e modicação.
let cor_cinza = "gray";
let cor_azul = "blue";
let cor_verde = "rgb(3, 255, 3)";
let cor_laranja =  "orange";
let cor_vermelho = "red";
let cor_amarelo = "yellow";
let cor_branco = "white";

// Pegando o cubo.
const cube = document.querySelector(".cube");
// Setando o valor do X do mouse.
let mouseX = 0;
// Setando o valor do Y do mouse.
let mouseY = 0;
// Velocidade de rotação conforme se move o mouse.
const rotationValue = 410;

// Função para mover o mouse e o cubo junto.
const handleMouseMove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
  rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};
window.addEventListener("mousemove", handleMouseMove);

// Função para utilização do teclado ao montar, passar e pular etapas do cubo.
function handleKeyDown(event) {
  switch (event.key) {
    case 'v':
      // Ao clicar a tecla V, volta a etapa do cubo.
      voltarEtapa()
      break;
    case 'p':
      // Ao clicar a tecla P, passa uma etapa do cubo.
      pularEtapa();
      break;
    case 'c':
      // Ao clicar a tecla C, o programa Continua montando o cubo.
      montandoCubo();
      break;
    default:
      // Caso clique em uma tecla que não foi mapeada.
      console.log(`Tecla não mapeada: ${event.key}`);
  }
}

window.addEventListener('keydown', handleKeyDown);

// Movimento R do cubo.
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

// Movimento R' do cubo.
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

// Movimento L do cubo.
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

// Movimento L' do cubo.
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

// Movimento U do cubo.
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

// Movimento U' do cubo.
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

// Movimento D do cubo.
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

// Movimento D' do cubo.
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

// Movimento F do cubo.
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

// Movimento F' do cubo.
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

// Movimento B do cubo.
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

// Movimento B' do cubo.
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

// Iniciando como montar cubo mágico =================================================================================================

// Contadores para os movimentos de montagem do Cubo.
let contadorMovimento1 = 0;
let contadorMovimento2 = 0;
let contadorMovimento4 = 0;
let contadorMovimento5 = 0;
let contadorMovimento6 = 0;

// Valor para avançar a etapa.
let valorP = 0;
// Valor para voltar a etapa.
let valorV = 0;
// Contador para ir rodando passo a passo.
let contadorEtapa = 1;
let contadorMovimento;
let titulo = document.querySelector(".titulo");
let mensagem = document.querySelector(".mensagens");
let comandos = document.querySelector(".comandos_montagem");

// Movimento Right para ajeitar os lados das faces azul, verde, vermelho e laranja.
function movimentoPrimarioR() {
  if (contadorMovimento1 == 0) {
    document.getElementById('comando1').style.color = "rgb(86, 218, 86)";
    U();
    contadorMovimento1++;
    return;
  }

  if (contadorMovimento1 == 1) {
    document.getElementById('comando2').style.color = "rgb(86, 218, 86)";
    R();
    contadorMovimento1++;
    return;
  }

  if (contadorMovimento1 == 2) {
    document.getElementById('comando3').style.color = "rgb(86, 218, 86)";
    U();
    contadorMovimento1++;
    return;
  }

  if (contadorMovimento1 == 3) {
    document.getElementById('comando4').style.color = "rgb(86, 218, 86)";
    Rlinha();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 4) {
    document.getElementById('comando5').style.color = "rgb(86, 218, 86)";
    Ulinha();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 5) {
    document.getElementById('comando6').style.color = "rgb(86, 218, 86)";
    Flinha();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 6) {
    document.getElementById('comando7').style.color = "rgb(86, 218, 86)";
    Ulinha();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 7) {
    document.getElementById('comando8').style.color = "rgb(86, 218, 86)";
    F();
    contadorMovimento1 = 0;
    contadorEtapa++;
  }
  comandos.innerHTML = "";
}

// Movimento Left para ajeitar os lados das faces azul, verde, vermelho e laranja.
function movimentoPrimarioL() {
  if (contadorMovimento1 == 0) {
    document.getElementById('comando1').style.color = "rgb(86, 218, 86)";
    Ulinha();
    contadorMovimento1++;
    return;
  }

  if (contadorMovimento1 == 1) {
    document.getElementById('comando2').style.color = "rgb(86, 218, 86)";
    Llinha();
    contadorMovimento1++;
    return;
  }

  if (contadorMovimento1 == 2) {
    document.getElementById('comando3').style.color = "rgb(86, 218, 86)";
    Ulinha();
    contadorMovimento1++;
    return;
  }

  if (contadorMovimento1 == 3) {
    document.getElementById('comando4').style.color = "rgb(86, 218, 86)";
    L();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 4) {
    document.getElementById('comando5').style.color = "rgb(86, 218, 86)";
    U();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 5) {
    document.getElementById('comando6').style.color = "rgb(86, 218, 86)";
    F();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 6) {
    document.getElementById('comando7').style.color = "rgb(86, 218, 86)";
    U();
    contadorMovimento1++
    return;
  }

  if (contadorMovimento1 == 7) {
    document.getElementById('comando8').style.color = "rgb(86, 218, 86)";
    Flinha();
    contadorMovimento1 = 0;
    contadorEtapa++;
  }
  comandos.innerHTML = "";
}

// Movimento para montar a cruz amarela no cubo.
function movimentoCruzA() {
  if (contadorMovimento2 == 0) {
    document.getElementById('comando1').style.color = "rgb(86, 218, 86)";
    F();
    contadorMovimento2++;
    return;
  }

  if (contadorMovimento2 == 1) {
    document.getElementById('comando2').style.color = "rgb(86, 218, 86)";
    R();
    contadorMovimento2++;
    return;
  }

  if (contadorMovimento2 == 2) {
    document.getElementById('comando3').style.color = "rgb(86, 218, 86)";
    U();
    contadorMovimento2++;
    return;
  }

  if (contadorMovimento2 == 3) {
    document.getElementById('comando4').style.color = "rgb(86, 218, 86)";
    Rlinha();
    contadorMovimento2++;
    return;
  }

  if (contadorMovimento2 == 4) {
    document.getElementById('comando5').style.color = "rgb(86, 218, 86)";
    Ulinha();
    contadorMovimento2++;
    return;
  }

  if (contadorMovimento2 == 5) {
    document.getElementById('comando6').style.color = "rgb(86, 218, 86)";
    Flinha();
    contadorMovimento2 = 0;
    contadorEtapa++;
  }
  comandos.innerHTML = "";
}

// Movimento para completar o topo do cubo inteiro de amarelo
function movimentoPeixe() {
  if (contadorMovimento4 == 0) {
    document.getElementById('comando1').style.color = "rgb(86, 218, 86)";
    R();
    contadorMovimento4++
    return;
  }
  
  if (contadorMovimento4 == 1) {
    document.getElementById('comando2').style.color = "rgb(86, 218, 86)";
    U();
    contadorMovimento4++
    return;
  }

  if (contadorMovimento4 == 2) {
    document.getElementById('comando3').style.color = "rgb(86, 218, 86)";
    Rlinha();
    contadorMovimento4++
    return;
  }

  if (contadorMovimento4 == 3) {
    document.getElementById('comando4').style.color = "rgb(86, 218, 86)";
    U()
    contadorMovimento4++
    return;
  }

  if (contadorMovimento4 == 4) {
    document.getElementById('comando5').style.color = "rgb(86, 218, 86)";
    R()
    contadorMovimento4++
    return;
  }

  if (contadorMovimento4 == 5) {
    document.getElementById('comando6').style.color = "rgb(86, 218, 86)";
    U()
    U()
    contadorMovimento4++
    return;
  }

  if (contadorMovimento4 == 6) {
    document.getElementById('comando7').style.color = "rgb(86, 218, 86)";
    Rlinha()
    contadorEtapa++;
    contadorMovimento4 = 0;
  }
  comandos.innerHTML = "";
}

// Movimento para encaixar os cantos superiores dos lados azul, verde, vermelho e laranja corretamente.
function movimentoL() {
  if (contadorMovimento5 == 0) {    
    document.getElementById('comando1').style.color = "rgb(86, 218, 86)";
    Rlinha();
    contadorMovimento5++
    return;
  }
  
  if (contadorMovimento5 == 1) {
    document.getElementById('comando2').style.color = "rgb(86, 218, 86)";
    F();
    contadorMovimento5++
    return;
  }

  if (contadorMovimento5 == 2) {
    document.getElementById('comando3').style.color = "rgb(86, 218, 86)";
    Rlinha();
    contadorMovimento5++
    return;
  }

  if (contadorMovimento5 == 3) {
    document.getElementById('comando4').style.color = "rgb(86, 218, 86)";
    B();
    B();
    contadorMovimento5++
    return;
  }

  if (contadorMovimento5 == 4) {
    document.getElementById('comando5').style.color = "rgb(86, 218, 86)";
    R();
    contadorMovimento5++
    return;
  }

  if (contadorMovimento5 == 5) {
    document.getElementById('comando6').style.color = "rgb(86, 218, 86)";
    Flinha();
    contadorMovimento5++
    return;
  }

  if (contadorMovimento5 == 6) {
    document.getElementById('comando7').style.color = "rgb(86, 218, 86)";
    Rlinha()
    contadorMovimento5++
    return;
  }

  if (contadorMovimento5 == 7) {
    document.getElementById('comando8').style.color = "rgb(86, 218, 86)";
    B();
    B();
    contadorMovimento5++
    return;
  }

  if (contadorMovimento5 == 8) {
    document.getElementById('comando9').style.color = "rgb(86, 218, 86)";
    R();
    R();
    contadorEtapa++;
    contadorMovimento5 = 0;
  }
  comandos.innerHTML = "";
}

// Movimento final para ajeitar a ultima peça para terminar.
function movimentoMinerva() {
  if (contadorMovimento6 == 0) {
    document.getElementById('comando1').style.color = "rgb(86, 218, 86)";
    F();
    F();
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 1) {
    mensagem.innerHTML = "Nesta etapa, é feito um U ou U', gire o topo para o lado em que se encaixa a cor, caso não encaixe a cor do meio do topo, com o meio da face do seu cubo <br> gire para qualquer lado uma vez o topo."
    document.getElementById('comando2').style.color = "rgb(86, 218, 86)";
    U()
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 2) {
    document.getElementById('comando3').style.color = "rgb(86, 218, 86)";
    Rlinha()
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 3) {
    document.getElementById('comando4').style.color = "rgb(86, 218, 86)";
    L();
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 4) {
    document.getElementById('comando5').style.color = "rgb(86, 218, 86)";
    F();
    F();
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 5) {
    document.getElementById('comando6').style.color = "rgb(86, 218, 86)";
    R();    
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 6) {
    document.getElementById('comando7').style.color = "rgb(86, 218, 86)";
    Llinha();
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 7) {
    mensagem.innerHTML = "Realize a rotação do topo, dependendo de como irá enxaicar as faces do lado esquerdo e direito."
    document.getElementById('comando8').style.color = "rgb(86, 218, 86)";
    U();
    contadorMovimento6++;
    return;
  }
  if (contadorMovimento6 == 8) {
    document.getElementById('comando9').style.color = "rgb(86, 218, 86)";
    F();
    F();
    contadorMovimento6 = 0;
    contadorEtapa++;
  }
  comandos.innerHTML = "";
}

// Função para pular a etapa.
function pularEtapa() {
  contadorEtapa = contadorEtapa + valorP;
  montandoCubo();
}

// Função para voltar a etapa.
function voltarEtapa() {
  contadorEtapa = contadorEtapa - valorV;
  montandoCubo();
}

// Colocando todas as cores do cubo para cinza com loop, menos os centros da face.
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

// Colocando todas as cores do cubo para cinza com loop, menos os centros da face.
function reiniciaCuboEstagio2() {
  reiniciaCuboEstagio1();
  for (let index = 0; index < 9; index++) {
    branco[index]. style.backgroundColor = cor_branco;
  }
  for (let index = 6; index < 9; index++) {
    azul[index].style.background = cor_azul;
    verde[index].style.background = cor_verde;
    laranja[index].style.background = cor_laranja;
    vermelho[index].style.background = cor_vermelho;
  }
}

// Colocando todas as cores do cubo para cinza com loop, menos os centros da face.
function reiniciaCuboEstagio3() {
  reiniciaCuboEstagio2();
  for (let index = 3; index < 6; index++) {
    azul[index].style.backgroundColor = cor_azul;
    verde[index].style.background = cor_verde;
    laranja[index].style.background = cor_laranja;
    vermelho[index].style.background = cor_vermelho;
  }
}

// Reinicia o cubo de modo em que a cruz amarela já esteja formada.
function reiniciaCuboEstagio4() {
  reiniciaCuboEstagio3();
  amarelo[1].style.backgroundColor = cor_amarelo;
  amarelo[3].style.backgroundColor = cor_amarelo;
  amarelo[5].style.backgroundColor = cor_amarelo;
  amarelo[7].style.backgroundColor = cor_amarelo;
}

// Reinicia o cudo de modo em que o topo amarelo esteja feito.
function reiniciaCuboEstagio5() {
  reiniciaCuboEstagio4();
  for (let index = 0; index < 9; index++) {
    amarelo[index].style.background = cor_amarelo;
  }
}

// Reinicia o cubo na etapa final do processo.
function reiniciaCuboEstagio6() {
  reiniciaCuboEstagio5();
  azul[0].style.backgroundColor = cor_azul;
  azul[2].style.backgroundColor = cor_azul;
  vermelho[0].style.backgroundColor = cor_vermelho;
  vermelho[2].style.backgroundColor = cor_vermelho;
  verde[0].style.backgroundColor = cor_verde;
  verde[2].style.backgroundColor = cor_verde;
  laranja[0].style.backgroundColor = cor_laranja;
  laranja[2].style.backgroundColor = cor_laranja;
}

// Função que realiza ao montar o cubo mágico.
function montandoCubo(){
  // Estrutura de IFs para verificar em qual etapa o cubo esta.
  // Existe uma estrutura padrão, onde temos os IFs com os contadores de etapas.
  // O titulo, mensagem e comando servem para aparecer as frases acima do cubo ao longo da montagem.
  // As funções são para realizar pequenos movimentos, como U, L', ou movimentos completos para alguma finalidade finall, como o movimentoMinerva.
  // Contador Etapa ++ para que possa avançar a etapa.
  // Ao longo da montagem, vamos montando as cores para no final termos o cubo 100% completo.
  
  if (contadorEtapa == 1) {
    titulo.innerHTML = "Continue clicando no cubo para continuar";
    reiniciaCuboEstagio1();
    contadorEtapa++;
    return;
  }
  if (contadorEtapa == 2) {
    titulo.innerHTML = "Fazendo cruz branca."
    mensagem.innerHTML = "Coloque todas as partes brancas para cima, como mostrado no cubo <br> Não importa a ordem das outras peças, mas só da branca";
    reiniciaCuboEstagio1();
    azul[1].style.background = cor_azul;
    vermelho[1].style.background = cor_laranja;
    verde[1].style.background = cor_vermelho;
    laranja[1].style.backgroundColor = cor_verde;
    amarelo[1].style.background = cor_branco;
    amarelo[3].style.background = cor_branco;
    amarelo[5].style.background = cor_branco;
    amarelo[7].style.background = cor_branco;
    valorP = 6;
    valorV = 0;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 3) {
    mensagem.innerHTML = "Vá girando o lado, para que a cor dos lados encaixe com a do meio <br> Uma por uma, girando para fazer a cruz branca de maneira correta"
    valorP = 0;
    valorV = 0;
    F()
    F()
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
    mensagem.innerHTML = "Agora temos a cruz branca no cubo!"
    contadorEtapa++;
    return;
  }
  
  if (contadorEtapa == 9) {
    titulo.innerHTML = "Ajeitando quinas do branco"
    mensagem.innerHTML = "Agora vamos ver o movimento para colocar as quinas do branco corretamente";
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div>";
    reiniciaCuboEstagio1();
    azul[2].style.backgroundColor = cor_azul;
    azul[7].style.backgroundColor = cor_azul;
    vermelho[0].style.backgroundColor = cor_branco;
    vermelho[7].style.backgroundColor = cor_vermelho;
    verde[7].style.backgroundColor = cor_verde;
    laranja[7].style.backgroundColor = cor_laranja;
    branco[1].style.backgroundColor = cor_branco;
    branco[3].style.backgroundColor = cor_branco;
    branco[5].style.backgroundColor = cor_branco;
    branco[7].style.backgroundColor = cor_branco;
    amarelo[8].style.backgroundColor = cor_vermelho;
    contadorEtapa++;
    valorP = 3;
    valorV = 8;
    return;
  }

  if (contadorEtapa == 10) {
    document.getElementById('comando1').style.color = "rgb(86, 218, 86)";
    valorP = 0;
    valorV = 0;
    R()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 11) {
    document.getElementById('comando2').style.color = "rgb(86, 218, 86)";
    U()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 12) {
    document.getElementById('comando3').style.color = "rgb(86, 218, 86)";
    Rlinha()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 13) {
    mensagem.innerHTML = "Outro emplo que estas peças podem estar, é com o branco virado para cima"
    comandos.innerHTML = "<div id='comando1'>L'</div> - <div id='comando2'>U</div> - <div id='comando3'>L</div>";
    reiniciaCuboEstagio1();
    azul[0].style.backgroundColor = cor_laranja;
    azul[7].style.backgroundColor = cor_azul;
    azul[8].style.backgroundColor = cor_azul;
    vermelho[6].style.backgroundColor = cor_vermelho;
    vermelho[7].style.backgroundColor = cor_vermelho;
    verde[7].style.backgroundColor = cor_verde;
    laranja[7].style.backgroundColor = cor_laranja;
    laranja[2].style.backgroundColor = cor_azul;
    branco[1].style.backgroundColor = cor_branco;
    branco[2].style.backgroundColor = cor_branco;
    branco[3].style.backgroundColor = cor_branco;
    branco[5].style.backgroundColor = cor_branco;
    branco[7].style.backgroundColor = cor_branco;
    amarelo[6].style.backgroundColor = cor_branco;
    valorP = 8;
    valorV = 5;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 14) {
    document.getElementById('comando1').style.color = "rgb(86, 218, 86)";
    valorP = 0;
    valorV = 0;
    Llinha()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 15) {
    document.getElementById('comando2').style.color = "rgb(86, 218, 86)";
    U()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 16) {
    document.getElementById('comando3').style.color = "rgb(86, 218, 86)";
    L()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 17) {
    comandos.innerHTML = "<div id='comando1'>L'</div> - <div id='comando2'>U'</div> - <div id='comando3'>L</div>";
    U();
    U();
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 18) {
    document.getElementById('comando1').style.color = "rgb(86, 218, 86)";
    Llinha();
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 19) {
    document.getElementById('comando2').style.color = "rgb(86, 218, 86)";
    Ulinha();
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 20) {
    document.getElementById('comando3').style.color = "rgb(86, 218, 86)";
    mensagem.innerHTML = "Agora é fazer os mesmos movimentos para arrumar todos os 4 lados";
    L();
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 21) {
    mensagem.innerHTML = "Feito isso, o cubo ficará assim:";
    comandos.innerHTML = "";
    reiniciaCuboEstagio2();
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 22) {
    titulo.innerHTML = "Montando a segunda linha das cores Azul, vermelho, verde e laranja";
    mensagem.innerHTML = "O próximo passo é arrumas as quinas de duas cores entre os lados coloridos que não possuem a cor amarela <br> Para a direita";
    comandos.innerHTML = 
    "<div id='comando1'>U</div> - <div id='comando2'>R</div> - <div id='comando3'>U</div> - <div id='comando4'>R'</div> - <div id='comando5'>U'</div> -  <div id='comando6'>F'</div> - <div id='comando7'>U'</div> - <div id='comando8'>F</div>";
    reiniciaCuboEstagio2();
    azul[1].style.backgroundColor = cor_azul;
    amarelo[7].style.backgroundColor = cor_vermelho;
    valorP = 1;
    valorV = 10;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 23) {
    valorP = 0;
    valorV = 0;
    movimentoPrimarioR();
    return;
  }

  if (contadorEtapa == 24) {
    mensagem.innerHTML = "O próximo passo é arrumas as quinas de duas cores entre os lados coloridos que não possuem a cor amarela <br> Para a esquerda";
    comandos.innerHTML = 
    "<div id='comando1'>U'</div> - <div id='comando2'>L'</div> - <div id='comando3'>U'</div> - <div id='comando4'>L</div> - <div id='comando5'>U</div> - <div id='comando6'>F</div> - <div id='comando7'>U</div> - <div id='comando8'>F'</div>";
    reiniciaCuboEstagio2();
    azul[1].style.backgroundColor = cor_azul;
    azul[5].style.backgroundColor = cor_azul;
    vermelho[3].style.backgroundColor = cor_vermelho;
    amarelo[7].style.backgroundColor = cor_laranja;
    valorP = 2;
    valorV = 3;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 25) {
    valorP = 0;
    valorV = 0;
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
    reiniciaCuboEstagio2();
    azul[3].style.backgroundColor = cor_laranja;
    laranja[5].style.backgroundColor = cor_azul;
    valorP = 6;
    valorV = 4;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 28) {
    mensagem.innerHTML = "Realize o movimento aprendido da mesma maneira, como se alguma outra fosse substituir ela! <br> Cor roxa meramente ilustrativa.";
    comandos.innerHTML = 
    "<div id='comando1'>U'</div> - <div id='comando2'>L'</div> - <div id='comando3'>U'</div> - <div id='comando4'>L</div> - <div id='comando5'>U</div> - <div id='comando6'>F</div> - <div id='comando7'>U</div> - <div id='comando8'>F'</div>";
    azul[1].style.backgroundColor = "darkviolet";
    amarelo[7].style.backgroundColor = "darkviolet";
    valorP = 0;
    valorV = 0;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 29) {
    movimentoPrimarioL();
    return;
  }

  if (contadorEtapa == 30) {
    mensagem.innerHTML = "Agora que tiramos ela daquele lugar, podemos encaixar ela corretamente:"
    comandos.innerHTML = 
    "<div id='comando1'>U'</div> - <div id='comando2'>L'</div> - <div id='comando3'>U'</div> - <div id='comando4'>L</div> - <div id='comando5'>U</div> - <div id='comando6'>F</div> - <div id='comando7'>U</div> - <div id='comando8'>F'</div>";
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
    comandos.innerHTML = "";
    verde[1].style.backgroundColor = cor_cinza;
    amarelo[1].style.backgroundColor = cor_cinza;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 34) {
    mensagem.innerHTML = "Ajeitando todos os lados, seu cubo ficará assim:";
    comandos.innerHTML = "";
    reiniciaCuboEstagio3();
    valorP = 0;
    valorV = 8;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 35) {
    titulo.innerHTML = "Montando cruz amarela";
    mensagem.innerHTML = "Agora está na hora de ajeitar o topo amarelo não acha? <br> Caso seu cubo não esteja dessa maneira em relação as peças amarelas, pule a etapa";
    comandos.innerHTML = "<div id='comando1'>F</div> - <div id='comando2'>R</div> - <div id='comando3'>U</div> - <div id='comando4'>R'</div> - <div id='comando5'>U'</div> - <div id='comando6'>F'</div>";
    reiniciaCuboEstagio3();
    azul[1].style.backgroundColor = cor_amarelo;
    vermelho[1].style.backgroundColor = cor_amarelo;
    verde[1].style.backgroundColor = cor_amarelo;
    laranja[1].style.backgroundColor = cor_amarelo;
    valorP = 2;
    valorV = 2;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 36) {
    movimentoCruzA();
    valorP = 0;
    valorV = 0;
    return;
  }

  if (contadorEtapa == 37) {
    mensagem.innerHTML = "O cubo ficará com duas peças amarelas viradas para o topo <br> Caso seu cubo não esteja dessa maneira em relação as peças amarelas, pule a etapa";
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 38) {
    mensagem.innerHTML = "Rotacione o topo do cubo(U2) ficando como no cubo abaixo, e repita o movimento anterior <br> Caso seu cubo não esteja dessa maneira em relação as peças amarelas, pule a etapa";
    comandos.innerHTML = "<div id='comando1'>F</div> - <div id='comando2'>R</div> - <div id='comando3'>U</div> - <div id='comando4'>R'</div> - <div id='comando5'>U'</div> - <div id='comando6'>F'</div>";
    reiniciaCuboEstagio3();
    azul[1].style.backgroundColor = cor_amarelo;
    vermelho[1].style.backgroundColor = cor_amarelo;
    amarelo[1].style.backgroundColor = cor_amarelo;
    amarelo[3].style.backgroundColor = cor_amarelo;
    valorP = 1;
    valorV = 4;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 39) {
    movimentoCruzA();
    valorP = 0;
    valorV = 0;
    return;
  }

  if (contadorEtapa == 40) {
    mensagem.innerHTML = "Agora ficará com uma linha no cubo, repita mais uma vez, para que faça a cruz amarela <br> Caso seu cubo não esteja dessa maneira em relação as peças amarelas, pule a etapa"
    comandos.innerHTML = "<div id='comando1'>F</div> - <div id='comando2'>R</div> - <div id='comando3'>U</div> - <div id='comando4'>R'</div> - <div id='comando5'>U'</div> - <div id='comando6'>F'</div>";
    reiniciaCuboEstagio3();
    azul[1].style.backgroundColor = cor_amarelo;
    verde[1].style.backgroundColor = cor_amarelo;
    amarelo[3].style.backgroundColor = cor_amarelo;
    amarelo[5].style.backgroundColor = cor_amarelo;
    valorP = 2;
    valorV = 3;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 41) {
    movimentoCruzA();
    valorP = 0;
    valorV = 0;
    return;
  }

  if (contadorEtapa == 42) {
    mensagem.innerHTML = "Agora O cubo possui uma cruz amarela, estamos quase terminando. <br> Caso não esteja, verifique as etapar novamente, ou ferifique se as peças do cubo estão corretas";
    comandos.innerHTML = "";
    contadorEtapa++;
    return;
  }

  // Posição 1.
  if (contadorEtapa == 43) {
    titulo.innerHTML = "Colorindo todo o topo de amarelo";
    mensagem.innerHTML = "Neste momentos podemos ter diversas posições das peças amarelas <br> Porem usamos somente uma sequencia de movimentos para montar completar os amarelos no topo. <br> Caso seu cubo não esteja como no cubo abaixo, é só ir pulando a etapa até ficar igual";
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
    reiniciaCuboEstagio4();
    azul[0].style.backgroundColor = cor_amarelo;    
    verde[2].style.backgroundColor = cor_amarelo;    
    amarelo[2].style.backgroundColor = cor_amarelo;
    amarelo[8].style.backgroundColor = cor_amarelo;
    valorP = 6;
    valorV = 4;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 44) {
    titulo.innerHTML = "Posição 1:";
    valorP = 0;
    valorV = 0;
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 45) {
    mensagem.innerHTML = "Sempre que o topo amarelo parecer este peixinho, sempre o coloque nessa formação:"
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
    U();
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 46) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 47) {
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
    U()
    U()
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 48) {
    mensagem.innerHTML = "Sempre que o topo amarelo parecer este peixinho, sempre o coloque nessa formação:";
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 49) {
    mensagem.innerHTML = "Topo amarelo completo clique no cubo novamente, e pule a etapa as outras etapas";
    comandos.innerHTML = "";
    contadorEtapa++;
    return;
  }

  // Posição 2.
  if (contadorEtapa == 50) {
    titulo.innerHTML = "Posição 2:";
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
    reiniciaCuboEstagio4();
    azul[0].style.backgroundColor = cor_amarelo;
    vermelho[2].style.backgroundColor = cor_amarelo;
    amarelo[0].style.backgroundColor = cor_amarelo;
    amarelo[8].style.backgroundColor = cor_amarelo;
    valorP = 5;
    valorV = 8;
    contadorEtapa++;
    return;    
  }

  if (contadorEtapa == 51) {
    valorP = 0;
    valorV = 0;
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 52) {
    if (contadorMovimento4 == 0) {
      comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
    }
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 53) {
    mensagem.innerHTML = "Sempre que o topo amarelo parecer este peixinho, sempre o coloque nessa formação:"
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
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
    mensagem.innerHTML = "Topo amarelo completo clique no cubo novamente, e pule a etapa as outras etapas";
    comandos.innerHTML = "";
    contadorEtapa++;
    return;
  }

  // Posição 3.
  if (contadorEtapa == 56) {
    titulo.innerHTML = "Posição 3:";
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
    reiniciaCuboEstagio4();
    azul[0].style.backgroundColor = cor_amarelo;
    azul[2].style.backgroundColor = cor_amarelo;
    amarelo[0].style.backgroundColor = cor_amarelo;
    amarelo[2].style.backgroundColor = cor_amarelo;
    contadorEtapa++;
    valorP = 6;
    valorV = 7;
    return;
  }

  if (contadorEtapa == 57) {
    valorP = 0;
    valorV = 0;
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 58) {
    mensagem.innerHTML = "Sempre que o topo amarelo parecer este peixinho, sempre o coloque nessa formação:"
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
    Ulinha();
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 59) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 60) {
    mensagem.innerHTML = "Sempre que o topo amarelo parecer este peixinho, sempre o coloque nessa formação:"
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
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
    mensagem.innerHTML = "Topo amarelo completo clique no cubo novamente, e pule a etapa as outras etapas"
    comandos.innerHTML = "";
    contadorEtapa++;
    return;
  }

  // Posição 4.
  if (contadorEtapa == 63) {
    titulo.innerHTML = "Posição 4:";
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
    reiniciaCuboEstagio4();
    vermelho[0].style.backgroundColor = cor_amarelo;
    vermelho[2].style.backgroundColor = cor_amarelo;
    laranja[0].style.backgroundColor = cor_amarelo;
    laranja[2].style.backgroundColor = cor_amarelo;
    valorP = 3;
    valorV = 8;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 64) {
    valorP = 0;
    valorV = 0;
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 65) {
    if (contadorMovimento4 == 0) {
      comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
    }
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 66) {
    mensagem.innerHTML = "Topo amarelo completo clique no cubo novamente, e pule a etapa as outras etapas"
    comandos.innerHTML = "";
    contadorEtapa++;
    return;
  }

  // Posição 5.
  if (contadorEtapa == 67) {
    titulo.innerHTML = "Posição 5:";
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
    reiniciaCuboEstagio4();
    azul[2].style.backgroundColor = cor_amarelo;
    verde[0].style.backgroundColor = cor_amarelo;
    laranja[0].style.backgroundColor = cor_amarelo;
    laranja[2].style.backgroundColor = cor_amarelo;
    contadorEtapa++;
    valorP = 4;
    valorV = 5;
    return;
  }

  if (contadorEtapa == 68) {
    valorP = 0;
    valorV = 0;
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 69) {
    mensagem.innerHTML = "Sempre que o topo amarelo parecer este peixinho, sempre o coloque nessa formação:";
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
    Ulinha();
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 70) {
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 71) {
    mensagem.innerHTML = "Topo amarelo completo! <br> clique no cubo novamente, e pule a etapa as outras etapas";
    comandos.innerHTML = "";
    contadorEtapa++;
    return;
  }

  // Posição 6.
  if (contadorEtapa == 72) {
    titulo.innerHTML = "Posição 6:";
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
    reiniciaCuboEstagio4();
    vermelho[0].style.backgroundColor = cor_amarelo;
    verde[0].style.backgroundColor = cor_amarelo;
    laranja[0].style.backgroundColor = cor_amarelo;
    amarelo[6].style.backgroundColor = cor_amarelo;
    valorP = 4;
    valorV = 6;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 73) {
    valorP = 0;
    valorV = 0;
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 74) {
    mensagem.innerHTML = "Sempre que o topo amarelo parecer este peixinho, sempre o coloque nessa formação:";
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
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
    mensagem.innerHTML = "Topo amarelo completo clique no cubo novamente, e pule a etapa as outras etapas";
    comandos.innerHTML = "";
    contadorEtapa++;
    return;
  }

  // Posição 7.
  if (contadorEtapa == 77) {
    titulo.innerHTML = "Posição 7:";
    comandos.innerHTML = "<div id='comando1'>R</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>U</div> - <div id='comando5'>R</div> - <div id='comando6'>U2</div> - <div id='comando7'>R'</div>"
    reiniciaCuboEstagio4();
    azul[2].style.backgroundColor = cor_amarelo;
    vermelho[2].style.backgroundColor = cor_amarelo;
    verde[2].style.backgroundColor = cor_amarelo;
    amarelo[6].style.backgroundColor = cor_amarelo;
    contadorEtapa++;
    valorP = 2;
    valorV = 6;
    return;
  }

  if (contadorEtapa == 78) {
    valorP = 0;
    valorV = 0;
    movimentoPeixe();
    return;
  }

  if (contadorEtapa == 79) {
    mensagem.innerHTML = "Etapas concluidas com sucesso!";
    comandos.innerHTML = "";
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 80) {
    titulo.innerHTML = "Montando as quinas dem seus devidos lugares";
    mensagem.innerHTML = "Agora temos duas alternativas, ou temos 2 cantos de uma face da mesma cor como o exemplo:, ou não temos. <br> cor meramente ilustrativa, pode ser qualquer cor";
    comandos.innerHTML = 
    "<div id='comando1'>R'</div> - <div id='comando2'>F</div> - <div id='comando3'>R'</div> - <div id='comando4'>B2</div> - <div id='comando5'>R</div> - <div id='comando6'>F'</div> - <div id='comando7'>R'</div> - <div id='comando8'>B2</div> - <div id='comando9'>R2</div>";
    reiniciaCuboEstagio5();
    azul[0].style.backgroundColor = "darkviolet";
    azul[2].style.backgroundColor = "darkviolet";
    contadorEtapa++;
    valorP = 0;
    valorV = 4;
    return;
  }


  if (contadorEtapa == 81) {
    mensagem.innerHTML = "Caso não tenha, faça o movimento:"
    reiniciaCuboEstagio5();
    valorP = 2;
    valorV = 2;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 82) {
    valorP = 0;
    valorV = 0;
    movimentoL();
    return;
  }

  if (contadorEtapa == 83) {
    mensagem.innerHTML = "Ao finalizar esta sequência, iremos ter o lado esquerdo, com dois cantos de mesma cor.";
    comandos.innerHTML = "";
    laranja[0].style.backgroundColor = "darkviolet";
    laranja[2].style.backgroundColor = "darkviolet";
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 84) {
    mensagem.innerHTML = "Rotacione o topo do cubo para este lado que possui duas cores iguais olharem para tras como no exemplo: <br> cor meramente ilustrativa, pode ser qualquer cor";
    comandos.innerHTML = 
    "<div id='comando1'>R'</div> - <div id='comando2'>F</div> - <div id='comando3'>R'</div> - <div id='comando4'>B2</div> - <div id='comando5'>R</div> - <div id='comando6'>F'</div> - <div id='comando7'>R'</div> - <div id='comando8'>B2</div> - <div id='comando9'>R2</div>";
    reiniciaCuboEstagio5();
    verde[0].style.backgroundColor = "darkviolet";
    verde[2].style.backgroundColor = "darkviolet";
    valorP = 3;
    valorV = 4;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 85) {
    valorP = 0;
    valorV = 0;
    movimentoL();
    return;
  }

  if (contadorEtapa == 86) {
    titulo.innerHTML = "Ultima motagem! Montando o que falta!";
    mensagem.innerHTML = "Magicamente você terá os cantos de todas as fazer combinando automaticamente, basta rotacionar para encaixar as cores dos cantos, com seus respectivos lados."
    comandos.innerHTML = "";
    azul[0].style.backgroundColor = cor_laranja;
    azul[2].style.backgroundColor = cor_laranja;
    vermelho[0].style.backgroundColor = cor_azul;
    vermelho[2].style.backgroundColor = cor_azul;
    verde[0].style.backgroundColor = cor_vermelho;
    verde[2].style.backgroundColor = cor_vermelho;
    laranja[0].style.backgroundColor = cor_verde;
    laranja[2].style.backgroundColor = cor_verde;
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
    reiniciaCuboEstagio6();
    valorP = 0;
    valorV = 5;
    contadorEtapa++;
    return;
  }


  if (contadorEtapa == 89) {
    mensagem.innerHTML = "Mas caso não exista tal face, realize o movimento a seguir que alguma face irá ficar arrumada automaticamente.";
    comandos.innerHTML = 
    "<div id='comando1'>F2</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>L</div> - <div id='comando5'>F2</div> - <div id='comando6'>R</div> - <div id='comando7'>L'</div> - <div id='comando8'>U</div> - <div id='comando9'>F2</div>";
    reiniciaCuboEstagio6();
    valorP = 1;
    valorV = 2;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 90) {
    valorP = 0;
    valorV = 0;
    movimentoMinerva();
    return;
  }

  if (contadorEtapa == 91) {
    mensagem.innerHTML = "Feito o movimento, algum dos cantos irá ficar correto.";
    comandos.innerHTML = "";
    reiniciaCuboEstagio6();
    verde[1].style.backgroundColor = cor_verde;
    valorP = 2;
    valorV = 3;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 92) {
    mensagem.innerHTML = "Agora, coloque este lado para tras como no exemplo, e realize o movimento novamente.";
    comandos.innerHTML = 
    "<div id='comando1'>F2</div> - <div id='comando2'>U</div> - <div id='comando3'>R'</div> - <div id='comando4'>L</div> - <div id='comando5'>F2</div> - <div id='comando6'>R</div> - <div id='comando7'>L'</div> - <div id='comando8'>U</div> - <div id='comando9'>F2</div>";
    valorP = 0;
    valorV = 0;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 93) {
    movimentoMinerva();
    return;
  }

  if (contadorEtapa == 94) {
    reiniciaCuboEstagio6();
    comandos.innerHTML = "";
    azul[1].style.backgroundColor = cor_azul;
    vermelho[1].style.backgroundColor = cor_vermelho;
    verde[1].style.backgroundColor = cor_verde;
    laranja[1].style.backgroundColor = cor_laranja;
    valorP = 0;
    valorV = 4;
    contadorEtapa++;
    return;
  }

  if (contadorEtapa == 95) {
    titulo.innerHTML = "Concluído! :)"
    mensagem.innerHTML = "Se tudo estiver ocorrido corretamente, seu cubo estara montado nesse exato momento, Parabéns!!"
    valorV = 1;
    contadorEtapa = 0;
    return;
  }
}
