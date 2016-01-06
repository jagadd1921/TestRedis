var redisClient = require('redis-connection')();

function loadMessages (req, reply) {

		for(var j=0; j< 99999999999999; j++){	

			for(var i=0; i<10000000; i++){

				  redisClient.publish(i+'', 'From channel::'+i);
				  
			}
		}	

	reply('success');
		  
}

module.exports = {
  load: loadMessages,
  redisClient: redisClient
};


