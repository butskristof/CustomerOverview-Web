export const validators = {
	id: validateNumber,
	firstName: validateName,
	lastName: validateName,
	company: validateName,
	email: validateEmail,
	callsToServiceLine: validateNumber,
	registrationDate: validateRegistrationDate,
	isActive: validateBool,
	image: validateAddress
};

function validateNumber(toValidate) {
	let nr = parseInt(toValidate);
	return (!isNaN(nr) && nr >= 0);
}

function validateName(toValidate) {
	return toValidate.length >= 2;
}

function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function validateRegistrationDate(toValidate) {
	return true;
}

function validateBool(toValidate) {
	return (typeof toValidate === "boolean");
}

function validateAddress(toValidate) {
	// const re = /\.(png|jpg|jpeg|PNG|JPG|JPEG)$/;
	// return re.test(String(toValidate));
	return true;
}
