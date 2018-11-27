$(document).ready(function () {
var musicQuestions = [
	{
		question: "Which singing group did Beyonce preform with ?", 
		selection: ["En Vouge", "Supremes", "Destiny's Child", "Pointer Sisters"],
		answer: 2,
		photo: "https://media.giphy.com/media/ZANZhPcQGKoa4/giphy.gif"
	 },
	 {
	 	question: "What singing group did Smokey Robinson preform with ?", 
		selection: ["The Mircales", "The Beattles", "Confunction", "Parlament Funkadelic"],
		answer: 0,
		photo: "https://media.giphy.com/media/ZANZhPcQGKoa4/giphy.gif"
	 }, 
	 {
	 	question: "What singing group did Diana Ross sing with ?", 
		selection: ["En Vouge", "The Supremes", "Pointer Sisters", "Rice variety" ],
		answer: 1,
		photo: "https://media.giphy.com/media/ZANZhPcQGKoa4/giphy.gif"
	}, 
	{
		question: "What musical instrument does Eric Clapton play?", 
		selection: ["Tuba", "Violin", "Guitar", "Trumpet" ],
		answer: 2,
		photo: "https://media.giphy.com/media/ZANZhPcQGKoa4/giphy.gif"
	}, 
	{
		question: "What was not a hit song for the rock band, the eagles ?", 
		selection: ["Hotel California", "Take it easy", "My girl", "Lyin eyes" ],
		answer: 2,
		photo: "https://media.giphy.com/media/ZANZhPcQGKoa4/giphy.gif"
	}, 
	{
		question: "Which George Benson album won triple platinum?", 
		selection: ["Breezin", "Turn your love around", "off broadway", "Love ballad" ],
		answer: 0,
		photo: "https://media.giphy.com/media/ZANZhPcQGKoa4/giphy.gif"
	}, 
	{
		question: "Which instrument did George Benson play ?", 
		selection: ["Trumpet", "chello", "Bass guitar", "Guitar" ],
		answer: 3,
		photo: "https://media.giphy.com/media/ZANZhPcQGKoa4/giphy.gif"
	}, 
	{
		question: "What famous guitar player did Kattie Perry date?", 
		selection: ["John Meyer", "Eric Clapton", "Carlos Santana", "Jimi Hendrix" ],
		answer: 0,
		photo: "https://media.giphy.com/media/ZANZhPcQGKoa4/giphy.gif"
	},	
	{
		question: "Who is not a famous guitar player ?", 
		selection: ["John Meyer", "Eric Clapton", "Carlos Santana", "Herbie Hancock" ],
		answer: 3,
		photo: "https://media.giphy.com/media/ZANZhPcQGKoa4/giphy.gif"
	}];

var winnerCount = 0;
var loserCount = 0;
var unanswerCount = 0;
var timer = 20;
var intervalId;
var userGuess ="";
var running = false;
var qCount = musicQuestions.length;
var pick;
var index;
var newArray = [];
var holder = [];



$("#reset").hide();
//Start Game:click start button.
$("#start").on("click", function () {
	    $("#start").hide();
		displayQuestion();
		runTimer();
		for(var i = 0; i < musicQuestions.length; i++) {
	holder.push(musicQuestions[i]);
}
	})
//Timer starts.
function runTimer(){
	if (!running) {
	intervalId = setInterval(decrement, 1000); 
	running = true;
	}
}
//Timer countdown begins.
function decrement() {
	$("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
	timer --;

	//Timer stopped if reaches 0.
	if (timer === 0) {
		unanswerCount++;
		stop();
		$("#answerblock").html("<p>Time is up! The correct answer is: " + pick.selection[pick.answer] + "</p>");
		hideimage();
	}	
}

//Timer stopped.
function stop() {
	running = false;
	clearInterval(intervalId);
}
//Questions randomly picked in array if not already shown.
//
function displayQuestion() {
	//Generate random index in array.
	index = Math.floor(Math.random()*musicQuestions.length);
	pick = musicQuestions[index];

//		console.log(pick.question);
		//Iterate through answer array and display
		$("#questionblock").html("<h2>" + pick.question + "</h2>");
		for(var i = 0; i < pick.selection.length; i++) {
			var userselection = $("<div>");
			userselection.addClass("answerselection");
			userselection.html(pick.selection[i]);
			//Assign array position to it so can check answer
			userselection.attr("data-guessvalue", i);
			$("#answerblock").append(userselection);
//		}
}

//Click function to select answer and outcomes.
$(".answerselection").on("click", function () {
	//Array position assigned to userGuess variable.
	userGuess = parseInt($(this).attr("data-guessvalue"));

	//User answer checked against userGuess variable.
	if (userGuess === pick.answer) {
		stop();
		winnerCount++;
		userGuess="";
		$("#answerblock").html("<p>Correct!</p>");
		hideimage();

	} else {
		stop();
		loserCount++;
		userGuess="";
		$("#answerblock").html("<p>Wrong! The correct answer is: " + pick.selection[pick.answer] + "</p>");
		hideimage();
	}
})
}

//Hides images before moving to the next question.
function hideimage () {
	$("#answerblock").append("<img src=" + pick.photo + ">");
	$("img").addClass("img-fluid");
	newArray.push(pick);
	musicQuestions.splice(index,1);

	var hidpic = setTimeout(function() {
		$("#answerblock").empty();
		timer= 20;

	//Displays score  on the screen if all questions are answered.
	if ((loserCount + winnerCount + unanswerCount) === qCount) {
		$("#questionblock").empty();
		$("#questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
		$("#answerblock").append("<h4> Correct: " + winnerCount + "</h4>" );
		$("#answerblock").append("<h4> Incorrect: " + loserCount + "</h4>" );
		$("#answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>" );
		$("#reset").show();
		winnerCount = 0;
		loserCount = 0;
		unanswerCount = 0;
		

	} else {
		runTimer();
		displayQuestion();

	}
	
	}, 3000);


}

//Reset button is activated and asked user to play again. 
$("#reset").on("click", function() {
	$("#reset").hide();
	$("#answerblock").empty();
	$("#questionblock").empty();
	for(var i = 0; i < holder.length; i++) {
		musicQuestions.push(holder[i]);
	}
	runTimer();
	displayQuestion();

})

})