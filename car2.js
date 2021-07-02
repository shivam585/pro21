class Car2{
    constructor(speed3,v3){
       
 
 
 
         this.x = Math.round( random(1050,1300))
         this.y = v3;
         this.spt = createSprite(this.x,this.y);
         this.spt.scale=0.5;
         this.spt.velocityY = speed3;
        
         var shapec=Math.round(random(1,4))
         switch(shapec){
         case 1:this.spt.shapeColor=("red")
         break;
         case 2:this.spt.shapeColor=("blue")
         break;
         case 3:this.spt.shapeColor=("yellow")
         break;
         case 4:this.spt.shapeColor=("green")
         break;
 
 
 
         }
     }
    
 }
 
