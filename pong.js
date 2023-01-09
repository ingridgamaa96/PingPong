//Variaveis da bolinha
let xBolinha = 300
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;


//Variaveis da velocidade da Bolinha
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

// Variaveis da Raquete

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;


let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
   movimentaBolinha();
  verificaColisaoBordas();
  mostraRaquete();
  movimentaRaquete();
// verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
   
    
}


function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro)
}


function movimentaBolinha(){
  xBolinha +=  velocidadeXBolinha;
 yBolinha += velocidadeYBolinha;
}


function verificaColisaoBordas(){
  if (xBolinha + raio  >  width || 
      xBolinha  - raio  < 0 ) {  
    velocidadeXBolinha *= -1;
  
}
  
  if (yBolinha + raio  > height ||  
      yBolinha  -  raio < 0 ) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete (){
   rect(xRaquete , yRaquete , raqueteComprimento ,raqueteAltura )
}


function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yRaquete  += 10;
  }
}


function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && 
     yBolinha - raio < yRaquete + raqueteAltura &&
      yBolinha + raio  > yRaquete){
    velocidadeXBolinha *= -1;
  }
}


function colisaoMinhaRaqueteBiblioteca(){
 
  colidiu =  collideRectCircle(xRaquete,yRaquete,raqueteComprimento,raqueteAltura, xBolinha,yBolinha, raio);
  
  if(colidiu){
    velocidadeXBolinha *= -1;
  }
  
}