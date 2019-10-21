<?php 
$name      = @trim(stripslashes($_POST['name'])); 
$email     = @trim(stripslashes($_POST['email']));
$msg       = @trim(stripslashes($_POST['msg'])); 
$subject   = 'PHP-AJAX Email' ; //type your email subject here 
$to   	   = 'taryn@saeon.ac.za';//replace with your email
$headers   = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/plain; charset=iso-8859-1";
$headers[] = "Subject: {$subject}";
$headers[] = "X-Mailer: PHP/".phpversion();
// Build the email content.
$email_content  = "Name: $name\n";
$email_content .= "Email: $email\n";
$email_content .= "Message:$msg\n";
if ( empty($name) OR empty($msg) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    
    // Set a 400 (bad request) response code and exit.
    http_response_code(400);
    exit;
}
else{
    echo 'it went';
    mail($to, $subject, $email_content, implode("\r\n", $headers));
}
die;
 ?>