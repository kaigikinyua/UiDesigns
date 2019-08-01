console.log('Worlds online')
var canvas=document.getElementById('particles');
var c=canvas.getContext('2d');

function circle(x,y){
    //xvelocity
    this.dx=Math.round(Math.random()*2);
    //yvelocity
    this.dy=Math.round(Math.random()*3)
    //colors
    this.y=y;this.x=x;
    var color=['white','#77e905','#FFAAAA'];
    this.color=Math.floor(Math.random()*color.length);
    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,1,0,2*Math.PI);
        c.fillStyle=color[this.color];
        c.fill();
        console.log('draw circle'+this.color)
    }
    this.update=function(){
        this.x=this.x+this.dx
        this.y=this.y+this.dy
        if(this.x+5>canvas.offsetWidth || this.x-5<0){
            this.dx=-this.dx
        }if(this.y+5>canvas.offsetHeight || this.y-5<0){
            this.dy=-this.dy
        }
        if(this.dx==0){
            this.dx=2
        }
        if(this.dy==0){
            this.dy=3
        }
        this.draw();
    }
}
var m=[];var nO=100;
for (var i=0;i<=nO;i++){
    var x=Math.round(Math.random()*(canvas.offsetWidth-1));
    var y=Math.round(Math.random()*(canvas.offsetHeight-5));
    m.push(new circle(x,y));
  }
  function animate(){
    c.clearRect(0,0,canvas.offsetWidth,canvas.offsetHeight);
    requestAnimationFrame(animate);
    for (var i=0;i<m.length;i++){
      m[i].update();
    }
  }
  animate();