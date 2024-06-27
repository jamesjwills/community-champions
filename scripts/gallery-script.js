// Script for Gallery Page
let currentImageIndex = 0;
const galleryImages = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg"
];
const galleryImageElement = document.querySelector('.gallery__image');
const nextButton = document.querySelector('.gallery__nav .next');
const prevButton = document.querySelector('.gallery__nav .prev');

function showImage(index) {
    galleryImageElement.src = galleryImages[index];
}

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showImage(currentImageIndex);
});

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentImageIndex);
});

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showImage(currentImageIndex);
}, 5000);

// Initialize Gallery
showImage(currentImageIndex);