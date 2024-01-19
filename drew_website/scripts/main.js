// Backend Scripts

// Code to switch the images
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/drew_img1.jpeg') {
    myImage.setAttribute('src', 'images/drew_img2.jpeg');
  } else if (mySrc === 'images/drew_img2.jpeg') {
    myImage.setAttribute('src', 'images/drew_img3.jpeg');
  } else {
    myImage.setAttribute('src', 'images/drew_img1.jpeg');
  }
};


// Code for the name in the header
let nameButton = document.getElementById('name');
let myHeading = document.querySelector('h1');
let colorButton = document.getElementById('color');


// Function to set the username 
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = myName + ', This is Why You Should Hire Drew Lotocki';
  }
}

// Makes the updated title with the name
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = storedName + ', This is Why You Should Hire Drew Lotocki';
}

// Funtions to change background color
function backgroundColor() {
  if (document.body.style.background === "rgb(148, 144, 139)") {
      document.body.style.background = "rgb(217, 196, 141)";
  } else if (document.body.style.background === 'rgb(217, 196, 141)') {
      document.body.style.background = 'rgb(207, 143, 155)';
  } else if (document.body.style.background === 'rgb(207, 143, 155)') {
      document.body.style.background = 'rgb(163,184,201)'; 
  } else {
      document.body.style.background = "rgb(148, 144, 139)";
  }
}

// Runs the functions when each button is clicked
nameButton.onclick = function() {
  setUserName();
}

colorButton.onclick = function() {
  backgroundColor();
}

