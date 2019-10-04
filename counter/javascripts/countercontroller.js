var s = 0
var m = 0
var h = 0
var d = 0

function caltime(x, y) {
    s = m = h = d = 0

    diffTime = Math.abs(x.getTime() - y.getTime());
    diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    d = diffDays

    t2 = x.getHours() * 3600 + x.getMinutes() * 60 + x.getSeconds()
    t1 = y.getHours() * 3600 + y.getMinutes() * 60 + y.getSeconds()
    t1 = 86400 - t1
    t = t2 + t1
    h = Math.floor(t / 3600)
    h = h % 24
    t = t % 3600
    m = Math.floor(t / 60)
    s = t % 60

    d = "" + d <= 9 ? `0${d}` : `${d}`
    h = "" + h <= 9 ? `0${h}` : `${h}`
    m = "" + m <= 9 ? `0${m}` : `${m}`
    s = "" + s <= 9 ? `0${s}` : `${s}`
}

d5 = new Date()
d1 = new Date(d5.getTime() + 1081000)

f = 0

function start() {
    f = 1
    k1 = setInterval(function () {
        caltime(d1, new Date())
        setDigits(mins, m)
        setDigits(secs, s)
        if (m == "00" && s == "00") {
            f = 0
            clearInterval(k1)
        }
    }, 1000)
    return k1
}

cin = 0

function counterFunction() {
    d5 = new Date()
    d1 = new Date(d5.getTime() + 1081000)
    console.log("Counter")
    if (f == 1) {
        clearInterval(cins)
    }
    caltime(d1, new Date())
    cins = start()
}

function newcounterFunction() {
    e1 = document.getElementById("mi1").value
    e2 = document.getElementById("se1").value
    if (e1 == "" && e2 == "") {
        e1 = 18
        e2 = 0
        console.log("c1")
    } else {
        if (e1 == "") {
            e1 = 0
            console.log("c2")
        }
        if (e2 == "") {
            e2 = 0
            console.log("c3")
        }
    }
    e1=Number(e1)
    e2=Number(e2)
    console.log(e1 + "," + e2)
    d5 = new Date()
    d1 = new Date(d5.getTime() + (e1*60+e2+1)*1000)
    console.log("Counter")
    window.scrollTo(0,0)
    if (f == 1) {
        clearInterval(cins)
    }
    caltime(d1, new Date())
    cins = start()
}

counterFunction()