class Box {
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
              restitution:0
          }
         
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    

    }
    show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
        rect(this.x,this.y,this.width,this.height);
    }
}
    




