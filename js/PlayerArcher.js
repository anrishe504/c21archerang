class PlayerArcher {
    constructor(x, y, width, height) {
      
      const options = {
        isStatic: true
      };
      this.w = width;
      this.h = height;
      this.body = Bodies.rectangle(x, y, this.w, this.h,options);
      this.image = loadImage("./assets/playerArcher.png");
      World.add(world, this.body);
      Matter.Body.setAngle(this.body, -PI / 2);

    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      console.log("Arrow");

      if (keyIsDown(DOWN_ARROW) ) {
        angle += 0.01;
        Matter.Body.setAngle(this.body, angle);
        console.log("downArrow");
      }
  
      if (keyIsDown(UP_ARROW) ) {
        angle -= 0.01;
        Matter.Body.setAngle(this.body, angle);
        console.log("upArrow");
      }
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.w, this.h);
      pop();
    }
  }
  