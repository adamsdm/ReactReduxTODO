const assert = require("assert"); 

const MarioChar = require("../src/models/mariochar");


// Describe tests
describe("Saving records", function(){

	// Create tests
	it("Saves a record to the DB", function(done){
		var char = new MarioChar({
			name: "Mario"
		});

		char.save().then(function(){
			assert(char.isNew === false);
			done();
		});

	})

 })