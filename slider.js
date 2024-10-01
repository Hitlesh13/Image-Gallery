const images = ["pexels-8moments-1323550.jpg", "pexels-alyssa-1859585.jpg", "pexels-david-besh-884788.jpg", 
                'pexels-eberhardgross-1421903.jpg', 'pexels-jessbaileydesign-749563.jpg', 'pexels-jessbaileydesign-802647.jpg'];
let currentIndex = 0;

let imageElement = document.getElementById("slider-image");

function showImage() {
    imageElement.src = images[currentIndex];
}

document.getElementById("nextBtn").onclick = function() {
    currentIndex = currentIndex + 1; 
    if (currentIndex >= images.length) { 
        currentIndex = 0;
    }
    showImage(); 
};

document.getElementById("prevBtn").onclick = function() {
    currentIndex = currentIndex - 1; 
    if (currentIndex < 0) { 
        currentIndex = images.length - 1;
    }
    showImage(); 
};

setInterval(function() {
    currentIndex = currentIndex + 1;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage();
}, 2000);
