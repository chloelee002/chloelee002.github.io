var clickCount = 0;
var storage = [];
var randA = [];
var randCount = 0;
$(document).ready(function() {
  randomNumber();
  flipToggle();

});

function flipToggle() {
  $('.flip-container').click(function() {
    /*if($( '.flipper', this ).hasClass("flipped")){
      $('.flipper', this).removeClass('flipped');
    }else{*/
    $('.flipper', this).addClass('flipped');
    // }
    storage[clickCount] = $(this).attr('id');

    clickCount++;

    if (clickCount > 1) {

      if (storage[0] == storage[1]) {
        clickCount = 0;
        storage = [];
        return false;
        return false;
      } else {

        setTimeout(function() {

          $('#' + storage[0] + " .flipper").removeClass('flipped');
          $('#' + storage[1] + " .flipper").removeClass('flipped');

          clickCount = 0;
          storage = [];
          return false;
        }, 1000);

        //$('#'+storage[1] + '.flipper').removeClass('flipped');

      }

    }
  });

}

function randomNumber() {
  $('.flip-container').each(function(index) {
    var randNum = Math.floor((Math.random() * 16) + 1);

    while (jQuery.inArray(randNum, randA) !== -1) {
      randNum = Math.floor((Math.random() * 16) + 1);
    }
    randA.push(randNum);

    if (randNum > 8) {
      var calcNum = randNum - 8;
    } else {
      var calcNum = randNum;
    }
    $(this).attr('id', 'a' + calcNum);
    //$('.back', this).html(calcNum);

    //add in Chloe's own image
    $('.back', '#a1').css('background', 'url("https://chloelee002.github.io/matching-game/images/tile1.png")');
    $('.back', '#a2').css('background', 'url("https://chloelee002.github.io/matching-game/images/tile2.jpeg")');
    $('.back', '#a3').css('background', 'url("https://chloelee002.github.io/matching-game/images/tile3.jpeg")');
    $('.back', '#a4').css('background', 'url("https://chloelee002.github.io/matching-game/images/tile4.jpeg")');
    $('.back', '#a5').css('background', 'url("https://sociorocketnewsen.files.wordpress.com/2014/10/2014-10-20-poop.png")');
    $('.back', '#a6').css('background', 'url("https://sociorocketnewsen.files.wordpress.com/2014/10/2014-10-20-poop.png")');
    $('.back', '#a7').css('background', 'url("https://sociorocketnewsen.files.wordpress.com/2014/10/2014-10-20-poop.png")');
    $('.back', '#a8').css('background', 'url("https://sociorocketnewsen.files.wordpress.com/2014/10/2014-10-20-poop.png")');


  });

}