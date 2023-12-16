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

////////////////////////////////////////////////////////// cursors

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

/////////////////////////////////////////////////////////// animate text containers
function animateTextDivs() {
    const textDivs = document.querySelectorAll('.text');
    
    textDivs.forEach(div => {
      // Calculate the maximum displacement
      const maxDisplacement = 0.1 * div.offsetWidth;
  
      // Random initial velocity
      let vx = (Math.random() - 0.5) * 0.5;
      let vy = (Math.random() - 0.5) * 0.3;
  
      moveDiv(div, vx, vy, maxDisplacement);
    });
  }
  
  function moveDiv(div, vx, vy, maxDisplacement) {
    let dx = 0;
    let dy = 0;
  
    function frame() {
      // Update displacement
      dx += vx;
      dy += vy;
  
      // Get div dimensions and position
      const rect = div.getBoundingClientRect();
      const bodyWidth = document.body.clientWidth;
      const bodyHeight = document.body.clientHeight;
  
      // Calculate 2% margin for both width and height
      const marginWidth = 0.02 * bodyWidth;
      const marginHeight = 0.02 * bodyHeight;
  
      // Check boundaries with margins and reverse direction if necessary
      if (rect.left + dx < marginWidth || rect.right + dx > bodyWidth - marginWidth) {
        vx = -vx;
      }
      if (rect.top + dy < marginHeight || rect.bottom + dy > bodyHeight - marginHeight) {
        vy = -vy;
      }
  
      // Apply the new position
      div.style.transform = `translate(${dx}px, ${dy}px)`;
  
      requestAnimationFrame(frame);
    }
  
    requestAnimationFrame(frame);
  }
  
  // Start the animation
  animateTextDivs();
  

  // add fullscreen button after intro
  document.addEventListener('DOMContentLoaded', function() {
    const introDiv = document.getElementById('intro');
    const fullscreenButton = document.getElementById('fullscreenButton');
  
    window.addEventListener('scroll', function() {
      const introDivHeight = introDiv.offsetHeight;
      const introDivTop = introDiv.offsetTop;
      const scrollPosition = window.pageYOffset;
  
      // Calculate scroll progress through the intro div
      let scrollProgress = (scrollPosition - introDivTop) / introDivHeight;
      
      // Clamp values between 0 and 1
      scrollProgress = Math.min(Math.max(scrollProgress, 0), 1);
  
      // Apply the scroll progress to the button's opacity
      fullscreenButton.style.opacity = scrollProgress;
      fullscreenButton.style.visibility = scrollProgress > 0 ? 'visible' : 'hidden';
    });
  });
  

  // rotate h1 characters a lil
  function animateH1Rotations() {
    const h1Elements = document.querySelectorAll('h1');
  
    h1Elements.forEach(h1 => {
        let newContent = '';
        const text = h1.textContent;
    
        for (let char of text) {
          // Check if the character is not a space
        if (char !== ' ') {
        const initialRotation = Math.random() * 2.5 - 2.5; // random initial rotation
        const translateY = Math.random() * 5 - 10; // random Y-axis translation between -N px and N px
        const animationDuration = Math.random() * 60 + 10; // random duration
        const animationDelay = Math.random() * 5; // random delay
  
        newContent += `<span class="rotate-animate" style="display: inline-block; transform: rotate(${initialRotation}deg) translateY(${translateY}px); animation-duration: ${animationDuration}s; animation-delay: ${animationDelay}s;">${char}</span>`;
      } else {
        // For spaces, just add them without any style or animation
        newContent += char;
      }
    }

    h1.innerHTML = newContent;
  });
}

// Call the function
document.addEventListener('DOMContentLoaded', animateH1Rotations);
