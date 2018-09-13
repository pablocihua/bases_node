"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySql {
    constructor() {
        this.connected = false;
        console.log('Class initialized');
        this.conexion = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1957',
            database: 'node_db'
        });
        this.connectDb();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static scape(id) {
        return this.instance.conexion.escape(id);
    }
    static executeQuery(query, callback) {
        this.instance.conexion.query(query, (err, results, fields) => {
            if (err) {
                console.log('Error in query', err);
                return callback(err);
            }
            if (results.length === 0) {
                callback('There are not results.');
            }
            callback(null, results);
        });
    }
    connectDb() {
        this.conexion.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.connected = true;
            console.log('Database online!');
        });
    }
}
exports.default = MySql;
