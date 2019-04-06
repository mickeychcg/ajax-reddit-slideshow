var searchTerm = '';
var counter = 0;
var display = document.getElementById("slideShow");
var imgArr = [0];
var reset = document.getElementById("reset");
var interval;


document.getElementById('submitbutton').addEventListener('click', function( e ) {
    e.preventDefault();
    // hideText();
    searchTerm = document.getElementById('searchbox').value;
    console.log(searchTerm);
    search();
});

function hideText() {
    var visibleText = document.getElementById("description");
    if (visibleText.style.display === none) {
        visibleText.style.display = "block";
    } else {
        visibleText.display = "none";
    }
}

function search () {
    fetch('http://www.reddit.com/search.json?q=' + searchTerm + '+nsfw:no')
        .then(function (data) {
            return data.json();
        })
        .then(function (results) {
            console.log(results);
            results.data.children.forEach (function (result) {
                    console.log(this);

                if  (result.data.url.includes(".jpg") ){
                    console.log(result);

                } else if (result.data.url.includes(".png") ){
                    console.log(result);

                } else { (result.data.url.includes(".jpeg") )

            };
        console.log(result);
        imgArr.push(result.data.url);
        });
        interval = setInterval(function() {
            if (counter < imgArr.length) {
                display.style.backgroundImage = "url(" + imgArr[counter] + ")";
                counter++;
            } else {
                display.style.backgroundImage = "url(" + imgArr[counter] + ")";
                counter = 0;
            }
        }, 3000);
    });
}

reset.addEventListener('click', function(e)  {
    window.clearInterval(interval);
    console.log(imgArr);
    images.length = 0;
    display.style.backgroundImage = '';
});
