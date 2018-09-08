// setTimeout(() => {
//     console.log('Hi callback')
// }, 300);

let getuserById = (id, callback) => {
    let user = {
        name: 'Pablo',
        id
    }

    if (id === 20) {
        callback(`The user with id ${ id } does not exist in DB.`);
    } else {
        callback(null, user);
    }
};

getuserById(2, (err, user) => {
    if (err) {
        return console.log(err);
    }
    console.log('Db user ', user);
});