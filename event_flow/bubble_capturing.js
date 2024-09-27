document.getElementById("grandParent").addEventListener(
  "click",
  (e) => {
    //   e.stopPropagation();
    console.log("GrandParent Clicked");
  },
  true
);

document.getElementById("parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked");
    // e.stopPropagation();
  },
  true
);

document.getElementById("child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked");
    e.stopPropagation();
  },
  true
);
