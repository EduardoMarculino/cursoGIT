$("#buttonSair").click(function(event){
    event.preventDefault(event);
    window.location.assign("./index.html");
});

$("#add").click(function(event) {
    event.preventDefault(event);
    
    var input =  '<div class="col-md-6 col-sm-12 col-lg-6 col-xl-3 contas animated fadeInLeft" id="valeuFalou"><br>\
                    <div class="card" style="width: 18rem;">\
                        <img class="card-img-top" src="./img/img.png" alt="Card image cap">\
                        <hr>\
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

$(document).on('click', '.deletar',function(event) {
    event.preventDefault(event);
    var _this_ = $(this);
    $(this).parent().parent().parent().addClass('animated zoomOut');
    setTimeout(function(){
        _this_.parent().parent().parent().remove();
    },500);
});