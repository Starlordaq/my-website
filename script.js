document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleGallery");
    const galleryDetails = document.getElementById("galleryDetails");
    let isGalleryVisible = false; 

    toggleButton.addEventListener("click", function () {
        if (isGalleryVisible) {
            galleryDetails.style.display = "none";
            toggleButton.textContent = "Show Image Gallery";
        } else {
            galleryDetails.style.display = "block";
            toggleButton.textContent = "Hide Image Gallery";
        }
        isGalleryVisible = !isGalleryVisible;
    });
});

let currentImage = 0;
const gallery = document.querySelector('.gallery-images');

