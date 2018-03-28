//user interface
// $(document).ready(function(){
//   $("form#translator-form").submit(function(event){
//     event.preventDefault();
//
//     var userInput = $("#userInput").val();
//     // var characters = userInput.match(/^[a-zA-Z]+$/g);
//     // var vowels = ('aeiouy');
//     // var vowelsSplit = vowels.split('');
//     // var firstLetter = userInput.charAt(0);
//     // var findVowels = userInput.match(/[aeiou]/gi);
//     // var splitUserInput = userInput.split('');
//
//     // debugger;
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
//   });
// });

//backend logic
var arrayVowels = ['a', 'e', 'i', 'o', 'u'];
//
// var pigLatin = function(userInput) {
//   if (userInput === "") {
//     return true;
//   } else {
//     return false;
//   }
// }

function pigLatin (userInput){
  for (var i = 0; i < arrayVowels.length; i++) {
    if (userInput === arrayVowels[i] || (userInput[i] === arrayVowels[i])){
      return userInput + 'way';
    }
  }
}




// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };
