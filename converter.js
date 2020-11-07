'use strict';
let selected;

const elements = document.querySelectorAll('.selection-element');
const label = document.getElementById('inputLabel');
const input = document.getElementById('input');

input.disabled = true;
input.classList.add('input-disabled');
const inputValue = input.value.trim();

elements.forEach(elementManipulator);

function elementManipulator(item) {
    item.addEventListener('click', () => {
        if(selected) {
            selected.classList.remove('selection-element-active');
        }
        input.placeholder = 'Wpisz liczbę';
        input.disabled = false;
        input.classList.remove('input-disabled');
        selected = item;
        selected.classList.add('selection-element-active');

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

function toggleInputFocus() {
    input.classList.toggle('input-focused');
    label.classList.toggle('label-focused');
}

