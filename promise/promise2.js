//CONSUMER PART

const cart = ["shoes", "kurta", "pant"];

// its a async operation "createOrder(card)";
const promise = createOrder(cart);
console.log(promise);
console.log("Here i am");
promise
  .then(function (orderId) {
    console.log("PROMISE TWO");
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log("error callback ", err.message);
  });

//PRODUCER PART

function createOrder(cart) {
  // resolve and reject are given by javascript to build a promise
  const pr = new Promise(function (resolve, reject) {
    //Create An Order
    //Validate Card
    //OrderId
    if (!validateCart(cart)) {
      // resolve and reject are the function given by the javaScript
      const err = new Error("Some error message");
      reject(err);
    }

    const orderId = { data: "1239832", name: "Harsh" };

    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
//   console.log("jUST ABOE RETURN PR ")
  return pr;
}

function validateCart(cart) {
  return true;
}

function proceedToPayment(orderId) {
  //SUMMARY
  return new Promise(function (resolve, reject) {
    resolve("Payment successfully");
  });
}

// console.log(promise);
