// main.js
import '/src/css/style.css'; 
import { iso3D } from './iso3D.js';

// Initialize the Three.js background
iso3D();

// now regular site js

let imageColumn = document.getElementById('imageColumn');
let textColumn = document.getElementById('textColumn');
let isScrolling = false;

imageColumn.addEventListener('scroll', function() {
    if (!isScrolling) {
        isScrolling = true;
        let scrollPercentage = this.scrollTop / this.scrollHeight;
        textColumn.scrollTop = scrollPercentage * textColumn.scrollHeight;
        setTimeout(() => { isScrolling = false; }, 100); // delay to prevent continuous loop
    }
});

textColumn.addEventListener('scroll', function() {
    if (!isScrolling) {
        isScrolling = true;
        let scrollPercentage = this.scrollTop / this.scrollHeight;
        imageColumn.scrollTop = scrollPercentage * imageColumn.scrollHeight;
        setTimeout(() => { isScrolling = false; }, 100); // delay to prevent continuous loop
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / totalHeight) * 100;

        const threeContainer = document.getElementById('three-container');

        if (scrollPercentage > 20) {
            // Remove .background class to enable interaction
            threeContainer.classList.remove('background');
        } else {
            // Add .background class back if it's not there
            if (!threeContainer.classList.contains('background')) {
                threeContainer.classList.add('background');
            }
        }
    });
});

document.getElementById('scrollUpButton').addEventListener('click', function() {
    window.scrollBy({
        top: -window.innerHeight, // 100vh upwards
        behavior: 'smooth' // Smooth scroll
    });
});
