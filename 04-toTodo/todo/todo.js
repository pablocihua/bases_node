const fs = require('fs');

let listTodo = [];

module.exports = {

    create: ( description ) => {
        loadDb();
        let todo = {
            description,
            completed: false
        }

        listTodo.push( todo );

        saveDb();

        return todo;
    },

    list: ( completed = null ) => {
        let type = ( completed === 'false') ? false : true;
        loadDb();
        let filterList = listTodo.filter( task => task.completed === type );

        if( listTodo.length === filterList.length ){
            return listTodo;
        } else {
            return filterList;
        }
    },

    update: ( description, completed = true ) => {
        loadDb();

        let index = listTodo.findIndex( task => task.description === description );

        if( index >= 0 ){
            listTodo[ index ].completed = Boolean( completed );
            saveDb();
            return true;
        } else {
            return false;
        }
    },

    delete: ( description, completed = false ) => {
        loadDb();

        let newList = listTodo.filter( task => task.description !== description );
        if( listTodo.length === newList.length ){
            return false;
        } else {
            listTodo = newList;
            saveDb();
            return true;
        }
        // let searching = [ description ],
        //     deleted = [];

        // for( let i = listTodo.length -1; i >= 0; i -- ){
        //     let task = listTodo[ i ];
        //     if( searching.indexOf( task.description ) !== -1 ){
        //         listTodo.splice( i, 1 );
        //     } else {
        //         deleted.push( listTodo[ i ]);
        //     }
        // }

        // saveDb();

        // return delete;
    }

}

let saveDb = () => {
    let data = JSON.stringify( listTodo );
    return new Promise(( resolve, reject ) => {
        fs.writeFile(`db/data.json`, data, ( err ) => {
            if( err ){
                reject( err );
            } else {
                resolve(`The data was solved`);
            }
        });
    });
},

loadDb = () => {
    try {
        listTodo = require('../db/data.json');
        // console.log( listTodo )
    } catch (error) {
        listTodo = [];
    }
}