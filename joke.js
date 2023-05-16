document.getElementById('DropdownAjoke').addEventListener("mouseover",getjokes);
function getjokes(){
    var ntt = document.getElementById('jokep').innerHTML;
  if (ntt == "") {
    var jokeElement = document.getElementById("jokep");
    jokeElement.innerHTML = ("Loading..")
    console.log("here");
            fetch("https://icanhazdadjoke.com/slack")
.then(data => data.json())
.then(jokedata => {
    var joketext = jokedata.attachments[0].text;
    console.log(joketext)
    jokeElement.innerHTML = joketext;});

        }

    }

// news fetching function

document.getElementById('dropdownnews').addEventListener("mouseover" , newss);
var news = document.getElementById("tab_1");
function newss(){
var ctt = document.getElementById('tab_1').innerHTML;

    if (ctt == "") {
        news.innerHTML = ('<img class="news_loader" src="load.gif"/>');
        fetch("https://inshorts.deta.dev/news?category=world")
        .then(data => data.json())
        .then(jokedata => {
            for (let i = 0; i < 25; i++)
            {
                if (i < 1) {
                    news.innerHTML = "";
                    console.log(i);
                    console.log("fetched news")
                    
                }
                 console.log(i);
                var content = jokedata.data[i].content;
                var author = jokedata.data[i].author;
                var date = jokedata.data[i].date;
                var time = jokedata.data[i].time;
                var imageUrl = jokedata.data[i].imageUrl;
                var more = jokedata.data[i].readMoreUrl;
                var title = jokedata.data[i].title;
            news.innerHTML += "<div class='news_temp'><h4 class='news_title'>" 
            + title + "</h4>" + "<img class='new_img' align='middle' src='" 
            + imageUrl + "' /><br><span class='date'>Date: " 
            + date +"</span> <div class='content'>" 
            + content + "</div><br><span class='author'>-by " 
            + author + "</span>" + "<br> <a target='_blank' href='" 
            + more + "'>Read more...</a></div>";
            }
            
        
        });
        console.log("ok")
    }


};
///
//     quoteElement.innerHTML = quotetext;});



////
const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document
            .querySelector(tab.dataset.tabValue);

        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active')
        })
        target.classList.add('active');
    })
});
