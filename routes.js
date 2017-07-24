
const Todo = require("./src/models/todo");

module.exports = function(app, passport){

    app.get('/auth/facebook', function(req, res){
        console.log("Facebook");
        passport.authenticate('facebook', { scope : 'email' })
    });

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback', function(){
        passport.authenticate('facebook', {
            successRedirect : '/',
            failureRedirect : '/sign-in'
        })}
    );
    
    app.get('/get/todos', function(req, res) {

        console.log(req.query);

      Todo.find({}, function(err, users) {
        var userMap = {};

        users.forEach(function(user) {
          userMap[user._id] = user;
        });

        res.send(userMap);  
      });
    });

    // route for logging out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
	app.get('*', function (req, res) {
	  res.sendFile(__dirname + '/views/index.html');
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

	

}