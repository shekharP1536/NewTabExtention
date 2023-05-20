// /wallpaper 
//


var on = document.getElementById("fs");
on.addEventListener("input", change);
on.addEventListener("input", storage);
document.getElementById("imgA").addEventListener("click", function () {
  main.style.backgroundImage = "url('tajA.jpg')";
  vass = String("customa");
  localStorage.mode = vass;
});
document.getElementById("imgB").addEventListener("click", function () {
  main.style.backgroundImage = "url('ww.png')";
  vass = String("customb");
  localStorage.mode = vass;
});
document.getElementById("imgC").addEventListener("click", function () {
  main.style.backgroundImage = "url('imgA.png')";
  vass = String("customc");
  localStorage.mode = vass;
});
document.getElementById("imgD").addEventListener("click", function () {
  main.style.backgroundImage = "url('moon.jpg')";
  vass = String("customd");
  localStorage.mode = vass;
});
document.getElementById("imgE").addEventListener("click", function () {
  main.style.backgroundImage = "url('early.jpg')";
  vass = String("custome");
  localStorage.mode = vass;
});
document.getElementById("imgF").addEventListener("click", function () {
  main.style.backgroundImage = "url('taj.jpg')";
  vass = String("customf");
  localStorage.mode = vass;
});
function change() {
  main.style.backgroundImage = "";
  main.classList.toggle("dark");
}
// 
function storage() {
  if (on.checked) {
    ver = String("dark");
    // 
    localStorage.mode = ver;
  } else {
    varr = String("light");
    // 
    localStorage.mode = varr;
  }
}
document.addEventListener("DOMContentLoaded", check)
function check() {
  var loc = localStorage.mode;
  if (loc == "dark") {
    on.checked = "true";
    main.className += " dark"
    console.log("dark mode");
  }
  if (loc == "customa") {
    main.style.backgroundImage = "url('tajA.jpg')";
    // main.style.backgroundPosition = "top";
  } if (loc == "customb") {
    main.style.backgroundImage = "url('ww.png')";
  }
  if (loc == "customc") {
    main.style.backgroundImage = "url('imgA.png')";
  }
  if (loc == "customd") {
    main.style.backgroundImage = "url('moon.jpg')";
  }
  if (loc == "custome") {
    main.style.backgroundImage = "url('early.jpg')";
  }
  if (loc == "customf") {
    console.log("f");
    main.style.backgroundImage = "url('taj.jpg')";
  } else {
    console.log("light mode");
  }
}