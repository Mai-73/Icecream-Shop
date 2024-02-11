
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

let badge = document.querySelector(".badge");
let buyProudect = document.querySelector(".buyProudect");

let quantity = 1;

let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

if (addedItem) {
    addedItem.map(item => {
        drawbuyProudect(item);
        // document.getElementById(`add-btn-${item.id}`).style.display = "none";
        // document.getElementById(`remove-btn-${item.id}`).style.display = "inline-block";
    })


    if (addedItem.length != 0) {
        badge.style.display = "block";
        badge.innerHTML = addedItem.length;
    }
    else {
        badge.style.display = "none";
    }
}

function drawbuyProudect(item) {
    // if (!document.getElementById(`buyProudectItem-${item.id}`)) {
    //     let quantity = +(localStorage.getItem(`quantity-${item.id}`)) || 1;

    buyProudect.innerHTML += `<div id="buyProudectItem-${item.id}" class="row my-2 pr-2">
        <span class="col-6">${item.title}</span>
        <span class="text-danger mins col-2" onClick="mins(${item.id},${item.salePrice})">-</span>
        <span class="col-2" id="quantity-${item.id}">${quantity}</span>
        <span class="text-success pls col-2" onClick="pls(${item.id},${item.salePrice})">+</span>
      </div>`;
}
// }
// ////////////////////////////////////////////addToFav/////////////////////////////////////////////////

function addToFav(id) {
    if (localStorage.getItem = ("userName")) {
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
function addToCart(id) {
    if (localStorage.getItem = ("userName")) {

        let choosenItem = products.find((item) => item.id === id);
        buyProudect.innerHTML += `<p>${choosenItem.title}</p>`
        addedItem = [...addedItem, choosenItem];
        localStorage.setItem("productsInCart", JSON.stringify(addedItem))
        let cartProductsLength = document.querySelectorAll(".carts_products div p")

        badge.style.display = "block";
        badge.innerHTML = cartProductsLength.length;

    } else {
        window.location = "login.html"
    }
}



//////////////////////////////////////////////////////////////////////////
let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartsProducts = document.querySelector(".carts_products")

shoppingCartIcon.addEventListener("click", opencart)

function opencart() {
    if (buyProudect.innerHTML != "") {
        if (cartsProducts.style.display == "block") {
            cartsProducts.style.display = "none"
        } else {
            cartsProducts.style.display = "block"
        }
    }
}

// //////////////////////////////----------Search--------/////////////////////////////////////////

let search = document.getElementById('search');
let searchOption = document.getElementById('searchOption');
// let searchCategory = document.getElementById('title');
let modeSearch = 'title ';


searchOption.addEventListener('change', function () {
    let selectedValue = this.value;

    if (selectedValue === "searchTittle") {
        modeSearch = 'title ';
        console.log(searchOption.value);
    } else if (selectedValue === "searchPrice") {
        modeSearch = 'price';
        console.log(searchOption.value);
    }

    search.placeholder = `search by ${modeSearch}`;
    search.focus();
    search.value = '';
});


// -----
function searchData(value) {
    let filteredProducts = products.filter((item) => {
        if (modeSearch === 'title ') {
            return item.title.toLowerCase().includes(value.toLowerCase());
        } else if (modeSearch === 'price') {
            return item.price.toLowerCase().includes(value.toLowerCase());
        }
    });


    let y = filteredProducts.map((item) => {
        return ` 
        <div class="col-lg-4 col-sm-6 Products-form  mb-4 pb-4" >
              <div class="card border border-info my-4 pt-3">
                 <img class=" Products-item-img card-img-top m-auto" src="${item.imageUrl}" alt="image" >
                 <div class="products-contant card-body" width="100%">
                            <h5 class="title  card-title ">${item.title}</h5>
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





