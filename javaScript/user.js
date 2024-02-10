let userInfo = document.querySelector ("#user_info")
let userD = document.querySelector ("#user")
let links = document.querySelector ("#links")

if (localStorage.getItem("username")){
    links.remove()
    userInfo.style.display ="flex"
    userInfo.style.color = "black"
    userD.style.fontSize = "35px"
    userD.style.marginRight = "330px"
    userD.style.textTransform = "capitalize";

    userD.innerHTML = "Welcome " + localStorage.getItem("userName")
}
let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    } , 1500)
})