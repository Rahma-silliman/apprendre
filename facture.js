const dataFacture = document.querySelector('#factureTbody');
const fatureInputResearsh = document.querySelector('#inputValue')
const iconsSearsh = document.querySelector('#iconsCache');
const iconsCaches = document.querySelectorAll('.iconsCache')
const theMarg = document.querySelector('#rech-facture');
const firstLine = document.querySelector('#marge');


function sort() {
    dataOfFacture.sort(compareNames)
}

let newTable = [];
let tableOfLabo = [];
let tableOfdate = [];
let myIdString
const { id, name, date } = factureTable
for (let i = 0; i < factureTable.length; i++) {
    myIdString = factureTable[i].id;

}

// for (let i = 0; i < iconsCaches.length; i++) {

//     iconsCaches[i].innerHTML = `<i class="fa-solid fa-arrow-down-z-a">`
//     i = i + 1
//     firstLine.querySelectorAll('th')[i].addEventListener('click', () => {
//         iconsCaches[i].classList.remove('hidden');
//         console.log('hello');
//     });
//     i = i - 1;
// }


// Fonction de comparaison pour trier en fonction de la propriété 'name'
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


localStorage.setItem('dataFacture', JSON.stringify(factureTable));
const dataOfFacture = JSON.parse(localStorage.getItem('dataFacture'));
let compteurClick = 0

// Get button element


// Get icon elements
const icon1 = document.querySelectorAll('.un');
const icon2 = document.querySelectorAll('.deux');


let currentIcon = 1;
let j;



const add = ()=>{
    if (currentIcon === 1) {
        const dataOfFacture = JSON.parse(localStorage.getItem('dataFacture'));
        dataFacture.innerHTML = ""
        dataOfFacture.forEach(element =>{
            dataFacture.innerHTML += `<tr><td>${element.id}</td> <td>${element.name}</td><td>${element.date}</td><td><button class='btn'>Voir</button></td></tr>`
        })
      
        icon1[j].style.display = 'inline-block';
        icon2[j].style.display = 'none';
        console.log(icon1[0]);
        currentIcon = 2;
        console.log(icon1);
        console.log(typeof a);
    } else {
        icon2[j].style.display = 'inline-block';
        icon1[j].style.display = 'none';
        currentIcon = 1;
        dataFacture.innerHTML = ""
      sort()
        dataFacture.innerHTML = ""
        dataOfFacture.forEach((value, index) => {
            dataFacture.innerHTML += `<tr><td>${value.id}</td> <td>${value.name}</td><td>${value.date}</td><td><button class='btn'>Voir</button></td></tr>`
        })
        console.log(icon2);
    }
 
    console.log(currentIcon);
}
theMarg.addEventListener('click', () => {
   j = 0
   add()
});
for (let i = 1; i < 3; i++) {
    firstLine.querySelectorAll('th')[i].addEventListener('click', () => {
   j = i
        add()
});
}
if (dataFacture) {
    dataOfFacture.forEach((element, indice) => {
   
            dataFacture.innerHTML += `<tr><td>${element.id}</td> <td>${element.name}</td><td>${element.date}</td><td><button class='btn'>Voir</button></td></tr>`
        newTable.push(element.id);
        tableOfLabo.push(element.name);
        tableOfdate.push(element.date);

        
    
    });
  

}
function compare(a) {
    a = "Enval"
}
const soumetre = (event) => {
    event.preventDefault();
}
fatureInputResearsh.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        dataFacture.innerHTML = ""
        dataOfFacture.sort(compareNames);

        if (fatureInputResearsh.value !== "") {
            if (fatureInputResearsh.value === "enval" || fatureInputResearsh.value === "env" || fatureInputResearsh.value === "Enval") {
                let TableOfEnval = dataOfFacture.filter((item) => item.name === 'Enval')

                TableOfEnval.forEach((value, indice) => {
                    dataFacture.innerHTML += `<tr><td>${value.id}</td> <td>${value.name}</td><td>${value.date}</td><td><button class='btn'>Voir</button></td></tr>`
                });
            }
            else if (fatureInputResearsh.value === "biologie" || fatureInputResearsh.value === "bio" || fatureInputResearsh.value === "Biologie") {
                let TableOfEnval = dataOfFacture.filter((item) => item.name === 'Biologie')
                TableOfEnval.forEach((value, indice) => {
                    dataFacture.innerHTML += `<tr><td>${value.id}</td> <td>${value.name}</td><td>${value.date}</td><td><button class='btn'>Voir</button></td></tr>`
                });
            }
            else if (fatureInputResearsh.value === "biochimie" || fatureInputResearsh.value === "bioc" || fatureInputResearsh.value === "Biochimie") {
                let TableOfEnval = dataOfFacture.filter((item) => item.name === 'Biochimie')
                TableOfEnval.forEach((value, indice) => {
                    dataFacture.innerHTML += `<tr><td>${value.id}</td> <td>${value.name}</td><td>${value.date}</td><td><button class='btn'>Voir</button></td></tr>`
                });
            }
            else if (fatureInputResearsh.value === "géologie" || fatureInputResearsh.value === "géo" || fatureInputResearsh.value === "Géologie") {
                let TableOfEnval = dataOfFacture.filter((item) => item.name === 'Géologie')
                TableOfEnval.forEach((value, indice) => {
                    dataFacture.innerHTML += `<tr><td>${value.id}</td> <td>${value.name}</td><td>${value.date}</td><td><button class='btn'>Voir</button></td></tr>`
                });
            }
            else {
                dataFacture.innerHTML = `<tr><td colspan="4">Aucune donner à afficher</td></tr>`
            }
        }
    }
})