export function clearElement(id) {
	// faster than innerHTML = ''
	let element = document.querySelector(id);
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}