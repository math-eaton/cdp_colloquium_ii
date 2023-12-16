import '/src/css/style.css'; 
import { iso3D } from './iso3D.js';
import { terrain } from './terrain.js';
import { wavetable } from './wavetable.js'
import { isometricCube } from './isometricCube.js';

window.onload = () => {    
    setTimeout(() => {
    terrain('terrainContainer1');
    wavetable('wavetableContainer1');
    wavetable('wavetableContainer2');
    isometricCube('isoCubeContainer1')
}, 500);

}

// init external js
iso3D();
// document.addEventListener('DOMContentLoaded', (event) => {
//     setTimeout(() => {
//         terrain('terrainContainer1');
//         wavetable('wavetableContainer1');
//     }, 500);
// });



// now regular site js

let imageColumn = document.getElementById('imageColumn');
let textColumn = document.getElementById('textColumn');
let isScrolling = false;



document.getElementById('fullscreenButton').addEventListener('click', function() {
    const button = this;
    const textContentDiv = document.getElementById('text-content');
    const threeContainer = document.getElementById('app');
    const resolutionSlider = document.getElementById('resolution-slider');

    if (button.textContent === 'show text') {
        textContentDiv.classList.remove('hidden');
        button.textContent = 'fullscreen map';
        threeContainer.classList.add('background');
        resolutionSlider.value = '2';
        resolutionSlider.dispatchEvent(new Event('input'));
    } else {
        textContentDiv.classList.add('hidden');
        button.textContent = 'show text';
        threeContainer.classList.remove('background'); // Remove 'background' class from 'app'

        // Remove all cursor trails
        removeAllCursorTrails();

        resolutionSlider.value = '6';
        resolutionSlider.dispatchEvent(new Event('input'));
    }
});


document.addEventListener('mousemove', function(e) {
    // Function to check if the element or its parent has the specified class
    function hasClass(element, className) {
        while (element) {
            if (element.classList && element.classList.contains(className)) {
                return true;
            }
            element = element.parentElement;
        }
        return false;
    }

    // Get the element under the cursor
    let elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);

    // Check for the 'crosshair' class, and if found, do nothing (no trail)
    if (hasClass(elementUnderCursor, 'crosshair')) {
        return; // Exit the function, no trail is created
    }

    let trail = document.createElement('div');
    trail.className = 'cursor-trail';

    // Check for the 'text' class
    if (hasClass(elementUnderCursor, 'text')) {
        return; // Exit the function, no trail is created
    } else if (hasClass(elementUnderCursor, 'pointer')) {
        trail.classList.add('pointer-cursor-trail'); // Add specific trail class for pointer
    } else {
        trail.classList.add('default-cursor-trail'); // Default trail class for others
    }

    // Adjust positioning based on cursor size
    trail.style.left = (e.pageX) + 'px'; // Adjust for half the width of the cursor
    trail.style.top = (e.pageY) + 'px'; // Adjust for half the height of the cursor

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 30000); // Remove trail element after N ms
});

// Function to remove all cursor trails
function removeAllCursorTrails() {
    const trails = document.querySelectorAll('.cursor-trail');
    trails.forEach(trail => trail.remove());
}