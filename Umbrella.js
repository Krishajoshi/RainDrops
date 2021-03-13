class Umbrella{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("walking_1.png")
		this.umbrella=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.umbrella);
	}
    
	display()
	{
		
		
		imageMode(CENTER);
		image(this.image, this.umbrella.position.x,this.umbrella.position.y+70,300,300)
		
 }
}