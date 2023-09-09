import { Graphics,TextStyle,Text as PIXIText,Container } from 'pixi.js';
import '@pixi/graphics-extras';

import setGraphicsAnchorX from './setGraphicsAnchorX';
import setGraphicsAnchorY from './setGraphicsAnchorY';
import calculateFontSize from './calculateFontSize';


///////////////////////////////////////////////////
export default class Scene {

constructor(app,canvasWd,canvasHt,duration){
    this.container = new Container();
    this.app = app;
    this.canvasWd = canvasWd;
    this.canvasHt = canvasHt;
    // this.anchorAlignment = 'left';
    this.duration=duration;
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
this.container.addChild(rectangle); //importantay

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
this.container.addChild(rectangle); //importantay

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

this.container.addChild(line); //importantay
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

this.container.addChild(circle); //importantay
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

this.container.addChild(circle); //importantay
return circle;   
}
///////////////////////////////////
addText(x=0,y=0,content='Content',color='black',desiredWidth=20,style = new TextStyle() ){
const fontSize = calculateFontSize(content, (this.canvasWd/100) * desiredWidth);
    style.fontSize = fontSize;
    style.fill =  color;
    
    const txt = new PIXIText( content , style);

    txt.x = (this.canvasWd/100)* x;
    txt.y = (this.canvasHt/100)* y;
this.app.stage.addChild(txt);

this.container.addChild(txt); //importantay
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

this.container.addChild(torus); //importantay
return torus;   
}
///////////////////////////////////
addChamferRect(x=0, y=0, color='red', width=100, height=50, radius=10) {
    const chamferRect = new Graphics();
    chamferRect.beginFill(color);
    chamferRect.drawChamferRect((this.canvasWd/100 * x), (this.canvasHt/100 * y), width, height, radius);
    chamferRect.endFill();            
    this.app.stage.addChild(chamferRect);

    this.container.addChild(chamferRect); //important
    return chamferRect;   
}
///////////////////////////////////
addFilletRect(x=0, y=0, color='red', width=100, height=50, radius=10) {
    const filletRect = new Graphics();
    filletRect.beginFill(color);
    filletRect.drawFilletRect((this.canvasWd/100 * x), (this.canvasHt/100 * y), width, height, radius);
    filletRect.endFill();            
    this.app.stage.addChild(filletRect);

    this.container.addChild(filletRect); //important
    return filletRect;   
}
///////////////////////////////////////
addRegularPolygon(x=0, y=0, color='red', radius=50, sides=5, rotation=0) {
    const regularPolygon = new Graphics();
    regularPolygon.beginFill(color);
    regularPolygon.drawRegularPolygon((this.canvasWd/100 * x), (this.canvasHt/100 * y), radius, sides, rotation);
    regularPolygon.endFill();            
    this.app.stage.addChild(regularPolygon);

    this.container.addChild(regularPolygon); //important
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

    this.container.addChild(star); //important
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

    this.container.addChild(polygon); //important
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

