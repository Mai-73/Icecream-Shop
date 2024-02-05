
let username = document.querySelector("#userName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

let register_btn = document.querySelector("#signUp")

register_btn.addEventListener ("click" , function (e){
    e.preventDefault()
    if (username.value==="" || email.value==="" || password.value ===""){
        alert("please fill data")
    } else {
        localStorage.setItem("userName" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value); 

        setTimeout ( () => {
            window.location = "login.html"
        } , 1500)
    }
})