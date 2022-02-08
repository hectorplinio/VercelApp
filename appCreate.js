const btnNew = document.getElementById("btnNew");
btnNew.addEventListener("click", fetchCreateProduct);

function getPositions() {
  let positions = ["GK", "DF", "MF", "FW", "CH"];
  let teams = [
    "REAL MADRID",
    "FC BARCELONA",
    "PSG",
    "BAYERN MUNICH",
    "BORUSSIA DORTMUND",
  ];
  var optionPos = "";
  optionPos = "";
  var optionTeam = "";
  optionTeam = "";

  for (let i = 0; i < positions.length; i++) {
    optionPos +=
      "<option value='" +
      positions[i] +
      "' id='position'>" +
      positions[i] +
      "</option>";
  }
  for (let x = 0; x < teams.length; x++) {
    optionTeam +=
      "<option value='" + teams[x] + "' id='team'>" + teams[x] + "</option>";
  }
  document.getElementById("position").innerHTML = optionPos;
  document.getElementById("team").innerHTML = optionTeam;
}
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
  debugger;

  const response = await fetch(
    "https://vercel-app-futbol.herokuapp.com/players",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
      mode: "no-cors",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}
