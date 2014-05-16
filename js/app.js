$(document).ready(function () {
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
        event.preventDefault();
        var userGuess = $('#userGuess').val();
        
        //Testing for numerical input
        if (!(/^-?\d+$/.test(userGuess))) {
            alert("Please put in only numbers!");
            return;
        }
        if (userGuess < 0 || userGuess > 100) {
            alert("Please a number between 0 and 100!");
            return;
        } 
        
        guessNumber();
        feedback(userGuess);

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


