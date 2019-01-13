let arr = [98,1,6,23,8,4,98,3,7,3,98,4,98]
let max = Math.max(...arr)
let indexes = arr.map((el, i) => el === max ? i : -1)
                 .filter(el => el >= 0)
                
console.log(indexes)