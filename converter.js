'use strict';
let selected;

const elements = document.querySelectorAll('.selection-element');
const label = document.getElementById('inputLabel');

elements.forEach(elementManipulator);


function elementManipulator(item) {
    item.addEventListener('click', () => {
        if(selected) {
            selected.classList.remove('selection-element-active');
        }
        selected = item;
        selected.classList.add('selection-element-active');
        console.log(selected);

        switch(selected) {
            case elements[0]:
                label.textContent = 'Wpisz liczbę w systemie dwójkowym';
            break;
            case elements[1]:
                label.textContent = 'Wpisz liczbę w systemie ósemkowym';
            break;
            case elements[2]:
                label.textContent = 'Wpisz liczbę w systemie dziesiętnym';
            break;
            case elements[3]:
                label.textContent = 'Wpisz liczbę w systemie szesnastkowym';
            break;
            default:
                label.textContent = 'Wybierz system';    
        }
    });
}

