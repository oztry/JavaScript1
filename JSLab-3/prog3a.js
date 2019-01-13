let iife1 = (() => {
    let obj = {
        value: undefined,
        showValue() {
            if (this.value === undefined || this.value === NaN) return 'Value is not set'
            return this.value
        },
        reverseValue() {
            if (!(isNaN(this.value)))
                this.value = eval(this.value * (-1))
        },
        // set Value(val) {
        //     console.log(val)
        //     if (isNaN(val)) return console.log(val + ' is not a number')
        //     this.value = val
        // }
    }
    return {
        showValue: obj.showValue,
        Value: obj.Value,
        reverseValue: obj.reverseValue
    }
})();

let setObj = (value) => {
   
    iife1.Value = value
    return iife1.showValue()
}

console.log(setObj('x'))
console.log(setObj('1'))

