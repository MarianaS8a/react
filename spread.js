const fn = (a, b, c) => console.log(a + b + c)

const arr = [1, 2, 3]

//fn(arr[0], arr[1], arr[2])
fn(...arr)

const arr1 = [5, 6]
//const arr2 = arr.concat(arr1)
const arr2 = [...arr, ...arr1, 10]
//console.log(arr2)

const obj1 = {a: 1, b:2}
const obj2 = {b: 5, c:'chanchito'}

const obj3 = {...obj1, ...obj2}
obj1.a = 10
console.log(obj3, obj1)