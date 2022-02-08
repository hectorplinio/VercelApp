
async function fetchEditProducts(id) {
    const response = await fetch(
      "https://new-vercel.herokuapp.com/players/"+id,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        const ul = document.getElementById('form');
        let player = data;        
        try {
		 
          document.getElementById("id").value = id;
          
          if (player != null){
           document.getElementById("name").value = player.name;      
           document.getElementById("surname").value = player.surname; 
           document.getElementById("age").value = player.age;      
           document.getElementById("position").value = player.position;
           document.getElementById("team").value = player.team;

          }
         
       }
       catch (e) {
          // sentencias para manejar cualquier excepción
          console.log(e); // pasa el objeto de la excepción al manejador de errores
       }
        
      })
      .catch((error) => console.log(error));
  }
  function getParameterByName(name, url = window.location.href) {
    console.log(url);
    
      name = name.replace(/[\[\]]/g, '\\$&');
    
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  async function fetchEditProduct() {
    const idField = document.getElementById("id").value;
    const nameField = document.getElementById("name").value;
    const surnameField = document.getElementById("surname").value;
    const ageField = document.getElementById("age").value;
    const positionField = document.getElementById("position").value;
    const teamField = document.getElementById("team").value;
  
    const newPlayer = {
      name: nameField,
      surname: surnameField,
      age: ageField,
      position: positionField,
      team: teamField,
    }; 
    console.log(newPlayer);
      const response = await fetch(
        "https://new-vercel.herokuapp.com/players/" + idField + "?_method=PUT",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
      body: JSON.stringify(newPlayer)
        },
    
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("Product Edited");
          window.location.href = "index.html";
        })
        .catch((error) => console.log(error));
    }