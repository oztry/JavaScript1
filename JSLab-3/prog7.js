let objArray = [
    {
        x: 1,
        y: 'object one value',
        //operation: () => 'object one prafix' + this.x + this.y,
        operation() { return 'object one prafix ' + this.x + ' ' + this.y }
    },
    {
        x: 2,
        y: 'object two value',
        //operation: () => 'object two prafix' + this.x + this.y
        operation() { return 'object two prafix ' + this.x + ' ' + this.y }
    },
    {
        x: 3,
        y: 'object three value',
        //operation: () => 'object three prafix' + this.x + this.y
        operation() { return 'object three prafix ' + this.x + ' ' + this.y }
    },
]

for(let i = 0; i < objArray.length; i++)
{
    if (i === objArray.length - 1)
        console.log(objArray[i].operation.call(objArray[0]))
    else
        console.log(objArray[i].operation.call(objArray[i+1]))
}
