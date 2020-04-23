<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'ashmitd1@gmail.com';


@email_subject = 'New Form Submission';

$email_body = "User name: $name./n".
    "User email: $email/n". "User message: $message./n";
            
$to  = "ashmitd1@gmail.com";

$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

mail($to, $email_subject, $email_body, $headers);
header("Location: contact.html"); 
?>