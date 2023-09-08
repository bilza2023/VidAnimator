import { Graphics } from 'pixi.js';


export default class Scene {

constructor(app,canvasWd,canvasHt,duration){
    
    this.app = app;
    this.canvasWd = canvasWd;
    this.canvasHt = canvasHt;

    this.duration=duration;
    this.items = [];
}
addToTicker(fn){
    this.app.ticker.add(fn)
}
///////////////////////////////////
addRectFill(x=100,y=100,wd=100,ht=100,color=0x66CCFF){
const rectangle = new Graphics();

rectangle.beginFill(color)
    .drawRect(0, 0, wd, ht) //keep x and y 0 here
    .endFill();

// Set the pivot point to the center of the rectangle
rectangle.pivot.x = rectangle.width / 2;
rectangle.pivot.y = rectangle.height / 2;

// Set the position of the rectangle AFTER THE SET PIVOT
rectangle.x = x; //assign x and y here
rectangle.y = y;

this.app.stage.addChild(rectangle);
this.items.push(rectangle); //importantay
return rectangle;
}





}//scene