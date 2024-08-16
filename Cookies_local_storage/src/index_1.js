function handelSubmit(event) {
    event.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    setCookies(firstname, email);
}

function setCookies(name, email) {
    var d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000)); // 10 days in milliseconds
    let expires = "expires=" + d.toUTCString();

    document.cookie = "firstname=" + encodeURIComponent(name) + "; path=/; " + expires;
    document.cookie = "email=" + encodeURIComponent(email) + "; path=/; " + expires;

    console.log("Cookies set:", document.cookie);
}

document.getElementById("login-form").addEventListener('submit', handelSubmit);
document.getElementById("showCookie").addEventListener('click', handleShow);

function handleShow() {
    document.getElementById("cookieContainer").innerHTML = document.cookie;
    console.log("handleShow is clicked:", document.cookie);
}
