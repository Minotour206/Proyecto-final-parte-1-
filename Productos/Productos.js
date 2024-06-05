const imgCar = document.querySelector('#img-car');
const cart = document.querySelector('.cart');

imgCar.addEventListener('click', e => {
    cart.classList.toggle('show-cart');
});

var swiper = new Swiper (".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        depth:500,
        modifer:1,
        slidesShadows: true,
        rotate:0,
        stretch:0
    }
})