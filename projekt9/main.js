const slideList = [{
        img: "img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "img2.jpg",
        text: 'Drugu tekst'
    },
    {
        img: "img3.jpg",
        text: 'Trzeci tekst'
    }]


const image = document.querySelector('img.slider')
const h1 = document.querySelector('h1.slider')
const dots = [...document.querySelectorAll('.dots span')]

// inteface
const time = 2000;
let active = 0;

const changeDots = () =>{
   const activeDot = dots.findIndex(dot => dot.classList.contains('active'))
   dots[activeDot].classList.remove('active')
   dots[active].classList.add('active')
}

const changeSlide = () =>{
    active++
    if(active === slideList.length){
        active = 0
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;

    changeDots()
}

setInterval(changeSlide, time)


// Implementacja
