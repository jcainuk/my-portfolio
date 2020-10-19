
const form = document.getElementById("myform");

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

form.addEventListener('click', e => {
    e.preventDefault();
    console.log(name.value);


});
