
let font;
let points = [];


function preload(){
  font = loadFont("fonts/NotoSansTC-Light.ttf")
}


function setup() {
createCanvas (windowWidth, windowHeight);//新增一個畫布，寬為？？？，高為多少
}

function draw() {
  background (0)
  stroke(255) //框線顏色
  noFill() //不要充滿顏色
  rectMode(CENTER) //以框中心點為座標點
  for(var j = 0; j<(height/50); j = j+1){
    for(var i = 0; i<(width/50); i = i+1) //i++
     {
      ellipse(25+(i*50), 25+(j*50), 50+mouseX/10) //在座標(25, 25)畫一個直徑50的圓
      stroke(200, 90+mouseX%256, 130)
      rect(25+(i*50), 25+(j*50), 25+mouseX/10) 
      stroke(0+mouseX%200, 245, 212)
      ellipse(15+(i*50), 16+(j*50), 25+mouseX/5)
      stroke(100, 200, 300+mouseX%256)
     }
  }
  points = font.textToPoints ("TKUET",width/2-300,height/2+100,200,{
    sampleFactor:0.1
    });
    for(let i=0; i<points.length; i++){
      //text(str(i),points[i].x,points[i].y)
      noStroke()
      fill("#80FFFF")
      ellipse(points[i].x,points[i].y,15)
    }
}
