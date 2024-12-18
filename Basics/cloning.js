let arr = [20, 2, 43, 54, 23, 32, 12]

//clonig array or object by refrence
// const newarr = arr
// newarr.push(150);

// console.log('arrays', arr, newarr, "equality", arr === newarr)
const object = {
    firstName: "Jaffer",
    lastName: "Ali",
    class: {
        name: "BS",
        Section: "A",
    }
}

// const newObject = object;
// newObject.lastName = "Akbar"

// console.log('objects', object, newObject, "equality", object === newObject)

//cloning array or object by value

// const newarr = [...arr];
// newarr.push(150);
// console.log('arrays', arr, newarr, "equality", arr === newarr)

// const newObject = { ...object }
// newObject.lastName = "Akbar"
// newObject.class.Section = "B"

// console.log('objects', object, newObject, "equality", object === newObject)

//cloning array or object (Deep)
const newObject = JSON.parse(JSON.stringify(object));
newObject.lastName = "Akbar"
newObject.class.Section = "B"

console.log('objects', object, newObject, "equality", object === newObject)
