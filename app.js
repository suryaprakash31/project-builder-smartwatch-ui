var date=new Date();
var dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
document.querySelector("#upper-date").textContent=date.toLocaleString().split(",")[0];

setInterval(
    function(){
        document.querySelector("#middle-time").textContent=new Date().toTimeString().split(" ")[0]
    },1000
)

document.querySelector("#day").textContent=dayNames[date.getDay()]