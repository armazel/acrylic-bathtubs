<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){
    $to = 'dragun.egor@gmail.com';
    $subject = 'Обратный звонок';
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>                        
                        <p>Почта: '.$_POST['email'].'</p>                        
                        <p>Комментарии: '.$_POST['description'].'</p>                        
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers  = "From: Отправитель <from@example.com>\r\n";
    if(!mail($to, $subject, $message, $headers)){
        http_response_code(403);
    }
}