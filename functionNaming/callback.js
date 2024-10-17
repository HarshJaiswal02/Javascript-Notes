// What is a callback function - A function which is passed as a parameter in to a function

setTimeout(function () {
  console.log("This executes after 4s");
}, 4000);
function x(y) {
  console.log("x");
  console.log(y());
}
// let i = 0;
// while (i < 1000000000) i++;

x(function y() {
  console.log("y");
});

function close() {
  let X = 0;
  document.querySelector("#btn").addEventListener("click", function () {
    console.log("Button click ", ++X);
  });
}
// console.log();
close();

//Garbage collection and removing the event listener .. Why we remove the event listener because it takes up the memory as it forms closure and the value of X {count} would not be free as the program wuld be waiting if sometime a user would clicked up the bt and we have to perform the operation
