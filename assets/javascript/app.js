//*generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
var myQuestions = [
    {
        question: "What group did Bryonce sing with ?",
        answers: {
            a: 'En Vouge',
            b: 'Supremes',
            c: 'Destinys Child',
            d: 'Pointer Sisters'
        },
        correctAnswer: 'c'
    },
    {
        question: "What group did Smokey Robnison sing with ?",
        answers: {
            a: 'Confunction',
            b: 'Parlament Funkadelic',
            c: 'The Miracles',
            d: 'The Four Tops'
        },
        correctAnswer: 'c'
    },
    {
        question: "What group did Bryonce sing with ?",
        answers: {
            a: 'En Vouge',
            b: 'Supremes',
            c: 'Destinys Child',
            d: 'Pointer Sisters'
        },
        correctAnswer: 'c'
    },
    {
        question: "What instrument does Eric Clapton play ?",
        answers: {
            a: 'Guitar',
            b: 'Trumpet',
            c: 'flute',
            d: 'clarinet'
        },
        correctAnswer: 'a'
    },
    {
        question: "What was not a hit song from the Eageles Band ?",
        answers: {
            a: 'Hotel California',
            b: 'Take it Easy',
            c: 'Lyin Eyes',
            d: 'Roll Over Beethoven'
        },
        correctAnswer: 'd'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateTrivia(myQuestions, quizContainer, resultsContainer, submitButton);

function generateTrivia(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
   
    }
}

 generateTrivia(myQuestion, quizContainer, resultsContainer, submitButton);
;