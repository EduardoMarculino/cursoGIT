document.getElementById("buttonCadastrar").addEventListener("click", cadastrar);

function cadastrar(event) {
    event.preventDefault(event);
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var phone = document.getElementById("phone");
    //console.log(email.value, password.value, firstName.value, lastName.value, username.value, phone.value);

    if (email.value == "" | password.value == "") {
        alert("Insira um email ou uma senha válida.");
        return;
    }

    var user = {
        nome : firstName.value,
        sobrenome : lastName.value,
        usuario : username.value,
        email : email.value,
        senha : password.value,
        telefone : phone.value
    }

    localStorage.setItem(password.value, JSON.stringify(user));

    console.log(user);

    firstName.value = '';
    lastName.value = '';
    username.value = '';
    email.value = '';
    password.value = '';
    phone.value = '';
}