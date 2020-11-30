'use strict';
let selected;

const elements = document.querySelectorAll('.selection__element');
const label = document.getElementById('inputLabel');
const input = document.getElementById('input');
const systemAlert = document.getElementById('system-alert');
const output1 = document.getElementById('outputBin');
const output2 = document.getElementById('outputOct');
const output3 = document.getElementById('outputDec');
const output4 = document.getElementById('outputHex');

input.disabled = true;
input.classList.add('input--disabled');

input.addEventListener('keyup', checkInputValue);
input.addEventListener('focusout', checkInputValue);

let labelText;

elements.forEach(systemSelection);

function systemSelection(item) {
	const outputReset = () => {
		output1.textContent = 'Wpisz liczbę';
		output2.textContent = 'Wpisz liczbę';
		output3.textContent = 'Wpisz liczbę';
		output4.textContent = 'Wpisz liczbę';
		input.value = '';
	};

	item.addEventListener('click', () => {
		if (selected) {
			selected.classList.remove('selection__element--active');
		}

		if (systemAlert) {
			systemAlert.classList.add('system-alert--hidden');
			setTimeout(() => {
				systemAlert.remove();
			}, 1000);
		}

		input.placeholder = 'Wpisz liczbę';
		input.disabled = false;
		input.classList.remove('input--disabled');
		selected = item;
		selected.classList.add('selection__element--active');

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
		input.classList.add('input--error');
		label.classList.add('input__label--error');
		label.innerHTML = 'Wpisz liczbę w <b>prawidłowym formacie!</b>';
	};
	const removeInputError = () => {
		input.classList.remove('input--error');
		label.classList.remove('input__label--error');
		label.textContent = labelText;
		accepted = true;
	};
	const basicReset = (arr) => {
		arr.forEach(output => {
			output.textContent = 'Wpisz liczbę';
		});
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
			basicReset([output1, output2, output3, output4]);
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
				setDefaultOutput(convert(inputValue, 'dec'));
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
	const exclude = new RegExp(/[,]/g);
	const excludeZeros = new RegExp(/^0+/g);
	
	const convertHexToBin = input => {
		let localArray = [];
			for(let i = 0; i < input.length; i++) {
				switch(input[i]) {
						case '0':
						localArray.push('0000');
					break;
						case '1':
						localArray.push('0001');
					break;
						case '2':
						localArray.push('0010');
					break;
						case '3':
						localArray.push('0011');
					break;
						case '4':
						localArray.push('0100');
					break;
						case '5':
						localArray.push('0101');
					break;
						case '6':
						localArray.push('0110');
					break;
						case '7':
						localArray.push('0111');
					break;
						case '8':
						localArray.push('1000');
					break;
						case '9':
						localArray.push('1001');
					break;
						case 'A':
						localArray.push('1010');
					break;
						case 'B':
						localArray.push('1011');
					break;
						case 'C':
						localArray.push('1100');
					break;
						case 'D':
						localArray.push('1101');
					break;
						case 'E':
						localArray.push('1110');
					break;
						case 'F':
						localArray.push('1111');
					break;
				}
			}

			localArray = localArray.toString();
			localArray = localArray.replaceAll(exclude, '');
			if(localArray.includes('1')) {
				localArray = localArray.replaceAll(excludeZeros, '');
			} else {
				localArray = '0';
			}
			return localArray;
	};

	const convertToBin = number => {
		const outputArray = [];

		while(number > 1) {
			outputArray.push(number % 2);
			number = Math.floor(number / 2);
		}
		outputArray.push(number);

		return outputArray.reverse().toString().replaceAll(exclude, '');
	};

	const convertToOct = number => {
		const numberLen = String(number);
		const outputArray = [];
		
		for(let i = 0; i <= numberLen.length; i++) {
			if(number >= 8) {
				outputArray.push(Math.ceil(number % 8));
			} else if(number < 8) {
				outputArray.push(number);
			}
		
			number = Math.floor(number / 8);
		}
		if(outputArray[outputArray.length - 1] === 0) outputArray.pop();
		return outputArray.reverse().toString().replaceAll(exclude, '');
	};

	const convertToHex = number => {
		const outputArray = [];
		let currentDivision;

		while(number > 16) {
			currentDivision = Math.floor(number % 16);
			if(currentDivision >= 10) {
				switch(currentDivision) {
					case 10:
						outputArray.push('A');
						break;
					case 11:
						outputArray.push('B');
						break;
					case 12:
						outputArray.push('C');
						break;
					case 13:
						outputArray.push('D');
						break;
					case 14:
						outputArray.push('E');
						break;
					case 15:
						outputArray.push('F');
						break;
				}
			} else if(currentDivision < 10) {
				outputArray.push(currentDivision);
			}

			number = Math.floor(number / 16);
		}
		switch(number) {
			case 10:
			case '10':
				outputArray.push('A');
				break;
			case 11:
			case '11':
				outputArray.push('B');
				break;
			case 12:
			case '12':
				outputArray.push('C');
				break;
			case 13:
			case '13':
				outputArray.push('D');
				break;
			case 14:
			case '14':
				outputArray.push('E');
				break;
			case 15:
			case '15':
				outputArray.push('F');
				break;
			case 16:
			case '16':
				outputArray.push('10')
				break;
			default:
				outputArray.push(number);
		}

		return outputArray.reverse().toString().replaceAll(exclude, '');
	};

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
		return {output1: str, output2: convertToOct(outputNumber), output3: outputNumber, output4: convertToHex(outputNumber)};

	} else if(system === 'oct') {
		const localArray = inputArray.reverse();
		for(let i = 0; i < localArray.length; i++) {
			outputArray.push(Number(localArray[i]) * (8 ** i));
			outputNumber = 0;

			for(let i = 0; i < outputArray.length; i++) {
				outputNumber += outputArray[i];
			}
		}
		
		return {output1: convertToBin(outputNumber), output2: str, output3: outputNumber, output4: convertToHex(outputNumber)};

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
		return {output1: convertHexToBin(str), output2: convertToOct(outputNumber), output3: outputNumber, output4: str}; 
	} else if(system === 'dec') {
		outputNumber = input;
		return {output1: convertToBin(outputNumber), output2: convertToOct(outputNumber), output3: outputNumber, output4: convertToHex(outputNumber)};
	}
}
