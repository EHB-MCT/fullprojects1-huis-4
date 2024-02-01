///////////////////hide submit
var submitButton = document.getElementById("submitQ");
submitButton.style.display = "none";
var nextCount = 0;
/////////////////////////disable all questions, only 1st is shown.//////////////////////////////////
var fieldset2 = document.getElementById("2");
fieldset2.style.display = "none";
var fieldset3 = document.getElementById("3");
fieldset3.style.display = "none";
var fieldset4 = document.getElementById("4");
fieldset4.style.display = "none";
var fieldset5 = document.getElementById("5");
fieldset5.style.display = "none";
var fieldset6 = document.getElementById("6");
fieldset6.style.display = "none";
var fieldset7 = document.getElementById("7");
fieldset7.style.display = "none";
///////////////////////////////////////////////////////////////////////////////////
function nextQuestion() {
	removeMark();
	nextCount = nextCount + 1;
	///////////////////////////////////////////////
	if (nextCount == 1) {
		var fieldset2 = document.getElementById("2");
		fieldset2.style.display = "initial";
		////////////////////////////2
		var fieldset1 = document.getElementById("1");
		fieldset1.style.display = "none";
	} else if (nextCount == 2) {
		var fieldset3 = document.getElementById("3"); ///Q3
		fieldset3.style.display = "initial";
		///////////////////////////////////
		var fieldset1 = document.getElementById("1");
		fieldset1.style.display = "none";
		var fieldset2 = document.getElementById("2");
		fieldset2.style.display = "none";
	} else if (nextCount == 3) {
		var fieldset4 = document.getElementById("4"); //Q4
		fieldset4.style.display = "initial";
		///////////////////////////////////
		var fieldset1 = document.getElementById("1");
		fieldset1.style.display = "none";
		var fieldset2 = document.getElementById("2");
		fieldset2.style.display = "none";
		var fieldset3 = document.getElementById("3");
		fieldset3.style.display = "none";
	} else if (nextCount == 4) {
		var fieldset5 = document.getElementById("5"); //Q5
		fieldset5.style.display = "initial";
		///////////////////////////////////
		var fieldset1 = document.getElementById("1");
		fieldset1.style.display = "none";
		var fieldset2 = document.getElementById("2");
		fieldset2.style.display = "none";
		var fieldset3 = document.getElementById("3");
		fieldset3.style.display = "none";
		var fieldset4 = document.getElementById("4");
		fieldset4.style.display = "none";
	} else if (nextCount == 5) {
		var fieldset6 = document.getElementById("6"); //Q6
		fieldset6.style.display = "initial";
		///////////////////////////////////
		var fieldset1 = document.getElementById("1");
		fieldset1.style.display = "none";
		var fieldset2 = document.getElementById("2");
		fieldset2.style.display = "none";
		var fieldset3 = document.getElementById("3");
		fieldset3.style.display = "none";
		var fieldset4 = document.getElementById("4");
		fieldset4.style.display = "none";
		var fieldset5 = document.getElementById("5");
		fieldset5.style.display = "none";
	} else if (nextCount == 6) {
		var fieldset7 = document.getElementById("7"); //Q7
		fieldset7.style.display = "initial";
		///////////////////////////////////
		var fieldset1 = document.getElementById("1");
		fieldset1.style.display = "none";
		var fieldset2 = document.getElementById("2");
		fieldset2.style.display = "none";
		var fieldset3 = document.getElementById("3");
		fieldset3.style.display = "none";
		var fieldset4 = document.getElementById("4");
		fieldset4.style.display = "none";
		var fieldset5 = document.getElementById("5");
		fieldset5.style.display = "none";
		var fieldset6 = document.getElementById("6");
		fieldset6.style.display = "none";
		/////////////////////
		var nextButton = document.getElementById("nextQ");
		nextButton.style.display = "none";
		submitButton.style.display = "inline";
	}

	////////////////////////////////
	else if (nextCount >= 7) {
		nextCount = 6; //end
	}
	console.log(nextCount);
}
function submitQuiz() {
	updateQuestions();
	nextCount = 0; //reset back to 1st question
	var userAnswers = [];
	var correctAnswers = ["b", "c", "c", "b", "b", "a", "d"]; // Define the correct answers

	// Get user-selected answers
	for (var i = 1; i <= 7; i++) {
		var selectedOption = document.querySelector(
			'input[name="q' + i + '"]:checked'
		);
		if (selectedOption) {
			userAnswers.push(selectedOption.value);
		} else {
			userAnswers.push(null); // Mark unanswered questions
		}
	}

	// Check answers and provide feedback
	var score = 0;
	var feedback = "Resultaten:\n";
	for (var i = 0; i < correctAnswers.length; i++) {
		feedback += "Vraag " + (i + 1) + ": ";
		if (userAnswers[i] === correctAnswers[i]) {
			feedback += "Correct\n";
			score++;
		} else {
			feedback += "Incorrect\n";
		}
	}

	feedback +=
		"\nAantal vragen juist: " + score + " van de " + correctAnswers.length;

	console.log(feedback);
	var nextButton = document.getElementById("nextQ");
	nextButton.style.display = "inline";
	submitButton.style.display = "none";
}

function updateQuestions() {
	var fieldset1 = document.getElementById("1");
	fieldset1.style.display = "initial";
	var fieldset2 = document.getElementById("2");
	fieldset2.style.display = "none";
	var fieldset3 = document.getElementById("3");
	fieldset3.style.display = "none";
	var fieldset4 = document.getElementById("4");
	fieldset4.style.display = "none";
	var fieldset5 = document.getElementById("5");
	fieldset5.style.display = "none";
	var fieldset6 = document.getElementById("6");
	fieldset6.style.display = "none";
	var fieldset7 = document.getElementById("7");
	fieldset7.style.display = "none";
}
//////////////////////////////initialize (hide) highlights//////////////
removeMark();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////event listen
document.addEventListener("change", function () {
	addMark(); //function to do upon button change -> change highlight state to on
});
//toggleMark();
function removeMark() {
	// For elements with class "wrongHighlight" or "correctHighlight"
	var highlightElements = document.querySelectorAll(
		".wrongHighlight, .correctHighlight"
	);

	for (var i = 0; i < highlightElements.length; i++) {
		highlightElements[i].classList.add("no-highlight");
	}
}
function addMark() {
	// For elements with class "wrongHighlight" or "correctHighlight"
	var highlightElements = document.querySelectorAll(
		".wrongHighlight, .correctHighlight"
	);

	for (var i = 0; i < highlightElements.length; i++) {
		highlightElements[i].classList.remove("no-highlight");
	}
}
