let joinBtn = document.querySelector("#joinBtn")
let shopNow = document.querySelector("#shopNow")

joinBtn.addEventListener("click", function (e) {
    e.preventDefault();
    setTimeout(() => {
        window.location = "login.html"
    }, 100)
})

shopNow.addEventListener("click", function (e) {
    e.preventDefault();
    setTimeout(() => {
        window.location = "productspage.html"
    }, 100)
})


// ///////////////////////////////////////////////////////////////////

let allProducts = document.querySelector(".Products")

let products = [
    { id: 1, title: "Chocolate Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/chocolate.jpg" },
    { id: 2, title: "Vanilla Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/vanilla.jpg" },
    { id: 3, title: "Coffee Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/coffee.jpg" },
    { id: 4, title: "Strawberry Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Strawberry.jpg" },
    { id: 5, title: "Caramel Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/caramel.jpg" },
    { id: 6, title: "Mango Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/mango.jpg" }

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
                            <i id="fav-${item.id}" class="far fa-heart" onClick="addToFav(${item.id})"></i>    
                 </div> 
                
                </div>
        </div>
    
        `
    })
    allProducts.innerHTML = y.join('');
}
drawItems()