class Stone
{
    constructor()
    {
        var op={
            'restitution':0.5,
            'density':2.0,
            'friction':1.0
        }
        this.body=Bodies.rectangle(500,600,70,70,op);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display()
    {
        var pos =this.body.position;
        text("stone",pos.x,pos.y);
        var angle=this.body.angle;
        push();
         translate(pos.x,pos.y);
         rotate(angle);
         rectMode(CENTER);
         fill("grey");
         rect(pos.x, pos.y, this.width, this.height);
        pop(); 
    }
}