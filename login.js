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

function validateMobile(){
    const mobile = document.getElementById("mobile").value;
    const errorMobile = document.getElementById("errorMobile")
    const regex = /^01[0-9]{9}$/;

    if(!regex.test(mobile)){
        errorMobile.textContent = "❌ Invalid mobile. Must start with 01 and be 11 digits."
        return false;
    }else{
        errorMobile.textContent = "";
        return true;
    }
}


function validateGender() {
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;
    const errorGender = document.getElementById("errorGender");

    if (!male && !female) {
        errorGender.textContent = "❌ Invalid. Please identify your gender.";
        return false;
    } else {
        errorGender.textContent = "";
        return true;
    }
}
 


function validateForm(){
    const vName = validateName();
    const vEmail = validateEmail();
    const vMobile = validateMobile();
    const vGender = validateGender();
    if(vName && vEmail && vMobile && vGender){
        alert("✅ All data is registered");
        return true;              
    }else
    return false ;
}



function register() {
    if (validateForm()) {
    
        const userName = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value;
        const male = document.getElementById("male").checked;
        const female = document.getElementById("female").checked;

        let gender = "";
        if (male) {
            gender = "male";
        } else if (female) {
            gender = "female";
        }

        // Store user data >>> localStorage
        const user = {
            name: userName,
            email: email,
            mobile: mobile,
            gender: gender
        };

        const json = JSON.stringify(user);
        localStorage.setItem(email, json);
        window.location.href = "nour&dyaa.html";
    } else {
        alert(" ❌ >>> Please enter valid data");
    }
}