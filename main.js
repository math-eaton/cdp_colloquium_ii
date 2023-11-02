// Import modules
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import proj4 from 'proj4';
import '/style.css'; 
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';


// Define the custom projection with its PROJ string
const statePlaneProjString = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
proj4.defs("EPSG:32118", statePlaneProjString);

// Use this function to convert lon/lat to State Plane coordinates
function toStatePlane(lon, lat) {
  if (!Number.isFinite(lon) || !Number.isFinite(lat)) {
    throw new Error(`Invalid coordinates: longitude (${lon}), latitude (${lat})`);
  }
  return proj4("EPSG:32118").forward([lon, lat]);
}

let itemsToLoad = 4; // Update this with the number of assets you are loading
let itemsLoaded = 0;
const spinnerCharacters = ['←', '↖', '↑', '↗', '→', '↘', '↓', '↙'];
let currentSpinnerIndex = 0;

// Call this function to update the spinner
function updateSpinner() {
  const progressBar = document.getElementById('progress-bar');
  progressBar.textContent = spinnerCharacters[currentSpinnerIndex];
  currentSpinnerIndex = (currentSpinnerIndex + 1) % spinnerCharacters.length;
}

// Start spinner animation
const spinnerInterval = setInterval(updateSpinner, 100); // Update spinner every 100ms

function updateProgressBar() {
  itemsLoaded++;
  const progress = (itemsLoaded / itemsToLoad) * 100;
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = `${(progress / itemsToLoad) * 33}%`; // Set width to a third of total progress

  if (itemsLoaded === itemsToLoad) {
    clearInterval(spinnerInterval); // Stop the spinner animation
    progressBar.textContent = "Loading complete!"; // Change the text content
    // All items are loaded, hide the progress bar and show the visualization
    const visualizationContainer = document.getElementById('three-container');
    progressBar.style.display = 'none';
    visualizationContainer.style.visibility = 'visible'; // Reveal the visualization
  }
}


// Three.js - Initialize the Scene
let scene, camera, renderer, controls;
let infoVisible = true;



function initThreeJS() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20; // Adjust as necessary
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-container').appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);

    let ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    let directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);
    // Set the background color after initializing the renderer
    renderer.setClearColor(0x000000); // A neutral gray background
    // Call this initially if you want the info box to start visible
    showInfoBox();
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    console.log("animating")
}

// Ensure DOM is loaded before initializing and starting animation
document.addEventListener('DOMContentLoaded', (event) => {
  initThreeJS();
  animate();
});


// Function to hide the information container and show the info button
function hideInfoBox() {
  const infoContainer = document.getElementById('info-container');
  const infoButton = document.getElementById('info-button');
  infoContainer.style.opacity = '0'; // Start the fade out
  infoContainer.style.pointerEvents = 'none'; // Make it non-interactive immediately
  infoButton.style.display = 'block'; // Show the info button
  infoVisible = false;
}

// Function to show the information container and hide the info button
function showInfoBox() {
  const infoContainer = document.getElementById('info-container');
  const infoButton = document.getElementById('info-button');
  infoContainer.style.opacity = '1'; // Start the fade in
  infoContainer.style.visibility = 'visible'; // Make it visible immediately
  infoContainer.style.pointerEvents = 'auto'; // Make it interactive again
  infoButton.style.display = 'none'; // Hide the info button
  infoVisible = true;
}

// Add the transitionend event listener
document.getElementById('info-container').addEventListener('transitionend', function(event) {
  if (event.propertyName === 'opacity' && getComputedStyle(this).opacity == 0) {
    this.style.visibility = 'hidden'; // Hide the container after transition
  }
});

// Call this initially if you want the info box to start visible
showInfoBox();

// Set up event listeners for mousedown and keypress events to hide the info box
document.addEventListener('mousedown', hideInfoBox);
document.addEventListener('keypress', hideInfoBox);

// Event listener for the info button to unhide the info box
document.getElementById('info-button').addEventListener('click', function () {
    showInfoBox();
});


// Define pan speed
const panSpeed = .05;

// Function to handle keyboard events for panning
function onDocumentKeyDown(event) {
  event.preventDefault();

  const rotationSpeed = 0.025; // Speed of rotation
  const vector = new THREE.Vector3(); // Create once and reuse it to avoid garbage collection
  const axis = new THREE.Vector3(1, 0, 0); // X axis for world space rotation

  console.log(`Key pressed: ${event.key}`); // Log which key was pressed


  switch (event.key) {
      // WASD keys for panning
      case 'w':
          camera.position.y += panSpeed;
          controls.target.y += panSpeed;
          break;
      case 's':
          camera.position.y -= panSpeed;
          controls.target.y -= panSpeed;
          break;
      case 'a':
          camera.position.x -= panSpeed;
          controls.target.x -= panSpeed;
          break;
      case 'd':
          camera.position.x += panSpeed;
          controls.target.x += panSpeed;
          break;
        case 'f': // Rotate counter-clockwise
        case 'r': // Rotate clockwise
            const angle = (event.key === 'f' ? 1 : -1) * rotationSpeed;
            const quaternion = new THREE.Quaternion().setFromAxisAngle(axis, angle);

            vector.copy(camera.position).sub(controls.target);
            vector.applyQuaternion(quaternion);
            camera.position.copy(controls.target).add(vector);
            camera.lookAt(controls.target); // Keep the camera looking at the target
            break;
      }
  
      controls.update();
  }
  
  document.addEventListener('keydown', onDocumentKeyDown, false);
  

// function rotateAroundWorldAxis(point, axis, angle) {
//   const vector = camera.position.clone().sub(point);
//   const quaternion = new THREE.Quaternion();
  
//   // Rotate the vector around the specified axis by the angle and then reposition the camera
//   quaternion.setFromAxisAngle(axis, angle);
//   vector.applyQuaternion(quaternion);
//   camera.position.copy(vector.add(point));

//   // After repositioning the camera, we need to ensure it's looking back at the target
//   camera.lookAt(controls.target);
// }



// Function to handle panning
function panCamera(dx, dy) {
  camera.position.x += dx * panSpeed;
  camera.position.y += dy * panSpeed;
  controls.target.x += dx * panSpeed;
  controls.target.y += dy * panSpeed;
  controls.update();
}


// Attach click event listeners to the pan buttons
document.getElementById('pan-up').addEventListener('click', () => panCamera(0, 1));
document.getElementById('pan-down').addEventListener('click', () => panCamera(0, -1));
document.getElementById('pan-left').addEventListener('click', () => panCamera(-1, 0));
document.getElementById('pan-right').addEventListener('click', () => panCamera(1, 0));


// Define a scaling factor for the Z values (elevation)
const zScale = 0.0005; // Change this value to scale the elevation up or down

// Function to get color based on elevation
function getColorForElevation(elevation, minElevation, maxElevation) {
  const gradient = [
    { stop: 0, color: new THREE.Color(0x0000ff) }, // blue at the lowest
    { stop: 0.5, color: new THREE.Color(0x00ff00) }, // green at the middle
    { stop: 1, color: new THREE.Color(0xff0000) }  // red at the highest
  ];

  const t = (elevation - minElevation) / (maxElevation - minElevation);

  let lowerStop = gradient[0], upperStop = gradient[gradient.length - 1];
  for (let i = 0; i < gradient.length - 1; i++) {
    if (t >= gradient[i].stop && t <= gradient[i + 1].stop) {
      lowerStop = gradient[i];
      upperStop = gradient[i + 1];
      break;
    }
  }

  const color = lowerStop.color.clone().lerp(upperStop.color, (t - lowerStop.stop) / (upperStop.stop - lowerStop.stop));
  return color;
}

// Define a variable to store the minimum elevation
// This should be determined from the addContourLines function
let globalMinElevation = Infinity;

// Updated addContourLines function to update globalMinElevation
function addContourLines(geojson) {
  // Determine min and max elevation from the geojson
  const elevations = geojson.features.map(f => f.properties.Contour);
  const minElevation = Math.min(...elevations);
  globalMinElevation = Math.min(globalMinElevation, minElevation); // Update the global minimum elevation
  const maxElevation = Math.max(...elevations);

  geojson.features.forEach((feature, index) => {
    const contour = feature.properties.Contour; // Elevation value
    const coordinates = feature.geometry.coordinates; // Array of [lon, lat] pairs

    const color = getColorForElevation(contour, minElevation, maxElevation);
    let material = new THREE.LineBasicMaterial({ color: color });

    // Function to process a single line
    const processLine = (lineCoords, contourValue) => {
      let vertices = [];
      lineCoords.forEach((pair) => {
        if (!Array.isArray(pair) || pair.length !== 2 || pair.some(c => isNaN(c))) {
          console.error(`Feature ${index} has invalid coordinates`, pair);
          return;
        }
        const [lon, lat] = pair;
        try {
          const [x, y] = toStatePlane(lon, lat);
          const z = contourValue * zScale; // Scale the elevation for visibility
          vertices.push(x, y, z);
        } catch (error) {
          console.error(`Feature ${index} error in toStatePlane:`, error.message);
        }
      });

      if (vertices.length > 0) {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        const line = new THREE.Line(geometry, material);
        scene.add(line);
      }
    };

    // Check geometry type and process accordingly
    if (feature.geometry.type === 'LineString') {
      processLine(coordinates, contour);
    } else if (feature.geometry.type === 'MultiLineString') {
      coordinates.forEach(lineCoords => {
        processLine(lineCoords, contour);
      });
    } else {
      console.error(`Unsupported geometry type: ${feature.geometry.type}`);
    }
  });
}

function addPolygons(geojson, stride = 10) {
  const material = new THREE.MeshBasicMaterial({
    color: 0xFF1493, // Pink color
    transparent: true,
    wireframe: true, // Set wireframe to true for mesh look
    opacity: 0.33, // Increase opacity for visibility
    side: THREE.DoubleSide // Render both sides of the polygon
  });

  for (let i = 0; i < geojson.features.length; i += stride) {
    const feature = geojson.features[i];
    try {
      const shapeCoords = feature.geometry.coordinates[0]; // Assuming no holes in the polygon for simplicity
      const vertices = [];
      let centroid = new THREE.Vector3(0, 0, 0);

      // Convert coordinates to vertices and calculate centroid
      shapeCoords.forEach(coord => {
        const [x, y] = toStatePlane(coord[0], coord[1]);
        const z = globalMinElevation * zScale; // Set Z to the lowest contour elevation
        vertices.push(new THREE.Vector3(x, y, z));
        centroid.add(new THREE.Vector3(x, y, z));
      });

      centroid.divideScalar(shapeCoords.length); // Average to find centroid
      vertices.unshift(centroid); // Add centroid as the first vertex

      const shapeGeometry = new THREE.BufferGeometry();
      const positions = [];

      // The centroid is the first vertex, and it's connected to every other vertex
      for (let j = 1; j <= shapeCoords.length; j++) {
        // Add centroid
        positions.push(centroid.x, centroid.y, centroid.z);

        // Add current vertex
        positions.push(vertices[j % shapeCoords.length].x, vertices[j % shapeCoords.length].y, vertices[j % shapeCoords.length].z);

        // Add next vertex
        positions.push(vertices[(j + 1) % shapeCoords.length].x, vertices[(j + 1) % shapeCoords.length].y, vertices[(j + 1) % shapeCoords.length].z);
      }

      shapeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      shapeGeometry.computeVertexNormals();

      const mesh = new THREE.Mesh(shapeGeometry, material);
      scene.add(mesh);
    } catch (error) {
      console.error(`Error processing feature at index ${i}:`, error);
    }
  }
}


// Function to add points as hollow yellow spheres with reduced resolution
function addYellowPoints(geojson) {
  const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0xFFFF00, // Yellow color
    wireframe: true
  });

  geojson.features.forEach(feature => {
    if (feature.geometry.type === 'Point') {
      const [lon, lat] = feature.geometry.coordinates;
      const [x, y] = toStatePlane(lon, lat);
      const z = feature.properties.Elevation * zScale; // Apply scaling factor to elevation

      // Reduced resolution for a more 'mesh' look
      const sphereGeometry = new THREE.SphereGeometry(0.005, 3, 3); // Reduce widthSegments and heightSegments
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(x, y, z);
      scene.add(sphere);
    }
  });
}

// Function to add wireframe spheres for POINT data from GeoJSON
function addGeoJSONPoints(geojson) {
  // Define the radius for the spheres
  const sphereRadius = 0.005; 

  // Material for the wireframe spheres
  const sphereMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xff0000, // red color
    wireframe: true, // Change to wireframe style
    transparent: true,
    opacity: 0.5
  });

  // Parse the POINT data from the GeoJSON
  geojson.features.forEach(feature => {
    if (feature.geometry.type === 'Point') {
      const [lon, lat] = feature.geometry.coordinates;
      const elevation = feature.properties.Elevation;
      try {
        // Convert the lon/lat to State Plane coordinates
        const [x, y] = toStatePlane(lon, lat);
        const z = elevation * zScale; // Apply the scaling factor to the elevation

        // Create a sphere geometry for the point with the defined radius
        const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 32); // Use the defined radius
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(x, y, z);
        scene.add(sphere);
      } catch (error) {
        console.error(`Error projecting point:`, error.message);
      }
    } else {
      console.error(`Unsupported geometry type for points: ${feature.geometry.type}`);
    }
  });
}



function getBoundingBoxOfGeoJSON(geojson) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  // Function to process each coordinate pair
  const processCoordinates = (coords) => {
    coords.forEach(coord => {
      // If it's a MultiLineString, coord will be an array of coordinate pairs
      if (Array.isArray(coord[0])) {
        processCoordinates(coord); // Recursive call for arrays of coordinates
      } else {
        // Assuming coord is [longitude, latitude]
        const [lon, lat] = coord;

        // Transform the coordinates
        const [x, y] = toStatePlane(lon, lat);

        // Update the min and max values
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
    });
  };

  // Iterate over each feature
  geojson.features.forEach(feature => {
    processCoordinates(feature.geometry.coordinates);
  });

  // Return bounding box with min and max as THREE.Vector3 objects
  return {
    min: new THREE.Vector3(minX, minY, -Infinity),
    max: new THREE.Vector3(maxX, maxY, Infinity)
  };
}


function constrainCamera(controls, boundingBox) {
  controls.addEventListener('change', () => {
    // Clamp the camera position within the bounding box
    camera.position.x = Math.max(boundingBox.min.x, Math.min(boundingBox.max.x, camera.position.x));
    camera.position.y = Math.max(boundingBox.min.y + 0.25, Math.min(boundingBox.max.y, camera.position.y));
    camera.position.z = Math.max(boundingBox.min.z, Math.min(boundingBox.max.z, camera.position.z));
    
    // Clamp the controls target within the bounding box
    controls.target.x = Math.max(boundingBox.min.x, Math.min(boundingBox.max.x, controls.target.x));
    controls.target.y = Math.max(boundingBox.min.y, Math.min(boundingBox.max.y, controls.target.y));
    controls.target.z = Math.max(boundingBox.min.z, Math.min(boundingBox.max.z, controls.target.z));

  });
}


// Function to get the center of the bounding box
// This function is correct but make sure it's called after the lines are added to the scene
function getCenterOfBoundingBox(boundingBox) {
  return new THREE.Vector3(
    (boundingBox.min.x + boundingBox.max.x) / 2,
    (boundingBox.min.y + boundingBox.max.y) / 2,
    0 // Assuming Z is not important for centering in this case
  );
}

// Ensure that you get the size correctly
function getSizeOfBoundingBox(boundingBox) {
  return new THREE.Vector3(
    boundingBox.max.x - boundingBox.min.x,
    boundingBox.max.y - boundingBox.min.y,
    boundingBox.max.z - boundingBox.min.z
  );
}

// Adjust the camera to view the entire extent of the GeoJSON features
// function adjustCameraToBoundingBox(camera, controls, boundingBox) {
//   const center = getCenterOfBoundingBox(boundingBox);
//   const size = getSizeOfBoundingBox(boundingBox);
//   const maxDim = Math.max(size.x, size.y);
//   const fov = camera.fov * (Math.PI / 180);
//   let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)); // Adjust the 2 to frame the scene

//   cameraZ *= 1.1; // Slight adjustment to ensure the features are fully visible
//   camera.position.set(center.x, center.y, cameraZ);
//   controls.target.set(center.x, center.y, 0);
//   controls.update();
// }


// Set material for the contour lines
const lineMaterial = new THREE.LineBasicMaterial({
  color: 0xff0000, // Bright red
  linewidth: 4 // Make sure the lines are thick enough to be visible
});


// Fetching the contour lines GeoJSON and adding to the scene
fetch('data/cont49l010a_Clip_SimplifyLin.geojson')
  .then(response => response.json())
  .then(geojson => {
    addContourLines(geojson); // Existing call to add contour lines
    updateProgressBar();


    // Fetch and add POINT data here after adding contour lines
    fetch('data/Cellular_Tower_HIFLD_NYSclip_20231101.geojson')
      .then(response => response.json())
      .then(pointGeojson => {
        addGeoJSONPoints(pointGeojson); // Call the new function to add points
        console.log("adding points")
        updateProgressBar();
      })
      .catch(error => {
        console.error('Error loading points GeoJSON:', error);
      });

    // Fetch and add the polygon data
    fetch('data/FM_contours_NYS_clip_20231101.geojson')
    .then(response => response.json())
    .then(polygonGeojson => {
      addPolygons(polygonGeojson);
      console.log("Polygons added");
      updateProgressBar();
    })
    .catch(error => {
      console.error('Error loading polygon GeoJSON:', error);
    });

    // Fetch and add the points data
    fetch('data/FM_TransTowers_PairwiseClip_NYS_20231101.geojson')
    .then(response => response.json())
    .then(pointGeojson => {
      addYellowPoints(pointGeojson);
      console.log("Yellow points added");
      updateProgressBar();
    })
    .catch(error => {
      console.error('Error loading points GeoJSON:', error);
    });


    const boundingBox = getBoundingBoxOfGeoJSON(geojson);
    
    // Move the camera and set controls target
    const center = getCenterOfBoundingBox(boundingBox);
    const size = getSizeOfBoundingBox(boundingBox);
    const maxDim = Math.max(size.x, size.y);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
    cameraZ *= 0.7; // adjust Z magic number
    camera.position.set(center.x, center.y, cameraZ);
    controls.target.set(center.x, center.y, 0);

    // Now, add the constraints to the camera and controls
    constrainCamera(controls, boundingBox);

    // Call this after setting the position and target
    controls.update();
  })
  .catch(error => {
    console.error('Error loading GeoJSON:', error);
  });


