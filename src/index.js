import homeLoad from "./home";
import menuLoad from "./menu";
import contactLoad from "./contact";

homeLoad();

const buttons = document.querySelectorAll("button");
buttons[2].innerText = "Contact";
const content = document.querySelector("#content");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        content.innerHTML = "";
        button.innerText === "Home" ? homeLoad() :
        button.innerText === "Menu" ? menuLoad() :
        contactLoad();
    })
});