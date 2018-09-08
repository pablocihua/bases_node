// Requireds
const fs = require('fs');
const colors = require('colors');

module.exports = {
    multiply: ( base, limit = 10 ) => {
        return new Promise(( resolve, reject ) => {
            if( Number( base )){
                let data = '';
                for( let i = 1; i <= limit; i ++ ){
                    let result = i * base;
                    data += `Base ${base} * ${ i } = ${ result }\n`;
                }
                
                /** También funciona con el buffer */
                // const buffer = new Uint8Array(Buffer.from( data ));
                fs.writeFile(`tables/table-${ base }-al-${ limit }-multiply.txt`, data, ( err ) => {
                    if( err )
                        reject( err );
                    else
                        resolve(`table-${ base }-al-${ limit }-multiply.txt!`);
                });
            } else {
                reject(`The value typed '${ base }' it is not a number`);
            }
        });
    },
    showTable: ( base, limit = 10 ) => {
        console.log('========================'.green );
        console.log(`=  Table of ${ base }  =`.cyan );
        console.log('========================'.green) ;
        for( let i = 1; i <= limit; i ++ ){
            let result = i * base;
            console.log(`Base ${base} * ${ i } = ${ result }`);
        }
    }
}