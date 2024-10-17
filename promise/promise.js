// const cart = ["Shoes", "Pants", "Shirts"];

// createOrder(card,function () {
// Gives -> orderId
//   proceedToPayment(orderId);
// } );

//Here we are passing a function to another function

// const promise = createOrder(card);

//{data:undefined}  THIS IS A PROMISE OBJECT
// ... more lines of code
//{data: data filled with some content with some time}

// promise.then(function (orderId) {
//   // Gives -> orderId
//   proceedToPayment(orderId);
// });
// We are attaching a call back function to a promise object

// as soon as the promise object get filled up with the data or response it will call the call back function  - it gives us gaurant that it will call this callback
const GITHUB_API = `https://api.github.com/users/akshaymarch7`;
const user = fetch(GITHUB_API);

console.log(user);
// [[Prototype]]: Promise
// [[PromiseState]]:"fulfilled"
// [[PromiseResult]]:Response

user.then(function (data) {
  console.log(data);
});
// user
//   .then(function (orderId) {
//     return showOrder(orderId);
//     console.log(data);
//   })
//   .then(function (paymentInfo) {
//     return showPayment(paymentInfo);
//   })
//   .then(function (balance) {
//     return updateBalanceInWallet(balance);
//   });

// promise objects are immutable
