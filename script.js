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