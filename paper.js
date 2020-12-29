class Paper{
    constructor(x,y,radius){
        var options= {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
        }

      this.body = Bodies.circle(x, y,radius/2,options);
      this.image = loadImage("sprites/paper.png");
        this.radius=radius/2
      World.add(world, this.body);
    }

    display(){
        var pos=this.body.position;		
    push()
    //var pos=this.body.position;	
    translate(pos.x, pos.y);
   // this.image(this.image);
   imageMode (CENTER)
    image(this.image,0,0,this.radius,this.radius);
		//rectMode(CENTER)
		//strokeWeight(3);
		//fill(255,0,255)
		//ellipse(0,0,this.radius*2, this.radius*2);
		pop()

    }
}