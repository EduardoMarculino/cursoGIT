function logar() {
    email = document.getElementById("inputEmail").value;
    senha = document.getElementById("inputPassword").value;
    console.log(email, senha);
    if (email == "matheus@email.com" & senha =="senha" | email == "ariel@email.com" & senha == "123" | email == "eduardo@email.com" & senha == "456") {
            window.location.assign("./contas.html");
    } else {
        alert("Usuário ou Senha Inválido");
    }
}
