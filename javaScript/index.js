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
    { id: 3, title: "Mango Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/mango-removebg-preview.png" },
    { id: 4, title: "Strawberry Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Strawberry.jpg" },
    { id: 5, title: "Lemon Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/Lemon.jpg" },
    { id: 6, title: "Coffee Ice Cream", price: "20 LE", salePrice: "17 LE", imageUrl: "images/coffee.jpg" }

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
                            <a href="#" class="btn btn-secondary" onClick="addToCart(${item.id})">Add To Cart</a>
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