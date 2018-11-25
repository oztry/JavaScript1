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
        setValue(val) {
            if (isNaN(val)) return console.log(val + ' is not a number')
            this.value = val
        },
    }
    return {
        showValue: obj.showValue,
        setValue: obj.setValue,
        reverseValue: obj.reverseValue
    }
})();

console.log(iife1)
console.log(iife1.showValue())
iife1.reverseValue()
console.log(iife1.showValue())
iife1.setValue('x')
iife1.setValue(1)
console.log(iife1.showValue())
iife1.reverseValue()
console.log(iife1.showValue())