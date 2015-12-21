var showTable = function() {
	$(".result-table").show();
};

var hideTable = function() {
	$(".result-table").hide();
};

var renderTable = function(weatherList) {
	$(".result").html(
		$( "#weatherTemplate" ).render( weatherList )
	);
};

$(function() {
  var resultHandler = function(data) {
	if (isServerAnswerIncorrect(data)) {
		alert("Server is crazy!");
		return;
	}
	showTable();
	renderTable(data.list);
  };
  
  $(".search")
    .on("click", function() {
		hideTable();
        var cityName = $(".city").val();
		if (isCityNameIncorrect(cityName)) {
			alert("Try again, type some more letters!");
			return;
		}
		
        var url = 'http://api.openweathermap.org/data/2.5/forecast?q='+ cityName + '&units=metric&lang=ru&appid=2de143494c0b295cca9337e1e96b00e0';
		$.ajax({
            url: url,
            type: 'GET',
            dataType: 'json'
        }).done(resultHandler);                
    });
});