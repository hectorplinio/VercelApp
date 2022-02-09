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
