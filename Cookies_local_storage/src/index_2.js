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

function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        let cookieName = cookiePair[0].trim();
        
        if (cookieName === name) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return "";
}

function showCookies() {
    const firstname = getCookie('firstname');
    const email = getCookie('email');

    const cookieContainer = document.getElementById("cookieContainer");
    cookieContainer.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
}

document.getElementById("login-form").addEventListener('submit', handelSubmit);
document.getElementById("showCookie").addEventListener('click', showCookies);
