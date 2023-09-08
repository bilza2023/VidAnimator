import { Graphics } from 'pixi.js';
import setGraphicsAnchorX from './setGraphicsAnchorX';
import setGraphicsAnchorY from './setGraphicsAnchorY';

export default class Scene {

constructor(app,canvasWd,canvasHt,duration){
    
    this.app = app;
    this.canvasWd = canvasWd;
    this.canvasHt = canvasHt;
    this.anchorAlignment = 'left';
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

    if (this.anchorAlignment == 'left') {
    // Set the pivot point to the center of the rectangle
    rectangle.pivot.x = 0;
    rectangle.pivot.y = 0;
    }
    if (this.anchorAlignment == 'center') {
    // Set the pivot point to the center of the rectangle
    rectangle.pivot.x = rectangle.width / 2;
    rectangle.pivot.y = rectangle.height / 2;
    }
    if (this.anchorAlignment == 'right') {
    // Set the pivot point to the center of the rectangle
    rectangle.pivot.x = rectangle.width;
    rectangle.pivot.y = rectangle.height;
    }
// Set the position of the rectangle AFTER THE SET PIVOT
rectangle.x = x; //assign x and y here
rectangle.y = y;

this.app.stage.addChild(rectangle);//importantay
this.items.push(rectangle); //importantay

//-- This is some advance level shit - the rectangle is permanant where as the anchorAlignment is determined at run time
rectangle.setGraphicsAnchorX = (anchorAlignment = 'center') => setGraphicsAnchorX(rectangle, anchorAlignment);//importantay

rectangle.setGraphicsAnchorY = (anchorAlignment = 'center') => setGraphicsAnchorY(rectangle, anchorAlignment);//importantay
//--finally
return rectangle;
}





}//scene

