const allCammande = document.querySelector("thead");
const commandeTbody = document.querySelector("#commandeTbody");
const inputCommande = document.querySelector('#inputCommande');
const reverseCommande = document.querySelectorAll(".iconsCache");
function compareNames(a, b) {
  const nameA = a.statut.toUpperCase();
  const nameB = b.statut.toUpperCase();

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
}

console.log(reverseCommande);
console.log(allCammande);
console.log(commandeTableau);
const soumetre = (event) => {
  event.preventDefault();
};
commandeTableau.forEach((value, indice) => {
  const td = document.createElement("td");

  commandeTbody.innerHTML += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.date}</td><td class="statut">${value.statut}</td><td><button class='btn'>Voir</button></td></tr>`;
  const statut = document.querySelectorAll(".statut");
  for (items of statut) {
    if (items.textContent == "En cours") {
      items.style.color = "red";
    } else {
      items.style.color = "green";
    }
  }
});
for (item of allCammande.querySelectorAll("th")) {
  item.addEventListener("click", (event) => {
    commandeTableau.sort(compareNames);
    event.target.children[0].innerHTML = `<i class="fa-solid fa-arrow-down-a-z"></i>`;
    commandeTbody.innerHTML = "";
    commandeTableau.forEach((value, indice) => {
      commandeTbody.innerHTML += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.date}</td><td class="statut">${value.statut}</td><td><button class='btn'>Voir</button></td></tr>`;
      const statut = document.querySelectorAll(".statut");
      for (items of statut) {
        if (items.textContent == "En cours") {
          console.log(items);
          items.style.color = "red";
        } else {
          items.style.color = "green";
        }
      }
    });
  });
}

inputCommande.addEventListener('keydown',(event)=>{
    if(event.key === "Enter"){
        commandeTbody.innerHTML = ""
        if(inputCommande.value !== ""){
          
            if(inputCommande.value === "en cours" || inputCommande.value === "en" || inputCommande.value === "En cours"){
                console.log(inputCommande.value);
                let TableOfEnval= commandeTableau.filter((item) => item.statut ===  'En cours')

                TableOfEnval.forEach((value,indice) => {    
                    commandeTbody.innerHTML += `<tr><td>${value.id}</td> <td>${value.name}</td><td>${value.date}</td><td class="statut">${value.statut}</td><td><button class='btn'>Voir</button></td></tr>`
             });
            }
           else if(inputCommande.value === "terminé" || inputCommande.value === "ter" || inputCommande.value === "Terminée"){
                let TableOfTerm= commandeTableau.filter((item) => item.statut ===  'Terminée')
                TableOfTerm.forEach((value,indice) => {    
                    commandeTbody.innerHTML += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.date}</td><td class="statut">${value.statut}</td><td><button class='btn'>Voir</button></td></tr>`
             });
            }
            else{
                commandeTbody.innerHTML =`<tr><td colspan="5">Aucune donner à afficher</td></tr>`
            }
        }
        const statut = document.querySelectorAll(".statut");
        for (items of statut) {
          if (items.textContent == "En cours") {
            console.log(items);
            items.style.color = "red";
          } else {
            items.style.color = "green";
          }
        }
    }
    })







