//your JS code here. If required.
let element = document.getElementById('level');
let count = 0;

while(element){
    count++;
    element = element.parentElement;
    console.log(element)
}

alert(`The level of the element is: ${count}`);
