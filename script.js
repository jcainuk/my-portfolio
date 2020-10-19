



function validation() {

let name = document.getElementById('name');
let submitButton = document.getElementById('submitButton');



submitButton.addEventListener(click, (e) => {
   
   console.log(name.value);


})

}