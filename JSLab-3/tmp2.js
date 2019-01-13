let iife = (() => {
    return {
        value: 1,
        showValue() { console.log('show')},
        reverseValue() { console.log('reverse') }
    }
})(); 

console.log(iife.value)
iife.showValue()
iife.reverseValue()

let obj = {
    myname: undefined,
    get name(){
        return this.myname
    },
   set name(value){
       this.myname = value
   }
}
console.log(obj.name)
obj.name = 'Tom'
console.log(obj.name)
