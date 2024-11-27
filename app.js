document.getElementById("btn").addEventListener("click", function() {
    const email = document.getElementsByClassName("Email").value;
    const password = document.getElementsByClassName("pass").value;
    let isValid = true;

    // Email validation
    if (email.length <= 3 || !email.includes("@") || !email.includes(".")) {
        document.getElementById("email error").textContent = "Invalid email.";
        isValid = false;
    } else {
        document.getElementById("email error").textContent = "";
    }

    // Password validation
    if (password.length <= 8) {
        document.getElementById("password error").textContent = "Password must be more than 8 characters.";
        isValid = false;
    } else {
        document.getElementById("password error").textContent = "";
    }

    if (isValid) {
        if (confirm("Are you sure you want to submit?")) {
            alert("Successful signup!");
        } else {
            // Reset form if cancelled
            document.getElementsByClassName("Email").value = "";
            document.getElementsByClassName("pass").value = "";
        }
    }
});
