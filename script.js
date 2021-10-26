// create a computerPlay function
        function computerPlay(); 

        // output a number out of 3 potential integers
        function generateChoice(max) {
            return Math.floor(Math.random() * max);
        }
        

        // assign either rock, paper or scissors to each of three numbers
        let assignType; 
        if (generateChoice === 0) {
            assignType = "Rock";
        } else if (generateChoice === 1) {
            assignType = "Paper";
        } else (generateChoice === 2) {
            assignType = "Scissors";
        }
    
        console.log(assignType);

        // assign choice to function
        
