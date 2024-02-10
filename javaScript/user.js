let user_Info = document.querySelector("#user_info")
let userD = document.querySelector("#user")

if (localStorage.getItem("userName")) {
    user_Info.style.display = "flex"
    user_Info.style.color = "black"
    userD.style.fontSize = "35px"
   
    userD.style.textTransform = "capitalize";

    userD.innerHTML = "Welcome " + localStorage.getItem("userName")
}


let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function () {
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    }, 1500)
})