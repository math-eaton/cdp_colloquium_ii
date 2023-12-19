import p5 from 'p5';

export function sonicParameters(containerId) {
        let wordsA = ["location", "distance", "orientation", "force", "duration", "size", "amplitude", "length", "mass", "color"];
        let wordsB = ["pitch", "brightness", "stereo panning", "tempo", "timbre", "decay", "articulation", "harmonic series", "instrumentation", "octave"];
        let connections = [];
    
        new p5((p) => {
            p.setup = () => {
                let containerDiv = document.getElementById(containerId);
                p.createCanvas(containerDiv.clientWidth, containerDiv.clientHeight);
                p.textAlign(p.CENTER, p.CENTER);
                p.textSize(16);
                updateConnections();
            };
    
            p.draw = () => {
                p.clear();
                drawWords();
                drawLines();
            };
    
            function drawWords() {
                for (let i = 0; i < wordsA.length; i++) {
                    p.text(wordsA[i], p.width * 0.2, i * 50 + 25);
                    p.text(wordsB[i], p.width * 0.8, i * 50 + 25);
                }
            }
    
            function drawLines() {
                p.stroke(0);
                for (const conn of connections) {
                    p.line(conn.x1, conn.y1, conn.x2, conn.y2);
                }
            }
    
            function updateConnections() {
                connections = [];
                let shuffledB = p.shuffle(wordsB.slice());
                for (let i = 0; i < wordsA.length; i++) {
                    // Calculate the start and end points, cropping 2% from each end
                    let startX = p.width * 0.2 + (p.width * 0.05); // Start 2% inward from the left edge of column A
                    let endX = p.width * 0.8 - (p.width * 0.05); // End 2% inward from the right edge of column B
                    let startY = i * 50 + 25;
                    let endY = shuffledB.indexOf(wordsB[i]) * 50 + 25;
            
                    connections.push({
                        x1: startX,
                        y1: startY,
                        x2: endX,
                        y2: endY
                    });
                }
            }
                
            // Update connections every 3 seconds
            setInterval(updateConnections, 2000);
        }, containerId);
    }
    