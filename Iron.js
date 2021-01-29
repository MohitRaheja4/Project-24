class Iron
{
    constructor()
    {
        var op={
            'restitution':0.4,
            'density':30,
            'friction':0.8
        }
        this.body=Bodies.rectangle(200,600,80,80,op);
        this.width=80;
        this.height=80;
        World.add(world, this.body);
    }
    display()
    {
        var pos =this.body.position;
        var angle=this.body.angle;
        push();
         translate(pos.x,pos.y);
         rotate(angle);
         rectMode(CENTER);
         fill("red");
         rect(0,0, this.width, this.height);
        pop(); 
    }
}