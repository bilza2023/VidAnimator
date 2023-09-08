import {Graphics } from 'pixi.js';

export default class Line{

constructor(app,canvasWd,canvasHt,x1=0,y1=0,x2=50,y2=50,color='black'){
this.app = app;
this.canvasHt = canvasHt;
this.canvasWd = canvasWd;
this.x1 = x1;
this.y1 = y1;
this.x2 = x2;
this.y2 = y2;
this.color = color;

this.alpha =1;
this.width = 1;
}

draw(){
const line = new Graphics();
    line.lineStyle(this.width, this.color , this.alpha)
    .moveTo((this.canvasWd/100 * this.x1), (this.canvasHt/100 * this.y1))
    .lineTo((this.canvasWd/100 * this.x2), (this.canvasHt/100 * this.y2));

    this.app.stage.addChild(line);

}

}
