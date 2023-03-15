// getting empty spans
let dateShow = document.getElementById('date');
let monthShow = document.getElementById('month');
let yearShow = document.getElementById('year');
let hours = document.getElementById("hr") 
let mini = document.getElementById('min')
let sec = document.getElementById('sec')

// getting current date & time

let date = new Date();
var todayDate = date.getDate();
todayDate = todayDate<10 ? '0'+todayDate : todayDate;
var currentHour = date.getHours();
var currentMini = date.getMinutes();
var todayMonth = date.getMonth()+1;
todayMonth = todayMonth<10 ? '0'+todayMonth : todayMonth;
let todayYear = date.getFullYear();
 dateShow.innerText = todayDate;
 monthShow.innerText = todayMonth;
 yearShow.innerText = todayYear;

setInterval(()=> {
  let currentTime = new Date()
current = currentTime.getHours()
current = current>12 ? current-12 : current;
current = current<10 ? '0'+current : current;
minitue = currentTime.getMinutes()
second = currentTime.getSeconds()
minitue = minitue<10 ? '0'+minitue : minitue;
second = second<10 ? '0'+second : second;
  hours.innerText = current;
  mini.innerText = minitue;
  sec.innerText = second;
},1000);

// getting radio buttons

let sun = document.getElementById('sun')
let mon = document.getElementById('mon')
let tue = document.getElementById('tue')
let wed = document.getElementById('wed')
let thu = document.getElementById('thu')
let fri = document.getElementById('fri')
let sat = document.getElementById('sat')
let am = document.getElementById('am')
let pm = document.getElementById('pm')

if(currentHour<12){
    am.setAttribute('checked', 'checked');
    am.removeAttribute('disabled');
}
else{
    pm.setAttribute('checked', 'checked');
    pm.removeAttribute('disabled');
}

let currentDay = date.getDay();

switch(currentDay){
    case 0:
        sun.setAttribute('checked', 'checked');
        sun.removeAttribute('disabled');
        break;
    case 1:
        mon.setAttribute('checked', 'checked');
        mon.removeAttribute('disabled');
        break;
    case 2:
        tue.setAttribute('checked', 'checked');
        tue.removeAttribute('disabled');
        break;
    case 3:
        wed.setAttribute('checked', 'checked');
        wed.removeAttribute('disabled');
        break;
    case 4:
        thu.setAttribute('checked', 'checked');
        thu.removeAttribute('disabled');
        break;
    case 5:
        fri.setAttribute('checked', 'checked');
        fri.removeAttribute('disabled');
        break;
    case 6:
        sat.setAttribute('checked', 'checked'); 
        sat.removeAttribute('disabled');
        break;
}






