function generateQuiz(questions,quizContainer,resultsContainer,submitButton)

    function showQuestions(questions, quizContainer) {
        var myQuestions = [
            {
                question: "What group did Bryonce sing with?",
                answers: {
                    a: 'Supremes ',
                    b: 'En Vogue',
                    c: 'Destinys Child',
                    d: 'Marvellets',
                },
                correctAnswer: 'c'
            },
             {   
                question: "What group did Smokey Robnison sing with ?",
                answers: {
                    a: 'Con Function',
                    b: 'Miracles',
                    c: 'Tempatations',
                    d: 'Parlament Funcatdelic'
                    
                },
                correctAnswer: 'b'
                },
                {
                    question: "What type of music did Parlament Funcadelic preform ?",
                    answers: {
                        a: 'Jazz',
                        b: 'Rock',
                        c: 'Funk',
                        d: 'R&B'
                        
                    },
                    correctAnswer: 'c'
            }
        ]

    }

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
    
        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
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
        showQuestions(questions, quizContainer);  
        // on submit, show results

submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)};