'use strict';
let selected;

const elements = document.querySelectorAll('.selection-element');
const label = document.getElementById('inputLabel');
const input = document.getElementById('input');
const output1 = document.getElementById('outputBin');
const output2 = document.getElementById('outputOct');
const output3 = document.getElementById('outputDex');
const output4 = document.getElementById('outputHex');

input.disabled = true;
input.classList.add('input-disabled');

input.addEventListener('keyup', checkInputValue);
input.addEventListener('focusout', checkInputValue);

let inputArray, outputArray, labelText;

elements.forEach(elementManipulator);

function elementManipulator(item) {
	const outputReset = (output1, output2, output3) => {
		output1.textContent = 'Wpisz liczbę';
		output2.textContent = 'Wpisz liczbę';
		output3.textContent = 'Wpisz liczbę';
		input.value = '';
	}

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
				outputReset(output2, output3, output4);
				break;
			case elements[1]:
				labelText = 'Wpisz liczbę w systemie ósemkowym';
				label.textContent = labelText;
				outputReset(output1, output3, output4);
				break;
			case elements[2]:
				labelText = 'Wpisz liczbę w systemie dziesiętnym';
				label.textContent = labelText;
				outputReset(output1, output2, output4);
				break;
			case elements[3]:
				labelText = 'Wpisz liczbę w systemie szesnastkowym';
				label.textContent = labelText;
				outputReset(output1, output2, output3);
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
	const inputValue = input.value.trim();
	const addInputError = () => {
		input.classList.add('input-error');
		label.classList.add('label-error');
		label.innerHTML = 'Wpisz liczbę w <b>prawidłowym formacie!</b>';
	};
	const removeInputError = () => {
		input.classList.remove('input-error');
		label.classList.remove('label-error');
		label.textContent = labelText;
		accepted = true;
	};
	const setDefaultOutput = output => {
		if (!inputValue) {
			output.textContent = 'Wpisz liczbę';
		} else if (accepted) {
			output.textContent = inputValue;
		}
	}

	switch (selected) {
		case elements[0]:
			if (selected === elements[0] && !inputValue.match('^[0-1]*$')) {
				addInputError();
			} else {
				removeInputError();
				setDefaultOutput(output1);
			}
			break;
		case elements[1]:
			if (!inputValue.match('^[0-7]*$')) {
				addInputError();
			} else {
				removeInputError();
				setDefaultOutput(output2);
			}
			break;
		case elements[2]:
			if (!inputValue.match('^[0-9]*$')) {
				addInputError();
			} else {
				removeInputError();
				setDefaultOutput(output3);
			}
			break;
		case elements[3]:
			if (!inputValue.match('^[0-9]*$')) {
				addInputError();
			} else {
				removeInputError();
				setDefaultOutput(output4);
			}
			break;
		default:
			removeInputError();
	}
}
