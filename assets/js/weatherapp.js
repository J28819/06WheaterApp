var APIKey = "85b081d82a8b2923ac904659cddb3896";
var city = "London, uk";
var ActualW = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var ForecastW = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
var cordW = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=57&lon=-2.15&appid=85b081d82a8b2923ac904659cddb3896"
//var cordW = "https://api.openweathermap.org/data/2.5/forecast/daily?&appid=85b081d82a8b2923ac904659cddb3896"





    var $results = document.querySelector('.results');
    //var appendToResult = $results.insertAdjacentHTML.bind($results, 'afterend');
    var appendToResult

//Teleport API Autocomplete
    TeleportAutocomplete.init('.my-input').on('change', function(value) {
        //appendToResult = JSON.stringify(value, null, 2)
        appendToResult = value
        if (value !== null){
            console.log(value)
            var lat = value['latitude']
            var long = value['longitude']
            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=85b081d82a8b2923ac904659cddb3896`
            }).then(function(data) {
               //$('.greeting-id').append(data.id);
               //$('.greeting-content').append(data.content);
               console.log(data);
            });

        }
        
      
    });
