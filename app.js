function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

async function fetchProducts() {
    const response = await fetch(
      "https://vercel-app-futbol.herokuapp.com/players",
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
        const ul = document.getElementById('players');
        let players = data;
        
        for(let player of players){
          console.log(player)
            let li = createNode('li');
            let span = createNode('span');           
            span.innerHTML += "<a href='/players/<%= player.id'>"; 
            span.innerHTML += `<p><b>Name:</b> `+player['name']`+ </p>`; 
            span.innerHTML += `<p><b>Age:</b> `+player['age']`+ </p>`; 
            span.innerHTML += `<p><b>POS:</b> `+player['position']`+ </p>`; 

            append(li, span);
            append(ul, li);
        }
        
      })
      .catch((error) => console.log(error));
  }

  fetchProducts();