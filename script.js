document.addEventListener("DOMContentLoaded", function () {
    // JavaScript for toggling contact details
    const toggleButton = document.getElementById("toggleContact");
    const contactDetails = document.getElementById("contactDetails");
    let isContactVisible = false;

    toggleButton.addEventListener("click", function () {
        if (isContactVisible) {
            contactDetails.style.display = "none";
            toggleButton.textContent = "Show";
        } else {
            contactDetails.style.display = "block";
            toggleButton.textContent = "Hide";
        }
        isContactVisible = !isContactVisible;
    });
});
