const mongoose = require("mongoose"); 

mongoose.Promise = global.Promise;


// Connect to DB before tests run
before(function(done){
	let uri = "mongodb://adam:J3W5G5zKcV94xsuJ@cluster0-shard-00-00-j5zaf.mongodb.net:27017,cluster0-shard-00-01-j5zaf.mongodb.net:27017,cluster0-shard-00-02-j5zaf.mongodb.net:27017/TodoAPP?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"

	mongoose.connect(uri);

	var db = mongoose.connection;

	db.once('open', function(){
	    console.log("Connected to DB!");
	    done();
	}).on('error', function(error){
		console.log("Connection error: ", error);
	});
});


// Drop the characters collection before each test
beforeEach(function(done){
	// Drop the collection
	mongoose.connection.collections.mariochars.drop().then(function(){
		done();
	})
})

