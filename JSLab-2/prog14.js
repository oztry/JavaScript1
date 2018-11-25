let objects = [{
    id:1,
    show: function(){
        console.log('first show');
    }
},{
    id:2
},{
    id:3,
    show: function(){
        console.log('third show');
    }
}];

function ShowIfExists(objectsArray){
    objectsArray.forEach(element => {
        if (element.show != null) element.show()
    });
}

ShowIfExists(objects)