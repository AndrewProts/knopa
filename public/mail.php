<?php 
$to  = $_POST['mail'] ;

$subject = "Knopa";

$message = ' 
<html> 
    <head> 
    	<meta charset="utf-8">
        <title>Knopa</title>
    </head> 
    <body> 
        <h3>name: '.$_POST['name'].'</h3><br>
        <h3>phone: '.$_POST['phone'].'</h3><br>
        <h3>message: '.$_POST['message'].'</h3><br>
    </body>
</html>'; 

$headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 

mail($to, $subject, $message, $headers);
?>