class Ball{
constructor(x,y,width,height,angle){
    var opt={
     
        density:2,
        frictionAir:.005
    }
    this.body=Bodies.rectangle(x,y,width,height)
    this.width=width
    this.heigth=height

    World .add(world,this.body)
}
display(){
var angle=this.body.angle
push ();
translate (this.body.position.x,this.body.position.y)
rotate (angle)
ellipse (0,0,this.width,this.height)
pop ();


}


}


