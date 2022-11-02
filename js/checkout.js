
// Exercise 6
function validate() {
	var error = 1;
	var errora = 1;
	var errorb = 1;
	var errorc = 1;
	var errord = 1;
	var errore = 1;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");
	
	// Validate fields entered by the user: name, phone, password, and email
	var valName = /^[A-Za-z]{3,}$/;//Only letters from 3 char 
	var valNum = /^[0-9]{3,9}$/;//Only num from 3 to 9 numbers
	var valPass = /^[a-zA-Z0-9]{4,8}$/;//Alfanumeric from 4 to 8 char
	var valMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email validation format

	//Results of validation True/False
	var nameResult = valName.test(fName.value);
	console.log(nameResult);
	var lastNResult = valName.test(fLastN.value);
	var emailResult = valMail.test(fEmail.value);
	var phoneResult = valNum.test(fPhone.value);
	var passResult = valPass.test(fPassword.value);
	var addResult = valName.test(fAddress.value);

	if(!nameResult || fName.value == " "){
		fName.className += " is-invalid";
		error++;
	}
	if(!lastNResult || fLastN.value == " " ){
		fLastN.className += " is-invalid";
		errora++;
	}
	if(!emailResult || fEmail.value == " "){
		fEmail.className += " is-invalid";
		errorb++;
	}
	if(!phoneResult || fPhone.value == " "){
		fPhone.className += " is-invalid";
		errorc++;
	}
	if(!passResult || fPassword == " "){
		fPassword.className += " is-invalid";
		errord++;
	}

	if(!addResult || fAddress == " " ){
		fAddress.className += " is-invalid";
		errore++;
	}

//If correct
	
	if(nameResult){
		while(error !=0){
			fName.classList.remove("is-invalid");
			error--;}
		fName.className += " is-valid";
	}
	if(lastNResult ){
		while(errora !=0){
			fLastN.classList.remove("is-invalid");
			errora--;}
		fLastN.className += " is-valid";
	}
	if(emailResult){
		while(errorb !=0){
			fEmail.classList.remove("is-invalid");
			errorb--;}
		fEmail.className += " is-valid";
	}
	if(phoneResult){
		while(errorc !=0){
			fPhone.classList.remove("is-invalid");
			errorc--;}
		fPhone.className += " is-valid";
	}
	if(passResult){
		while(errord !=0){
			fPassword.classList.remove("is-invalid");
			errord--;}
		fPassword.className += " is-valid";
	}

	if(addResult){
		while(errore !=0){
			fAddress.classList.remove("is-invalid");
			errore--;}
		fAddress.className += " is-valid";
	}
//Last alert
	 if (nameResult && lastNResult && emailResult && phoneResult && passResult && addResult ) {
		alert("Cambios Guardados Exitosamente!");
	}
}