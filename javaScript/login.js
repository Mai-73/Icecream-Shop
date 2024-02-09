
let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#signIn");

let getUserName = localStorage.getItem("userName");
let getPassword = localStorage.getItem("password");

window.onload = function () {
    userName.focus();
};

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (userName.value === "" || password.value === "") {
        alert("please fill data")
    }
    else {
        if (getUserName && getUserName.trim() === userName.value.trim() && getPassword && getPassword.trim() === password.value.trim()) {

            setTimeout(() => {
                window.location = "productspage.html"
            }, 500)
        } else {
            alert("not valid")
        }
    }
})
