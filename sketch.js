var box1, box2;

function setup() 
{
  createCanvas(400, 400);

  box1 = new Box();
  box2 = new Box();
}

function draw() 
{
  background(220);

  box1.show();
  box1.set_speed(5);

  box2.show();
  box2.set_speed(2);


}
