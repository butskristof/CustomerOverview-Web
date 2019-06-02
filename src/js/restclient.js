export const BASE_URL = "http://localhost:3000";
export const CUST_URL = "customers";

export function getCustomer(id) {
	return fetch(`${BASE_URL}/${CUST_URL}/${id}`)
	.then(response => {
		if (!response.ok) {
			throw Error(`unable to GET customer: ${response.status}: ${response.statusText}`);
		}

		return response.json();
	})
	.catch(e => {
		console.error(e);
		throw Error(e);
	})
}