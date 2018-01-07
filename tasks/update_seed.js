'use strict';
const fs = require('fs');
const Nodal = require('nodal');

class UpdateSeedTask {

  exec(args, callback) {

    console.log('Executing update seed');

    //Get file names
	let fileNames = fs.readdirSync(__dirname + '/../predictors')
    console.log('Adding ' + fileNames + " to seed.")

    //Read each file, read the seed, create predictor seed data object, add to seed
	fileNames.forEach((name,index,collection) => {

      //Read each file
	  let path = __dirname + '/../predictors/' + name 
      let model = fs.readFileSync(path, 'utf8')

      //Read the seed.json and parse it into an object 
	  let seed = fs.readFileSync(__dirname + '/../config/seed.json', 'utf8')
      let seedObject = JSON.parse(seed)

      //Create a predictor seed data object
	  let predictor = {}
	  predictor.history = {} 
	  predictor.parameters = model 
      
	  //Add it to the seed
	  seedObject.development.Detector.push(predictor)
      seedObject.production.Detector.push(predictor)

      //Stringify and write the seed
	  let seedString = JSON.stringify(seedObject,null,2)
      console.log('Current seed object shape')
      console.log(seedObject)
      fs.writeFileSync(__dirname + '/../config/seed.json', seedString, 'utf8') 
      console.log('Seed updated');
		
	})
    //callback();

  }

}

module.exports = UpdateSeedTask;
