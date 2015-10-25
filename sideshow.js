"use strict";

let sites = [
    "http://www.yle.fi",
    "http://www.futurice.com",
    "http://www.alupark.fi"
];

let delay = 5;

function createIframes(sites) {
    return sites.map(s => {
        let iframe = document.createElement("iframe");
        iframe.src = s;
        return iframe;
    });
}

function addIframes(iframes) {
    iframes.forEach(i => {
        i.style.display = "none";
        document.body.appendChild(i);
    });
}

function startCycling(iframes) {
    let currentIndex = -1;
    nextFrame(iframes, currentIndex);
    return setInterval(() => {
        currentIndex = nextFrame(iframes, currentIndex);
    }, delay * 1000);
}

function nextFrame(iframes, currentIndex) {
    let newIndex = (currentIndex + 1) % iframes.length;
    if (iframes[currentIndex]) {
        iframes[currentIndex].style.display = "none";
    }
    iframes[newIndex].style.display = "block";
    return newIndex;
}

let iframes = createIframes(sites);
addIframes(iframes);
startCycling(iframes);
