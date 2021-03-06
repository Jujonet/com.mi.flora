'use strict';

const Homey = require('homey');
const FloraDriver = require('../../lib/FloraDriver.js');

class FloraDriverStick extends FloraDriver {
	
	onInit() {
		this.setLocalName('Flower care');
		this.setVisibleName('Mi Flora Sensor');
		Homey.app.registerLocalName( this._localName );
	}
	
}

module.exports = FloraDriverStick;