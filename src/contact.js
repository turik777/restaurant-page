export default function contactLoad() {
    const content = document.querySelector("#content");
    const pageContainer = document.createElement("div");
    pageContainer.classList.add("page-container", "contact");
    const headline = document.createElement("h1");
    const hoursHeadline = document.createElement("h3");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const email = document.createElement("p");
    const hours = document.createElement("p");
    
    headline.innerText = "Contact Us"
    hoursHeadline.innerText = "Hours of Operation:"
    address.innerText = "123 Main Street, Downtown City, State, ZIP Code";
    phone.innerText = "(123) 456-7890";
    email.innerText = "info@principalrestaurant.com";
    hours.innerText = `Monday to Thursday: 11:00 AM - 10:00 PM \n\n Friday to Saturday: 11:00 AM - 11:00 PM \n\n Sunday: 10:00 AM - 8:00 PM`;
    
    content.appendChild(pageContainer);
    pageContainer.appendChild(headline);
    pageContainer.appendChild(address);
    pageContainer.appendChild(phone);
    pageContainer.appendChild(email);
    pageContainer.appendChild(hoursHeadline);
    pageContainer.appendChild(hours);
}