let noiseMax = 15;
let phase = 0;
let zoff = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB)
}

function draw() {
  background(0);
  translate (width/2, height/2);
  stroke(frameCount%360,70,100);
  noFill();
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 100, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 90, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 80, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 70, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 60, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 50, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 40, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 30, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 20, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 190);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 180);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 170);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 160);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 150);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 140);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 130);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 120);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 110);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 100);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 90);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 80);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 70);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 60);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 50);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 40);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 30);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 20);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 10, 10);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let xoff = map(cos(a + phase), -1,1,0,noiseMax);
    let yoff = map(sin(a + phase), -1,1,0,noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, 5, 5);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  zoff += 0.01;
  
  phase += 0.001;
}