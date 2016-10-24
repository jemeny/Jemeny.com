
<?php

if(isset($_GET['sub']))
{
  $username = $GET['user'];
  $password = $GET['ps'];
  $email = $GET['email'];
  $text = $username . "," . $password . "," $email . "\n";
  $open = fopen('accounts.txt', 'a+');
  
  if(fwrite($open, $text)) {
    echo 'Congrats! You are a member of Jemeny now!';
  }
  fclose ($open);
}

?>
