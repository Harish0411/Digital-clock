// let date = new Date();
// console.log(date);
// // Date.now()
// console.log(Date.now())
// //get date
// console.log(date.getDate())
// //get day (0-6)
// console.log(date.getDay())
// //get year
// console.log(date.getFullYear())
// //get hours
// console.log(date.getHours())
// console.log(date.getMilliseconds())
// console.log(date.getMinutes())
// console.log(date.getMonth())
// console.log(date.getSeconds())
// console.log(date.getTime())
// console.log(date.getUTCDate())
// console.log(date.getUTCDay())
// console.log(date.getTimezoneOffset())
// console.log(date.getYear())


// const theBigDay = new Date(1962, 6, 7, 12); // noon of 1962-07-07 (7th of July 1962, month is 0-indexed)
// const theBigDay2 = new Date(theBigDay).setDate(24); // 1962-07-24 (24th of July 1962)
// const theBigDay3 = new Date(theBigDay).setDate(32); // 1962-08-01 (1st of August 1962)
// const theBigDay4 = new Date(theBigDay).setDate(22); // 1962-07-22 (22nd of July 1962)
// const theBigDay5 = new Date(theBigDay).setDate(0); // 1962-06-30 (30th of June 1962)
// const theBigDay6 = new Date(theBigDay).setDate(98); // 1962-10-06 (6th of October 1962)
// const theBigDay7 = new Date(theBigDay).setDate(-50); // 1962-05-11 (11th of May 1962)

// console.log(theBigDay7)

// let day = new Date();
// let time = day.setTime(4);
// let min = day.setMinutes(0);
// let sec = day.setSeconds(0)
// console.log(day);





// let date = new Date();
// let currentDate = date.getDay();
// console.log(currentDate)

// if(currentDate == 0 || currentDate == 6){
//     alert('today is the weekend')
// }
// else{
//     alert('today is week day')
// }

// let date = new Date()

// let dates = date.getDate();
// let month = date.getMonth()+1;
// let year = date.getFullYear()

// let format = dates + '-' + month + '-' + year;

// console.log(format);

// let input = document.getElementById('birth');
// let btn = document.getElementById('btn');
// let result = document.getElementById('result')

// btn.addEventListener('click', ()=>{
//     let today = new Date();
//     let birthDate = new Date(input.value);

//     var years;
//     if (today.getMonth() > birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() >= birthDate.getDate())) {
//         years = today.getFullYear() - birthDate.getFullYear();
//       }
//       else {
//         years = today.getFullYear() - birthDate.getFullYear() - 1;
//       }
//     var months;
//     if (today.getDate() >= birthDate.getDate()) {
//         months = today.getMonth() - birthDate.getMonth();
//       }
//       else{
//         months = today.getMonth() - birthDate.getMonth() - 1;
//       }
//       months = months < 0 ? months+12 : months;

//       var days;
//       var monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
//       if(today.getDate() > birthDate.getDate()){
//         days = today.getDate() - birthDate.getDate();
//       }
//       else{
//         days = today.getDate()- birthDate.getDate() + monthDays[birthDate.getMonth()];
//       }

//       result.innerText = `you are ${years} years ${months} months ${days} days old.`

// })

let dateShow = document.getElementById('date');
let monthShow = document.getElementById('month');
let yearShow = document.getElementById('year')
let date = new Date();
let todayDate = date.getDate();
let currentHour = date.getHours();
var todayMonth = date.getMonth()+1;
todayMonth = todayMonth<10 ? '0'+todayMonth : todayMonth;

let todayYear = date.getFullYear();
 dateShow.innerText = todayDate;
 monthShow.innerText = todayMonth;
 yearShow.innerText = todayYear;

 let hours = document.getElementById("hr") 
 let mini = document.getElementById('min')
 let sec = document.getElementById('sec')

let tym = ()=> {
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
}

setInterval(tym, 1000)
                                
let currentDay = date.getDay();

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
}
else{
    pm.setAttribute('checked', 'checked');
}

switch(currentDay){
    case 0:
        sun.setAttribute('checked', 'checked');
        break;
    case 1:
        mon.setAttribute('checked', 'checked');
        break;
    case 2:
        tue.setAttribute('checked', 'checked');
        break;
    case 3:
        wed.setAttribute('checked', 'checked');
        break;
    case 4:
        thu.setAttribute('checked', 'checked');
        break;
    case 5:
        fri.setAttribute('checked', 'checked');
        break;
    case 6:
        sat.setAttribute('checked', 'checked'); 
        break;
}





