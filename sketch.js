function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
   

}
let ballX=250;
let ballY=250;
let globalYSpeed=2;
let ballYSpeed= globalYSpeed;
let globalXSpeed=2;
let ballXSpeed= globalXSpeed;
let paddle1Y=100;
let paddle2Y=100;
let paddleSpeed=5;
function draw(){
    background(0)
    fill(225);
    ellipse(ballX,ballY,25);
    paddle(50,paddle1Y);
    paddle(450,paddle2Y);
    borders();
    keyTyped();
    paddle2Move();
    paddleCollision();
    ballX+=ballXSpeed;
    ballY+=ballYSpeed;

}
function borders(){
    if(ballY>420){
        ballYSpeed=-globalYSpeed;
    }
    if(ballY<70){
        ballYSpeed=globalYSpeed;
    }
}
function paddle(x,y){
    stroke(225);
    strokeWeight(12);
    line(x,y,x,y+100);
    

}
function keyTyped(){
    if(key==='w'){
        paddle1Y-=paddleSpeed;
    }
    if(key==='s') {
        paddle1Y+=paddleSpeed;
    }

}
function paddle2Move(){
    if(keyIsDown(UP_ARROW)){
        paddle2Y-=paddleSpeed;
    }
    if(keyIsDown(DOWN_ARROW)){
        paddle2Y+=paddleSpeed;
    }

}
function paddleCollision(){
    if(ballX>62.5&ballX<87.5&&ballY>paddle1Y&&ballY<paddle1Y+50){
        ballXSpeed=globalXSpeed;
    }
    if(ballX<462.5&&ballX>437.5&&ballY>paddle2Y&&ballY<paddle2Y+50){
        ballXSpeed= -globalXSpeed;
    }
}