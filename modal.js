const modal = document.getElementById('modal');
const btn = document.getElementById('modalBtn');
const cookie = getCookie("Visited");
if (cookie === null) {
    modal.classList.toggle('visitor-alert-hidden');
    btn.addEventListener('click', () => {
        modal.classList.toggle('visitor-alert-hidden');
        document.cookie = "Visited=true;expires=" + setExpirationDate(); + ";path=/";
    });
}

function getCookie(name) {
    const prefix = name + "="; // "Visited="
    let begin = document.cookie.indexOf("; " + prefix);
    if(begin === -1) {
        begin = document.cookie.indexOf(prefix);
        if(begin != 0) return null;
    } else {
        begin += 2;
        let end = document.cookie.indexOf(";", begin);
        if (end === -1) {
            end = document.cookie.length;
        }
    }
    return decodeURI(document.cookie.substring(begin + prefix.length));
}

function setExpirationDate() {
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + 3000 * 60 * 60 * 1000;
    now.setTime(expireTime);
    return now.toUTCString();
}