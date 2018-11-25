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
            else
                this.value = this.value.split("").reverse().join("");
        }
    }
    return obj;
})();

iife1.value = 'abc'
console.log(iife1.showValue())
iife1.reverseValue()
console.log(iife1.showValue())

iife1.value = 123
console.log(iife1.showValue())
iife1.reverseValue()
console.log(iife1.showValue())
