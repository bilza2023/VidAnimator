import { Application } from 'pixi.js';
import aspectRatioHeight from './aspectRationHeight';

export default async function setup(wdPerc=90){
const canvasWd = (window.innerWidth/100) * wdPerc;
const canvasHt = aspectRatioHeight(canvasWd);
const app = new Application({
    width: canvasWd ,
    height: canvasHt,
    antialias: true
    });
document.getElementById('canvas').appendChild(app.view);
return {app ,canvasWd,canvasHt};
}
