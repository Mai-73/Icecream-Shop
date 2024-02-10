let productsInCart = localStorage.getItem("productsInCart")
let allProducts = document.querySelector(".Products")

if (productsInCart) {
    let item = JSON.parse(productsInCart);
    drawCartProducts(item)
}


function drawCartProducts(products) {

    let y = products.map((item) => {
        return ` 
        <div id="product-${item.id}" class="col-lg-3 col-sm-5 Products-form  my-2 mx-auto" >
              <div class="Products-item px-2">
                 <img class=" Products-item-img" src="${item.imageUrl}" alt="image" >
                 <div class="products-contant" width="100%">
                            <h5  class="title item-title">${item.title}</h5>
                            <p><del>${item.price}</del> ${item.salePrice}</p>   
                            <button id="" class="btn removebtn btn-secondary" onClick="removeFromCart(${item.id})">Remove From Cart</button>
                           
                 </div> 

                 
                </div>
        </div>

        `
    })
    allProducts.innerHTML = y;
}

let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

// if (addedItem) {
//     addedItem.map((item) => {
//         total += +item.salePrice * +(localStorage.getItem(`quantity-${item.id}`));
//     })
//     totalPrice.innerHTML = total / 2;

// }

function removeFromCart(id) {
    let itemIndex = addedItem.findIndex((item) => item.id === id);
    // let quantityElement = document.getElementById(`quantity-${id}`);
    // let quantity = +(quantityElement.innerHTML);
  
    if (itemIndex !== -1) {
      addedItem.splice(itemIndex, 1);
      localStorage.setItem("productsInCart", JSON.stringify(addedItem));
  
    //   total = 0;
      let productItem = document.getElementById(`product-${id}`);
      if (productItem) {
        productItem.remove();
      }
    //   addedItem.forEach((item) => {
    //     total += +item.salePrice * quantity;
    //     // total += +item.salePrice * +(localStorage.getItem(`quantity-${item.id}`));
  
    //   });
    //   totalPrice.innerHTML = total;
    //   localStorage.setItem("totalPrice", JSON.stringify(total));
    }
  }