import {getCustomers, BASE_URL} from "./restclient";
import {Customer} from "./Customer";
import {clearElement} from "./helpers";

export function loadHome() {
	loadCustomers();
}

function loadCustomers() {
	clearCards();
	getCustomers()
		.then(result => {
			let customers = [];
			result.forEach(c => customers.push(
				new Customer(
					c.id, c.firstName, c.lastName, c.company, c.email,
					c.callsToServiceLine, c.registrationDate, c.isActive, c.image
				)
			));

			addCustomerCards(customers);
		})
		.catch(e => {
			console.error(e);
		});
}

function clearCards() {
	clearElement("#customer-cards");
}

function addCustomerCards(customers) {
	const container = document.querySelector("#customer-cards");
	customers.forEach(c => addCustomerCard(c, container));
}

function addCustomerCard(customer, container) {
	const card = document.createElement("div");
	card.classList.add("col-lg-3", "col-md-4", "col-sm-6");
	card.innerHTML = `<div class="card img-card my-3">
	<img src="${BASE_URL}/${customer.image}" class="card-img-top img-fluid" alt="">
	<div class="card-body">
		<h5 class="card-title">${customer.firstName} ${customer.lastName}</h5>
	</div>
</div>
	`;
	container.appendChild(card);
}
