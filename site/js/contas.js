$(
    function() {
        $("#add").click(function() {
            event.preventDefault(event);
            /*tirar todos esses inputs por \ */
            var input =  '<div class="col-md-6 col-sm-12 col-lg-6 col-xl-3 contas"><br>\
                            <div class="card" style="width: 18rem;">\
                                <img class="card-img-top" src="./img/card1.jpg" alt="Card image cap">\
                                <div class="card-body">\
                                    <input type="text" style="border:0;font-size:20px;font-weight: 500; text-decoration:none;" value="Adicione um Título" id="valorInputTitulo"></input><br>\
                                    <input type="checkbox">\
                                    <input  type="text" style="border:0;" value="Adicione um lembrete" id="valorInputLembrete"></input><br>\
                                    <br><br><a href="cartao.html" class="btn btn-primary">Verificar</a>\
                                    <a style="float:right;" class="btn btn-danger deletar" href="#" role="button">Deletar</a>\
                         </div></div></div>';

                $("#campos").append(input);
                return false;
        });

        $(document).on('click', '.deletar',function() {
            event.preventDefault(event);
            $(this).parent().parent().parent().remove();
        });
    }
);