import {Graphics } from 'pixi.js';

export default class Circle{

constructor(app,canvasWd,canvasHt,x=10,y=10,radius=10,color='grey'){
    // debugger;
this.app = app;
this.canvasWd = canvasWd;
this.canvasHt = canvasHt;
this.x = x;
this.y = y;
this.radius = radius;
this.fillColor = color;
}

draw(){
const circle = new Graphics();
circle.lineStyle(2, 0xffffff);

circle.drawCircle((this.canvasWd/100 * this.x), (this.canvasHt/100 * this.y), 
            (this.canvasWd/100 * this.radius/2))
            

this.app.stage.addChild(circle);

}

}
