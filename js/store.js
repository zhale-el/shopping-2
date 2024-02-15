let allProducts = [
  {
    id: 1,
    title: "Album 1",
    price: 5,
    img: "Images/Album 1.png",
    count: 1,
  },
  { id: 2, title: "Album 2", price: 10, img: "Images/Album 2.png", count: 1 },
  { id: 3, title: "Album 3", price: 15, img: "Images/Album 3.png", count: 1 },
  {
    id: 4,
    title: "Album 4",
    price: 20,
    img: "Images/Album 4.png",
    count: 1,
  },
  { id: 5, title: "Coffee", price: 25, img: "Images/Cofee.png", count: 1 },
  { id: 6, title: "Shirt", price: 30, img: "Images/Shirt.png", count: 1 },
];

const shopItemsContainer = document.querySelector(".shop-items");
const basketProductsContainer = document.querySelector(".cart-items");
const removeAllProductsBtn = document.querySelector("#remove-all-products");
const cartTotalPriceEl = document.querySelector(".cart-total-price");
// cart user
let userBasket = [];

allProducts.forEach((product) => {
  // // create div shop-item
  // let productContainer = document.createElement("div");
  // productContainer.classList.add("shop-item");

  // //create span for title
  // let productTitleSpan = document.createElement("span");
  // productTitleSpan.classList.add("shop-item-title");
  // productTitleSpan.innerHTML = product.title;

  // //create div image
  // let productImageEl = document.createElement("img");
  // productImageEl.classList.add("shop-item-image");
  // productImageEl.setAttribute("src", product.img);

  // //create div details
  // let productDetailContainer = document.createElement("div");
  // productDetailContainer.classList.add("shop-item-details");

  // //create span price
  // let productPriceSpan = document.createElement("span");
  // productPriceSpan.classList.add("shop-item-price");
  // productPriceSpan.innerHTML = product.price;

  // //create button add
  // let productAddButton = document.createElement("button");
  // productAddButton.className = "btn btn-primary shop-item-button";
  // productAddButton.innerHTML = "ADD TO CART";
  // productAddButton.addEventListener("click", () => {
  //   addProductToBasketArray(product.id);
  // });

  // //Add tag button and price to productDetail
  // productDetailContainer.append(productPriceSpan, productAddButton);

  // // Add tag title and image and detail to productContainer
  // productContainer.append(
  //   productDetailContainer,
  //   productImageEl,
  //   productTitleSpan
  // );

  // // Add all to shopItemsContainer
  // shopItemsContainer.append(productContainer);

  shopItemsContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="shop-item"><div class="shop-item-details">
    <span class="shop-item-price">${product.price}</span>
    <button class="btn btn-primary shop-item-button" onclick="addProductToBasketArray(${product.id});" >ADD TO CART</button></div>
    <img class="shop-item-image" src="${product.img}"><span class="shop-item-title">${product.title}</span></div>`
  );
});

//function add Product
function addProductToBasketArray(productId) {
  let mainProduct = allProducts.find(function (product) {
    return product.id === productId;
  });
  userBasket.push(mainProduct);
  basketProductsGenerator(userBasket);
  calcTotalPrice(userBasket);
}

function basketProductsGenerator(userBasketArray) {
  basketProductsContainer.innerHTML = "";

  userBasketArray.forEach((product) => {
    //create div cart-row (in cart)
    let basketProductEl = document.createElement("div");
    basketProductEl.classList.add("cart-row");

    //create cart-item cart-column(details container in cart)
    let basketProductDetailsContainer = document.createElement("div");
    basketProductDetailsContainer.className = "cart-item cart-column";

    //create details
    let basketProductImg = document.createElement("img");
    basketProductImg.setAttribute("src", product.img);
    basketProductImg.setAttribute("width", "100");
    basketProductImg.setAttribute("height", "100");
    basketProductImg.classList.add("cart-item-image");

    //create title
    let basketProductTitleSpan = document.createElement("span");
    basketProductTitleSpan.classList.add("cart-item-title");
    basketProductTitleSpan.innerHTML = product.title;

    // Add title and image to div cart-item
    basketProductDetailsContainer.append(
      basketProductImg,
      basketProductTitleSpan
    );

    // Add price
    let basketProductPriceSpan = document.createElement("span");
    basketProductPriceSpan.className = "cart-price cart-column";
    basketProductPriceSpan.innerHTML = product.price;

    // Add  div Input container
    let basketProductInputsContainer = document.createElement("div");
    basketProductInputsContainer.className = "cart-quantity cart-column";

    //Add Input
    let basketProductInput = document.createElement("input");
    basketProductInput.className = "cart-quantity-input";
    basketProductInput.value = product.count;
    basketProductInput.setAttribute("type", "number");
    basketProductInput.addEventListener("click", function () {
      updateProductCount(product.id, basketProductInput.value);
    });

    //Add button
    let basketProductRemoveBtn = document.createElement("button");
    basketProductRemoveBtn.className = "btn btn-danger";
    basketProductRemoveBtn.innerHTML = "Remove";
    basketProductRemoveBtn.addEventListener("click", function () {
      removeProductFromBasket(product.id);
    });
    // Append input
    basketProductInputsContainer.append(
      basketProductInput,
      basketProductRemoveBtn
    );

    //Add to container
    basketProductEl.append(
      basketProductDetailsContainer,
      basketProductPriceSpan,
      basketProductInputsContainer
    );

    basketProductsContainer.append(basketProductEl);
  });
}

function removeProductFromBasket(productId) {
  userBasket = userBasket.filter((product) => {
    return product.id !== productId;
  });

  basketProductsGenerator(userBasket);
  calcTotalPrice(userBasket);
}

removeAllProductsBtn.addEventListener("click", function () {
  userBasket = [];
  basketProductsGenerator(userBasket);
  calcTotalPrice(userBasket);
});

// calculate price
function calcTotalPrice(userBasketArray) {
  let totalPriceValue = 0;

  userBasketArray.forEach((product) => {
    totalPriceValue += product.count * product.price;
  });

  cartTotalPriceEl.innerHTML = totalPriceValue;
}

//update count
function updateProductCount(productId, newCount) {
  userBasket.forEach(function (product) {
    if (product.id === productId) {
      product.count = newCount;
    }
  });

  calcTotalPrice(userBasket);
}
