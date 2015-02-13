var data = require("../public/js/data.json");

exports.addMeal= function(req, res) {

	
	//var username = '#input01').val();
	console.log("/////////////////");
	console.log(req.query.location );
		console.log("/////////////////");
	var number = data.meal.length +1;
			console.log("/////////////////");
			console.log(number);
					console.log("/////////////////");
    
	var newMeal = {
    		"name": req.query.location6,
			"time":  "9:20am",
			"day" :  "Friday",
			"year":  "2015",
			"month": "February",
			"image": "empty-plate.png",
			"mood" : "",
			"type" : req.query.location3,
			"desc" :  req.query.location4,
			"location" : req.query.location2,
			"id": number
 
}
    
   
data["meal"].push(newMeal);

	res.render('add');

}