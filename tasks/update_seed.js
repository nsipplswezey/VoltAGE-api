'use strict';
const fs = require('fs');
const Nodal = require('nodal');

class UpdateSeedTask {

  exec(args, callback) {

    console.log('UpdateSeed task executed');

		fs.readFile(__dirname + '/../VoltAGE_1_predictor.txt', 'utf8', (err, model) => {
		  if(err) throw err;

			console.log(model)

			fs.readFile(__dirname + '/../config/seed.json', 'utf8', (err, seed) => {
				console.log(seed);

				let seedObject = JSON.parse(seed);

				seedObject.development.Detector = [
					{
					"history": {},
					"parameters":model
					}
				]
				seedObject.production.Detector = [
					{
					"history": {},
					"parameters":model
					}
				]
				console.log(seedObject.development.Detector[0])

				fs.writeFile(__dirname + '/../config/seed.json',JSON.stringify(seedObject,null,2), 'utf8', ((err)=>{
				  console.log("seed written")
				  console.log(arguments[0])
				  console.log(arguments[1])
				}))
			
			});


		});

    //callback();

  }

}

module.exports = UpdateSeedTask;
