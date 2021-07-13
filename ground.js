
    class Ground{
        constructor(x,y,width,height){
            var opt={
             
            isStatic:true
            
            }
            this.body=Bodies.rectangle(x,y,width,height)
            this.width=width
            this.height=height
        
            World .add(world,this.body)
        }
        display(){
        var angle=this.body.angle
        push ();
        rect (this.body.poisition.x,this.poisition.y,this.width,this.height)
        pop ();
        
        
        }
        
        
        }
        
        
        
