Anonymous function- A function without a name is known to be an anonymous function
function () {

}
anonymous function are used where when you want to treat function are used as values - assigned it to variable ==> function expression
First class Function -

Function statements -
function x(){
    console.log("x called");
}

Function expression -

var x = function(){

}

Major difference between a function statement and function expression is that hoisting
// function acts like a value

Function declaration - Another jargon which is same as function statement when function is just declared

Named function expression - Its is same a function expression but when it is being used as a name..
var x = function abc(){

}

corner case - gotcha -- x()👍 abc() ❌😵 you get error-> abc is not defined reference error
but you can access it like
var x = function abc(){
    console.log(abc)
    OUTPUT function definition: abc(){
    console.log(abc)
}
}


First class function - In javascript The ability of function when functions are treated as a value, function inside a function as parameter  , return as function.

Functions are first class citizens also same as first class function

