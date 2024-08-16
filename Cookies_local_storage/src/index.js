document.getElementById("login-form").addEventListener('submit', handelSubmit);
function handelSubmit(event) {
    event.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    setCookies(firstname, email);
}


function setCookies(name, email) {
    document.cookie = "name" + "=" + name + ";"
    document.cookie = "email" + "=" + email + ";"
    // console.log("Test cookie set:", document.cookie);
    var d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000)); // 10 days in milliseconds
    let expires = "expires=" + d.toUTCString();

}

document.getElementById("showCookie").addEventListener('click', handleShow);
function handleShow() {
    document.getElementById("cookieContainer").innerHTML = document.cookie;
    console.log("handleShow is clicked:",);
}




// //Ex 0, 1
// function setCookies() {
//     const firstname = document.getElementById('firstname').value;
//     const email = document.getElementById('email').value;

//     console.log("Firstname:", firstname);
//     console.log("Email:", email);

//     var d = new Date();
//     d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000)); // 10 days in milliseconds
//     let expires = "expires=" + d.toUTCString();

//     console.log("Cookies set");

//     document.cookie = "firstname=" + encodeURIComponent(firstname) + "; path=/; " + expires;
//     document.cookie = "email=" + encodeURIComponent(email) + "; path=/; " + expires;

//     showWelcomeMessageOrForm();
// }


// // Ex 2
// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
// }

// function showCookies () {
//     const firstname = getCookie('firstname');
//     const email = getCookie('email');

//     const p = document.createElement("p");
//     p.innerHTML = "Email: " + email + " - Firstname: " + firstname;
//     document.body.appendChild(p);
// }


// //Ex 3
// function showForm () {
//     const form = document.getElementById('login-form');
//     form.style.display = 'block';

//     const content = document.getElementById('content');
//     const welcomeMessage = document.getElementById('welcomeMessage');
//     if (welcomeMessage) {
//         content.removeChild(welcomeMessage);
//     }
//     console.log("Form displayed");
// }

// function hideForm () {
//     const form = document.getElementById('login-form');
//     form.style.display = 'none';
//     console.log("Form hidden");
// }

// function deleteCookiesAndShowForm() {
//     document.cookie = "firstname=; expires=Thu, 01 Jan 2020 00:00:00 UTC; path=/;";
//     document.cookie = "email=; expires=Thu, 01 Jan 2020 00:00:00 UTC; path=/;";
//     console.log("Cookies deleted");
//     showForm();
// }

// function showWelcomeMessageOrForm () {
//     const firstname = getCookie('firstname');
//     console.log("Retrieved Firstname:", firstname);

//     if(!firstname) {
//         showForm();
//     } else {
//         console.log("Firstname cookie found, hiding form and showing welcome message");
//         hideForm();
//         const content = document.getElementById('content');
//         const welcomeMessage = document.createElement('div');
//         welcomeMessage.id = 'welcome-message';
//         welcomeMessage.innerHTML = `<h1>Welcome ${firstname} <a href="#" onclick="deleteCookiesAndShowForm()" style="font-weight: normal; font-style: italic; margin-left: 10px;">(logout)</a></h1>`;
//         content.appendChild(welcomeMessage);
//     }
// }



