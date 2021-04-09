const DOM = document.querySelector('.container');
const symbols = ['C', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', ',', '='];
let sym = '';
for (i=0; i<symbols.length; i++) {
    sym += `<div class="btn" data-symbol="${symbols[i]}"></div>`;
}
// DOM.innerHTML += sym;
DOM.insertAdjacentHTML('beforeend', sym);

const buttons = DOM.querySelectorAll('.btn');
    buttons[0].classList.add('color1');
    buttons[1].classList.add('color1');
    buttons[2].classList.add('color1');
        buttons[3].classList.add('color2');
        buttons[7].classList.add('color2');
        buttons[11].classList.add('color2');
        buttons[15].classList.add('color2');
            buttons[4].classList.add('color3');
            buttons[5].classList.add('color3');
            buttons[6].classList.add('color3');
            buttons[8].classList.add('color3');
            buttons[9].classList.add('color3');
            buttons[10].classList.add('color3');
            buttons[12].classList.add('color3');
            buttons[13].classList.add('color3');
            buttons[14].classList.add('color3');
            buttons[16].classList.add('color3', 'grid');
            buttons[17].classList.add('color3');
            buttons[18].classList.add('color3', 'rightBtn');

        

