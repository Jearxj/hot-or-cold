$(document).ready(function(){
    var secretNumber = newNumber();
    
    function newNumber() {
        return Math.ceil(Math.random() * 100);
        }
        console.log(secretNumber);
    var guessCount = 0;
    
    var newGame = function() {
        secretNumber = newNumber();
        guessCount = 0;
        $('#count').html('<span>' + guessCount + '</span>');
        $('#guessList').empty();
        $('#userGuess').val('');
    };
    newGame();
    console.log(secretNumber);
    
    function feedback() {
        var userGuess = $('#userGuess').val();
        var hot = Math.abs(userGuess - secretNumber) <= 10;
        var warm = Math.abs(userGuess - secretNumber) <= 30;
        var cold = Math.abs(userGuess - secretNumber) <= 60;
        var freezing = Math.abs(userGuess - secretNumber) <= 100;
        
        if (userGuess === secretString) {
            console.log("winning");
            alert("YOU GOT IT!");
        } else if (hot === true) {
            alert("HOT");
        } else if (warm === true) {
            alert("WARM");
        } else if (cold === true) {
            alert("COLD");
        } else if (freezing === true) {
            alert("FREEZING"); 
        }
    };

    var guessNumber = function() {
        if (guessCount !== 0) {
            $('#guessList').append(", "); 
        }
        guessCount++;
        
        $('#guessList').append($('#userGuess').val());
        $('#userGuess').val('');
        $('#count').html('<span>' + guessCount + '</span>');
        
    }
    
    $('.new').on('click', function() {
        newGame();
    });
        
    $('form').on('submit', function(event) {
        event.preventDefault();
        guessNumber();
        
    });

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
});


