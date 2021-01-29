class Sand
{
    constructor(x,y)
    {
        var op={
            'restitution':1.3,
            'density':1,
            'friction':5
        }
        ellipseMode(RADIUS)
        this.body=Bodies.circle(x, y, 8, op);
        this.radius=8;
        World.add(world, this.body);
    }
    display()
    {
        var pos =this.body.position;
        var angle=this.body.angle;
        push();
         translate(pos.x,pos.y);
         rotate(angle);
         ellipseMode(RADIUS);
         fill(187,189,83);
        circle(0,0, this.radius);
        pop(); 
    }
}