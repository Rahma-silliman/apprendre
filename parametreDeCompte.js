const c = document.querySelector("#modifiPhoto");
const inputFile = document.getElementById("input-file");
const image = document.getElementById("avatarProfil");
const image2 = document.getElementById('mieu');
const notification = document.querySelector('.notification');
const nomValue = document.querySelector('#nomValue');
const emailValue = document.querySelector('#emailValue');
const biographieValue = document.querySelector('#biographieValue');
const sendMessage = document.querySelector('#sendMessage');
const nouveauMdp = document.querySelector('#nouveauMdp');
const ancienMdp = document.querySelector('#ancienMdp');
const confirmationMdp = document.querySelector('#confirmationMdp');


const tableUsers = [
  {
      id:"Rahma",
      password: '123456',
      email:"rahma@gmail.com",
      img:"./icon.jpeg"
  }
]
 if(JSON.parse(localStorage.getItem('tableUsers')) === null) {
  localStorage.setItem('tableUsers',JSON.stringify(tableUsers) || []);
 } 
 function display() {
  notification.classList.remove('d-none');
  setTimeout(() => {
    notification.classList.add('d-none');
  }, 2000);
 
  notification.children[1].textContent = "Votre photo a été éffectuée avec succes"
  let file = inputFile.files[0];
  let imageURL = URL.createObjectURL(file);
  console.log(imageURL);
  image.src = imageURL;

  localStorage.setItem("photo",imageURL);
}
    
let filerecupere = localStorage.getItem('photo');

window.addEventListener('load',()=>{
if(localStorage.getItem('photo')) {
  let filerecupere = localStorage.getItem('photo');
  image.src = filerecupere;
  image2.src = filerecupere

} 

else{
  localStorage.setItem("photo","images/avatar.jpg");
  image.src = "images/avatar.jpg"
  image2.src = "images/avatar.jpg"
}

})
let newTable = []

let tablesUsers = JSON.parse(localStorage.getItem('tableUsers'));
const supprimerCompte = ()=>{
  notification.classList.remove('d-none');
  setTimeout(() => {
    notification.classList.add('d-none');
  }, 2000);
 console.log(notification);
  notification.children[1].textContent = "Votre compte à éte supprimer"
  localStorage.clear();
}
const supprimerPhoto = ()=>{
  notification.classList.remove('d-none');
  setTimeout(() => {
    notification.classList.add('d-none');
  }, 2000);
 
  notification.children[1].textContent = "Votre photo a été supprimer avec succes"
  localStorage.removeItem("photo");
  document.location.reload()
}
const ouvrirChamp = ()=>{
  document.querySelector('#mdpSetting').classList.remove('d-none');
}

const modifierPassword = ()=>{

  if(tablesUsers){
    for(items of tablesUsers){
      console.log(items.password);
      if(items.password && ancienMdp.value === items.password){
        console.log(items.password);
       if(nouveauMdp.value === confirmationMdp.value){
        document.querySelector('#mdpSetting').classList.add('d-none');
     
      notification.classList.remove('d-none');
      setTimeout(() => {
        notification.classList.add('d-none');
      }, 2000);
     
      notification.children[1].textContent = "Votre mot de passe a été modifié avec succes"
       localStorage.setItem('newPassword',nouveauMdp.value);
       }
      }
      else{
        notification.classList.remove('d-none');
        setTimeout(() => {
          notification.classList.add('d-none');
        }, 2000);
       
        notification.children[1].textContent = "Assurer que l'ancien mot de passe est correct"
      }
    }
  }

}

const changeProfile = ()=>{
  if(tablesUsers ||localStorage.getItem('newPassword') || filerecupere){
    notification.classList.remove('d-none');
      setTimeout(() => {
        notification.classList.add('d-none');
      }, 2000);
     
      notification.children[1].textContent = "la mise à jour a été éffectuée avec succes"
  
    let newPassword = localStorage.getItem('newPassword')
    let newObject = {
      id:nomValue.value,
      email:emailValue.value,
      password:newPassword,
      img:filerecupere

    }
    for(items of tablesUsers){
      items = newObject;
      newTable.push(newObject)
      localStorage.setItem('tableUsers',JSON.stringify(newTable))||[]
    }
  }
}
