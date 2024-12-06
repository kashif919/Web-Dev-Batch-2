//array looping methods
let arr = [20, 2, 43, 54, 23, 32, 12]

//array.forEach
// arr.forEach((element, index) => {
//     console.log(`arr[${index}]`, element)
// })

//array.map
// const map = arr.map((element, index) => {
//     // console.log(`arr[${index}]`, element)
//     return element + 2;
// })
// console.log('map', map)

//array.filter
// const filteredarr = arr.filter((element, index) => {
//     return element > 10
// })
// console.log('filteredarr', filteredarr)

//array.find
// const findData = arr.find((element, index) => {
//     return element === 10;
// })
// console.log('findData', findData)

//array.findIndex()
// const index = arr.findIndex((element, index, arr) => {
//     return arr[index] === 2
// })
// const index = arr.findIndex((element, index, arr) => arr[index] === 2
// )
// console.log('index', index)

//array.some
// const some = arr.some((element, index, arr) => {
//     return arr[index] > 10
// })
// console.log('some', some)

//array.some
// const every = arr.every((element, index, arr) => {
//     return arr[index] > 10
// })
// console.log('every', every)

// array.reduce
// const sum = arr.reduce((prev, current) => prev + current)
// console.log('sum', sum)

// const sum1 = arr.reduce((prev, current, index, arr) => {
//     console.log('index', index)
//     let currentValue = arr[index]
//     return prev + currentValue;
// })
// console.log('sum1', sum1)

// //array.reduceRight
// const sum2 = arr.reduceRight((prev, current, index, arr) => {
//     console.log('index', index)
//     let currentValue = arr[index]
//     return prev + currentValue;
// })
// console.log('sum1', sum2)
