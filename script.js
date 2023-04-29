/*  
- Orientação a Objetos 
- Programação Orienta a Objetos
- Programação Procedural - 1 Código abaixo do outro
- Programaçao Funcional

- CLASSES
- FUNÇÕES / OBJETOS
-
*/

// Template
// Geralmente Primeira letra maiuscula
// - Constructor sempre que for criar uma 'pessoa' nova.
class Person {

    age = 0;

    constructor(name){
        this.name = name;
    }
}

let p1 = new Person('João') //nome
let p2 = new Person('Maria')
let p3 = new Person('Pedro')

p1.age = 20;
p2.age = 30;
p3.age = 40;

console.log(`P1 = ${p1.name} tem ${p1.age} anos`);

console.log(`P2 = ${p2.name} tem ${p2.age} anos`);

console.log(`P3 = ${p3.name} tem ${p3.age} anos`);

// - Continuar módulo!!! B7Web
// - Continuação código.