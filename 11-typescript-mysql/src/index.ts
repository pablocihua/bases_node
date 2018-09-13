import Server from './server/server';
import router from './router/router';
import MySql from './mysql/mysql';

const server = Server.init( 3000 );

server.app.use( router );

// MySql.instance;

server.start( () => {
    
    console.log('Server runnig on port 3000');
});