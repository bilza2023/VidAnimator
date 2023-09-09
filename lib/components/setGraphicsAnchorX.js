

// in graphics its Pivot not Anchor in sprite its Anchor but I am using word Anchor for both to avoid confusion
export default function setGraphicsAnchorX(graphics,anchorAlignment=1){
    const tempX = graphics.x;
    const tempY = graphics.y;
       
        graphics.x = 0;
        graphics.y = 0;
       
    if (anchorAlignment == 0) {
    // Set the pivot point to the center of the graphics
    graphics.pivot.x = 0;
    }
    if (anchorAlignment == 1) {
    // Set the pivot point to the center of the graphics
    graphics.pivot.x = graphics.width / 2;
    }
    if (anchorAlignment == 2) {
    // Set the pivot point to the center of the graphics
    graphics.pivot.x = graphics.width;
    }

    graphics.x = tempX;
    graphics.y = tempY;
}