<?php 


require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$company = $_POST['company'];
$surname = $_POST['surname'];
$name = $_POST['name'];
$middleName = $_POST['middleName'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$mail =new PHPMailer\PHPMailer\PHPMailer();
$mail->CharSet = 'utf-8';



//$mail->SMTPDebug = 2;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP


$mail->Host = 'smtp.gmail.com';  					// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info@raydexkz.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'kskd kdlq dqqs tpwl'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure =  'ssl';         // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('info@raydexkz.com'); // от кого будет уходить письмо?
$mail->addAddress('info@raydexkz.com');     // Кому будет уходить письмо 
//$mail->addAddress('sales@raydexkz.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML



$mail->Subject = 'Новое сообщение с raydexkz.com';
$mail->Body = "<b style='font-size: 20px; color: rgb(46, 105, 173);'>Новое сообщение с <a href='raydexkz.com' style='color: rgb(46, 105, 173);'>raydexkz.com:</a></b><br>";
if (!empty($company)) {
    $mail->Body .= "<b>Компания:</b> $company<br>";
}
if (!empty($surname)) {
    $mail->Body .= "<b>Фамилия:</b> $surname<br>";
}
if (!empty($name)) {
    $mail->Body .= "<b>Имя:</b> $name<br>";
}
if (!empty($middleName)) {
    $mail->Body .= "<b>Отчество:</b> $middleName<br>";
}
if (!empty($phone)) {
    $mail->Body .= "<b>Телефон:</b> $phone<br>";
}
if (!empty($email)) {
    $mail->Body .= "<b>Email:</b> $email<br>";
}
if (!empty($message)) {
    $mail->Body .= "<b>Сообщение:</b><br>$message<br>";
}

$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Ошибка: ' . $mail->ErrorInfo;
} else {
    header('location: ../thank-you.html');
}
?>