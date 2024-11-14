function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal_image");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

function openVideoModal() {
    document.getElementById("videoModal").style.display = "flex";
}

function closeVideoModal() {

    var videoElement = document.querySelector("#videoModal video");
    videoElement.pause();
    videoElement.currentTime = 0;
    document.getElementById("videoModal").style.display = "none";

}


const slides = document.querySelectorAll('.about_slide');
const prev = document.querySelector('.about_slide-prev');
const next = document.querySelector('.about_slide-next');

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    } else {
        slideIndex = n;
    }

    slides.forEach(item => item.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
    plusSlides(-1);
});

next.addEventListener('click', () => {
    plusSlides(1);
});




// Показать кнопку при прокрутке вниз
window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
};

// Плавная прокрутка наверх
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const checkVisibility = () => {
        fadeInElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // To handle elements already in view on page load
});

document.addEventListener('DOMContentLoaded', function () {
    const bounceElements = document.querySelectorAll('.bounce'); // Все элементы с классом .bounce

    const checkVisibility = () => {
        bounceElements.forEach((element) => {
            const rect = element.getBoundingClientRect(); // Получаем координаты элемента
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('show'); // Добавляем класс .show, когда элемент в области видимости
            } else {
                element.classList.remove('show'); // Убираем класс .show, если элемент выходит за пределы экрана
            }
        });
    };

    window.addEventListener('scroll', checkVisibility); // Отслеживаем прокрутку
    checkVisibility();  // Проверяем, что элементы, возможно, уже видимы при загрузке
});
