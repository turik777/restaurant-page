export default function homeLoad() {
    const content = document.querySelector("#content");
    const pageContainer = document.createElement("div");
    pageContainer.classList.add("page-container");
    const headline = document.createElement("h1");
    const image = document.createElement("img");
    const text = document.createElement("p");

    headline.innerText = "Principal Restaurant"
    text.innerText = `Welcome to Principal Restaurant, where culinary excellence meets timeless elegance. Nestled in the heart of the city, Principal Restaurant offers a sophisticated dining experience that blends modern innovation with classic flavors. Our menu features a curated selection of gourmet dishes, crafted with the freshest locally-sourced ingredients, celebrating the best of seasonal cuisine. \n\n Step into our warm and inviting ambiance, where contemporary design meets a touch of vintage charm. Whether you’re joining us for a business lunch, a romantic dinner, or a special celebration, our attentive and knowledgeable staff will ensure your visit is unforgettable. At Principal Restaurant, we are dedicated to providing impeccable service and creating a memorable culinary journey for every guest. \n\n Discover the art of dining at its finest at Principal Restaurant – where every meal is a masterpiece.`;
    image.src = "/img/restaurant.jpg";
    image.width = 1000;

    content.appendChild(pageContainer);
    pageContainer.appendChild(headline);
    pageContainer.appendChild(image);
    pageContainer.appendChild(text);
}