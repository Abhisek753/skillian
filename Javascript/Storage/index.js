
isLoggedIn=false;


function signup(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Redirecting to login page.");
    window.location.href = "login.html";
}

function login(event) {
    event.preventDefault();
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("Login successful!");
    window.location.href = "movie.html";

    } else {
        alert("Invalid email or password");
    }
}
