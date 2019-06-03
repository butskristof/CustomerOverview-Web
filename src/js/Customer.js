export class Customer {
	constructor(
		id,
		firstName,
		lastName,
		company,
		email,
		callsToServiceLine,
		registrationDate,
		isActive
	) {
		this.id = parseInt(id);
		this.firstName = firstName;
		this.lastName = lastName;
		this.company = company;
		this.email = email;
		this.callsToServiceLine = parseInt(callsToServiceLine);
		this.registrationDate = registrationDate;
		this.isActive = isActive;
	}
}