var output = [];
let count = 0;

function fizzBuzz(){
    ++count;
    if(count % 3 === 0 && count % 5 === 0){
        output.push("fizzBuzz");
    }
    else if(count % 5 === 0){
        output.push("buzz");
    }
    else if(count % 3 === 0){
        output.push("fizz");
    }
    else{
        output.push(count);
    }
}
