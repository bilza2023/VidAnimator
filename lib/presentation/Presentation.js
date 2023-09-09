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