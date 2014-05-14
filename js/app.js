$(document).ready(function(){
    var secretNumber = newNumber();
    
    function newNumber() {
        return Math.ceil(Math.random() * 100);
    }
    console.log(secretNumber);
    var guessCount = 0;
    
    //start a new game
    var newGame = function() {
        secretNumber = newNumber();
        //DEBUG
        console.log(secretNumber);
        guessCount = 0;
        $('#count').html('<span>' + guessCount + '</span>');
        $('#guessList').empty();
        $('#userGuess').val('');
    };
    
    //give the user feedbacks
    var feedback = function(userGuess) {
        console.log("feedback working");
        
        if (userGuess == secretNumber) {
            $('#feedback').text("YOU GOT IT!");
        } else if (Math.abs(userGuess - secretNumber) <= 10) {
            $('#feedback').text("HOT!");
        } else if (Math.abs(userGuess - secretNumber) <= 30) {
            $('#feedback').text("WARM!");
        } else if (Math.abs(userGuess - secretNumber) <= 60) {
            $('#feedback').text("COLD!");
        } else if (Math.abs(userGuess - secretNumber) <= 100) {
            $('#feedback').text("FREEZING!"); 
        }
    };
            
    //Testing for only numerical inputs
    var pattern = function(userGuess) {
        var reg = /^\d+$/;
        return reg.test();
        //debug
        console.log("pattern checked");

        if (!(reg.test())) {
            alert('error');
        }
    };
    
    //adding functions to make the button, # of guesses, and appending guessed numbers work
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
        var userGuess = $('#userGuess').val();
        event.preventDefault();
        
        guessNumber();
        feedback(userGuess);
        
        pattern(userGuess);
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


