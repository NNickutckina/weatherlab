var isCityNameIncorrect = function(name) {
	return (name === "" || name.length < 2);
};

var isServerAnswerIncorrect = function(data) {
	return (data === "" || data.cod === "404");
};