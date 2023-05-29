var inputform = document.getElementById("searchform");
var recentsearch = JSON.parse(localStorage.getItem('recentsearches')) || [];
localStorage.setItem('recentsearches', JSON.stringify(recentsearch));

var lastFive = recentsearch.slice(-10);
displaysearches(lastFive);
// displaysearches(searchesArray)
inputform.addEventListener("submit", addsearch);

function addsearch(e) {
    e.preventDefault();
    var input = document.getElementById("myInput").value;
    console.log(input);

    if (input) {
        var EngineValue = localStorage.getItem("Engine");
        var link = localStorage.getItem("search-engine");
        link = link + "?q=" + input;

        const searches = {
            word: input,
            link: link,
            engine: EngineValue
        }

        var recentsearch = JSON.parse(localStorage.getItem('recentsearches')) || [];
        recentsearch.push(searches);

        localStorage.setItem('recentsearches', JSON.stringify(recentsearch));

        var lastFive = recentsearch.slice(-10);
        displaysearches(lastFive);
    }
}

function displaysearches(searchesArray) {
    var main = document.getElementById("recentsearchdiv");
    main.innerHTML = '';

    for (var i = searchesArray.length - 1; i >= 0; i--) {
        var searches = searchesArray[i];
        const div = document.createElement("div");
        div.classList.add("searches");

        var icon = document.createElement("i");
        icon.className = "fa fa-history";
        icon.style.paddingRight = "10px";

        const spanword = document.createElement("span");
        spanword.classList.add("searchword");
        spanword.innerText = searches.word;

        const spanengine = document.createElement("span");
        spanengine.classList.add("wordsearchengine");
        spanengine.innerText = searches.engine;

        div.appendChild(icon);
        div.appendChild(spanword);
        div.appendChild(spanengine);
        main.appendChild(div);

        // Create a closure to capture the search item's link
        (function (link) {
            // Add click event listener to each search item
            div.addEventListener("click", function () {
                window.location.href = link;
            });
        })(searches.link);
    }
}

// setInterval(() => {
//     var star = document.getElementById("stars");
//     try {
//         star.remove();
//     } catch (error) {
        
//     }
//     console.log("clear");
//     var newstars = document.createElement("div");
//     newstars.id ="stars";
//     document.body.appendChild(newstars);
// }, 10000);