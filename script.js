
var main = document.getElementById('container');
function updateClock() {

  // Get the current time, day , month and year
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var day = now.getDay();
  var date = now.getDate();
  var month = now.getMonth();
  var year = now.getFullYear();

  // store day and month name in an array
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // format date and time
    hours = hours % 12 || 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    date = date < 10 ? '0' + date : date;

    // display date and time
    var period = hours < 12 ? 'AM' : 'PM';
    document.getElementById("s").innerHTML = hours ;
    document.getElementById("m").innerHTML =  minutes;
    document.getElementById("h").innerHTML = seconds;
    // dateTime.innerHTML = dayNames[day] + ', ' + monthNames[month] + ' ' + date + ', ' + year;
}

updateClock();
setInterval(updateClock, 1000);





/////
//**************************************************************************** */
//wallpaper 

// var on = document.getElementById("fs");
// on.addEventListener("input", change);
// on.addEventListener("input", storage);
// document.getElementById("imgA").addEventListener("click", function(){
//   main.style.backgroundImage = "url('tajA.jpg')";
//   // document.body.style.backgroundPosition = "top";

//   vass = String("custom");
//   localStorage.mode = vass;
// });
// function change(){
//   main.style.backgroundImage = "";
//   main.classList.toggle("dark");
// }

// function storage(){
//   if(on.checked){
//     ver = String("dark");
    
//     localStorage.mode = ver;
//   }else{
//     varr = String("light");

//     localStorage.mode = varr; 
//   }
// }
// document.addEventListener("DOMContentLoaded" , check)
// function check(){
//   if (localStorage.mode =="dark") {
//     on.checked = "true";
//     main.className += " dark"
//     console.log("dark mode");
//   }if (localStorage.mode =="custom") {
//     main.style.backgroundImage = "url('tajA.jpg')";
//     // main.style.backgroundPosition = "top";
//   } else {
//     console.log("light mode");
//   }
// }

// Get the select element
var select = document.getElementById("search-engine");

// Add an event listener for the change event
select.addEventListener("change", function() {
  // Store the selected value in local storage
  var searchEngine = select.value;
  localStorage.setItem("search-engine", searchEngine);
});

// Add an event listener for the load event
window.addEventListener("load", function() {
  // Retrieve the stored value from local storage
  var searchEngine = localStorage.getItem("search-engine");
  if (searchEngine == null) {
    localStorage.setItem("search-engine", "https://www.google.com/search");
    var searchEngine = localStorage.getItem("search-engine");
    select.select[0];
  }if (searchEngine ="https://www.bing.com/search") {
    select.select[1];
  } else {
    
  }

});

// Get the form element
var form = document.querySelector("form");

// Add an event listener for the submit event
form.addEventListener("submit", function(event) {
  // Prevent the default form action
  event.preventDefault();

  // Get the selected search engine URL from local storage
  var searchEngine = localStorage.getItem("search-engine");

  // Get the input value from the text box
  var input = document.getElementById("myInput").value;
  // Redirect to the selected URL with the query parameter
  window.location.href = searchEngine + "?q=" + input;
});

document.getElementById("refresh_joke").addEventListener('click',joke);
function joke(){
  var jokeElement = document.getElementById("jokep");
  fetch("https://icanhazdadjoke.com/slack")
  .then(data => data.json())
  .then(jokedata => {
      var joketext = jokedata.attachments[0].text;

      console.log(joketext);
      console.log("jokefun");
  
      jokeElement.innerHTML = joketext;});
  
}
function openNav() {
  document.getElementById("mySidenav").classList.toggle("sidenavv");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.getElementById('closeNav').addEventListener("click",openNav);
