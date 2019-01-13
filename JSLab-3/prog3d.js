let iife1 = (() => {
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
        setValue(val) {
            if (isNaN(val)) return console.log(val + ' is not a number')
            this.value = val
        }
    }
    return {
        showValue: obj.showValue,
        setValue: obj.setValue,
        reverseValue: obj.reverseValue
    }
})();

let setObj = (value) => {
    iife1.setValue(value)
    return iife1.showValue()
}

console.log(iife1.value)
console.log(setObj('x'))
console.log(iife1.value)
console.log(setObj('1'))
console.log(iife1.value)

