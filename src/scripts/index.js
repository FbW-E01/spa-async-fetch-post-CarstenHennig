// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import "babel-polyfill";

// \/ All of your javascript should go here \/

const form = document.querySelector("#submit-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#checkbox");

console.log(form);
form.addEventListener("submit", (e) => {
  const user = {
    name: name.value,
    email: email.value,
    password: password.value,
    message: message.value,
    checkbox: checkbox.checked,
  };
  e.preventDefault();
  //   alert("Thank you for submitting your details");
  //   console.log(user);

  const url = "https://jsonplaceholder.typicode.com/users";
  const config = {
    method: "POST",
    body: JSON.stringify(user),
  };
  console.log(user);
  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      alert("Thank you for submitting your details!\nUserID: " + result.id);
      console.log(result);
    })
    .catch((error) => console.warn("Something weird happened - Try again!"));
});
