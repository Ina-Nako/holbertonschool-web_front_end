function handelSubmit(event) {
    event.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    setCookiesAndShowWelcomeMessage(firstname, email);
}

function setCookiesAndShowWelcomeMessage(name, email) {
    // Set cookies with a 10-day expiry
    Cookies.set('firstname', name, { expires: 10 });
    Cookies.set('email', email, { expires: 10 });

    console.log("Cookies set:", document.cookie);

    // Show the welcome message
    showWelcomeMessageOrForm();
}

function showCookies() {
    const firstname = Cookies.get('firstname');
    const email = Cookies.get('email');

    const cookieContainer = document.getElementById("cookieContainer");
    cookieContainer.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
}

function showForm() {
    const formContainer = document.getElementById('form-container');
    formContainer.style.display = 'block';

    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }
}

function hideForm() {
    const formContainer = document.getElementById('form-container');
    formContainer.style.display = 'none';
}

function deleteCookiesAndShowForm() {
    Cookies.remove('firstname');
    Cookies.remove('email');
    showForm();
}

function showWelcomeMessageOrForm() {
    const firstname = Cookies.get('firstname');

    if (!firstname) {
        showForm();
    } else {
        hideForm();
        const body = document.body;
        const welcomeMessage = document.createElement('h1');
        welcomeMessage.id = 'welcome-message';
        welcomeMessage.innerHTML = `Welcome ${firstname} <a href="#" onclick="deleteCookiesAndShowForm()" style="font-weight: normal; font-style: italic; margin-left: 10px;">(logout)</a>`;
        body.appendChild(welcomeMessage);
    }
}

document.getElementById("login-form").addEventListener('submit', handelSubmit);
document.getElementById("showCookie").addEventListener('click', showCookies);
