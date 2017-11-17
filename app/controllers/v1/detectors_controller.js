'use strict';

const Nodal = require('nodal');
const Detector = Nodal.require('app/models/detector.js');

class V1DetectorsController extends Nodal.Controller {

  index() {

    Detector.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Detector.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Detector.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Detector.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Detector.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1DetectorsController;
