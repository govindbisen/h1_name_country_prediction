const pokemon_container = document.getElementById("pokemon_container");
const pokemon_number = 150;

async function getData(){
   try {
    var data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    res = await data.json();
    for(let i=0;i<pokemon_number;i++)
    {   var div = document.createElement("div");
        div.innerText=res.results[i].name;
        div.style.fontSize = "40px";
        div.style.color = "white";
        div.style.textAlign = "center";

        pokemon_container.appendChild(div);
        
        let pokemon_image = document.createElement('img');
        pokemon_image.setAttribute("width",200)
        pokemon_image.src="https://pokeres.bastionbot.org/images/pokemon/"+(i+1)+".png";
        div.appendChild(pokemon_image);
       
    }
    
    
   } catch (error) {
       console.log(error);
   }



}

getData();
