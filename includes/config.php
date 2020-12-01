<?php
ob_start();
session_start();

date_default_timezone_set('Europe/Warsaw');

$conn = mysqli_connect('localhost', 'root', '', 'converter');
if(mysqli_connect_errno()) {
    echo "Nie udało się połączyć z bazą danych." . mysqli_connect_errno();
}