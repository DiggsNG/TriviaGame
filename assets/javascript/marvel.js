
processTrivia();
function processTrivia() {
var trivQuestion1 =  []
    trivQuestion1 [0] ="The Fantastic Four headquarter is located in what building: ?" ;
    trivQuestion1 [1] = "Stark Tower";
    trivQuestion1 [2] = "Fantastic Headquarter";
    trivQuestion1 [3] = "Baxter Building";

var trivQuestion2 = []
    trivQuestion2 [0] ="Peter Parker works as a photographer for:";
    trivQuestion2 [1] ="The Daily Planet";
    trivQuestion2 [2] = "The Daily Bugle ";
    trivQuestion2 [3] = "The New York Times";
    trivQuestion2 [4]  = "The Rolling Stone";

var trivQuestion3 = []
    trivQuestion3 [0] = "Captain America was frozen in which war: ";
    trivQuestion3 [1] = "World War I" ;
    trivQuestion3 [2] = "World War II";
    trivQuestion3 [3] = "Cold War";
    trivQuestion3 [4] = "American Civil War";

 var trivQuestion4 = []
    trivQuestion4 [0] = "The vampire hunter Blade is a: ";
    trivQuestion4 [1] = "Mutant" ;
    trivQuestion4 [2] = "Human";
    trivQuestion4 [3] = "Vampire ";
    trivQuestion4 [4] = "Half Vampire";

 var trivQuestion5 = []
    trivQuestion5 [0] = "Dr. Doom went to the same college as: ? ";
    trivQuestion5 [1] = "Tony Stark" ;
    trivQuestion5 [2] = "Peter Parker";
    trivQuestion5 [3] = "Reed Richard";
    trivQuestion5 [4] = "Bruce Banner";  

 var trivQuestion6 = []
    trivQuestion6 [0] = "Before becoming the Black Widow, her previous occupation was a: ? ";
    trivQuestion6 [1] = "A ballerina ?" ;
    trivQuestion6 [2] = "A military pilot ?";
    trivQuestion6 [3] = "A thief";
    trivQuestion6 [4] = "An Athlete"; 

  var triviaCount = 0;
  var timer = 0;
  var questions = [];
  var answers = [];

  processTrivia()   
    function processTrivia() { 
      document.getElementById("question").innerHTML = trivQuestion1[0];
      var triviaSorter = function(fileArray){
        for (var i=0; i < fileArray.length; i++){ 
               i++;
          trivQuestion1[i] = answers;
        console.log(trivQuestion[i]);
    };     
  };
};        
};
 //* var triviaSorter = function(fileArray){
 //     for(var i=0; i < fileArray.length; i++){
 //         var triviaExt = fileArray[i].split(".").pop();
 //         questions.push(fileArray[i]);
 //         console.log(questions);
 //     }
 // }*/