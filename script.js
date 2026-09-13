const cityInput = document.getElementById("city-input")
const searchBtn = document.getElementById("search-btn")
const temperature = document.getElementById("temperature")
const cityName = document.getElementById("city-name")
const weatherDesc = document.getElementById("weather-desc")

searchBtn.addEventListener("click" , async function(){

   const city = cityInput.value 
    const response = await fetch(`https://wttr.in/${city}?format=j1`);
    cityName.textContent = city
    
    const data =  await response.json();
    temperature.textContent = data.current_condition[0].temp_C + "°C " 
    weatherDesc.textContent =  data.current_condition[0].weatherDesc[0].value;
    console.log(data)
})