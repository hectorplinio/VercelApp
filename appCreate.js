function getMonth() {
  let positions = ["GK", "DF", "MF", "FW", "CH"];
  let team = [
    "REAL MADRID",
    "FC BARCELONA",
    "PSG",
    "BAYERN MUNICH",
    "BORUSSIA DORTMUND",
  ];
  var optionPos = "";
  optionPos = "<option>POS</option>";
  var optionTeam = "";
  optionTeam = "<option>TEAM</option>";

  for (let i = 0; i < positions.length; i++) {
    let positions_number = i + 1;

    let pos = positions_number <= 9 ? "0" + positions_number : positions_number;

    optionPos +=
      '<option value="' +
      pos + "id='position'>" +
      pos[i] +
      "</option>";
  }
  document.getElementById("position").innerHTML = optionPos;
}
