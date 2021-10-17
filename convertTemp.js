// This script should return the results of a function that converts the temperature provided by the api (Kelvin).
// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade.
<script src="https://cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.6/jstz.min.js"></script>


var city = document.getElementById('city').value;


var result =document.getElementById('goBttn').addEventListener('click',function(){
    axios.get('/api/location/search/?query=city').then(response=>console.log(response.data));
  });

  var country = axios.get('http://ipinfo.io')
  .then(respone => respone.data);
  var temp = result.temperature;

  if(country.city === city && country.country === 'USA') 
  {
      let tempFahrenheit = parseFloat(temp);
      return ((tempFahrenheit -273.15)*1.8)+32;

  }

 else if(country.city === city && country.country !== 'USA')
 {
    return temp - 273.15;
 }
