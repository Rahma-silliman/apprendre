const allCammande = document.querySelector("thead");
const suiviTbody = document.querySelector("#suiviTbody");
const inputValue = document.querySelector('#inputValue');
const reverseCommande = document.querySelectorAll(".iconsCache");
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
function compareRpports(a,b){
    const nameA = a.rapport.toUpperCase();
    const nameB = b.rapport.toUpperCase();
  
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
}
function compareIds(a,b){
    const nameA = a.id.toUpperCase();
    const nameB = b.id.toUpperCase();
  
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
}
console.log(suiviTableau);

const soumetre = (event) => {
  event.preventDefault();
};
suiviTableau.forEach((value, indice) => {
  suiviTbody.innerHTML += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.date}</td><td class="statut">${value.rapport}</td><td><button class='btn'>Voir</button></td></tr>`;
  const btn = document.querySelectorAll('.btn');
  btn.forEach((element,indice)=>{
    element.addEventListener('click',()=>{

     if(suiviTableau[indice].rapport == "Disponible"){
      localStorage.setItem('name',suiviTableau[indice].id)
      console.log(suiviTableau[indice].id);
location = "suividetail.html"
     }
       
    })
})
  
});
allCammande.querySelectorAll("th")[0].addEventListener('click',(event)=>{
    event.target.children[0].innerHTML = `<i class="fa-solid fa-arrow-down-a-z"></i>`;
    suiviTableau.sort(compareIds);
    suiviTbody.innerHTML = "";
    suiviTableau.forEach((value, indice) => {
        suiviTbody.innerHTML += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.date}</td><td>${value.rapport}</td><td><button class='btn'>Voir</button></td></tr>`;
    });
});
allCammande.querySelectorAll("th")[1].addEventListener('click',(event)=>{
    event.target.children[0].innerHTML = `<i class="fa-solid fa-arrow-down-a-z"></i>`;
    suiviTableau.sort(compareNames);
    suiviTbody.innerHTML = "";
    suiviTableau.forEach((value, indice) => {
        suiviTbody.innerHTML += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.date}</td><td>${value.rapport}</td><td><button class='btn'>Voir</button></td></tr>`;
    });
})
allCammande.querySelectorAll("th")[3].addEventListener('click',(event)=>{
    event.target.children[0].innerHTML = `<i class="fa-solid fa-arrow-down-a-z"></i>`;
    suiviTableau.sort(compareRpports);
    suiviTbody.innerHTML = "";
    suiviTableau.forEach((value, indice) => {
        suiviTbody.innerHTML += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.date}</td><td>${value.rapport}</td><td><button class='btn'>Voir</button></td></tr>`;
    });
})
allCammande.querySelectorAll("th")[2].addEventListener('click',(event)=>{
    event.target.children[0].innerHTML = `<i class="fa-solid fa-arrow-down-a-z"></i>`;
    suiviTableau.sort(compareRpports);
    suiviTbody.innerHTML = "";
    suiviTableau.forEach((value, indice) => {
        suiviTbody.innerHTML += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.date}</td><td>${value.rapport}</td><td><button class='btn'>Voir</button></td></tr>`;
    });
})


inputValue.addEventListener('keydown',(event)=>{
    if(event.key === "Enter"){
        suiviTbody.innerHTML = ""
        if(inputValue.value !== ""){
          
            if(inputValue.value === "dis" || inputValue.value === "disponible" || inputValue.value === "Disponible"){
                console.log(inputValue.value);
                let TableOfEnval= suiviTableau.filter((item) => item.rapport ===  'Disponible')

                TableOfEnval.forEach((value,indice) => {    
                    suiviTbody.innerHTML += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.date}</td><td>${value.rapport}</td><td><button class='btn'>Voir</button></td></tr>`
             });
            }
           else if(inputValue.value === "Non disponible" || inputValue.value === "non" || inputValue.value === "non disponible"){
                let TableOfTerm= suiviTableau.filter((item) => item.rapport ===  'Non disponible')
                TableOfTerm.forEach((value,indice) => {    
                    suiviTbody.innerHTML += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.date}</td><td >${value.rapport}</td><td><button class='btn'>Voir</button></td></tr>`
             });
            }
            else{
                suiviTbody.innerHTML =`<tr><td colspan="5">Aucune donner à afficher</td></tr>`
            }
        }
        
    }
    })
