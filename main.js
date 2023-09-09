import Presentation from './lib/presentation/Presentation';
import Icons from './lib/icons';

////////////////////////////////////////////
const presentation = new Presentation();
const slide01 = presentation.addSlide();


const grid = slide01.addGridFull('#adaf67');
const circle = slide01.addCircle(30,30,20,'red',5);
const circleFull = slide01.addCircleFull(60,30,20,'red',5);
const txt = slide01.addText(50,50,'New Text');
const icon = slide01.addText(50,70,Icons.BAG);
const torus = slide01.addTorus(20,40,'green',20,80);
const chamfer = slide01.addChamferRect(20,60,'blue',200,80,10);
const fillet = slide01.addFilletRect(60,60,'brown',200,80,10);
const regular = slide01.addRegularPolygon(10,70,'red',80,6,10);
const star = slide01.addStar(80,10,'green');

const points = [
0, 0, 
10, 40, 
20, 60,
10,60, 
0, 50];
const polygon = slide01.addPolygon(50, 50, 'blue', points);


vidAnimator.addToTicker(() => {
    // fillRect.rotation += 0.01;
});

console.log('slide01' ,slide01);

