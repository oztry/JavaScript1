let iife1 = (() => {
  let value;
  let showValue = () => {
    if (this.value === undefined || this.value === NaN)
      return "Value is not set";
    return this.value;
  };
  let reverseValue = () => {
    if (this.value === undefined) return "Value is not set";
    if (!isNaN(this.value)) this.value = eval(this.value * -1);
    else
      this.value = this.value
        .split("")
        .reverse()
        .join("");
  };
  let setValue = val => {
    if (isNaN(val)) return console.log(val + " is not a number");
    this.value = val;
  };
  return {
    showValue: showValue,
    setValue: setValue,
    reverseValue: reverseValue
  };
})();

let setObj = value => {
  iife1.setValue(value);
  return iife1.showValue();
};

console.log(iife1.value);
console.log(setObj("x"));
console.log(iife1.value);
console.log(setObj("1"));
console.log(iife1.value);
