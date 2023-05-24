var display = document.getElementById("display");

document.getElementById("c").addEventListener("click",function(){
	buttonAnimation("c");
	display.value = '';
});

document.getElementById("Backspace").addEventListener("click",function(){
	buttonAnimation("Backspace");
	display.value = display.value.toString().slice(0,-1);
});

document.getElementById("%").addEventListener("click",function(){
	buttonAnimation("%");
	display.value += '%';
});

document.getElementById("/").addEventListener("click",function(){
	buttonAnimation("/");
	display.value += '/';
});

document.getElementById("7").addEventListener("click",function(){
	buttonAnimation("7");
	display.value += '7';
});

document.getElementById("8").addEventListener("click",function(){
	buttonAnimation("8");
	display.value += '8';
});

document.getElementById("9").addEventListener("click",function(){
	buttonAnimation("9");
	display.value += '9';
});

document.getElementById("*").addEventListener("click",function(){
	buttonAnimation("*");
	display.value += '*';
});

document.getElementById("4").addEventListener("click",function(){
	buttonAnimation("4");
	display.value += '4';
});

document.getElementById("5").addEventListener("click",function(){
	buttonAnimation("5");
	display.value += '5';
});

document.getElementById("6").addEventListener("click",function(){
	buttonAnimation("6");
	display.value += '6';
});

document.getElementById("-").addEventListener("click",function(){
	buttonAnimation("-");
	display.value += '-';
});

document.getElementById("3").addEventListener("click",function(){
	buttonAnimation("3");
	display.value += '3';
});

document.getElementById("2").addEventListener("click",function(){
	buttonAnimation("2");
	display.value += '2';
});

document.getElementById("1").addEventListener("click",function(){
	buttonAnimation("1");
	display.value += '1';
});

document.getElementById("+").addEventListener("click",function(){
	buttonAnimation("+");
	display.value += '+';
});

document.getElementById("0").addEventListener("click",function(){
	buttonAnimation("0");
	display.value += '0';
});

document.getElementById(".").addEventListener("click",function(){
	buttonAnimation(".");
	display.value += '.';
});

document.getElementById("Enter").addEventListener("click",function(){
	buttonAnimation("Enter");
	if(display.value == ''){
		display.value = '';
	}else{
	display.value = eval(display.value);}
});


document.addEventListener("keydown",function(event){
	performAction(event.key);
	buttonAnimation(event.key);
});

function performAction(key){
	switch(key)
	{
		case "9":
			display.value += '9';
			break;

		case "8":
			display.value += '8';
			break;

		case "7":
			display.value += '7';
			break;

		case "6":
			display.value += '6';
			break;

		case "5":
			display.value += '5';
			break;

		case "4":
			display.value += '4';
			break;

		case "3":
			display.value += '3';
			break;

		case "2":
			display.value += '2';
			break;

		case "1":
			display.value += '1';
			break;

		case "0":
			display.value += '0';
			break;

		case "+":
			display.value += '+';
			break;

		case "-":
			display.value += '-';
			break;

		case "*":
			display.value += '*';
			break;

		case "/":
			display.value += '/';
			break;

		case "%":
			display.value += '%';
			break;

		case ".":
			display.value += '.';
			break;

		case "c":
			display.value = '';
			break;

		case "Backspace":
			display.value = display.value.toString().slice(0,-1);
			break;

		case "Enter":
			if(display.value == ''){
				display.value = '';
			}else{
			display.value = eval(display.value);}
			break;

		default:
			console.log(key);
	}
}


function buttonAnimation(currentKey){
	var activeKey = document.getElementById(currentKey);
	activeKey.classList.add("pressed");
	setTimeout(function(){activeKey.classList.remove("pressed")},100);
}