//The FizzBuzz Challenge :

// Prints numbers from 1 to n with,
// “Fizz” for multiples of 3
// “Buzz” for multiples of 5
// “FizzBuzz” for multiples of both.


const FizzBuzz = n => {
    for(i = 1; i<=n; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz");
        }
        else if(i%5 === 0){
            console.log("Buzz");
        }
        else if(i%3 === 0){
            console.log("Fizz");
        }
        else console.log(i);
    }
}

FizzBuzz(30);


// FizzBuzz Optimized in JavaScript
// A compact version of the classic FizzBuzz challenge using
// nested ternary operators for ultra-clean output logic.


const NewFizzBuzz = n => {
    for(i=1; i<=n; i++){
        i%3?i%5?i%15? i:"FizzBuzz" : "Buzz" : "Fizz"
    }
}

NewFizzBuzz(30);