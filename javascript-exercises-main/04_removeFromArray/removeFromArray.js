const removeFromArray = function() {

    let array = arguments[0]

    for (let i=1; i<arguments.length;i++){
        const toRemove = arguments[i];
        const indexToRemove = array.indexOf(toRemove)

        if(indexToRemove !==-1){
            array.splice(indexToRemove, 1)
        }
    }

    return array

};

removeFromArray([1, 2, 3, 4], 3, 2)

// Do not edit below this line
module.exports = removeFromArray;
