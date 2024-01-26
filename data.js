
const factureTable = [
    {
        id: '00001',
        name: 'Enval',
        date: '10/03/2023'
    },

    {
        id: '00002',
        name: 'Biochimie',
        date: '10/03/2023'
    },
    {
        id: '00003',
        name: 'Biologie',
        date: '11/03/2023'
    },

    {
        id: '00004',
        name: 'Biologie',
        date: '12/03/2023'
    },
    {
        id: '00005',
        name: 'Enval',
        date: '12/03/2023'
    },

    {
        id: '00006',
        name: 'Biochimie',
        date: '12/03/2023'
    },
    {
        id: '00007',
        name: 'Enval',
        date: '13/03/2023'
    },

    {
        id: '00008',
        name: 'Géologie',
        date: '13/03/2023'
    },
    {
        id: '00009',
        name: 'Enval',
        date: '13/03/2023'
    }
]
const commandeTableau = [
    {
        id:'000001',
       name:'Enval',
        date:'10/03/2023',
        statut:'En cours'
    },
    {
        id:'000002',
        name:'Codeloccol',
        date:'10/03/2023',
        statut:'En cours'
    },
    {
        id:'000003',
        name:'ANSI',
        date:'12/03/2023',
        statut:'Terminée'
    },
    {
        id:'000004',
        name:'CIPMEN',
        date:'12/03/2023',
        statut:'En cours'
    },
    {
        id:'000005',
        name:'ADU',
        date:'13/03/2023',
        statut:'Terminée'
    },
    {
        id:'000006',
        name:'codeloccol',
        date:'14/03/2023',
        statut:'En cours'
    },
    {
        id:'000007',
        name:'Enval',
        date:'14/03/2023',
        statut:'En cours'
    },
    {
        id:'000008',
        name:'ANSI',
        date:'15/03/2023',
        statut:'En cours'
    },
    {
        id:'000009',
        name:'Enval',
        date:'10/03/2023',
        statut:'En cours'
    },
    {
        id:'000010',
        name:'ADU',
        date:'18/03/2023',
        statut:'Terminée'
    }
]
const suiviTableau = [
    {
        id:'TE202303001',
        name:'Reçu',
        date:'12/03/2023',
        rapport:'Disponible'
    },
    {
        id:'E202302023',
        name:'Non Reçu',
        date:'12/03/2023',
        rapport:'Non disponible'
    },
    {
        id:'TE20230190',
        name:'Reçu',
        date:'12/03/2023',
        rapport:'Non disponible'
    },
    {
        id:'Carbonate',
        name:'Reçu',
        date:'12/03/2023',
        rapport:'Disponible'
    },
    {
        id:'Chlorure',
        name:'Non Reçu',
        date:'13/03/2023',
        rapport:'Non disponible'
    },
    {
        id:'CO2 libre',
        name:'Reçu',
        date:'14/03/2023',
        rapport:'Disponible'
    },
    {
        id:'Conductivité electrique',
        name:'Non Reçu',
        date:'14/03/2023',
        rapport:'Non disponible'
    },
    {
        id:'pH/Temperature',
        name:'Reçu',
        date:'15/03/2023',
        rapport:'Disponible'
    },
    {
        id:'Couleur Brute',
        name:'Reçu',
        date:'10/03/2023',
        rapport:'Non disponible'
    },
    {
        id:'Cyanure libre',
        name:'Reçu',
        date:'18/03/2023',
        rapport:'Disponible'
    }
]
const image2 = document.getElementById('mieu');
let filerecupere = localStorage.getItem('photo');
    if(filerecupere){
        image2.src = filerecupere}
     

