import '/src/css/style.css'; 
import { iso3D } from './iso3D.js';
import { terrain } from './terrain.js';

// init external js
iso3D();
document.addEventListener('DOMContentLoaded', (event) => {
    terrain();
});

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

document.getElementById('scrollUpButton').addEventListener('click', function() {
    const button = this;
    const textContentDiv = document.getElementById('text-content'); // Select the element with the ID 'text-content'
    const threeContainer = document.getElementById('app'); // Select the 'app' element

    // Toggle visibility, button text, and background class
    if (button.textContent === 'show text') {
        // Show 'text-content' div and change button text
        textContentDiv.style.display = 'flex'; // Reset to flex to maintain the flexbox layout

        // Reset display for children, if they were explicitly set to none earlier
        Array.from(textContentDiv.children).forEach(child => {
            child.style.display = ''; // Reset to default, letting flexbox take over
        });

        button.textContent = 'hide text';

        // Add the 'background' class back to the 'app'
        if (!threeContainer.classList.contains('background')) {
            threeContainer.classList.add('background');
        }
    } else {
        // Hide 'text-content' div and change button text
        textContentDiv.style.display = 'none'; // Hide the entire flex container

        button.textContent = 'show text';

        // Remove the 'background' class from the 'app'
        threeContainer.classList.remove('background');
    }
});
