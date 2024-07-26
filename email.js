// codigo de validacao do email
//----------------------------------
function checarEmail(){
    if(document.forms[0].email.value == ""||
      document.forms[0].email.value.indexOf('@') == -1 ||
      document.forms[0].email.valeu.indexOf('.')== -1 ){
        alert("por favor, informe um email valido");
        return false;
    }else{
        alert("email informado");
        document.getElementbyld("email").innerrHTML = document.forms[0].email.
        value;

    }
}
 
 
 
 
//----------------------------------
 
 
//codigo de verificacao do email digitado
//---------------------------------------
 // CÓDIGO DE VALIDAÇÃO DE EMAIL
// -----------------------------------------------------------
function checarEmail(){
    if(document.forms[0].email.value == "" ||
       document.forms[0].email.value.indexOf('@') == -1 ||
       document.forms[0].email.value.indexOf('.') == -1){
        alert("Por favor, informe um e-mail válido");
        return false;
       }else{
        alert("Email informado");
        document.getElementById('email').innerHTML = document.forms[0].email.value;
       }
}
 
 
//---------------------------------------
 