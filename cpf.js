//VALIDACAO DE CPF DIRETO NO JAVASCRIPT
//adicionando escutador formulario
document.getElementById('cpfForm').addEventListener('submit',function(event){
     event.preventDefault();


     const cpf = document.getElementById('cpf').value;
     const msg = document.getElementById('message');

if(validarCPF(cpf)){
   msg.textContent = "o cpf e valido!";
   msg.style.color = 'green';
}else{
    msg.textContent = 'o cpf e invalido!';
    msg.style.color = 'red';
}

} 
);


function validarCPF(cpf){
  cpf = cpf.replace(/[^\d]+/g, ''); //Remove caracteres nao numericos

    // estrutura de decisao para verificar quantidade de degitos e se todos os digitos sao iguais
    if(cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)){
        return false;
    }

    let soma = 0;
    let resto;

    for(let i=1;i<=9;i++){
        soma += parseInt(cpf.substring(i-1, i)) * (11-i);
       }

       resto = (soma * 10) % 11;

       if((resto ===10)|| (resto === 11)){
            resto =0;
       }
       if(resto !== parseInt(cpf.substring(9, 10))){
            return false;
       }

       soma = 0;
        //  validando o segundo digito verficador
       for(let i = 1; i <= 10; i++){
        soma += parseInt(cpf.substring(i-1, i) * (12-i));

       }

      resto = (soma * 10) % 11;
 
      if((resto === 10)|| (resto === 11)){
        resto = 0;
       }

        if(resto !== parseInt(cpf.substring(10, 11))){
              return false;
      }
        return true;
    }
