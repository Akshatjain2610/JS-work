const generatedPasswordBtn = document.getElementById('generated-password-btn');
const password = document.getElementById('password');
const passwordLenght = document.getElementById('password-length');
const uppercaseLatters = document.getElementById('uppercaseLatters');
const lowercaseLatters = document.getElementById('lowercaseLatters');
const numbers = document.getElementById('numbers');
const specialCharacters = document.getElementById('specialCharacters');
const cpoyBtn = document.getElementById('copy');

var generatedPassword = '';
var str = '';
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numeric = "0123456789";
const punctuation = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

generatedPasswordBtn.addEventListener("click",function(){
	
	allCheck();

});

cpoyBtn.addEventListener("click",function(){
	if(!password.value == ''){
		password.select();
		navigator.clipboard.writeText(password.value);
		alert("Password copied successfully");
	}else{
	alert("Clcik on generate password to generate password");
	}
});

function allCheck(){
	if(uppercaseLatters.checked == true && lowercaseLatters.checked == true && numbers.checked == true && specialCharacters.checked == true){
		generatedPassword = '';
		str = uppercase+lowercase+numeric+punctuation;
		generatePassword(str);
	}
	else{
		threeCheck();
	}
}

function threeCheck(){
	if(uppercaseLatters.checked == true && lowercaseLatters.checked == true && numbers.checked == true && specialCharacters.checked == false){
		generatedPassword = '';
		str = uppercase+lowercase+numeric;
		generatePassword(str);
	}
	else if(uppercaseLatters.checked == true && lowercaseLatters.checked == true && numbers.checked == false && specialCharacters.checked == true){
		generatedPassword = '';
		str = uppercase+lowercase+punctuation;
		generatePassword(str);
	}
	else if(uppercaseLatters.checked == true && lowercaseLatters.checked == false && numbers.checked == true && specialCharacters.checked == true){
		generatedPassword = '';
		str = uppercase+numeric+punctuation;
		generatePassword(str);
	}
	else if(uppercaseLatters.checked == false && lowercaseLatters.checked == true && numbers.checked == true && specialCharacters.checked == true){
		generatedPassword = '';
		str = lowercase+numeric+punctuation;
		generatePassword(str);
	}
	else{
		twoCheck();
	}

}

function twoCheck(){
	if(uppercaseLatters.checked == true && lowercaseLatters.checked == true && numbers.checked == false && specialCharacters.checked == false){
		generatedPassword = '';
		str = uppercase+lowercase;
		generatePassword(str);
	}
	else if(uppercaseLatters.checked == true && lowercaseLatters.checked == false && numbers.checked == true && specialCharacters.checked == false){
		str = uppercase+numeric;
		generatePassword(str);
	}
	else if(uppercaseLatters.checked == true && lowercaseLatters.checked == false && numbers.checked == false && specialCharacters.checked == true){
		generatedPassword = '';
		str = uppercase+punctuation;
		generatePassword(str);
	}
	else if(uppercaseLatters.checked == false && lowercaseLatters.checked == true && numbers.checked == true && specialCharacters.checked == false){
		generatedPassword = '';
		str = lowercase+numeric;
		generatePassword(str);
	}
	else if(uppercaseLatters.checked == false && lowercaseLatters.checked == true && numbers.checked == false && specialCharacters.checked == true){
		generatedPassword = '';
		str = lowercase+punctuation;
		generatePassword(str);
	}
	else if(uppercaseLatters.checked == false && lowercaseLatters.checked == false && numbers.checked == true && specialCharacters.checked == true){
		generatedPassword = '';
		str = numeric+punctuation;
		generatePassword(str);
	}
	else{
		oneCheck();
	}
}

function oneCheck(){
	if(uppercaseLatters.checked == true && lowercaseLatters.checked == false && numbers.checked == false && specialCharacters.checked == false){
		generatedPassword = '';
		str = uppercase;
		generatePassword(str);
	}
	else if(uppercaseLatters.checked == false && lowercaseLatters.checked == true && numbers.checked == false && specialCharacters.checked == false){
		generatedPassword = '';
		str = lowercase;
		generatePassword(str);
	}
	else if(uppercaseLatters.checked == false && lowercaseLatters.checked == false && numbers.checked == true && specialCharacters.checked == false){
		generatedPassword = '';
		str = numeric;
		generatePassword(str);
	}
	else if(uppercaseLatters.checked == false && lowercaseLatters.checked == false && numbers.checked == false && specialCharacters.checked == true){
		generatedPassword = '';
		str = punctuation;
		generatePassword(str);
	}
	else{
		alert("Please check one of the checkbox");
		password.value = '';
	}
}

function generatePassword(str){
	for(var i=0;i<passwordLenght.value;i++){
			var randomNumber = Math.floor(Math.random() * str.length);
			generatedPassword += str.substring(randomNumber,randomNumber+1);
		}
		password.value = generatedPassword;
}

