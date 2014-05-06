$(document).ready(function(){
    var secretNumber = Math.ceil(Math.random() * 100);
            console.log(secretNumber);
    var secretString = secretNumber.toString();
    var guessCount = 0;
    var newGame = function() {
        newNumber();
        guessCount = 0;
        $('#count').html('<span>' + guessCount + '</span>');
        $('#guessList').empty();
        $('#userGuess').val('');
    };
    newGame();
    
    function newNumber() {
        var userGuess = $('#userGuess').val();
        var hot = userGuess - secretNumber <= (Math.abs(10));
        var warm = userGuess - secretNumber <= (Math.abs(30));
        var cold = userGuess - secretNumber <= (Math.abs(60));
        var freezing = userGuess - secretNumber <= (Math.abs(100));
        
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


