<?php
    if(isset($_GET['lang'])) {
        if($_GET['lang'] === 'pl') {
            echo "<script>document.documentElement.lang = 'pl'</script>";
        } else if ($_GET['lang'] === 'en') {
            echo "<script>document.documentElement.lang = 'en'</script>";
        }
    }
?>
<main>
<div class="visitor-alert visitor-alert-hidden" id="modal">
    <div class="visitor-alert-content">
        <h4>Dear user!</h4>
        <p>Project is not completed yet and doesn't work properly. Current work status can be checked on GitHub.</p>
        <p>Repository: <a href="https://github.com/Forcowicz/Konwerter-systemow-liczbowych">Click here to open GitHub.</a></p>
        <button class="btn" id="modalBtn">I understand</button>
    </div>
</div>
<script src="includes/js/alert.js"></script>
<section class="page-content">
    <div class="heading">
        <h1>Number systems converter</h1>
    </div>
    <div class="content-left">
        <div class="selection">
            <span class="selection-element" id="selection1">BIN</span>
            <span class="selection-element" id="selection2">OCT</span>
            <span class="selection-element" id="selection3">DEX</span>
            <span class="selection-element" id="selection4">HEX</span>
        </div>
        <div class="input-group" id="group1">
            <input type="text" placeholder="Select a system" class="input" id="input">
            <label for="input" class="label" id="inputLabel">Enter a number in binary system</label>
        </div>
        <div class="system-alert-block" id="system-alert">
            <h5>Select a system</h5>
        </div>
    </div>
    <div class="content-right">
        <div class="output-group">
                <span class="output">
                    <small class="output-label">Binary (BIN)</small>
                    <span id="outputBin">Enter a number</span>
                </span>
            <span class="output">
                    <small class="output-label">Octal (OCT)</small>
                    <span id="outputOct">Enter a number</span>
                </span>
            <span class="output">
                    <small class="output-label">Decimal (DEX)</small>
                    <span id="outputDex">Enter a number</span>
                </span>
            <span class="output">
                    <small class="output-label">Hexadecimal (HEX)</small>
                    <span id="outputHex">Enter a number</span>
                </span>
        </div>
    </div>
</section>
</main>
<footer>
    <button class="footer-link" id="creditsBtnOpen">Credits</button>
    <button class="footer-link" id="languagesBtnOpen">Lang</button>
    <div class="languages" id="languagesPopup">
        <ul>
            <li><a href="index.php?lang=en">English</a></li>
            <li><a href="index.php?lang=pl">Polski</a></li>
        </ul>
    </div>
</footer>
<section class="credits credits-hidden" id="creditsModal">
    <div class="credits-content">
        <span class="content-close" id="creditsBtnClose">&times;</span>
        <figure>
            <img src="images/profile.jpg" alt="Profile picture">
            <small>Forcowicz</small>
        </figure>
        <h4>Author: Marek Żywar (Forcowicz)</h4>
    </div>
</section>
<script src="includes/js/modal.js"></script>
<script src="includes/js/languages/english/converter_en.js"></script>