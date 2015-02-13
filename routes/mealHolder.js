// RECEIVING USERNAME & PASSWORD DATA
var data = require('../public/js/data.json');

exports.view = function(req, res){
	console.log(req.params.id);
	var index = req.params.id -1;
	console.log(data.meal[index]);

	res.render('mealHolder', data.meal[index]);
	}
