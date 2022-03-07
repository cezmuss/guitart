var data = [];
var storage = window.localStorage;
const user = JSON.parse(storage.getItem('user'));


$(document).ready(function () {
  clickEvent();
});


function clickEvent() {
  $('#register').click(function () {
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirm = $('#confirm').val();

    if (name == '' || email == '' || password == '' || confirm == '') {
      alert('Preencha os campos obigatórios! Tente novamente!');
    } else {
      if (password == confirm) {
        var aux = [];

        aux.push(name);
        aux.push(email);
        aux.push(password);
        aux.push(confirm);

        data.push(aux);

        if (user == null || user.length == 0) {
          storage.setItem('user', JSON.stringify(data));
        } else {
          for (c = 0; c < user.length; c++) {
            data.push(user[c]);
            storage.setItem('user', JSON.stringify(data));
          }
        }

        $('input').val('');
        window.location.href = '../HTML/login.html';
      } else {
        alert('Senhas devem coincidir! Tente novamente!');
        $('#password').val('');
        $('#confirm').val('');
      }
    }
  });
}
