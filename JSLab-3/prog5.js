let BaseObject = { 
    X: undefined,
    y: undefined, 
    sum: function (){ 
        return this.X+this.y
    }
} 

let objArray = [
    {
        X: 1,
        y: 1
    },
    {
        X: 2,
        y: 2
    },
    {
        X: 3,
        y: 3
    },
    {
        X: 4,
        y: 4
    },
    {
        X: 5,
        y: 5
    }
]

objArray.forEach(element => {
    console.log(element)    
    console.log(BaseObject.sum.call(element))    
});
