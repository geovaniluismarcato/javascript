function validar(){

  //pegando o valor que sera digitado no elemento INPUT
  var valor = document.getElementById("numero").value;

  //length -> ele especifica o tamanho do numero
  if(valor.length > 2){
    alert("voce digitou um numero que possui mais de 2 algarismo");
    return false;
  }else{
    return true;
  }


}