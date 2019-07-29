var nasakey = "jeMCP8igEqUy6SQ1VfTL79ggtOn31n5y32A5szKX"

function nasaApiRq(){

var nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasakey}`

  fetch(nasaUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      var img = document.createElement("img");
      img.src = json["url"];
      // document.body.style.backgroundImage = `url(${json["url"]})`;
      document.body.appendChild(img);
      var time = document.createElement("div");
      time.innerText = json["date"];
      document.body.appendChild(time);


    })

  // var newChild = document.createElement("nasa");
  // newchild.
}

nasaApiRq()
