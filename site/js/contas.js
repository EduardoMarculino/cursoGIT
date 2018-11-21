$(
    function() {
        $("#add").click(function() {
            event.preventDefault(event);
            var input =  '<div class="col-md-6 col-sm-12 col-lg-6 col-xl-3 contas"><br>';
                input += '<div class="card" style="width: 18rem;">';
                input += '<img class="card-img-top" src="./img/card1.jpg" alt="Card image cap">';
                input += '<div class="card-body">';
                input += '<h5 class="card-title">Cartão de Crédito</h5>';
                input += '<input type="checkbox">';
                input += '<span>Pagar Contas referente aos seus cartões de créditos</span>';
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