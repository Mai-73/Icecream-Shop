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






let products = [
    { id: 1, title: "Coffee Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/coffee.jpg" },
    { id: 2, title: "Cereal Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/cereal.jpg" },
    { id: 3, title: "Chocolate Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/chocolate.jpg" },
    { id: 4, title: "Lemon Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/Lemon.jpg" },
    { id: 5, title: "Black-Forest Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/Black-Forest.jpg" },
    { id: 6, title: "Apricot Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/apricot.jpg" },
    { id: 7, title: "Almond Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/Almond.jpg" },
    { id: 8, title: "Green Tea Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/green tea.jpg" },
    { id: 9, title: "Banana Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/Banana.jpg" },
    { id: 10, title: "Matcha Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/matcha.jpg" },
    { id: 11, title: "Blueberry Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/blueberry.jpg" },
    { id: 12, title: "Strawberry Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/Strawberry.jpg" },
    { id: 13, title: "melon Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/melon.jpg" },
    { id: 14, title: "Candy Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/candy-flavored.jpg" },
    { id: 15, title: "Pistachio Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/Pistachio.jpg" },
    { id: 16, title: "orange Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/orange.jpg" },
    { id: 17, title: "Caramel Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/caramel.jpg" },
    { id: 18, title: "Peach Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/peach.jpg" },
    { id: 19, title: "Thai Tea Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/Thai Tea.jpg" },
    { id: 20, title: "Cherry Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/cherry.jpg" },
    { id: 21, title: "mango Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/mango.jpg" },
    { id: 22, title: "Mixed Berries Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/mixed-berries.jpg" },
    { id: 23, title: "Green Apple Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/Green Apple.jpg" },
    { id: 24, title: "Blackberry Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/blackberry.jpg" },
    { id: 25, title: "Mixed-Fruit Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/mixed-fruit.jpg" },
    { id: 26, title: "Honey Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/Honey.jpg" },
    { id: 27, title: "Raspberry Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/raspberry.jpg" },
    { id: 28, title: "Kiwi Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/Kiwi.jpg" },
    { id: 29, title: "Watermelon Ice Cream", price: "20 LE", salePrice: "17 LE", imageURL: "images/watermelon.jpg" }

]