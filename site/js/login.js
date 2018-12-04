document.getElementById("buttonLogar").addEventListener("click", logar);
document.getElementById("inputPassword").addEventListener("keydown", getEnter);

function getEnter(event) {
    if(event.keyCode == 13) {
        logar(event);
    }
}

function logar(event) {
    event.preventDefault(event);
    var email = document.getElementById("inputEmail");
    var senha = document.getElementById("inputPassword");
    var check = JSON.parse(localStorage.getItem(senha.value));
    if (check) {
        if (email.value == check.email & senha.value == check.senha) {
            window.location.assign("./contas.html");
        } else {
            alert('Usuário ou Senha Inváildos.');
        }
    } else {
        alert('Usuário Inexistente.');
    }
}
