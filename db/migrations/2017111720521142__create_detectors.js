'use strict';

const Nodal = require('nodal');

class CreateDetectors extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017111720521142;
  }

  up() {

    return [
      this.createTable("detectors", [{"name":"history","type":"json"},{"name":"parameters","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("detectors")
    ];

  }

}

module.exports = CreateDetectors;
