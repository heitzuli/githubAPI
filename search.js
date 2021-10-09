let smileys;

function getJSON(url) {
    // Fetches from given URL
    return fetch(url)
        // Turns it into json
        .then(function (response) {
            return response.json();
        })
}

function initialize() {
    (async () => {
        const searchField = document.getElementById('search');
        smileys = await getJSON(config.baseURL + 'emojis');
        searchField.disabled = false;
        searchField.value = '';
    })();
}

function createSmileysList(elementId, data) {
    const element = document.getElementById(elementId);
    element.innerHTML = Object.keys(data)
        .map(key => `${key} <img src="${data[key]}"/><br/>`).join('');
}

function search() {
    const searchTerm = document.getElementById('search').value;
    const foundIt = smileys.hasOwnProperty(searchTerm);
    console.log(searchTerm);
    console.log(smileys.hasOwnProperty(searchTerm));
    if (foundIt) {
        console.log(smileys[searchTerm]);
    }
}