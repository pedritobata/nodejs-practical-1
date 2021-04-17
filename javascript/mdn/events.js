const c = console.log;
c('Introduction to Events!!');

// Utils
const getRandomNumber = (number) => {
  return Math.floor(Math.random() * (number + 1));
};

const getRandomColor = () => `rgb(${getRandomNumber(255)}, ${getRandomNumber(
    255
  )}, ${getRandomNumber(255)}`;

// Example #1

{
  const btn = document.querySelector('.ex1 button');

  function changeBox1Color(event) {
    event.target.parentElement.style.backgroundColor = getRandomColor();
  }

  btn.onclick = changeBox1Color;
  //btn.onkeypress = changeBox1Color;  no existe ese evento para elementos html
  /*  btn.onfocus = changeBox1Color;
  btn.onblur = changeBox1Color;
  btn.onmouseenter = changeBox1Color;
  btn.onmouseleave = changeBox1Color; */

  //En el window
  //window.onkeypress = changeBox1Color;
  //window.onkeydown = changeBox1Color;
  //window.onkeyup = changeBox1Color;
}

// Example #2
{
  const btn = document.querySelector('.ex2 button');
  const messageHandler = function () {
    const message = 'Segundo evento lanzado!!';
    const messageEl = document.querySelector('.ex2 > p');
    messageEl.textContent = message;
  };
  const alertHandler = function () {
    alert('Primer evento lanzado!!');
  };
  btn.addEventListener('click', messageHandler);
  btn.addEventListener('click', alertHandler); // El ultimo en ser suscrito se lanza primero
  btn.removeEventListener('click', alertHandler);// acá lo elimino
}

// Example #3
{
    const container = document.querySelector('.ex3');
    for(let i=0; i < 9; i++){
        const brickEl = document.createElement('div');
        brickEl.classList.add('brick');
        container.appendChild(brickEl);
        brickEl.addEventListener('click', function(evt){
            evt.target.style.backgroundColor = getRandomColor();
        })
    }
}
