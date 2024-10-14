const mainMenu = document.getElementById("main_Menu");
const hamBers = document.getElementById("ham_bers");

hamBers.addEventListener("click", function () {
  mainMenu.classList.toggle("hidden");
});

const cardBox = document.getElementById("card_box");
let card = 0;
const addToCard = document.querySelectorAll(".add_to_card");
const showProductContainer = document.getElementById("showContainer");
addToCard.forEach((add) => {
  add.addEventListener("click", function () {
    card++;
    cardBox.innerText = card;
    const productName = this.parentElement
      .querySelector(".watch_name")
      .getAttribute("data-product");

    const productPriceString = this.parentElement
      .querySelector("p[data-price]")
      .getAttribute("data-price");

    const productPrice = parseFloat(productPriceString);
    // console.log(productName, productPrice);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="flex justify-between items-center p-2 border-b-2 border-dotted border-orange-400">
          <p>Product: <span id="name">${productName}</span></p>
          <p>Price: <span id="price">${productPrice}</span>$</p>
        </div>
    `;
    showProductContainer.appendChild(div);
    saveLocalStorage(productName, productPrice);
  });
});

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveLocalStorage = (productName, productPrice) => {
  const cart = getStoredShoppingCart();
  cart[productName] = productPrice;
  const cartStringifyFlied = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringifyFlied);
};
const displayProductFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();
  // console.log(savedCart);
  for (product in savedCart) {
    const price = savedCart[product];
    // console.log(product, price);

    const div = document.createElement("div");
    div.innerHTML = `
      <div class="flex justify-between items-center p-2 border-b-2 border-dotted border-orange-400">
        <p>Product: <span id="name">${product}</span></p>
        <p>Price: <span id="price">${price}</span>$</p>
      </div>
    `;
    showProductContainer.appendChild(div);
  }
};
displayProductFromLocalStorage();
