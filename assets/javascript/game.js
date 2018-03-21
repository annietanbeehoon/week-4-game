    $(document).ready(function () {    
    
    // create variable to record game tally and current total
    var currentScore = 0;
    var winTally = 0;
    var lossTally = 0;

    //create a random number for player to match the number
    // for(var i = 0; i < 4; i++) {
    // var randomBookNumber = Math.floor(Math.random() * (13 - 1)) + 1;
    // console.log("This is the value of each random number " + randomBookNumber);
    var randomNum = Math.floor(Math.random() * (121 - 19)) + 19;
    $("#randomNumber").text(randomNum);
    console.log(randomNum);

    //create four random numbers within range to be assigned to each book
    var book1 = Math.floor(Math.random() * (13 - 1)) + 1;
    console.log(book1);
    var book2 = Math.floor(Math.random() * (13 - 1)) + 1;
    console.log(book2);
    var book3 = Math.floor(Math.random() * (13 - 1)) + 1;
    console.log(book3);
    var book4 = Math.floor(Math.random() * (13 - 1)) + 1;
    console.log(book4);



    // reset the game
    function reset() {
        book1 = Math.floor(Math.random() * (13 - 1)) + 1;
        console.log(book1);
        book2 = Math.floor(Math.random() * (13 - 1)) + 1;
        console.log(book2);
        book3 = Math.floor(Math.random() * (13 - 1)) + 1;
        console.log(book3);
        book4 = Math.floor(Math.random() * (13 - 1)) + 1;
        console.log(book4);
        randomNum = Math.floor(Math.random() * (121 - 19)) + 19;
        currentScore=0;
        $("#randomNumber").text(randomNum);
        $("#finalTotal").text(currentScore);
    }

    $("#target").click(function() {
        reset();
    });

    //create function to start on each click, accumulate the points and post it to the finalTotal for user to match to the random number

    $("#one").on('click', function () {
        currentScore = currentScore + book1;
        console.log("New currentscore=" + currentScore);
        $('#finalTotal').text(currentScore);
        if (currentScore === randomNum) {
            win();
        } else if (currentScore > randomNum) {
            losses();
        }
    });
    $("#two").on('click', function () {
        currentScore = currentScore + book2;
        console.log("New currentscore=" + currentScore);
        $('#finalTotal').text(currentScore);
        if (currentScore === randomNum) {
            win();
        } else if (currentScore > randomNum) {
            losses();        
    }
    });
    $("#three").on('click', function () {
        currentScore = currentScore + book3;
        console.log("New currentscore=" + currentScore);
        $('#finalTotal').text(currentScore);
        if (currentScore === randomNum) {
            win();

        } else if (currentScore > randomNum) {
            losses();
        }

    });
    $("#four").on('click', function () {
        currentScore = currentScore + book4;
        console.log("New currentscore=" + currentScore);
        $('#finalTotal').text(currentScore);
        if (currentScore === randomNum) {
            win();
        } else if (currentScore > randomNum) {
            losses();
        }
    });

    //Create a function for what happens after a win, add counter to winTally; input into html; alert a message; empty the finalTotal; set current score to zero.
    function win() {
        winTally++;
        $("#wins").html(winTally);
        alert("You win!");
        $("#finalTotal").text(currentScore);
        reset();
    }

    function losses() {
        lossTally++;
        $("#loss").html(lossTally);
        alert("Your total score went over!");
        $("#finalTotal").text(currentScore);
        reset();
    }

    // display in html to the player to show the count of win and loss
    $("#wins").text(winTally);
    $("#loss").text(lossTally);
    
});
