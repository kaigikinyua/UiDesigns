//canvas objects
class CanvasObjects{
    constructor(canvas){
        this.context=canvas.getContext('2d');
        this.canvas_width=canvas.width;
        this.canvas_height=canvas.height;
    }
    line(from_pixel,to_pixel,color){
        context.beginPath()
        context.moveTo(from_pixel.x,from_pixel.y)
        context.lineTo(to_pixel.x,to_pixel.y)
        context.strokeStyle=color
        context.stroke()
    }
    rect(x,y,height,width,color){
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.color=color
        context.fillStyle=this.color
        context.fillRect(this.x,this.y,this.width,this.height);
        
    }
    circle(x,y,radius,color,dx,dy){
        this.x=x;this.y=y;this.radius=radius;this.color=color;
        this.dx=dx;this.dy=dy;
        if(dx==0 || dy==0){
            this.dx=1
            this.dy=1
        }
        this.draw=function(){
            this.context.beginPath()
            this.context.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
            this.context.strokeStyle=this.color
            this.context.stroke()
        }
        this.move=function(){
            if((this.x+this.radius)>this.canvas_width || this.x-this.radius<0){
                this.dx=-this.dx
            }
            if((this.y+this.radius)>this.canvas_height || this.y-this.radius<0){
                this.dy=-this.dy
            }
            this.x+=this.dx;
            this.y+=this.dy;
            this.draw()
        }
    }
    particle(x,y,radius,color,dx,dy){
        this.x=x;this.y=y;this.radius=radius;this.color=color;
        this.dx=dx;this.dy=dy;
        this.draw=function(){
            this.context.beginPath()
            this.context.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
            this.context.strokeStyle=this.color
            this.context.fill()
            
        }
        this.move=function(){
            if((this.x+this.radius)>this.canvas_width || this.x-this.radius<0){
                this.dx=-this.dx
            }
            if((this.y+this.radius)>this.canvas_height){
                this.dy=-this.dy*0.9
            }
            else{
                this.dy+=0.6
            }
            this.x+=this.dx;
            this.y+=this.dy;
            this.draw()
        }
    }
}
function randomVelocity(){
    return Math.floor(Math.random()*5)*0.5
}


var canvas1=document.getElementById('canvas1')
var cont=canvas1.getContext('2d')

var circles=[];
var lines=[]
var particle;
function init(){
    var colors=['red','green','yellow','black','pink','blue','cyan','gray','brown','lightblue']
    particle=new CanvasObjects(canvas1)
    var x=Math.random()*canvas1.width;
    var y=Math.random()*canvas1.height;
    var dy=1;
    var dx=0;
    particle.particle(x,y,5,'red',dx,dy)
}
function animate(){
    requestAnimationFrame(animate)
    cont.clearRect(0,0,window.innerWidth,window.innerHeight)
    particle.move()
}
init()
animate()