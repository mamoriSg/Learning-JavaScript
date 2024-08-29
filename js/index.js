function checkForm() {
    var username = el.username.value;
    var email = el.email.value;
    var pass = el.password.value;
    var gender = el.gender.value;

    var error = '';
    if (username.length < 2)
        error = "Ім'я занадто мале";
    else if (email.length < 2)
        error = "Email занадто малий";
    else if (!email.includes("@"))
        error = "Email не має @";
    else if (pass.length < 2)
        error = "Pass занадто малий";
    else if (gender == null || gender == '')
        error = "Gender error ";

    if (error != "") {
        document.getElementById("error").innerText = error;
        return false;
    }
    
    return false;
}   