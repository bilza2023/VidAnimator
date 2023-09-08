import VidAnimator from './lib/vidAnimator/VidAnimator';


////////////////////////////////////////////

const vidAnimator = new VidAnimator();
const scene01 = vidAnimator.addScene();
const fillRect = scene01.addRectFill(300,200,50,50,'red');

fillRect.setGraphicsAnchorX(2);
fillRect.setGraphicsAnchorY(0);

scene01.addToTicker(() => {
    // fillRect.rotation += 0.01;
    fillRect.width +=0.5;
    fillRect.height +=0.5;
})

console.log('scene01' ,scene01);

