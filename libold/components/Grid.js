import {Graphics } from 'pixi.js';

export default class Grid{

constructor(app,canvasWd,canvasHt,color='red'){
this.app = app;
this.canvasHt = canvasHt;
this.canvasWd = canvasWd;
this.color = color;

this.alpha =1;
this.width = 1;

}//constructor ends

draw(){
//---vertical
for (let i = 0; i < 100; i+=10) {

    const line = new Graphics();
     line.lineStyle(this.width, this.color , this.alpha)
    .moveTo((this.canvasWd/100 * i), (this.canvasHt/100 * 0))
    .lineTo((this.canvasWd/100 * i), (this.canvasHt/100 * 100));

    this.app.stage.addChild(line);
}

//---horizontal
for (let i = 0; i < 100; i+=10) {

      const line = new Graphics();
     line.lineStyle(this.width, this.color , this.alpha)
    .moveTo((this.canvasWd/100 * 0), (this.canvasHt/100 * i))
    .lineTo((this.canvasWd/100 * 100), (this.canvasHt/100 * i));

    this.app.stage.addChild(line);

}

}

}
