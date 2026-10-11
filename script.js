const images = document.querySelectorAll(".image-box img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;


// Open Lightbox
images.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.style.display = "flex";

    });

});


// Show Current Image
function showImage() {

    lightboxImg.src = images[currentIndex].src;

}


// Next Image
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();

});


// Previous Image
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();

});


// Close Lightbox
closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});


// Close when clicking outside image
lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});


// Filter Images
function filterImages(category) {

    const boxes = document.querySelectorAll(".image-box");

    boxes.forEach(box => {

        if (category === "all" || box.classList.contains(category)) {

            box.style.display = "block";

        } else {

            box.style.display = "none";

        }

    });


}
