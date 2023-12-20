document.addEventListener("DOMContentLoaded", () => {
  // I tried but faild so many times :D
});

let x = prompt("Enter a Value", "0"); //Allows user to enter number
document.getElementById("counter").innerHTML = x; // number will apear on page
var timesClicked = parseInt(x, 10); // user's 'number' is string.

function btnClickDown() {
  //On click function
  timesClicked -= 10;
  if (document.getElementById("counter").innerHTML < 10) {
    alert("you cann't go any further");
  } else {
    document.getElementById("counter").innerHTML = timesClicked;
  }
}
function btnClickUp() {
  //On click function
  timesClicked += 10;
  document.getElementById("counter").innerHTML = timesClicked;
}
