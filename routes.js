
module.exports = function(app, passport){

	app.get('*', function (req, res) {
	  console.log(req.session);
	  res.sendFile(__dirname + '/index.html');
	})

	app.post('/addtodo', function (req, res) {
	    console.log(req.body);
	    
	    var todo = new Todo({
	    	title: req.body.title,
	    	description: req.body.description,
	    });

	    todo.save();

	  	res.send('POST request to homepage');
	});

	app.get('/auth/facebook', function(req, res){
		passport.authenticate('facebook', { scope : 'email' })
	});

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/',
            failureRedirect : '/sign-in'
        }));

    // route for logging out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

}