// let weather = {
//   "apiKey": "e8d5af79a9320f645453ff81686d32f2",

//   fetchWeather: function (city) {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=metric&appid=" 
//       + this.apiKey
//       )
//       .then((response) => response.json())
//       .then((data) => this.displayWeather(data));
//   },
//   displayWeather: function (data) {
//     const { name } = data;
//     const { icon, description } = data.weather[0];
//     const { temp, humidity } = data.main;
//     const { speed } = data.wind;

//     console.log(name,icon,description,temp,humidity,speed);
//     document.querySelector(".city").innerText = "Weather in " + name;
//     document.querySelector(".weatherIcon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
//     document.querySelector(".description").innerText = description;
//     document.querySelector(".h1Temp").innerText = temp + "°C";
//     document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
//     document.querySelector(".wind").innerText = "Wind Speed: " + speed + "KM/H";
//     document.querySelector(".weather").classList.remove("load");
//     document.getElementsByClassName("card1").style.background = "url('https://source.unsplash.com/420x420/?" + name + "')";
//   },
//   search: function () {
//     this.fetchWeather(document.querySelector(".search-bar").value);
//   },
// };

// document.querySelector(".search button").addEventListener("click", function (){
//   weather.search();
// });

// document.querySelector(".search-bar").addEventListener("keyup", function (event) {
//   if(event.key == "Enter"){
//     weather.search();
//   }
// });

async function fetchGitHubRepos() {
  const username = 'bojadgreat';
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const repos = await response.json();
  
  const reposContainer = document.getElementById('github-repos');
  
  repos.forEach(repo => {

    
    if (repo.name === 'bojadgreat.github.io') {
      return; 
    }

    const repoCard = document.createElement('div');
    repoCard.classList.add('repo-card');
    
    const repoName = document.createElement('h3');
    repoName.textContent = repo.name;

    const repoDescription = document.createElement('p');
    repoDescription.textContent = repo.description || 'No description available';
    
    const repoLink = document.createElement('a');
    repoLink.href = repo.html_url;
    repoLink.target = '_blank';
    repoLink.textContent = 'View Repository';
    
    repoCard.appendChild(repoName);
    repoCard.appendChild(repoDescription);
    repoCard.appendChild(repoLink);
    
    reposContainer.appendChild(repoCard);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const texts = ["Programmer", "Developer", "Software Engineer"];
  let currentIndex = 0;
  let charIndex = 0;
  const typingSpeed = 100; // typing speed in milliseconds
  const erasingSpeed = 50; // erasing speed in milliseconds
  const delayBetweenTexts = 1000; // delay between texts in milliseconds

  const typingTextElement = document.getElementById("typing-text");

  function type() {
    if (charIndex < texts[currentIndex].length) {
      typingTextElement.textContent += texts[currentIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenTexts);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingTextElement.textContent = texts[currentIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      currentIndex = (currentIndex + 1) % texts.length;
      setTimeout(type, typingSpeed);
    }
  }

  setTimeout(type, delayBetweenTexts);
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.row, .padding, .landing-text,#abMe, .container');
  elements.forEach(element => {
      element.classList.add('fall-in');
  });
});
fetchGitHubRepos();