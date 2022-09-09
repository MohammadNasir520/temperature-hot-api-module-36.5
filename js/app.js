//  do not api keys like this in js file
const API_KYE = `96d07588ab43f863fc717d0ed0f0ddb9`;
const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KYE}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
};
const displayTemperature = data => {
    setInnerText('temperature', data.main.temp)
    setInnerText('condition', data.weather[0].main)
};
// set inner text fuction
const setInnerText = (id, text) => {
    const temperature = document.getElementById(id)
    temperature.innerText = text;
}
document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;

    document.getElementById('city').innerText = city
    loadTemperature(city)
})
loadTemperature('dhaka')