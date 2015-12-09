$(function() {
  var resultHandler = function(data) {
    $(".result-table").show();
	$(".result").html(
		$( "#weatherTemplate" ).render( data.list )
	);
  }
  
  $(".search")
    .on("click", function() {
        var cityName = $(".city").val(),
            url = 'http://api.openweathermap.org/data/2.5/forecast?q='+ cityName + '&units=metric&lang=ru&appid=2de143494c0b295cca9337e1e96b00e0';
		$.ajax({
            url: url,
            type: 'GET',
            dataType: 'json'
        }).done(resultHandler)                
    })
}) 