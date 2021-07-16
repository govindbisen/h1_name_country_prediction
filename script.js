//-----------------------------DATA API--------------------------------------
// https://api.nationalize.io/?name=michael

// {"name":"michael","country":
// [{"country_id":"US","probability":0.08986482266532715},
// {"country_id":"AU","probability":0.05976757527083082},
// {"country_id":"NZ","probability":0.04666974820852911}]}

// ------------------------------------------------------------------

// i will make only one function prediction based on highest probability

// creating label and textbox to take name as input
var label = document.createElement("LABEL");
label.setAttribute("for", textBox);
label.innerHTML = "<i>Write your name to find in which country your name is common</i> <br>";
document.body.appendChild(label);
var textBox = document.createElement("INPUT");
textBox.setAttribute("type", "text");
textBox.setAttribute("id", "myText");
document.body.appendChild(textBox);

// creating a submit button that will call the function to fetch and match the data.

var button = document.createElement("button");
button.setAttribute("onclick", "nameFetch()");
button.innerHTML = "submit";
document.body.appendChild(button);

async function nameFetch() {
 try {
    var name = document.getElementById("myText").value;
    console.log(name);
    let data = await fetch("https://api.nationalize.io/?name=" + name);
    var resp = await data.json();

    if(resp.country==""||null){
      alert("Sorry! Data not found")
    }
    else{
      console.log(resp.country);
  
      var div = document.createElement("div");
      div.id = "op";
      document.body.appendChild(div);
      
      document.getElementById("op").innerHTML=""
      // til here code is running
      //div.className = "output"
      //div.innerText = resp.country;
      for (let i = 1; i < 3; i++) {
        let p = document.createElement("p");
        p.innerText = i+ " Country you may belong to is:  "+resp.country[i].country_id + "with probability :"+resp.country[i].probability;
        document.getElementById("op").appendChild(p);
      }
       
    }
    
 } catch (error) {
     console.log(error);
     //alert(error+"this name is inappropriate!! try other name.")
 }

  // alert(name);
}
