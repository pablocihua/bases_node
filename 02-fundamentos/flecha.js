// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => {
//     return a + b;
// }

let sumar = (a, b) => a + b;
console.log(sumar(3, 5));

// let toHello = () => 'Hola curso';
let toHello = (name) => `Hi ${ name }`;
console.log(toHello('Jose'));

let deadpool = {
    name: 'Wade',
    lastname: 'Winstong',
    power: 'Regeneration',
    getName() {
        return `${ this.name } ${ this.lastname } - power: ${ this.power }`
    }
};
console.log(deadpool.getName());