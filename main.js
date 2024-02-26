const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true ;
const IntervalTime = 1000;
let setInterval;

const nextSlide = () =>{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling) {
current.nextElementSibling.classList.add('current');
    } else{
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () =>{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling) {
current.previousElementSibling.classList.add('current');
    } else{
        slides[slides.length -1].classList.add('current');
    }
    setTimeout(() => current.current.remove('current'));
}

next.addEventListener('click', e => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, IntervalTime);
    }
} );

prev.addEventListener('click', e => {
    prevSlide();
    
} );
if(auto){
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, IntervalTime);
};

if(auto) {
    slideInterval = setInterval(nextSlide, IntervalTime);
}