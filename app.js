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
        console.log(players);
        
        for(let player of players){
            let li = createNode('li');
            let span = createNode('span');           
            span.innerHTML += `${player.name} ${player.age} ${player.position}`;   
            span.innerHTML += <a href="/players/+`${player._id}`+"></a>;
            span.innerHTML += <p><b>Name:</b> {player.name} </p>;


            append(li, span);
            append(ul, li);
        }
        
      })
      .catch((error) => console.log(error));
  }

  fetchProducts();