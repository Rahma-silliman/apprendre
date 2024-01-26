const dataFacture = document.querySelector('#factureTbody');
const fatureInputResearsh = document.querySelector('#inputValue')
const iconsSearsh = document.querySelector('#iconsCache');
const iconsCaches = document.querySelectorAll('.iconsCache')
const theMarg = document.querySelector('#rech-facture');
const firstLine = document.querySelector('#marge');


function reversed() {
    newTable.reverse()
}

let newTable = [];
let tableOfLabo = [];
let tableOfdate = [];
let myIdString
const { id, name, date } = factureTable
for (let i = 0; i < factureTable.length; i++) {
    myIdString = factureTable[i].id;

}

for (let i = 0; i < iconsCaches.length; i++) {

    iconsCaches[i].innerHTML = `<i class="fa-solid fa-arrow-down-z-a">`
    i = i + 1
    firstLine.querySelectorAll('th')[i].addEventListener('click', () => {
        iconsCaches[i].classList.remove('hidden');
        console.log('hello');
    });
    i = i - 1;
}


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
const icon1 = document.querySelector('.un');
const icon2 = document.querySelector('.deux');

// Initialize a variable to keep track of which icon is currently visible
let currentIcon = 1;

// Add click event listener to button
theMarg.addEventListener('click', () => {
    // Toggle display of icons based on the current icon
    if (currentIcon === 1) {
        icon1.style.display = 'none';
        icon2.style.display = 'block';
        currentIcon = 2;
    } else {
        icon1.style.display = 'block';
        icon2.style.display = 'none';
        currentIcon = 1;
    }
    console.log(currentIcon);
});

if (dataFacture) {
    dataOfFacture.forEach((element, indice) => {

        dataFacture.innerHTML += `<tr><td>${element.id}</td> <td>${element.name}</td><td>${element.date}</td><td><button class='btn'>Voir</button></td></tr>`
        newTable.push(element.id);
        tableOfLabo.push(element.name);
        tableOfdate.push(element.date);
        theMarg.addEventListener('click', () => {
            if (compteurClick === 2) {
                dataFacture.innerHTML = ""
                let tableRenversed = newTable.reverse();
                let tableReversedOfName = tableOfLabo.reverse();
                let tableRenversedOfDate = tableOfdate.reverse()
                for (let i = 0; i < tableOfdate.length; i++) {
                    dataFacture.innerHTML += `<tr><td>${newTable[i]}</td><td>${tableOfLabo[i]}</td><td>${tableOfdate[i]}</td><td><button class='btn'>Voir</button></td></tr>`
                }
}
        });
    });
    for (let i = 1; i < 3; i++) {
            firstLine.querySelectorAll('th')[i].addEventListener('click', () => {
            dataOfFacture.sort(compareNames);
            dataFacture.innerHTML = ""
            dataOfFacture.forEach((value, index) => {
                dataFacture.innerHTML += `<tr><td>${value.id}</td> <td>${value.name}</td><td>${value.date}</td><td><button class='btn'>Voir</button></td></tr>`
            })
        });
    }

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