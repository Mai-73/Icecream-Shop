let productsInCart = localStorage.getItem("productsInCart");
let allProducts = document.querySelector(".Products");

if (productsInCart) {
    let item = JSON.parse(productsInCart);
    drawCartProducts(item)
}




function drawCartProducts(products) {

    let y = products.map((item) => {
        let quantity = +(localStorage.getItem(`quantity-${item.id}`)) || 1;
        //
        return ` 
        <div id="product-${item.id}" class="col-lg-4 col-sm-6 Products-form  mb-4 pb-4" >
              <div class="card border border-info my-4 pt-3">
                 <img class=" Products-item-img card-img-top m-auto" src="${item.imageUrl}" alt="image" >
                 <div class="products-contant card-body" width="100%">
                            <h5 class="title card-title">${item.title}</h5>
                            <span><del>${item.price}</del> ${item.salePrice}</span>
                            
                            <span class="text-danger minus col-2 ml-5" onClick="minus(${item.id})">-</span>
                            <span class="col-2" style="font-size: 18px;" id="quantity-${item.id}">${quantity}</span>
                            <span class="text-success pls col-2" onClick="pls(${item.id})">+</span>
                           
                            <button id="" class="btn removebtn btn-secondary mt-3" onClick="removeFromCart(${item.id})">Remove From Cart</button>
                 
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
    let quantityElement = document.getElementById(`quantity-${id}`);
    let quantity = +(quantityElement.innerHTML);

    if (itemIndex !== -1) {
        addedItem.splice(itemIndex, 1);
        localStorage.setItem("productsInCart", JSON.stringify(addedItem));

        quantity = 0
        localStorage.setItem(`quantity-${id}`, quantity.toString());

        let productItem = document.getElementById(`product-${id}`);
        if (productItem) {
            productItem.remove();
        }

    }
}

//////////////////////////////////////plusBtn///////////////////////////////////////////////
function pls(id) {
    let quantityElement = document.getElementById(`quantity-${id}`);
    let quantity = +(quantityElement.innerHTML);

    quantity++;
    quantityElement.innerHTML = quantity;
    localStorage.setItem(`quantity-${id}`, quantity.toString());

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
}


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


//////////////////////////////////////addToCart///////////////////////////////////////////////
function addToCart(id) {

    let choosenItem = favItem.find((item) => item.id === id);

    let itemIndex = favItem.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
        drawCartProducts(choosenItem);

        localStorage.setItem("productsInCart", JSON.stringify(favItem));

        document.getElementById(`add-btn-${id}`).style.display = "none";
        document.getElementById(`remove-btn-${id}`).style.display = "inline-block";


        if (favItem.length != 0) {
            badge.style.display = "block";
            badge.innerHTML = favItem.length;
        }
    }

}
