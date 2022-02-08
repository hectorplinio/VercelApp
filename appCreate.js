const btnNew = document.getElementById("btnNew");
btnNew.addEventListener("click", fetchCreateProduct);

async function fetchCreateProduct() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const age = document.getElementById("age").value;
  const position = document.getElementById("position").value;
  const team = document.getElementById("team").value;
  console.log(name + " " + surname + " " + age + " " + position + " " + team);

  const newPlayer = {
    name: name,
    surname: surname,
    age: age,
    position: position,
    team: team,
  };

  const response = await fetch("https://new-vercel.herokuapp.com/players", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlayer),
    mode: "no-cors",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}
