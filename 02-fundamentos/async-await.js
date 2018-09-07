/**
 * Async Await
 * 
 */

//  let getName = async() => {

//     return 'Pablo'
//  }

/** Esto es lo mismo que la función de arriba */

let getName = () => {
    return new Promise(( resolve, reject ) => {
        setTimeout(() => {
            resolve('Pablo')
        }, 3000 );
        // resolve('Pablo')
    });
},
hello = async ( ) => {
    let name = await getName();

    return `Hi ${ name }`;
}

// getName().then( name => console.log(name))
// .catch( e => console.log( 'Err ',e ));

hello().then( message => console.log(message))
.catch( e => console.log( 'Err ',e ));
 