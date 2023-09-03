var p=setInterval(function(){
    showtime();
})

function showtime(){
    var date1= new Date()
    var hour = date1.getHours();
    var min = date1.getMinutes()
    var sec = date1.getSeconds()
    var am_pm="AM"
    if(hour >= 12){
        hour = hour - 12
        am_pm="PM"
    }
    if(hour == 0){
        hour=12
    }
// var para=document.getElementById("para")
// para.textContent=`${hour} : $'{min} : ${sec}: ${am_pm}`
var div1=document.getElementById("div1")
div1.textContent=`${hour}`
var div2=document.getElementById("div2")
div2.textContent=`${min}`
var div3=document.getElementById("div3")
div3.textContent=`${sec}`
var div4=document.getElementById("div4")
div4.textContent=`${am_pm}`
}

var mon=new Date()
m1=mon.getMonth()
var m2=["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"]
var a=m2[m1]
var m3=document.getElementById("month")
m3.append(a)

var date1=mon.getDate()
var dat=document.getElementById("date2")
dat.append(date1)

var year=mon.getFullYear()
var yr=document.getElementById("year")
yr.append(year)