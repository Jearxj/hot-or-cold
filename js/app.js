$(document).ready(function(){
    var secretNumber = newNumber();
    
    function newNumber() {
        return Math.ceil(Math.random() * 100);
        }
        console.log(secretNumber);
    var guessCount = 0;
    
    var newGame = function() {
        secretNumber = newNumber();
            console.log(secretNumber);
        guessCount = 0;
        feedback();
        $('#count').html('<span>' + guessCount + '</span>');
        $('#guessList').empty();
        $('#userGuess').val('');
    };
            
    var userGuess = $('#userGuess').val();
        console.log("userGuess");
    function feedback() {
        console.log("feedback working");
        
        if (userGuess == secretNumber) {
            console.log("winning");
            alert("YOU GOT IT!");
        } else if (Math.abs(userGuess - secretNumber) <= 10) {
            alert("HOT");
        } else if (Math.abs(userGuess - secretNumber) <= 30) {
            alert("WARM");
        } else if (Math.abs(userGuess - secretNumber) <= 60) {
            alert("COLD");
        } else if (Math.abs(userGuess - secretNumber) <= 100) {
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


