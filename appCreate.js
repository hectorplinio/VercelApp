
async function fetchCreateProduct() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const age = document.getElementById("age").value;
  const position = document.getElementById("position").value;
  const team = document.getElementById("team").value;

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
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Player created succesfully");
      window.location.href = "index.html";
    })
    .catch((error) => console.log(error));
}
