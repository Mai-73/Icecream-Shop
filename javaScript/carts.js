let productsInCart = localStorage.getItem("productsInCart");
let allProducts = document.querySelector(".Products");

if (productsInCart) {
    let item = JSON.parse(productsInCart);
    drawCartProducts(item)
}


function drawCartProducts(products) {

    let y = products.map((item) => {
        //
        return ` 
        <div id="product-${item.id}" class="col-lg-4 col-sm-6 Products-form  mb-4 pb-4" >
              <div class="card border border-info my-4 pt-3">
                 <img class=" Products-item-img card-img-top m-auto" src="${item.imageUrl}" alt="image" >
                 <div class="products-contant card-body" width="100%">
                            <h5 class="title card-title">${item.title}</h5>
                            <p><del>${item.price}</del> ${item.salePrice}</p>
                            <button id="" class="btn removebtn btn-secondary" onClick="removeFromCart(${item.id})">Remove From Cart</button>
                 </div> 

                </div>
        </div>
        `

    })
    allProducts.innerHTML = y.join('');
}

let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
let quantity = 1;

function removeFromCart(id) {
    let itemIndex = addedItem.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
        addedItem.splice(itemIndex, 1);
        localStorage.setItem("productsInCart", JSON.stringify(addedItem));

        let productItem = document.getElementById(`product-${id}`);
        if (productItem) {
            productItem.remove();
        }

    }
}

// //////////////////////////////////FavoriteSction/////////////////////////////////////////////


let productsInFav = localStorage.getItem("productsInFav");
let allfavorites = document.querySelector(".favorites");

// let products = [
//     { id: 1, title: "Vanilla Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/vanilla.jpg" },
//     { id: 2, title: "Chocolate Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/chocolate.jpg" },
//     { id: 3, title: "Black-Forest Ice Cream", price: "25 EGP", salePrice: "22 EGP", imageUrl: "images/Black-Forest.jpg" },
//     { id: 4, title: "Caramel Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/caramel.jpg" },
//     { id: 5, title: "Strawberry Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/Strawberry.jpg" },
//     { id: 6, title: "Blueberry Ice Cream", price: "30 EGP", salePrice: "28 EGP", imageUrl: "images/blueberry.jpg" },
//     { id: 7, title: "Raspberry Ice Cream", price: "30 EGP", salePrice: "28 EGP", imageUrl: "images/raspberry.jpg" },
//     { id: 8, title: "Blackberry Ice Cream", price: "30 EGP", salePrice: "28 EGP", imageUrl: "images/blackberry.jpg" },
//     { id: 9, title: "Cherry Ice Cream", price: "30 EGP", salePrice: "28 EGP", imageUrl: "images/cherry.jpg" },
//     { id: 10, title: "Mixed Berries Ice Cream", price: "33 EGP", salePrice: "30 EGP", imageUrl: "images/mixed-berries.jpg" },
//     { id: 11, title: "Almond Ice Cream", price: "28 EGP", salePrice: "25 EGP", imageUrl: "images/Almond.jpg" },
//     { id: 12, title: "Pistachio Ice Cream", price: "28 EGP", salePrice: "25 EGP", imageUrl: "images/Pistachio.jpg" },
//     { id: 13, title: "Coffee Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/coffee.jpg" },
//     { id: 14, title: "Matcha Ice Cream", price: "25 EGP", salePrice: "23 EGP", imageUrl: "images/matcha.jpg" },
//     { id: 15, title: "Thai Tea Ice Cream", price: "25 EGP", salePrice: "23 EGP", imageUrl: "images/Thai Tea.jpg" },
//     { id: 16, title: "Green Tea Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/green tea.jpg" },
//     { id: 17, title: "Apricot Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/apricot.jpg" },
//     { id: 18, title: "Mango Ice Cream", price: "27 EGP", salePrice: "25 EGP", imageUrl: "images/mango.jpg" },
//     { id: 19, title: "Peach Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/peach.jpg" },
//     { id: 20, title: "Red Apple Ice Cream", price: "22 EGP", salePrice: "20 EGP", imageUrl: "images/red apple.jpg" },
//     { id: 21, title: "Green Apple Ice Cream", price: "22 EGP", salePrice: "20 EGP", imageUrl: "images/Green Apple.jpg" },
//     { id: 22, title: "Banana Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/Banana.jpg" },
//     { id: 23, title: "Watermelon Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/watermelon.jpg" },
//     { id: 24, title: "Melon Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/melon.jpg" },
//     { id: 25, title: "Kiwi Ice Cream", price: "22 EGP", salePrice: "20 EGP", imageUrl: "images/Kiwi.jpg" },
//     { id: 26, title: "Orange Ice Cream", price: "20 EGP", salePrice: "18 EGP", imageUrl: "images/orange.jpg" },
//     { id: 27, title: "Lemon Ice Cream", price: "20 EGP", salePrice: "18 EGP", imageUrl: "images/Lemon.jpg" },
//     { id: 28, title: "Mixed-Fruit Ice Cream", price: "28 EGP", salePrice: "25 EGP", imageUrl: "images/mixed-fruit.jpg" },
//     { id: 29, title: "Honey Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/Honey.jpg" },
//     { id: 30, title: "Cereal Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/cereal.jpg" },
//     { id: 31, title: "Candy Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/candy-flavored.jpg" },



// ]

let favItem = localStorage.getItem("productsInFav") ? JSON.parse(localStorage.getItem("productsInFav")) : [];

if (productsInFav) {
    let item = JSON.parse(productsInFav);
    drawFavProducts(item)
}


function drawFavProducts(products) {

    let fav = products.map((item) => {
     
        return ` 
        <div id="product-${item.id}" class="col-lg-4 col-sm-6 Products-form  mb-4 pb-4" >
              <div class="card border border-info my-4 pt-3">
                 <img class=" Products-item-img card-img-top m-auto" src="${item.imageUrl}" alt="image" >
                 <div class="products-contant card-body" width="100%">
                            <h5 class="title card-title">${item.title}</h5>
                            <p><del>${item.price}</del> ${item.salePrice}</p>
                            <button id="add-btn-${item.id}" class="AddToCartBtn btn btn-secondary" onClick="addToCart(${item.id})">Add To Cart</button>
                            <button id="remove-btn-${item.id}" class="RemoveFromCartBtn btn btn-secondary" onClick="removeFromCart(${item.id})">Remove From Cart</button>
                            <i id="fav-${item.id}" class="fas fa-heart" onClick="removeFromFav(${item.id})"></i>    
                 </div> 

                </div>
        </div>
        
        `

    })
    allfavorites.innerHTML = fav.join('');
}

// let favItem = localStorage.getItem("productsInFav") ? JSON.parse(localStorage.getItem("productsInFav")) : [];


function removeFromFav(id) {
    let itemIndex = favItem.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
        favItem.splice(itemIndex, 1);
        localStorage.setItem("productsInFav", JSON.stringify(favItem));

        let productItem = document.getElementById(`product-${id}`);
        if (productItem) {
            productItem.remove();
        }

    }
}