//ALTERNATE WAY TO FETCH DATA 

// let weather = {
//   apiKey: "cd4038618a1b9dce9016ed90c609c9cd", 
//   fetchWeather: function(city){
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
//     )
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//   },
//   displayWeather: function(data){

//   }
// }
// weather.fetchWeather(`nalagarh`); 



const apiKey = "cd4038618a1b9dce9016ed90c609c9cd";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
  const response = await fetch(apiURL+ city + `&appid=${apiKey}`);

  if(response.status == 404){
    alert("Enter a valid city 🙃");
    document.querySelector(".weather").style.display = none;
  }

  var data = await response.json();

  document.querySelector(".city-span").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  document.querySelector(".description").innerHTML = data.weather[0].description;
  document.querySelector(".humidity-span").innerHTML = data.main.humidity;
  document.querySelector(".wind-span").innerHTML = data.wind.speed;
  document.querySelector(".weather").style.display = "block";
  document.body.style.backgroundImage = `url(https://source.unsplash.com/random/900×700/?${city})`;
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})
