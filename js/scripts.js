// user interface
$(document).ready(function(){
  $("form#translator-form").submit(function(event){
    event.preventDefault();

    var userInput = $("#userInput").val();
    var result = pigLatin(userInput);
//     // var characters = userInput.match(/^[a-zA-Z]+$/g);
//     // var vowels = ('aeiouy');
//     // var vowelsSplit = vowels.split('');
//     // var firstLetter = userInput.charAt(0);
//     // var findVowels = userInput.match(/[aeiou]/gi);
//     // var splitUserInput = userInput.split('');

    $("#result").text(result);


//
//     if (vowelsSplit[0 || 1 || 2 || 3 || 4 || 5] === firstLetter[0]) {
//      $("#result").append(userInput + "way"); //true
//     } else if (vowelsSplit[0 || 1 || 2 || 3 || 4 || 5] === firstLetter) {
//     $("#result").append(userInput + "ay"); //true
//   } else if (userInput === findVowels) {
//       for (var i=0;i<=userInput.length;i++); {
//         if (userInput[i].slice()  ) {
//           $("result").append(splitUserInput + "ay");
//         }
//       }
//     }
//
//     // if (userInput.charAt(i) == "a", userInput.charAt(i) == "e", userInput.charAt(i) == "i", userInput.charAt(i) == "o", userInput.charAt(i) == "u", userInput.charAt(i) == "y") {
//     //
//     debugger;
//     console.log(firstLetter);
//     // else if (userInput !== characters) {
//     //  $("#result").append(userInput + ": Sorry, I cannot translate!"); //false
//     // }
//
//
//     // if (!result) {
//     //   $("#result").append(userInput + ": Sorry, I cannot translate!");
//     // } else if (firstLetter === vowelsSplit) {
//     //   $("#result").append("ay"); //true
//     // }
//
  });
});

//backend logic
var arrayVowels = ['a', 'e', 'i', 'o', 'u'];
var arrayConsonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
// var userInput = "able"
function pigLatin (userInput){
  for (var i = 0; i < arrayVowels.length; i++) {
    if (userInput === arrayVowels[i] || (userInput[i] === arrayVowels[i])){
      return userInput + 'way';
    }
  }
  for (var k = 0; k < arrayConsonants.length; k++) {
    if (userInput === arrayConsonants[k] || (userInput[k] === arrayConsonants[k])) {
      return userInput + 'ay';
    }
  }
  var userInputArray = userInput.split("");
    return userInputArray;
}

  // for (var m=0; m<arrayConsonants.length; m++) {
  //   userInput.

  // var userInputArray = userInput.split('');
    // userInputArray.forEach(function(userArray) {
      // return userInputArray;
      // debugger;
    // });
    // (var i=0; i<userInputArray.length;i++) {
    //  if (userInputArray.array[i])

  // } (userInputArray.array[i].charAt[i])

//     (userInputArray.array[i].charAt[i])
