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
            let team= "";  
            if(player.team == "PSG"){ 
              team = "<p><b>Team:</b>"+ player.team+ "</p><img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png' class='escudo'>";
            }else if(player.team == "REAL MADRID") {
              team = "<p><b>Team:</b>"+ player.team+ "</p><img src='https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/640px-Real_Madrid_CF.svg.png' class='escudo'>";
            }
              span.innerHTML += `${player.name} ${player.age} ${player.position}`;   
            span.innerHTML += "<div class='player'>";
            span.innerHTML += "<p><b>Name:</b>"+ player.name +"</p>";
            span.innerHTML += "<p><b>Age:</b>"+ player.age +"</p>";
            span.innerHTML += "<p><b>POS:</b>"+ player.position +"</p>";
            span.innerHTML += "<p><b>POS:</b>"+ player.position +"</p>";
            span.innerHTML += team;


            append(li, span);
            append(ul, li);
        }
        
      })
      .catch((error) => console.log(error));
  }

  fetchProducts();