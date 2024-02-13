
let allProducts = document.querySelector(".Products")

let products = [
    { id: 1, title: "Vanilla Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/vanilla.jpg" },
    { id: 2, title: "Chocolate Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/chocolate.jpg" },
    { id: 3, title: "Black-Forest Ice Cream", price: "25 EGP", salePrice: "22 EGP", imageUrl: "images/Black-Forest.jpg" },
    { id: 4, title: "Caramel Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/caramel.jpg" },
    { id: 5, title: "Strawberry Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/Strawberry.jpg" },
    { id: 6, title: "Blueberry Ice Cream", price: "30 EGP", salePrice: "28 EGP", imageUrl: "images/blueberry.jpg" },
    { id: 7, title: "Raspberry Ice Cream", price: "30 EGP", salePrice: "28 EGP", imageUrl: "images/raspberry.jpg" },
    { id: 8, title: "Blackberry Ice Cream", price: "30 EGP", salePrice: "28 EGP", imageUrl: "images/blackberry.jpg" },
    { id: 9, title: "Cherry Ice Cream", price: "30 EGP", salePrice: "28 EGP", imageUrl: "images/cherry.jpg" },
    { id: 10, title: "Mixed Berries Ice Cream", price: "33 EGP", salePrice: "30 EGP", imageUrl: "images/mixed-berries.jpg" },
    { id: 11, title: "Almond Ice Cream", price: "28 EGP", salePrice: "25 EGP", imageUrl: "images/Almond.jpg" },
    { id: 12, title: "Pistachio Ice Cream", price: "28 EGP", salePrice: "25 EGP", imageUrl: "images/Pistachio.jpg" },
    { id: 13, title: "Coffee Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/coffee.jpg" },
    { id: 14, title: "Matcha Ice Cream", price: "25 EGP", salePrice: "23 EGP", imageUrl: "images/matcha.jpg" },
    { id: 15, title: "Thai Tea Ice Cream", price: "25 EGP", salePrice: "23 EGP", imageUrl: "images/Thai Tea.jpg" },
    { id: 16, title: "Green Tea Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/green tea.jpg" },
    { id: 17, title: "Apricot Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/apricot.jpg" },
    { id: 18, title: "Mango Ice Cream", price: "27 EGP", salePrice: "25 EGP", imageUrl: "images/mango.jpg" },
    { id: 19, title: "Peach Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/peach.jpg" },
    { id: 20, title: "Red Apple Ice Cream", price: "22 EGP", salePrice: "20 EGP", imageUrl: "images/red apple.jpg" },
    { id: 21, title: "Green Apple Ice Cream", price: "22 EGP", salePrice: "20 EGP", imageUrl: "images/Green Apple.jpg" },
    { id: 22, title: "Banana Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/Banana.jpg" },
    { id: 23, title: "Watermelon Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/watermelon.jpg" },
    { id: 24, title: "Melon Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/melon.jpg" },
    { id: 25, title: "Kiwi Ice Cream", price: "22 EGP", salePrice: "20 EGP", imageUrl: "images/Kiwi.jpg" },
    { id: 26, title: "Orange Ice Cream", price: "20 EGP", salePrice: "18 EGP", imageUrl: "images/orange.jpg" },
    { id: 27, title: "Lemon Ice Cream", price: "20 EGP", salePrice: "18 EGP", imageUrl: "images/Lemon.jpg" },
    { id: 28, title: "Mixed-Fruit Ice Cream", price: "28 EGP", salePrice: "25 EGP", imageUrl: "images/mixed-fruit.jpg" },
    { id: 29, title: "Honey Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/Honey.jpg" },
    { id: 30, title: "Cereal Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/cereal.jpg" },
    { id: 31, title: "Candy Ice Cream", price: "20 EGP", salePrice: "17 EGP", imageUrl: "images/candy-flavored.jpg" },



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
                            <button id="add-btn-${item.id}" class="AddToCartBtn btn btn-secondary" onClick="addToCart(${item.id})">Add To Cart</button>
                            <button id="remove-btn-${item.id}" class="RemoveFromCartBtn btn btn-secondary" onClick="removeFromCart(${item.id})">Remove From Cart</button>
                            <i id="fav-${item.id}" class="far fa-heart" onClick="favorites(${item.id})"></i>    
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
        document.getElementById(`add-btn-${item.id}`).style.display = "none";
        document.getElementById(`remove-btn-${item.id}`).style.display = "inline-block";
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
    if (!document.getElementById(`buyProudectItem-${item.id}`)) {
        let quantity = +(localStorage.getItem(`quantity-${item.id}`)) || 1;

        buyProudect.innerHTML += `<div id="buyProudectItem-${item.id}" class="row my-2 pr-2">
        <span class="col-6">${item.title}</span>
        <span class="text-danger minus col-2" onClick="minus(${item.id})">-</span>
        <span class="col-2" style="font-size: 18px;" id="quantity-${item.id}">${quantity}</span>
        <span class="text-success pls col-2" onClick="pls(${item.id})">+</span>
      </div>`;
    }
}
// ////////////////////////////////////////////favorites/////////////////////////////////////////////////

let favItem = localStorage.getItem("productsInFav") ? JSON.parse(localStorage.getItem("productsInFav")) : [];


function favorites(id) {
    if (localStorage.getItem("userName")) {
        var heartIcon = document.getElementById(`fav-${id}`);
        if (heartIcon.classList.contains("far")) {
            heartIcon.classList.remove("far");
            heartIcon.classList.add("fas");
            heartIcon.style.color = "red";
            addToFavorites(id);
        } else {
            heartIcon.classList.remove("fas");
            heartIcon.classList.add("far");
            heartIcon.style.color = "black";
            removeFromFavorites(id);
        }
    } else {
        window.location = "login.html";
    }
}

////////////////////////////////////////// addToFavorites//////////////////////////////////////////////////////
function addToFavorites(id) {
    // console.log(favItem);

    if (!favItem.includes(id)) {
        favItem.push(id);
        // favItem.push(title);
        // favItem.push(price);
        // favItem.push(salePrice);
        // favItem.push(imageUrl);

    }

    localStorage.setItem("productsInFav", JSON.stringify(favItem));


}

////////////////////////////////////removeFromFavorites/////////////////////////////////////////////////
function removeFromFavorites(id) {
    let index = favItem.indexOf(id);
    if (index !== -1) {
        favItem.splice(index, 1);
    }

    localStorage.setItem("productsInFav", JSON.stringify(favItem));
}

//////////////////////////////////////addToCart///////////////////////////////////////////////
function addToCart(id) {
    if (localStorage.getItem("userName")) {

        let choosenItem = products.find((item) => item.id === id);

        let itemIndex = addedItem.findIndex((item) => item.id === id);

        if (itemIndex === -1) {
            drawbuyProudect(choosenItem);

            addedItem = [...addedItem, choosenItem];
            localStorage.setItem("productsInCart", JSON.stringify(addedItem));

            document.getElementById(`add-btn-${id}`).style.display = "none";
            document.getElementById(`remove-btn-${id}`).style.display = "inline-block";


            if (addedItem.length != 0) {
                badge.style.display = "block";
                badge.innerHTML = addedItem.length;
            }
        }

    } else {
        window.location = "login.html"
    }
}


//////////////////////////////////////plusBtn///////////////////////////////////////////////
function pls(id) {
    let quantityElement = document.getElementById(`quantity-${id}`);
    let quantity = +(quantityElement.innerHTML);

    quantity++;
    quantityElement.innerHTML = quantity;
    localStorage.setItem(`quantity-${id}`, quantity.toString());
    opencart()

}

//////////////////////////////////////minusBtn///////////////////////////////////////////////
function minus(id) {
    let quantityElement = document.getElementById(`quantity-${id}`);
    let quantity = +(quantityElement.innerHTML);
    if (quantity > 1) {
        quantity--;
        quantityElement.innerHTML = quantity;
        localStorage.setItem(`quantity-${id}`, quantity.toString());
    }
    else {
        removeFromCart(id);
    }
    opencart();
}

//////////////////////////////////////removeFromCart///////////////////////////////////////////////
function removeFromCart(id) {
    let itemIndex = addedItem.findIndex((item) => item.id === id);


    if (itemIndex !== -1) {
        addedItem.splice(itemIndex, 1);
        localStorage.setItem("productsInCart", JSON.stringify(addedItem));

        document.getElementById(`add-btn-${id}`).style.display = "inline-block";
        document.getElementById(`remove-btn-${id}`).style.display = "none";

        let productItem = document.getElementById(`buyProudectItem-${id}`);
        if (productItem) {
            productItem.remove();

        }

        if (addedItem.length != 0) {
            badge.style.display = "block";
            badge.innerHTML = addedItem.length;
        }

        else {
            badge.style.display = "none";

        }
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
                            <i id="fav-${item.id}" class="far fa-heart" onClick="favorites(${item.id})"></i>    
                 </div> 

                

                </div>
        </div>
        
        `

    })

    allProducts.innerHTML = y.join('');
}





