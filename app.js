function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


async function fetchProducts() {
    const response = await fetch(
      "https://new-vercel.herokuapp.com/players",
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
            let li = createNode('li');
            let span = createNode('span');
            let a = createNode('a');

            let team= "";  
            if(player.team == "PSG"){ 
              team = "<p><b>Team:</b>"+ player.team+ "</p><img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png' class='escudo'>";
            }else if(player.team == "REAL MADRID") {
              team = "<p><b>Team:</b>"+ player.team+ "</p><img src='https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/640px-Real_Madrid_CF.svg.png' class='escudo'>";
            }else if(player.team == "FC BARCELONA") {
              team = "<p><b>Team:</b>"+ player.team+ "</p><img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png' class='escudo'>";
            }else if(player.team == "BAYERN MUNICH") {
              team = "<p><b>Team:</b>"+ player.team+ "</p><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png' class='escudo'>";
            }else if(player.team == "BORUSSIA DORTMUND") {
              team = "<p><b>Team:</b>"+ player.team+ "</p><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/640px-Borussia_Dortmund_logo.svg.png' class='escudo'>";
            }
            a.setAttribute('href', "edit.html?id=" + player._id);
            a.innerText = "Edit player";	
            span.innerHTML += "<div class='player'>";
            span.innerHTML += "<p><b>Name:</b>"+ player.name +"</p>";
            span.innerHTML += "<p><b>Age:</b>"+ player.age +"</p>";
            span.innerHTML += "<p><b>POS:</b>"+ player.position +"</p>";
            span.innerHTML += "<p><b>POS:</b>"+ player.position +"</p>";
            span.innerHTML += team;

            append(li, a);
            append(li, span);
            append(ul, li);
        }
        
      })
      .catch((error) => console.log(error));
  }
  
  
