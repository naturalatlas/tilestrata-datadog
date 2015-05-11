var StatsD = require('node-dogstatsd').StatsD;

module.exports = function(options) {
	options = options || {};

	var datadog = new StatsD();
	var datadog_ns = options.ns || 'tilestrata.';
	if (!/\.$/.test(datadog_ns)) datadog_ns += '.';

	if (datadog.socket) {
		datadog.socket.on('error', function(exception) {
			return console.error('Error event in socket.send() to datadog: ' + exception);
		});
	}

	return [
		{
			reqhook: function(server, tile, req, res, callback) {
				tile._timeStart = Date.now();
				callback();
			}
		},
		{
			reshook: function(server, tile, req, res, result, callback) {
				var dur = Date.now() - tile._timeStart;
				var tags = [
					'type:'+result.headers['Content-Type'],
					'cachehit:'+(result.headers['X-TileStrata-CacheHit']==='1'?'true':'false'),
					'layer:'+tile.layer,
					'method:'+tile.method,
					'filename:'+tile.filename,
					'status:'+result.status,
					'z:'+tile.z
				];
				datadog.timing(datadog_ns+'response', dur, tags);
				callback();
			}
		}
	];
};
