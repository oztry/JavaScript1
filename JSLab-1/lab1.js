console.log('4.1 + 1.1 = ')
console.log(4.1 + 1.1)
console.log('10 / 0 = ' + 10 / 0)
console.log('0 / 0 = ' + 0 / 0)
console.log(typeof(0 / 0))
console.log(typeof({}))
console.log(typeof(function(){}))
//arrays
let arr1 = [1, 2, 3]
let length = arr1.push(4)
console.log(length)
console.log(arr1.push(5))
console.log(arr1.pop()) //stos - usuwa i zwraca ostatni element z tablicy
console.log(arr1.shift()) //kolejka- usuwa i zwraca pierwszy element z tablicy
console.log(arr1)
console.log(arr1.splice(0,2)) //usuwa 2 elementy od indeksu 0 i je zwraca
console.log(arr1)
console.log(arr1.indexOf(100)) //not found returns -1
console.log(1<'2') //check inequality with strict mode
switch(true){
    case false: 
        console.log('1')
        break
    case true: 
        console.log('2')
        break
    default: 
        console.log('Default')
}