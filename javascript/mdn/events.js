const c = console.log;
c('Introduction to Events!!');

// Utils
const getRandomNumber = (number) => {
    return Math.floor(Math.random() * (number + 1));
}

// Example #1

{
    const btn = document.querySelector('.ex1 button');

    function changeBox1Color(event) {
        const randomColor = `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)}`;
        event.target.parentElement.style.backgroundColor = randomColor;
    }
    
    btn.onclick = changeBox1Color;
    btn.onfocus = changeBox1Color;
    btn.onblur = changeBox1Color;
    btn.onmouseenter = changeBox1Color;
    btn.onmouseleave = changeBox1Color;

    //En el window  
    //window.onkeypress = changeBox1Color;
    //window.onkeydown = changeBox1Color;
    //window.onkeyup = changeBox1Color;

}
