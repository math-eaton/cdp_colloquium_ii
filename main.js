// main.js
import { iso3D } from './threejs/iso3D.js';

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
