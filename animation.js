var c=document.querySelector("canvas");
c.width=window.innerWidth;
c.height=window.innerHeight;

var c1=c.getContext("2d");

var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var vx=5;
var vy=5;
var radius=50;
function hello()
{
   requestAnimationFrame(hello);
   c1.clearRect(0,0,innerWidth,innerHeight);
   c1.beginPath();
   c1.arc(x,y,radius,Math.PI*2,false);
   c1.strokeStyle="blue";
   c1.stroke();
   if(x+radius>innerWidth || x-radius<0)
   {
     vx=-vx;
   }
   if(y+radius>innerHeight || y-radius<0)
   {
     vy=-vy;
   }
   x+=vx;
   y+=vy;
}
hello();
