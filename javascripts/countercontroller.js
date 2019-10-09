setTimeout(function () {
    document.getElementById("logopart1").classList.add("flickereffect")
    setTimeout(function () {
        document.getElementById("logopart2").classList.add("fadeeffect")
        setTimeout(function () {
            document.getElementById("scrollarrow").style.display = "block";
            document.getElementById("thankyou").innerHTML='<marquee>Thank You All for your Support. We hope you had a great time.</marquee>';
        }, 1000)
    }, 1000)
}, 350)