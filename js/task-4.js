const mainForm = document.querySelector('.login-form');

mainForm.addEventListener("submit", formSubmit)

function formSubmit (event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

if(email === '' || password === "") {
    alert('All form fields must be filled in');
}

const userDate = {
    email: email,
    password: password,
};

console.log(userDate);
form.reset();
}
