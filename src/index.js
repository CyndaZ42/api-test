import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service.js'

function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
}

function getElements(response) {
  if (response.main) {
    $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    clearFields();
    WeatherService.getWeather(city)
      .then(function(response) {
        getElements(response);
      });
  });
});




//
//$(document).ready(function() {
//  $('#weatherLocation').click(function() {
//    let city = $('#location').val();
//    clearFields();
//    let promise = WeatherService.getWeather(city);
//    promise.then(function(response) {
//      const body = JSON.parse(response);
//      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
//    }, function(error) {
//      $('.showErrors').text(`There was an error processing your request: ${error}`);
//    });
//  });
//});