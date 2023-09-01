const hours = document.querySelector("#hours");
const mins = document.querySelector("#minutes");
const secs = document.querySelector("#seconds");
const setTime = document.querySelector("#setTime");
const stopButton = document.querySelector("#stopAlarm");
const audio = new Audio('/old-fashioned-school-bell.mp3');
let alarmTime = [];

function alarmSet() {
    const timeArr = setTime.value.split(":");
    alarmTime.splice(0, alarmTime.length);
    alarmTime.push(timeArr[0], timeArr[1]); 
    alarmNotice.innerHTML = `<i class="far fa-bell"></i><span>${setTime.value}</span>`;
    document.body.appendChild(alarmNotice);  
}

function alarmStop() {
    audio.pause();
    audio.currentTime = 0;
    stopButton.style.visibility = "hidden"; 
    alarmNotice.innerHTML = ` `;
}


function Time() {
    const date = new Date();
    const curHours = date.getHours();
    const curMins = date.getMinutes();
    const curSecs = date.getSeconds();
    curSecs < 10 ? secs.innerHTML = `0${curSecs}` : secs.innerHTML = curSecs;
    curMins < 10 ? mins.innerHTML = `0${curMins}` : mins.innerHTML = curMins;
    curHours < 10 ? hours.innerHTML = `0${curHours}` : hours.innerHTML = curHours;
    if(alarmTime[0] == curHours && alarmTime[1] == curMins && curSecs < 1.5) {
        audio.play();
        stopButton.style.visibility = "visible";  
    }
}
setInterval(Time, 1000);

Time();



