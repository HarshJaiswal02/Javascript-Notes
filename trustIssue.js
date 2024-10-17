let startDate = Date.now();
console.log("Start");
function cb() {
  console.log("callback");
}

cb();

setTimeout(cb, 2000);
let newDate = startDate;

while (newDate < startDate + 10000) {
  newDate = Date.now();
}
console.log("After 10s");
function chai() {
  let username = "hitesh";
  console.log(this.username);
}
chai();
