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
    myHeading.innerHTML = myName + ' This is Why You Should Hire Drew';
  }
}

// Makes the updated title with the name
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = storedName + ' This is Why You Should Hire Drew';
}

// Funtions to change background color
function backgroundColor() {
  if (document.innerHTML.style.background === "rgb(148, 144, 139)") {
      document.innerHTML.style.background = "red";
  } else if (document.innerHTML.style.background === "red") {
      document.innerHTML.style.background = "green"; 
  } else {
      document.inerHTML.style.background = "red";
  }
}

// Runs the function on click
nameButton.onclick = function() {
  setUserName();
}

colorButton.onclick = function() {
  backgroundColor();
}

