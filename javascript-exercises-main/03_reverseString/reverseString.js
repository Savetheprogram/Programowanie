const reverseString = function(string) {

 const characters = string.length

   let reverseString =""

   for( let i = characters - 1; i >= 0; i--) {

       reverseString = reverseString + string.charAt(i)
}

    return reverseString

};

// Do not edit below this line
module.exports = reverseString;
