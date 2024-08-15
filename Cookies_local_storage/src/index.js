function setCookies() {
    var firstname = document.getElementById('firstname').value;
    var email = document.getElementById('email').value;

    document.cookie = "firstname" + encodeURIComponent(firstname) + "; path=/"
    document.cookie = "email" + encodeURIComponent(email) + "; path=/"
    var d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    let expires = "expires="+ d.toUTCString();
}

function showCookies() {
    var p = document.createElement("p");
    var cookies = document.cookie;
    p.innerHTML = "Cookies: " + cookies;
    document.body.appendChild(p);
}

function getCookie (name) {

}