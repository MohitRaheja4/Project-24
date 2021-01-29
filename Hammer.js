class Hammer
{
    constructor()
    {
        var op={
            'restitution':0.5,
            'density':2,
            'friction':1
        }
        this.body=Bodies.rectangle(mouseX,mouseY, 80, 30, op);
        this.width=80;
        this.height=30;
        World.add(world, this.body);
    }
    display()
    {
        var pos =this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push();
         translate(pos.x,pos.y);
         rotate(angle);
         rectMode(CENTER);
         fill(70,72,55);
         rect(pos.x, pos.y, this.width, this.height);
        pop(); 
    }
}