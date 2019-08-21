var s=0
var m=0
var h=0
var d=0

function caltime(x,y){
    s=m=h=d=0

    diffTime = Math.abs(x.getTime() - y.getTime());
    diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    d=diffDays

    t2=x.getHours()*3600+x.getMinutes()*60+x.getSeconds()
    t1=y.getHours()*3600+y.getMinutes()*60+y.getSeconds()
    t1=86400-t1
    t=t2+t1
    h=Math.floor(t/3600)
    h=h%24
    t=t%3600
    m=Math.floor(t/60)
    s=t%60

    d = ""+ d<=9 ? `0${d}` : `${d}`
    h = ""+ h<=9 ? `0${h}` : `${h}`
    m = ""+ m<=9 ? `0${m}` : `${m}`
    s = ""+ s<=9 ? `0${s}` : `${s}`
}

d1 = new Date("October 5, 2019 09:00:00")

console.log("Screen First : ",window.screenY)
/*setTimeout(function () {
    window.scrollTo(0, 0);
},2);
document.body.style.overflow = "hidden";*/

j=0
max=32
k = setInterval(function(){
	
	caltime(d1,new Date())
	if(j<max/4){
		d=Math.floor(Math.random() * 100);
		d = ""+ d<=9 ? `0${d}` : `${d}`
	}
	if(j<max/2){
		h=Math.floor(Math.random() * 100);
		h = ""+ h<=9 ? `0${h}` : `${h}`
    }
	if(j<max/4*3){
		m=Math.floor(Math.random() * 100);
		m = ""+ m<=9 ? `0${m}` : `${m}`
	}
    s=Math.floor(Math.random() * 100);
    s = ""+ s<=9 ? `0${s}` : `${s}`

    setDigits(days,d)
    setDigits(hours,h)
    setDigits(mins,m)
    setDigits(secs,s)

    j=j+1
    if(j==max){
        caltime(d1,new Date())
        setDigits(days,d)
        setDigits(hours,h)
        setDigits(mins,m)
        setDigits(secs,s)
        setTimeout(function(){
            document.getElementById("logopart1").classList.add("flickereffect")
            setTimeout(function(){
                document.getElementById("logopart2").classList.add("fadeeffect")
                setTimeout(function(){
                    document.getElementById("datepart").classList.add("fadeeffect")
                    document.getElementById("scrollarrow").style.display="block";
                    /*setTimeout(function(){
                        document.body.style.overflow = "auto";
                    },1000)*/
                },1000)
            },1000)
        },350)
    }
    if(j==max){
        clearInterval(k)
    }
},100);

setInterval(function(){
    caltime(d1,new Date())
    setDigits(days,d)
    setDigits(hours,h)
    setDigits(mins,m)
    setDigits(secs,s)
},1000)
