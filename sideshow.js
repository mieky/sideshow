"use strict";

var defaultConfig = {
    delay: 10,
    refresh: 1800,
    sites: [
        "http://www.yle.fi",
        "http://www.futurice.com",
        "http://www.alupark.fi"
    ]
};

function isGifName(str) {
    return str.substring(str.lastIndexOf(".")) === ".gif";
}

function getGifNameFromParams() {
    var p = (window.location.search.substring(1) || "=").split("=");
    var gifName = p[1];
    if (p[0] === "gif" && isGifName(gifName)) {
        return gifName;
    }
    return null;
}

function mergeConfiguration() {
    var args = [].slice.call(arguments, 0);
    return args.reduce(function(acc, curr) {
        for (var prop in curr) {
            acc[prop] = curr[prop];
        }
        return acc;
    }, {});
}

function parseParameters() {
    var params = window.location.search.substring(1) || "=";
    return params.split("&").reduce(function(acc, curr) {
        var parts = curr.split("=");
        var value = parts[1].split(",").map(function(v) {
            return decodeURIComponent(v);
        });
        acc[parts[0]] = value.length > 1 ? value : value[0];
        return acc;
    }, {});
}

function createIframes(sites) {
    if (typeof sites !== "object") {
        sites = [sites];
    }
    return sites.map(function(url) {
        var iframe = document.createElement("iframe");
        if (isGifName(url)) {
            var h = window.location.href,
                s = window.location.search;
            url = h.substring(0, h.indexOf(s)) + "?gif=" + url;
        }
        iframe.src = url;
        return iframe;
    });
}

function addIframes(iframes) {
    iframes.forEach(function(i) {
        i.style.display = "none";
        document.body.appendChild(i);
    });
}

function startCycling(iframes, delay) {
    var currentIndex = -1;
    nextFrame(iframes, currentIndex);
    return setInterval(function() {
        currentIndex = nextFrame(iframes, currentIndex);
    }, delay * 1000);
}

function nextFrame(iframes, currentIndex) {
    var newIndex = (currentIndex + 1) % iframes.length;
    if (iframes[currentIndex]) {
        iframes[currentIndex].style.display = "none";
    }
    iframes[newIndex].style.display = "block";
    return newIndex;
}

function startGifMode() {
    console.log("GIF mode!");
    var el = document.createElement("div");
    el.innerHTML = '<div class="fullscreen" style="background-image: url(' + gifName + ')"></div>';
    document.body.appendChild(el.firstChild);
}

function startCycleMode() {
    var config = mergeConfiguration(defaultConfig, parseParameters());
    console.log("Cycling sites with configuration:", config);

    var iframes = createIframes(config.sites);
    addIframes(iframes);
    startCycling(iframes, config.delay);

    if (config.refresh > 0) {
        setInterval(function() {
            iframes.forEach(function(i) {
                return i.src = i.src;
            });
        }, config.refresh * 1000);
    }
}

var gifName = getGifNameFromParams();
if (gifName !== null) {
    startGifMode();
} else {
    startCycleMode();
}
