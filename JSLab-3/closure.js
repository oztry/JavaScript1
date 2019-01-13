let iife = (() => {
    let var1 = 'inner'
    let getValue = function(){
        return var1
    }
    let setValue = function(val){
        var1 = val
    }
    return {
        getData: getValue,
        setData: setValue
    }
})();

console.log(iife.getData())
console.log(iife.var1)
iife.setData('blabla')
console.log(iife.getData())
console.log(iife.var1)