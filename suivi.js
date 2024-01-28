const allCammande = document.querySelector("thead");
const suiviTbody = document.querySelector("#suiviTbody");
const inputValue = document.querySelector('#inputValue');
const reverseCommande = document.querySelectorAll(".iconsCache");
localStorage.setItem('suiviTableau',JSON.stringify(suiviTableau))
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
function compareDate(a,b){
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
console.log(suiviTableau);

const soumetre = (event) => {
  event.preventDefault();
};
const seeDisponibilite = ()=>{
  
}
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

const icon1 = document.querySelectorAll('.un');
const icon2 = document.querySelectorAll('.deux');


let currentIcon = 1;
let indice;
const add = (event)=>{
  if (currentIcon === 1) {
    const dataOfsuivi = JSON.parse(localStorage.getItem('suiviTableau'));
    suiviTbody.innerHTML = ""
    dataOfsuivi.forEach(element =>{
      suiviTbody.innerHTML += `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.date}</td><td>${element.rapport}</td><td><button class='btn'>Voir</button></td></tr>`;
    })

    event.target.children[0].children[0].style.display = 'inline-block';
    event.target.children[0].children[1].style.display = 'none';
    currentIcon = 2;

} else {
  
  event.target.children[0].children[1].style.display = 'inline-block';
  event.target.children[0].children[0].style.display = 'none';
    currentIcon = 1;
   switch(indice){
    case 0:
      suiviTableau.sort(compareIds);
      break;
    case 1:
      suiviTableau.sort(compareNames);
      break;
    case 2:
      suiviTableau.sort(compareDate);
      break;
      default:
        suiviTableau.sort(compareRpports)
        break;
   }
    suiviTbody.innerHTML = "";
    suiviTableau.forEach((value) => {
      suiviTbody.innerHTML += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.date}</td><td>${value.rapport}</td><td><button class='btn'>Voir</button></td></tr>`;
     
    });
}
const btn = document.querySelectorAll('.btn')
btn.forEach((element,indice)=>{
  element.addEventListener('click',()=>{

   if(suiviTableau[indice].rapport == "Disponible"){
    localStorage.setItem('name',suiviTableau[indice].id)
    console.log(suiviTableau[indice].id);
    location = "suividetail.html"
   }
     
  })
})
}

allCammande.querySelectorAll("th").forEach((element,index)=>{

  element.addEventListener("click", (event)=>{
    indice = index
    add(event)
  });
})


inputValue.addEventListener('keydown',(event)=>{
    if(event.key === "Enter"){
        suiviTbody.innerHTML = ""
  /*       if(inputValue.value !== ""){
        


            if(inputValue.value === suiviTableau || inputValue.value === "disponible" || inputValue.value === "Disponible"){
                console.log(inputValue.value);
                let TableOfEnval= suiviTableau.filter((item) =>{
                  item.rapport ===  'Disponible' 
                })

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
        } */

    
        
    }
    })
