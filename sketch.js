function setup() {
  let spazioTitolo = 180; // spazio in alto per il titolo

  let numeroGlifi = 121;
  let numeroColonne = ceil(sqrt(numeroGlifi));
  let numeroRighe = ceil(numeroGlifi / numeroColonne);

  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = dimColonna; // celle quadrate (visivamnete le preferisco)

  let altezzaCanvas = spazioTitolo + dimRiga * numeroRighe;
  createCanvas(windowWidth, altezzaCanvas);
  background(90, 14, 48);

  // titolo (si disegna una volta sola)
  fill(255, 255, 255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(30);
  textFont("Baskerville");
  text("Assignment 02 - Gaia Restelli", width / 2, 70);

  // riga di separazione
  stroke(255);
  strokeWeight(1);
  line(450, 95, width-450, 95);

  // sottotitoli
  textSize(16);
  text("variabile 1: scala", width / 2, 110);
  text("variabile 2: colore dei petali", width / 2, 130);
  text("variabile 3: rotazione dei petali", width / 2, 150);

  let xCorrente = 0;
  let yCorrente = spazioTitolo;

  // disegna i glifi all'interno della griglia
  for (let g = 0; g < numeroGlifi; g++) {
    mioGlifo(xCorrente + dimColonna / 2, yCorrente + dimRiga / 2);
    xCorrente = xCorrente + dimColonna;

    if (xCorrente >= windowWidth) {
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga;
    }
  }
}

function draw() {
}

function mioGlifo(_x, _y) {

  // 1) dimensione random
  let scala = random(0.1, 0.6);

  // 2) opacità random (la scrivo prima del colore, perché altrimenti non funziona)
  let opacità = random(60, 255);

  // 3) colore random, floor() toglie i decimali
  let scelta = floor(random(3));
  let colorePetali;
  if (scelta == 0) {
    colorePetali = color(255, 192, 203, opacità); // rosa
  } else if (scelta == 1) {
    colorePetali = color(100, 180, 255, opacità); // azzurro
  } else {
    colorePetali = color(160, 90, 220, opacità);  // viola
  }

  // 4) rotazione random
  let angolo = random(TWO_PI);

  push();

  translate(_x, _y);      // sposto l'origine al centro della cella
  scale(scala);           
  translate(-197, -258);  // sposto il centro del fiore in (0,0)

  // stelo (sta fermo)
  stroke(150, 172, 140, opacità);
  strokeWeight(5);
  line(194, 250, 194, 350);

  // petali (il colore che cambia e la rotazione)
  push();
  translate(195, 225);    
  rotate(angolo);         
  fill(colorePetali);
  noStroke();
  ellipse(-25, -25, 65, 65);
  ellipse(25, -25, 65, 65);
  ellipse(-25, 25, 65, 65);
  ellipse(25, 25, 65, 65);
  pop();

  // centro del fiore (sta fermo)
  fill(248, 222, 74, opacità);
  noStroke();
  ellipse(197, 227, 45, 45);

  // foglia (sta ferma)
  fill(150, 172, 140, opacità);
  noStroke();
  ellipse(225, 315, 60, 32);

  pop();
}
