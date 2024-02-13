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

// function addToCart(id) {
//     // let choosenItem = products.find((item) => item.id === id);

//     let itemIndex = favItem.findIndex((item) => item.id === id);

//     if (itemIndex === -1) {
//         drawCartProducts(itemIndex);

//         // addedItem = [...addedItem, choosenItem];
//         localStorage.setItem("productsInCart", JSON.stringify(addedItem));


//         document.getElementById(`add-btn-${id}`).style.display = "none";
//         document.getElementById(`remove-btn-${id}`).style.display = "inline-block";


//     }
// }


// //////////////////////////////////FavoriteSction/////////////////////////////////////////////

let productsInFav = localStorage.getItem("productsInFav");
let allfavorites = document.querySelector(".favorites");

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
                            <i id="fav-${item.id}" class="fas fa-heart" style="color: red;" onClick="removeFromFav(${item.id})"></i>    
                 </div> 

                </div>
        </div>
        
        `

    })
    allfavorites.innerHTML = fav.join('');
}

////////////////////////////////////////removeFromFav///////////////////////////////////////////////

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