  $(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

    var d = document;
function processar(idTabela)
{
    var id = Date.now();

    var lista = ['conta', 'valor', 'data', 'status'];
    var newRow = d.createElement('tr');
    lista.map(item => {
      var newCell = d.createElement('td');
      newCell.innerHTML = d.getElementsByName(item)[0].value; 
      newRow.appendChild(newCell); 
    })
    newRow.setAttribute('id', id);
    var delButton = document.createElement('a');
    var icon = document.createElement('span');
    icon.setAttribute('class', 'fas fa-trash text-danger');
    delButton.appendChild(icon)
    delButton.setAttribute('href', '#');
    delButton.onclick = () => deleteTodo(id, idTabela);

    var acoes = d.createElement("td");
    acoes.setAttribute('class', 'text-center')
    acoes.appendChild(delButton)
    newRow.appendChild(acoes);

    
    
    //newRow.insertCell(0).innerHTML = d.getElementsByName('conta')[0].value;
    //newRow.insertCell(1).innerHTML = d.getElementsByName('valor')[0].value;
    //newRow.insertCell(1).innerHTML = d.getElementsByName('data')[0].value;
    //newRow.insertCell(1).innerHTML = d.getElementsByName('status')[0].value;
    d.getElementById(idTabela).appendChild(newRow);
    return false;
  }
  deleteTodo = (id, idTabela) => {
    var ul = document.getElementById(idTabela);
    var item = document.getElementById(id);
    ul.removeChild(item);
  }


$(".excluir").click(function() {
  $(this).parents('tr').remove();
});
