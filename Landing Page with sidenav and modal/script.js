//  JS for show modal
var modal = document.getElementById("singUpModal");
var signupBtn = document.getElementById("sign-up");
var closeBtn = document.getElementsByClassName("close")[0];
var clicked = false;

signupBtn.onclick = function() {
  modal.style.display = "block";
  document.querySelector('.modal .modal-content').style.animation='fadeInAnimation ease 0.5s';
}

closeBtn.onclick = function() {
  clicked = true;
  modal.style.display = "none";
  document.querySelector('.modal .modal-content').style.animation='fadeOutAnimation ease 0.5s';
}


// JS for Toggle menu

function toggleMenu(){
  const sideNav = document.getElementById('side-nav');
  const container = document.getElementById('container');
  var classArray = [sideNav.classList['value']];
  if(!classArray.includes("hide")){
    sideNav.style.animation = 'sidenavOutAnimation 1s';
    container.style.animation = 'containerCollapseOut 1s';
    sideNav.classList.add("hide");
    container.style.marginLeft = "0";
    container.style.width = "100%";
    document.querySelector('.modal-content').style.marginLeft='32.5%';
    document.querySelectorAll("span")[1].style.fontSize="1rem";
    }
  else{
    sideNav.style.animation = 'sidenavInAnimation 1s';
    container.style.animation = 'containerCollapseIn 1s';
    sideNav.classList.remove("hide")
    container.style.marginLeft = "15%";
    container.style.width = "85%";
    document.querySelector('.modal-content').style.marginLeft='40%';
    document.querySelectorAll("span")[1].style.fontSize="16px";
  }
}


// JS for form validation



const form = document.getElementById("sign-up-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const localStorageUserData = JSON.parse(localStorage.getItem("signedUpUsers"));
let signedUpUsers = localStorage.getItem("signedUpUsers") !== null ? localStorageUserData: [];
var storedEmails = [];

form.addEventListener("submit",function(e){
    e.preventDefault();

    for(var i=0;i<signedUpUsers.length;i++){
      storedEmails.push(signedUpUsers[i]['email']);
    }

    
    if(validateInputs() == 4){
        localStorage.setItem("signedUpUsers",JSON.stringify(signedUpUsers));
        alert("form submitted successfully");
        form.reset();
        name.parentElement.classList.remove("success");
        email.parentElement.classList.remove("success");
        password.parentElement.classList.remove("success");
        confirmPassword.parentElement.classList.remove("success");
    }
});


function setError(element,message){
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector("span");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

function setSuccess(element){
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector("span");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

function checkEmail(email){
    var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegex.test(email);
}

function checkPasswordMatch(password1,password2){
    if (password2===password1) {
        if (password2.length===password1.length) {
            return true;
        }
    }
}

function validateInputs(){
    var nameValue = name.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var confirmPasswordValue = confirmPassword.value.trim();
    var flag = 0;


    if(nameValue === ""){
        setError(name,"Name is required");
        flag = 0;
    }
    else if(nameValue.length < 3){
        setError(name,"Name must be at least 3 characters");
        flag = 0;
    }
    else{
        setSuccess(name);
        // userData.push({'username':usernameValue});
        // localStorage.setItem("username",usernameValue);
        flag +=1;
    }

    if(emailValue === ""){
        setError(email,"Email is required");
        flag = 0;
    }
    else if(!checkEmail(emailValue)){
        setError(email,"Email is not valid");
        flag = 0;
    }
    else if(storedEmails.includes(emailValue)){
      alert("This email is already exist")
      setError(email,"This email is already exist")
    }
    else{
        setSuccess(email);
        // userData.push({'email':emailValue});
        // localStorage.setItem("email",emailValue);
        flag +=1;
    }

    if(passwordValue === ""){
        setError(password,"Password is required");
        flag = 0;
    }
    else if(passwordValue.length < 6){
        setError(password,"Password must be at least 6 characters");
        flag = 0;
    }
    else{
        setSuccess(password);
        // userData.push({'password':passwordValue});
        // localStorage.setItem("password",passwordValue);
        flag +=1;
    }

    if(confirmPasswordValue === ""){
        setError(confirmPassword,"Please confirm your password");
        flag = 0;
    }
    else if(!checkPasswordMatch(confirmPasswordValue,passwordValue)){
        setError(confirmPassword,"Passwords doesn't match");
        flag = 0;
    }
    else{
        setSuccess(confirmPassword);
        flag +=1;
    }
    if(flag == 4){
        signedUpUsers.push({'name':nameValue,'email':emailValue,'password':passwordValue});
    }else{
        userData = [];
    }
    return flag;
}
