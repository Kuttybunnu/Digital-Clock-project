function show_time(){
    let now=new Date();
    let hours= now.getHours();
    let minutes= now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours<10 ?"0"+hours : hours;
    minutes = minutes<10 ?"0"+minutes : minutes;
    seconds = seconds<10 ?"0"+seconds : seconds;

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let dayName = days[now.getDay()];
    let monthName = months[now.getMonth()];
    let dateNum = now.getDate();
    let year = now.getFullYear();

    let suffix = "th";
    if (dateNum === 1 || dateNum === 21 || dateNum === 31) {
        suffix = "st";
    } else if (dateNum === 2 || dateNum === 22) {
        suffix = "nd";
    } else if (dateNum === 3 || dateNum === 23) {
        suffix = "rd";
    }

    document.getElementById("time").innerHTML= hours+":"+minutes+":"+seconds;
    document.getElementById("date").innerHTML= dayName + " " + monthName + " " + dateNum + suffix + " " + year;
}
show_time();
setInterval(show_time,1000);