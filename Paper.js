class Paper{
    constructor(x,y,r)
    {

        var options={
            isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
        }
        this.paper = loadImage("sprites/paper.png")
        
		this.body=Bodies.circle(this.x, this.y, (this.r-10)/2, options)
		World.add(world, this.body);


        display()
        {
    //        image(this.paper,200,20)
                var paperpos=this.body.position;		
                push()
                translate(paperpos.x, paperpos.y);
                imageMode(CENTER)
                strokeWeight(4);
                stroke("black");
                fill("darkblue");
                image(this.paper,0,0,this.r, this.r);
                pop()
                
        }











    }
}