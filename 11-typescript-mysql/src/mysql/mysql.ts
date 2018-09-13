
import mysql = require('mysql');

export default class MySql {
    private static _instance: MySql;

    conexion: mysql.Connection;
    connected: boolean = false;

    constructor(){
        console.log('Class initialized')
        this.conexion = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1957',
            database: 'node_db'
        });

        this.connectDb();
    }

    public static get instance(){
        return this._instance || ( this._instance = new this() );
    }

    public static scape( id: any ){
        return this.instance.conexion.escape( id );
    }

    public static executeQuery( query: string, callback: Function ){
        this.instance.conexion.query( query, ( err, results: Object[], fields ) => {
            if( err ){
                console.log('Error in query', err );
                return callback( err );
            }

            if( results.length === 0 ){
                callback('There are not results.');
            }

            callback( null, results );
        });
    }

    private connectDb(){
        this.conexion.connect(( err: mysql.MysqlError ) => {
            if( err ){
                console.log( err.message );
                return;
            }

            this.connected = true;
            console.log('Database online!');
        });
    }

}