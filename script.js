function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    
    modal.style.display = "block";
    modalImage.src = src;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
