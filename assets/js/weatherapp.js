var APIKey = "5b081d82a8b2923ac904659cddb3896";
var city = "London, uk";
var ActualW = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8" + APIKey;
var ForecastW = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=8" + APIKey;

    $.ajax({
        url: ForecastW
    }).then(function(data) {
       //$('.greeting-id').append(data.id);
       //$('.greeting-content').append(data.content);
       console.log(data);
    });
