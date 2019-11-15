function onload() {
    /* var x = document.getElementById("password");
    x.type = "password"; */
}

function validateForm() {

    var email = document.getElementById("email").value;
    /*     var username = document.getElementById("username").value;
        var password = document.getElementById("password").value; */

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email_test = re.test(String(email).toLowerCase());
    if (!email_test) {
        alert("Please enter a valid email address.");
        document.getElementById("email").focus();
        return false;
    }

    /*     re = /^[^0-9][a-z0-9]{7,23}$/;
        var username_test = re.test(String(username));
        if (!username_test) {
            alert("Please enter a valid username.");
            document.getElementById("username").focus();
            return false;
        }

        var password_test = re.test(String(password));
        if (!password_test) {
            alert("Please enter a valid password.");
            document.getElementById("email").focus();
            return false;
        } */

    return true;
}