import p5 from 'p5';

export function wavetable(containerId) {
  new p5((p) => {
    let cols, rows;
    let scl = 15; // scale of each cell
    let w; // width of the wave field
    let h; // height of the wave field
    let margin = 0.01; // margin around the wave field
    let yoff = 0.0; // offset for y-axis noise
    let containerDiv = document.getElementById(containerId);
    let buffer; // Create a graphics buffer

    // noise control
    let noiseIntensityX = 30; // Adjust this for X noise intensity
    let noiseIntensityY = 200; // Adjust this for Y noise intensity
    
    let xoffIncrement = 0.00006; // Higher = faster horizontal change
    let yoffIncrement = 0.00009;  // vertical change

    p.setup = () => {
      let rect = containerDiv.getBoundingClientRect();
      w = rect.width * (1 - 2 * margin); // Adjust width based on container width and margin
      console.log(rect.height)
      console.log(rect.width)
      h = rect.height * (1 - 2 * margin); // Adjust height based on container height and margin

      p.createCanvas(rect.width, rect.height).parent(containerId);
      p.clear();
      

      // Adjust cols and rows based on new dimensions
      cols = (w - margin * 2) / scl;
      rows = (h - margin * 2) / scl;

      buffer = p.createGraphics(w, h); // Initialize the buffer
      buffer.clear();  // Initialize the buffer with a transparent background
    };

    p.draw = () => {

      // Prepare buffer for drawing
      buffer.strokeWeight(1);
    
      for (let y = margin; y <= h - margin; y += scl) { // Adjusted to account for margin top and bottom
        buffer.noFill();
        buffer.beginShape();
        let xoff = 0.0;
    
        for (let x = margin; x <= w - margin; x += scl) { // Adjusted to account for margin left and right
          let alphaY = p.map(y, 0, h, 51, 255); // Alpha for Y
          let midX = w / 2;
          let distanceFromMidX = Math.abs(x - midX);
          let alphaX = p.map(distanceFromMidX, 0, midX, 255, 179); // Alpha for X (70% opacity at edges)
    
          // Combine the two alpha values, choosing the minimum to ensure maximum transparency
          let alpha = Math.min(alphaX, alphaY);
        
          buffer.stroke(255, 255, 255, alpha);  // Apply stroke to buffer

          let distance = p.dist(p.mouseX - margin, p.mouseY - margin, x, y); // Distance from the cursor, adjusted for margin
          let distortionFactorX = p.map(distance, 0, 200, 0.02, 0); // Distortion for X - third num = max
          let distortionFactorY = p.map(distance, 0, 200, -2, 0); // Distortion for Y
    
          let noiseValue = p.noise(x * xoff, yoff);
          let noiseScaleX = p.map(noiseValue, 0, 1, -noiseIntensityX, noiseIntensityX) + distortionFactorX;
          let noiseScaleY = p.map(noiseValue, 0, 1, -noiseIntensityY, noiseIntensityY) + distortionFactorY;
                  
          buffer.curveVertex(x + margin + noiseScaleX, (y + margin) + noiseScaleY);
          xoff += xoffIncrement;
        }
        yoff += yoffIncrement;
        buffer.endShape();
      }
        
  // Clear the main canvas to maintain transparency
  p.clear();

  // p.tint(255, 87, 51, 200);  // Tint and set transparency
  p.tint(255, 255, 255, 215);  // Tint and set opacity

  // Draw the buffer onto the canvas
  p.image(buffer, 0, 0);

  // Fade the buffer slightly to control the length of the trails  
  // aka more opacity = fewer repeats
  buffer.fill(0, 0, 0, 7);
  buffer.noStroke();
  buffer.rect(0, 0, w, h);
  buffer.clear(); // uncomment this to remove all feedback

  // Draw a vertical line at the cursor position that spans the height of the canvas
  // if (p.mouseX >= 0 && p.mouseX <= w && p.mouseY >= 0 && p.mouseY <= h) { // Check if the cursor is within the canvas
  //   p.stroke(200, 200, 200, 255); // Set stroke color  
  //   p.strokeWeight(1.5); // Set stroke weight to 1pt
  //   p.line(p.mouseX, 0, p.mouseX, h); // Draw vertical line
  // }

};     
 
    p.windowResized = () => {
      if (containerDiv) {
        let computedStyle = getComputedStyle(containerDiv);
        let width = parseInt(computedStyle.width, 10);
        let height = parseInt(computedStyle.height, 10);
        p.resizeCanvas(width, height);
      } else {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      }
    };
  });
};
