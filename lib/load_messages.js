var redisClient = require('redis-connection')();

function loadMessages (req, reply) {

		

			for(var i=0; i<5000; i++){

				  redisClient.publish(i+'', 'From channel::'+i);
				  
			}
		

	reply('success');
		  
}

module.exports = {
  load: loadMessages,
  redisClient: redisClient
};


