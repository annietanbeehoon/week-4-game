$(document).ready(function () {

    var randomNum = Math.floor(Math.random() * (121 - 19)) + 19;
    $("#randomNumber").text(randomNum);
    console.log(randomNum);

    $("#target").click(function() {
    var randomNum = Math.floor(Math.random() * (121 - 19)) + 19;
    $("#randomNumber").text(randomNum);
    console.log(randomNum);
    reset();
});

    
    // for(var i = 0; i < 4; i++) {
    // var randomBookNumber = Math.floor(Math.random() * (13 - 1)) + 1;
    // console.log("This is the value of each random number " + randomBookNumber);

    book1 = Math.floor(Math.random() * (13 - 1)) + 1;
    console.log(book1);
    book2 = Math.floor(Math.random() * (13 - 1)) + 1;
    console.log(book2);
    book3 = Math.floor(Math.random() * (13 - 1)) + 1;
    console.log(book3);
    book4 = Math.floor(Math.random() * (13 - 1)) + 1;
    console.log(book4);

    // create variable to record game tally and current total
    var currentScore = 0;
    var winTally = 0;
    var lossTally = 0;

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
    function win() {
        winTally++;
        $("#wins").html(winTally);
        alert("You win!");
        $("#finalTotal").text("");
        currentScore = 0;
    }

    function losses() {
        lossTally++;
        $("#loss").html(lossTally);
        alert("Your total score went over!");
        currentScore=0;
        $("#finalTotal").text("");
        currentScore = 0;
    }

    // display in html to the player to show the count of win and loss
    $("#wins").text(winTally);
    $("#loss").text(lossTally);

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
        currentScore=0;
        $("#finalTotal").text("");
    }
    
});
