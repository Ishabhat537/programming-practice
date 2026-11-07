// const p1={
//     fname:"isha",
//     lname:"bhat",
//     getFullName(){
//         return `${this.fname} ${this.lname}`;
//     }
// }

// // const p2=Object.create(p1);
// //or
// const p2={
//     __proto__:p1
// }

// console.log(p1);
// console.log(p2.getFullName());

// const p1={
//     xpi:"i am p1"
// }
// const p2={
//     xp2:"i am p2",
//     __proto__:p1
// }
// const p3={
//     xp3:"i am p3",
//     __proto__:p2
// }

// console.log(p3.xpi);

let s="isha bhat";
let x=10;

console.log(s.__proto__.__proto__.__proto__);


function Student(name) {
  this.name = name;
}

const s1 = new Student("Isha");

console.log(Student.prototype);
console.log(Student.name);
console.log(s1.__proto__);

console.log(s1.__proto__ === Student.prototype);
// true