function checkInputs() {
  var myName = document.forms["myForm"]["myName"].value;
  var myPhone = document.forms["myForm"]["myPhone"].value;
  var myEmail = document.forms["myForm"]["myEmail"].value;
  var at = myEmail.indexOf("@");
  var dot = myEmail.indexOf(".");
  
  if (!myName || myName == null) {
    alert("Error: Please enter a name\n");
  }
  if (myPhone.search(/^\d{3}-\d{3}-\d{4}$/) != 0 || !myPhone || myPhone == null) {
    alert("Invalid phone number (" +myPhone+
    "). \nThe correct form is: (ddd-ddd-dddd) \n"); 
  }

  //@ is first character, last 3 characters include '.' (.co), '.' is next to @
  if (at < 1 || dot+2 >= myEmail.length || dot < at+2 || !myEmail || myEmail == null) {
    alert("Invalid Email Address. (" +myEmail+ ")\nFormat is name@url");
  } else {
    document.getElementById("header").style.visibility = "hidden";
    document.getElementById("form").style.visibility = "hidden";
    document.getElementById("footer").style.visibility = "hidden";
    alert("Thanks for submitting!");
  }
  return false;
}
