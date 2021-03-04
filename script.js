$('button[type=submit]').attr('disabled', 'disabled');

var randomNum1;
var randomNum2;

//set the largeest number to display

var maxNum = 20;
var total;

randomNum1 = Math.ceil(Math.random() * maxNum);
randomNum2 = Math.ceil(Math.random() * maxNum);
total = randomNum1 + randomNum2;

$("#question").text(randomNum1 + " + " + randomNum2 + "=");

// When users input the value

$("#ans").keyup(function() {

  var input = $(this).val();
  var slideSpeed = 200;

  $('#message').hide();

  if (input == total) {

    $('button[type=submit]').removeAttr('disabled');
    $('#success').slideDown(slideSpeed);
    $('#fail').slideUp(slideSpeed);
    $('#ans').css('border-color','green');

  } else {

    $('button[type=submit]').attr('disabled', 'disabled');
    $('#fail').slideDown(slideSpeed);
    $('#success').slideUp(slideSpeed);
     $('#ans').css('border-color','red');

  }

});

// Wheen "reset button" click, generating new randomNum1 & randomNum2
$("#reset").on("click", function() {
  randomNum1 = Math.ceil(Math.random() * maxNum);
  randomNum2 = Math.ceil(Math.random() * maxNum);
  total = randomNum1 + randomNum2;
  $("#question").empty();
  $("#ans").val('');
  $("#question").text(randomNum1 + " + " + randomNum2 + "=");
});
