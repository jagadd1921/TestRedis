var redisClient = require('redis-connection')();

function loadMessages (req, reply) {

		

			for(var i=0; i<100000; i++){

				  redisClient.publish(i+'', i+'');
				  
			}
		

	reply('success');
		  
}

module.exports = {
  load: loadMessages,
  redisClient: redisClient
};


