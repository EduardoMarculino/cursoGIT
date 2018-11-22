$(
    function() {
        $("#add").click(function() {
            event.preventDefault(event);
            /*tirar todos esses inputs por \ */
            var input =  '<div class="col-md-6 col-sm-12 col-lg-6 col-xl-3 contas"><br>';
                input += '<div class="card" style="width: 18rem;">';
                input += '<img class="card-img-top" src="./img/card1.jpg" alt="Card image cap">';
                input += '<div class="card-body">';
                input += '<input type="text" style="border:0;font-size:20px;font-weight: 500; text-decoration:none;" value="Adicione um Título" id="valorInputTitulo"></input><br>';
                input += '<input type="checkbox">';
                /*input += '<span> Adicione um lembrete a essa conta</span>';*/
                input += '<input  type="text" style="border:0;" value="Adicione um lembrete" id="valorInputLembrete"></input><br>';
                input += '<br><br><a href="cartao.html" class="btn btn-primary">Verificar</a>';
                input += '<a style="float:right;" class="btn btn-danger deletar" href="#" role="button">Deletar</a>';
                input += '</div></div></div>';

                $("#campos").append(input);
                return false;
        });

        $(document).on('click', '.deletar',function() {
            event.preventDefault(event);
            $(this).parent().parent().parent().remove();
        });
    }
);