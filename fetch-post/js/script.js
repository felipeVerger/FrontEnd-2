// fetch("https://reqres.in/api/users")
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(users) {
//         users.data.forEach(function(user) {
//             user.first_name
//         });
//     })

let formulario = document.querySelector("#register");
let inputName = document.querySelector("#name");
let inputJob = document.querySelector("#job");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();


  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: inputName.value,
      lastname: inputJob.value,
    }),
  })
    .then(function(res) {
      return res.json();
    })
    .then(function(usuarioCreado) {
      console.log(usuarioCreado);
      formulario.reset()
    });
});
