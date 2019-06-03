export const BASE_URL = "http://localhost:3000";
export const CUST_URL = `${BASE_URL}/customers`;

export async function getCustomers() {
	try {
		const response = await fetch(`${CUST_URL}`);
		if (!response.ok) {
			throw Error(`unable to GET customers: ${response.status}: ${response.statusText}`);
		}

		return response.json()
	} catch (e) {
		console.error(e);
		throw Error(e);
	}
}

export async function getCustomer(id) {
	try {
		const response = await fetch(`${CUST_URL}/${id}`);
		if (!response.ok) {
			throw Error(`unable to GET customer: ${response.status}: ${response.statusText}`);
		}

		return response.json()
	} catch (e) {
		console.error(e);
		throw Error(e);
	}
}

export async function postCustomer(customer) {
	try {
		const response = await fetch(`${CUST_URL}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(customer)
		});
		if (!response.ok) {
			throw Error(`unable to POST customer: ${response.status}: ${response.statusText}`);
		}

		return response.json()
	} catch (e) {
		console.error(e);
		throw Error(e);
	}
}