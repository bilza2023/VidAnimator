

// in graphics its Pivot not Anchor in sprite its Anchor but I am using word Anchor for both to avoid confusion
export default function setGraphicsAnchorY(graphics,anchorAlignment=1){
    const tempX = graphics.x;
    const tempY = graphics.y;
       
        graphics.x = 0;
        graphics.y = 0;
       
    if (anchorAlignment == 0) {
    // Set the pivot point to the center of the graphics
    graphics.pivot.y = 0;
    }
    if (anchorAlignment == 1) {
    // Set the pivot point to the center of the graphics
    graphics.pivot.y = graphics.height / 2;
    }
    if (anchorAlignment == 2) {
    // Set the pivot point to the center of the graphics
    graphics.pivot.y = graphics.height;
    }

    graphics.x = tempX;
    graphics.y = tempY;
}