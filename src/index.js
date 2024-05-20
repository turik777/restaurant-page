import homeLoad from "./home";
import menuLoad from "./menu";
import contactLoad from "./contact";
import "./style.css";

homeLoad();

const buttons = document.querySelectorAll("button");
buttons[2].innerText = "Contact";
const content = document.querySelector("#content");

function removeTabColor() {
    buttons.forEach(button => {
        button.style.removeProperty("background-color");
    })
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        removeTabColor();
        content.innerHTML = "";
        button.innerText.toLowerCase() === "home" ? homeLoad() :
        button.innerText.toLowerCase() === "menu" ? menuLoad() :
        contactLoad();
        button.style.backgroundColor = "#F2EFE3";
    })
});