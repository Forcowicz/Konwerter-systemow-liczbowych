<?php
include_once("includes/language_check.php");

function languageCondition($argumentTrue, $argumentFalse) {
    global $browserLanguage;
    return ($browserLanguage === 'pl') ? $argumentTrue : $argumentFalse;
}
?>
<!DOCTYPE html>
<html lang="<?php echo languageCondition('pl', 'en') ?>">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <title>Konwerter systemów liczbowych</title>
    <meta name="author" content="Marek Żywar">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="favicon.ico">
</head>
<body>
    <?php

    if(isset($_GET['lang'])) {
        if($_GET['lang'] === 'pl') {
            echo "<script>document.documentElement.lang = 'pl'</script>";
        } else if ($_GET['lang'] === 'en') {
            echo "<script>document.documentElement.lang = 'en'; document.title = 'Number systems converter';</script>";
        }
    }

    if(isset($_GET['lang'])) {
        if($_GET['lang'] === 'en') {
            include_once("includes/languages/index_en.html");
        } else if ($_GET['lang'] === 'pl') {
            include_once("includes/languages/index_pl.html");
        }
    } else if ($browserLanguage === 'pl') {
        include_once("includes/languages/index_pl.html");
    } else {
        include_once("includes/languages/index_en.html");
    }

    ?>
</body>
</html>