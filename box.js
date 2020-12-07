class Box{
constructor(x,y,width,height){
 this.box = Bodies.rectangle(x,y,width,height);
 this.widht=width
 this.height=height
    World.add(world,this.box);
}
display(){
   push()
   translate(this.box.position.x,this.box.position.y)
   rotate(this.box.angle)
    fill("blue")
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop()
}
}













