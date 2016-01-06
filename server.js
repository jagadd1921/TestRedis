var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({	
	port: Number(process.env.PORT || 8081 )
});
server.register(require('inert'), function () {

	server.route([
		{ method: 'GET', path: '/', handler: { file: "index.html" } },
		{ method: 'GET', path: '/load',      handler: require('./lib/load_messages').load }	  
	]);

	server.start(function () {
		console.log('Started...');
	});

});
module.exports = server;
