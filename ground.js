class ground
{
    constructor(x, y, w, h)
    {
        let options = {
            isStatic:true
        };

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.y = y;
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        push();
        rectMode();
        stroke(14);
        fill(14);
        rect(pos.x, pos.y, this,w, this.y);
        pop();
    }
}