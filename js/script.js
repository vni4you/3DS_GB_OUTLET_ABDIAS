function validarLogin() {
 let login = document.getElementById("login").value;
 let senha = document.getElementById("senha").value;

 if (login === "admin" && senha === "123456") {
  alert("Oi," + login + ", sumido!");
  window.location.href="produtos.html";
 } else {
  alert("Acesso negado!");
 }

 login = document.getElementById("login").value = '';
 senha = document.getElementById("senha").value = '';

}
