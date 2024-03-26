const pageSizeSelect = document.querySelector('#pageSize');
const searchInput = document.querySelector('#searchInput');
const heroTable = document.querySelector('#heroTable');

let pageSize = parseInt(pageSizeSelect.value);
let allHeroes = [];

function fetchData() {
    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
        .then(response => response.json())
        .then(data => {
            // data va etre les données l'api (sous forme d'object) 
            // on utilise la methode map on (on pouvez aussi utiliser filter) pour recuperer
            // only les données dons on a besoin
            allHeroes = data.map(hero => ({
                icon: hero.images.xs,
                name: hero.name,
                fullName: hero.biography.fullName,
                powerstats: hero.powerstats,
                race: hero.appearance.race,
                gender: hero.appearance.gender,
                height: hero.appearance.height[0],
                weight: hero.appearance.weight[0],
                placeOfBirth: hero.biography.placeOfBirth,
                alignment: hero.biography.alignment
            }));
            handlePageSizeChange(allHeroes);
        });
}

function renderTable(data) {
    heroTable.innerHTML = '';

    const headers = Object.keys(data[0]);
    // ligne 
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        // header
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    heroTable.appendChild(headerRow);


    data.forEach(hero => {
        // ligne de l'hero
        const tr = document.createElement('tr');
        // on boucle içi sur les infos du current hero
        for (const key in hero) {
            // vu qu'il y a plusieur values dans l'api on s'assure que celui-ci est pour ce hero
            if (hero.hasOwnProperty(key)) {
                // balise pour remplir les cellules
                const td = document.createElement('td');
                const value = hero[key];

                if (value !== null && value !== undefined) {
                    // les infos se presentent sous plusieur formes alors on verifie pour chaque types
                    if (Array.isArray(value)) {
                        td.textContent = value.join(', ');
                    } else if (typeof value === 'object' && !Array.isArray(value)) {
                        const formattedObject = {};
                        for (const propri in value) {
                            formattedObject[propri] = `${propri}:${value[propri]}\n`;
                        }
                        const formattedValues = Object.values(formattedObject);
                        td.textContent = formattedValues.join(' ');
                    } else if (typeof value === 'string' && value.startsWith('http')) {
                        // il faut creer la balise img pour afficher l'image
                        const img = document.createElement('img');
                        // là on set les attribues
                        img.src = value;
                        img.alt = 'icon';
                        td.appendChild(img);
                    } else {
                        // cas ou le type est juste un string
                        td.textContent = value;
                    }
                }
                // ajout cellule a la ligne
                tr.appendChild(td);
            }
        }
        // ajout ligne au tableau
        heroTable.appendChild(tr);
    });
}

function handlePageSizeChange(searchData) {
    pageSize = parseInt(pageSizeSelect.value);
    const searchDataArray = Object.values(searchData);
    renderTable(searchDataArray.slice(0, pageSize));
}


function handleSearchInput(searchData) {
    const filteredData = searchData.filter(hero => {
        return hero.name.toLowerCase().includes(searchInput.value.toLowerCase());
    });
    renderTable(filteredData);
}

pageSizeSelect.addEventListener('change', () => {
    handlePageSizeChange(allHeroes)
});
searchInput.addEventListener('input', () => {
    handleSearchInput(allHeroes)
});

fetchData();