export default function homeLoad() {
    const content = document.querySelector("#content");
    const pageContainer = document.createElement("div");
    pageContainer.classList.add("page-container");
    const headline = document.createElement("h1");
    const image = document.createElement("img");
    const text = document.createElement("p");

    headline.innerText = "Principal Restaurant"
    text.innerText = `Welcome to Principal Restaurant, where culinary excellence meets timeless elegance.`;
    image.src = "/img/restaurant.jpg";
    image.width = 1000;

    content.appendChild(pageContainer);
    pageContainer.appendChild(headline);
    pageContainer.appendChild(image);
    pageContainer.appendChild(text);
}