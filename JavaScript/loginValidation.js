var data = [];
var storage = window.localStorage;
var globalUserStatus = false;


$(document).ready(function () {
  clickEvent();
});


function clickEvent() {
  $("#enter").click(function() {
    var email = $("#email").val();
    var password = $("#password").val();

    user = JSON.parse(localStorage.getItem('user'));

    if (email == '' || password == '') {
      alert("Preencha os campos obigatórios! Tente novamente!");
    } else {
      for (c = 0; c < user.length; c++) {
        if (user[c][1] == email && user[c][2] == password) {
          cleanInputFields();
          window.location.href = "../HTML/main.html";
        } else {
          globalUserStatus = true;
        }
      }
    }

    if (globalUserStatus) {
      globalUserStatus = false;
      alert("Usuário não encontrado! Cadastre-se! ");
    }
  });
}


function cleanInputFields() {
  $("input").val("");
}

