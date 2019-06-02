export function addError(message) {
	let node = document.createElement("p");
	node.innerHTML = message;
	errors.appendChild(node);

	showAlert();
}

export function clearErrors() {
	// faster than innerHTML = ''
	let element = document.querySelector("#errors");
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

export function showAlert() {
	document.querySelector("#alert").style.display = 'block';
}

export function hideAlert() {
	clearErrors();
	document.querySelector("#alert").style.display = 'none';
}
