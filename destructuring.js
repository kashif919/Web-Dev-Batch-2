const object = {
    name: "jafer",
    clas: "web",
    stack: "MERN",
    passwrod: 12345,
}
//Destructuring
const { name, clas } = object
const studentName = object.name;
//rest
const { passwrod, ...other } = object //Destructuring
console.log('stdInfo', other)
//spread
const obj = { ...object, level: 1 }
console.log('name', obj)