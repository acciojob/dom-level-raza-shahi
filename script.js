//your JS code here. If required.
let curentElement = document.getElementById("level")
let level =0;
while(curentElement){
  level++;
  console.log(curentElement)
  curentElement = curentElement.parentElement;
}

alert(`The level of the element is: ${level}`)