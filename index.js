console.log("Hii from javascript");

const title = document.getElementsByClassName("title");
console.log(title);

title[0].textContent = `Hi From Javascript dom`;
const value = (title[0].style.textAlign = `center`);
console.log(value);
