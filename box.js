class Box{
    constructor(x,y,width,height){
        var opt={
         
            density:0.4,
            friction:1,
            restitution:0.8
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
    rect (0,0,this.width,this.height)
    pop ();
    
    
    }
    
    
    }
    
    
    
