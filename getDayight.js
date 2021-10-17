// This script should return the results of a function that use data from the api to determine whether it 
// is daylight in the specified city. It should return "blue" if daylight, and "black" if night time.
var result =document.getElementById('goBttn').addEventListener('click',function(){
    axios.get('/api/location/search/?query=london').then(response=>console.log(response.data));
  });
  
  var date = new Date();
  var time = date.getHours();

  if(time < 18)
  {
      document.getElementsByTagName('body').backgroundColor='blue';
  }
  else if(time >= 18)
  {
      document.getElementsByTagName('body').backgroundColor ='black';
  }