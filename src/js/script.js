// Функция для открытия модального окна
function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal_image");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src; // Устанавливаем изображение из галереи
    captionText.innerHTML = img.alt; // Устанавливаем описание из атрибута alt
}

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});