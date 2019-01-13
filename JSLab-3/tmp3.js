let obj = {
  id: 1
};

let iife = (param => {
  return (param.id = 2);
})(Object.assign({}, obj));

console.log(iife);
console.log(obj);
