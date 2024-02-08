let joinBtn = document.querySelector("#joinBtn")

joinBtn.addEventListener("click", function (e) {
    e.preventDefault();
    setTimeout(() => {
        window.location = "login.html"
    }, 100)
})


// ///////////////////////////////////////////////////////////////////
let userInfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")

if (localStorage.getItem("userName")) {
    links.remove()
    userInfo.style.display = "flex"
    userData.innerHTML = localStorage.getItem("userName")
}

// /////////////////////////////////////////////////////////////////////

let allProducts = document.querySelector(".Products")

let products = [
    { id: 1, title: "Coffee Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/coffee.jpg" },
    { id: 2, title: "Vanilla Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/vanilla.jpg" },
    { id: 3, title: "Chocolate Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/chocolate.jpg" },
    { id: 4, title: "Lemon Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Lemon.jpg" },
    { id: 5, title: "Black-Forest Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Black-Forest.jpg" },
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
        <div class="col-lg-3 col-sm-5 Products-form  my-2 mx-auto" >
              <div class="Products-item px-2">
                 <img class=" Products-item-img" src="${item.imageUrl}" alt="image" >
                 <div class="products-contant" width="100%">
                            <h5 class="title item-title">${item.title}</h5>
                            <p><del>${item.price}</del> ${item.salePrice}</p>
                            <a href="#" class="btn btn-secondary" onClick="check()">Add To Cart</a>
                </div> 
                        <div class="img-overlay item-overlay">

                        </div>
                </div>
        </div>

        `
    })
    allProducts.innerHTML = y;
}
drawItems()

function check() {
    if (localStorage.getItem = ("username")) {
        window.location = "cartsproducts.html"
    } else {
        window.location = "login.html"
    }
}

let cartProductDiv = document.querySelector(".carts_products div")

function addToCart(id) {
    let choosenItem = products.find((item) => item.id === id);
    cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`
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

