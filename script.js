// There is an onsubmit="return functionName" in the form element on my HTML


//Function to validate my form:

function validation() {

   //Declared values to collect what is typed in input fields:

   let name = document.getElementById('name').value;
   let email = document.getElementById('email').value;
   let subject = document.getElementById('subject').value;
   let message = document.getElementById('message').value;

   //Declared a text variable to collect error messages:

   let text;

   //Declared a value for my error div on the form

   let error_message = document.getElementById("error_message");

   /* When function called the error div gets padding so it shows!
   (zero padding at start as it is hidden to begin with!) */

   error_message.style.padding = "10px";

   //Condition to check name field is filled out.
   if(name === ""){
      text = "Please Enter A Name";

      // Add the contents of text variable to error_message div:
      error_message.innerHTML = text;

      //Return false to stop form from being submitted
      return false;
   }

   //Condition to check email field is filled out and emails contains @ sign.
   if(email === "" || email.includes('@') === false){
      text = "Please Enter A Valid E-mail Address";

      // Add the contents of text variable to error_message div:
      error_message.innerHTML = text;

      //Return false to stop form from being submitted
      return false;
   }

    //Condition to check subject field is filled out.
    if(subject === ""){
      text = "Please Enter A Subject";

      // Add the contents of text variable to error_message div:
      error_message.innerHTML = text;

      //Return false to stop form from being submitted
      return false;
   }


    //Condition to check message field is filled out.
    if(message === ""){
      text = "Please Enter A Message";

      // Add the contents of text variable to error_message div:
      error_message.innerHTML = text;

      //Return false to stop form from being submitted
      return false;
   }
 

 
alert("Form Submitted Successfully!");

//Return true to submit form.
return true;


  
}


