import VidAnimator from './lib/vidAnimator/VidAnimator';


////////////////////////////////////////////

const vidAnimator = new VidAnimator();
const scene01 = vidAnimator.addScene();
const fillRect = scene01.addRectFill(200,200,200,200,'red');

scene01.addToTicker(() => {
    fillRect.rotation += 0.01;
})

console.log('scene01' ,scene01);

