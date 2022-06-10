var APIKey = "85b081d82a8b2923ac904659cddb3896";
var city = "London, uk";
var ActualW = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var ForecastW = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
var cordW = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=57&lon=-2.15&appid=85b081d82a8b2923ac904659cddb3896"
//var cordW = "https://api.openweathermap.org/data/2.5/forecast/daily?&appid=85b081d82a8b2923ac904659cddb3896"

var Title = $('#Title')
var TempActual = $('#TempActual')
var TempMin = $('#TempMin')
var TempMax = $('#TempMax')
var iconActual = $('#iconActual')
var Wdescription = $('#Wdescription')




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
            Title.text(value['title'])
           
            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=85b081d82a8b2923ac904659cddb3896&units=imperial`
            }).then(function(data) {
               console.log(data);
               TempActual.text(`Actual Temp: ${data['main']['temp']} F`)
               TempMin.text(`Min Temp: ${data['main']['temp_min']} F`)
               TempMax.text(`Max Temp: ${data['main']['temp_max']} F`)
               console.log(data['weather'][0]['icon'])
               Wdescription.text(data['weather'][0]['description'])
               iconActual.attr("src", `http://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png`)
            });

        }
        
      
    });
