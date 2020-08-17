function apertouTecla(event){
  /**
   * quando qualquer tecla for pressionada será mostrado a mensagem no no log
   * +event.keyCode -> essa parte do codigo tem como função mostrar qual foi a tecla pressionada, neste caso,
   * ele mostra um numero vinculado a tecla no teclado.
  */
  console.log("apertou alguma tecla: "+event.keyCode);

  //condição dizendo que se a tecla apertada for a 13 ele ira mostrar a mensagem
  if (event.keyCode == 13){
    alert("voce apertou a tecla enter");
  }
}


function press(evento){
  console.log("voce soltou a tecla :"+evento.keyCode);
}