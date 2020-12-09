<?php
if(isset($_POST['contactSubmit'])) {
    $email = strip_tags(htmlentities(mysqli_real_escape_string($conn, $_POST['contactEmail']), ENT_QUOTES, 'UTF-8'));
    $firstName = strip_tags(htmlentities(mysqli_real_escape_string($conn, $_POST['contactFirstName']), ENT_QUOTES, 'UTF-8'));
    $message = strip_tags(htmlentities(mysqli_real_escape_string($conn, $_POST['contactMessage']), ENT_QUOTES, 'UTF-8'));

    $sendTo = 'forcowicz@gmail.com';
    $headers = array(
      'From' => $email
    );
    mail($sendTo, $firstName, $message, $headers);
    header("refresh");
}