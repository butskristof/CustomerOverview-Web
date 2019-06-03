import {getCustomers} from "./restclient";
import {Customer} from "./Customer";


export function loadSearch() {
	loadCustomers();
}

function loadCustomers() {
	getCustomers()
		.then(result => {
			let customers = [];
			result.forEach(c => customers.push(
				new Customer(
					c.id, c.firstName, c.lastName, c.company, c.email,
					c.callsToServiceLine, c.registrationDate, c.isActive
				)
			));
			addCustomersToTable(customers);
		})
		.catch(e => {
			console.error(e);
		});
}

function addCustomersToTable(customers) {
	const body = document.querySelector("#customer-table");
	customers.forEach(c => addCustomerToTable(c, body));
}

function addCustomerToTable(customer, body) {
	const row = document.createElement("tr");
	row.innerHTML = `<th scope="row">${customer.id}</th>
<td>${customer.firstName}</td>
<td>${customer.lastName}</td>
<td>${customer.company}</td>
<td>${customer.email}</td>
<td>${customer.callsToServiceLine}</td>
<td>${customer.registrationDate}</td>
<td>${customer.isActive}</td>
		`;
	body.appendChild(row);
}