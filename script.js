document.addEventListener("DOMContentLoaded", () => {
  // I tried but faild so many times :D
});
const warning = document.getElementById("warning");
warning.style.display = "none";

let value = document.getElementById("counter");
let x = prompt("Enter a Value", "30"); //Allows user to enter number\
value.innerHTML = x; // number will apear on page
let stringToNum = parseInt(x, 10); // user's 'number' is string.
if (stringToNum > 100) {
  value.innerHTML = "100";
  stringToNum = 100;
  alert("you can only choose 10 to 100");
}

function btnClickDown() {
  //On click function

  if (stringToNum < 20) {
    // alert("you cann't go any further");
    warning.style.display = "block";
  } else {
    stringToNum -= 10;
    value.innerHTML = stringToNum;
    warning.style.display = "none";
  }
}
function btnClickUp() {
  //On click function
  if (stringToNum > 90) {
    warning.style.display = "block";
  } else {
    stringToNum += 10;
    value.innerHTML = stringToNum;
    warning.style.display = "none";
  }
}
