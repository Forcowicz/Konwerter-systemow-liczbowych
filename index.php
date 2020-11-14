<?php
include_once("includes/language_check.php");
?>
<!DOCTYPE html>
<html lang="<?php echo ($browserLanguage === 'pl') ? 'pl' : 'en' ?>">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <title>Konwerter systemów liczbowych</title>
    <meta name="author" content="Marek Żywar">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
    if(isset($_GET['lang'])) {
        if($_GET['lang'] === 'en') {
            include_once("includes/languages/index_en.php");
        } else if ($_GET['lang'] === 'pl') {
            include_once("includes/languages/index_pl.php");
        }
    } else if ($browserLanguage === 'pl') {
        include_once("includes/languages/index_pl.php");
    } else {
        include_once("includes/languages/index_en.php");
    }
    ?>
</body>
</html>