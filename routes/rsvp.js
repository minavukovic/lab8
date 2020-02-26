var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};

exports.addRSVP = function(request, response) {
	var rsvpEmail = request.body.rsvpEmail; 

	console.log(rsvpEmail); // print at post request

	data.rsvp.push(rsvpEmail); // add to current data

	// send back data
	response.send(rsvpEmail);
};