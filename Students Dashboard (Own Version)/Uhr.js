id = "uhr"

function startsTheClock() {

    const today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    zeroBeforeNumberChecker(minutes);
    zeroBeforeNumberChecker(seconds);

    document.getElementById('uhr').innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(startsTheClock, 1000);


}

function zeroBeforeNumberChecker(i) {
    if (i < 10) {  // Checks whether there is a zero infront of a number.
        i = '0' + i; // This does not work.
    }
    return i;
}
window.onload = startsTheClock;
