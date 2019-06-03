import {getCustomers} from "./restclient";
import {Customer} from "./Customer";
import {clearElement} from "./helpers";

export function loadSearch() {
	loadCustomers();
	document.querySelector("#search-input").addEventListener(
		"input", e => loadCustomers(e.target.value.toLowerCase()), false
	)
}

async function loadCustomers(query = "") {
	clearTable();
	try {
		const result = await getCustomers();

		let customers = [];
		result.forEach(c => customers.push(
			new Customer(
				c.id, c.firstName, c.lastName, c.company, c.email,
				c.callsToServiceLine, c.registrationDate, c.isActive, c.image
			)
		));

		if (query) { // only if query not null, undefined or ""
			customers = customers
				.filter(c =>
					c.firstName.toLowerCase().includes(query)
					|| c.lastName.toLowerCase().includes(query)
					|| c.company.toLowerCase().includes(query)
				);
		}

		addCustomersToTable(customers);
	} catch(e) {
		console.error(e);
	}
}

function clearTable() {
	clearElement("#customer-table")
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

