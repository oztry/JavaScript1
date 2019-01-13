let iife2 = (() => {
    let obj = {
        value: undefined,
        showValue() {
            if (this.value === undefined || this.value === NaN) return 'Value is not set'
            return this.value
        },
        reverseValue() {
            if (this.value === undefined) return 'Value is not set'
            if (!(isNaN(this.value)))
                this.value = eval(this.value * (-1))
            else
                this.value = this.value.split("").reverse().join("");
        },
        set Value(val) {
            if (isNaN(val)) return console.log(val + ' is not a number')
            this.value = val
        },
        get Value() {
            return this.value
        }
    }
    return {
        showValue: obj.showValue,
        Value: obj.Value,
        reverseValue: obj.reverseValue
    }
})();

let setObj = (value) => {
    iife2.Value = value
    //console.log(iife2.value) 
    //iife2.Value1 = value
    return iife2.showValue()
}

// console.log(setObj('x'))
// console.log(setObj('1'))
console.log(setObj(1))

