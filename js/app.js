
$(document).ready(function(){
    var i = 0;
    var secretNumber = 89;
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
    $('#userGuess').on('submit', function(event) {
        event.preventDefault();
    })
    $('.button').on('click', function() {
        event.preventDefault(); 
        if (i !== 0) {
        $('#guessList').append(", "); 
        }
        i++;
        
        /*--Adding empty() doesn't really seem to make a difference...ask someone about this.--*/
        //$('#count').empty();
            //console.log("empty");
        $('#count').html("<span>" + i + "</span>");
        $('#guessList').append($('#userGuess').val());

        var userGuess = $('#userGuess').val();
        while(userGuess) {
            if (userGuess === 89) {
                alert("RIGHT ON THE MONEY!");
                var userGuess = false;
                console.log("while loop is working");
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
});


