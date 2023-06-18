var password = "123456";

function passwordAuth() {
                                                                    //revisit 
    var passwordEntered = document.getElementById("passwordEntered").value;

    if (password == passwordEntered) {
        window.location.href = "profile.html";
        console.log("Successful sign in: ", passwordEntered)
    } else if (passwordEntered == "") {
        alert("Please enter a password to continue")
        console.log("Please enter a password")
    } else {
        alert("Incorrect password, please try again")
        console.log("Incorrect password: ", passwordEntered)
    } 
}