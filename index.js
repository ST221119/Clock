
function updateClock(){
  //Get the current date
  let currentTime = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  //Extract hour, minute and seconds from the date
  let currentDate = currentTime.getDate();
  let currentMonth = months[currentTime.getMonth()];
  let currentYear = currentTime.getFullYear();
  let currentHour = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();

  //Pad 0 if minute or second is less than 10 (single digit)
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  //Choose AM/PM as per the time of the day
  let timeOfDay = (currentHour < 12) ? "AM" : "PM";

  //Convert railway clock to AM/PM clock
  currentHour = (currentHour > 12) ? currentHour-12 : currentHour;
  currentHour = (currentHour==0) ? 12 : currentHour;

    //Prepare the time string from hours, minutes and seconds
  let currentTimeStr = currentDate + " " + currentMonth + " " + currentYear + " " + currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  //Insert the time string inside the DOM
  document.getElementById('clock').innerHTML = currentTimeStr;
}
