"use strict";

let config = Object.assign({
    delay: 10,
    sites: [
        "http://www.yle.fi",
        "http://www.futurice.com",
        "http://www.alupark.fi"
    ]
}, parseParameters());
console.log("Using configuration:", config);

function parseParameters() {
    let params = window.location.search.substring(1);
    return params.split("&").reduce((acc, curr) => {
        let parts = curr.split("=");
        let value = parts[1].split(",").map(v => decodeURIComponent(v));
        acc[parts[0]] = value.length > 1 ? value : value[0];
        return acc;
    }, {});
}

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

function startCycling(iframes, delay) {
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

let iframes = createIframes(config.sites);
addIframes(iframes);
startCycling(iframes, config.delay);
