const charactersEl = document.getElementById('characters');
const nameFilterEl = document.getElementById('name-filter');

const statusFilterEl = document.getElementById('status-filter');

async function Personajes (name, status){

    let url = 'https://rickandmortyapi.com/api/character/';


    if (name || status){
        url += '?';

        if(name){
            url += `name=${name}&`;
        }

        if(status){
            url += `status=${status}`;
        }
    }
    const response = await fetch(url);
    const data = await response.json(); 

    return data.results;

}
async function MostrarPersonajes (name, status) {
    
    const characters = await Personajes(name, status);
    
    charactersEl.innerHTML = '';

    for( let character of characters ){
        const card = document.createElement('div');
        card.classList.add('character-card');

        card.innerHTML = `
            <img src="${character.image}" />
            <h2> ${character.name} </h2>
            <p> Status: ${character.status} </p>
            <p> Especie: ${character.species} </p>
        `;
        charactersEl.appendChild(card);
    }

}

MostrarPersonajes();

nameFilterEl.addEventListener('input', () => {
    MostrarPersonajes(nameFilterEl.value, statusFilterEl.value );
});

statusFilterEl.addEventListener('change', () => {
    MostrarPersonajes(nameFilterEl.value, statusFilterEl.value );
});