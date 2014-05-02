$(document).ready(function(){
    /*var secretNumber = Math.ceil(Math.random() * 100);
        console.log(secretNumber);
    var secretString = secretNumber.toString();*/
    var newGame = function() {
        var secretNumber = Math.ceil(Math.random() * 100);
            console.log(secretNumber);
        var secretString = secretNumber.toString();
        i = 0;
        $('#count').html('<span>' + i + '</span>');
        $('#guessList').empty();
        //guessNumber();
    }
    newGame();
    var i = 0;
    var comma = function () {
        if (i !== 0) {
        $('#guessList').append(", "); 
        }
    }
    var guessNumber = function () {
        $('.button').on('click', function() {
            event.preventDefault(); 
            comma();
            i++;
            $('#count').html("<span>" + i + "</span>");
            $('#guessList').append($('#userGuess').val());
            var userGuess = $('#userGuess').val();
                while(userGuess) {
                    if (userGuess === secretString) {
                        alert("YOU GOT IT! Click +NEW GAME to start a new game.");
                        var userGuess = false;
                    } else if (userGuess <= 20) {
                        alert("ICEEEEE COLD!!!!! Guess again!");
                        var userGuess = false;
                    } else if (userGuess <= 40) {
                        alert("STILL COLD. Guess again!");
                        var userGuess = false;
                    } else if (userGuess <= 60) {
                        alert("WARMER. Guess again!");
                        var userGuess = false;
                    } else if (userGuess <= 80) {
                        alert("IT'S GETTING HOT IN HERE! Guess again!");
                        var userGuess = false;
                    } else if (userGuess <= 100) {
                        alert("SOOO CLOSE...but keep guessing!");
                        var userGuess = false;
                    }
                
                }
        })
    }

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
    $('.new').on('click', function() {
        newGame();

    })
    $('#userGuess').on('submit', function(event) {
        event.preventDefault();
    })
    guessNumber();

});


