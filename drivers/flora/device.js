'use strict';

const FloraDevice = require('../../lib/FloraDevice.js');

class FloraDeviceStick extends FloraDevice {
	
	async _onData( data ) {
		let temperature = data.readUInt16LE(0) / 10;
		let luminance = data.readUInt32LE(3);
		let moisture = data.readUInt16BE(6);
		let fertility = data.readUInt16LE(8);
		
		this.log('Got readings', { temperature, luminance, moisture, fertility });
			
		return Promise.all([
			this.setCapabilityValue('measure_temperature', temperature),
			this.setCapabilityValue('measure_luminance', luminance),
			this.setCapabilityValue('flora_measure_moisture', moisture),
			this.setCapabilityValue('flora_measure_fertility', fertility),
		]);
	}
	
}

module.exports = FloraDeviceStick;