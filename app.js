// Define the dot size and spacing
const dotSize = 10; // Size of each dot in pixels
const dotSpacing = 15; // Spacing between dots in pixels

// Generate the dots
const dotGrid = document.querySelector(".dot-grid");
const { width, height } = dotGrid.getBoundingClientRect();
const cols = Math.ceil(width / (dotSize + dotSpacing));
const rows = Math.ceil(height / (dotSize + dotSpacing));

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.innerHTML = "+";
    dot.style.top = `${i * (dotSize + dotSpacing)}px`;
    dot.style.left = `${j * (dotSize + dotSpacing)}px`;
    dotGrid.appendChild(dot);
    }
}

function loadTitle () {

    const center = document.querySelector(".center");
    center.setAttribute('style', 'transform: prespective(1000px) translate(-50%, -50%); transform: skewY(0deg);');

    setTimeout(() => {
        const spans = document.querySelectorAll(".rotate");

        spans.forEach(span => span.setAttribute('style', 'transform: translate(-50%, -50%) skewX(0deg); left: 0; color: #f7fff7;'));
    
        spans.forEach(span => console.log(span.classList))
    }, 2000);

    setTimeout(() => {
        const spans = document.querySelectorAll(".rotate");
        const span1 = document.querySelector(".span1");

        spans[0].addEventListener('mouseover', () => {
            spans[0].setAttribute('style', '    color: #4ecdc4; transform: translate(-50%, -50%) skewX(-60deg); left: -38px; clip-path: polygon(0 45%, 100% 45%, 100% 55%, 0 55%);')
            spans[1].setAttribute('style', 'transform: translate(-50%, -50%) skewY(0deg); left: -76px; clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);')
        })
        spans[1].addEventListener('mouseover', () => {
            spans[0].setAttribute('style', '    color: #4ecdc4; transform: translate(-50%, -50%) skewX(-60deg); left: -38px; clip-path: polygon(0 45%, 100% 45%, 100% 55%, 0 55%);')
            spans[1].setAttribute('style', 'transform: translate(-50%, -50%) skewY(0deg); left: -76px; clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);')
        })
        span1.addEventListener('mouseover', () => {
            spans[0].setAttribute('style', '    color: #4ecdc4; transform: translate(-50%, -50%) skewX(-60deg); left: -38px; clip-path: polygon(0 45%, 100% 45%, 100% 55%, 0 55%);')
            spans[1].setAttribute('style', 'transform: translate(-50%, -50%) skewY(0deg); left: -76px; clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);')
        })
    }, 2500);

    setTimeout(() => {
        const spans = document.querySelectorAll(".rotate");
        const span1 = document.querySelector(".span1");

        spans[0].addEventListener('mouseout', () => {
            spans[0].setAttribute('style', 'transform: translate(-50%, -50%) skewX(0deg); left: 0; color: #f7fff7;')
            spans[1].setAttribute('style', 'transform: translate(-50%, -50%) skewX(0deg); left: 0; color: #f7fff7;')
        })
        spans[1].addEventListener('mouseout', () => {
            spans[1].setAttribute('style', 'transform: translate(-50%, -50%) skewX(0deg); left: 0; color: #f7fff7;')
            spans[0].setAttribute('style', 'transform: translate(-50%, -50%) skewX(0deg); left: 0; color: #f7fff7;')
        })
        span1.addEventListener('mouseout', () => {
            spans[1].setAttribute('style', 'transform: translate(-50%, -50%) skewX(0deg); left: 0; color: #f7fff7;')
            spans[0].setAttribute('style', 'transform: translate(-50%, -50%) skewX(0deg); left: 0; color: #f7fff7;')
        })
    }, 2500);
}

document.addEventListener("DOMContentLoaded", loadTitle);