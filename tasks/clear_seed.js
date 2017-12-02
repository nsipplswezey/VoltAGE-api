'use strict';
const fs = require('fs');
const Nodal = require('nodal');

class UpdateSeedTask {

  exec(args, callback) {

    console.log('Seed before clear');

    let seed = fs.readFileSync(__dirname + '/../config/seed.json', 'utf8')

    console.log(seed)

    //let seedObject = JSON.parse(seed);
    let seedObject = {};

	seedObject.development = { Detector : [] }
	seedObject.test = { Detector : [] }
	seedObject.production = { Detector : [] }
	console.log('Seed after clear')
	console.log(seedObject)
	console.log(JSON.stringify(seedObject,null,2))
    fs.writeFileSync(__dirname + '/../config/seed.json',JSON.stringify(seedObject,null,2), 'utf8') 
  }
		
  //callback();

}

module.exports = UpdateSeedTask;
