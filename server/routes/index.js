var mongoose = require('mongoose');
var schema = mongoose.Schema({
  key: {type: String, require: true},
  value: {type: String, required: true},
  created: {type: Date, default: Date.now }
});
var Monitor = mongoose.model('Monitor', schema);

module.exports = function( server ) {

  // Define an API endpoint
  server.route({
    method: 'POST',
    path: '/api/monitor/{val*}',
    handler: function( request, reply ) {
      // OUTPUT VARIOUS DATA RECEIVED
      console.log( 'REQUEST.PARAMS: ' );
      console.log( request.params );
      console.log( 'REQUEST.QUERY: ' );
      console.log( request.query );
      console.log( 'REQUEST.PAYLOAD: ' );
      console.log( request.payload );

      Monitor.create(request.payload, function(err, monitor){
        reply(monitor);
      });
    }
  });
};