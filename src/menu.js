import Scallops from "./img/scallops.jpg";
import Ribs from "./img/ribs.jpg";
import Lamb from "./img/lamb.jpg";
import Risotto from "./img/risotto.jpg";
import Torte from "./img/torte.jpg";

export default function menuLoad() {
    const content = document.querySelector("#content");
    const pageContainer = document.createElement("div");
    pageContainer.classList.add("page-container");
    const headline = document.createElement("h1");

    const menuList = [
        {
            name: "Pan-Seared Scallops with Citrus Beurre Blanc",
            image: Scallops,
            description: "Tender, pan-seared scallops served atop a bed of creamy parsnip purée, accompanied by a vibrant medley of roasted seasonal vegetables. Finished with a delicate citrus beurre blanc sauce, this dish offers a perfect balance of rich flavors and refreshing zest."
        },
        {
            name: "Braised Short Ribs with Truffle Mashed Potatoes",
            image: Ribs,
            description: "Slow-braised short ribs, cooked to perfection in a red wine reduction, served with velvety truffle-infused mashed potatoes. Accompanied by sautéed baby carrots and pearl onions, this dish is a symphony of deep, hearty flavors and luxurious textures."
        },
        {
            name: "Herb-Crusted Rack of Lamb with Mint Pesto",
            image: Lamb,
            description: "A succulent rack of lamb, encrusted with a fragrant blend of fresh herbs and breadcrumbs, roasted to a tender finish. Served with a side of creamy polenta, roasted garlic, and a drizzle of vibrant mint pesto, this dish is a modern twist on a classic favorite."
        },
        {
            name: "Wild Mushroom Risotto with Parmesan Crisp",
            image: Risotto,
            description: "Creamy Arborio rice risotto, infused with a rich blend of wild mushrooms, white wine, and Parmesan cheese. Garnished with a crispy Parmesan tuile and a sprinkle of fresh chives, this vegetarian delight is a celebration of earthy flavors and luxurious comfort."
        },
        {
            name: "Chocolate Hazelnut Torte with Raspberry Coulis",
            image: Torte,
            description: "An indulgent, flourless chocolate hazelnut torte, offering a dense, rich texture and deep cocoa flavor. Paired with a tart raspberry coulis and a dollop of freshly whipped cream, this decadent dessert is the perfect finale to a memorable dining experience at Principal Restaurant."
        },
    ]

    headline.innerText = "Our Menu"

    content.appendChild(pageContainer);
    pageContainer.appendChild(headline);

    menuList.forEach(menu => {
        const menuContainer = document.createElement("div");
        const menuName = document.createElement("h2");
        const menuImage = document.createElement("img");
        const menuDescription = document.createElement("p");
        menuContainer.classList.add("menu-container");
        
        menuName.innerText = menu.name;
        menuImage.src = menu.image;
        menuImage.height = 500;
        menuDescription.innerText = menu.description;

        pageContainer.appendChild(menuContainer);
        menuContainer.appendChild(menuImage);
        menuContainer.appendChild(menuName);
        menuContainer.appendChild(menuDescription);
    });
}