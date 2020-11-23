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

let labelText;

elements.forEach(systemSelection);

function systemSelection(item) {
	const outputReset = () => {
		output1.textContent = 'Enter a number';
		output2.textContent = 'Enter a number';
		output3.textContent = 'Enter a number';
		output4.textContent = 'Enter a number';
		input.value = '';
	};

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

		input.placeholder = 'Enter a number';
		input.disabled = false;
		input.classList.remove('input-disabled');
		selected = item;
		selected.classList.add('selection-element-active');

		switch (selected) {
			case elements[0]:
				labelText = 'Enter a number in the binary system';
				label.textContent = labelText;
				outputReset();
				break;
			case elements[1]:
				labelText = 'Enter a number in the octal system';
				label.textContent = labelText;
				outputReset();
				break;
			case elements[2]:
				labelText = 'Enter a number in the decimal system';
				label.textContent = labelText;
				outputReset();
				break;
			case elements[3]:
				labelText = 'Enter a number in the hexadecimal system';
				label.textContent = labelText;
				outputReset();
				break;
			default:
				label.textContent = 'Select a system';
		}
	});
}

function checkInputValue() {
	let accepted;
	const inputValue = input.value.trim();
	const addInputError = () => {
		input.classList.add('input-error');
		label.classList.add('label-error');
		label.innerHTML = 'Enter a number in the <b>correct format!</b>';
	};
	const removeInputError = () => {
		input.classList.remove('input-error');
		label.classList.remove('label-error');
		label.textContent = labelText;
		accepted = true;
	};
	const basicReset = () => {
		output1.textContent = 'Enter a number';
		output2.textContent = 'Enter a number';
		output3.textContent = 'Enter a number';
		output4.textContent = 'Enter a number';
	};
	const setDefaultOutput = (outputs) => {
		if (inputValue) {
			if (accepted) {
				output1.textContent = outputs.output1;
				output2.textContent = outputs.output2;
				output3.textContent = outputs.output3;
				output4.textContent = outputs.output4;
			}
		} else {
			basicReset();
		}
	};

	switch (selected) {
		case elements[0]:
			if (selected === elements[0] && !inputValue.match('^[0-1]*$')) {
				addInputError();
			} else {
				removeInputError();
				setDefaultOutput(convert(inputValue, 'bin'));
			}
			break;
		case elements[1]:
			if (inputValue.match('^[0-7]*$')) {
				removeInputError();
				setDefaultOutput(convert(inputValue, 'oct'));
			} else {
				addInputError();
			}
			break;
		case elements[2]:
			if (inputValue.match('^[0-9]*$')) {
				removeInputError();
				setDefaultOutput(output3, convert(inputValue, 'dex'));
			} else {
				addInputError();
			}
			break;
		case elements[3]:
			if (inputValue.match('^[0-9a-fA-F]*$')) {
				removeInputError();
				setDefaultOutput(convert(inputValue, 'hex'));
			} else {
				addInputError();
			}
			break;
		default:
			removeInputError();
	}
}

function convert(input, system) {
	const str = input.toUpperCase();
	let inputArray = str.split("");
	let outputArray = [];
	let outputNumber;

	if(system === 'bin') {
		const localArray = inputArray.reverse();
		for(let i = 0; i <= localArray.length; i++) {
			if(localArray[i] === '1') {
				outputArray.push(2 ** i);
			}
			outputNumber = 0;

			for(let i = 0; i < outputArray.length; i++) {
				outputNumber += outputArray[i];
			}
		}
		return {output1: str, output2: 'Nothing', output3: outputNumber, output4: 'Nothing'};

	} else if(system === 'oct') {
		const localArray = inputArray.reverse();
		for(let i = 0; i < localArray.length; i++) {
			outputArray.push(Number(localArray[i]) * (8 ** i));
			outputNumber = 0;

			for(let i = 0; i < outputArray.length; i++) {
				outputNumber += outputArray[i];
			}
		}
		return {output1: 'Nothing', output2: str, output3: outputNumber, output4: 'Nothing'};

	} else if(system === 'hex') {
		const localArray = inputArray.reverse();
		for(let i = 0; i < localArray.length; i++) {

			if(localArray.includes('A')) {
				localArray[localArray.indexOf('A')] = '10';
			} if(localArray.includes('B')) {
				localArray[localArray.indexOf('B')] = '11';
			} if(localArray.includes('C')) {
				localArray[localArray.indexOf('C')] = '12';
			} if(localArray.includes('D')) {
				localArray[localArray.indexOf('D')] = '13';
			} if(localArray.includes('E')) {
				localArray[localArray.indexOf('E')] = '14';
			} if(localArray.includes('F')) {
				localArray[localArray.indexOf('F')] = '15';
			}
			outputArray.push(Number(localArray[i]) * (16 ** i));

			outputNumber = 0;

			for(let i = 0; i < outputArray.length; i ++) {
				outputNumber += outputArray[i];
			}
		}
		return {output1: 'Nothing', output2: 'Nothing', output3: outputNumber, output4: str} 
	}

	// switch(system) {
	// 	case 'bin':
	// 		convertedArray = str.split("");
	// 		break;
	// 	case 'oct':
	// 		for(let i = 0; i < str.length; i += 3) {
	// 			convertedArray.push(str.substr(i, 3));
	// 		}
	// 		break;
	// 	case 'hex':
	// 		for(let i = 0; i < str.length; i += 4) {
	// 			convertedArray.push(str.substr(i, 4));
	// 		}
	// 		break;
	// 	case 'dex':
	//
	// }
}
