let weather = {
  "apiKey": "e8d5af79a9320f645453ff81686d32f2",

  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=metric&appid=" 
      + this.apiKey
      )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    console.log(name,icon,description,temp,humidity,speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".weatherIcon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".h1Temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "KM/H";
    document.querySelector(".weather").classList.remove("load");
    document.getElementsByClassName("card1").style.background = "url('https://source.unsplash.com/420x420/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function (){
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if(event.key == "Enter"){
    weather.search();
  }
});

//fix changing background