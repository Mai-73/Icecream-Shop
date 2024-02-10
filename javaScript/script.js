let userInfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")

if (localStorage.getItem("userName")) {
    links.remove()
    userInfo.style.display = "flex"
    userInfo.style.color = "black"
    userData.style.fontSize = "35px"
    userData.style.textTransform = "capitalize";

    userData.innerHTML = "Welcome " + localStorage.getItem("userName")
}

let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function () {
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    }, 1500)
})

// /////////////////////////////////////////////////////////////////////

let allProducts = document.querySelector(".Products")

let products = [
    { id: 1, title: "Chocolate Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/chocolate.jpg" },
    { id: 2, title: "Vanilla Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/vanilla.jpg" },
    { id: 3, title: "Black-Forest Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Black-Forest.jpg" },
    { id: 4, title: "Lemon Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Lemon.jpg" },
    { id: 5, title: "Coffee Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/coffee.jpg" },
    { id: 6, title: "Apricot Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/apricot.jpg" },
    { id: 7, title: "Almond Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Almond.jpg" },
    { id: 8, title: "Green Tea Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/green tea.jpg" },
    { id: 9, title: "Banana Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Banana.jpg" },
    { id: 10, title: "Matcha Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/matcha.jpg" },
    { id: 11, title: "Blueberry Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/blueberry.jpg" },
    { id: 12, title: "Strawberry Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Strawberry.jpg" },
    { id: 13, title: "Melon Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/melon.jpg" },
    { id: 14, title: "Candy Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/candy-flavored.jpg" },
    { id: 15, title: "Pistachio Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Pistachio.jpg" },
    { id: 16, title: "Orange Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/orange.jpg" },
    { id: 17, title: "Caramel Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/caramel.jpg" },
    { id: 18, title: "Peach Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/peach.jpg" },
    { id: 19, title: "Thai Tea Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Thai Tea.jpg" },
    { id: 20, title: "Cherry Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/cherry.jpg" },
    { id: 21, title: "Mango Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/mango.jpg" },
    { id: 22, title: "Mixed Berries Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/mixed-berries.jpg" },
    { id: 23, title: "Green Apple Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Green Apple.jpg" },
    { id: 24, title: "Blackberry Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/blackberry.jpg" },
    { id: 25, title: "Mixed-Fruit Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/mixed-fruit.jpg" },
    { id: 26, title: "Honey Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Honey.jpg" },
    { id: 27, title: "Raspberry Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/raspberry.jpg" },
    { id: 28, title: "Kiwi Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Kiwi.jpg" },
    { id: 29, title: "Watermelon Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/watermelon.jpg" },
    { id: 30, title: "Red Apple Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/red apple.jpg" },
    { id: 31, title: "Cereal Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/cereal.jpg" },
]

function drawItems() {
    let y = products.map((item) => {
        return ` 
        <div class="col-lg-4 col-sm-6 Products-form  mb-4 pb-4" >
              <div class="card border border-info my-4 pt-3">
                 <img class=" Products-item-img card-img-top m-auto" src="${item.imageUrl}" alt="image" >
                 <div class="products-contant card-body" width="100%">
                            <h5 class="title card-title">${item.title}</h5>
                            <p><del>${item.price}</del> ${item.salePrice}</p>
                            <button class="btn btn-secondary" onClick="addToCart(${item.id})">Add To Cart</button>
                            <i id="fav-${item.id}" class="far fa-heart" onClick="addToFav(${item.id})"></i>    
                 </div> 

                

                </div>
        </div>
        
        `

    })
    allProducts.innerHTML = y.join('');
}
drawItems()

// ///////////////////////////////////////////////////////////////

let cartProductDiv = document.querySelector(".carts_products div")

let badge = document.querySelector(".badge")

let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

if (addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}
// ////////////////////////////////////////////addToFav/////////////////////////////////////////////////

function addToFav(id) {
    if (localStorage.getItem = ("username")) {
        var heartIcon = document.getElementById(`fav-${id}`);
        if (heartIcon.classList.contains("far")) {
            heartIcon.classList.remove("far");
            heartIcon.classList.add("fas");
            heartIcon.style.color = "red";
            // addToFavorites(id);
        } else {
            heartIcon.classList.remove("fas");
            heartIcon.classList.add("far");
            heartIcon.style.color = "black";
            // removeFromFavorites(id);
        }
    } else {
        window.location = "login.html";
    }
}
//////////////////////////////////////addToCart///////////////////////////////////////////////

if (localStorage.getItem = ("username")) {
    function addToCart(id) {
        let choosenItem = products.find((item) => item.id === id);
        cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`
        addedItem = [...addedItem, choosenItem];
        localStorage.setItem("productsInCart", JSON.stringify(addedItem))
        let cartProductsLength = document.querySelectorAll(".carts_products div p")

        badge.style.display = "block";
        badge.innerHTML = cartProductsLength.length;
    }

} else {
    window.location = "login.html"
}



//////////////////////////////////////////////////////////////////////////
let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartsProducts = document.querySelector(".carts_products")

shoppingCartIcon.addEventListener("click", opencart)

function opencart() {
    if (cartProductDiv.innerHTML != "") {
        if (cartsProducts.style.display == "block") {
            cartsProducts.style.display = "none"
        } else {
            cartsProducts.style.display = "block"
        }
    }
}

// ///////////////////////////////////////////////////////////////////////



