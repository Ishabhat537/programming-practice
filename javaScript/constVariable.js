// console.log(x); //reference error
const x=10;
// x=15; //typeerror
// const x=10; //compile err
// console.log(x);

// const y; // syntaxerror-declartions must be initialized

const myobj={key:"value"};
myobj.key="value2"; //const only prevents reassignment not mutations
console.log(myobj.key);

if(true){
    const z=10;
}
console.log(z); //referenceerror as const is block scoped