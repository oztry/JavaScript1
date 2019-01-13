String.prototype.reverse = function() {
  return this.split("")
    .reverse()
    .join("");
};

let str = "Ala ma kota";
console.log(str);
console.log(str.reverse());
