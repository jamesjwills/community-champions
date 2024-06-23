// Script for Contact Form Modal
const contactModal = document.querySelector('.contact-form-modal');
const mailIcon = document.querySelector('.mail-icon');
const closeModal = document.querySelector('.contact-form-modal__close');

mailIcon.addEventListener('click', () => {
    contactModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == contactModal) {
        contactModal.style.display = 'none';
    }
});

// Script for Projects Page
const projectsListItems = document.querySelectorAll('.projects__list-item');
const projectsDescription = document.querySelector('.projects__description');

projectsListItems.forEach(item => {
    item.addEventListener('click', () => {
        projectsDescription.textContent = `Description for ${item.textContent}`;
    });
});

// Script for Gallery Page
let currentImageIndex = 0;
const galleryImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
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
}, 2000);

// Initialize Gallery
showImage(currentImageIndex);
