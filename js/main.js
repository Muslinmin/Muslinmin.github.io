const images = [
    './images/y axis printer.jpeg',
    './images/y axis printer.jpeg',
    './images/push_button.jpeg' // Add more image paths as needed
];

let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    document.getElementById('gallery-image').src = images[currentIndex];
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    document.getElementById('gallery-image').src = images[currentIndex];
});

const embeddedImages = [
    './images/x and z axis circuit diagram.jpeg',
    './images/y axis circuit diagram.jpeg',
    './images/pixy camera and stm32.jpeg'
];

let embeddedCurrentIndex = 0;

document.querySelector('.embedded-prev').addEventListener('click', () => {
    embeddedCurrentIndex = (embeddedCurrentIndex === 0) ? embeddedImages.length - 1 : embeddedCurrentIndex - 1;
    document.getElementById('embedded-gallery-image').src = embeddedImages[embeddedCurrentIndex];
});

document.querySelector('.embedded-next').addEventListener('click', () => {
    embeddedCurrentIndex = (embeddedCurrentIndex === embeddedImages.length - 1) ? 0 : embeddedCurrentIndex + 1;
    document.getElementById('embedded-gallery-image').src = embeddedImages[embeddedCurrentIndex];
});

// Modal functionality
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const galleryImg = document.getElementById("embedded-gallery-image");
const closeModal = document.getElementsByClassName("close")[0];

galleryImg.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const algorithmImages = [
    './images/createRows.jpg',
    './images/createRows2.jpg',
    './images/pushRow.jpg' // Add more image paths as needed
];

let algorithmCurrentIndex = 0;

document.querySelector('.algorithm-prev').addEventListener('click', () => {
    algorithmCurrentIndex = (algorithmCurrentIndex === 0) ? algorithmImages.length - 1 : algorithmCurrentIndex - 1;
    document.getElementById('algorithm-gallery-image').src = algorithmImages[algorithmCurrentIndex];
});

document.querySelector('.algorithm-next').addEventListener('click', () => {
    algorithmCurrentIndex = (algorithmCurrentIndex === algorithmImages.length - 1) ? 0 : algorithmCurrentIndex + 1;
    document.getElementById('algorithm-gallery-image').src = algorithmImages[algorithmCurrentIndex];
});

// Modal functionality
const algorithmModal = document.getElementById("algorithm-image-modal");
const algorithmModalImg = document.getElementById("algorithm-modal-image");
const algorithmGalleryImg = document.getElementById("algorithm-gallery-image");
const algorithmCloseModal = document.getElementsByClassName("algorithm-close")[0];

algorithmGalleryImg.onclick = function() {
    algorithmModal.style.display = "block";
    algorithmModalImg.src = this.src;
}

algorithmCloseModal.onclick = function() {
    algorithmModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == algorithmModal) {
        algorithmModal.style.display = "none";
    }
}

