$(document).ready(function(){
  $("form#translator-form").submit(function(event){
    event.preventDefault();

    // var array = [];
    var userInput = $("#userInput").val();
      debugger;
    var characters = userInput.match(/^[a-zA-Z]+$/g);
    console.log(characters);

    if (userInput !== characters) {
      $("#result").text("I cannot translate, sorry!");
    }


  });

});


//backend logic




// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };
