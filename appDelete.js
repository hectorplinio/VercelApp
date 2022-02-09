async function fetchDeleteProduct() {
  const idField = document.getElementById("id").value;
  const nameField = document.getElementById("name").value;
  const surnameField = document.getElementById("surname").value;
  const ageField = document.getElementById("age").value;
  const positionField = document.getElementById("position").value;
  const teamField = document.getElementById("team").value;
  console.log(
    idField +
      " " +
      nameField +
      " " +
      surnameField +
      " " +
      ageField +
      " " +
      positionField +
      " " +
      teamField
  );

  const newPlayer = {
    name: nameField,
    surname: surnameField,
    age: ageField,
    position: positionField,
    team: teamField,
  };
  const response = await fetch(
    "https://new-vercel.herokuapp.com/players/" + idField + "?_method=DELETE",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      alert("Product Deleted");
      window.location.href = "index.html";
    })
    .catch((error) => console.log(error));
}
