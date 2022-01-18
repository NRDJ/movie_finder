var httpRequest = new XMLHttpRequest();

httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
      var movie = JSON.parse(httpRequest.responseText);

      document.getElementById("title").innerHTML = movie.Title;

      document.getElementById("year").innerHTML = movie.Year;

      document.getElementById("actors").innerHTML = movie.Actors;

      document.getElementById("plot").innerHTML = movie.Plot;

      document.getElementById("awards").innerHTML = movie.Awards;

      document.getElementById("poster").src = movie.Poster;

    } else {
      console.log(httpRequest.statusText);
    }
  }
}

httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}

var searchMovie = function () {  
  var input = document.querySelector('input').value;
  
  if (input) {
    httpRequest.open('GET', 'https://www.omdbapi.com/?t=' + input + '&plot=short&apikey=f9f6c2d');
    httpRequest.send();
  }
}