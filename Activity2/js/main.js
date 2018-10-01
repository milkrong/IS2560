function getWeather(zip) {
    var urlstring = "https://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid=d91d5d64cc742f2da48d0ba8b7937d53";
    $.ajax({
        type:"GET",
        url: urlstring,
        success: function(data) {
            $('.weather-output').text(data.weather[0].main)
        }
    });
}

$('button').click(function () {
    var zip = $('.my-form').val();
    getWeather(zip);
})