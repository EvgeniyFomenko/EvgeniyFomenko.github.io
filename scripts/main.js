var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/i.jpg') {
      myImage.setAttribute ('src','images/we.jpg');
    } else {
      myImage.setAttribute ('src','images/i.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
//  var myName = prompt('Please enter your name.');
//  localStorage.setItem('name', myName);
  myHeading.textContent = 'Добрый день меня зовут, Евгений Фоменко;
}
//if(!localStorage.getItem('name')) {
  setUserName();
//} else {
 // var storedName = localStorage.getItem('name');
//  myHeading.textContent = 'Добрый день меня зовут, ' + storedName;
//}
myButton.onclick = function() {
  setUserName();
}
