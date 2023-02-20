const caesar = function(string, shift) {


    let length = string.length

    let letter = ''

    let shiftedCode = ''

    let codedLetters = ''

    let codedSentence = ""

    if(shift > 26) {

        shift = shift%26
    }

  for (let i=0; i<length; i++) {

    letter = string.charCodeAt(i)

     if(letter >= 32 && letter <= 47)  {     // punctuation check

         shiftedCode = letter

         codedLetters = String.fromCharCode(shiftedCode)

         codedSentence = codedSentence + codedLetters

     } else if(letter >= 65 && letter <= 90 && letter+shift >90)  {   //uppercase letter wrap

       let newShift = shift -( 90 - letter)

       let newLetter = 64

         shiftedCode = newLetter + newShift

         codedLetters = String.fromCharCode(shiftedCode)

         codedSentence = codedSentence + codedLetters

     } else if(letter >= 65 && letter <= 90 && letter+shift<65) {  //uppercase letter negative wrap

         let newShift = shift + (letter - 65)

         let newLetter = 91

         shiftedCode = newLetter + newShift

         codedLetters = String.fromCharCode(shiftedCode)

         codedSentence = codedSentence + codedLetters
     } else if(letter >= 97 && letter <= 122 && letter+shift >122)  {  //lowercase letter wrap

         let newShift = shift -( 122 - letter)

         let newLetter = 96

         shiftedCode = newLetter + newShift

         codedLetters = String.fromCharCode(shiftedCode)

         codedSentence = codedSentence + codedLetters

     } else if(letter >= 97 && letter <= 122 && letter+shift<97) {  //lowercase letter negative wrap

         let newShift = shift + (letter - 97)

         let newLetter = 123

         shiftedCode = newLetter + newShift

         codedLetters = String.fromCharCode(shiftedCode)

         codedSentence = codedSentence + codedLetters

     } else {


    shiftedCode = letter + shift

    codedLetters = String.fromCharCode(shiftedCode)

    codedSentence = codedSentence + codedLetters
  } }

    return codedSentence




 // let unicodeString = String.fromCharCode(parseInt(string,16))

  //  return unicodeString
};

// Do not edit below this line
module.exports = caesar;
