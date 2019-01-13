Number.prototype.reverse = function() {
  numText = this + "";
  let reversedText = numText
    .split("")
    .reverse()
    .join("");
  return parseInt(reversedText, 10);
};

let num = 123;
console.log(num);
console.log(num.reverse());

num = 12345;
console.log(num);
console.log(num.reverse());
