import * as formHelper from "./formHelpers";
import * as restClient from "./restclient";
import {validators} from "./validators";

export default function setEventListener() {
	document.querySelector("#submit").addEventListener("click", buttonClicked);
	// event loop is broken by previous statement, so link action won't execute
}

const errors = document.querySelector("#errors");

function buttonClicked() {
	formHelper.hideAlert();

	let inputData = {};

	Object.keys(validators).forEach(k => {
		let value;
		let element = document.querySelector(`#${k}`); // get corresponding element
		if (k === "image") {
			element = document.querySelector("#imgCustomer");
			value = element.src;
			console.log(value);
		} else if (k === "isActive") {
			value = element.checked;
		} else {
			value = element.value;
		}

		if (validators[k](value)) {
			inputData[k] = value;
		} else {
			formHelper.addError(`Invalid ${k}`);
		}
	});

	console.log(inputData);

	if (errors.childElementCount === 0) {
		console.log("posting");
		restClient
			.postCustomer(inputData)
			.then(responseData => {
				showConfirm();
			})
			.catch(e => {
				formHelper.addError(e.message);
			})
	}

}

function showConfirm() {
	document.querySelector("#post-confirm").style.display = 'block';
}