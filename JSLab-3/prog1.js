let iife1 = (() => {
  return {
    value: undefined,
    showValue() {
      if (this.value === undefined || this.value === NaN)
        return "Value is not set";
      return this.value;
    },
    reverseValue() {
      if (this.value === undefined) return "Value is not set";
      if (!isNaN(this.value)) this.value = eval(this.value * -1);
      else
        this.value = this.value
          .split("")
          .reverse()
          .join("");
    }
  };
})();

iife1.reverseValue();
iife1.value = "abc";
console.log(iife1.showValue());
iife1.reverseValue();
console.log(iife1.showValue());
iife1.reverseValue();
console.log(iife1.showValue());

iife1.value = 123;
console.log(iife1.showValue());
iife1.reverseValue();
console.log(iife1.showValue());
iife1.reverseValue();
console.log(iife1.showValue());
