import { Application } from 'pixi.js';
import aspectRatioHeight from './aspectRationHeight';
import Scene from '../scene/Scene';


//***********************************************//

export default class VidAnimator {

constructor( htmlElmId='canvas' , wdPerc=75 , bgColor='#e5e8a4'){
this.scenes = [];
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

addScene(duration=10){
const scene = new Scene(this.app,this.canvasWd,this.canvasHt,duration);
this.scenes.push(scene);
return scene;
}


}//class VidAnimator