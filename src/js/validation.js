import * as formHelper from "./formHelpers";
import * as restClient from "./restclient";
import {validators} from "./validators";

export default function setEventListener() {
	document.querySelector("#submit").addEventListener("click", buttonClicked, false);
	// event loop is broken by previous statement, so link action won't execute
}

const errors = document.querySelector("#errors");

function buttonClicked() {
	formHelper.hideAlert();
	formHelper.hideConfirm();

	let inputData = {};

	Object.keys(validators).forEach(k => {
		let value;
		let element = document.querySelector(`#${k}`); // get corresponding element
		if (k === "image") {
			element = document.querySelector("#imgCustomer");
			value = element.src;
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

	if (errors.childElementCount === 0) { // only post if there are no errors
		restClient
			.postCustomer(inputData)
			.then(responseData => {
				formHelper.showConfirm();
			})
			.catch(e => {
				formHelper.addError(e.message);
			})
	}

}
