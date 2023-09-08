import {TextStyle,Text as PIXIText } from 'pixi.js';

export default class Text{

constructor(app,canvasWd,canvasHt,x=0,y=0,content='Content',color='black',desiredWidth=320){
this.app = app;
this.x = x;
this.y = y;
this.alignment = 'center' ;
this.canvasWd = canvasWd;
this.canvasHt = canvasHt;
this.content = content;
// this.color = color; //fill is color
this.desiredWidth = desiredWidth;

this.fontFamily =  'Montserrat';
this.fontSize = 48;
this.fill =  color;
this.stroke =  'grey';
this.strokeThickness =  2;
this.dropShadow =  true;
this.dropShadowDistance =  2;
this.dropShadowAngle =  Math.PI / 2;
this.dropShadowBlur =  2;
this.dropShadowColor =  '#000000';



}

draw(){
const fontSize = calculateFontSize(this.content, this.desiredWidth);
const style = new TextStyle({
    fontFamily: this.fontFamily,
    fontSize,
    fill: this.fill,
    stroke: this.stroke,
    strokeThickness: this.strokeThickness,
    dropShadow: this.dropShadow,
    dropShadowDistance: this.dropShadowDistance,
    dropShadowAngle: this.dropShadowAngle,
    dropShadowBlur: this.dropShadowBlur,
    dropShadowColor: this.dropShadowColor,
});

const myText = new PIXIText( this.content , style);

console.log('Text width' ,myText.width );

    if (this.alignment == 'left'){
        myText.x = this.canvasWd/100 * this.x;
    }
    if (this.alignment == 'center'){
        myText.x = (this.canvasWd/100 * this.x) - (myText.width/2);
    }
    if (this.alignment == 'right'){
        myText.x = (this.canvasWd/100 * this.x) - (myText.width);
    }

    myText.y = this.canvasHt/100 * this.y;
this.app.stage.addChild(myText);

}

}


////////////
function calculateFontSize(content, desiredWidth, initialFontSize = 80) {
    let fontSize = initialFontSize;
    let myText;
    do {
        const style = new TextStyle({
            fontFamily: 'Montserrat',
            fontSize,
            // fill: color,
            stroke: '#ffffff',
            strokeThickness: 2,
            dropShadow: true,
            dropShadowDistance: 10,
            dropShadowAngle: Math.PI / 2,
            dropShadowBlur: 4,
            dropShadowColor: '#000000'
        });

        myText = new PIXIText(content, style);
        fontSize--;
    } while (myText.width > desiredWidth && fontSize > 0);

    return fontSize;
}
