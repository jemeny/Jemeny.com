
function S(){
 //var user = document.getElementById('User').value;
 //var pass = document.getElementById('ps').value;
  localStorage.setItem('username', document.getElementById('User').value;);
  localStorage.setItem('password', document.getElementById('ps').value;);
}

function C(){
  var user1 = localStorage.getItem('username');
  var pass1 = localStorage.getItem('password');
  //var USER = document.getElementById('user').value;
  //var PWD = document.getElementById('pass').value;
  if(document.getElementById('user').value; == user1 && document.getElementById('pass').value; == pass1){
    alert('Welcome to Jemeny,' + " " + user1 + "! You are logged in.")
  }else{
    alert("Password and Username doesn't match. Please Notify try again.");
  }
}
