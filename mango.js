class Mango{
    constructor(x, y, radius) {
        var options = {
            restitution:0,
            friction:1.0,
            density: 2,
            isStatic: true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}