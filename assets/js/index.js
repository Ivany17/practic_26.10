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

const btnSliderHandler = (direction = 'next') => () =>{
    slider.currentIndex = slider[direction === 'next' ? 'nextIndex' : 'prevIndex'];
    updateView();
}

nextBtn.addEventListener('click', btnSliderHandler('next'));
prevBtn.addEventListener('click', btnSliderHandler('prev'));

image.addEventListener('wheel', (e)=>{
    const handler = e.deltaY>0?btnSliderHandler('next'):btnSliderHandler('prev');
    handler();
})



const unique = document.getElementById('unique');

uniqueBtn.addEventListener('click', btnUniqHandler);

function btnUniqHandler(eventObject){
    console.group;
    console.dir(eventObject.currentTarget);
    console.dir(eventObject.target);
    console.groupEnd();
}

const uniqueImg = document.getElementById('unique');

const srcAttr = document.createAttribute();
srcAttr.value = imagesDB[0];

uniqueImg.setAttributeNode(srcAttr);