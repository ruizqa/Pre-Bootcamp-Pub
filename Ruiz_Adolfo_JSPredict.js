//Predict 1

function myBirthYearFunc(){
    console.log("I was born in " + 1980);

}

// An error would pop up as it is not possible to add a number to a string of characters


//Predict 2
function myBirthYearFunc(birthYearInput){
        console.log("I was born in " + birthYearInput);
    }

// If birthYearInput is a number (e.g. 1980) then an error would pop up, just as in prediction 1.

//Predict 3

function add(num1, num2){
        console.log("Summing Numbers!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        console.log(sum);
    }

// The console log would state: "Summing Numbers!" "num1 is 10" "num2 is 20" "30"