let name = 'Deadpool';
let real = 'Real';

console.log(name + ' ' + real);

console.log(`${ name } ${ real }`);

let nameFull = name + ' ' + real;
let nameTemplate = `${ name } ${ real }`;

console.log(nameFull === nameTemplate);

function getName() {
    return `${name} ${real}`;
}
console.log(`The name is: ${getName()}`);