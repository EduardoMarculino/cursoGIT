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



/*
var todos = [];

document.getElementById("enviar").addEventListener("click", addTodo);
document.getElementById("tarefa").addEventListener("keydown", getEnter);

function getEnter(event) {
    
    if (event.keyCode == 13){    
        addTodo(event);
    }

}

function addTodo(event) {
    event.preventDefault();

    var texto = document.getElementById("tarefa");

    if (texto.value == "") {
        alert("Informe a Tarefa");
        return;
    }

    var tarefa = new Tarefa(texto.value, Date.now());

    todos.push(tarefa);

    texto.value = '';

    appendTodo(tarefa);

    //console.log(todos);
}

function appendTodo(todo) {
    var ul = document.getElementById("todolist");

    var li = document.createElement("li");
    li.setAttribute('class', "list-group-item mt-3");
    li.setAttribute('id',todo.id);
    li.appendChild(document.createTextNode(todo.texto));
    li.onclick = () => changeStatus(todo);

    var delButton = document.createElement('a');
    delButton.setAttribute('class', "float-right");
    var icon = document.createElement('span');
    icon.setAttribute('class', 'fas fa-trash text-danger');
    delButton.appendChild(icon);
    delButton.setAttribute('href', '#');
    delButton.onclick = () => deleteTodo(todo.id);

    li.appendChild(delButton);

    ul.appendChild(li);
}

changeStatus = (todo) => {
    /*var {
        id,
        status
    } = todo;

    var elementTodo = document.getElementById(todo.id);
    elementTodo.style.textDecoration = !elementTodo.status ? 'line-through' : '';

    elementTodo.status = !elementTodo.status;
}

deleteTodo = (id) => {
    var ul = document.getElementById("todolist");
    var todo = document.getElementById(id);
    ul.removeChild(todo);
}
*/ 