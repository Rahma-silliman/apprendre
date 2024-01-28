const allCammande = document.querySelector("thead");
const commandeTbody = document.querySelector("#commandeTbody");
const inputCommande = document.querySelector('#inputCommande');
const reverseCommande = document.querySelectorAll(".iconsCache");
function compareStatut(a, b) {
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
function compareNames(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
}
function compareDate(a, b) {
  const nameA = a.date.toUpperCase();
  const nameB = b.date.toUpperCase();

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
}

localStorage.setItem('commandeTableau',JSON.stringify(commandeTableau))
console.log(reverseCommande);
console.log(allCammande);  
console.log(commandeTableau);
const soumetre = (event) => {
  event.preventDefault();
};
commandeTableau.forEach((value, indice) => {


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


const icon1 = document.querySelectorAll('.un');
const icon2 = document.querySelectorAll('.deux');


let currentIcon = 1;
let indice;
const add = (event)=>{
  if (currentIcon === 1) {
    const dataOfcommande = JSON.parse(localStorage.getItem('commandeTableau'));
    commandeTbody.innerHTML = ""
    dataOfcommande.forEach(element =>{
      commandeTbody.innerHTML += `<tr><td>${element.id}</td> <td>${element.name}</td><td>${element.date}</td><td class="statut">${element.statut}</td><td><button class='btn'>Voir</button></td></tr>`
    })
    const statut = document.querySelectorAll(".statut");
    for (items of statut) {
      if (items.textContent == "En cours") {
        items.style.color = "red";
      } else {
        items.style.color = "green";
      }
    }
    event.target.children[0].children[0].style.display = 'inline-block';
    event.target.children[0].children[1].style.display = 'none';
    currentIcon = 2;

} else {
  event.target.children[0].children[1].style.display = 'inline-block';
  event.target.children[0].children[0].style.display = 'none';
    currentIcon = 1;
   switch(indice){
    case 0:
      commandeTableau.reverse();
      break;
    case 1:
      commandeTableau.sort(compareNames);
      break;
    case 2:
      commandeTableau.sort(compareStatut);
      break;
      default:
        commandeTableau.sort(compareDate)
        break;
   }
   
    console.log(commandeTableau);

    commandeTbody.innerHTML = "";
    commandeTableau.forEach((value) => {
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
}
}
allCammande.querySelectorAll("th").forEach((element,index)=>{
  element.addEventListener("click", (event)=>{
    indice = index
    add(event)
  });
})

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







