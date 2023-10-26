// JavaScript for the image modal
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const images = document.querySelectorAll(".image-gallery img");
const closeModal = document.querySelector(".close");

images.forEach((image, index) => {
    image.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = image.src;
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
