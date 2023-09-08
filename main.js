import VidAnimator from './lib/vidAnimator/VidAnimator';


////////////////////////////////////////////

const vidAnimator = new VidAnimator();
const scene01 = vidAnimator.addScene();

// const fillRect1 = scene01.addRectFill(0,0,50,50,'red');
// const fillRect2= scene01.addRect(1,1,50,50,'green');
// fillRect2.lineStyle(5, 0x000000);
// fillRect1.tint = 'blue';
// fillRect1.alpha = 0.1;

// const line= scene01.addLine(0,0,100,100,'red',5);
const grid = scene01.addGridFull('#adaf67');
const circle = scene01.addCircle(30,30,20,'red',5);
const circleFull = scene01.addCircleFull(60,30,20,'red',5);

vidAnimator.addToTicker(() => {
    // fillRect.rotation += 0.01;
});

console.log('scene01' ,scene01);

