function getTime(){
    const time = new Date();
    let dayString = `${time.getMonth()+1}/${time.getDate()}/${time.getFullYear()}`;

    let hr = time.getHours();
    let timeString = "" ;

    //1:20AM ,11:59AM, 12:00PM, 13:45 - 12 =  1:45, 12:35PM
    if(hr >= 12){
        if(hr === 12){
            timeString = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} PM`
        }
        else {
            hr -= 12 ;
            timeString = `${hr}:${time.getMinutes()}:${time.getSeconds()} PM`
        }
    }
    else {
        // : AM
        // : 12 hr clock no modifications needed
        timeString = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} AM`
    }

    return dayString+", "+timeString;

}
const p = document.getElementById("timer");

function timer(){
    p.innerText = getTime();
}

setInterval(timer, 1000);