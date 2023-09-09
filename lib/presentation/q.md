I am trying to create a Presentation (Slide show) app with pixi.js
The idea is simple
    - The Presentation object has slides array. The addslide will add a slide in this array.
    - The Slide object (also called Components object) has an items array. this items array add items / components to pixi.js app object and heance it is visible on the screen.

I want when the presentation in run (presentation.run()) it should display the first slide and then show the second slid after 10 seconds and then the third slide after 10 seconds till the end.

How to achieve this ?

At the monent all the items are added to pixi app directly by Slide object. Actuall what I think should happen in that a slide should be pixi container and all the items should be added to the slide (container). once thaat slide / container is removed it will also remove all the items it has
is this approch correct or there is some other option.

Her is code for presentation obj
import { Application } from 'pixi.js';
import aspectRatioHeight from './aspectRationHeight';
import Components from '../components/Components';


//***********************************************//

export default class VidAnimator {

constructor( htmlElmId='canvas' , wdPerc=75 , bgColor='#e5e8a4'){
this.slides = [];
this.canvasWd = (window.innerWidth/100) * wdPerc;
this.canvasHt = aspectRatioHeight(this.canvasWd);

this.app = new Application({
    width: this.canvasWd ,
    height: this.canvasHt,
    antialias: true
    });
    
this.app.renderer.background.color  = bgColor;
document.getElementById( htmlElmId ).appendChild(this.app.view);

}

addToTicker(fn){
    this.app.ticker.add(fn)
}

addSlide(duration=10){
const slide = new Components(this.app,this.canvasWd,this.canvasHt,duration);
this.slides.push(slide);
return slide;
}

play(){

}
pause(){}
stop(){}

}//class VidAnimator

code for Slide object
import { Graphics,TextStyle,Text as PIXIText } from 'pixi.js';
import '@pixi/graphics-extras';

import setGraphicsAnchorX from './setGraphicsAnchorX';
import setGraphicsAnchorY from './setGraphicsAnchorY';
import calculateFontSize from './calculateFontSize';


///////////////////////////////////////////////////
export default class Scene {

constructor(app,canvasWd,canvasHt,duration){
    
    this.app = app;
    this.canvasWd = canvasWd;
    this.canvasHt = canvasHt;
    // this.anchorAlignment = 'left';
    this.duration=duration;
    this.items = [];
}
///////////////////////////////////
addRectFill(x=0,y=0,wd=10,ht=10,color=0x66CCFF){
const rectangle = new Graphics();

rectangle.beginFill(0xFFFFFF)
    .drawRect(0, 0, (this.canvasWd/100)*wd, (this.canvasHt/100)*ht) //keep x and y 0 here
    .endFill();
rectangle.tint = color;
    // if (this.anchorAlignment == 'left') {
    // Set the pivot point to the center of the rectangle
    rectangle.pivot.x = 0;
    rectangle.pivot.y = 0;
    // }
    
// Set the position of the rectangle AFTER THE SET PIVOT
rectangle.x = (this.canvasWd/100)* x; //assign x and y here
rectangle.y = (this.canvasHt/100)* y;

this.app.stage.addChild(rectangle);//importantay
this.items.push(rectangle); //importantay

//-- This is some advance level shit - the rectangle is permanant where as the anchorAlignment is determined at run time
rectangle.setGraphicsAnchorX = (anchorAlignment = 0) => setGraphicsAnchorX(rectangle, anchorAlignment);//importantay

rectangle.setGraphicsAnchorY = (anchorAlignment = 0) => setGraphicsAnchorY(rectangle, anchorAlignment);//importantay

rectangle.setX = (x)=>{rectangle.x = (this.canvasWd/100)* x};
rectangle.getX = ()=>{return (this.canvasWd/100)* rectangle.x};

rectangle.setY = (y)=>{rectangle.y = (this.canvasWd/100)* y };
rectangle.getY = ()=>{return (this.canvasHt/100)* rectangle.y };

rectangle.setWidth = (wd)=>{rectangle.width = (this.canvasWd/100)*wd};
rectangle.getWidth = ( )=>{return (this.canvasWd/100) * rectangle.width;};

rectangle.setHeight = (ht)=>{rectangle.height = (this.canvasHt/100)*ht};
rectangle.getHeight = ( )=>{return (this.canvasHt/100) * rectangle.height;};

//--finally
return rectangle;
}
///////////////////////////////////
addRect(x=0,y=0,wd=10,ht=10,color=0x66CCFF,strokeWidth=1,alpha=1){
const rectangle = new Graphics();

rectangle.lineStyle( strokeWidth, color , alpha)

rectangle.drawRect(0, 0, (this.canvasWd/100)*wd, (this.canvasHt/100)*ht) //keep x and y 0 here
    rectangle.pivot.x = 0;
    rectangle.pivot.y = 0;

// Set the position of the rectangle AFTER THE SET PIVOT
rectangle.x = (this.canvasWd/100)* x; //assign x and y here
rectangle.y = (this.canvasHt/100)* y;

this.app.stage.addChild(rectangle);//importantay
this.items.push(rectangle); //importantay

//-- This is some advance level shit - the rectangle is permanant where as the anchorAlignment is determined at run time
rectangle.setGraphicsAnchorX = (anchorAlignment = 0) => setGraphicsAnchorX(rectangle, anchorAlignment);//importantay

rectangle.setGraphicsAnchorY = (anchorAlignment = 0) => setGraphicsAnchorY(rectangle, anchorAlignment);//importantay

rectangle.setX = (x)=>{rectangle.x = (this.canvasWd/100)* x};
rectangle.getX = ()=>{return (this.canvasWd/100)* rectangle.x};

rectangle.setY = (y)=>{rectangle.y = (this.canvasWd/100)* y };
rectangle.getY = ()=>{return (this.canvasHt/100)* rectangle.y };

rectangle.setWidth = (wd)=>{rectangle.width = (this.canvasWd/100)*wd};
rectangle.getWidth = ( )=>{return (this.canvasWd/100) * rectangle.width;};

rectangle.setHeight = (ht)=>{rectangle.height = (this.canvasHt/100)*ht};
rectangle.getHeight = ( )=>{return (this.canvasHt/100) * rectangle.height;};

//--finally
return rectangle;
}
///////////////////////////////////
addLine(x1=0,y1=0,x2=50,y2=50,color='black',strokeWidth=2,alpha=1){
    const line = new Graphics();
    line.lineStyle(strokeWidth, color , alpha)
    .moveTo((this.canvasWd/100 * x1), (this.canvasHt/100 * y1))
    .lineTo((this.canvasWd/100 * x2), (this.canvasHt/100 * y2));

    this.app.stage.addChild(line);

this.items.push(line); //importantay
return line;   

}
///////////////////////////////////
addGridFull(color='black',strokeWidth=2,alpha=1){ //return nothing
    
    for (let i = 0; i < 100; i+=10) {
    this.addLine(i,0,i,100,color,strokeWidth,alpha);
    }
    //---horizontal
    for (let i = 0; i < 100; i+=10) {
    this.addLine(0,i,100,i,color,strokeWidth,alpha);
    }
}
///////////////////////////////////
addCircle(x=10,y=10,radius=10,color = 0xffffff ,strokeWidth=1){
const circle = new Graphics();
circle.lineStyle(strokeWidth, color);
circle.drawCircle((this.canvasWd/100 * x), (this.canvasHt/100 * y), 
            (this.canvasWd/100 * radius/2))
            
this.app.stage.addChild(circle);

this.items.push(circle); //importantay
return circle;   
}
///////////////////////////////////
addCircleFull(x=10,y=10,radius=10,color = 0xffffff ,strokeWidth=1){
const circle = new Graphics();
circle.beginFill(color);
circle.drawCircle((this.canvasWd/100 * x), (this.canvasHt/100 * y), 
            (this.canvasWd/100 * radius/2))
circle.endFill();            
this.app.stage.addChild(circle);

this.items.push(circle); //importantay
return circle;   
}
///////////////////////////////////
addText(x=0,y=0,content='Content',color='black',desiredWidth=320,style = new TextStyle() ){
const fontSize = calculateFontSize(content, desiredWidth);
    style.fontSize = fontSize;
    style.fill =  color;
    
    const txt = new PIXIText( content , style);

    txt.x = (this.canvasWd/100)* x;
    txt.y = (this.canvasHt/100)* y;
this.app.stage.addChild(txt);

this.items.push(txt); //importantay
return txt;  
}
getTextStyle(){
    return new TextStyle();
}
///////////////////////////////////
addTorus(x=0,y=0,color='red',innerRadius=50, outerRadius=100){
const torus = new Graphics();
torus.beginFill(color);
torus.drawTorus((this.canvasWd/100 * x), (this.canvasHt/100 * y), innerRadius, outerRadius);
torus.endFill();            
this.app.stage.addChild(torus);

this.items.push(torus); //importantay
return torus;   
}
///////////////////////////////////
addChamferRect(x=0, y=0, color='red', width=100, height=50, radius=10) {
    const chamferRect = new Graphics();
    chamferRect.beginFill(color);
    chamferRect.drawChamferRect((this.canvasWd/100 * x), (this.canvasHt/100 * y), width, height, radius);
    chamferRect.endFill();            
    this.app.stage.addChild(chamferRect);

    this.items.push(chamferRect); //important
    return chamferRect;   
}
///////////////////////////////////
addFilletRect(x=0, y=0, color='red', width=100, height=50, radius=10) {
    const filletRect = new Graphics();
    filletRect.beginFill(color);
    filletRect.drawFilletRect((this.canvasWd/100 * x), (this.canvasHt/100 * y), width, height, radius);
    filletRect.endFill();            
    this.app.stage.addChild(filletRect);

    this.items.push(filletRect); //important
    return filletRect;   
}
///////////////////////////////////////
addRegularPolygon(x=0, y=0, color='red', radius=50, sides=5, rotation=0) {
    const regularPolygon = new Graphics();
    regularPolygon.beginFill(color);
    regularPolygon.drawRegularPolygon((this.canvasWd/100 * x), (this.canvasHt/100 * y), radius, sides, rotation);
    regularPolygon.endFill();            
    this.app.stage.addChild(regularPolygon);

    this.items.push(regularPolygon); //important
    return regularPolygon;   
}
////////////////////////////////////////
addStar(x=0, y=0, color='red', radius=50, points=5, innerRadius=25) {
    const star = new Graphics();
    star.beginFill(color);

    const coords = [];
    for (let i = 0; i < points; i++) {
        const angle = i * 2 * Math.PI / points - Math.PI / 2;
        coords.push(
            (this.canvasWd/100 * x) + radius * Math.cos(angle),
            (this.canvasHt/100 * y) + radius * Math.sin(angle)
        );
        const innerAngle = angle + Math.PI / points;
        coords.push(
            (this.canvasWd/100 * x) + innerRadius * Math.cos(innerAngle),
            (this.canvasHt/100 * y) + innerRadius * Math.sin(innerAngle)
        );
    }
    star.drawPolygon(coords);
    star.endFill();
    this.app.stage.addChild(star);

    this.items.push(star); //important
    return star;
}
////////////////////////////////////////
addPolygon(x=0, y=0, color='red', points) {
    const polygon = new Graphics();
    polygon.beginFill(color);

    const coords = points.map((point, index) => {
        if (index % 2 === 0) {
            return   (this.canvasWd/100 * point);
        } else {
            return  (this.canvasHt/100 * point);
        }
    });
    polygon.drawPolygon(coords);
    polygon.endFill();
    this.app.stage.addChild(polygon);

    this.items.push(polygon); //important
    return polygon;
}
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
//---next addLine array of line disjoint








}//scene


main.js where the app is run
import Presentation from './lib/presentation/Presentation';
import Icons from './lib/icons';

////////////////////////////////////////////
const presentation = new Presentation();
const slide01 = presentation.addSlide();


const grid = slide01.addGridFull('#adaf67');
const circle = slide01.addCircle(30,30,20,'red',5);
const circleFull = slide01.addCircleFull(60,30,20,'red',5);
const txt = slide01.addText(50,50,'New Text');
const icon = slide01.addText(50,70,Icons.BAG);
const torus = slide01.addTorus(20,40,'green',20,80);
const chamfer = slide01.addChamferRect(20,60,'blue',200,80,10);
const fillet = slide01.addFilletRect(60,60,'brown',200,80,10);
const regular = slide01.addRegularPolygon(10,70,'red',80,6,10);
const star = slide01.addStar(80,10,'green');

const points = [
0, 0, 
10, 40, 
20, 60,
10,60, 
0, 50];
const polygon = slide01.addPolygon(50, 50, 'blue', points);


vidAnimator.addToTicker(() => {
    // fillRect.rotation += 0.01;
});

console.log('slide01' ,slide01);

