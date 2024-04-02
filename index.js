// Write your code here!
const element = document.getElementById("main");
element.remove();

const newHeader =document.createElement("h1");
newHeader.id = "victory";
const Header= document.querySelector("h1");
newHeader.textContent = "Welcome" + " " + "YOUR-NAME" + " " + "is the champion";