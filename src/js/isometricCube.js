import p5 from 'p5';

export function isometricCube(containerId) {
    new p5((p) => {
      let containerDiv = document.getElementById(containerId);
      let w, h; // width and height of the canvas
  
      // Cube and grid parameters
      const cubeSize = 300;
      const gridSize = 12; // Grid size for each face
      const pointCloudDensity = 15; // Number of points in each cloud
  
      p.setup = () => {
        let rect = containerDiv.getBoundingClientRect();
        w = rect.width;
        h = rect.height;
        p.createCanvas(w, h, p.WEBGL).parent(containerId); // Switch to WEBGL for 3D rendering
      };
  
      p.draw = () => {
        p.background(0);
        p.orbitControl(); // Allows mouse interaction for 3D rotation
  
        // Draw the cube
        drawOpenCube(cubeSize, gridSize);
  
        // Draw point clouds in different colors
        drawPointCloud(0, 0, 0, pointCloudDensity, 'cyan');
        drawPointCloud(cubeSize / 4, cubeSize / 4, cubeSize / 4, pointCloudDensity, 'magenta');
        drawPointCloud(-cubeSize / 4, -cubeSize / 4, -cubeSize / 4, pointCloudDensity, 'yellow');
      };
  
      // Function to draw an open-faced cube with grids
      function drawOpenCube(size, grid) {
        p.push();
        p.stroke(255);
        p.noFill();
        let hSize = size / 2;
  
        // Draw each face of the cube, except for the front face
        drawFaceWithGrid(-hSize, -hSize, hSize, hSize, -hSize, hSize, grid); // Left
        drawFaceWithGrid(hSize, -hSize, -hSize, hSize, hSize, -hSize, grid); // Right
        drawFaceWithGrid(-hSize, -hSize, hSize, -hSize, -hSize, -hSize, grid); // Bottom
        drawFaceWithGrid(-hSize, hSize, hSize, -hSize, hSize, hSize, grid); // Top
        drawFaceWithGrid(-hSize, -hSize, -hSize, hSize, -hSize, -hSize, grid); // Back
        p.pop();
      }
  
      // Function to draw a face of the cube with grid
      function drawFaceWithGrid(x1, y1, z1, x2, y2, z2, grid) {
        let step = (x2 - x1) / grid;
        // Draw the face
        drawFace(x1, y1, z1, x2, y2, z2);
  
        // Draw the grid
        for (let i = 0; i <= grid; i++) {
          // Horizontal lines
          p.line(x1, y1 + step * i, z1, x2, y1 + step * i, z2);
          // Vertical lines
          p.line(x1 + step * i, y1, z1, x1 + step * i, y2, z2);
        }
      }
  
      // Function to draw a face of the cube
      function drawFace(x1, y1, z1, x2, y2, z2) {
        p.beginShape();
        p.vertex(x1, y1, z1);
        p.vertex(x2, y1, z1);
        p.vertex(x2, y2, z2);
        p.vertex(x1, y2, z2);
        p.endShape(p.CLOSE);
      }
  
      // Function to draw a point cloud
      function drawPointCloud(x, y, z, density, color) {
        p.push();
        p.translate(x, y, z);
        if (color === 'cyan') {
          p.stroke(0, 255, 255);
        } else if (color === 'magenta') {
          p.stroke(255, 0, 255);
        } else if (color === 'yellow') {
          p.stroke(255, 255, 0);
        }
        p.strokeWeight(4);
        for (let i = 0; i < density; i++) {
          let px = p.random(-cubeSize / 4, cubeSize / 4);
          let py = p.random(-cubeSize / 4, cubeSize / 4);
          let pz = p.random(-cubeSize / 4, cubeSize / 4);
          p.point(px, py, pz);
        }
        p.pop();
      }
  
      p.windowResized = () => {
        let computedStyle = getComputedStyle(containerDiv);
        let width = parseInt(computedStyle.width, 10);
        let height = parseInt(computedStyle.height, 10);
        p.resizeCanvas(width, height);
      };
    });
  };
  