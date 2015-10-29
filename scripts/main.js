/* Change image on click */

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/crane.jpg') {
		myImage.setAttribute ('src','images/smallpictureofgbh.jpg');
	} else {
		myImage.setAttribute ('src','images/crane.jpg');
	}
}

/* Change greeting for user */

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Herons are not cranes, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Herons are not cranes, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}