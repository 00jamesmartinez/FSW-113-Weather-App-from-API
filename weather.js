// import the convertTemp.js and getDaylight.js scripts with their default export
import {convertTemp} from '../scripts/convertTemp';
import {getDaylight} from '../scripts/getDayight';
// declare any variables needed
var temp;
var conditions;
var humidity;
// create an event listener for the click of the goBttn that calls a function to fetch the weather data

// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        

var result =document.getElementById('goBttn').addEventListener('click',function(){
  axios.get('/api/location/search/?query=london').then(response=>console.log(response.data));
});




// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data
async function getCurrentWeather() {
    let prom = new Promise(function(resolve){
        let request = new XMLHttpRequest();
        request.open('GET','/api/location/search/?query=london');
        request.onload = function(){
            if(request.status === 200)
            {
                resolve(request.response);
            }
            else {
                 resolve("Error message");
            }
            request.send();
        }
    });
    document.getElementById('goBttn').innerHTML= await prom;
}




// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city

function changeColor()
{
    temp = document.getElementById('tempData').innerHTML = result.temperature;
    conditions = document.getElementById('conditionsData').innerHTML = result.conditions;
    humidity = document.getElementById('humidData').innerHTML = result.humidity;

    var date = new Date();
    var time = date.getHours();
    if(time < 18){
        document.getElementsByTagName('body').style.backgroundColor='blue';
    }
    else 
    document.getElementsByTagName('body').style.backgroundColor = 'white';
}