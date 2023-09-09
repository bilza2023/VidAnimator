import Presentation from './lib/presentation/Presentation';
import Icons from './lib/icons';

////////////////////////////////////////////
const presentation = new Presentation();
const slide01 = presentation.addSlide();
const slide02 = presentation.addSlide();
const slide03 = presentation.addSlide();
const slide04 = presentation.addSlide();


slide01.addText(70,2,'Slide 01');
slide02.addText(70,2,'Slide 02');
slide03.addText(70,2,'Slide 03');
slide04.addText(70,2,'Slide 04');

const grid = slide01.addGridFull('#adaf67');
const circle = slide01.addCircle(30,30,20,'red',5);
const circleFull = slide01.addCircleFull(60,30,20,'red',5);
const txt = slide02.addText(50,50,'New Text');
const icon = slide02.addText(50,70,Icons.BAG);
const torus = slide02.addTorus(20,40,'green',20,80);
const chamfer = slide03.addChamferRect(20,60,'blue',200,80,10);
const fillet = slide03.addFilletRect(60,60,'brown',200,80,10);
const regular = slide03.addRegularPolygon(10,70,'red',80,6,10);
const star = slide04.addStar(80,10,'green');

const points = [
0, 0, 
10, 40, 
20, 60,
10,60, 
0, 50];
const polygon = slide04.addPolygon(50, 50, 'blue', points);

presentation.play();