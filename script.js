document.addEventListener('DOMContentLoaded', () => {
    const gallerySlider = document.querySelector('.gallery-slider');
    const slides = document.querySelectorAll('.gallery-slide');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    const dots = document.querySelectorAll('.dot');
     // Начинаем с первого слайда
    const slidesToShow = window.innerWidth > 1000 ? 3 : 1; // Показываем 3 на десктопе и 1 на мобильных
    const totalSlides = slides.length;
    const mobile = window.innerWidth > 1000 ? false : true;
   

    let currentIndex = 0;


    function updateSlider() {

        const offset = -currentIndex * (100 / slidesToShow);

        gallerySlider.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active')); // Снимаем активность у всех точек
        if (mobile == true) { 
        dots[currentIndex].classList.add('active');
        } else {
            dots[currentIndex+1].classList.add('active');
        }
    }
    

    // Обработчик для стрелки "вправо"
    rightArrow.addEventListener('click', () => {
        if (mobile == true) { 
            if (currentIndex < 7 ) {
                currentIndex++;
                updateSlider();
            }
        } else {
            if (currentIndex < 6 ) {
                currentIndex++;
                updateSlider();
            }
        }
    });

    // Обработчик для стрелки "влево"
    leftArrow.addEventListener('click', () => {
    if (mobile == true) { 
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }
    else {
        if (currentIndex > -1) {
            currentIndex--;
            updateSlider();
        }
    }
    });

    // Обработчик для клика по точке, переход к слайду
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index ; // Пересчитываем currentIndex в зависимости от точки
            updateSlider();
        });
    });

    updateSlider()
});
