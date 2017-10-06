// process.env.NODE_URL = 'XXX.XXX.XXX.XXX'; // defaults to '127.0.0.1' or 'localhost'
// process.env.NODE_PORT = 6085;  // defaults to 6085
process.env.MONGODB_URI = 'mongodb://<db-user>:<password>@<>.mlab.com:13505/<>';
require('mahrio').runServer( process.env, __dirname )
  .then( function(server){

    // Define User Interface through a Web View
    server.route({
      method: 'GET',
      path: '/',
      handler: function( request, reply ) {
        reply.view( 'index' );
      }
    });

    require('./routes')( server );
  });
