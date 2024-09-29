// login page functionality

const loginForm = document.getElementById("login-form")

if(loginForm){
    loginForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log('Login attempt:', email, password);
        alert('Login Fuctionality would be implemmented')
        

    })
}