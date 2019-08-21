if (window.pageYOffset < window.innerHeight / 2) {
    document.getElementById("navbarsection").style.height = "0";
    document.getElementById("navbarsection").style.minHeight = "0";
} else {
    document.getElementById("navbarsection").style.height = "8vh";
    document.getElementById("navbarsection").style.minHeight = "64px";
}
window.onscroll = function () {
    if (window.pageYOffset < window.innerHeight / 2) {
        document.getElementById("navbarsection").style.height = "0";
        document.getElementById("navbarsection").style.minHeight = "0";
    } else {
        document.getElementById("navbarsection").style.height = "8vh";
        document.getElementById("navbarsection").style.minHeight = "64px";
    }
}