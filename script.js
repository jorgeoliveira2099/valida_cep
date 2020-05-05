$(document).ready(function(){
   
    $("#txtCep").focusout(function(){
      //melhorar isso com mascara de cep
      //  var cep = $("#txtCep").replace("-","");
      var cep = $("#txtCep").val();
      cep = cep.replace("-" , "");  
      var urlStr = "https://viacep.com.br/ws/"+ cep +"/json/";
        $.ajax({
             url : urlStr,
             type: "get",
             dataType: "json",
             success : function(data){
               console.log(data);
                $("#txtCidade").val(data.localidade);
                $("#txtEstado").val(data.uf);
                $("#txtBairro").val(data.bairro);
                $("#txtRua").val(data.logradouro);
                $("#txtComplemento").val(data.complemento);
            },
            error : function(erro){
console.log(erro);
            }

        });
    });
});




function mascara(el,masc){
    el.value=masc(el.value)
    }
    function soNumeros(d){
     return d.replace(/\D/g,"")
    }
    function semNumeros(d){
     return d.replace(/\d/g,"")
    }
    function soMinusculas(d){
     return d.toLowerCase()
    }
    function soMaiusculas(d){
     return d.toUpperCase()
    }
    function cep(d){
        d = soNumeros(d)
        d=d.replace(/^(\d{5})(\d)/,"$1-$2")
        return d
    }
    function cnpj(d){
        d = soNumeros(d)
        d=d.replace(/^(\d{2})(\d)/,"$1.$2")
        d=d.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
        d=d.replace(/\.(\d{3})(\d)/,".$1/$2")
        d=d.replace(/(\d{4})(\d)/,"$1-$2")
        return d
    }
    function cpf(d){
        d = soNumeros(d)
        d=d.replace(/(\d{3})(\d)/,"$1.$2")
        d=d.replace(/(\d{3})(\d)/,"$1.$2")
    
        d=d.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        return d
    }
    function url(d){
        d=d.replace(/http:\/\/?/,"")
     d = soMinusculas(d)
        dominio=d
        d="http://"+dominio
        return d
    }
    function telefone(d){
        d = soNumeros(d)
        d=d.replace(/^(\d\d)(\d)/g,"($1) $2")
        d=d.replace(/(\d{4})(\d)/,"$1-$2")
        return d
    }
    function data(d){
        d = soNumeros(d)
        d=d.replace(/(\d{2})(\d)/,"$1/$2")
     d=d.replace(/(\d{2})(\d)/,"$1/$2")
        return d
    }



