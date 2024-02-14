let allProducts = [
  { id: 1, title: "Album 1", price: 12.93, img: "Images/Album 1.png" },
  { id: 2, title: "Album 2", price: 21, img: "Images/Album 2.png" },
  { id: 3, title: "Album 3", price: 33, img: "Images/Album 3.png" },
  { id: 4, title: "Album 4", price: 41.98, img: "Images/Album 4.png" },
  { id: 5, title: "Coffee", price: 98, img: "Images/Cofee.png" },
  { id: 6, title: "Shirt", price: 65.33, img: "Images/Shirt.png" },
];

const shopItemsContainer = document.querySelector(".shop-items");

allProducts.forEach((product) => {
  // create div shop-item
  let productContainer = document.createElement("div");
  productContainer.classList.add("shop-item");

  //create span for title
  let productTitleSpan = document.createElement("span");
  productTitleSpan.classList.add("shop-item-title");
  productTitleSpan.innerHTML = product.title;

  //create div image
  let productImageEl = document.createElement("img");
  productImageEl.classList.add("shop-item-image");
  productImageEl.setAttribute("src", product.img);

  //create div details
  let productDetailContainer = document.createElement("div");
  productDetailContainer.classList.add("shop-item-details");

  //create span price
  let productPriceSpan = document.createElement("span");
  productPriceSpan.classList.add("shop-item-price");
  productPriceSpan.innerHTML = product.price;

  //create button add
  let productAddButton = document.createElement("button");
  productAddButton.className = "btn btn-primary shop-item-button";
  productAddButton.innerHTML = "ADD TO CART";

  //Add tag button and price to productDetail
  productDetailContainer.append(productPriceSpan, productAddButton);

  // Add tag title and image and detail to productContainer
  productContainer.append(
    productDetailContainer,
    productImageEl,
    productTitleSpan
  );

  // Add all to shopItemsContainer
  shopItemsContainer.append(productContainer);
});
