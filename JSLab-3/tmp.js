let iife = (() => {
    let var1 = 'inner'
    let getValue = function(){
        return var1;
    }
    return {
        innerData: getValue
    }
})()

console.log(iife.innerData())
console.log(iife.var1)
console.log(true || 1 || 2)
console.log(false|| 1 || 2)
console.log(false|| !!1 || !!2)
console.log(true && 1 && 2)
console.log(false && 1 && 2)
console.log(true && !!1 && !!2)
console.log(1 | 2)
console.log(1 & 2)
let min = 0
let max = 8
console.log(Math.random() * (max - min + 1) + min)