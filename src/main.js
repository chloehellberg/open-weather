import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Conversion from './../src/scripts.js';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");
    
    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      console.log(this.status);
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
      
    };

    request.open("GET", url, true);
    request.send();
    
    function getElements(response) {
      const conversion = new Conversion(response.main.temp, response.visibility);
      conversion.calculateTemp();
      conversion.calculateVisibility();
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      $('.showFahrenheit').text(`The temperature in Fahrenheit is ${conversion.calculateTempToFahrenheit} degrees.`);
      $('.showWindSpeed').text(`The wind speed is ${response.wind.speed} mph`);
      $('.showWindGust').text(`The wind gust is ${response.wind.gust} mph`);
      $('.showVisibility').text(`The current visibility is ${response.visibility} meters and ${conversion.calculateToMiles} miles.`);
      $('.showClouds').text(`The current cloud cover is ${response.clouds.all}%`);
    }
  });
}); 