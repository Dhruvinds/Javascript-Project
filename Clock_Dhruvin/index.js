function time() {
    var date = new Date();
    var hours =date.getHours();
    var minutes =date.getMinutes();
    var seconds =date.getSeconds();

    // console.log(hours,minutes,seconds);

    if(hours == "12"){
        var hr = 12;
    }else if (hours == "24"){
        var hr = 0;
    }else{
        var hr = hours % 12;
    }
    if (hr<10) {
        hr = "0"+hr;
    } 
    if (minutes <10) {
        minutes="0"+minutes;
    }
    if (seconds<10) {
        seconds="0"+seconds;
    }

    var ampm = hours < 12 ? "AM" : "PM";
    var timed = hr + ":" +minutes+ ":" +seconds+"" +ampm;
    document.getElementById("clock").innerText = timed;
}

setInterval(time, 1000);

function date(){
    var x= new Date()
    document.getElementById("date").innerHTML= x.toLocaleDateString()
}

date()