class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.remove=true;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
World.remove(world, this.body);
if(this.remove==true)
    {
      score=score+50;
      this.remove=false;
    }
    //score=score+1;
     //pig1.destroy();
     //push();
     //this.Visiblity = this.Visiblity - 5;
     //tint(255,this.Visiblity);
     //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    // pop();
   }
  }
 /*
  score(){
    // if(this.body.isTouching())
     //if (this.Visiblity < 0 && this.Visiblity > -1005){
     if(World.remove(world, this.body)===0)
   {
   console.log( score=score+50);
     }
   }*/



};