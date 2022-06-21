// Set sound variables
var drumSound1 = new Audio("sounds/crash.mp3");
var drumSound2 = new Audio("sounds/kick-bass.mp3");
var drumSound3 = new Audio("sounds/snare.mp3");
var drumSound4 = new Audio("sounds/tom-1.mp3");
var drumSound5 = new Audio("sounds/tom-2.mp3");
var drumSound6 = new Audio("sounds/tom-3.mp3");
var drumSound7 = new Audio("sounds/tom-4.mp3");

// Less effective method to play sounds based on pressed button
//  document.querySelectorAll(".drum")[0].addEventListener("click", function() {drumSound1.play();});
//  document.querySelectorAll(".drum")[1].addEventListener("click", function() {drumSound2.play();});
//  document.querySelectorAll(".drum")[2].addEventListener("click", function() {drumSound3.play();});
//  document.querySelectorAll(".drum")[3].addEventListener("click", function() {drumSound4.play();});
//  document.querySelectorAll(".drum")[4].addEventListener("click", function() {drumSound5.play();});
//  document.querySelectorAll(".drum")[5].addEventListener("click", function() {drumSound6.play();});
//  document.querySelectorAll(".drum")[6].addEventListener("click", function() {drumSound7.play();});

// Detect button press
for (i = 0; i < document.querySelectorAll(".drum").length; i++)
  {
    document.querySelectorAll(".drum")[i].addEventListener('click', function()
  {
    var buttonInnerHTML = this.innerHTML;
    checkForSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }) // end function
} // end for loop

// Detect keydown
document.addEventListener('keydown', function(event)
{
  var key = event.key;
  checkForSound(key);
  buttonAnimation(key);
}) //end function

// Function to play sound depending on button/key sent
function checkForSound(keyNote)
{
  switch (keyNote)
  {
    case "w":
      drumSound1.play();
    break;
    case "a":
      drumSound2.play();
    break;
    case "s":
      drumSound3.play();
    break;
    case "d":
      drumSound4.play();
    break;
    case "j":
      drumSound5.play();
    break;
    case "k":
      drumSound6.play();
    break;
    case "l":
      drumSound7.play();
    break;
    default:
      console.log(keyNote);
    break;
  } // end switch
} // end function

// Add a pressed button/key animation
function buttonAnimation(keyFlash)
{
  var active = document.querySelector("." + keyFlash);
  active.classList.add("pressed");

  setTimeout(function()
    {
      active.classList.remove("pressed");
    }, 100) // end timeout function
} // end function
