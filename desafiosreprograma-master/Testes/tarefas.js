function addTarefa() {
  var li = document.createElement("li");
  var novaTarefa = document.getElementById("novaTarefa").value;
  var texto = document.createTextNode(novaTarefa);
  li.appendChild(texto);
  if (novaTarefa === '') {
    alert("Insira uma tarefa!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("novaTarefa").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
