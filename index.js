var headerTwo = document.createElement('body')
headerTwo.textContent = "Brandt wrote the Javascript"
var newBody = document.getElementById('body')
newBody.prepend(headerTwo)
var header = document.createElement("header")
header.textContent = 'JavaScript Made This'
var newHeader = document.getElementById('body')
newHeader.prepend(header)

headerTwo.style.textAlign = 'center';
headerTwo.style.fontWeight = '1000';

function myFunction() {
    document.getElementById("clear-button").reset();
  }

var myText = document.getElementById('message one')
myText.textContent = 'Hello, how are you?';

var myText = document.getElementById('message two')
myText.textContent = 'I am good, how are you?';

var myText = document.getElementById('message three')
myText.textContent = 'That is great, how is the weather?';

var myText = document.getElementById('message four')
myText.textContent = 'It is great as well.';