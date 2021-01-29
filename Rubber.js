class Rubber
{
    constructor()
    {
        var op={
            'restitution':0.3,
            'density':1,
            'friction':5
        }
        this.body=Bodies.circle(700,600,4,op);
        this.radius=40;
        World.add(world, this.body);
    }
    display()
    {
        var pos =this.body.position;
        push();
         translate(pos.x,pos.y);
         ellipseMode(RADIUS);
         fill("red");
         ellipse(0,0, this.radius);
        pop(); 
    }
}