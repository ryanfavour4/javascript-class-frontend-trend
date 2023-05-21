console.log('we are live');

const inputColor = document.getElementById('colorInput')
const changeColorButton = document.getElementById('changeColorButton');
let color = 'blue'

changeColorButton.addEventListener("click", function(){
    color = inputColor.value;
    if(inputColor.value === ""){
        color = 'black';
        alert('There is no color used')
    }
    document.body.style.backgroundColor = color;
})