<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $subject = $_POST['Subject'];
    $message = $_POST['Message'];

    if(empty($name)){
        echo "Enter the Name !!!";
    }else if(empty($subject)){
        echo "Enter the Subject !!!";
    }else if(empty($email)){
        echo "Enter the Email !!!";
    }else if(empty($message)){
        echo "Write the purpose of your Email !!!";
    }
    else{
        try{
            $mail = new PHPMailer(true);
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'code.faiq786@gmail.com';
            $mail->Password = 'fexdpdepbzwopsoy';
            $mail->Port = 465;
            $mail->SMTPSecure = 'ssl';
            $mail->isHTML(true);
            $mail->setFrom($email, $name);
            $mail->addAddress('code.faiq786@gmail.com');
            $mail->Subject = ("$email ($subject)");
            $mail->Body = $message;
            if($mail->send())
            {
                echo "Done";
            }
        }catch (Exception $e) {
            echo "Error: " . $mail->ErrorInfo;
        }
    }
    // $name = 'faiq';
    // $email = 'faiqmughal317@gmail.com';
    // $subject = 'text mail';
    // $message = 'hi dear how are you';
  
?>