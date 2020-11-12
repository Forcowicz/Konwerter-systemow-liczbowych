'use strict';
let selected;

const elements = document.querySelectorAll('.selection-element');
const label = document.getElementById('inputLabel');
const input = document.getElementById('input');
const outputDex = document.getElementById('outputDex');
const outputHex = document.getElementById('outputHex');

input.disabled = true;
input.classList.add('input-disabled');

input.addEventListener('keyup', checkInputValue);
input.addEventListener('focusout', checkInputValue);

let inputArray, outputArray, labelText;

elements.forEach(elementManipulator);

function elementManipulator(item) {
	item.addEventListener('click', () => {
		if (selected) {
			selected.classList.remove('selection-element-active');
		}
		input.placeholder = 'Wpisz liczbę';
		input.disabled = false;
		input.classList.remove('input-disabled');
		selected = item;
		selected.classList.add('selection-element-active');

		switch (selected) {
			case elements[0]:
				labelText = 'Wpisz liczbę w systemie dwójkowym';
				label.textContent = labelText;
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

function checkInputValue() {
    let accepted;
    if(input.value.trim()) {
        if (selected === elements[0] && !input.value.match('^[0-1]*$')) {
            input.classList.add('input-error');
            label.classList.add('label-error');
            label.innerHTML = 'Wpisz liczbę w <b>prawidłowym formacie!</b>';
        } else {
            input.classList.remove('input-error');
            label.classList.remove('label-error');
            label.textContent = labelText;
            accepted = true;
        }
    }

    if (accepted) {
        outputDex.textContent = input.value;
    } else if (!input.value.trim()) {
        outputDex.textContent = 'Wpisz liczbę';
    }
}
