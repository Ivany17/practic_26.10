'use strict'

const imagesDB = ['https://cdn.motor1.com/images/mgl/RWK9e/s3/2020-vw-arteon-r-line-edition.jpg',
'https://dekoriko.ru/images/article/croppedtop/290-435/2017/11/oformlenie-uzkoj-prihozhej.jpg',
'https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg'];

const slider = new Slider(imagesDB);

const image = document.querySelector('.slide>img');
const [prevBtn, nextBtn] = document.querySelectorAll('.slider-container>button');

function updateView(){
    image.setAttribute('src', slider.currentSlide);
}
updateView();

nextBtn.addEventListener('click', ()=>{
    slider.currentIndex = slider.next();
    updateView();
});

prevBtn.addEventListener('click', ()=>{
    slider.currentIndex = slider.prev();
    updateView();
});
