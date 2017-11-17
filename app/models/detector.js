'use strict';

const Nodal = require('nodal');

class Detector extends Nodal.Model {}

Detector.setDatabase(Nodal.require('db/main.js'));
Detector.setSchema(Nodal.my.Schema.models.Detector);

module.exports = Detector;
