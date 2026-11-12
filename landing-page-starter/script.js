
let getElement = selector => document.querySelector(selector);

let prevBtn = getElement(".prev");
let nextBtn = getElement(".next");
let destinationImage = getElement(".destinationImage");
let destinationName = getElement(".destinationName");

let destinationArr = [
    {
        name: "Beautiful Beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200"
    },
    {
        name: "Mountain Adventure",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200"
    },
    {
        name: "Amazing Landscape",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200"
    },
    {
        name: "Italian Coast",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200"
    }
];

let currentIndex = 0;

function sliderFun() {

    destinationImage.src = destinationArr[currentIndex].image;

    destinationName.textContent = destinationArr[currentIndex].name;

}

sliderFun();

function nextFun() {

    currentIndex++;

    if (currentIndex == destinationArr.length) {
        currentIndex = 0;
    }

    sliderFun();
}

function prevFun() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = destinationArr.length - 1;
    }

    sliderFun();
}

nextBtn.addEventListener("click", nextFun);
prevBtn.addEventListener("click", prevFun);
