let x = 0;
let y = 0;
let theta = 0;
let increment =  0.05; // the amount to increment the offset each frame//
let offset= 0; // the amount offset from beginning of wave//
let amplitude;
let frequency;
let maxAngle;
function setup() {
amplitude = windowHeight/5;
frequency = windowWidth/15;
maxAngle = (windowWidth/frequency)* TWO_PI;
    createCanvas(windowWidth, windowHeight);

    
}
function draw() {
    background(0);
    noStroke();
    fill(255,0,255)
    while (theta < maxAngle + offset ){
        y = sin(theta) * amplitude;
        ellipse(x,y + height/2, 16);
        theta += 0.2;
        x =((theta -offset)/maxAngle) * windowWidth; 
    }
    offset += increment;
   theta = offset + increment;

}
