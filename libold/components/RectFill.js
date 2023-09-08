import {Graphics } from 'pixi.js';

export default class RectFill{

constructor(app,canvasWd,canvasHt,x=0,y=0,width=50,height=50,color='grey'){
this.app = app;
this.canvasWd = canvasWd;
this.canvasHt = canvasHt;
this.color = color;
this.x = x;
this.y = y;
this.rotation = 0;
this.angle = 0;
this.width = width;
this.height = height;


this.alpha =1;
this.strokeWidth = 1;
this.strokeColor = 'grey';

}

draw(){
const rectangle = new Graphics();
rectangle.rotation = this.rotation; 
rectangle.angle = this.angle; 

rectangle.beginFill(this.color)

.lineStyle( this.strokeWidth, this.strokeColor , this.alpha)

.drawRect((this.canvasWd/100 * this.x), (this.canvasHt/100 * this.y), 
            (this.canvasWd/100 * this.width), (this.canvasHt/100 * this.height))
.endFill();
this.app.stage.addChild(rectangle);
}

}
