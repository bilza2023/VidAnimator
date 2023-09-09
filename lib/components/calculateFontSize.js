import { TextStyle,Text as PIXIText } from 'pixi.js';


export default function calculateFontSize(content, desiredWidth, initialFontSize = 80) {
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
