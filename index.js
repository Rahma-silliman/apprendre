const passwordInput = document.querySelector("#password");
const identifyInput = document.querySelector("#identify");
const connexionButton = document.querySelector("#connexion");
const notification = document.querySelector(".notification");
const timerBlock = document.querySelector(".timerBlock");
timerBlock.classList.add("desactive");
notification.classList.add("desactive");

let  valueSecondes = parseInt(localStorage.getItem('valueInSecond'), 10) || 1800;
let compteur = 0;
let chronoEncours = false
localStorage.setItem("Tentative", 3);
if(!JSON.parse(localStorage.getItem('valueInSecond'))){
  localStorage.setItem('valueInSecond',1800);
}

document.querySelector('fieldset').style.border = 'none'

function foo() {

      let minutes =  parseInt(valueSecondes / 60, 10)
      let secondes = parseInt(valueSecondes % 60, 10);
   
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      secondes = secondes < 10 ? `0${secondes}` : secondes;
      valueSecondes = valueSecondes <= 0 ? 0 : valueSecondes - 1;
    
      timerBlock.children[4].innerHTML = `00:${minutes}:${secondes}`;
      
      localStorage.setItem('valueInSecond',valueSecondes);
  }

let secretQuestion = ()=>{
    fivSecret = prompt("Question secrete: quelle est le prenom de JOHN","")
    localStorage.setItem('fivSecret',"rahma")
   }
   

if (
  !localStorage.getItem("Tentative") ||
  localStorage.getItem("Tentative") <= 0
) {
  localStorage.setItem("Tentative", 3);
}
if (!JSON.parse(localStorage.getItem("tableUsers"))) {
  const tableUsers = [
    {
      id: "Rahma",
      password: "123456",
      email: "rahma@gmail.com",
      img: "./icon.jpeg",
    },
    {
      id: "issa",
      password: "123",
      email: "issa@gmail.com",
      img: "./icon.jpeg",
    },
    {
      id: "moussa",
      password: "1234",
      email: "moussa@gmail.com",
      img: "./icon.jpeg",
    },
  ];
  localStorage.setItem("tableUsers", JSON.stringify(tableUsers));
}
const tableUsersStorage = JSON.parse(localStorage.getItem("tableUsers"));
if(JSON.parse(localStorage.getItem("valueInSecond")) === 0){
  let fivSecret = localStorage.getItem('fivSecret')
  if(!fivSecret || fivSecret !== "rahma"){
    chronoEncours = true;
    localStorage.setItem('chronoEncours',chronoEncours)
    setTimeout(() => {
      timerBlock.classList.add("desactive");
    }, 1800);
 
     }
 
}
function afterTime() {
  notification.classList.remove("desactive");
  setInterval(() => {
    notification.classList.add("desactive");
  }, 3000);
}
const nombreTentative = ()=>{
  let tentative = localStorage.getItem("Tentative");
  if (tentative > 0) {
    tentative--;
  
  } else if (tentative < 0) {
    tentative = 0;
  }
  localStorage.setItem("Tentative", tentative);
}
const saisiDeChamp = () => {
    let tentative = localStorage.getItem("Tentative");
   
    if (!identifyInput.value && !passwordInput.value) {
     
      notification.children[0].textContent = "Invalide";
      notification.children[1].textContent =
        "Veuillez Saisir le champ de saisi";

    }
 for(items of tableUsersStorage){
    afterTime();
 if (
      identifyInput.value !== items.id &&
      passwordInput.value !== items.password
    ) {
         if (tentative > 0) {
     let tentative = localStorage.getItem('Tentative')
        notification.children[0].textContent = "Connexion";
        notification.children[1].textContent =
          "OUPS!!! Password ou Identifiant incorrect";
      } 
    } else if (
      identifyInput.value.trim() === items.id &&
      passwordInput.value === items.password
    ) {
      location.href = "dashboard.html";
    }
  }
};

connexionButton.addEventListener("click", (event) => {
  event.preventDefault();
  saisiDeChamp();

  let tentative =parseInt(localStorage.getItem("Tentative")) ;
  if(identifyInput.value !== null && passwordInput.value !== null){
    console.log(identifyInput.value);
    nombreTentative()
  }
  if(tentative === 0){
    console.log("yes");
    secretQuestion();
    if(!fivSecret || fivSecret !== "rahma"){
      chronoEncours = true
      localStorage.setItem('chronoEncours',chronoEncours)
      timerBlock.classList.remove("desactive");
       setInterval(foo,1000);
        document.querySelector('fieldset').setAttribute('disabled','disabled')
       }
       else { 
            if(fivSecret = "rahma"){
               location.href = "dashboard.html";
           }
      }
  }

});
window.onload = ()=>{
if(JSON.parse(localStorage.getItem('chronoEncours')) === true){
  timerBlock.classList.remove("desactive");
  setInterval(() => {
   foo()
  }, 1000);

}

}

if(JSON.parse(localStorage.getItem('valueSecond')) === 0){
  timerBlock.classList.add("desactive");
  chronoEncours = false
}