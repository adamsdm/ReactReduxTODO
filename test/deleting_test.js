const assert = require("assert"); 

const MarioChar = require("../src/models/mariochar");


// Describe tests
describe("Deleting records", function(){

	var char;

	beforeEach(function(done){

		char = new MarioChar({
			name: "Mario"
		});

		char.save().then(function(){
			done();
		});

	})

	it("Finds and deletes a record from the DB ", function(done){
		MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
			MarioChar.findOne({name: 'Mario'}).then(function(result){
				assert(result === null);
				done();
			})
		})
	})

 })