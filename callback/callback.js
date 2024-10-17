console.log("hello");
const cb = () => {
  console.log("Inside the timer for 5sec");
};
setTimeout(cb, 5000);
console.log("END");

const cart = ["pants", "shoes", "kurta"];

api.showOrder();

api.placeOrder();

// Both the apis are dependent on each other means if the order is shown then only we can place the order ///
// so how we will achieve this
// we will use callback
api.showOrder(cart, function () {
  api.placeOrder(function () {
    api.sendPayment(function () {
      api.updateApi();
    });
  });
});

//Now proceed to payment///

// Our code starts to grow horizontally --> Call back hell
// Unreadable and unmaintainable

// 2. Inversion of control
// lose over control of our code  
