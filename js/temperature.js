const searchCity = () => {
    const searchInput = document.getElementById('search-input');
    searchInputText = searchInput.value;
    searchInput.value='';
    // console.log(searchInputText);
    const apiKey = '6122d6fca01b727f619d0b991efffdd6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputText}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResul(data));
    // console.log(data);
};

const displaySearchResul = countries => {
    console.log(countries);
    const data = countries.main;
    
    const weatherPic = document.getElementById('weather-pic');
    weatherPic.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${countries.weather[0].icon}@2x.png" alt="">
        <h1>${countries.name}</h1>
        <h3><span>${data.temp}</span>&deg;C</h3>
        <h1 class="lead">${countries.weather[0].main}</h1>
    `;
  
        
    
}





