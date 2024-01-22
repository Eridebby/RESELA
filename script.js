let circles = document.querySelectorAll('#circle');

function changeColors() {
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = getRandomColor();
    }
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

setInterval(changeColors, 1000);




function logInputInfo() {
  
    let inputName = document.getElementById('inputName').value;
    let inputEmail = document.getElementById('inputEmail').value;

    console.log('Name:', inputName);
    console.log('Email:', inputEmail);
}





const rightBtn = document.querySelector('.right')
const allPics = document.querySelectorAll('.pic')
const leftBtn = document.querySelector('.left')
const auto  = false
const  timer = 3000
let autoSlide

rightBtn.addEventListener('click', () => {
    nextSlide() 
    clearInterval (autoSlide)
    if(auto){
        autoSlide = setInterval(nextSlide, timer)
    }

})
leftBtn.addEventListener('click',  () => {
    previousSlide()
    clearInterval (autoSlide)
    if(auto){
        autoSlide = setInterval(previousSlide, timer)
    }

})

function nextSlide(){
    const current = document.querySelector('.current')

    current.classList.remove('current')
  

    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current')

    }
    else {
        allPics[0].classList.add('current')
    }
  
} 


 
function previousSlide(){
    const current = document.querySelector('.current')

    current.classList.remove('current')   
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current')
    }
    else {
        allPics[3].classList.add('current')
    }

}


if(auto){
    autoSlide = setInterval(nextSlide, timer)
}
if(auto){
    autoSlide = setInterval(previousSlide, timer)
}