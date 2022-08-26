let n = window.prompt("How Many Cards Do You Want", "Write Any Num");


let names = ["Ola", "Omar", "Amr", "Ali"];
let ages = ["27 years", "28 years", "29 years", "30 years"];

let container = document.createElement("div");
container.style.textAlign = "center";
document.body.appendChild(container);
console.log(container)

function elements(names = "a person", ages = "under 30") {
    // create elements
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let age = document.createElement("p");
    let img = document.createElement("img");

    //create text for elements
    let textOfTitle = document.createTextNode(names);
    let textOfAge = document.createTextNode(ages);

    //add text inside elements
    title.appendChild(textOfTitle);
    age.appendChild(textOfAge);
    img.src = "images/78931928_283582915931865_9068348344811651072_n.jpg";

    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);

    container.appendChild(card);

    //style
    card.style.width = "200px";
    card.style.backgroundColor = "gray";
    card.style.color = "white";
    card.style.padding = "10px";
    card.style.margin = "2px";
    card.style.display = "inline-block";
    card.style.borderBottom = "2px solid red";

    img.style.width = "100%";
    img.style.borderTop = "1px solid  yellow";
    img.style.borderBottom = "1px solid  yellow";

    title.style.textTransform = "capitalize"

}

// elements();

for (let i = 0; i < n; i++) {
    elements(names[i], ages[i]);
}
// for(let i=0; i<names.length; i++){
//   elements(names[i],ages[i]);
// }


