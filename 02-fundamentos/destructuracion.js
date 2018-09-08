let deadpool = {
    name: 'Wade',
    lastname: 'Winstong',
    power: 'Regeneration',
    getName: function() {
        return `${ this.name } ${ this.lastname } - power: ${ this.power }`
    }
};
console.log(deadpool.getName());

let { name: firstname, lastname, power } = deadpool;
console.log(firstname, lastname, power);