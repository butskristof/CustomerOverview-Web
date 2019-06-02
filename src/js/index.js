import * as restClient from "./restclient";
import * as formHelpers from "./formHelpers";

addEventListener("load", loadFirstCustomer, false);

function loadFirstCustomer() {
	console.log("Loading first customer");

	restClient
		.getCustomer(0)
		.then(responseData => {
			console.log(responseData);
			fillCustomerData(responseData);
		})
		.catch(e => {
			formHelpers.addError(e);
		});
}

function fillCustomerData(data) {
	for (const [key, value] of Object.entries(data)) {
		if (key === "image") {
			document.querySelector("#imgCustomer").src = `${restClient.BASE_URL}/${value}`;
		} else {
			const element = document.querySelector(`#${key}`); // get corresponding element
			if (!element) { // skip if there isn't a corresponding field (eg img)
				continue;
			}

			if (key === "isActive") { // isolate checkbox
				element.checked = value;
			} else {
				element.value = value;
			}
		}
	}
}
