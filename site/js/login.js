document.getElementById("buttonLogar").addEventListener("click", logar);

function logar() {
    event.preventDefault(event);
    var email = document.getElementById("inputEmail");
    var senha = document.getElementById("inputPassword");
    var check = JSON.parse(localStorage.getItem(senha.value));

    if (email.value == check.email & senha.value == check.senha) {
        console.log("hi, "+check.email);
        window.location.assign("./contas.html");
    }
}
