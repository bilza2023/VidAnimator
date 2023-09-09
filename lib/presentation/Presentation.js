import { Application } from 'pixi.js';
import aspectRatioHeight from './aspectRationHeight';
import Components from '../components/Components';


//***********************************************//

export default class VidAnimator {

constructor( htmlElmId='canvas' , wdPerc=75 , bgColor='#e5e8a4'){
this.slides = [];
this.currentSlide = 0; // increment
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

addSlide(duration=5){
const slide = new Components(this.app,this.canvasWd,this.canvasHt,duration);
this.slides.push(slide);
    return slide;
}

play() {
if (this.slides.length <= 0) {throw new Error("No slides found");}
else {
//first slide
this.app.stage.addChild(this.slides[0].container);
}

    const transitionSlide = () => {
        // Remove the current slide from the stage
        this.app.stage.removeChild(this.slides[this.currentSlide].container);

        // Increment the current slide index
        this.currentSlide++;

        // Check if there are more slides to display
        if (this.currentSlide < this.slides.length) {
            // Add the next slide to the stage
            this.app.stage.addChild(this.slides[this.currentSlide].container);
            
            // Schedule the next slide transition after the duration of the current slide
            setTimeout(transitionSlide, this.slides[this.currentSlide].duration * 1000);
        }
    };

    // Start with the first slide
    this.app.stage.addChild(this.slides[this.currentSlide].container);

    // Start the slide transition loop with the duration of the first slide
    setTimeout(transitionSlide, this.slides[this.currentSlide].duration * 1000);
}




pause(){}
stop(){}

}//class VidAnimator