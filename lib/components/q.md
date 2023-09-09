I am using Graphics object of pixi.js in my  Scene object

import { Graphics } from 'pixi.js';
import setGraphicsPivot from './setGraphicsPivot';

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
rectangle.setGraphicsPivot = setGraphicsPivot;//importantay
return rectangle;
}

}//scene



I have created a pixi.js Graphics object instance and have attached setGraphicsPivot function to it





export default function setGraphicsPivot(graphics,anchorAlignment='center'){
    const tempX = graphics.x;
    const tempY = graphics.y;
       
        graphics.x = 0;
        graphics.y = 0;
       
    if (anchorAlignment == 'left') {
    // Set the pivot point to the center of the graphics
    graphics.pivot.x = 0;
    graphics.pivot.y = 0;
    }
    if (anchorAlignment == 'center') {
    // Set the pivot point to the center of the graphics
    graphics.pivot.x = graphics.width / 2;
    graphics.pivot.y = graphics.height / 2;
    }
    if (anchorAlignment == 'right') {
    // Set the pivot point to the center of the graphics
    graphics.pivot.x = graphics.width;
    graphics.pivot.y = graphics.height;
    }

    graphics.x = tempX;
    graphics.y = tempY;
}

Now to use this function I have to pass in the Graphics object to this function as well. HOW DO I AVOID SENDING THE GRAPHICS OBJECT TO IT?
here is how it is used in main.js
import VidAnimator from './lib/vidAnimator/VidAnimator';


////////////////////////////////////////////

const vidAnimator = new VidAnimator();
const scene01 = vidAnimator.addScene();
const fillRect = scene01.addRectFill(300,200,50,50,'red');

fillRect.setGraphicsPivot(fillRect,'right');

scene01.addToTicker(() => {
    // fillRect.rotation += 0.01;
    fillRect.width +=1;
})

console.log('scene01' ,scene01);

I WANT TO USE 
fillRect.setGraphicsPivot('right');
INSTEAD of
fillRect.setGraphicsPivot(fillRect,'right');


can i do something like following in scene.js


this.app.stage.addChild(rectangle);//importantay
this.items.push(rectangle); //importantay
rectangle.setGraphicsPivot = ()=>setGraphicsPivot(rectangle);//importantay
return rectangle;
}

