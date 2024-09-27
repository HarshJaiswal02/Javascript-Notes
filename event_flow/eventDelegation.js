document.getElementById("category").addEventListener("click", (e) => {
  console.log("Category of item ");
  console.log(e);
  console.log(e.target.tagName);
  if (e.target.tagName == "LI") {
    console.log(window.location.href + "/" + e.target.id);
  }
  //   window.location.href = "/" + e.target.id;
  console.log(window.location.href);
});

// FORM (EVENT DELEGATION)

document.getElementById("form").addEventListener("keyup", (e) => {
  console.log(e.target.dataset.uppercase); //"" ==> boolean - false
  console.log(e.target.dataset.lowercase); //undefined
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
    // console.log(e);
  }
});
