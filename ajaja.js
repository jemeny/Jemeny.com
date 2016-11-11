
var user = document.getElementById('User');
var pass = document.getElementById('ps');

function S(){
  localStorage.setItem('username', user.value);
  localStorage.setItem('password', pass.value);
}

function C(){
  var user1 = localStorage.getItem('username');
  var pass1 = localStorage.getItem('password');
  var USER = document.getElementById('user');
  var PWD = document.getElementById('pass');
  if(USER == user1 && PWD == pass1){
    alert('Welcome to Jemeny,' + " " + user1 + "! You are logged in.")
  }else{
    alert("Password and Username doesn't match. Please Notify try again.");
  }
}
