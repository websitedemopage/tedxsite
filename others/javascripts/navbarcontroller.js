if (window.pageYOffset < window.innerHeight / 2) {
    document.getElementById("navbarsection").style.height = "0";
    document.getElementById("navbarsection").style.minHeight = "0";
    document.getElementById("landingsec").style.backgroundColor = "#191919";
} else {
    document.getElementById("navbarsection").style.height = "8vh";
    document.getElementById("navbarsection").style.minHeight = "50px";
    document.getElementById("landingsec").style.backgroundColor = "#FFFFFF";
}
window.onscroll = function () {
    if (window.pageYOffset < window.innerHeight / 2) {
        document.getElementById("navbarsection").style.height = "0";
        document.getElementById("navbarsection").style.minHeight = "0";
        document.getElementById("landingsec").style.backgroundColor = "#191919";
    } else {
        document.getElementById("navbarsection").style.height = "8vh";
        document.getElementById("navbarsection").style.minHeight = "50px";
        document.getElementById("landingsec").style.backgroundColor = "#FFFFFF";
    }
}