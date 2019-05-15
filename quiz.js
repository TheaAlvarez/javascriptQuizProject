//creating a quiz
//questions in a page and submit button
//next question appears after submit is clicked
//once all questions are finished there should be a scoreboard ui calculating score

//make array of object

const questionsAnswers=[
		{question:"What is 2x1",
		 option1:1,
		 option2:12,
		 option3:13,
		 option4:14,
		 answer:2
		},
		{question:"What is 2x2",
		 option1:1,
		 option2:14,
		 option3:13,
		 option4:12,
		 answer:3
		},
		{question:"What is 2x3",
		 option1:11,
		 option2:12,
		 option3:13,
		 option4:14,
		 answer:4
		},
		{question:"What is 2x4",
		 option1:14,
		 option2:10,
		 option3:13,
		 option4:12,
		 answer:5
		},
	];


function generateQuestionsAnswers(questionsAnswersObject){
	
let option1=questionsAnswersObject.option1;
let option2=questionsAnswersObject.option2;
let option3=questionsAnswersObject.option3;
let option4=questionsAnswersObject.option4;


// console.log(option1);
// console.log(option2);
// console.log(option3);
// console.log(option4);

	$(`<p>${questionsAnswersObject.question}</p>`).appendTo('.questions');
	$(`<input type='radio' name="option" value=${option1}  ></input>`).appendTo('.questions');
	$(`<label>${questionsAnswersObject.option1}</label>`).appendTo('.questions');
	$(`<input type='radio'name="option" value='${option2}'></input>`).appendTo('.questions');
	$(`<label>${questionsAnswersObject.option2}</label>`).appendTo('.questions');
	$(`<input type='radio'name="option" value='${option3}'></input>`).appendTo('.questions');
	$(`<label>${questionsAnswersObject.option3}</label>`).appendTo('.questions');
	$(`<input type='radio'name="option" value='${option4}'></input>`).appendTo('.questions');
	$(`<label>${questionsAnswersObject.option4}</label>`).appendTo('.questions');



}
//already know the index of what question youre in
//find the last index in the array
function displayNextOrSubmitBtn(numberOfTimesClicked){
	if (numberOfTimesClicked === questionsAnswers.length-1){
		$('<input type="submit" value="Submit"></input>').appendTo('.questions');
	}
	else{
		$('<input type="submit" value="Next"></input>').appendTo('.questions');
	}
	
}

function loop(){
	
	for(let i=0; i<questionsAnswers.length;i++){
		generateQuestionsAnswers();
	}
}

function check(){

}

function compareAnswer(questionsAnswersObject){
	// let answer=questionsAnswersObject.answer;
	// 		console.log(answer + " answer to ques");
	let answer=questionsAnswersObject.answer;
			console.log(answer + " answer to ques");
	$( "input" ).on( "change", function() {
 	0
			let input=$( "input:checked" ).val();
			console.log(input);

			
			
		 });


}

$(function(){
	let buttonClicked=0;
	generateQuestionsAnswers(questionsAnswers[buttonClicked]);

	displayNextOrSubmitBtn(buttonClicked);
	
	//when user clicks button, next question shows up. current question disappears
	
	compareAnswer(questionsAnswers);

	$('form').on('submit',function(event){
		event.preventDefault();
		buttonClicked++;
		//current question disappears
		$('.questions').empty();
		//next question appears
		generateQuestionsAnswers(questionsAnswers[buttonClicked]);

		//button generation 
		displayNextOrSubmitBtn(buttonClicked);

		//after question 4, regenerate new page
		if (questionsAnswers.length-1===buttonClicked){
			$('.questions').empty();
			$('<h1>Score</h1>').appendTo('.questions');
			$(`<p>/${questionsAnswers.length}</p>`).appendTo('.questions');
		}
		
		compareAnswer(questionsAnswers);
		//making sure user picks radio button
		if (!$("input:checked" ).val()){
				alert("pick an option");
			}
	
	})
		



});

