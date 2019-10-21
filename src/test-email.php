<?php 
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "zach@saeon.ac.za";
    $to = "taryn@saeon.ac.za";
    $subject = "PHP Mail Test script";
    $message = "This is a test to check the PHP Mail functionality";
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    if ( function_exists( 'mail' ) )
    {
        echo 'mail() is available';
    }
    else
    {
        echo 'mail() has been disabled';
    }
    echo phpinfo();
?>