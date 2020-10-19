class DustBin
{
    constructor(x,y)
    {
        this.dustbinWidth = 200;
        this.dustbinheight = 100;
        this.wallthickness = 20;

        var options={isStatic:true,
                     friction:1.0
                    }

        this.bottomBody = Bodies.rectangle(x,y,this.dustbinWidth,this.wallthickness,options);
       
        this.leftWall =  Bodies.rectangle(x-this.dustbinWidth/2-this.wallthickness/2,
                                          y,this.wallthickness, this.dustbinheight,options);
        this.rightWall =  Bodies.rectangle(x+this.dustbinWidth/2+this.wallthickness/2,
                                          y,this.wallthickness, this.dustbinheight,options);     
                                          
        World.add(world,this.bottomBody);
        World.add(world,this.leftWall);
        World.add(world,this.rightWall);                                          
                                          
    }
display()
{   fill("red");
    rectMode(CENTER);
    //bottom rect
    
       rect(this.bottomBody.position.x,this.bottomBody.position.y,this.dustbinWidth,this.wallthickness);
       rect(this.leftWall.position.x,this.leftWall.position.y-100,this.wallthickness,this.dustbinWidth);
       rect(this.rightWall.position.x,this.rightWall.position.y-100,this.wallthickness,this.dustbinWidth);
    
    
}


}