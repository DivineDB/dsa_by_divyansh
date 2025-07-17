
//ReverseInt
// const revInt = n => { reversed = n.toString().split("").reverse().join("");
// return parseInt(reversed);
// }

// console.log(revInt(9876));

//CapitalizeString
//const CapStr = str => { return str.toLowerCase().split(" ").map((word => word[0].toUpperCase()
// + word.slice(1))).join(" ")}

// console.log(CapStr("neha"));

//FIZZBUZZ
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
