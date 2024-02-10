let productsInCart = localStorage.getItem("productsInCart")
let allProducts = document.querySelector(".Products")

if (productsInCart) {
    let item = JSON.parse(productsInCart);
    drawCartProducts(item)
}
function drawCartProducts(products) {
    let y = products.map((item) => {
        return ` 
        <div class="col-lg-3 col-sm-5 Products-form  my-2 mx-auto" >
              <div class="Products-item px-2">
                 <img class=" Products-item-img" src="${item.imageUrl}" alt="image" >
                 <div class="products-contant" width="100%">
                            <h5 class="title item-title">${item.title}</h5>
                            <p><del>${item.price}</del> ${item.salePrice}</p>   
                            <button class="btn btn-secondary" onClick="RemoveFromCart(${item.id})">Remove From Cart</button>
                           
                 </div> 

                 
                </div>
        </div>

        `
    })
    allProducts.innerHTML = y;
}

// RemoveFromCart(){

// }