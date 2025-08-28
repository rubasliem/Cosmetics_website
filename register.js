
function validateName() {
    const userName = document.getElementById("name").value.trim();
    const errorName = document.getElementById("errorName");

    const nameRegex = /^[a-zA-Z]{3,}$/;

    if (!nameRegex.test(userName)) {
        errorName.textContent = "Invalid ❌ Please enter only letters and at least 3 characters.";
        return false;
    } else {
        errorName.textContent = "";
        return true ;
    }
}

function validateEmail(){
    const email = document.getElementById("email").value.trim();
    const errorEmail = document.getElementById("errorEmail")

    const regex =/^[a-zA-Z]{3}[0-9]{3}@gmail\.com$/;

if(!regex.test(email)){
    errorEmail.textContent = "UnValid ❌ please enter 3 char, and 3 num @gmail.com";
    return false;
    }else{
        errorEmail.textContent = ""; 
        return true ;   
}
}

function validatePS(){
    const password = document.getElementById("password").value;
    const errorPs = document.getElementById("errorPs")
    const regex = /^[a-zA-Z]{3}[#_$][0-9]{2}/;

    if(!regex.test(password)){
        errorPs.textContent = "UnValid ❌ Please Enter 3 char, and one sign of [#, _ , $] and 2 numbers";
        return false;
    }else{
        errorPs.textContent = "";
        return true;
    }
}

function validateConfPS(){
    const ConfirmPassword = document.getElementById("ConfirmPassword").value;
    const password = document.getElementById("password").value;
    const errorConfPS = document.getElementById("errorConfPs")
    if(!ConfirmPassword || ConfirmPassword !== password ){
        errorConfPS.textContent = "❌ Password does not match.";
        return false;
    }else{
        errorConfPS.textContent = "";
        return true;
    }
}   

function validateForm(){
    const vName = validateName();
    const vEmail = validateEmail();
    const vPS = validatePS();
    const vConfPS = validateConfPS();
    if(vName && vEmail && vPS && vConfPS){
        alert("✅ All data is valid");
        return true;              
    }else
    return false ;
}



function register() {
    if (validateForm()) {
    
        const userName = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        // Store user data >>> localStorage
        const user = {
            name: userName,
            email: email,
            password: password
        };

        const json = JSON.stringify(user);
        localStorage.setItem(email, json);

        window.location.href = "login.html";
    } else {
        alert(" ❌ >>> Please enter valid data");
    }
}