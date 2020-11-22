'use strict';
let selected;

const elements = document.querySelectorAll('.selection-element');
const label = document.getElementById('inputLabel');
const input = document.getElementById('input');
const systemAlert = document.getElementById('system-alert');
const output1 = document.getElementById('outputBin');
const output2 = document.getElementById('outputOct');
const output3 = document.getElementById('outputDec');
const output4 = document.getElementById('outputHex');

input.disabled = true;
input.classList.add('input-disabled');

input.addEventListener('keyup', checkInputValue);
input.addEventListener('focusout', checkInputValue);

let inputArray, labelText;

elements.forEach(systemSelection);

function systemSelection(item) {
	const outputReset = () => {
		output1.textContent = 'Wpisz liczbę';
		output2.textContent = 'Wpisz liczbę';
		output3.textContent = 'Wpisz liczbę';
		output4.textContent = 'Wpisz liczbę';
		input.value = '';
	}

	item.addEventListener('click', () => {
		if (selected) {
			selected.classList.remove('selection-element-active');
		}

		if (systemAlert) {
			systemAlert.classList.add('system-alert-block-hidden');
			setTimeout(() => {
				systemAlert.remove();
			}, 1000);
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
				outputReset();
				break;
			case elements[1]:
				labelText = 'Wpisz liczbę w systemie ósemkowym';
				label.textContent = labelText;
				outputReset();
				break;
			case elements[2]:
				labelText = 'Wpisz liczbę w systemie dziesiętnym';
				label.textContent = labelText;
				outputReset();
				break;
			case elements[3]:
				labelText = 'Wpisz liczbę w systemie szesnastkowym';
				label.textContent = labelText;
				outputReset();
				break;
			default:
				label.textContent = 'Wybierz system';
		}
	});
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
			output.textContent = inputValue.toUpperCase();
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
			if (!inputValue.match('^[0-9a-fA-F]*$')) {
				addInputError();
			} else {
				removeInputError();
				setDefaultOutput(output4);
			}
			break;
		default:
			removeInputError();
	}
	converter(inputValue);
}

function converter(input) {
	inputArray = [];
	let example = input.split();
	switch (selected) {
		case elements[0]:
			let i;
			for (i = 0; i <= example.length - 1; i++) {
				if (i === 3) {
					console.log("shit");
				} else {
					inputArray.push(example[i]);
				}
			}
			console.log(i);
		break;
	}
}
