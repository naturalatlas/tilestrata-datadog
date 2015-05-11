var TileServer = require('tilestrata').TileServer;
var TileRequest = require('tilestrata').TileRequest;
var datadog = require('../index.js');
var assert = require('chai').assert;

describe('TileStrata "datadog" plugin', function() {
	it('should export a request hook', function() {
		var iface = datadog();
		assert.isFunction(iface[0].reqhook);
	});
	it('should export a response hook', function() {
		var iface = datadog();
		assert.isFunction(iface[1].reshook);
	});
});
