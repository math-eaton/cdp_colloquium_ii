import p5 from 'p5';

export function wavetable(containerId) {
  new p5((p) => {
    let cols, rows;
    let scl = 50; // scale of each cell
    let w; // width of the wave field
    let h; // height of the wave field
    let margin = 0; // margin around the wave field
    let yoff = 0.0; // offset for y-axis noise
    let containerDiv = document.getElementById(containerId);
    let buffer; // Create a graphics buffer

    // noise control
    let noiseIntensityX = 20; // Adjust this for X noise intensity
    let noiseIntensityY = 100; // Adjust this for Y noise intensity
    
    let xoffIncrement = 0.00004; // Higher = faster horizontal change
    let yoffIncrement = 0.00006;  // vertical change


    p.setup = () => {
      let rect = containerDiv.getBoundingClientRect();
      w = rect.width - 2 * margin; // Adjust width based on container width and margin
      console.log(rect.height)
      console.log(rect.width)
      h = rect.height - 2 * margin; // Adjust height based on container height and margin

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
    
      for (let y = 0; y <= h; y += scl) {
        buffer.noFill();
        buffer.beginShape();
        let xoff = 0.0;
    
        for (let x = 0; x <= w; x += scl) {
          let alphaY = p.map(y, 0, h, 51, 255);
          let midX = w / 2;
          let distanceFromMidX = Math.abs(x - midX);
          let alphaX = p.map(distanceFromMidX, 0, midX, 255, 179);
          let alpha = Math.min(alphaX, alphaY);
    
          buffer.stroke(200, 200, 200, alpha);  // Apply stroke to buffer
    
          // Map noise value to a range based on noise intensity parameters
          let noiseValue = p.noise(x * xoff, yoff);
          let noiseScaleX = p.map(noiseValue, 0, 1, -noiseIntensityX, noiseIntensityX);
          let noiseScaleY = p.map(noiseValue, 0, 1, -noiseIntensityY, noiseIntensityY);
          
          buffer.curveVertex(x + margin + noiseScaleX, (y + margin) + noiseScaleY);
          xoff += xoffIncrement;
        }
        yoff += yoffIncrement;
        buffer.endShape();
      }
        
  // Clear the main canvas to maintain transparency
  p.clear();

  p.tint(150, 150, 150, 255);  // Tint blue and set transparency

  // Draw the buffer onto the canvas
  p.image(buffer, 0, 0);

  // Fade the buffer slightly to control the length of the trails
  buffer.fill(0, 0, 0, 20);
  buffer.noStroke();
  buffer.rect(0, 0, w, h);
  // buffer.clear();
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
