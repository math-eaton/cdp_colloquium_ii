import '/src/css/style.css'; 
import { iso3D } from './iso3D.js';
import { terrain } from './terrain.js';
import { wavetable } from './wavetable.js'
import { isometricCube } from './isometricCube.js';

window.onload = () => {    
    setTimeout(() => {
    terrain('terrainContainer1');
    wavetable('wavetableContainer1');
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


// fn to scroll both columns together?
// imageColumn.addEventListener('scroll', function() {
//     if (!isScrolling) {
//         isScrolling = true;
//         let scrollPercentage = this.scrollTop / this.scrollHeight;
//         textColumn.scrollTop = scrollPercentage * textColumn.scrollHeight;
//         setTimeout(() => { isScrolling = false; }, 100); // delay to prevent continuous loop
//     }
// });

// textColumn.addEventListener('scroll', function() {
//     if (!isScrolling) {
//         isScrolling = true;
//         let scrollPercentage = this.scrollTop / this.scrollHeight;
//         imageColumn.scrollTop = scrollPercentage * imageColumn.scrollHeight;
//         setTimeout(() => { isScrolling = false; }, 100); // delay to prevent continuous loop
//     }
// });

// document.addEventListener('DOMContentLoaded', (event) => {
//     window.addEventListener('scroll', function() {
//         const scrollPosition = window.scrollY;
//         const totalHeight = document.body.scrollHeight - window.innerHeight;
//         const scrollPercentage = (scrollPosition / totalHeight) * 100;

//         const threeContainer = document.getElementById('three-container');

//         if (scrollPercentage > 80) {
//             // Remove .background class to enable interaction
//             threeContainer.classList.remove('background');
//         } else {
//             // Add .background class back if it's not there
//             if (!threeContainer.classList.contains('background')) {
//                 threeContainer.classList.add('background');
//             }
//         }
//     });

//         // Select the 'app' and 'p5Container' elements
//         const appDiv = document.getElementById('app');
//         const p5ContainerDiv = document.getElementById('p5Container');
    
//         // Add a click event listener to the 'app' div
//         appDiv.addEventListener('click', function() {
//             // Trigger fade-out effect on 'p5Container'
//             console.log("tRIrgg")
//             p5ContainerDiv.style.transition = 'opacity 0.5s ease-out'; // Smooth transition for the fade-out effect
//             p5ContainerDiv.style.opacity = '0'; // Set opacity to 0 to fade out
    
//             // Optional: Remove the div or make it non-interactive after fade-out
//             setTimeout(() => {
//                 p5ContainerDiv.style.display = 'none'; // Hide the div after the fade-out completes
//             }, 500); // The timeout duration should match the transition duration
//         });
// });

document.getElementById('fullscreenButton').addEventListener('click', function() {
    const button = this;
    const textContentDiv = document.getElementById('text-content');
    const threeContainer = document.getElementById('app');
    const resolutionSlider = document.getElementById('resolution-slider');

    if (button.textContent === 'show text') {
        textContentDiv.classList.remove('hidden'); // Show 'text-content' div
        button.textContent = 'fullscreen map';
        threeContainer.classList.add('background'); // Add 'background' class to 'app'
        resolutionSlider.value = '2';
        resolutionSlider.dispatchEvent(new Event('input'));
    } else {
        textContentDiv.classList.add('hidden'); // Hide 'text-content' div
        button.textContent = 'show text';
        threeContainer.classList.remove('background'); // Remove 'background' class from 'app'
        // Update slider and manually trigger 'input' event
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
        // console.log('crosshair - no trail');
        return; // Exit the function, no trail is created
    }

    let trail = document.createElement('div');
    trail.className = 'cursor-trail';

    // Check if the element under the cursor or its parent has class 'pointer'
    if (hasClass(elementUnderCursor, 'pointer')) {
        trail.classList.add('pointer-cursor-trail'); // Add specific trail class
        // console.log("point")
    } else {
        trail.classList.add('default-cursor-trail'); // Default trail class
        // console.log('arrow')
    }

    // Adjust positioning based on cursor size
    trail.style.left = (e.pageX) + 'px'; // Adjust for half the width of the cursor
    trail.style.top = (e.pageY) + 'px'; // Adjust for half the height of the cursor

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500); // Remove trail element after N ms
});
