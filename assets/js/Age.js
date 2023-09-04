// Get the current date
var today = new Date();
// Get the date of birth
var dob = new Date("2003-05-09"); // Change this to your actual date of birth
// Calculate the age in years
var age = today.getFullYear() - dob.getFullYear();
// Adjust the age if the birthday has not passed yet
if (today.getMonth() < dob.getMonth() || (today.getMonth() == dob.getMonth() && today.getDate() < dob.getDate())) {
  age--;
}
// Get the element that displays the age
var ageElement = document.querySelector(".age");
// Update the age with the calculated value
ageElement.textContent = age + " Years";