let arr1 =  ['Karol', 'Adam','Rogowski','Politechnika','Super','Weekend']
let longestString
for(let i = 0; i < arr1.length; i++){
    if (i === 0)
    {
        longestString = arr1[i]
        continue
    }    

    if (longestString.length < arr1[i].length)
        longestString = arr1[i]
}

console.log('Longest String value is: ' + longestString)
