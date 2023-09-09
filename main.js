import VidAnimator from './lib/vidAnimator/VidAnimator';
import Icons from './lib/icons';

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
const txt = scene01.addText(50,50,'New Text');
const icon = scene01.addText(50,70,Icons.BAG);
const torus = scene01.addTorus(20,40,'green',20,80);
const chamfer = scene01.addChamferRect(20,60,'blue',200,80,10);
const fillet = scene01.addFilletRect(60,60,'brown',200,80,10);
const regular = scene01.addRegularPolygon(10,70,'red',80,6,10);
const star = scene01.addStar(80,10,'green');

const points = [0, 50, 
10, 40, 
20, 60,
10,60, 
0, 50];
const polygon = scene01.addPolygon(50, 50, 'blue', points);


vidAnimator.addToTicker(() => {
    // fillRect.rotation += 0.01;
});

console.log('scene01' ,scene01);

