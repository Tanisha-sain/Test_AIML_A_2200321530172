const user = document.getElementById('username');
const pass = document.getElementById('pass');
const btn = document.getElementById('login');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if(user.value == "admin" && pass.value == "admin"){
        user.value = ""
        pass.value= ""
        window.location.href = "welcome.html"
    }else{
        user.value = "";
        pass.value = "";
        alert("Please enter valid credentials !!");
    }
})



