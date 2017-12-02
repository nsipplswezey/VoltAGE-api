'use strict';
const fs = require('fs');
const Nodal = require('nodal');

class UpdateSeedTask {

  exec(args, callback) {

    console.log('Executing update seed');

	let paths = ['/../VoltAGE_1_predictor.txt','/../VoltAGE_2_predictor.txt']

	paths.forEach((path,index,collection) => {

      let model = fs.readFileSync(__dirname + path, 'utf8')

      let seed = fs.readFileSync(__dirname + '/../config/seed.json', 'utf8')

      let seedObject = JSON.parse(seed)

	  let predictor = {}
	  predictor.history = {} 
	  predictor.parameters = model 
      
	  seedObject.development.Detector.push(predictor)
      seedObject.production.Detector.push(predictor)

	  try {
	    let seedString = JSON.stringify(seedObject,null,2)
		console.log(seedString)
		console.log(seedObject)
        fs.writeFileSync(__dirname + '/../config/seed.json', seedString, 'utf8') 
        console.log('Seed updated');
	  } catch(e) {
	    console.error(e)
	  }
		
	})
    //callback();

  }

}

module.exports = UpdateSeedTask;
