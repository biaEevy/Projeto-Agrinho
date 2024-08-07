// script.js

function openModal(imgSrc, imgTitle, imgCaption) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    modal.style.display = "block";
    modalImg.src = `imagens/${imgSrc}`;
    captionText.innerHTML = `<h3>${imgTitle}</h3><p>${imgCaption}</p>`;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}
