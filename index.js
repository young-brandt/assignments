var headerTwo = document.createElement('body')
headerTwo.textContent = "Brandt wrote the Javascript"
var newBody = document.getElementById('body')
newBody.prepend(headerTwo)
var header = document.createElement("header")
header.textContent = 'JavaScript Made This'
var newHeader = document.getElementById('body')
newHeader.prepend(header)

